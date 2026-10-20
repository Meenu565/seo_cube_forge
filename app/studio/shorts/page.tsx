"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Scissors } from "lucide-react";
import ShortsStudioView from "@/components/shorts/ShortsStudioView";

export default function ShortsStudioPage() {
  return (
    <div className="min-h-screen bg-[#f9f9fb] text-neutral-950 font-sans antialiased relative pb-24">
      {/* Top minimal bar */}
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-black/5 bg-white sticky top-0 z-50">
        <Link
          href="/generate"
          className="flex items-center gap-2 hover:opacity-75 transition font-semibold text-sm text-neutral-700"
        >
          <ArrowLeft size={16} />
          <span>Back to Studio Dashboard</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4effc] border border-[#8763e5]/20 text-[#8763e5] text-xs font-bold font-mono">
            <Sparkles size={12} />
            <span>AI SHORTS</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 mt-10 space-y-8">
        {/* Breadcrumb & Title */}
        <div className="space-y-2">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-[#8763e5] font-mono">
            STUDIO / SHORTS PIPELINE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-tight font-sans">
            AI Shorts <span className="bg-gradient-to-r from-[#d79de4] via-[#8763e5] to-[#d79de4] bg-clip-text text-transparent not-italic font-normal">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal font-sans max-w-2xl">
            Extract viral moments from any long-form video, crop to 9:16 vertical format, and render dynamic word-level subtitles.
          </p>
        </div>

        {/* Shorts Generator Component */}
        <ShortsStudioView />
      </main>
    </div>
  );
}
