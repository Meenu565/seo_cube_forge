"use client";

import { useEffect, useRef } from 'react';
import MaskedHeading from '@/components/site/MaskedHeading';

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function SereneQuote() {
  const sectionRef = useRef<HTMLElement>(null);

  // Current (lerped) animation state
  const state = useRef({
    revealOpacity: 0,
    revealY: 40,
  });

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const section = sectionRef.current;
      if (!section) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const s = state.current;
      const revealTarget = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.75)));
      s.revealOpacity = lerp(s.revealOpacity, revealTarget, 0.2);
      s.revealY = lerp(s.revealY, (1 - revealTarget) * 40, 0.2);
      
      section.style.opacity = String(s.revealOpacity);
      section.style.transform = `translate3d(0, ${s.revealY}px, 0)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden flex flex-col items-center justify-center py-28 bg-black"
      style={{
        backgroundColor: '#000000',
        opacity: 0,
        transform: 'translate3d(0, 40px, 0)',
      }}
    >
      {/* Top Dissolve Gradient (Melts Earth video softly into pure black section) */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-10" />

      {/* Main Single Sentence MaskedHeading & Plain Subtitle */}
      <div className="relative z-20 w-full max-w-7xl px-4 text-center flex flex-col items-center justify-center">
        <MaskedHeading
          text="Built for Creators"
          mediaType="video"
          src="/videos/silk.webm"
          fillScale={1.3}
          parallax={24}
          reveal="rise"
          trigger="view"
          drift={20}
          brightness={1.35}
          saturation={1.25}
          duration={1.1}
          stagger={0.09}
          align="center"
          weight={800}
          tracking={-0.03}
          lineHeight={1.05}
          textScale={0.11}
        />

        {/* Plain Supporting Subtitle */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-light tracking-wide text-zinc-400 max-w-3xl text-center leading-relaxed font-sans opacity-90 select-none">
          Engineered for visionary filmmakers, digital artists, and creative studios.
        </p>
      </div>

      {/* Bottom Dissolve Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
