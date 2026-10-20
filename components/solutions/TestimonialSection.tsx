"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";


export default function TestimonialSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#faf9fe] to-white border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Big Impact Metric */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className={`text-7xl sm:text-8xl font-normal tracking-tighter text-[#8763e5] `}>
              4.2x
            </div>
            <p className="mt-3 text-base sm:text-lg font-medium text-black/70 leading-snug">
              faster campaign turnaround after switching to CubeForgeLabs
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-black/50 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Verified Customer Telemetry</span>
            </div>
          </div>

          {/* Right Column: Verified Quote */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-black/5 relative">
            <Quote size={36} className="text-[#8763e5]/20 absolute top-6 right-6" />
            
            <p className={`text-2xl sm:text-3xl font-normal leading-snug text-neutral-900 tracking-tight `}>
              “We stopped rebriefing five different tools for one campaign. Everything my team needs now lives in a single workspace.”
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#8763e5] to-[#7852dc] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                DW
              </div>
              <div>
                <div className="text-base font-semibold text-neutral-900">
                  Dana Whitfield
                </div>
                <div className="text-xs sm:text-sm text-black/50">
                  VP Marketing, Northwind Outdoor
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
