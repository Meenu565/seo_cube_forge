"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { stagesData } from "./solutionsData";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";


export default function StageSelectorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPct(latest);
    const numStages = stagesData.length;
    // Map scroll progress (0.0 to 1.0) into discrete stage indexes (0 to 5)
    const index = Math.min(numStages - 1, Math.max(0, Math.floor(latest * numStages)));
    setActiveStageIndex(index);
  });

  const handleStageClick = (idx: number) => {
    setActiveStageIndex(idx);
    if (containerRef.current) {
      const numStages = stagesData.length;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = scrollTop + rect.top + (idx / numStages) * totalScrollableDistance + 10;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeStage = stagesData[activeStageIndex];

  return (
    // Outer scroll track: 350vh height ensures smooth, controllable scrolling from stage 1 to 6
    <div id="stage-system" ref={containerRef} className="relative h-[350vh] bg-white border-t border-black/5">
      
      {/* Sticky viewport container pins during scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#8763e5]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 w-full py-6">
          
          {/* Section Header & Progress Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
                Unified Workflow Engine
              </span>
              <h2 className={`mt-2 text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-neutral-900 leading-[1.08] `}>
                One system for every stage of content.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-black/65 leading-relaxed font-normal">
                From the first research question to the final publish, CubeForgeLabs agents work inside a single workflow — so your team spends less time switching tools and more time shipping work that matters.
              </p>
            </div>

            {/* Scroll Indicator Tag */}
            <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7852dc] font-semibold">
                <span>Stage {activeStage.number} of 06</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#7852dc] animate-ping" />
              </div>
              
              {/* Progress Track Line */}
              <div className="w-36 h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-black/5">
                <div 
                  className="h-full bg-[#8763e5] transition-all duration-150 rounded-full"
                  style={{ width: `${Math.max(16, ((activeStageIndex + 1) / 6) * 100)}%` }}
                />
              </div>
              <span className="text-[10px] text-black/40 font-mono">Scroll to progress through stages</span>
            </div>
          </div>

          {/* Interactive Grid: Left stage selector, Right 3D stage canvas */}
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Vertical Stage List */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {stagesData.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStageClick(idx)}
                    className={`group relative flex items-center justify-between rounded-2xl p-3.5 sm:p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#8763e5]/10 border-2 border-[#8763e5] shadow-md shadow-[#8763e5]/10 translate-x-1"
                        : "bg-[#fbfafd] border border-black/5 hover:bg-[#f4f0ff]/50 hover:border-black/10"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`text-sm font-bold font-mono transition-colors ${
                          isActive ? "text-[#8763e5]" : "text-black/40 group-hover:text-black/70"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <div>
                        <div
                          className={`text-[15px] font-semibold transition-colors ${
                            isActive ? "text-black" : "text-neutral-700 group-hover:text-black"
                          }`}
                        >
                          {stage.title}
                        </div>
                        <div className="text-[11px] text-black/50 line-clamp-1">
                          {stage.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <span className="flex h-2 w-2 rounded-full bg-[#8763e5] animate-pulse" />
                      ) : (
                        <ArrowRight size={14} className="text-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep Purple 3D Canvas Stage */}
            <div className="lg:col-span-7">
              <div className="relative min-h-[440px] w-full rounded-3xl bg-[radial-gradient(ellipse_at_30%_20%,#4c1d95,#1e0a3c_60%,#090314)] p-6 sm:p-8 text-white shadow-2xl shadow-[#8763e5]/25 border border-[#8763e5]/30 overflow-hidden flex flex-col justify-between">
                
                {/* Grid Lines Pattern */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: "32px 32px"
                  }}
                />

                {/* Ambient Glow Orbs */}
                <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#8763e5]/35 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#53099d]/35 blur-3xl pointer-events-none" />

                {/* Stage Top Bar */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#d79de4] tracking-wider uppercase">
                      STAGE {activeStage.number} • {activeStage.title}
                    </span>
                    <span className="hidden sm:inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80">
                      Agent: {activeStage.agent}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>{activeStage.badge}</span>
                  </div>
                </div>

                {/* Animated Floating Showcase Cards Stack */}
                <div className="relative z-10 my-6 space-y-3.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="space-y-3.5"
                    >
                      {/* Primary Dynamic Card (Top Stack) */}
                      <div className="rounded-2xl bg-white p-4 sm:p-5 text-black shadow-xl border border-white/20 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 font-mono">
                            {activeStage.cards[0].title}
                          </span>
                          {activeStage.cards[0].badge && (
                            <span className="rounded-full bg-[#8763e5]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#8763e5]">
                              {activeStage.cards[0].badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[15px] font-semibold text-black tracking-tight">
                          {activeStage.cards[0].content}
                        </div>
                        {activeStage.cards[0].subcontent && (
                          <div className="mt-1 text-xs text-black/60 font-normal">
                            {activeStage.cards[0].subcontent}
                          </div>
                        )}
                        <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-2.5 text-[11px] text-black/40">
                          <span>{activeStage.cards[0].meta || "Confidence: 98.4%"}</span>
                          <span className="flex items-center gap-1 font-semibold text-emerald-600">
                            <CheckCircle2 size={12} /> {activeStage.cards[0].status}
                          </span>
                        </div>
                      </div>

                      {/* Secondary Dynamic Card (Bottom Stack) */}
                      {activeStage.cards[1] && (
                        <div className="rounded-2xl bg-white p-4 sm:p-5 text-black shadow-xl border border-white/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 font-mono">
                              {activeStage.cards[1].title}
                            </span>
                            {activeStage.cards[1].badge && (
                              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 border border-amber-200/60">
                                {activeStage.cards[1].badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[15px] font-semibold text-black tracking-tight">
                            {activeStage.cards[1].content}
                          </div>
                          {activeStage.cards[1].subcontent && (
                            <div className="mt-1 text-xs text-black/60 font-normal">
                              {activeStage.cards[1].subcontent}
                            </div>
                          )}
                          <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-2.5 text-[11px] text-black/40">
                            <span>{activeStage.cards[1].meta || "Target ROAS: 3.8x"}</span>
                            <span className="flex items-center gap-1 font-semibold text-[#8763e5]">
                              <Activity size={12} /> {activeStage.cards[1].status}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Stage Bottom Footer Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3.5 text-xs text-white/70">
                  <span className="flex items-center gap-1.5 font-normal">
                    <Zap size={13} className="text-[#d79de4]" />
                    {activeStage.description}
                  </span>
                  <span className="font-mono text-[11px] text-white/50">
                    Step {activeStage.number} of 06
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
