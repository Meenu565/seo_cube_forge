"use client";

import React, { useState, useEffect } from "react";
import GeneratingLoader from "./GeneratingLoader";
import { Sparkles, Wand2, Palette, PenTool, LayoutGrid } from "lucide-react";

const GENERATING_STEPS = [
  {
    icon: Sparkles,
    badge: "Creative Studio Active",
    title: "Generating your custom campaign...",
    subtitle: "Brainstorming high-converting visual directions and photographic mood for your brand.",
  },
  {
    icon: PenTool,
    badge: "Scripting Copy",
    title: "Drafting scroll-stopping headlines...",
    subtitle: "Writing punchy hooks, value propositions, and compelling calls-to-action.",
  },
  {
    icon: Wand2,
    badge: "Rendering Visuals",
    title: "Generating studio-quality visual assets...",
    subtitle: "Creating high-res photographic graphics tailored to your target audience.",
  },
  {
    icon: Palette,
    badge: "Brand Styling",
    title: "Blending brand colors & typography...",
    subtitle: "Applying brand palette, fonts, and clean layout balance to every asset.",
  },
  {
    icon: LayoutGrid,
    badge: "Final Polish",
    title: "Assembling captions & calendar...",
    subtitle: "Putting the final touches on your ready-to-publish campaign package.",
  },
];

export default function ActiveGeneratingBanner() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % GENERATING_STEPS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentStep = GENERATING_STEPS[stepIndex];
  const StepIcon = currentStep.icon;

  return (
    <div className="mb-6 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#120F17] via-[#171524] to-[#0A0518] border border-[#8763e5]/40 shadow-[0_20px_60px_-15px_rgba(135,99,229,0.35)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(135,99,229,0.22),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center md:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8763e5]/20 border border-[#8763e5]/40 text-[11px] font-bold text-[#d79de4] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#d79de4] animate-ping" />
          <StepIcon size={13} className="text-[#d79de4]" />
          {currentStep.badge}
        </div>

        <h3 className="text-2xl font-bold text-[#ffffff] tracking-tight font-sans transition-all duration-500 ease-out">
          {currentStep.title}
        </h3>

        <p className="text-sm text-neutral-300 leading-relaxed transition-all duration-500 ease-out">
          {currentStep.subtitle}
        </p>

        {/* Progress step bar */}
        <div className="pt-2 flex items-center gap-2 justify-center md:justify-start">
          {GENERATING_STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === stepIndex
                  ? "w-8 bg-gradient-to-r from-[#8763e5] to-[#d79de4]"
                  : idx < stepIndex
                  ? "w-2 bg-[#8763e5]/60"
                  : "w-2 bg-white/10"
              }`}
            />
          ))}
          <span className="text-[11px] text-neutral-400 font-mono ml-2">
            Step {stepIndex + 1} of {GENERATING_STEPS.length}
          </span>
        </div>
      </div>

      <div className="relative z-10 shrink-0">
        <GeneratingLoader text="Generating" size={160} />
      </div>
    </div>
  );
}
