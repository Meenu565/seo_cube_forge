"use client";

import React from "react";
import MagicRings from "@/components/MagicRings";
import LogoLoop from "@/components/LogoLoop";
import { Code2, Hexagon, FileCode2, Wind } from "lucide-react";

const techLogos = [
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm transition-all hover:scale-105">
        <Hexagon size={22} className="text-[#8763e5] fill-[#8763e5]/20" />
        <span className="text-neutral-900 font-sans font-bold text-base tracking-tight">Next.js</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm transition-all hover:scale-105">
        <FileCode2 size={22} className="text-[#8763e5]" />
        <span className="text-neutral-900 font-sans font-bold text-base tracking-tight">TypeScript</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm transition-all hover:scale-105">
        <Wind size={22} className="text-[#8763e5]" />
        <span className="text-neutral-900 font-sans font-bold text-base tracking-tight">Tailwind CSS</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm transition-all hover:scale-105">
        <Code2 size={22} className="text-[#8763e5]" />
        <span className="text-neutral-900 font-sans font-bold text-base tracking-tight">React</span>
      </div>
    )
  }
];

export default function OutputVolumeSection() {
  return (
    <section className="relative w-full bg-white py-28 md:py-40 overflow-hidden flex flex-col items-center justify-center border-y border-neutral-100">
      
      {/* Magic Rings Shader Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <MagicRings
          color="#8763e5"
          colorTwo="#6366F1"
          ringCount={6}
          speed={0.8}
          attenuation={7}
          lineThickness={1.8}
          baseRadius={0.12}
          radiusStep={0.06}
          scaleRate={0.16}
          opacity={0.85}
          blur={0}
          noiseAmount={0}
          rotation={30}
          ringGap={1.3}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.18}
          hoverScale={1.12}
          parallax={0.04}
          clickBurst={true}
        />
      </div>

      {/* Centered Content */}
      <div className="relative w-full max-w-7xl px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center pointer-events-none select-none">
        
        {/* 3D Logo Badge */}
        <div className="mb-6 p-4 rounded-3xl bg-white/90 border border-black/10 shadow-[0_8px_32px_rgba(135,99,229,0.18)] flex items-center justify-center backdrop-blur-md">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="cubeGradOutput" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d79de4"/>
                <stop offset="100%" stopColor="#8763e5"/>
              </linearGradient>
            </defs>
            <polygon points="50,8 88,28 50,48 12,28" fill="url(#cubeGradOutput)" opacity="0.95"/>
            <polygon points="12,28 50,48 50,92 12,72" fill="url(#cubeGradOutput)" opacity="0.7"/>
            <polygon points="50,48 88,28 88,72 50,92" fill="url(#cubeGradOutput)" opacity="0.55"/>
          </svg>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none mb-3">
          6 agents. 1 pipeline.
        </h2>
        <p className="text-neutral-500 font-medium text-lg max-w-md">
          Autonomous intelligence working in perfect harmony.
        </p>

        {/* Tech Marquee */}
        <div className="mt-12 w-full max-w-4xl relative pointer-events-auto">
          <LogoLoop
            logos={techLogos}
            speed={35}
            direction="left"
            logoHeight={48}
            gap={28}
            hoverSpeed={10}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Technology stack marquee"
          />
        </div>
      </div>

    </section>
  );
}
