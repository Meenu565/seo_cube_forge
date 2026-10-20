"use client";

import React, { useEffect, useRef, useState } from "react";


export default function CinematicMotionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1.0;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.05 });

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between px-6 md:px-16 py-12 md:py-16">
      {/* Hardware-Accelerated Background Dragonfly Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 [will-change:transform]"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/videos/dragonflies.mp4"
      />

      {/* Top Dissolve Gradient (Melts smoothly from SereneQuote #000000 to video) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#000000] via-[#000000]/60 to-transparent pointer-events-none z-10" />

      {/* Bottom Dissolve Gradient (Melts video smoothly into Footer CTA #050505) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none z-10" />

      {/* Center Cinematic Statement (Clean Readable Typography over Dragonfly Video) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 my-auto pt-10">
        <h3 className="font-sans font-light tracking-tight text-white/95 text-2xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.25] max-w-3xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
          Generative 3D motion synthesis designed for spatial storytelling and high-impact visual campaigns.
        </h3>
      </div>



      {/* Bottom 3 Sentences (Positioned Far-Left, Center, Far-Right per user arrows) */}
      <div className="relative z-20 w-full max-w-none grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-4 px-2 sm:px-4">
        {/* Sentence 1 (Far-Left) */}
        <div className="flex flex-col gap-1.5 text-left max-w-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="font-sans font-medium text-[11px] text-purple-300 tracking-[0.2em] uppercase">
              01 / SPATIAL DYNAMICS
            </span>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-white/85 leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Photorealistic lighting & physics-driven movement.
          </p>
        </div>

        {/* Sentence 2 (Center) */}
        <div className="flex flex-col gap-1.5 text-left md:text-center max-w-sm mx-auto">
          <div className="flex items-center gap-2 md:justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="font-sans font-medium text-[11px] text-purple-300 tracking-[0.2em] uppercase">
              02 / NEURAL RENDERING
            </span>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-white/85 leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            High-speed frame interpolation & studio 4K export.
          </p>
        </div>

        {/* Sentence 3 (Far-Right) */}
        <div className="flex flex-col gap-1.5 text-left md:text-right max-w-sm ml-auto">
          <div className="flex items-center gap-2 md:justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="font-sans font-medium text-[11px] text-purple-300 tracking-[0.2em] uppercase">
              03 / AUTOMATED PIPELINE
            </span>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-white/85 leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Prompt-to-render camera control and visual styling.
          </p>
        </div>
      </div>
    </section>
  );
}






