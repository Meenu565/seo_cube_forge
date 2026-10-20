"use client";

import React, { useCallback, useEffect, useId, useRef } from 'react';
import { gsap } from 'gsap';

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

export interface MaskedHeadingProps {
  text?: string;
  tag?: React.ElementType;
  mediaType?: 'image' | 'video';
  src?: string;
  poster?: string;
  fillScale?: number;
  parallax?: number;
  drift?: number;
  brightness?: number;
  saturation?: number;
  grayscale?: boolean;
  reveal?: 'rise' | 'wipe' | 'fade' | 'none';
  duration?: number;
  stagger?: number;
  trigger?: 'mount' | 'view' | 'hover';
  align?: 'left' | 'center' | 'right';
  weight?: number | string;
  tracking?: number;
  lineHeight?: number;
  textScale?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function MaskedHeading({
  text = 'Built for Creators',
  tag = 'h2',
  mediaType = 'image',
  src = '/videos/silk.webm',
  poster = '',
  fillScale = 1.25,
  parallax = 26,
  drift = 18,
  brightness = 1,
  saturation = 1,
  grayscale = false,
  reveal = 'rise',
  duration = 1.1,
  stagger = 0.09,
  trigger = 'view',
  align = 'center',
  weight = 800,
  tracking = -0.03,
  lineHeight = 1.06,
  textScale = 0.1,
  className = '',
  style,
  ...rest
}: MaskedHeadingProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const revealRef = useRef<HTMLSpanElement | null>(null);
  const mediaRef = useRef<HTMLSpanElement | null>(null);
  const glyphRef = useRef<SVGTextElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);
  const offsetRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const rawId = useId();
  const clipId = `mh-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const settingsRef = useRef({ fillScale, parallax, drift, brightness, saturation, grayscale, textScale });
  settingsRef.current = { fillScale, parallax, drift, brightness, saturation, grayscale, textScale };

  const place = useCallback(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;
    const s = settingsRef.current;
    const W = root.clientWidth;
    const H = root.clientHeight;
    const off = offsetRef.current;

    const maxX = Math.max(0, ((s.fillScale - 1) / 2) * W);
    const maxY = Math.max(0, ((s.fillScale - 1) / 2) * H);

    media.style.transform = `translate3d(${clamp(off.x, -maxX, maxX).toFixed(2)}px, ${clamp(off.y, -maxY, maxY).toFixed(2)}px, 0) scale(${s.fillScale})`;
  }, []);

  const sync = useCallback(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    const media = mediaRef.current;
    const glyph = glyphRef.current;
    if (!root || !measure || !glyph) return;
    const s = settingsRef.current;

    const calculatedFontSize = clamp(root.clientWidth * s.textScale, 36, 220);
    root.style.fontSize = `${calculatedFontSize.toFixed(1)}px`;

    if (media) {
      media.style.filter = `brightness(${s.brightness}) saturate(${s.saturation})${s.grayscale ? ' grayscale(1)' : ''}`;
    }

    const cs = window.getComputedStyle(measure);
    glyph.style.fontFamily = cs.fontFamily;
    glyph.style.fontSize = cs.fontSize;
    glyph.style.fontWeight = cs.fontWeight;
    glyph.style.fontStyle = cs.fontStyle;
    glyph.style.letterSpacing = cs.letterSpacing;

    place();
  }, [place]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(root);
    if (document.fonts?.ready) document.fonts.ready.then(sync).catch(() => {});

    let raf = 0;
    let last = performance.now();
    let clock = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      clock += dt;
      const s = settingsRef.current;
      const off = offsetRef.current;

      const dx = Math.sin(clock * 0.21) * s.drift;
      const dy = Math.cos(clock * 0.17) * s.drift * 0.6;

      const ease = 1 - Math.exp(-dt / 0.18);
      off.x += (off.tx + dx - off.x) * ease;
      off.y += (off.ty + dy - off.y) * ease;

      place();
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const s = settingsRef.current;
      if (s.parallax <= 0) return;
      const r = root.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / (r.width || 1)) * 2 - 1;
      const ny = ((e.clientY - r.top) / (r.height || 1)) * 2 - 1;
      offsetRef.current.tx = clamp(nx, -1, 1) * -s.parallax;
      offsetRef.current.ty = clamp(ny, -1, 1) * -s.parallax;
    };

    const onLeave = () => {
      offsetRef.current.tx = 0;
      offsetRef.current.ty = 0;
    };

    root.addEventListener('pointermove', onMove as any);
    root.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      root.removeEventListener('pointermove', onMove as any);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, [place, sync]);

  useEffect(() => {
    sync();
  }, [sync, text, tag, align, weight, tracking, lineHeight, textScale]);

  useEffect(() => {
    const root = rootRef.current;
    const layer = revealRef.current;
    const glyph = glyphRef.current;
    if (!root || !layer || !glyph) return;

    const riseDistance = () => (parseFloat(window.getComputedStyle(root).fontSize) || 48) * 1.15;

    const settle = () => {
      gsap.set(glyph, { y: 0 });
      gsap.set(layer, { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' });
    };

    const rest = () => {
      if (reveal === 'rise') {
        gsap.set(glyph, { y: riseDistance() });
      } else if (reveal === 'wipe') {
        gsap.set(layer, { clipPath: 'inset(0% 100% 0% 0%)' });
      } else if (reveal === 'fade') {
        gsap.set(layer, { opacity: 0, scale: 1.08 });
      }
    };

    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reveal === 'none' || reduce) {
      settle();
      return;
    }

    const play = () => {
      tweenRef.current?.kill();
      if (reveal === 'rise') {
        gsap.set(layer, { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        tweenRef.current = gsap.fromTo(
          glyph,
          { y: riseDistance() },
          { y: 0, duration, ease: 'power4.out', overwrite: 'auto' }
        );
      } else if (reveal === 'wipe') {
        gsap.set(glyph, { y: 0 });
        const state = { p: 100 };
        tweenRef.current = gsap.to(state, {
          p: 0,
          duration,
          ease: 'power3.inOut',
          overwrite: 'auto',
          onUpdate: () => {
            if (layer) layer.style.clipPath = `inset(0% ${state.p}% 0% 0%)`;
          }
        });
      } else {
        gsap.set(glyph, { y: 0 });
        tweenRef.current = gsap.fromTo(
          layer,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration, ease: 'power3.out', overwrite: 'auto' }
        );
      }
    };

    if (trigger === 'hover') {
      settle();
      root.addEventListener('pointerenter', play);
      return () => {
        root.removeEventListener('pointerenter', play);
        tweenRef.current?.kill();
      };
    }

    if (trigger === 'view') {
      settle();
      rest();
      const io = new IntersectionObserver(
        entries => {
          if (entries.some(e => e.isIntersecting)) {
            play();
            io.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      io.observe(root);
      return () => {
        io.disconnect();
        tweenRef.current?.kill();
      };
    }

    play();
    return () => tweenRef.current?.kill();
  }, [reveal, trigger, duration, text]);

  const Tag = tag as any;

  return (
    <Tag
      ref={rootRef}
      className={`relative w-full m-0 p-0 antialiased select-none ${className}`.trim()}
      style={{
        textAlign: align,
        fontWeight: weight,
        letterSpacing: `${tracking}em`,
        lineHeight,
        ...style
      }}
      {...rest}
    >
      {/* Hidden DOM Text for baseline layout measurement */}
      <span ref={measureRef} className="text-transparent inline-block whitespace-nowrap px-4 py-2">
        {text}
      </span>

      {/* SVG ClipPath with single centered SVG text element */}
      <svg className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <text
              ref={glyphRef}
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {text}
            </text>
          </clipPath>
        </defs>
      </svg>

      {/* Video / Image texture layer clipped by SVG clipPath */}
      <span ref={revealRef} className="absolute inset-0 block pointer-events-none drop-shadow-[0_0_25px_rgba(99,102,241,0.35)] drop-shadow-[0_0_50px_rgba(135,99,229,0.3)]">
        <span className="absolute inset-0 block" style={{ clipPath: `url(#${clipId})` }}>
          <span ref={mediaRef} className="absolute inset-0 block [will-change:transform]">
            {mediaType === 'video' ? (
              <div className="relative w-full h-full">
                <video
                  className="block w-full h-full object-cover select-none brightness-110 contrast-115"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                  src={src}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
            ) : (
              <img className="block w-full h-full object-cover select-none" src={src} alt="" draggable={false} />
            )}
          </span>
        </span>
      </span>
    </Tag>
  );
}

