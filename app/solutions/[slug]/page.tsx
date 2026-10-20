import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { solutionsDataBySlug, SolutionPageData } from "@/components/solutions/solutionsData";
import SolutionRoiCalculator from "@/components/solutions/SolutionRoiCalculator";
import SolutionArchitectureSection from "@/components/solutions/SolutionArchitectureSection";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Quote, 
  Layers, 
  Cpu, 
  DollarSign, 
  Users, 
  Film, 
  Building2, 
  Clock, 
  Share2,
  CheckCheck
} from "lucide-react";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(solutionsDataBySlug).map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = solutionsDataBySlug[params.slug];
  if (!data) {
    return {
      title: "Solution | CubeForgeLabs",
    };
  }

  const title = `${data.title} Solutions Engine | CubeForgeLabs`;
  const description =
    data.heroSubheadline.length > 155 ? `${data.heroSubheadline.slice(0, 152)}...` : data.heroSubheadline;

  return {
    title,
    description,
    alternates: {
      canonical: `https://cubeforgelabs.com/solutions/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://cubeforgelabs.com/solutions/${params.slug}`,
      siteName: "CubeForgeLabs",
      type: "website",
      images: [
        {
          url: "/cubeforgelabs_logo_darkmode.png",
          width: 1200,
          height: 630,
          alt: `${data.title} - CubeForgeLabs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/cubeforgelabs_logo_darkmode.png"],
    },
  };
}

const iconMap: Record<string, any> = {
  Sparkles,
  ShieldCheck,
  Send: Share2,
  DollarSign,
  Film,
  TrendingUp,
  Share2,
  Building2,
  CheckCheck,
  Zap,
  Cpu,
  Users,
  Clock
};

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const data: SolutionPageData | undefined = solutionsDataBySlug[params.slug];

  if (!data) {
    notFound();
  }

  const otherSolutions = [
    { slug: "marketing", label: "Marketing Teams", desc: "10x campaign turnaround" },
    { slug: "media-entertainment", label: "Media & Entertainment", desc: "Auto-clip viral shorts" },
    { slug: "agencies", label: "Agencies", desc: "Multi-client Brand IQ vaults" },
    { slug: "enterprise", label: "Enterprise", desc: "SOC2 & Private VPC" }
  ].filter(s => s.slug !== data.slug && s.slug !== data.slug.replace("-teams", "").replace("-and-", "-"));

  return (
    <div className={`min-h-screen bg-white text-neutral-900 ${inter.className}`}>
      {/* Navigation */}
      <Navbar />

      <main className="pt-[72px]">
        
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#faf9fe] via-white to-white">
          {/* Ambient Lighting */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-3xl pointer-events-none -z-10 opacity-25"
            style={{ backgroundColor: data.accentColor }}
          />

          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              
              {/* Left Column: Typography */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Badge */}
                <div 
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border shadow-2xs"
                  style={{
                    backgroundColor: `${data.accentColor}10`,
                    borderColor: `${data.accentColor}25`,
                    color: data.accentColor
                  }}
                >
                  <Sparkles size={13} style={{ color: data.accentColor }} />
                  <span className={`text-[13px] tracking-wide `}>{data.badge}</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-black leading-tight font-sans">
                  {data.heroHeadline}
                </h1>

                {/* Subheadline */}
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-normal font-sans">
                  {data.heroSubheadline}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/login"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: data.accentColor }}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-[15px] font-semibold text-black hover:bg-black/5 transition-all"
                  >
                    <span>Book Solution Demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Metrics Card (Styled per Screenshot 1) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-neutral-950 p-8 text-white shadow-2xl border border-neutral-800">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#d79de4]">
                      Solution Telemetry • {data.title}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                      <div className={`text-3xl sm:text-4xl font-normal `} style={{ color: data.accentColor }}>
                        {data.statPrimary}
                      </div>
                      <div className="mt-1 text-xs text-neutral-400">
                        {data.statPrimaryLabel}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                      <div className={`text-3xl sm:text-4xl font-normal text-emerald-400 `}>
                        {data.statSecondary}
                      </div>
                      <div className="mt-1 text-xs text-neutral-400">
                        {data.statSecondaryLabel}
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="mt-6 rounded-2xl bg-white/5 p-5 border border-white/10 relative">
                    <Quote size={20} className="text-white/20 absolute top-3 right-3" />
                    <p className={`text-sm sm:text-base text-neutral-200 leading-relaxed font-normal `}>
                      “{data.quote}”
                    </p>
                    <div className="mt-3 text-xs font-semibold text-[#d79de4]">
                      — {data.quoteAuthor}, {data.quoteRole}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Before vs After Challenges Section */}
        <section className="py-20 bg-[#faf9fe] border-t border-black/5">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
                Transformational Impact
              </span>
              <h2 className={`mt-3 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl leading-[1.08] `}>
                The Old Way vs. The CubeForgeLabs Way
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {data.challenges.map((c, i) => (
                <div key={i} className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-black/5">
                  <div>
                    <h3 className={`text-lg font-medium text-neutral-900 mb-4 `}>
                      {c.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="rounded-xl bg-red-50/70 p-3.5 border border-red-200/60">
                        <div className="text-[11px] font-bold text-red-700 uppercase tracking-wider mb-1 font-mono">
                          ✕ Before CubeForgeLabs
                        </div>
                        <p className="text-xs text-red-950/80 leading-relaxed font-normal">
                          {c.before}
                        </p>
                      </div>

                      <div className="rounded-xl bg-emerald-50/70 p-3.5 border border-emerald-200/60">
                        <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1 font-mono">
                          ✓ With CubeForgeLabs
                        </div>
                        <p className="text-xs text-emerald-950 leading-relaxed font-normal">
                          {c.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Core Capabilities Grid */}
        <section className="py-24 bg-white border-t border-black/5">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
                Engineered Capabilities
              </span>
              <h2 className={`mt-3 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl leading-[1.08] `}>
                Purpose-built features for {data.title}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.capabilities.map((cap, idx) => {
                const Icon = iconMap[cap.iconName] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-3xl bg-[#fbfafd] p-6 sm:p-7 border border-black/5 transition-all hover:bg-white hover:border-[#8763e5]/40 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-2xs"
                          style={{ backgroundColor: `${data.accentColor}10`, color: data.accentColor }}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-black/60 border border-black/5">
                          {cap.tag}
                        </span>
                      </div>

                      <h3 className={`text-lg font-medium text-neutral-900 `}>
                        {cap.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. [NEW SLIDE 1] Interactive ROI & Unit Economics Calculator */}
        <SolutionRoiCalculator 
          slug={data.slug} 
          title={data.title} 
          accentColor={data.accentColor} 
        />

        {/* 5. 4-Step Workflow Section */}
        <section className="py-20 bg-gradient-to-b from-white via-[#faf9fe] to-white border-t border-black/5">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
                Execution Blueprint
              </span>
              <h2 className={`mt-3 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl leading-[1.08] `}>
                How {data.title} works in practice
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.workflows.map((wf) => (
                <div key={wf.step} className="rounded-3xl bg-white p-6 shadow-sm border border-black/5 relative">
                  <span className={`text-3xl font-normal text-black/20 block mb-3 `}>
                    {wf.step}
                  </span>
                  <h3 className={`text-base font-medium text-neutral-900 `}>
                    {wf.title}
                  </h3>
                  <p className="mt-2 text-xs text-black/60 leading-relaxed font-normal">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. [NEW SLIDE 2] Enterprise Tech Stack & Direct API Mesh */}
        <SolutionArchitectureSection 
          slug={data.slug} 
          title={data.title} 
          accentColor={data.accentColor} 
        />

        {/* 7. Switch to Other Solutions Hub */}
        <section className="py-16 bg-neutral-950 text-white border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#d79de4]">
                  Explore Other Solutions
                </span>
                <h3 className={`text-2xl font-medium mt-1 text-white `}>
                  Discover how other teams run on CubeForgeLabs
                </h3>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d79de4] hover:text-white transition"
              >
                <span>View All Solutions Overview</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {otherSolutions.map((os) => (
                <Link
                  key={os.slug}
                  href={`/solutions/${os.slug}`}
                  className="group rounded-2xl bg-white/5 p-5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <div className={`text-sm font-medium text-white group-hover:text-[#d79de4] transition flex items-center justify-between `}>
                    <span>{os.label}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-normal">
                    {os.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action */}
        <section className="py-24 bg-white text-center border-t border-black/5">
          <div className="mx-auto max-w-3xl px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8763e5]/10 px-4 py-1.5 text-xs font-semibold text-[#8763e5] mb-4">
              <Sparkles size={13} />
              <span className={`text-[13px] `}>Ready for {data.title}?</span>
            </span>
            <h2 className={`text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl leading-[1.08] `}>
              Start your 14-day free pilot today.
            </h2>
            <p className="mt-4 text-base text-black/65 leading-relaxed max-w-xl mx-auto font-normal">
              Zero setup fees. Full access to all 6 AI agents, Brand IQ memory vaults, and multi-channel auto-publishing.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/login"
                className="rounded-full bg-[#8763e5] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#8763e5]/25 transition hover:bg-[#7852dc]"
              >
                Get Started Now
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-black/10 bg-white px-8 py-3.5 text-[15px] font-semibold text-black transition hover:bg-black/5"
              >
                Schedule Team Demo
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
