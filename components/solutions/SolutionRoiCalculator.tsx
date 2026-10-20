"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from "lucide-react";


interface RoiProps {
  slug: string;
  title: string;
  accentColor: string;
}

interface RoiConfig {
  sliderLabel: string;
  min: number;
  max: number;
  defaultVal: number;
  unit: string;
  hoursSavedPerUnit: number;
  costSavedPerUnit: number;
  computeCostPerUnit: number;
  outputMultiplier: number;
  metric1Label: string;
  metric2Label: string;
  metric3Label: string;
  metric4Label: string;
  insightNote: string;
}

const ROI_CONFIGS: Record<string, RoiConfig> = {
  marketing: {
    sliderLabel: "Monthly Campaigns & Content Bundles",
    min: 5,
    max: 60,
    defaultVal: 20,
    unit: "Campaigns / mo",
    hoursSavedPerUnit: 8.5,
    costSavedPerUnit: 650,
    computeCostPerUnit: 1.25,
    outputMultiplier: 12,
    metric1Label: "Production Hours Saved",
    metric2Label: "Traditional Agency Cost Avoided",
    metric3Label: "Total Token & GPU Compute",
    metric4Label: "Total Multi-Channel Assets",
    insightNote: "Calculated based on average marketing agency retainer of $6,500/mo and 40 hrs of manual copywriting and design per campaign."
  },
  "marketing-teams": {
    sliderLabel: "Monthly Campaigns & Content Bundles",
    min: 5,
    max: 60,
    defaultVal: 20,
    unit: "Campaigns / mo",
    hoursSavedPerUnit: 8.5,
    costSavedPerUnit: 650,
    computeCostPerUnit: 1.25,
    outputMultiplier: 12,
    metric1Label: "Production Hours Saved",
    metric2Label: "Traditional Agency Cost Avoided",
    metric3Label: "Total Token & GPU Compute",
    metric4Label: "Total Multi-Channel Assets",
    insightNote: "Calculated based on average marketing agency retainer of $6,500/mo and 40 hrs of manual copywriting and design per campaign."
  },
  "media-entertainment": {
    sliderLabel: "Hours of Raw Video Ingested / Week",
    min: 2,
    max: 30,
    defaultVal: 8,
    unit: "Video Hours / wk",
    hoursSavedPerUnit: 14.0,
    costSavedPerUnit: 820,
    computeCostPerUnit: 2.10,
    outputMultiplier: 9.5,
    metric1Label: "Video Editing Hours Saved",
    metric2Label: "Post-Production Cost Saved",
    metric3Label: "Kinetic Video Render Spend",
    metric4Label: "Viral Shorts & TikToks Produced",
    insightNote: "Calculated based on standard freelance video editor rate ($75/hr) producing 9:16 reframed clips with karaoke subtitles."
  },
  "media-and-entertainment": {
    sliderLabel: "Hours of Raw Video Ingested / Week",
    min: 2,
    max: 30,
    defaultVal: 8,
    unit: "Video Hours / wk",
    hoursSavedPerUnit: 14.0,
    costSavedPerUnit: 820,
    computeCostPerUnit: 2.10,
    outputMultiplier: 9.5,
    metric1Label: "Video Editing Hours Saved",
    metric2Label: "Post-Production Cost Saved",
    metric3Label: "Kinetic Video Render Spend",
    metric4Label: "Viral Shorts & TikToks Produced",
    insightNote: "Calculated based on standard freelance video editor rate ($75/hr) producing 9:16 reframed clips with karaoke subtitles."
  },
  agencies: {
    sliderLabel: "Active Client Retainer Workspaces",
    min: 3,
    max: 50,
    defaultVal: 15,
    unit: "Client Brands",
    hoursSavedPerUnit: 24.0,
    costSavedPerUnit: 1800,
    computeCostPerUnit: 4.50,
    outputMultiplier: 45,
    metric1Label: "Strategist Hours Reclaimed / mo",
    metric2Label: "Monthly Gross Profit Expansion",
    metric3Label: "Total Infrastructure Cost",
    metric4Label: "Monthly Deliverables Shipped",
    insightNote: "Calculated based on staffing 1 senior strategist across 15 accounts instead of 5 junior copywriters and graphic designers."
  },
  enterprise: {
    sliderLabel: "Global Regional Business Units / Hubs",
    min: 2,
    max: 25,
    defaultVal: 8,
    unit: "Regional Hubs",
    hoursSavedPerUnit: 48.0,
    costSavedPerUnit: 4200,
    computeCostPerUnit: 9.80,
    outputMultiplier: 120,
    metric1Label: "Compliance & Localization Hours Saved",
    metric2Label: "Global Tool Redundancy Saved",
    metric3Label: "Private VPC Cluster Compute",
    metric4Label: "Localized Compliant Assets",
    insightNote: "Calculated based on cross-region localization cycles reducing from 14 business days to under 10 minutes with SOC2 compliance."
  }
};

export default function SolutionRoiCalculator({ slug, title, accentColor }: RoiProps) {
  const config = ROI_CONFIGS[slug] || ROI_CONFIGS["marketing"];
  const [sliderValue, setSliderValue] = useState<number>(config.defaultVal);

  const hoursSaved = Math.round(sliderValue * config.hoursSavedPerUnit);
  const costSaved = Math.round(sliderValue * config.costSavedPerUnit);
  const computeSpend = (sliderValue * config.computeCostPerUnit).toFixed(2);
  const totalAssets = Math.round(sliderValue * config.outputMultiplier);
  const netSavings = costSaved - parseFloat(computeSpend);

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf9fe] via-white to-[#faf9fe] border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span 
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border shadow-2xs"
            style={{
              backgroundColor: `${accentColor}10`,
              borderColor: `${accentColor}25`,
              color: accentColor
            }}
          >
            <Calculator size={13} style={{ color: accentColor }} />
            <span className={`text-[13px] tracking-wide `}>Autonomous Unit Economics</span>
          </span>

          <h2 className={`text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 leading-[1.08] `}>
            Calculate your quantifiable ROI for {title}
          </h2>
          <p className="mt-3 text-base text-black/65 leading-relaxed font-normal">
            See exactly how many hours and agency dollars CubeForgeLabs reclaims while multiplying your output volume.
          </p>
        </div>

        {/* Calculator Main Container (Box type styling per Screenshot 1) */}
        <div className="grid items-center gap-10 lg:grid-cols-12 rounded-3xl bg-white p-7 sm:p-10 shadow-xl border border-black/5">
          
          {/* Left Column: Interactive Slider & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-neutral-900">
                  {config.sliderLabel}
                </label>
                <span 
                  className="font-mono text-base font-extrabold px-3 py-1 rounded-xl shadow-2xs border"
                  style={{
                    backgroundColor: `${accentColor}10`,
                    borderColor: `${accentColor}30`,
                    color: accentColor
                  }}
                >
                  {sliderValue} {config.unit}
                </span>
              </div>

              {/* Range Input Slider */}
              <div className="relative my-6">
                <input
                  type="range"
                  min={config.min}
                  max={config.max}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: accentColor }}
                />
                <div className="flex justify-between text-[11px] font-mono text-black/40 mt-2">
                  <span>{config.min} min</span>
                  <span>{config.max / 2} avg</span>
                  <span>{config.max} max scale</span>
                </div>
              </div>

              {/* Feature comparison pills */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#faf9fe] border border-black/5">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Traditional Cost per Campaign</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-900">
                    ~${(costSaved / sliderValue).toFixed(0)} / unit
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-900">
                    <Zap size={16} className="text-emerald-600" />
                    <span>CubeForgeLabs Compute Cost</span>
                  </div>
                  <span className="font-mono text-xs font-extrabold text-emerald-700">
                    ${config.computeCostPerUnit.toFixed(2)} / unit
                  </span>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="mt-6 text-[11px] text-black/50 leading-relaxed italic border-t border-black/5 pt-4">
              * {config.insightNote}
            </p>
          </div>

          {/* Right Column: Dynamic Result Metrics Display */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-950 p-6 sm:p-8 text-white shadow-2xl border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#d79de4]">
                  Estimated Monthly Impact
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                  +{( (costSaved / (parseFloat(computeSpend) || 1)) * 10 ).toFixed(0)}% Net ROI
                </span>
              </div>

              {/* 4 Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Clock size={13} className="text-[#d79de4]" />
                    <span>{config.metric1Label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {hoursSaved.toLocaleString()} hrs
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1 font-medium">
                    ~{(hoursSaved / 160).toFixed(1)} Full-Time Employees
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <DollarSign size={13} className="text-emerald-400" />
                    <span>{config.metric2Label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                    ${costSaved.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1">
                    Direct budget retained
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Zap size={13} className="text-amber-400" />
                    <span>{config.metric3Label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
                    ${computeSpend}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1">
                    100% Token Audited
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Layers size={13} className="text-[#8763e5]" />
                    <span>{config.metric4Label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {totalAssets.toLocaleString()}+
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1">
                    Omni-channel ready
                  </div>
                </div>

              </div>
            </div>

            {/* Net Savings Callout */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-neutral-400">Estimated Net Annual Savings</div>
                <div className={`text-2xl sm:text-3xl font-medium text-white `}>
                  ${(netSavings * 12).toLocaleString()} / year
                </div>
              </div>

              <a
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-neutral-950 transition hover:bg-neutral-200"
              >
                <span>Claim ROI Pilot</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
