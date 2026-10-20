"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Bot, FileCheck2, KeyRound, LockKeyhole } from "lucide-react";

export const topics = [
  {
    id: "privacy",
    icon: LockKeyhole,
    category: "Privacy & data",
    title: "Information and privacy requests",
    text: "Ask about information you provide while using CubeForge Labs, or send a privacy-related question to our team.",
    subject: "Privacy%20and%20data%20request"
  },
  {
    id: "accounts",
    icon: KeyRound,
    category: "Accounts & integrations",
    title: "Account access and connected channels",
    text: "Get help with account access or questions about publishing connections such as LinkedIn and X.",
    subject: "Account%20and%20connection%20security"
  },
  {
    id: "ai-content",
    icon: Bot,
    category: "AI & content",
    title: "Generated content and review",
    text: "CubeForge Labs helps teams research, create, and prepare content. Review generated material for accuracy and suitability before you publish it.",
    subject: "AI%20and%20generated%20content"
  },
  {
    id: "security",
    icon: FileCheck2,
    category: "Security reviews",
    title: "Security and procurement questions",
    text: "Tell us what your team needs to assess and which parts of the product you plan to use. We’ll route the request to the right person.",
    subject: "Security%20review%20request"
  }
];

export default function TrustTopicsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Outer scroll container: 300vh height ensures smooth, controllable scrolling through all 4 topics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numTopics = topics.length;
    // Map scroll progress (0.0 to 1.0) into discrete topic indexes (0 to 3)
    const index = Math.min(numTopics - 1, Math.max(0, Math.floor(latest * numTopics)));
    setActiveIndex(index);
  });

  const handleTopicClick = (idx: number) => {
    setActiveIndex(idx);
    if (containerRef.current) {
      const numTopics = topics.length;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = scrollTop + rect.top + ((idx + 0.35) / numTopics) * totalScrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      id="trust-topics"
      ref={containerRef}
      className="relative h-[300vh] w-full"
      aria-labelledby="topics-title"
    >
      {/* Sticky viewport container pins in place during scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#8657d8]/5 rounded-full blur-3xl pointer-events-none -z-20" />

        <div className="w-full max-w-[1440px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(330px,0.72fr)_minmax(0,1.38fr)] gap-10 lg:gap-20 items-center">
            
            {/* Left Column: Prominent Fixed Headline, Eyebrow & Live Progress Indicator */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#593695]">
                  <span className="w-2 h-2 rounded-full bg-[#8657d8]" aria-hidden="true" />
                  Trust resources
                </p>

                <h2
                  id="topics-title"
                  className="mt-4 text-5xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-normal tracking-[-0.035em] text-[#21192b] leading-[1.02] font-sans"
                >
                  Information for<br />your review.
                </h2>

                <p className="mt-5 max-w-[420px] text-sm sm:text-base leading-relaxed text-[#5b5063] font-sans">
                  Choose a topic to send a focused question to CubeForge Labs.
                </p>
              </div>

              {/* Aesthetic Editorial Progress Indicator */}
              <div className="flex flex-col gap-2.5 pt-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-2 select-none">
                    <span
                      key={activeIndex}
                      className="text-3xl sm:text-4xl font-normal text-[#8657d8] leading-none font-sans"
                    >
                      0{activeIndex + 1}
                    </span>
                    <span className="text-[11px] font-sans tracking-[0.22em] uppercase text-[#21192b]/35 font-medium">
                      / 0{topics.length}
                    </span>
                  </div>

                  {/* Refined 1.5px Hairline Progress Track */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickPct = (e.clientX - rect.left) / rect.width;
                      const targetIdx = Math.min(topics.length - 1, Math.max(0, Math.floor(clickPct * topics.length)));
                      handleTopicClick(targetIdx);
                    }}
                    className="w-32 sm:w-40 h-[1.5px] bg-[#21192b]/10 rounded-full overflow-hidden relative cursor-pointer"
                    title="Click to jump between topics"
                  >
                    <motion.div
                      className="h-full bg-[#8657d8] rounded-full"
                      animate={{ width: `${((activeIndex + 1) / topics.length) * 100}%` }}
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    />
                  </div>
                </div>

                {/* Subtle active category badge */}
                <p className="text-[11px] font-sans tracking-[0.14em] uppercase text-[#8657d8] font-bold">
                  {topics[activeIndex].category}
                </p>
              </div>
            </div>

            {/* Right Column: Moving Options with Active White Card Highlight */}
            <div className="relative">
              <motion.div
                className="flex flex-col gap-3.5 sm:gap-4"
                animate={{
                  y: -(activeIndex * 16)
                }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                {topics.map(({ icon: Icon, category, title, text, subject }, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <motion.article
                      key={title}
                      onClick={() => handleTopicClick(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleTopicClick(idx);
                        }
                      }}
                      className={`relative grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)_auto] gap-y-3 sm:gap-y-0 sm:gap-x-8 items-center px-8 py-6 sm:px-10 sm:py-7 rounded-2xl cursor-pointer transition-all select-none ${
                        !isActive ? "border-b border-[#39234f]/12 hover:bg-white/40" : ""
                      }`}
                      animate={{
                        scale: isActive ? 1.015 : 0.99,
                        x: isActive ? 8 : 0,
                        opacity: isActive ? 1 : 0.42
                      }}
                      transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    >
                      {/* Active White Card Highlight Backdrop */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTopicCardHighlight"
                          className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgba(54,35,69,0.1),0_4px_16px_rgba(0,0,0,0.03)] border border-[#8657d8]/25 -z-10 pointer-events-none"
                          transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        />
                      )}

                      {/* Column 1: Category */}
                      <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] text-[#6b5490] self-start pt-1.5">
                        {category}
                      </span>

                      {/* Column 2: Title & Description */}
                      <div className="flex flex-col gap-1.5 pr-4">
                        <h3
                          className="text-[27px] sm:text-[31px] lg:text-[34px] font-normal leading-[1.16] text-[#21192b] font-sans"
                        >
                          {title}
                        </h3>
                        <p className="text-sm sm:text-[14.5px] leading-[1.68] text-[#5b5660]">
                          {text}
                        </p>
                      </div>

                      {/* Column 3: Contact Link */}
                      <a
                        href={`mailto:info@cubeforgelabs.com?subject=${subject}`}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Ask CubeForge Labs about ${category}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#57358f] hover:text-[#3d1f6d] whitespace-nowrap self-center transition-colors px-3 py-2 rounded-lg hover:bg-[#8657d8]/10"
                      >
                        <Icon size={17} aria-hidden="true" />
                        <span>Contact our team</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

