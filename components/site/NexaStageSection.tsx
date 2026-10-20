"use client";

import React, { useEffect, useRef } from "react";
import { Check, X, Zap, Shield, Layers, RefreshCw, ArrowRight, Sparkles, FileText, Cpu, Share2 } from "lucide-react";
import Link from "next/link";

export default function NexaStageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Scroll reveal observer
    const els = sectionRef.current?.querySelectorAll(".nexa-reveal");
    if (!els) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("nexa-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    // Video play/pause observer
    const video = videoRef.current;
    let videoIo: IntersectionObserver | null = null;
    if (video) {
      videoIo = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }, { threshold: 0.05 });
      videoIo.observe(video);
    }

    return () => {
      io.disconnect();
      videoIo?.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full font-sans bg-[#060310] text-white overflow-hidden select-none">
      {/* Google Fonts Preconnect & Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .nexa-stage-root {
          --bg-black: #060310;
          --blue: #4f6bf5;
          --violet: #8b5cf6;
          --pink: #ec4899;
          --orange: #f5934a;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }

        .nexa-font-outfit {
          font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
        }

        .nexa-grad-text {
          background-image: linear-gradient(92deg, #4f6bf5 0%, #8b5cf6 38%, #ec4899 68%, #f5934a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nexa-grad-text-blue {
          background-image: linear-gradient(92deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes nexaCrystalFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes nexaOrbitSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes nexaOrbitReverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes nexaPulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .animate-nexa-float {
          animation: nexaCrystalFloat 7s ease-in-out infinite;
        }
        .animate-nexa-spin {
          animation: nexaOrbitSpin 18s linear infinite;
        }
        .animate-nexa-spin-reverse {
          animation: nexaOrbitReverse 24s linear infinite;
        }
        .animate-nexa-pulse {
          animation: nexaPulseGlow 3s ease-in-out infinite;
        }

        /* Card styling */
        .nexa-card {
          background:
            radial-gradient(140% 90% at 15% 0%, rgba(139, 92, 246, 0.22), rgba(139, 92, 246, 0) 55%),
            radial-gradient(120% 80% at 100% 15%, rgba(79, 107, 245, 0.14), rgba(79, 107, 245, 0) 50%),
            #0a0518;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px 20px 22px;
          display: flex;
          flex-direction: column;
          min-height: 275px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .nexa-card:hover {
          border-color: rgba(180, 150, 255, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 24px 44px -18px rgba(139, 92, 246, 0.45);
        }
        .nexa-learn-more {
          margin-top: auto;
          opacity: 0.85;
          transform: translateY(0);
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: linear-gradient(100deg, #4f6bf5 0%, #8b5cf6 45%, #ec4899 75%, #f5934a 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 11px 0;
          border-radius: 12px;
          width: 100%;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: center;
        }
        .nexa-card:hover .nexa-learn-more {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -6px rgba(139, 92, 246, 0.6);
        }

        /* Light stage compare cards */
        .nexa-compare-neg {
          background: #ffffff;
          border: 1px solid rgba(239, 68, 68, 0.12);
          border-radius: 14px;
          padding: 14px 16px;
          transition: all 0.25s ease;
        }
        .nexa-compare-neg:hover {
          background: #fef2f2;
          border-color: rgba(239, 68, 68, 0.3);
          transform: translateX(-3px);
          box-shadow: 0 10px 24px -10px rgba(239, 68, 68, 0.12);
        }

        .nexa-compare-pos {
          background: #ffffff;
          border: 1px solid rgba(139, 92, 246, 0.12);
          border-radius: 14px;
          padding: 14px 16px;
          transition: all 0.25s ease;
        }
        .nexa-compare-pos:hover {
          background: #f8f5ff;
          border-color: rgba(139, 92, 246, 0.35);
          transform: translateX(3px);
          box-shadow: 0 12px 28px -10px rgba(139, 92, 246, 0.18);
        }

        /* Flow pipeline step cards */
        .nexa-flow-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 18px;
          padding: 24px 20px;
          position: relative;
          transition: all 0.3s ease;
        }
        .nexa-flow-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.12);
        }

        /* Scroll reveal class */
        .nexa-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nexa-reveal.nexa-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="nexa-stage-root">
        {/* ---------- DARK STAGE ---------- */}
        <div className="relative overflow-hidden bg-[#060310]">
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 brightness-110 contrast-105 pointer-events-none"
            src="/videos/hero-bg.mp4"
          />

          {/* Dark Stage Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060310]/40 via-[#060310]/10 via-65% to-[#060310] z-1 pointer-events-none" />

          <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-8 pt-24 pb-28 text-center">
            {/* Floating Crystal */}
            <div className="relative flex justify-center mb-6">
              <svg
                className="w-20 h-24 animate-nexa-float filter drop-shadow-[0_20px_30px_rgba(139,92,246,0.5)]"
                viewBox="0 0 90 108"
                fill="none"
              >
                <defs>
                  <linearGradient id="gemTopRev" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f2eefc" />
                    <stop offset="100%" stopColor="#9a8fce" />
                  </linearGradient>
                  <linearGradient id="gemLRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5b4f92" />
                    <stop offset="100%" stopColor="#211a44" />
                  </linearGradient>
                  <linearGradient id="gemRRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7d71b8" />
                    <stop offset="100%" stopColor="#312a5c" />
                  </linearGradient>
                </defs>
                <polygon points="45,2 80,38 45,56 10,38" fill="url(#gemTopRev)" opacity="0.95" />
                <polygon points="45,56 10,38 24,94 45,104" fill="url(#gemLRev)" opacity="0.85" />
                <polygon points="45,56 80,38 66,94 45,104" fill="url(#gemRRev)" opacity="0.8" />
                <line x1="45" y1="56" x2="45" y2="104" stroke="#c9c0ec" strokeWidth="0.6" opacity="0.4" />
              </svg>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[13px] font-semibold tracking-wide">
              <span className="w-5 h-5 rounded-[7px] bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] inline-flex items-center justify-center flex-none shadow-sm shadow-purple-500/50">
                <Zap size={11} className="text-white" />
              </span>
              <span className="nexa-grad-text font-bold">Autonomous AI Content Pipeline</span>
            </div>

            {/* Title */}
            <h1 className="nexa-font-outfit text-4xl sm:text-5xl md:text-[54px] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfcff] mb-6 max-w-3xl mx-auto">
              Engineer and scale with clarity.
            </h1>

            {/* Paragraph */}
            <p className="text-[16px] leading-[1.7] text-[rgba(232,229,242,0.65)] font-normal max-w-[560px] mx-auto mb-20">
              CubeForgeLabs helps creator teams, brand operators, and digital studios enforce global build standards for AI content creation pipelines. Align teams, workflows, and campaigns without friction.
            </p>

            {/* Trust Section Header */}
            <div className="nexa-reveal text-center relative mb-12">
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[520px] h-[420px] bg-[radial-gradient(ellipse_at_50%_30%,rgba(245,180,120,0.18),rgba(139,92,246,0.12)_45%,rgba(6,3,16,0)_72%)] pointer-events-none -z-10" />
              <h2 className="nexa-font-outfit text-2xl sm:text-3xl md:text-[36px] font-bold leading-[1.24] tracking-[-0.01em] text-white mb-4">
                Relied on by modern creative teams
                <span className="block nexa-grad-text">from initial brief to live publish.</span>
              </h2>
              <p className="text-[15px] leading-[1.6] text-[rgba(232,229,242,0.6)] max-w-[600px] mx-auto">
                Built for high-velocity output. Proven across autonomous AI video stitching, SEO drafting, and multi-channel publishing.
              </p>
            </div>

            {/* 4 Stage Cards Grid */}
            <div className="nexa-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {/* Card 1: Research & Briefing */}
              <article className="nexa-card group">
                <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-[11.5px] font-semibold text-[#d8d3ec] w-fit mb-[50px]">
                  <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                  Research & Briefing
                </span>
                <h3 className="nexa-font-outfit text-[17px] leading-[1.4] font-bold text-[#f5f3fb] tracking-[-0.005em] mb-4 group-hover:text-white transition">
                  Turn raw prompts into data-backed creative briefs.
                </h3>
                <ul className="mb-4 space-y-2.5">
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Audience Painpoint Analysis
                  </li>
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Deep Market Research Swarm
                  </li>
                </ul>
                <Link href="/research-insights" className="nexa-learn-more">
                  <span>Explore Workflow</span>
                  <ArrowRight size={13} />
                </Link>
              </article>

              {/* Card 2: AI Video Studio */}
              <article className="nexa-card group">
                <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-[11.5px] font-semibold text-[#d8d3ec] w-fit mb-[50px]">
                  <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
                  AI Video Studio
                </span>
                <h3 className="nexa-font-outfit text-[17px] leading-[1.4] font-bold text-[#f5f3fb] tracking-[-0.005em] mb-4 group-hover:text-white transition">
                  Generate viral ad creatives and video scenes autonomously.
                </h3>
                <ul className="mb-4 space-y-2.5">
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    AI Scriptwriting & Directions
                  </li>
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Multi-clip Video Stitching
                  </li>
                </ul>
                <Link href="/campaign-builder" className="nexa-learn-more">
                  <span>Explore Workflow</span>
                  <ArrowRight size={13} />
                </Link>
              </article>

              {/* Card 3: AI Writing Engine */}
              {/* Card 3: Voice Agents */}
              <article className="nexa-card group">
                <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-[11.5px] font-semibold text-[#d8d3ec] w-fit mb-[50px]">
                  <span className="w-2 h-2 rounded-full bg-[#8763e5] animate-pulse" />
                  Voice Agent Engine
                </span>
                <h3 className="nexa-font-outfit text-[17px] leading-[1.4] font-bold text-[#f5f3fb] tracking-[-0.005em] mb-4 group-hover:text-white transition">
                  Deploy real-time conversational Voice Agents.
                </h3>
                <ul className="mb-4 space-y-2.5">
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Sub-250ms Global Latency
                  </li>
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Telephony & SIP Trunks
                  </li>
                </ul>
                <Link href="/voice-agents" className="nexa-learn-more">
                  <span>Explore Voice Agents</span>
                  <ArrowRight size={13} />
                </Link>
              </article>

              {/* Card 4: Distribution & Analytics */}
              <article className="nexa-card group">
                <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-[11.5px] font-semibold text-[#d8d3ec] w-fit mb-[50px]">
                  <span className="w-2 h-2 rounded-full bg-[#f5934a] animate-pulse" />
                  Distribution & Analytics
                </span>
                <h3 className="nexa-font-outfit text-[17px] leading-[1.4] font-bold text-[#f5f3fb] tracking-[-0.005em] mb-4 group-hover:text-white transition">
                  Ship platform-native content with full cost tracking.
                </h3>
                <ul className="mb-4 space-y-2.5">
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Multi-tone Captions & Hashtags
                  </li>
                  <li className="flex items-center gap-2.5 text-[12.5px] text-[rgba(212,207,232,0.7)] font-medium leading-[1.4]">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6a5cf0] flex items-center justify-center flex-none shadow-sm shadow-purple-500/30">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </span>
                    Real-time API Token Tracking
                  </li>
                </ul>
                <Link href="/price-breakdown" className="nexa-learn-more">
                  <span>Explore Workflow</span>
                  <ArrowRight size={13} />
                </Link>
              </article>
            </div>
          </div>
        </div>

        {/* ---------- LIGHT STAGE (REDESIGNED COMPARISON & AGENTIC CONTROL) ---------- */}
        <div className="bg-[#FAF9fe] text-[#150f2b] relative py-24 px-6 md:px-8 border-t border-purple-900/10">
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,107,245,0.06)_0%,transparent_50%)] pointer-events-none" />

          <div className="max-w-[1180px] mx-auto relative z-10">
            
            {/* Control Section Header */}
            <div className="nexa-reveal text-center max-w-[760px] mx-auto mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-100/60 border border-purple-200/80 text-purple-900 text-[13px] font-bold tracking-wide shadow-sm">
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] inline-flex items-center justify-center flex-none shadow-xs text-white">
                  <Shield size={11} />
                </span>
                Agentic Control
              </div>
              <h2 className="nexa-font-outfit text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110a26]">
                Stop manual drafting chaos.
                <span className="block nexa-grad-text mt-1">Run with AI precision.</span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-neutral-600 max-w-[620px] mx-auto">
                Compare traditional fragmented manual content creation against our unified, autonomous AI content swarm.
              </p>
            </div>

            {/* Problem vs Solution Interactive Comparison Grid */}
            <div className="nexa-reveal grid grid-cols-1 lg:grid-cols-[1fr_260px_1fr] items-center gap-6 lg:gap-8 mb-28">
              
              {/* Negative Column (Left - Old Way) */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-red-100 shadow-xl shadow-red-500/[0.03] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-red-100/80 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                    <span className="nexa-font-outfit text-[14px] font-bold text-red-950 uppercase tracking-wider">
                      The Old Manual Way
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-red-50 text-red-600 text-[11px] font-bold border border-red-200">
                    High Friction
                  </span>
                </div>

                {[
                  { text: "Manual scriptwriting and hours wasted editing individual video clips", tag: "Time Drain" },
                  { text: "High agency costs and unpredictable freelancer turnaround times", tag: "High Cost" },
                  { text: "Inconsistent brand voice across social channels and blog posts", tag: "Fragmented" },
                  { text: "Scattered Google Docs, video assets, and unorganized file folders", tag: "Messy Storage" },
                  { text: "Zero visibility into API token spend or production cost per asset", tag: "Blind Costs" },
                ].map((item, idx) => (
                  <div key={idx} className="nexa-compare-neg flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-lg bg-red-100/80 border border-red-200 text-red-500 flex items-center justify-center flex-none mt-0.5 group-hover:bg-red-500 group-hover:text-white transition">
                      <X size={12} strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] leading-[1.5] text-neutral-700 font-medium group-hover:text-red-950 transition">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Glowing AI Engine Hub */}
              <div className="relative w-[240px] h-[240px] mx-auto my-6 lg:my-0 flex flex-col items-center justify-center">
                {/* Outer Ambient Aura Glow */}
                <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-pink-500/20 blur-2xl animate-nexa-pulse" />
                
                {/* Outer Conic Orbit Ring 1 */}
                <div className="absolute inset-0 rounded-full p-[2px] bg-[conic-gradient(from_0deg,#4f6bf5,#8b5cf6_30%,#ec4899_55%,#f5934a_78%,#4f6bf5_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] animate-nexa-spin" />

                {/* Counter Spin Orbit Ring 2 */}
                <div className="absolute inset-[10px] rounded-full p-[1.5px] bg-[conic-gradient(from_180deg,#ec4899,#8b5cf6,#4f6bf5)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-60 animate-nexa-spin-reverse" />

                {/* Core Sphere */}
                <div className="absolute inset-[24px] rounded-full bg-gradient-to-br from-white via-purple-50/80 to-purple-100 shadow-[inset_0_0_24px_rgba(139,92,246,0.3),0_20px_40px_-15px_rgba(139,92,246,0.4)] flex flex-col items-center justify-center p-4 border border-purple-200/50 group cursor-pointer transition-transform hover:scale-105">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#4f6bf5] flex items-center justify-center text-white shadow-md shadow-purple-500/30 mb-1.5 animate-bounce">
                    <Layers size={22} />
                  </div>
                  <span className="nexa-font-outfit text-[11px] font-bold tracking-wider text-purple-900 uppercase text-center leading-tight">
                    AI Swarm Engine
                  </span>
                  <span className="text-[9.5px] font-semibold text-purple-600/80 mt-0.5">
                    99.8% Velocity
                  </span>
                </div>

                {/* Orbiting Particle Dots */}
                <span className="absolute w-2.5 h-2.5 rounded-full bg-purple-600 shadow-sm shadow-purple-500 top-[18%] left-[22%] animate-ping" />
                <span className="absolute w-2 h-2 rounded-full bg-pink-500 shadow-sm shadow-pink-500 top-[68%] left-[78%]" />
                <span className="absolute w-2 h-2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500 top-[78%] left-[28%]" />
              </div>

              {/* Positive Column (Right - AI Precision) */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-purple-200/80 shadow-xl shadow-purple-500/[0.06] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="nexa-font-outfit text-[14px] font-bold text-purple-950 uppercase tracking-wider">
                      The ContentForge AI Way
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[11px] font-bold border border-purple-200">
                    Autonomous
                  </span>
                </div>

                {[
                  { text: "Autonomous scriptwriting, visual generation, and video stitching in ", highlight: "1 click" },
                  { text: "Drastically lower production costs with instant ", highlight: "24/7 AI velocity" },
                  { text: "Unified brand tone across ", highlight: "video captions, blogs & hashtags" },
                  { text: "Centralized cloud storage in ", highlight: "Supabase for all media assets" },
                  { text: "Transparent cost breakdown and ", highlight: "real-time API spend tracking" },
                ].map((item, idx) => (
                  <div key={idx} className="nexa-compare-pos flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#4f6bf5] text-white flex items-center justify-center flex-none mt-0.5 shadow-sm shadow-purple-500/30 group-hover:scale-110 transition">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] leading-[1.5] text-neutral-800 font-medium">
                        {item.text}
                        <strong className="text-purple-900 font-bold bg-purple-100/60 px-1 py-0.5 rounded ml-0.5">
                          {item.highlight}
                        </strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Structured Delivery Flow Section */}
            <div className="nexa-reveal pt-10 border-t border-purple-900/10">
              
              <div className="text-center max-w-[740px] mx-auto mb-14">
                <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-100/60 border border-purple-200/80 text-purple-900 text-[13px] font-bold tracking-wide shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] inline-flex items-center justify-center flex-none shadow-xs text-white">
                    <RefreshCw size={11} />
                  </span>
                  Structured Delivery
                </div>
                <h2 className="nexa-font-outfit text-3xl sm:text-4xl md:text-[38px] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#110a26]">
                  One integrated AI content swarm.
                  <span className="block nexa-grad-text mt-1">Compounding creative ROI.</span>
                </h2>
                <p className="text-[15.5px] leading-[1.65] text-neutral-600 mt-4 max-w-[620px] mx-auto">
                  CubeForgeLabs agents ingest, research, generate, edit, and publish platform-native assets automatically.
                </p>
              </div>

              {/* 4 Pipeline Flow Columns Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                
                {/* Step 1: Ingest & Plan */}
                <div className="nexa-flow-card group border-t-4 border-t-[#4f6bf5]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="nexa-font-outfit text-2xl font-black text-[#4f6bf5]">01</span>
                    <span className="p-2 rounded-xl bg-blue-50 text-[#4f6bf5] group-hover:scale-110 transition">
                      <FileText size={18} />
                    </span>
                  </div>
                  <h4 className="nexa-font-outfit text-[17px] font-bold text-[#150f2b] mb-3">
                    Ingest & Plan
                  </h4>
                  <ul className="space-y-2.5 text-[13px] text-neutral-600 font-medium">
                    {["Briefs & Prompts", "Target Audience", "Painpoint Mapping", "Content Thesis"].map((li, i) => (
                      <li key={i} className="flex items-center gap-2 group-hover:text-neutral-900 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f6bf5]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 2: Generate Assets */}
                <div className="nexa-flow-card group border-t-4 border-t-[#8b5cf6]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="nexa-font-outfit text-2xl font-black text-[#8b5cf6]">02</span>
                    <span className="p-2 rounded-xl bg-purple-50 text-[#8b5cf6] group-hover:scale-110 transition">
                      <Sparkles size={18} />
                    </span>
                  </div>
                  <h4 className="nexa-font-outfit text-[17px] font-bold text-[#150f2b] mb-3">
                    Generate Assets
                  </h4>
                  <ul className="space-y-2.5 text-[13px] text-neutral-600 font-medium">
                    {["AI Scriptwriting", "Image & Video Clips", "SEO Blog Drafts", "Multi-tone Captions"].map((li, i) => (
                      <li key={i} className="flex items-center gap-2 group-hover:text-neutral-900 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 3: Stitch & Edit */}
                <div className="nexa-flow-card group border-t-4 border-t-[#ec4899]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="nexa-font-outfit text-2xl font-black text-[#ec4899]">03</span>
                    <span className="p-2 rounded-xl bg-pink-50 text-[#ec4899] group-hover:scale-110 transition">
                      <Cpu size={18} />
                    </span>
                  </div>
                  <h4 className="nexa-font-outfit text-[17px] font-bold text-[#150f2b] mb-3">
                    Stitch & Edit
                  </h4>
                  <ul className="space-y-2.5 text-[13px] text-neutral-600 font-medium">
                    {["Video Stitching", "Voiceover Sync", "Rich Text Editing", "Hashtag Tuning"].map((li, i) => (
                      <li key={i} className="flex items-center gap-2 group-hover:text-neutral-900 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 4: Publish & Track */}
                <div className="nexa-flow-card group border-t-4 border-t-[#f5934a]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="nexa-font-outfit text-2xl font-black text-[#f5934a]">04</span>
                    <span className="p-2 rounded-xl bg-orange-50 text-[#f5934a] group-hover:scale-110 transition">
                      <Share2 size={18} />
                    </span>
                  </div>
                  <h4 className="nexa-font-outfit text-[17px] font-bold text-[#150f2b] mb-3">
                    Publish & Track
                  </h4>
                  <ul className="space-y-2.5 text-[13px] text-neutral-600 font-medium">
                    {["Substack Publish", "Medium Syndication", "Supabase Storage", "API Spend Tracking"].map((li, i) => (
                      <li key={i} className="flex items-center gap-2 group-hover:text-neutral-900 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5934a]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Glowing Wave Divider SVG */}
              <div className="relative mt-20 h-[130px] overflow-hidden">
                <svg viewBox="0 0 1180 130" preserveAspectRatio="none" className="absolute bottom-[-4px] left-0 w-full h-auto">
                  <defs>
                    <linearGradient id="nexaWaveGradRev" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4f6bf5" />
                      <stop offset="42%" stopColor="#8b5cf6" />
                      <stop offset="72%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f5934a" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#nexaWaveGradRev)" strokeWidth="1">
                    <path d="M0,70 C150,10 250,130 400,60 C550,-5 650,130 800,60 C950,-5 1050,110 1180,45" opacity="0.9" />
                    <path d="M0,78 C150,18 250,138 400,68 C550,3 650,138 800,68 C950,3 1050,118 1180,53" opacity="0.7" />
                    <path d="M0,86 C150,26 250,146 400,76 C550,11 650,146 800,76 C950,11 1050,126 1180,61" opacity="0.55" />
                    <path d="M0,94 C150,34 250,154 400,84 C550,19 650,154 800,84 C950,19 1050,134 1180,69" opacity="0.4" />
                    <path d="M0,102 C150,42 250,162 400,92 C550,27 650,162 800,92 C950,27 1050,142 1180,77" opacity="0.28" />
                    <path d="M0,110 C150,50 250,170 400,100 C550,35 650,170 800,100 C950,35 1050,150 1180,85" opacity="0.18" />
                  </g>
                </svg>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
