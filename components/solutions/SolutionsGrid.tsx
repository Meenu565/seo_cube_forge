"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Film, Building2, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


const SOLUTIONS_ITEMS = [
  {
    slug: "marketing",
    title: "Marketing Teams",
    badge: "Scale Brand Campaigns",
    description: "Unite research, multi-tone copywriting, 4K visual art direction, and multi-network publishing into one calm operating system.",
    metric: "10x",
    metricLabel: "Faster campaign turnaround",
    icon: Users,
    color: "#8763e5",
    accentBg: "bg-[#8763e5]/10",
    tags: ["Campaign Builder", "Brand IQ Vault", "Direct Publishing"]
  },
  {
    slug: "media-entertainment",
    title: "Media & Entertainment",
    badge: "Viral Shorts & Syndication",
    description: "Convert raw podcast recordings, episodes, and trailers into 50+ viral TikToks, Reels, and YouTube Shorts with animated karaoke subtitles.",
    metric: "50+",
    metricLabel: "Viral clips per recording",
    icon: Film,
    color: "#0284c7",
    accentBg: "bg-[#0284c7]/10",
    tags: ["Kinetic Captions", "9:16 Auto-Frame", "Teaser Generator"]
  },
  {
    slug: "agencies",
    title: "Agencies & Consultancies",
    badge: "Multi-Client Retainers",
    description: "Manage 50+ client brands with isolated Brand IQ containers, white-label client approval links, and 5x gross margin expansion.",
    metric: "5x",
    metricLabel: "Gross margin expansion",
    icon: Building2,
    color: "#d97706",
    accentBg: "bg-[#d97706]/10",
    tags: ["Brand Separation", "White-Label Portals", "Batch Generation"]
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    badge: "Regulated Security & SLA",
    description: "Deploy private VPC LLM clusters with SOC2 Type II compliance, GuardIQ policy checking, custom RBAC, and dedicated 24/7 engineering.",
    metric: "99.99%",
    metricLabel: "Guaranteed SLA uptime",
    icon: ShieldCheck,
    color: "#059669",
    accentBg: "bg-[#059669]/10",
    tags: ["SOC2 Type II", "Private VPC", "GuardIQ Governance"]
  }
];

export default function SolutionsGrid() {
  return (
    <section className="relative py-24 bg-white border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
              Tailored Solutions
            </span>
            <h2 className={`mt-3 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl leading-[1.08] `}>
              Engineered for your industry & team.
            </h2>
            <p className="mt-4 text-base text-black/65 leading-relaxed max-w-2xl font-normal">
              Whether you are an ambitious growth marketing team, a media studio, an agency running 50 retainers, or a regulated global enterprise.
            </p>
          </div>
        </div>

        {/* 4-Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.slug}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#fbfafd] p-7 border border-black/5 transition-all hover:bg-white hover:border-[#8763e5]/40 hover:shadow-xl hover:shadow-[#8763e5]/5"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accentBg} transition-transform group-hover:scale-110 shadow-2xs`}>
                      <Icon size={22} style={{ color: item.color }} />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black/70 border border-black/5 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-medium tracking-tight text-neutral-900 `}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-black/60 leading-relaxed line-clamp-3 font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-black/60 border border-black/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Link */}
                <div className="mt-8 border-t border-black/5 pt-5">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-neutral-900 font-mono">
                      {item.metric}
                    </div>
                    <div className="text-[11px] text-black/50 font-medium">
                      {item.metricLabel}
                    </div>
                  </div>

                  <Link
                    href={`/solutions/${item.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-all group-hover:bg-[#8763e5] group-hover:shadow-md group-hover:shadow-[#8763e5]/20"
                  >
                    <span>Explore {item.title}</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
