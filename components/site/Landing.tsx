"use client";

import React from "react";
import Hero from "@/components/site/Hero";
import KraftShowcaseSection from "@/components/site/KraftShowcaseSection";
import OutputVolumeSection from "@/components/site/OutputVolumeSection";
import NexaStageSection from "@/components/site/NexaStageSection";
import HowItWorks from "@/components/site/HowItWorks";
import PriceBreakdownFeature from "@/components/site/PriceBreakdownFeature";
import AutoPublishingFeature from "@/components/site/AutoPublishingFeature";
import LiveAgents from "@/components/site/LiveAgents";
import FAQ from "@/components/site/FAQ";
import ChoiceSection from "@/components/site/ChoiceSection";
import SereneSection from "@/components/site/SereneSection";
import CinematicMotionSection from "@/components/site/CinematicMotionSection";
import Footer from "@/components/site/Footer";

export default function Landing() {
  return (
    <div className="bg-white text-black min-h-screen relative">
      <Hero />
      <KraftShowcaseSection />
      <OutputVolumeSection />
      <NexaStageSection />
      <HowItWorks />
      <PriceBreakdownFeature />
      <AutoPublishingFeature />
      <LiveAgents />
      <FAQ />
      <ChoiceSection />
      <SereneSection />
      <CinematicMotionSection />
      <Footer />
    </div>
  );
}
