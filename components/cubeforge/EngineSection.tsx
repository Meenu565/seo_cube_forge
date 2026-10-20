import React from "react";
import Link from "next/link";

const groups = [
  {
    t: "Research & Strategy",
    slug: "research-and-strategy",
    img: "research.jpg",
    d: "Autonomous agents ingest URLs, analyze buyer psychology, and uncover competitor whitespace to build data-backed campaign briefs.",
    g: "#2b1450,#0d0a1a",
  },
  {
    t: "Copywriting & Scripting",
    slug: "copywriting-and-scripting",
    img: "copy.png",
    d: "Produce high-retention hooks, multi-format scripts, and platform-native copy tailored for multi-channel use, guided by your brand voice.",
    g: "#ff8a3d,#3a0d0d",
  },
  {
    t: "Visual & Media Generation",
    slug: "visual-and-media-generation",
    img: "visual.jpg",
    d: "Translate concepts into image sets, write Midjourney-grade prompts, and compose publication-ready social carousels.",
    g: "#a9c8ff,#4b2d8f",
  },
  {
    t: "Video Automation",
    slug: "video-automation",
    img: "video.jpg",
    d: "Slice scripts into scene prompts, synthesize contextual clips, and stitch transitions, voiceovers, and captions into final MP4s.",
    g: "#333,#000",
  },
  {
    t: "Compliance & Scheduling",
    slug: "compliance-and-scheduling",
    img: "compliance.jpg",
    d: "Automated guardrails audit safety and brand guidelines before queuing content at your audience's peak engagement hours.",
    g: "#e8f5e9,#2e7d32",
  },
  {
    t: "Publishing & Cost Analytics",
    slug: "publishing-and-analytics",
    img: "publish.jpg",
    d: "Publish directly to social platforms via authenticated APIs while tracking exact token spend and campaign ROI.",
    g: "#ffe08a,#c47a00",
  },
];

export default function EngineSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">Six capability groups</p>
      <div className="mt-2 grid gap-6 md:grid-cols-2 md:items-start">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">Everything inside the engine.</h2>
        <p className="max-w-sm text-sm text-black/70 md:justify-self-end">
          Six connected capability groups — each one a full system on its own, and stronger together.
        </p>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <Link key={g.t} href={`/features/${g.slug}`} className="group block transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer">
            <article>
              <div className="relative h-56 w-full rounded-3xl overflow-hidden border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_36px_rgba(135,99,229,0.18)] transition-all duration-300">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(/images/features/${g.img}), linear-gradient(135deg,${g.g})`,
                  }}
                />
                <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/15" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-black group-hover:text-brand transition-colors">
                {g.t}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-black/60">
                {g.d}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
