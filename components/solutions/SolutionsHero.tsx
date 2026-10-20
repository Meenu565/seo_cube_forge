"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, CheckCircle2, RefreshCw, Cpu, Layers } from "lucide-react";


const BRANDS = [
  { name: "Northwind", subtitle: "Outdoor Apparel" },
  { name: "Alderfield", subtitle: "Modern FinTech" },
  { name: "Basecrew", subtitle: "Logistics Cloud" },
  { name: "Portside", subtitle: "Capital Partners" },
  { name: "Marrow & Co.", subtitle: "Creative Agency" }
];

export default function SolutionsHero() {
  const [activeStep, setActiveStep] = useState(2); // 0: Research, 1: Strategy, 2: Content draft

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#faf9fe] via-white to-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#8763e5]/10 via-[#d79de4]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#8763e5]/20 bg-[#8763e5]/5 px-4 py-1.5 text-[13px] font-medium text-[#7852dc] mb-6 shadow-2xs"
            >
              <Sparkles size={14} className="text-[#8763e5]" />
              <span className="font-sans font-medium text-xs tracking-wider">The Autonomous Content Operating System</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-black leading-tight font-sans"
            >
              Turn one idea<br />
              into a complete<br />
              <span className="bg-gradient-to-r from-[#d79de4] via-[#8763e5] to-[#d79de4] bg-clip-text text-transparent not-italic font-normal">campaign.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed font-normal font-sans"
            >
              CubeForgeLabs gives marketing teams a single system for research, strategy, content, and distribution — powered by agents that already know your brand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8763e5] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#8763e5]/25 transition-all hover:bg-[#7852dc] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a demo</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={() => {
                  const element = document.getElementById("stage-system");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-[15px] font-semibold text-black hover:bg-black/5 transition-all"
              >
                <Play size={14} className="fill-black text-black" />
                <span>Watch overview</span>
              </button>
            </motion.div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center gap-3 text-xs text-black/50 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SOC2 Type II Certified • Zero Human Copy-Pasting • Direct API Sync</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Hero Brief Widget */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-br from-[#ece8fb] via-[#f3efff] to-[#e4defe] p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(135,99,229,0.18)] border border-[#8763e5]/20 backdrop-blur-xl"
            >
              {/* Background ambient lighting */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8763e5]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8763e5]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Main Card Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 font-mono">
                    CAMPAIGN BRIEF
                  </span>
                  
                  {/* Status Pill */}
                  <div className="flex items-center gap-2 rounded-full bg-black/85 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>Agent active</span>
                  </div>
                </div>

                <h3 className={`mt-3 text-2xl font-medium tracking-tight text-neutral-900 `}>
                  Northwind Fall Launch
                </h3>
                <p className="mt-1 text-xs text-black/60">
                  Omni-channel rollout across 𝕏, LinkedIn, Instagram, and Blog
                </p>
              </div>

              {/* Workflow Status Box (Boxes styled per Screenshot 1) */}
              <div className="relative z-10 mt-6 space-y-3 rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-black/5">
                
                {/* Row 1: Research */}
                <div 
                  onClick={() => setActiveStep(0)}
                  className={`flex items-center justify-between p-3 rounded-xl transition cursor-pointer ${activeStep === 0 ? "bg-[#8763e5]/10 border border-[#8763e5]/20" : "hover:bg-neutral-50"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black">Research</div>
                      <div className="text-[11px] text-black/50">Audience & competitor analysis</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                    Done
                  </span>
                </div>

                {/* Row 2: Strategy */}
                <div 
                  onClick={() => setActiveStep(1)}
                  className={`flex items-center justify-between p-3 rounded-xl transition cursor-pointer ${activeStep === 1 ? "bg-[#8763e5]/10 border border-[#8763e5]/20" : "hover:bg-neutral-50"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black">Strategy</div>
                      <div className="text-[11px] text-black/50">4-tier channel messaging plan</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                    Done
                  </span>
                </div>

                {/* Row 3: Content Draft */}
                <div 
                  onClick={() => setActiveStep(2)}
                  className={`flex items-center justify-between p-3 rounded-xl transition cursor-pointer ${activeStep === 2 ? "bg-[#8763e5]/10 border border-[#8763e5]/20" : "hover:bg-neutral-50"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8763e5]/15 text-[#8763e5]">
                      <RefreshCw size={14} className="animate-spin" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black">Content draft</div>
                      <div className="text-[11px] text-black/50">Generating 24 multi-tone assets</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#8763e5]/15 px-2.5 py-0.5 text-xs font-semibold text-[#7852dc] animate-pulse">
                    In progress
                  </span>
                </div>
              </div>

              {/* Real-time telemetry mini badge */}
              <div className="relative z-10 mt-4 flex items-center justify-between px-2 text-[11px] text-black/60">
                <span className="flex items-center gap-1.5 font-medium">
                  <Cpu size={13} className="text-[#8763e5]" />
                  6 specialized agents synchronized
                </span>
                <span className="font-mono text-[#7852dc] font-semibold">Latency: 180ms</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Brand Logos Bar */}
        <div className="mt-20 border-t border-black/5 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-black/40">
            Trusted by modern marketing teams & fast-growing brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 hover:opacity-100 transition-opacity">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="group flex flex-col items-center">
                <span className={`text-xl font-medium tracking-tight text-neutral-800 transition group-hover:text-[#8763e5] `}>
                  {brand.name}
                </span>
                <span className="text-[10px] text-black/40 font-medium">
                  {brand.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
