"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Box,
  ChevronDown,
  BarChart3,
  BookOpen,
  Users,
  Rocket,
  Check,
  X,
  Sparkles,
  Zap,
} from "lucide-react";
import BlurGradientText from "@/components/BlurGradientText";
import SplashCursor from "@/components/SplashCursor";
import AgentsMegaMenu from "@/components/site/AgentsMegaMenu";
import ProductMegaMenu from "@/components/site/ProductMegaMenu";
import Logo from "./Logo";

const TABS = ["scripting", "media", "packaging", "publish"];

const TAB_META = {
  scripting: { label: "Scripting", icon: BarChart3 },
  media: { label: "Media", icon: BookOpen },
  packaging: { label: "Packaging", icon: Users },
  publish: { label: "Publish", icon: Rocket },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("scripting");
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const idx = TABS.indexOf(current);
        return TABS[(idx + 1) % TABS.length];
      });
    }, 4000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white min-h-screen relative">
      <SplashCursor
        DYE_RESOLUTION={512}
        SIM_RESOLUTION={128}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#53099d"
      />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-overlay {
          animation: fadeInOverlay 0.4s ease-out forwards;
        }

        @keyframes fadeInDialog {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up-overlay {
          animation: fadeInDialog 0.5s ease-out forwards;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav
        className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto relative z-50 animate-fade-in-up"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <Logo className="text-[28px]" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavItem 
            label="Product" 
            hasDropdown 
            isActive={activeMegaMenu === 'Product'}
            onClick={() => setActiveMegaMenu(activeMegaMenu === 'Product' ? null : 'Product')}
            onMouseEnter={() => handleMouseEnter('Product')}
            onMouseLeave={handleMouseLeave}
          />
          <NavItem 
            label="Agents" 
            hasDropdown 
            isActive={activeMegaMenu === 'Agents'}
            onClick={() => setActiveMegaMenu(activeMegaMenu === 'Agents' ? null : 'Agents')}
            onMouseEnter={() => handleMouseEnter('Agents')}
            onMouseLeave={handleMouseLeave}
          />
          <NavItem label="Pricing" href="/pricing" />
          <NavItem label="Blog" href="/blog" />
        </div>

        <div className="flex items-center gap-5">
          <Link href="/login" className="text-sm text-gray-700 hover:text-black">
            Login
          </Link>
          <Link href="/signup" className="cir-btn !h-[42px] !px-5 !text-sm">
            Start free trial
            <svg
              className="cir-btn__arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </Link>
        </div>

        <ProductMegaMenu 
          isOpen={activeMegaMenu === 'Product'} 
          onClose={() => setActiveMegaMenu(null)}
          onMouseEnter={() => handleMouseEnter('Product')}
          onMouseLeave={handleMouseLeave}
        />
        <AgentsMegaMenu 
          isOpen={activeMegaMenu === 'Agents'} 
          onMouseEnter={() => handleMouseEnter('Agents')}
          onMouseLeave={handleMouseLeave}
        />
      </nav>

      {/* HERO */}
      <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto text-center relative z-10 pointer-events-none">
        {/* We add pointer-events-none to the section so the cursor can interact, but add pointer-events-auto to buttons/interactive parts */}
        
        {/* Heading */}
        <div
          className="mb-5 animate-fade-in-up pointer-events-none"
          style={{ opacity: 0, animationDelay: "0.3s" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight block text-black font-sans">
            Create Smarter. Publish Faster.
          </h1>
          <BlurGradientText
            text="AI Powers Your Content."
            animateBy="words"
            direction="bottom"
            delay={80}
            colors={['#d79de4', '#8763e5', '#d79de4']}
            animationSpeed={4}
            className="text-6xl md:text-7xl font-normal leading-tight tracking-tight flex justify-center mt-2"
          />
        </div>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up pointer-events-none"
          style={{ opacity: 0, animationDelay: "0.4s" }}
        >
          Multi-agent AI writes, voices, and publishes your content across
          every platform — so your team scripts once and ships everywhere.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up pointer-events-auto mb-12"
          style={{ opacity: 0, animationDelay: "0.5s" }}
        >
          <Link
            href="/login"
            className="cir-btn"
          >
            Start free trial
            <svg
              className="cir-btn__arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </Link>
        </div>

        {/* Tab bar */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up pointer-events-auto"
          style={{ opacity: 0, animationDelay: "0.6s" }}
        >
          <div className="bg-gray-100 rounded-lg p-1">
            {/* Mobile */}
            <div className="grid grid-cols-2 gap-1 md:hidden">
              {TABS.map((tab) => {
                const { label, icon: Icon } = TAB_META[tab as keyof typeof TAB_META];
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center">
              {TABS.map((tab, i) => {
                const { label, icon: Icon } = TAB_META[tab as keyof typeof TAB_META];
                const isActive = activeTab === tab;
                return (
                  <div key={tab} className="flex items-center">
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white text-black shadow-sm"
                          : "text-gray-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                    {i < TABS.length - 1 && (
                      <div className="w-px h-5 bg-gray-300 mx-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video + Overlay */}
        <div
          className="relative rounded-3xl overflow-hidden animate-fade-in-up pointer-events-auto max-w-4xl mx-auto shadow-xl border border-black/5"
          style={{ opacity: 0, animationDelay: "0.7s", height: "450px" }}
        >
          <video
            src="/garden-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />


          {/* ── SCRIPTING ── */}
          {activeTab === "scripting" && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in-overlay">
              <div
                className="absolute top-1/2 left-1/2 bg-white rounded-2xl shadow-xl w-[330px] animate-slide-up-overlay text-left overflow-hidden border border-black/5"
                style={{ opacity: 0 }}
              >
                <div className="px-5 pt-5 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8763e5" }} />
                    <span className="text-[13px] font-semibold text-black">Script Generator</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">script.ai</span>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-4">
                  <p className="text-[11px] text-gray-400 font-medium mb-2">Input</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Create a 60-second reel script for a SaaS launch targeting startup founders
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] text-gray-400 font-medium">Output</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-emerald-600 font-medium">Complete</span>
                    </div>
                  </div>
                  <p className="text-[13px] text-black leading-relaxed mb-1">
                    &quot;Still posting manually in 2025?&quot;
                  </p>
                  <p className="text-[13px] text-gray-400 leading-relaxed">
                    Your competitors use AI to script, film, and publish — all before lunch. Meet your new workflow...
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-md text-white font-medium" style={{ backgroundColor: "#8763e5" }}>Bold</span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-gray-100 text-gray-400 font-medium">Casual</span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-gray-100 text-gray-400 font-medium">Formal</span>
                  </div>
                  <span className="text-[11px] text-gray-300 font-mono">847w</span>
                </div>
              </div>

              <div
                className="absolute bg-white rounded-full shadow-md border border-black/5 pl-2 pr-4 py-2 flex items-center gap-2.5 animate-slide-up-overlay"
                style={{ opacity: 0, transform: "none", top: "auto", bottom: "1.5rem", left: "1.5rem" }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(135, 99, 229, 0.12)" }}>
                  <Sparkles className="w-3 h-3" style={{ color: "#8763e5" }} />
                </div>
                <span className="text-[12px] font-medium text-gray-500">Writing script...</span>
              </div>
            </div>
          )}

          {/* ── MEDIA ── */}
          {activeTab === "media" && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in-overlay">
              <div
                className="absolute top-1/2 left-1/2 bg-white rounded-2xl shadow-xl w-[330px] animate-slide-up-overlay text-left overflow-hidden border border-black/5"
                style={{ opacity: 0 }}
              >
                <div className="px-5 pt-5 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8763e5" }} />
                    <span className="text-[13px] font-semibold text-black">Media Studio</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">3 of 4 ready</span>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-3 space-y-0">
                  <div className="flex items-center justify-between py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-mono">16:9</div>
                      <div>
                        <p className="text-[12px] text-black font-medium">YouTube Thumbnail</p>
                        <p className="text-[11px] text-gray-400">1280 × 720 · PNG</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-gray-400">Done</span>
                    </div>
                  </div>

                  <div className="h-px bg-gray-50" />

                  <div className="flex items-center justify-between py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-mono">9:16</div>
                      <div>
                        <p className="text-[12px] text-black font-medium">Reel Cover</p>
                        <p className="text-[11px] text-gray-400">1080 × 1920 · PNG</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-gray-400">Done</span>
                    </div>
                  </div>

                  <div className="h-px bg-gray-50" />

                  <div className="flex items-center justify-between py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-mono">MP4</div>
                      <div>
                        <p className="text-[12px] text-black font-medium">B-Roll Clips</p>
                        <p className="text-[11px] text-gray-400">4 clips · 60s total</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-gray-400">Done</span>
                    </div>
                  </div>

                  <div className="h-px bg-gray-50" />

                  <div className="flex items-center justify-between py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-mono">WAV</div>
                      <div>
                        <p className="text-[12px] text-black font-medium">AI Voiceover</p>
                        <p className="text-[11px] text-gray-400">ElevenLabs · Natural</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full border border-gray-200 border-t-gray-500 animate-spin" />
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1">
                  <div className="flex gap-[2px] h-1.5 rounded-full overflow-hidden">
                    <div className="flex-[3] bg-gray-200 rounded-l-full" />
                    <div className="flex-[2] bg-gray-150" style={{ backgroundColor: "#e8e8ed" }} />
                    <div className="flex-[2] bg-gray-100" />
                    <div className="flex-[1] bg-gray-50 rounded-r-full" />
                  </div>
                </div>
              </div>

              <div
                className="absolute bg-white rounded-full shadow-md border border-black/5 pl-2 pr-4 py-2 flex items-center gap-2.5 animate-slide-up-overlay"
                style={{ opacity: 0, transform: "none", top: "auto", bottom: "1.5rem", left: "1.5rem" }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(135, 99, 229, 0.12)" }}>
                  <Zap className="w-3 h-3" style={{ color: "#8763e5" }} />
                </div>
                <span className="text-[12px] font-medium text-gray-500">Rendering assets...</span>
              </div>
            </div>
          )}

          {/* ── PACKAGING ── */}
          {activeTab === "packaging" && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in-overlay">
              <div
                className="absolute top-1/2 left-1/2 bg-white rounded-2xl shadow-xl w-[330px] animate-slide-up-overlay text-left overflow-hidden border border-black/5"
                style={{ opacity: 0 }}
              >
                <div className="px-5 pt-5 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8763e5" }} />
                    <span className="text-[13px] font-semibold text-black">Metadata</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-medium">All optimized</span>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-4">
                  <p className="text-[11px] text-gray-400 font-medium mb-3">Hashtags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 font-medium">#ContentStrategy</span>
                    <span className="text-[12px] px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 font-medium">#AIContent</span>
                    <span className="text-[12px] px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 font-medium">#SaaS</span>
                    <span className="text-[12px] px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 font-medium">#Marketing</span>
                    <span className="text-[12px] px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 font-medium">+6 more</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-4 space-y-3.5">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] text-gray-600 font-medium">Instagram</span>
                      <span className="text-[11px] text-gray-300 font-mono">186 / 2,200</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gray-300" style={{ width: "8%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] text-gray-600 font-medium">X (Twitter)</span>
                      <span className="text-[11px] text-gray-300 font-mono">248 / 280</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "89%", backgroundColor: "#d79de4" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] text-gray-600 font-medium">YouTube SEO</span>
                      <span className="text-[11px] text-emerald-500 font-mono">Optimized</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-400" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bg-white rounded-full shadow-md border border-black/5 pl-2 pr-4 py-2 flex items-center gap-2.5 animate-slide-up-overlay"
                style={{ opacity: 0, transform: "none", top: "auto", bottom: "1.5rem", left: "1.5rem" }}
              >
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <span className="text-[12px] font-medium text-gray-500">Metadata ready</span>
              </div>
            </div>
          )}

          {/* ── PUBLISH ── */}
          {activeTab === "publish" && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in-overlay">
              <div
                className="absolute top-1/2 left-1/2 bg-white rounded-2xl shadow-xl w-[330px] animate-slide-up-overlay text-left overflow-hidden border border-black/5"
                style={{ opacity: 0 }}
              >
                <div className="px-5 pt-5 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8763e5" }} />
                    <span className="text-[13px] font-semibold text-black">Schedule</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">3 platforms</span>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-3 space-y-0">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </div>
                      <div>
                        <p className="text-[12px] text-black font-medium">Instagram Reel</p>
                        <p className="text-[11px] text-gray-400">Today · 9:00 AM</p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 font-medium">Scheduled</span>
                  </div>

                  <div className="h-px bg-gray-50" />

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                      <div>
                        <p className="text-[12px] text-black font-medium">LinkedIn Article</p>
                        <p className="text-[11px] text-gray-400">Today · 11:30 AM</p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 font-medium">Queued</span>
                  </div>

                  <div className="h-px bg-gray-50" />

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </div>
                      <div>
                        <p className="text-[12px] text-black font-medium">YouTube Short</p>
                        <p className="text-[11px] text-gray-400">Fri · 2:00 PM</p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-gray-100 text-gray-400 font-medium">Draft</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="px-5 py-4">
                  <button className="w-full text-white py-2.5 rounded-xl text-[13px] font-semibold bg-black hover:bg-gray-800 transition-colors">
                    Publish All
                  </button>
                </div>
              </div>

              <div
                className="absolute bg-white rounded-full shadow-md border border-black/5 pl-2 pr-4 py-2 flex items-center gap-2.5 animate-slide-up-overlay"
                style={{ opacity: 0, transform: "none", top: "auto", bottom: "1.5rem", left: "1.5rem" }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(135, 99, 229, 0.12)" }}>
                  <Rocket className="w-3 h-3" style={{ color: "#8763e5" }} />
                </div>
                <span className="text-[12px] font-medium text-gray-500">Ready to publish</span>
              </div>
            </div>
          )}
        </div>

        {/* Publishing Integrations */}
        <div
          className="mt-24 flex flex-col items-center justify-center gap-6 animate-fade-in-up pointer-events-auto"
          style={{ opacity: 0, animationDelay: "0.8s" }}
        >
          <p className="text-sm font-medium text-gray-400/80 tracking-widest uppercase">
            Publish instantly to your favorite platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <span className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span className="font-semibold tracking-wide">YouTube</span>
            </span>
            <span className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span className="font-semibold tracking-wide">Instagram</span>
            </span>
            <span className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className="font-semibold tracking-wide">X (Twitter)</span>
            </span>
            <span className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="font-semibold tracking-wide">LinkedIn</span>
            </span>
            <span className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span className="font-semibold tracking-wide">Facebook</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function NavItem({ 
  label, 
  hasDropdown, 
  isActive, 
  onClick,
  onMouseEnter,
  onMouseLeave,
  href 
}: { 
  label: string; 
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-1 text-sm text-gray-700 transition hover:text-black`}>
        {label}
      </Link>
    );
  }
  return (
    <div 
      className="relative py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button 
        onClick={onClick}
        className={`flex items-center gap-1 text-sm transition ${isActive ? 'text-[#8763e5]' : 'text-gray-700 hover:text-black'}`}
      >
        {label}
        {hasDropdown && <ChevronDown size={14} className={isActive ? 'text-[#8763e5]/70' : 'text-black/40'} />}
      </button>
    </div>
  );
}
