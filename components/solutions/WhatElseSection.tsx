"use client";

import React, { useState, useRef } from "react";
import { whatElseData } from "./solutionsData";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Sparkles, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  Target, 
  FileText, 
  Aperture, 
  Video, 
  Send,
  Zap,
  ArrowRight
} from "lucide-react";


const PILLARS = [
  { id: "research", label: "research", icon: Search, color: "#8763e5" },
  { id: "strategy", label: "strategy", icon: Target, color: "#3b82f6" },
  { id: "copy", label: "copy", icon: FileText, color: "#f59e0b" },
  { id: "visuals", label: "visuals", icon: Aperture, color: "#8763e5" },
  { id: "video", label: "video", icon: Video, color: "#10b981" },
  { id: "distribution", label: "distribution", icon: Send, color: "#7852dc" }
];

export default function WhatElseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPillar, setSelectedPillar] = useState<string>("research");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentIndex = PILLARS.findIndex(p => p.id === selectedPillar);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numPillars = PILLARS.length;
    const index = Math.min(numPillars - 1, Math.max(0, Math.floor(latest * numPillars)));
    setSelectedPillar(PILLARS[index].id);
  });

  const handlePillarClick = (pillarId: string) => {
    setSelectedPillar(pillarId);
    const idx = PILLARS.findIndex(p => p.id === pillarId);
    if (containerRef.current && idx !== -1) {
      const numPillars = PILLARS.length;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = scrollTop + rect.top + (idx / numPillars) * totalScrollableDistance + 10;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const currentData = whatElseData[selectedPillar] || whatElseData["research"];

  return (
    // Outer scroll container: 350vh height ensures smooth, controllable scrolling through all 6 capabilities
    <div ref={containerRef} className="relative h-[350vh] bg-gradient-to-b from-white via-[#faf9fe] to-white border-t border-black/5">
      
      {/* Sticky viewport container pins in place during scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white/95 backdrop-blur-xs">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#8763e5]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 w-full py-6">
          
          {/* Top Eyebrow & Progress Indicator */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
              WHAT ELSE CAN IT DO?
            </span>

            {/* Scroll Indicator Tag */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#7852dc] font-semibold">
                <span>Capability {currentIndex + 1} of 06</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#7852dc] animate-ping" />
              </div>

              {/* Progress Track Line */}
              <div className="w-28 h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-black/5">
                <div 
                  className="h-full bg-[#8763e5] transition-all duration-150 rounded-full"
                  style={{ width: `${Math.max(16, ((currentIndex + 1) / 6) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            
            {/* Left Column: Interactive Dynamic Headline & Mode Buttons */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {}
              <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-neutral-900 leading-[1.12] `}>
                Turn one idea into a complete{" "}
                <button
                  onClick={() => handlePillarClick("research")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "research"
                      ? "text-[#8763e5] underline decoration-[#8763e5] font-semibold not-italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#8763e5]"
                  }`}
                >
                  research
                </button>
                ,{" "}
                <button
                  onClick={() => handlePillarClick("strategy")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "strategy"
                      ? "text-[#3b82f6] underline decoration-[#3b82f6] font-semibold italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#3b82f6]"
                  }`}
                >
                  strategy
                </button>
                ,{" "}
                <button
                  onClick={() => handlePillarClick("copy")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "copy"
                      ? "text-[#f59e0b] underline decoration-[#f59e0b] font-semibold italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#f59e0b]"
                  }`}
                >
                  copy
                </button>
                ,{" "}
                <button
                  onClick={() => handlePillarClick("visuals")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "visuals"
                      ? "text-[#8763e5] underline decoration-[#8763e5] font-semibold italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#8763e5]"
                  }`}
                >
                  visuals
                </button>
                ,{" "}
                <button
                  onClick={() => handlePillarClick("video")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "video"
                      ? "text-[#10b981] underline decoration-[#10b981] font-semibold italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#10b981]"
                  }`}
                >
                  video
                </button>
                , and{" "}
                <button
                  onClick={() => handlePillarClick("distribution")}
                  className={`transition-all decoration-2 underline-offset-4 ${
                    selectedPillar === "distribution"
                      ? "text-[#7852dc] underline decoration-[#7852dc] font-semibold italic scale-105 inline-block"
                      : "text-neutral-900 hover:text-[#7852dc]"
                  }`}
                >
                  distribution
                </button>{" "}
                plan.
              </h2>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-black/65 leading-relaxed font-normal max-w-lg">
                Ask a question in plain language — CubeForgeLabs pulls audience data, competitor moves, and past campaign performance into one brief.
              </p>

              {/* Interactive Pillar Selector Buttons */}
              <div className="mt-7 flex flex-wrap gap-2">
                {PILLARS.map((p) => {
                  const isSelected = selectedPillar === p.id;
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handlePillarClick(p.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-all ${
                        isSelected
                          ? "bg-neutral-900 text-white shadow-md scale-105"
                          : "bg-white text-neutral-700 border border-black/10 hover:bg-neutral-100 hover:border-black/20"
                      }`}
                    >
                      <Icon size={14} className={isSelected ? "text-[#d79de4]" : "text-neutral-500"} />
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Live Interactive Card Preview */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPillar}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl shadow-[#8763e5]/10 border border-black/10 overflow-hidden"
                >
                  {/* Header Tag and Pills */}
                  <div className="flex items-center justify-between border-b border-black/5 pb-3.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-black/40">
                      Capability Preview: {currentData.label}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-[#8763e5]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#8763e5]">
                        {currentData.badge1}
                      </span>
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700">
                        {currentData.badge2}
                      </span>
                      <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 border border-amber-200/60">
                        {currentData.badge3}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="mt-4">
                    <h3 className={`text-xl font-medium tracking-tight text-neutral-900 `}>
                      {currentData.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                      {currentData.subtitle}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 rounded-2xl bg-[#faf9fe] p-3.5 border border-black/5 text-center">
                    {currentData.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-base sm:text-lg font-bold text-neutral-900 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-black/50 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-2">
                    {currentData.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-black/75">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-3.5 text-[11px] text-black/40 font-mono">
                    <span>Agent Synchronized</span>
                    <span className="flex items-center gap-1 font-semibold text-[#8763e5]">
                      <Zap size={12} /> Real-time Execution
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
