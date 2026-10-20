"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function KraftShowcaseSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: "prompt",
      stepNum: "01",
      title: "Define & Prompt",
      desc: "Input your core topic, target audience, brand tone, and raw ideas. AI constructs your narrative blueprint.",
      image: "/images/feather_quill_3d.jpg",
      alt: "3D Feather Quill writing ideas"
    },
    {
      id: "generate",
      stepNum: "02",
      title: "Generate & Voice",
      desc: "Watch multi-agent AI write viral scripts, synthesize hyper-realistic voiceovers, and produce HD assets.",
      image: "/images/magic_wand_3d.jpg",
      alt: "3D Magic Wand with glowing stars"
    },
    {
      id: "package",
      stepNum: "03",
      title: "Package & Adapt",
      desc: "Tweak hooks, auto-generate SEO captions, hashtags, and media layouts for LinkedIn, X, YouTube & Instagram.",
      image: "/images/checklist_pencil_3d.jpg",
      alt: "3D Checklist and pencil"
    },
    {
      id: "publish",
      stepNum: "04",
      title: "Publish & Reach",
      desc: "Schedule posts or launch instantly across all connected social accounts and blogs with single-click distribution.",
      image: "/images/rocket_launch_3d.jpg",
      alt: "3D Rocket launch taking off"
    }
  ];

  return (
    <section 
      style={{ fontFamily: "'Inter', sans-serif" }} 
      className="w-full bg-white text-black py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-black"
          >
            From raw idea to audience reach in four simple steps
          </motion.h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Everything you need to turn simple prompts into published content across all channels.
          </p>
        </div>

        {/* 4 Cards Grid - Light Theme Match */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-[460px] overflow-hidden border ${
                  isActive
                    ? "bg-[#0e1116] text-white border-black shadow-[0_20px_50px_-10px_rgba(14,17,22,0.3)] scale-[1.02] z-20"
                    : "bg-gray-50/90 text-black border-gray-200/80 hover:border-gray-300 hover:bg-gray-100/70 z-10"
                }`}
              >
                {/* Top Text Content */}
                <div className="z-10 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${
                      isActive 
                        ? "bg-white/10 text-white/80 border-white/10" 
                        : "bg-black/5 text-gray-500 border-black/5"
                    }`}>
                      {step.stepNum}
                    </span>
                    <h3 className={`text-2xl font-bold tracking-tight ${isActive ? "text-white" : "text-black"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed font-normal ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Active Floating Badge */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-4 right-5 z-20 flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-semibold text-white shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom 3D Artwork Image Container */}
                <div className={`mt-8 relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-colors duration-300 ${
                  isActive ? "bg-black/40 border border-white/10" : "bg-gray-200/50 border border-gray-200/60"
                }`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover transition-all duration-500 ${
                      isActive ? "scale-105 contrast-105 opacity-100" : "scale-100 opacity-90 group-hover:scale-105 group-hover:opacity-100"
                    }`}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                      isActive
                        ? "bg-gradient-to-t from-[#0e1116]/60 via-transparent to-transparent"
                        : "bg-gradient-to-t from-gray-100/40 via-transparent to-transparent"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
