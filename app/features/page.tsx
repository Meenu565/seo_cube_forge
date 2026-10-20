import type { Metadata } from "next";
import Link from "next/link";
import { inter, Nav, Btn, Tag, Testimonial, CTA, Footer, PurpleStage, MiniCard, Pill } from "@/components/cubeforge/shared";
import { groups, details, agents, Mock } from "@/components/cubeforge/featuresData";
import FeaturesHero from "@/components/cubeforge/FeaturesHero";
import EngineSection from "@/components/cubeforge/EngineSection";
import FeatureCards from "@/components/cubeforge/FeatureCards";

export const metadata: Metadata = {
  title: "Complete Content Production Engine Features | CubeForgeLabs",
  description:
    "Explore the 6 connected capability groups: research & strategy, copywriting, media generation, video automation, compliance, and multi-network analytics.",
  alternates: {
    canonical: "https://cubeforgelabs.com/features",
  },
  openGraph: {
    title: "Complete Content Production Engine Features | CubeForgeLabs",
    description:
      "From research to published post, explore every engine feature inside CubeForgeLabs.",
    url: "https://cubeforgelabs.com/features",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Engine Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Content Production Engine Features | CubeForgeLabs",
    description:
      "From research to published post, explore every engine feature inside CubeForgeLabs.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function FeaturesPage() {
  return (
    <main className={`${inter.className} bg-white text-black`}>
      <FeaturesHero />
      <EngineSection />
      <FeatureCards />
      <section className="px-6 pt-24 pb-16 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight text-black font-sans">A complete content<br/>production system.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-sans">From first research question to published post, ContentForge agents handle every stage — grounded in your brand, your audience, and your budget.</p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#" className="rounded-full border border-black/10 bg-white px-7 py-3 text-[15px] font-semibold text-black hover:bg-black/5 transition-colors">Start Free Trail</a>
          <a href="#" className="rounded-full bg-brand px-7 py-3 text-[15px] font-semibold text-white hover:bg-brand/90 transition-colors">Get A Demo</a>
        </div>
        
        <PurpleStage className="mx-auto mt-20 h-[400px] max-w-[1000px] shadow-2xl shadow-brand/20">
          <div className="relative h-full w-full">
            <div className="absolute left-20 top-20 w-[260px] rounded-2xl bg-white p-5 text-left shadow-2xl z-10">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Research</div>
              <div className="rounded-xl bg-black/5 p-4 text-sm font-semibold text-black">Audience mapped</div>
            </div>
            
            <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 text-left shadow-2xl z-20">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Script</div>
              <div className="flex gap-2">
                <span className="rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-600">Hook A</span>
                <span className="rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-600">Hook B</span>
              </div>
            </div>

            <div className="absolute bottom-20 right-20 w-[260px] rounded-2xl bg-white p-5 text-left shadow-2xl z-30">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Publish</div>
              <div className="flex items-center justify-between rounded-xl bg-black/5 p-4 text-sm font-semibold text-black">
                Twitter <Pill>Live</Pill>
              </div>
            </div>
          </div>
          <span className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"/><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand"/></span>
            6 agents working
          </span>
        </PurpleStage>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div className="md:sticky md:top-24 h-fit">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-black font-sans">Everything inside the<br/>engine.</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed font-sans">Six connected capability groups — each one a full system on its own, and stronger together.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {groups.map(([t, d], idx) => {
              const slugs = [
                "research-and-strategy",
                "copywriting-and-scripting",
                "visual-and-media-generation",
                "video-automation",
                "compliance-and-scheduling",
                "publishing-and-analytics"
              ];
              const slug = slugs[idx] || "research-and-strategy";
              return (
                <div key={t} className="flex flex-col justify-between rounded-3xl border border-brand/10 bg-[#f4f0ff]/50 p-6 transition-all hover:bg-[#f4f0ff] hover:shadow-lg hover:shadow-brand/5">
                  <div>
                    <h3 className="whitespace-pre-line text-lg font-semibold leading-tight">{t}</h3>
                    <p className="mt-3 text-sm text-black/60 leading-relaxed">{d}</p>
                  </div>
                  <Link href={`/features/${slug}`} className="mt-6 inline-flex items-center justify-between rounded-full bg-black pl-5 pr-3 py-2 text-xs font-semibold tracking-wide text-white hover:bg-black/80 w-fit gap-3">
                    Learn more <span className="text-[14px]">↗</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {details.map((d, i) => (
        <section key={d.n} className={`py-10 md:py-14 ${d.dark ? "bg-[#0d0a1a] text-white" : ""}`}>
          <div className={`mx-auto grid max-w-6xl items-center gap-10 md:gap-16 px-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className={i % 2 ? "md:pl-6" : "md:pr-6"}>
              <p className={`text-[11px] font-bold tracking-[0.2em] uppercase ${d.dark ? "text-brand" : "text-brand"}`}>{d.n} <span className="mx-2 opacity-50">—</span> {d.category}</p>
              <h2 className="mt-3 whitespace-pre-line text-4xl sm:text-5xl font-semibold leading-tight tracking-tight font-sans">{d.h}</h2>
              <p className={`mt-4 text-[16px] leading-relaxed ${d.dark ? "text-white/60" : "text-black/60"}`}>{d.p}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span key={t} className={`rounded-full px-3.5 py-1 text-xs font-medium shadow-sm border ${d.dark ? "border-white/10 bg-white/5 text-white/80" : "border-black/5 bg-white text-black/70"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={`h-[340px] md:h-[380px] w-full rounded-[2rem] bg-gradient-to-t ${d.bg} flex items-center justify-center p-6 shadow-xl`}>
              <div className="relative z-10 w-full"><Mock i={i} /></div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#151120] px-6 py-20 text-center text-white">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-sans text-white">Six agents. One pipeline.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] text-white/60 leading-relaxed">Each agent owns one stage and hands its output directly to the next — research becomes strategy, strategy becomes copy, copy becomes visual, visual becomes video, video becomes a published post.</p>
        
        <div className="mx-auto mt-24 flex max-w-5xl items-center justify-between relative px-8">
          <div className="absolute left-16 right-16 top-12 h-[2px] bg-white/5" />
          {agents.map(([a, n, r]) => (
            <div key={n} className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-brand/30 bg-[#251b3a] shadow-xl shadow-brand/10 text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:border-brand">
                {a}
              </div>
              <div className="mt-5 font-semibold text-white text-lg">{n}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/40">{r}</div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
