"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";


export default function EngineCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a1a] py-24 sm:py-28 text-white">
      {/* Volumetric background lighting with refined brand purple tones */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#8763e5]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#53099d]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Star / Grid Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading, Subhead & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-[#d79de4] mb-6 backdrop-blur-md">
              <Sparkles size={13} className="text-[#d79de4]" />
              <span className={`text-[13px] tracking-wide `}>Full Platform Access</span>
            </span>

            {}
            <h2 className={`text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08] `}>
              See the full engine<br />
              in action.
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Walk through research, scripting, generation, compliance, and publishing in a single live session with our team.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-neutral-950 shadow-xl transition-all hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a demo</span>
                <ArrowRight size={16} className="text-neutral-950 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30"
              >
                <span>Talk to sales</span>
              </Link>
            </div>

            {/* Features check list */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/60">
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                Custom Brand IQ Setup
              </span>
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-[#d79de4]" />
                Direct API Sandbox
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                14-Day Free Pilot
              </span>
            </div>
          </div>

          {/* Right Column: 3D Geometric Polyhedral Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              
              {/* Outer Neon Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#8763e5]/40 animate-spin" style={{ animationDuration: "20s" }} />
              
              {/* Mid Layer Hexagon Frame */}
              <div className="absolute inset-4 rounded-3xl border border-[#d79de4]/40 rotate-12 backdrop-blur-xs" />
              
              {/* Central Glowing Polyhedral Cube */}
              <motion.div
                animate={{ rotateY: 360, rotateX: [0, 15, -15, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-2xl bg-gradient-to-tr from-[#8763e5]/40 via-[#53099d]/30 to-[#7852dc]/40 border-2 border-white/25 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(135,99,229,0.4)] backdrop-blur-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#d79de4] mb-3 shadow-inner">
                  <Sparkles size={28} />
                </div>
                <div className={`text-base font-medium text-white tracking-wide `}>
                  CubeForgeLabs
                </div>
                <div className="text-[11px] text-[#d79de4] font-medium mt-0.5">
                  Autonomous Engine
                </div>
              </motion.div>

              {/* Floating Orbit Badges */}
              <div className="absolute -top-2 left-10 rounded-full bg-black/85 px-3 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 shadow-lg backdrop-blur-md">
                ● 6 Agents Active
              </div>

              <div className="absolute -bottom-2 right-10 rounded-full bg-black/85 px-3 py-1 text-[11px] font-semibold text-[#d79de4] border border-[#8763e5]/30 shadow-lg backdrop-blur-md">
                ⚡ Direct API Ready
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
