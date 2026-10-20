"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  PenTool,
  Flame,
  Zap,
  Sparkles,
  Sliders,
  Layers,
  ShieldCheck,
  Palette,
  Wand2,
  Maximize2,
  LayoutGrid,
  Image as ImageIcon,
  Video,
  Film,
  Clapperboard,
  Play,
  Lock,
  RotateCcw,
  Calendar,
  CheckCircle2,
  BarChart3,
  DollarSign,
  Send,
  CheckCheck,
  TrendingUp,
  Share2,
} from "lucide-react";

// Interactive 3D Cube Component (Pure CSS 3D with 6 faces)
function Cube3D({
  size = 40,
  className = "",
  style = {},
  duration = 18,
  glow = "rgba(167, 139, 250, 0.4)",
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  glow?: string;
}) {
  const h = size / 2;
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          animation: `spin3d ${duration}s linear infinite`,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-300/40 bg-purple-500/15 backdrop-blur-[3px]"
          style={{
            transform: `translateZ(${h}px)`,
            boxShadow: `inset 0 0 12px rgba(167,139,250,0.25)`,
          }}
        />
        {/* Back */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-400/30 bg-purple-700/15 backdrop-blur-[3px]"
          style={{
            transform: `rotateY(180deg) translateZ(${h}px)`,
            boxShadow: `inset 0 0 12px rgba(135,99,229,0.2)`,
          }}
        />
        {/* Right */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-300/40 bg-purple-500/20 backdrop-blur-[3px]"
          style={{
            transform: `rotateY(90deg) translateZ(${h}px)`,
            boxShadow: `inset 0 0 12px rgba(167,139,250,0.3)`,
          }}
        />
        {/* Left */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-400/30 bg-purple-800/20 backdrop-blur-[3px]"
          style={{
            transform: `rotateY(-90deg) translateZ(${h}px)`,
            boxShadow: `inset 0 0 12px rgba(83,9,157,0.25)`,
          }}
        />
        {/* Top */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-200/60 bg-purple-400/25 backdrop-blur-[3px]"
          style={{
            transform: `rotateX(90deg) translateZ(${h}px)`,
            boxShadow: `0 0 24px ${glow}, inset 0 0 10px rgba(255,255,255,0.4)`,
          }}
        />
        {/* Bottom */}
        <div
          className="absolute inset-0 rounded-[4px] border border-purple-600/30 bg-purple-950/30 backdrop-blur-[3px]"
          style={{
            transform: `rotateX(-90deg) translateZ(${h}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default function FeaturesHero({ slug }: { slug?: string }) {
  const isCopy = slug === "copywriting-and-scripting";
  const isVisual = slug === "visual-and-media-generation";
  const isVideo = slug === "video-automation";
  const isCompliance = slug === "compliance-and-scheduling";
  const isPublish = slug === "publishing-and-analytics";
  const heroImage = isCopy 
    ? "/images/features/copy.png" 
    : isVisual 
    ? "/images/features/visual.png" 
    : isVideo
    ? "/images/features/video.png"
    : isCompliance
    ? "/images/features/compliance.png"
    : isPublish
    ? "/images/features/publish.png"
    : "/images/features/hero.jpg";

  const sectionRef = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

  // Handle scroll progress (0 to 1)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }
        const rect = sectionRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const progress = Math.min(Math.max((winH - rect.top) / (winH + rect.height), 0), 1);
        setScroll(progress);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track raw mouse position
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  // Smooth lerp for buttery 60fps 3D motion tracking
  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setSmoothMouse((prev) => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) {
          return mouse;
        }
        return {
          x: prev.x + dx * 0.07,
          y: prev.y + dy * 0.07,
        };
      });
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [mouse]);

  const p = scroll;
  const sp = (p - 0.5) * 2; // -1 to 1 scroll progression
  const mx = smoothMouse.x;
  const my = smoothMouse.y;

  // 3D scene rotational dynamics
  const tiltX = 6 - sp * 12 - my * 9;
  const tiltY = mx * 12;
  const tiltZ = mx * -1.8;
  const scale = 0.94 + p * 0.08;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full min-h-[105vh] overflow-hidden flex items-center justify-center py-16 select-none"
      style={{
        background: isCopy
          ? "radial-gradient(ellipse at 50% 35%, #38120b 0%, #1e0920 35%, #0d0317 70%, #05010a 100%)"
          : isVisual
          ? "radial-gradient(ellipse at 50% 35%, #071e3d 0%, #061329 35%, #030a17 70%, #01040a 100%)"
          : isVideo
          ? "radial-gradient(ellipse at 50% 35%, #2a0b36 0%, #160624 35%, #0a0214 70%, #030008 100%)"
          : isCompliance
          ? "radial-gradient(ellipse at 50% 35%, #062b19 0%, #03170e 35%, #010c07 70%, #000503 100%)"
          : isPublish
          ? "radial-gradient(ellipse at 50% 35%, #362205 0%, #1f1202 35%, #0d0700 70%, #050200 100%)"
          : "radial-gradient(ellipse at 50% 35%, #2a0e5f 0%, #17073b 35%, #0c0220 70%, #05010f 100%)",
      }}
    >
      {/* ── Volumetric Ambient Glow Spheres in Backside ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core center illumination */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] rounded-full blur-[140px]"
          style={{
            background: isCopy
              ? "radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(234,88,12,0.22) 45%, transparent 72%)"
              : isVisual
              ? "radial-gradient(circle, rgba(14,165,233,0.38) 0%, rgba(37,99,235,0.25) 45%, transparent 72%)"
              : isVideo
              ? "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(168,85,247,0.22) 45%, transparent 72%)"
              : isCompliance
              ? "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(5,150,105,0.22) 45%, transparent 72%)"
              : isPublish
              ? "radial-gradient(circle, rgba(234,179,8,0.38) 0%, rgba(217,119,6,0.22) 45%, transparent 72%)"
              : "radial-gradient(circle, rgba(135,99,229,0.42) 0%, rgba(83,9,157,0.28) 45%, transparent 72%)",
          }}
        />
        {/* Upper-left aura */}
        <div
          className="absolute -top-[12%] -left-[8%] w-[55vw] h-[55vh] rounded-full blur-[130px]"
          style={{
            background: isCopy
              ? "radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(245,158,11,0.15) 50%, transparent 70%)"
              : isVisual
              ? "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(14,165,233,0.15) 50%, transparent 70%)"
              : isVideo
              ? "radial-gradient(circle, rgba(244,114,182,0.28) 0%, rgba(217,70,239,0.15) 50%, transparent 70%)"
              : isCompliance
              ? "radial-gradient(circle, rgba(52,211,153,0.28) 0%, rgba(16,185,129,0.15) 50%, transparent 70%)"
              : isPublish
              ? "radial-gradient(circle, rgba(250,204,21,0.28) 0%, rgba(234,179,8,0.15) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(135,99,229,0.15) 50%, transparent 70%)",
          }}
        />
        {/* Lower-right beacon */}
        <div
          className="absolute -bottom-[10%] -right-[8%] w-[50vw] h-[50vh] rounded-full blur-[120px]"
          style={{
            background: isCopy
              ? "radial-gradient(circle, rgba(234,88,12,0.28) 0%, rgba(194,65,12,0.2) 45%, transparent 65%)"
              : isVisual
              ? "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(3,105,161,0.2) 45%, transparent 65%)"
              : isVideo
              ? "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(126,34,206,0.2) 45%, transparent 65%)"
              : isCompliance
              ? "radial-gradient(circle, rgba(5,150,105,0.28) 0%, rgba(4,120,87,0.2) 45%, transparent 65%)"
              : isPublish
              ? "radial-gradient(circle, rgba(217,119,6,0.28) 0%, rgba(180,83,9,0.2) 45%, transparent 65%)"
              : "radial-gradient(circle, rgba(135,99,229,0.28) 0%, rgba(83,9,157,0.2) 45%, transparent 65%)",
          }}
        />
      </div>

      {/* ── 3D Perspective Cyber Floor Grid ── */}
      <div
        className="absolute left-1/2 bottom-[-16%] -translate-x-1/2 w-[150vw] h-[75vh] pointer-events-none"
        style={{
          transform: `perspective(900px) rotateX(${68 + my * 4}deg) translateZ(-60px)`,
          transformOrigin: "center top",
          background: isCopy
            ? `
              linear-gradient(to bottom, rgba(245,158,11,0.32) 0%, rgba(234,88,12,0.08) 45%, transparent 80%),
              linear-gradient(rgba(251,191,36,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.18) 1px, transparent 1px)
            `
            : isVisual
            ? `
              linear-gradient(to bottom, rgba(14,165,233,0.32) 0%, rgba(37,99,235,0.08) 45%, transparent 80%),
              linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)
            `
            : isVideo
            ? `
              linear-gradient(to bottom, rgba(236,72,153,0.32) 0%, rgba(168,85,247,0.08) 45%, transparent 80%),
              linear-gradient(rgba(244,114,182,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244,114,182,0.18) 1px, transparent 1px)
            `
            : isCompliance
            ? `
              linear-gradient(to bottom, rgba(16,185,129,0.32) 0%, rgba(5,150,105,0.08) 45%, transparent 80%),
              linear-gradient(rgba(52,211,153,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52,211,153,0.18) 1px, transparent 1px)
            `
            : isPublish
            ? `
              linear-gradient(to bottom, rgba(234,179,8,0.32) 0%, rgba(217,119,6,0.08) 45%, transparent 80%),
              linear-gradient(rgba(250,204,21,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250,204,21,0.18) 1px, transparent 1px)
            `
            : `
              linear-gradient(to bottom, rgba(135,99,229,0.32) 0%, rgba(83,9,157,0.08) 45%, transparent 80%),
              linear-gradient(rgba(167,139,250,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167,139,250,0.18) 1px, transparent 1px)
            `,
          backgroundSize: "100% 100%, 54px 54px, 54px 54px",
          maskImage: "radial-gradient(ellipse at 50% 25%, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 25%, black 25%, transparent 75%)",
        }}
      />

      {/* ── Geometric Floating Sparkles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => {
          const size = 9 + (i % 4) * 3;
          const left = 5 + ((i * 23) % 90);
          const top = 8 + ((i * 37) % 84);
          return (
            <svg
              key={`c-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                opacity: 0.08 + (i % 3) * 0.05,
                animation: `drift ${6 + (i % 5)}s ease-in-out infinite ${(i % 4) * 1.2}s`,
              }}
              viewBox="0 0 12 12"
              fill="none"
            >
              <line x1="6" y1="1" x2="6" y2="11" stroke={isCopy ? "#fbbf24" : isVisual ? "#38bdf8" : isVideo ? "#f472b6" : isCompliance ? "#34d399" : isPublish ? "#facc15" : "#a78bfa"} strokeWidth="1" strokeLinecap="round" />
              <line x1="1" y1="6" x2="11" y2="6" stroke={isCopy ? "#fbbf24" : isVisual ? "#38bdf8" : isVideo ? "#f472b6" : isCompliance ? "#34d399" : isPublish ? "#facc15" : "#a78bfa"} strokeWidth="1" strokeLinecap="round" />
            </svg>
          );
        })}
      </div>

      {/* ── Main 3D Composition Space ── */}
      <div
        className="relative mx-auto max-w-[1240px] w-full px-6 flex items-center justify-center min-h-[720px]"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {/* ── 3D Rotating CubeForge Cubes Orbiting the Scene ── */}
        <div
          className="absolute left-[2%] top-[6%] z-30 hidden md:block"
          style={{
            transform: `translate3d(${mx * -28}px, ${my * -22 + sp * -35}px, 140px)`,
            transition: "transform 0.12s linear",
          }}
        >
          <Cube3D size={56} duration={16} glow={isCopy ? "rgba(251,191,36,0.6)" : isVisual ? "rgba(56,189,248,0.6)" : isVideo ? "rgba(244,114,182,0.6)" : isCompliance ? "rgba(52,211,153,0.6)" : isPublish ? "rgba(250,204,21,0.6)" : "rgba(167,139,250,0.6)"} />
        </div>

        <div
          className="absolute right-[8%] top-[4%] z-30 hidden md:block"
          style={{
            transform: `translate3d(${mx * -20}px, ${my * -16 + sp * -25}px, 95px)`,
            transition: "transform 0.12s linear",
          }}
        >
          <Cube3D size={42} duration={22} glow={isCopy ? "rgba(245,158,11,0.5)" : isVisual ? "rgba(14,165,233,0.5)" : isVideo ? "rgba(236,72,153,0.5)" : isCompliance ? "rgba(16,185,129,0.5)" : isPublish ? "rgba(234,179,8,0.5)" : "rgba(135,99,229,0.5)"} />
        </div>

        <div
          className="absolute right-[4%] bottom-[12%] z-25 hidden lg:block"
          style={{
            transform: `translate3d(${mx * -16}px, ${my * -14 + sp * -20}px, 80px)`,
            transition: "transform 0.12s linear",
          }}
        >
          <Cube3D size={34} duration={19} glow={isCopy ? "rgba(251,191,36,0.4)" : isVisual ? "rgba(56,189,248,0.4)" : isVideo ? "rgba(168,85,247,0.4)" : isCompliance ? "rgba(52,211,153,0.4)" : isPublish ? "rgba(250,204,21,0.4)" : "rgba(167,139,250,0.4)"} />
        </div>

        {/* ── Central 3D Showcase Plane ── */}
        <div
          className="relative z-20 w-full max-w-[1020px]"
          style={{
            transform: `
              rotateX(${tiltX}deg)
              rotateY(${tiltY}deg)
              rotateZ(${tiltZ}deg)
              scale(${scale})
            `,
            transformOrigin: "center 60%",
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: "transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* Intense Radial Backlight Halo */}
          <div
            className="absolute -inset-10 rounded-[48px] pointer-events-none"
            style={{
              background: isCopy
                ? `radial-gradient(ellipse at center, rgba(245,158,11,${0.28 + p * 0.18}) 0%, rgba(234,88,12,0.15) 50%, transparent 70%)`
                : isVisual
                ? `radial-gradient(ellipse at center, rgba(14,165,233,${0.28 + p * 0.18}) 0%, rgba(37,99,235,0.15) 50%, transparent 70%)`
                : isVideo
                ? `radial-gradient(ellipse at center, rgba(236,72,153,${0.28 + p * 0.18}) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)`
                : isCompliance
                ? `radial-gradient(ellipse at center, rgba(16,185,129,${0.28 + p * 0.18}) 0%, rgba(5,150,105,0.15) 50%, transparent 70%)`
                : isPublish
                ? `radial-gradient(ellipse at center, rgba(234,179,8,${0.28 + p * 0.18}) 0%, rgba(217,119,6,0.15) 50%, transparent 70%)`
                : `radial-gradient(ellipse at center, rgba(135,99,229,${0.28 + p * 0.18}) 0%, rgba(83,9,157,0.15) 50%, transparent 70%)`,
              filter: "blur(36px)",
              transform: "translateZ(-40px)",
            }}
          />

          {/* 3D Drop Shadow projected onto Cyber Floor */}
          <div
            className="absolute -bottom-14 left-[6%] right-[6%] h-24 rounded-[50%] blur-3xl pointer-events-none"
            style={{
              background: `rgba(6, 1, 18, ${0.7 + p * 0.2})`,
              boxShadow: isCopy
                ? "0 35px 90px 25px rgba(234, 88, 12, 0.35)"
                : isVisual
                ? "0 35px 90px 25px rgba(3, 105, 161, 0.45)"
                : isVideo
                ? "0 35px 90px 25px rgba(168, 85, 247, 0.45)"
                : isCompliance
                ? "0 35px 90px 25px rgba(5, 150, 105, 0.45)"
                : isPublish
                ? "0 35px 90px 25px rgba(217, 119, 6, 0.45)"
                : "0 35px 90px 25px rgba(83, 9, 157, 0.45)",
              transform: "translateZ(-90px) rotateX(70deg)",
            }}
          />

          {/* ── Device Frame with 3D Depth ── */}
          <div
            className="relative rounded-[22px] overflow-hidden border border-white/20"
            style={{
              boxShadow: isCopy
                ? `
                  0 35px 110px -20px rgba(234,88,12,0.5),
                  0 0 75px rgba(245,158,11,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `
                : isVisual
                ? `
                  0 35px 110px -20px rgba(3,105,161,0.6),
                  0 0 75px rgba(14,165,233,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `
                : isVideo
                ? `
                  0 35px 110px -20px rgba(168,85,247,0.6),
                  0 0 75px rgba(236,72,153,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `
                : isCompliance
                ? `
                  0 35px 110px -20px rgba(5,150,105,0.6),
                  0 0 75px rgba(16,185,129,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `
                : isPublish
                ? `
                  0 35px 110px -20px rgba(217,119,6,0.6),
                  0 0 75px rgba(234,179,8,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `
                : `
                  0 35px 110px -20px rgba(83,9,157,0.65),
                  0 0 75px rgba(135,99,229,${0.25 + p * 0.15}),
                  0 1px 0 rgba(255,255,255,0.3) inset
                `,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top specular border reflection */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-30" />

            {/* Dynamic Glass Glare moving with mouse angle */}
            <div
              className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-200"
              style={{
                background: `linear-gradient(${115 + mx * 28 + my * 18}deg, transparent 24%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.14) 48%, rgba(255,255,255,0.06) 54%, transparent 72%)`,
                mixBlendMode: "screen",
              }}
            />

            {/* Dynamic Platform Dashboard Image */}
            <img
              src={heroImage}
              alt={isCopy ? "CubeForge Copywriting & Scripting Engine" : isVisual ? "CubeForge Visual & Media Generation Engine" : isVideo ? "CubeForge Video Automation Engine" : isCompliance ? "CubeForge Compliance & Scheduling Engine" : isPublish ? "CubeForge Publishing & Cost Analytics Engine" : "CubeForge Platform Dashboard"}
              className="w-full h-auto block relative z-10"
              draggable={false}
            />
          </div>

          {/* ── Floating 3D Elements Popping Out in Z-Space ── */}

          {isCopy ? (
            /* COPYWRITING & SCRIPTING FLOATING 3D WIDGETS */
            <>
              {/* 1. Format Picker Deck — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[216px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(28, 14, 8, 0.90)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(245, 158, 11, 0.35)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(245, 158, 11, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-200/70">
                      Format Picker
                    </span>
                    <span className="text-[8px] font-medium text-amber-400">Active Preset</span>
                  </div>
                  {[
                    { format: "𝕏 Thread (8-Part)", sub: "2,400 Chars", color: "#1da1f2" },
                    { format: "LinkedIn Essay", sub: "450 Words", color: "#0a66c2" },
                    { format: "YouTube Script", sub: "10m Deep Dive", color: "#ff0000" },
                    { format: "Short-Form Reel", sub: "30s Fast Pace", color: "#e4405f" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(245, 158, 11, 0.12)" }}
                    >
                      <div
                        className="rounded flex items-center justify-center shadow-sm text-white font-bold text-[7px]"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        ✓
                      </div>
                      <div>
                        <div className="text-[9px] text-white/90 font-semibold leading-tight">{item.format}</div>
                        <div className="text-[7.5px] text-amber-200/40">{item.sub}</div>
                      </div>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(245, 158, 11, 0.25)", color: "#fef08a" }}
                      >
                        SYNCED
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Quill/Pen Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(245, 158, 11, 0.55), 0 0 25px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <PenTool className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>

              {/* 3. Hook Performance Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,158,11,0.92) 0%, rgba(234,88,12,0.92) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(234, 88, 12, 0.45), 0 0 30px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-amber-100/70 mb-1">
                    Top Converting Hook
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    +4.8x <span className="text-[11px] font-normal text-white/80">CTR uplift</span>
                  </div>
                  <div className="text-[8px] text-amber-100/70 mt-1">88% 3-sec retention hold</div>
                </div>
              </div>

              {/* 4. Generate Script Action Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(28, 14, 8, 0.94)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(245, 158, 11, 0.4)",
                    boxShadow: "0 14px 45px rgba(234, 88, 12, 0.45), 0 0 25px rgba(245, 158, 11, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Generate Multi-Hook Script</span>
                  <svg
                    className="h-3.5 w-3.5 text-amber-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Spoken Word Pace — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(28, 14, 8, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(245, 158, 11, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-amber-200/50 mb-0.5">
                    Spoken Word Pace
                  </div>
                  <div className="text-sm font-bold text-white">145 WPM</div>
                  <div className="text-[7.5px] text-amber-200/40">Grade 7 Clarity</div>
                </div>
              </div>

              {/* 6. Tone Guard Metric — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[175px]"
                  style={{
                    background: "rgba(28, 14, 8, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(245, 158, 11, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-amber-200/50 mb-0.5">
                    Tone Guard
                  </div>
                  <div className="text-[9.5px] font-semibold text-emerald-400">100% Brand Voice Match</div>
                  <div className="text-[8.5px] text-white/50">0 banned words detected</div>
                </div>
              </div>
            </>
          ) : isVisual ? (
            /* VISUAL & MEDIA GENERATION FLOATING 3D WIDGETS */
            <>
              {/* 1. Carousel Pipeline Deck — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[216px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(6, 18, 38, 0.90)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(14, 165, 233, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-sky-200/70">
                      Render Pipeline
                    </span>
                    <span className="text-[8px] font-medium text-sky-400">4-Slide Deck</span>
                  </div>
                  {[
                    { title: "Slide 1: Visual Hook", sub: "1080×1350 • Safe", color: "#0284c7" },
                    { title: "Slide 2: Infographic", sub: "High-DPI Vector", color: "#2563eb" },
                    { title: "Slide 3: Framework", sub: "Hex Color Mapped", color: "#6366f1" },
                    { title: "Slide 4: Conversion CTA", sub: "Auto-Watermarked", color: "#0ea5e9" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(56, 189, 248, 0.12)" }}
                    >
                      <div
                        className="rounded flex items-center justify-center shadow-sm text-white font-bold text-[7px]"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        ✓
                      </div>
                      <div>
                        <div className="text-[9px] text-white/90 font-semibold leading-tight">{item.title}</div>
                        <div className="text-[7.5px] text-sky-200/40">{item.sub}</div>
                      </div>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(14, 165, 233, 0.25)", color: "#bae6fd" }}
                      >
                        4K
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Palette Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(14, 165, 233, 0.55), 0 0 25px rgba(56, 189, 248, 0.4)",
                  }}
                >
                  <Palette className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>

              {/* 3. Prompt Engine Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(2,132,199,0.92) 0%, rgba(37,99,235,0.92) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(3, 105, 161, 0.45), 0 0 30px rgba(14, 165, 233, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-sky-100/70 mb-1">
                    Midjourney-Grade Engine
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    &lt; 1.4s <span className="text-[11px] font-normal text-white/80">render speed</span>
                  </div>
                  <div className="text-[8px] text-sky-100/70 mt-1">100% Brand Hex & Safe Zone Synced</div>
                </div>
              </div>

              {/* 4. Render 4K Carousel Set Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(6, 18, 38, 0.94)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 14px 45px rgba(3, 105, 161, 0.45), 0 0 25px rgba(14, 165, 233, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(56, 189, 248, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Render 4K Carousel Set</span>
                  <svg
                    className="h-3.5 w-3.5 text-sky-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Asset Fidelity — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(6, 18, 38, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-sky-200/50 mb-0.5">
                    Asset Fidelity
                  </div>
                  <div className="text-sm font-bold text-white">4K UHD</div>
                  <div className="text-[7.5px] text-sky-200/40">3840×2160 • High-DPI</div>
                </div>
              </div>

              {/* 6. Brand Kit Integration Metric — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[175px]"
                  style={{
                    background: "rgba(6, 18, 38, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-sky-200/50 mb-0.5">
                    Brand Kit Lock
                  </div>
                  <div className="text-[9.5px] font-semibold text-emerald-400">100% Palette & Hex Match</div>
                  <div className="text-[8.5px] text-white/50">Auto-watermark applied</div>
                </div>
              </div>
            </>
          ) : isVideo ? (
            /* VIDEO AUTOMATION FLOATING 3D WIDGETS */
            <>
              {/* 1. Scene Slicer Deck — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[220px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(24, 12, 38, 0.92)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(236, 72, 153, 0.35)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(236, 72, 153, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-200/70">
                      Scene Slicer
                    </span>
                    <span className="text-[8px] font-medium text-pink-400">4 Scenes</span>
                  </div>
                  {[
                    { title: "Scene 1: Visual Hook", sub: "0.0s – 3.2s • 60fps", color: "#ec4899" },
                    { title: "Scene 2: Contextual B-Roll", sub: "3.2s – 8.5s • 4K", color: "#a855f7" },
                    { title: "Scene 3: Narrative Tension", sub: "8.5s – 12.0s • 4K", color: "#8b5cf6" },
                    { title: "Scene 4: Climax & CTA", sub: "12.0s – 15.0s • 60fps", color: "#3b82f6" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(236, 72, 153, 0.12)" }}
                    >
                      <div
                        className="rounded flex items-center justify-center shadow-sm text-white font-bold text-[7px]"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        ▶
                      </div>
                      <div>
                        <div className="text-[9px] text-white/90 font-semibold leading-tight">{item.title}</div>
                        <div className="text-[7.5px] text-pink-200/40">{item.sub}</div>
                      </div>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(236, 72, 153, 0.25)", color: "#fbcfe8" }}
                      >
                        60fps
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Video Clapper Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(236, 72, 153, 0.55), 0 0 25px rgba(168, 85, 247, 0.4)",
                  }}
                >
                  <Video className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>

              {/* 3. Rendering Speed Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(236,72,153,0.92) 0%, rgba(139,92,246,0.92) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(168, 85, 247, 0.45), 0 0 30px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-pink-100/70 mb-1">
                    Kade Video Engine
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    &lt; 3.2s <span className="text-[11px] font-normal text-white/80">synth speed</span>
                  </div>
                  <div className="text-[8px] text-pink-100/70 mt-1">60fps • 100% Whisper v3 Audio Synced</div>
                </div>
              </div>

              {/* 4. Render 60fps Video Reel Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(24, 12, 38, 0.94)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(236, 72, 153, 0.4)",
                    boxShadow: "0 14px 45px rgba(168, 85, 247, 0.45), 0 0 25px rgba(236, 72, 153, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-pink-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(236, 72, 153, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Render 60fps Video Reel</span>
                  <svg
                    className="h-3.5 w-3.5 text-pink-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Audio Fidelity — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(24, 12, 38, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(236, 72, 153, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-pink-200/50 mb-0.5">
                    Audio Fidelity
                  </div>
                  <div className="text-sm font-bold text-white">48kHz Lossless</div>
                  <div className="text-[7.5px] text-pink-200/40">120 Normalized Waveform Peaks</div>
                </div>
              </div>

              {/* 6. Retention Score Metric — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[175px]"
                  style={{
                    background: "rgba(24, 12, 38, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(236, 72, 153, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-pink-200/50 mb-0.5">
                    Retention Curve
                  </div>
                  <div className="text-[9.5px] font-semibold text-emerald-400">94% 3-Sec Hold Score</div>
                  <div className="text-[8.5px] text-white/50">0 dropped frames detected</div>
                </div>
              </div>
            </>
          ) : isCompliance ? (
            /* COMPLIANCE & SCHEDULING FLOATING 3D WIDGETS */
            <>
              {/* 1. Audit Scan Matrix Deck — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[220px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(4, 28, 16, 0.92)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(16, 185, 129, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-200/70">
                      Audit Matrix
                    </span>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      4/4 Passed
                    </span>
                  </div>
                  {[
                    { title: "Safety Guardrails", sub: "50+ Categories • 0 Flags", color: "#10b981" },
                    { title: "Brand Voice Lock", sub: "100% Tone & Lexicon Sync", color: "#059669" },
                    { title: "Regulatory Check", sub: "0 Missing Disclaimers", color: "#047857" },
                    { title: "Auto-Regeneration", sub: "Active • 0ms Latency", color: "#14b8a6" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(16, 185, 129, 0.12)" }}
                    >
                      <div
                        className="rounded flex items-center justify-center shadow-sm text-white font-bold text-[7px]"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        ✓
                      </div>
                      <div>
                        <div className="text-[9px] text-white/90 font-semibold leading-tight">{item.title}</div>
                        <div className="text-[7.5px] text-emerald-200/40">{item.sub}</div>
                      </div>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(16, 185, 129, 0.25)", color: "#a7f3d0" }}
                      >
                        Pass
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Shield / Security Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(16, 185, 129, 0.55), 0 0 25px rgba(52, 211, 153, 0.4)",
                  }}
                >
                  <ShieldCheck className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>

              {/* 3. Governance Speed & Pass Rate Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.92) 0%, rgba(5,150,105,0.92) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(5, 150, 105, 0.45), 0 0 30px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-emerald-100/70 mb-1">
                    Nova Governance Engine
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    &lt; 420ms <span className="text-[11px] font-normal text-white/80">audit pass</span>
                  </div>
                  <div className="text-[8px] text-emerald-100/70 mt-1">100% Zero-Risk Brand & Legal Safety</div>
                </div>
              </div>

              {/* 4. Action CTA Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(4, 28, 16, 0.94)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(16, 185, 129, 0.4)",
                    boxShadow: "0 14px 45px rgba(5, 150, 105, 0.45), 0 0 25px rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(52, 211, 153, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Audit & Schedule Queue</span>
                  <svg
                    className="h-3.5 w-3.5 text-emerald-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Smart Timing Metric — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(4, 28, 16, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-emerald-200/50 mb-0.5">
                    Audience Peak Sync
                  </div>
                  <div className="text-sm font-bold text-white">Tue 7:30 PM</div>
                  <div className="text-[7.5px] text-emerald-200/40">24K Est. Reach • Optimal Slot</div>
                </div>
              </div>

              {/* 6. Regeneration Guardrail Metric — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[175px]"
                  style={{
                    background: "rgba(4, 28, 16, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-emerald-200/50 mb-0.5">
                    Auto-Regen Guard
                  </div>
                  <div className="text-[9.5px] font-semibold text-emerald-400">Active • 0 Faults</div>
                  <div className="text-[8.5px] text-white/50">Auto-rewrites failing chunks</div>
                </div>
              </div>
            </>
          ) : isPublish ? (
            /* PUBLISHING & COST ANALYTICS FLOATING 3D WIDGETS */
            <>
              {/* 1. Live Social Dispatch Deck — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[220px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(32, 20, 4, 0.92)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(234, 179, 8, 0.35)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(234, 179, 8, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-200/70">
                      Live Dispatch
                    </span>
                    <span className="text-[8px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                      3 Live • 1 Queued
                    </span>
                  </div>
                  {[
                    { title: "𝕏 / Twitter", sub: "Published • API 200 OK", color: "#eab308" },
                    { title: "LinkedIn", sub: "Published • Live Synced", color: "#d97706" },
                    { title: "Instagram", sub: "Dispatched • 4K Media", color: "#ca8a04" },
                    { title: "YouTube", sub: "Scheduled • 60fps", color: "#f59e0b" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(234, 179, 8, 0.12)" }}
                    >
                      <div
                        className="rounded flex items-center justify-center shadow-sm text-white font-bold text-[7px]"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        ✓
                      </div>
                      <div>
                        <div className="text-[9px] text-white/90 font-semibold leading-tight">{item.title}</div>
                        <div className="text-[7.5px] text-amber-200/40">{item.sub}</div>
                      </div>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(234, 179, 8, 0.25)", color: "#fef08a" }}
                      >
                        Live
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Analytics Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #eab308 0%, #b45309 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(234, 179, 8, 0.55), 0 0 25px rgba(250, 204, 21, 0.4)",
                  }}
                >
                  <BarChart3 className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>

              {/* 3. Compute & Cost Tracker Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(234,179,8,0.92) 0%, rgba(217,119,6,0.92) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(217, 119, 6, 0.45), 0 0 30px rgba(234, 179, 8, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-amber-100/70 mb-1">
                    Nova Cost Engine
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    $0.042 <span className="text-[11px] font-normal text-white/80">/ post avg</span>
                  </div>
                  <div className="text-[8px] text-amber-100/70 mt-1">100% Granular Token & GPU Audit</div>
                </div>
              </div>

              {/* 4. Action CTA Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(32, 20, 4, 0.94)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(234, 179, 8, 0.4)",
                    boxShadow: "0 14px 45px rgba(217, 119, 6, 0.45), 0 0 25px rgba(234, 179, 8, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(250, 204, 21, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Publish & Track Telemetry</span>
                  <svg
                    className="h-3.5 w-3.5 text-amber-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Closed-Loop Performance Metric — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(32, 20, 4, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(234, 179, 8, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-amber-200/50 mb-0.5">
                    Closed-Loop Learning
                  </div>
                  <div className="text-sm font-bold text-white">+380% ROI</div>
                  <div className="text-[7.5px] text-amber-200/40">Live feedback trains strategy</div>
                </div>
              </div>

              {/* 6. Direct API Authentication Metric — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[175px]"
                  style={{
                    background: "rgba(32, 20, 4, 0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(234, 179, 8, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-amber-200/50 mb-0.5">
                    Direct API Security
                  </div>
                  <div className="text-[9.5px] font-semibold text-emerald-400">OAuth 2.0 Active</div>
                  <div className="text-[8.5px] text-white/50">Zero third-party middleware</div>
                </div>
              </div>
            </>
          ) : (
            /* RESEARCH & STRATEGY FLOATING 3D WIDGETS (LOCKED) */
            <>
              {/* 1. Content Calendar — Floating Right Edge at Z: 110px */}
              <div
                className="absolute right-[-24px] md:right-[-48px] top-[14%] z-40 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -18}px, ${my * -14 + sp * -25}px, 110px) rotateX(${my * -6}deg) rotateY(${-6 + mx * 10}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="w-[208px] rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(18, 8, 40, 0.88)",
                    backdropFilter: "blur(28px)",
                    border: "1px solid rgba(167, 139, 250, 0.28)",
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.5),
                      0 0 35px rgba(135, 99, 229, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.15) inset
                    `,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-200/60">
                      Content Calendar
                    </span>
                    <span className="text-[8px] font-medium text-white/30">This Week ▾</span>
                  </div>
                  {[
                    { day: "Mon 18", platform: "LinkedIn", color: "#0a66c2" },
                    { day: "Tue 20", platform: "Twitter/X", color: "#1da1f2" },
                    { day: "Thu 22", platform: "Instagram", color: "#e4405f" },
                    { day: "Sat 24", platform: "YouTube", color: "#ff0000" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-1.5 border-b last:border-0"
                      style={{ borderColor: "rgba(167, 139, 250, 0.1)" }}
                    >
                      <div className="text-[9px] font-bold text-white/40 w-8">{item.day}</div>
                      <div
                        className="rounded flex items-center justify-center shadow-sm"
                        style={{ background: item.color, width: 17, height: 17 }}
                      >
                        <div className="h-1.5 w-1.5 rounded-sm bg-white/95" />
                      </div>
                      <span className="text-[9px] text-white/75 font-medium">{item.platform}</span>
                      <span
                        className="ml-auto text-[6px] font-bold rounded-full px-1.5 py-0.5"
                        style={{ background: "rgba(135, 99, 229, 0.35)", color: "#c4b5fd" }}
                      >
                        AI
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Holographic Search Badge — Floating Top Right at Z: 140px */}
              <div
                className="absolute right-[4%] top-[-8%] z-50"
                style={{
                  transform: `translate3d(${mx * -24}px, ${my * -18 + sp * -35}px, 140px) rotate(${-4 + p * 8 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #8763e5 0%, #53099d 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 14px 45px rgba(135, 99, 229, 0.55), 0 0 25px rgba(167, 139, 250, 0.4)",
                  }}
                >
                  <svg className="h-6 w-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>

              {/* 3. Trending Topics Card — Floating Bottom Left at Z: 100px */}
              <div
                className="absolute left-[3%] bottom-[-4%] z-45"
                style={{
                  transform: `translate3d(${mx * -16}px, ${my * -12 + sp * -18}px, 100px) rotateX(${my * -4}deg) rotateY(${4 + mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg, rgba(135,99,229,0.85) 0%, rgba(83,9,157,0.85) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 16px 50px rgba(83, 9, 157, 0.45), 0 0 30px rgba(135, 99, 229, 0.3)",
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-widest text-purple-200/60 mb-1">
                    Trending Topics
                  </div>
                  <div className="text-xl font-extrabold text-white leading-none">
                    12 <span className="text-[11px] font-normal text-white/60">new topics</span>
                  </div>
                  <div className="text-[8px] text-white/40 mt-1">found in your niche</div>
                </div>
              </div>

              {/* 4. Generate Strategy Action Button — Floating Bottom Right at Z: 125px */}
              <div
                className="absolute right-[2%] bottom-[-2%] z-45"
                style={{
                  transform: `translate3d(${mx * -22}px, ${my * -16 + sp * -22}px, 125px) rotateX(${my * -6}deg) rotateY(${mx * 8}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.09s linear",
                }}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-pointer group transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(18, 8, 40, 0.92)",
                    backdropFilter: "blur(26px)",
                    border: "1.5px solid rgba(167, 139, 250, 0.35)",
                    boxShadow: "0 14px 45px rgba(83, 9, 157, 0.45), 0 0 25px rgba(135, 99, 229, 0.25)",
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(52, 211, 153, 0.8)" }}
                  />
                  <span className="text-xs font-bold text-white tracking-wide">Generate Strategy</span>
                  <svg
                    className="h-3.5 w-3.5 text-purple-300 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* 5. Best Time To Post Metric — Floating Bottom Center at Z: 75px */}
              <div
                className="absolute left-[34%] bottom-[-5%] z-35 hidden md:block"
                style={{
                  transform: `translate3d(${mx * -12}px, ${my * -10 + sp * -12}px, 75px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.12s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "rgba(22, 10, 48, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(167, 139, 250, 0.22)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-purple-200/50 mb-0.5">
                    Best Time to Post
                  </div>
                  <div className="text-sm font-bold text-white">Tue 7:30 PM</div>
                  <div className="text-[7.5px] text-white/40">on LinkedIn</div>
                </div>
              </div>

              {/* 6. Audience Insight — Floating Right Mid at Z: 85px */}
              <div
                className="absolute right-[-15px] top-[54%] z-35 hidden lg:block"
                style={{
                  transform: `translate3d(${mx * -14}px, ${my * -10 + sp * -16}px, 85px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.11s linear",
                }}
              >
                <div
                  className="rounded-xl px-3.5 py-2.5 max-w-[170px]"
                  style={{
                    background: "rgba(22, 10, 48, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(167, 139, 250, 0.22)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="text-[7.5px] font-bold uppercase tracking-widest text-purple-200/50 mb-0.5">
                    Audience Insight
                  </div>
                  <div className="text-[9.5px] font-semibold text-white">Top pain point:</div>
                  <div className="text-[8.5px] text-white/50">finding affordable tools</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Keyframe Animations ── */}
      <style jsx>{`
        @keyframes spin3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
          }
        }
        @keyframes drift {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(3deg);
          }
          50% {
            transform: translateY(-2px) rotate(-2deg);
          }
          75% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
      `}</style>
    </section>
  );
}
