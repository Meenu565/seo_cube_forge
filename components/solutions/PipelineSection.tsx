"use client";

import React, { useState } from "react";
import { pipelineItems } from "./solutionsData";
import { CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";


export default function PipelineSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-white border-t border-black/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8763e5]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
          ALIGNED TO THE CONTENT PIPELINE
        </span>

        {/* Main Headline */}
        <h2 className={`mt-3 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl leading-[1.08] `}>
          Built to run content as a<br />system
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base text-black/65 leading-relaxed font-normal max-w-xl mx-auto">
          Each stage feeds the next automatically — no exporting, no re-briefing, no lost context.
        </p>

        {/* The 7 Pipeline Rows (Box type styling matching Screenshot 1) */}
        <div className="mt-12 space-y-3 text-left">
          {pipelineItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeItem === idx;

            return (
              <motion.div
                key={item.stage}
                onMouseEnter={() => setActiveItem(idx)}
                onMouseLeave={() => setActiveItem(null)}
                whileHover={{ scale: 1.01 }}
                className={`group flex items-center justify-between gap-4 rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
                  isHovered
                    ? "bg-[#faf9fe] border-[#8763e5]/50 shadow-md shadow-[#8763e5]/5"
                    : "bg-white border-black/10 shadow-2xs hover:border-black/20"
                }`}
              >
                {/* Left side: Stage Icon + Badge & Info */}
                <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  
                  {/* Stage Label Badge / Icon */}
                  <div className="flex h-11 w-16 sm:w-20 shrink-0 items-center justify-center rounded-xl bg-[#8763e5]/10 border border-[#8763e5]/20 text-xs font-bold font-mono text-[#8763e5] group-hover:bg-[#8763e5] group-hover:text-white transition-colors">
                    {item.stage}
                  </div>

                  {/* Text details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-[15px] font-semibold text-black tracking-tight truncate">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-xs sm:text-[13px] text-black/60 truncate mt-0.5 font-normal">
                      {item.description}
                    </div>
                  </div>
                </div>

                {/* Right side: Ready Status Pill */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden md:inline-block text-[11px] text-black/40 font-mono">
                    {item.detail}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60 shadow-2xs">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{item.badge}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Telemetry Footer Callout */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-5 py-2.5 text-xs text-white shadow-lg">
          <Sparkles size={14} className="text-[#d79de4] animate-pulse" />
          <span>7/7 Pipeline Stages Autonomous • Zero Third-Party Middleware</span>
        </div>

      </div>
    </section>
  );
}
