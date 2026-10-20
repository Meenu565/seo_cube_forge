import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inter, Btn, Tag, Testimonial, CTA, Footer, PurpleStage, MiniCard, Pill } from "@/components/cubeforge/shared";
import { groups, details, agents, Mock } from "@/components/cubeforge/featuresData";
import FeaturesHero from "@/components/cubeforge/FeaturesHero";
import EngineSection from "@/components/cubeforge/EngineSection";
import FeatureCards from "@/components/cubeforge/FeatureCards";
import SubFeatureShowcase from "@/components/cubeforge/SubFeatureShowcase";

export function generateStaticParams() {
  return details.map((d) => ({
    slug: d.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const feature = details.find((d) => d.slug === params.slug);
  if (!feature) {
    return {
      title: "Feature | CubeForgeLabs",
    };
  }

  const title = `${feature.category} Capability Engine | CubeForgeLabs`;
  const description = feature.p.length > 155 ? `${feature.p.slice(0, 152)}...` : feature.p;

  return {
    title,
    description,
    alternates: {
      canonical: `https://cubeforgelabs.com/features/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://cubeforgelabs.com/features/${params.slug}`,
      siteName: "CubeForgeLabs",
      type: "website",
      images: [
        {
          url: "/cubeforgelabs_logo_darkmode.png",
          width: 1200,
          height: 630,
          alt: `${feature.category} - CubeForgeLabs`,
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

export default function SingleFeaturePage({ params }: { params: { slug: string } }) {
  const featureIndex = details.findIndex(d => d.slug === params.slug);
  if (featureIndex === -1) return notFound();
  
  const feature = details[featureIndex];

  // Combine benefits and workflow into zig-zag sections
  const subFeatures = [
    ...(feature.benefits || []).map((b: any, i: number) => ({
      n: `0${i + 1}`,
      category: "Feature Capability",
      h: b.title,
      p: b.desc,
      tags: [],
      bg: feature.bg,
    })),
    ...(feature.workflow || []).map((w: any, i: number) => ({
      n: `0${(feature.benefits?.length || 0) + i + 1}`,
      category: "Workflow Stage",
      h: w.title,
      p: w.desc,
      tags: [],
      bg: feature.bg,
    }))
  ];

  return (
    <main className={`${inter.className} bg-white text-black`}>
      <FeaturesHero slug={params.slug} />
      <EngineSection />
      <FeatureCards slug={params.slug} />
      <section className="px-6 pt-16 pb-10 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight text-black font-sans">
          {feature.category}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-sans">
          {feature.p}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="rounded-full border border-black/10 bg-white px-7 py-3 text-[15px] font-semibold text-black hover:bg-black/5 transition-colors">Start Free Trial</a>
          <a href="#" className="rounded-full bg-brand px-7 py-3 text-[15px] font-semibold text-white hover:bg-brand/90 transition-colors">Get A Demo</a>
        </div>
        
        <PurpleStage className="mx-auto mt-12 h-[360px] max-w-[1000px] shadow-2xl shadow-brand/20">
           <div className="flex h-full w-full items-center justify-center p-8">
              <Mock i={featureIndex} />
           </div>
        </PurpleStage>
      </section>

      {/* Grid of features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div className="md:sticky md:top-24 h-fit">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-black font-sans">Deep dive into<br/>{feature.category.toLowerCase()}</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed font-sans">Everything you need to master this stage of your content production pipeline.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {subFeatures.map((sf) => (
              <div key={sf.h} className="flex flex-col justify-between rounded-3xl border border-brand/10 bg-[#f4f0ff]/50 p-6 transition-all hover:bg-[#f4f0ff] hover:shadow-lg hover:shadow-brand/5">
                <div>
                  <h3 className="whitespace-pre-line text-lg font-semibold leading-tight">{sf.h}</h3>
                  <p className="mt-3 text-sm text-black/60 leading-relaxed">{sf.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zig-Zag Sections */}
      {subFeatures.map((d, i) => (
        <section key={d.n} className={`py-10 md:py-14 ${feature.dark ? "bg-[#0d0a1a] text-white" : ""}`}>
          <div className={`mx-auto grid max-w-6xl items-center gap-10 md:gap-16 px-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className={i % 2 ? "md:pl-6" : "md:pr-6"}>
              <p className={`text-[11px] font-bold tracking-[0.2em] uppercase ${feature.dark ? "text-brand" : "text-brand"}`}>{d.n} <span className="mx-2 opacity-50">—</span> {d.category}</p>
              <h2 className="mt-3 whitespace-pre-line text-4xl sm:text-5xl font-semibold leading-tight tracking-tight font-sans">{d.h}</h2>
              <p className={`mt-4 text-[16px] leading-relaxed ${feature.dark ? "text-white/60" : "text-black/60"}`}>{d.p}</p>
            </div>
            <div className="relative h-[340px] md:h-[380px] w-full transition-transform duration-500 hover:-translate-y-1">
              <SubFeatureShowcase index={i} slug={params.slug} />
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
