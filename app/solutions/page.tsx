import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import StageSelectorSection from "@/components/solutions/StageSelectorSection";
import AgentWorkspaceGraph from "@/components/solutions/AgentWorkspaceGraph";
import PipelineSection from "@/components/solutions/PipelineSection";
import WhatElseSection from "@/components/solutions/WhatElseSection";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import TestimonialSection from "@/components/solutions/TestimonialSection";
import EngineCTA from "@/components/solutions/EngineCTA";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Industry & Team Content Solutions | CubeForgeLabs",
  description:
    "CubeForgeLabs gives marketing teams, media studios, agencies, and enterprises an autonomous operating system for campaign production.",
  alternates: {
    canonical: "https://cubeforgelabs.com/solutions",
  },
  openGraph: {
    title: "Industry & Team Content Solutions | CubeForgeLabs",
    description:
      "Turn one idea into a complete campaign. Tailored autonomous workflows for marketing, media, agencies, and enterprise.",
    url: "https://cubeforgelabs.com/solutions",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Industry & Team Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry & Team Content Solutions | CubeForgeLabs",
    description:
      "Turn one idea into a complete campaign. Tailored autonomous workflows for marketing, media, agencies, and enterprise.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function SolutionsPage() {
  return (
    <div className={`min-h-screen bg-white text-neutral-900 ${inter.className}`}>
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-[72px]">
        {/* 1. Hero Section with 3D Campaign Brief simulation & Brand logos */}
        <SolutionsHero />

        {/* 2. One system for every stage of content (01-06 interactive stage switcher) */}
        <StageSelectorSection />

        {/* 3. Every agent, one workspace (Connected Agent Mesh Graph) */}
        <AgentWorkspaceGraph />

        {/* 4. Aligned to the Content Pipeline (7-stage pipeline rows) */}
        <PipelineSection />

        {/* 5. What else can it do? (Interactive multi-mode keyword switcher) */}
        <WhatElseSection />

        {/* 6. Tailored Industry & Team Solutions (Marketing, Media, Agencies, Enterprise) */}
        <SolutionsGrid />

        {/* 7. Verified Impact Metric & Testimonial (4.2x faster turnaround) */}
        <TestimonialSection />

        {/* 8. Dark Engine CTA Section with 3D Geometric Polyhedral Graphic */}
        <EngineCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
