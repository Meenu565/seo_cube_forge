"use client";

import { useEffect, useRef } from "react";

export default function SereneHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero-earth.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -mt-12 md:-mt-20 px-6 text-center">
        {/* Massive profile.png logo design */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <img
            src="/profile.png"
            alt="CubeForgeLabs Logo"
            className="h-48 sm:h-72 md:h-[420px] lg:h-[500px] xl:h-[560px] max-w-[95vw] w-auto object-contain mx-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Headline */}
        <h1 className="font-sans font-normal text-white text-[42px] sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.96] tracking-tight text-glow max-w-5xl">
          AI Content, Crafted.
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-lg md:text-xl font-normal font-sans leading-relaxed mt-5 md:mt-7 max-w-2xl">
          The unified AI engine for scripting, studio production, and automated multi-channel publishing.
        </p>
      </div>

      {/* Platform indicator (desktop only) */}
      <div className="hidden md:flex absolute bottom-8 left-8 items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
          <span className="block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="text-white/70 text-xs leading-tight">
          <p className="font-semibold text-white">CubeForgeLabs Engine</p>
          <p className="text-white/50">Multi-Channel Active</p>
        </div>
      </div>
    </section>
  );
}
