import React from "react";
import { Pill } from "./shared";

export const groups = [
  ["01. Research &\nStrategy", "Autonomous agents ingest URLs, analyze buyer psychology, and uncover competitor whitespace to build data-backed campaign briefs."],
  ["02. Copywriting &\nScripting", "Produce high-retention hooks, multi-format scripts, and platform-native copy tailored for multi-channel use, guided by your brand voice."],
  ["03. Visual & Media\nGeneration", "Translate concepts into image sets, write Midjourney-grade prompts, and compose publication-ready social carousels."],
  ["04. Video\nAutomation", "Slice scripts into scene prompts, synthesize contextual clips, and stitch transitions, voiceovers, and captions into final MP4s."],
  ["05. Compliance &\nScheduling", "Automated guardrails audit safety and brand guidelines before queuing content at your audience's peak engagement hours."],
  ["06. Publishing & Cost\nAnalytics", "Publish directly to social platforms via authenticated APIs while tracking exact token spend and campaign ROI."],
];

export interface FeatureDetail {
  slug: string;
  n: string;
  category: string;
  h: string;
  p: string;
  tags: string[];
  bg: string;
  dark?: boolean;
  benefits: { title: string; desc: string; img?: string }[];
  metrics: { stat: string; label: string; desc: string }[];
  workflow: { title: string; desc: string; img?: string }[];
}

export const details: FeatureDetail[] = [
  { 
    slug: "research-and-strategy", n: "01", category: "RESEARCH & STRATEGY", h: "Start from context,\nnot a blank page.", 
    p: "CubeForge Labs reads the product or context URL, scrapes what matters, and builds an audience profile before a single word gets written — including platform-specific strategy for LinkedIn, Twitter, Instagram, and YouTube.", 
    tags: ["Context URL", "Web Scraping", "Audience Profiling", "Competitor Whitespace", "Brand Voice Ingestion", "Cross-Platform Strategy", "Memory Retrieval"], 
    bg: "from-[#9e69ff] via-[#411099] to-[#080012]",
    benefits: [
      { title: "Deep Audience Empathy", desc: "Constructs granular buyer personas and emotional pain-point matrices grounded in live community data from Reddit and social feeds.", img: "/images/features/subfeatures/01_persona.jpg" },
      { title: "Automated Competitor Tracking", desc: "Monitors category leaders to uncover untapped positioning angles and narrative whitespace your brand can dominate.", img: "/images/features/subfeatures/02_competitor.jpg" },
      { title: "Strategic Brief Generation", desc: "Translates raw URLs into comprehensive, multi-channel strategy briefs in under 3 minutes.", img: "/images/features/subfeatures/03_brief.jpg" }
    ],
    metrics: [
      { stat: "90%", label: "Research Time Saved", desc: "Eliminate hours of manual SERP parsing and audience profiling with autonomous intelligence." },
      { stat: "3.4x", label: "Higher Engagement", desc: "Campaigns grounded in live audience sentiment and verified market gaps resonate instantly." },
      { stat: "10k+", label: "Signals Analyzed", desc: "Tap into a vast matrix of behavioral data across platforms to craft the perfect strategic brief." }
    ],
    workflow: [
      { title: "Context Ingestion & Scraping", desc: "Simply paste a product URL or brief. Our research agent scrapes the content, analyzes brand voice, and extracts key value propositions instantly.", img: "/images/features/subfeatures/04_scraper.jpg" },
      { title: "Market Positioning & Whitespace", desc: "The strategy agent cross-references your product against current SERP trends and competitor content to find high-impact whitespace.", img: "/images/features/subfeatures/05_positioning.jpg" },
      { title: "Multi-Channel Distribution Blueprint", desc: "Generates calibrated posting schedules, platform-specific hooks, and format guidance tailored for LinkedIn, X, and YouTube.", img: "/images/features/subfeatures/06_distribution.jpg" }
    ]
  },
  { 
    slug: "copywriting-and-scripting", n: "02", category: "COPYWRITING & SCRIPTING", h: "Every format, one\nconsistent voice.", 
    p: "Generate multiple hooks and core concepts, then let the Format Picker match the idea to the right structure — with field detection so scripts stay on-topic across long and short form.", 
    tags: ["Multiple hooks", "Core concepts", "Format Picker", "Field Detection", "Standard scripts", "Tutorial scripts", "YouTube deep-dive scripts", "Captions", "Hashtags"], 
    bg: "from-[#ff8040] via-[#802000] to-[#140500]",
    benefits: [
      { title: "Multi-Angle Hooks", desc: "Generate 20+ opening hooks for A/B testing, optimized for platform-specific retention curves and 3-second capture rates." },
      { title: "Tone Guard & Brand Voice", desc: "Real-time tone calibration guarantees output matches your brand guidelines, voice rules, and banned vocabulary lists." },
      { title: "Adaptive Multi-Format Engine", desc: "Instantly spin one core narrative into YouTube long-form, 𝕏 threads, LinkedIn thought leadership, and short-form video scripts." }
    ],
    metrics: [
      { stat: "10x", label: "Content Output", desc: "Scale your copywriting team's output without compromising on quality or brand voice." },
      { stat: "A/B", label: "Hook Testing Built-in", desc: "Never guess what works. Generate dozens of hooks to find the absolute highest converter." },
      { stat: "100%", label: "On-Brand Guarantee", desc: "Strict adherence to your style guide, tone of voice, and banned vocabulary lists." }
    ],
    workflow: [
      { title: "Concept Expansion & Angle Branching", desc: "Orin branches the strategic brief into multiple emotional angles, storytelling frameworks, and high-converting hooks." },
      { title: "Automated Script Drafting & Timestamps", desc: "Scripts are drafted with platform-native formatting, spoken-word pace markers, and dynamic scene timestamps." },
      { title: "Multi-Language Localization & Polish", desc: "Translates and localizes copy across global languages while preserving original brand tone, cadence, and cultural nuance." }
    ]
  },
  { 
    slug: "visual-and-media-generation", n: "03", category: "VISUAL & MEDIA GENERATION", h: "From prompt to\nrendered post.", 
    p: "ContentForge writes its own image prompts from the visual concept, generates the image set, builds carousel prompts, then composes and renders the final post with Playwright.", 
    tags: ["Visual Concept", "Image Prompt", "Image Generation", "Carousel Prompt", "HTML Post Composer", "Playwright rendering"], 
    bg: "from-[#40a0ff] via-[#004080] to-[#000a14]",
    benefits: [
      { title: "Autonomous Prompting", desc: "The AI agent writes its own Midjourney-optimized prompts based on the copy's emotional beat." },
      { title: "Pixel-Perfect Layouts", desc: "Auto-generates text overlays and carousel layouts respecting safe zones for Instagram and LinkedIn." },
      { title: "Brand Kit Integration", desc: "Automatically applies your exact hex codes, fonts, and logo watermarks to every visual." }
    ],
    metrics: [
      { stat: "< 2m", label: "Render Time", desc: "Go from text script to a fully rendered, production-ready image carousel in seconds." },
      { stat: "4K", label: "Asset Quality", desc: "All visuals are generated and upscaled to crisp, professional-grade resolutions." },
      { stat: "1-Click", label: "Brand Application", desc: "Instantly apply your logo, fonts, and color palettes to AI-generated imagery." }
    ],
    workflow: [
      { title: "Visual Conceptualization", desc: "The agent interprets the script to determine the best visual metaphors, styling, and color harmony.", img: "/images/features/subfeatures/04_concept.jpg" },
      { title: "Generative Image Rendering", desc: "High-fidelity images are generated, upscaled to 4K, and seamlessly cropped for social platforms.", img: "/images/features/subfeatures/05_render.jpg" },
      { title: "Headless Carousel Composer", desc: "Composes high-DPI HTML/CSS layouts and renders publication-ready image sets with Playwright.", img: "/images/features/subfeatures/06_composer.jpg" }
    ]
  },
  { 
    slug: "video-automation", n: "04", category: "VIDEO AUTOMATION", h: "Scripts become finished\nvideo.", 
    p: "A script is broken into scene-by-scene prompts, each scene is generated as an individual clip, and the clips are stitched into one final video — no manual editing pass required.", 
    tags: ["Script Slicing", "Scene Prompts", "B-Roll Synthesis", "Whisper Audio Sync", "Kinetic Subtitles", "60fps Stitching"], 
    bg: "from-[#ec4899] via-[#8b5cf6] to-[#0f0728]",
    benefits: [
      { title: "Scene-by-Scene Slicing", desc: "Intelligently breaks scripts into optimal 3-5 second visual segments for maximum retention." },
      { title: "B-Roll Synthesis", desc: "Automatically fetches or generates perfect contextual b-roll to match the speaker's exact words." },
      { title: "Instant Stitching", desc: "Compiles audio, generated clips, transitions, and dynamic captions into a final MP4 instantly." }
    ],
    metrics: [
      { stat: "60fps", label: "Silky Smooth Output", desc: "Videos are rendered beautifully with fluid animations and transitions." },
      { stat: "Zero", label: "Editing Required", desc: "Bypass Premiere Pro entirely. The agent handles the entire timeline assembly." },
      { stat: "Auto", label: "Dynamic Captions", desc: "High-retention, animated captions are burned in automatically for social feeds." }
    ],
    workflow: [
      { title: "Scene-by-Scene Slicing & Prompting", desc: "Kade parses the approved script into high-retention 3–5s visual segments, scoring emotional peaks and hook retention." },
      { title: "Contextual B-Roll & Waveform Sync", desc: "Synthesizes or fetches contextual video assets and aligns them to Whisper-transcribed audio timestamps with 0ms drift." },
      { title: "Multi-Track Stitching & 60fps Export", desc: "Compiles video tracks, background audio, dynamic kinetic captions, and seamless transitions into a finished 60fps MP4." }
    ]
  },
  { 
    slug: "compliance-and-scheduling", n: "05", category: "COMPLIANCE & SCHEDULING", h: "Reviewed before it\never reaches a\ncalendar.", 
    p: "Every piece of content is checked against safety guidelines and your brand guidelines. If it fails either check, ContentForge regenerates it automatically — nothing reaches the calendar unreviewed.", 
    tags: ["Safety guideline review", "Brand guideline review", "Regeneration after failure", "Publishing calendar"], 
    bg: "from-[#50d070] via-[#105020] to-[#021005]",
    benefits: [
      { title: "Zero-Risk Guardrails", desc: "Scans for 50+ risk categories including bias, copyright infringement, and off-brand messaging." },
      { title: "Auto-Regeneration", desc: "If a post fails compliance, the agent autonomously rewrites the specific failing segment." },
      { title: "Smart Queuing", desc: "Analyzes your audience's historical activity to schedule posts precisely when they are most active." }
    ],
    metrics: [
      { stat: "100%", label: "Brand Safe", desc: "Total peace of mind knowing no off-brand or risky content will ever be published." },
      { stat: "24/7", label: "Automated Review", desc: "The compliance agent never sleeps, reviewing content instantly at any volume." },
      { stat: "AI", label: "Smart Timing", desc: "Posts are slotted into your calendar at the exact moment your audience is online." }
    ],
    workflow: [
      { title: "Safety Scanning & Risk Detection", desc: "Autonomous agents audit every asset against 50+ regulatory categories, copyright rules, and platform compliance guidelines in under 420ms." },
      { title: "Autonomous Auto-Regeneration", desc: "If any phrase, caption, or visual frame fails compliance, the agent rewrites and re-renders only the flagged chunk instantly." },
      { title: "Audience Timing & Smart Queue", desc: "Approved posts are synced to your multi-channel calendar and published at peak engagement hours." }
    ]
  },
  { 
    slug: "publishing-and-analytics", n: "06", category: "PUBLISHING & COST ANALYTICS", h: "Publish directly. Track\nwhat it cost.", 
    p: "ContentForge publishes text, images, and video straight to Twitter using encrypted authentication, with live verification that the post went out — alongside a running record of generation spend.", 
    tags: ["Direct Twitter publishing", "Text, image, video", "Encrypted auth tokens", "Live verification", "Generation cost tracking"], 
    bg: "from-[#e0c030] via-[#604000] to-[#140a00]",
    benefits: [
      { title: "Native API Publishing", desc: "Direct, secure connection to Twitter, LinkedIn, and Instagram without third-party middle-men." },
      { title: "Cost-Per-Post Tracking", desc: "Transparent breakdown of API token spend, compute costs, and generation time for every campaign." },
      { title: "Closed-Loop Feedback", desc: "Ingests performance data to train the strategy agent for the next campaign cycle." }
    ],
    metrics: [
      { stat: "3+", label: "Platforms", desc: "Publish seamlessly to Twitter, LinkedIn, and Instagram from one unified engine." },
      { stat: "Live", label: "Cost Tracking", desc: "Monitor your exact AI compute spend per campaign in real-time." },
      { stat: "ROI", label: "Closed Loop", desc: "Performance metrics are fed back into the system to improve future content." }
    ],
    workflow: [
      { title: "Direct Multi-Platform API Dispatch", desc: "Publishes text, carousel slides, and 60fps video directly to 𝕏, LinkedIn, Instagram, and YouTube via encrypted OAuth 2.0 channels." },
      { title: "Granular Cost & Token Accounting", desc: "Tracks exact token spend, model latency, and GPU compute costs down to fractions of a cent per published post." },
      { title: "Closed-Loop Performance Telemetry", desc: "Monitors live impressions, CTRs, and engagement feedback to train and improve the next cycle of campaign briefs." }
    ]
  },
];

export const agents = [["CA", "Cato", "Research"], ["VE", "Vela", "Strategy"], ["OR", "Orin", "Copy"], ["IR", "Iris", "Visual"], ["KA", "Kade", "Video"], ["NO", "Nova", "Distribution"]];

export function Mock({ i }: { i: number }) {
  if (i === 0) return (
    <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3">
        <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Context Loaded</div>
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-black">
            <div className="grid h-5 w-5 place-items-center rounded bg-brand/10 text-[10px] text-brand">🔗</div>
            cubeforgelabs.com/platform-launch
          </div>
          <span className="text-[9px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Scraped</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black">Target Persona</span>
              <span className="text-[9px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full">B2B Founders & Growth / 28–45</span>
            </div>
            <Pill>Done</Pill>
          </div>
          <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black">Competitor Whitespace</span>
              <span className="text-[9px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full">4 Untapped Angles</span>
            </div>
            <Pill>Mapped</Pill>
          </div>
          <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="font-semibold text-black">Multi-Channel Strategy</div>
            <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-semibold text-brand">LinkedIn, X, YouTube Ready</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden"><div className="h-full bg-brand w-full rounded-full" /></div>
        </div>
      </div>
    </div>
  );
  if (i === 1) return (
    <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5 text-left">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Orin Copy Engine</div>
          <div className="text-xs font-bold text-black mt-0.5">Multi-Format Hook Studio</div>
        </div>
        <div className="flex gap-1.5">
          <span className="text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
            𝕏 Thread
          </span>
          <span className="text-[9px] font-medium text-black/50 bg-black/5 px-2 py-0.5 rounded-full">
            LinkedIn
          </span>
          <span className="text-[9px] font-medium text-black/50 bg-black/5 px-2 py-0.5 rounded-full">
            YouTube
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Hook A/B selector */}
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl p-2.5 bg-amber-50/70 border border-amber-200/80 shadow-sm cursor-pointer">
            <div className="flex justify-between items-center text-[8.5px] font-bold text-amber-800 mb-1">
              <span>Hook A (Contrarian)</span>
              <span className="text-emerald-700 bg-emerald-100/80 px-1.5 py-0.2 rounded font-mono">+4.2x CTR</span>
            </div>
            <p className="text-[10px] font-semibold text-black/90 leading-tight">
              &ldquo;90% of SaaS founders post daily without building real authority. Here is the 3-step flywheel...&rdquo;
            </p>
          </div>
          <div className="flex-1 rounded-xl p-2.5 bg-black/[0.02] border border-black/5 text-black/40">
            <div className="flex justify-between items-center text-[8.5px] font-bold mb-1">
              <span>Hook B (Question)</span>
              <span className="text-[8px]">+2.6x CTR</span>
            </div>
            <p className="text-[10px] text-black/60 leading-tight">
              &ldquo;Why do some brands get 10x more reach with fewer posts? We analyzed 500 campaigns...&rdquo;
            </p>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-black/5 text-center">
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Tone Guard</div>
            <div className="text-[10px] font-bold text-emerald-600 mt-0.5">100% Match</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Readability</div>
            <div className="text-[10px] font-bold text-black mt-0.5">Grade 7</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Spoken Pace</div>
            <div className="text-[10px] font-bold text-brand mt-0.5">145 WPM</div>
          </div>
        </div>
      </div>
    </div>
  );
  if (i === 2) return (
    <div className="mx-auto w-full max-w-[490px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5 text-left">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">Iris Visual Studio</div>
          <div className="text-xs font-bold text-black mt-0.5">Social Carousel Composer</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 rounded-full">
            4 Slides • 4K UHD
          </span>
          <span className="text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
            Rendered
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3.5">
        {/* 4-Slide Preview Deck */}
        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-xl p-2 bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sm flex flex-col justify-between h-24 border border-sky-400/40">
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-sky-200">Slide 01</span>
            <div className="text-[8.5px] font-extrabold leading-tight">Visual Hook & Title</div>
            <span className="text-[6.5px] font-semibold bg-white/20 px-1 py-0.2 rounded w-fit">Safe Zone ✓</span>
          </div>

          <div className="rounded-xl p-2 bg-gradient-to-br from-indigo-500 to-purple-700 text-white shadow-sm flex flex-col justify-between h-24 border border-indigo-400/40">
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-indigo-200">Slide 02</span>
            <div className="text-[8.5px] font-extrabold leading-tight">Key Infographic</div>
            <span className="text-[6.5px] font-semibold bg-white/20 px-1 py-0.2 rounded w-fit">Safe Zone ✓</span>
          </div>

          <div className="rounded-xl p-2 bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-sm flex flex-col justify-between h-24 border border-purple-400/40">
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-purple-200">Slide 03</span>
            <div className="text-[8.5px] font-extrabold leading-tight">Framework Grid</div>
            <span className="text-[6.5px] font-semibold bg-white/20 px-1 py-0.2 rounded w-fit">Safe Zone ✓</span>
          </div>

          <div className="rounded-xl p-2 bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-sm flex flex-col justify-between h-24 border border-emerald-400/40">
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-emerald-200">Slide 04</span>
            <div className="text-[8.5px] font-extrabold leading-tight">Takeaway & CTA</div>
            <span className="text-[6.5px] font-semibold bg-white/20 px-1 py-0.2 rounded w-fit">Safe Zone ✓</span>
          </div>
        </div>

        {/* Live Swatches & Headless Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/5 text-center">
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Brand Kit</div>
            <div className="flex justify-center gap-1 mt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8763e5]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#0ea5e9]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
            </div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Resolution</div>
            <div className="text-[10px] font-bold text-sky-700 mt-0.5">4K (3840×2160)</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Playwright</div>
            <div className="text-[10px] font-bold text-emerald-600 mt-0.5">1.2s Render</div>
          </div>
        </div>
      </div>
    </div>
  );
  if (i === 3) return (
    <div className="mx-auto w-full max-w-[490px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5 text-left">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-pink-600">Kade Video Studio</div>
          <div className="text-xs font-bold text-black mt-0.5">Multi-Track Timeline & Subtitles</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold bg-pink-50 text-pink-700 border border-pink-200 px-2.5 py-0.5 rounded-full">
            9:16 Reel • 60 FPS
          </span>
          <span className="text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
            Stitched
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3.5">
        {/* Timeline Tracks */}
        <div className="space-y-2 rounded-xl bg-slate-950 p-3 text-white border border-black/10">
          <div className="flex items-center justify-between text-[8px] text-white/50 border-b border-white/10 pb-1.5">
            <span className="font-bold text-pink-400">TRACKS</span>
            <span>00:00:15:00 / 00:00:15:00</span>
          </div>

          {/* Video Track */}
          <div className="flex items-center gap-1.5">
            <span className="text-[7.5px] font-bold text-white/40 w-10">VIDEO</span>
            <div className="flex-1 grid grid-cols-3 gap-1">
              <div className="rounded bg-pink-600 px-1.5 py-1 text-[7px] font-bold text-white truncate text-center">
                Scene 01 Hook
              </div>
              <div className="rounded bg-purple-600 px-1.5 py-1 text-[7px] font-bold text-white truncate text-center">
                Scene 02 B-Roll
              </div>
              <div className="rounded bg-blue-600 px-1.5 py-1 text-[7px] font-bold text-white truncate text-center">
                Scene 03 CTA
              </div>
            </div>
          </div>

          {/* Audio Waveform Track */}
          <div className="flex items-center gap-1.5">
            <span className="text-[7.5px] font-bold text-white/40 w-10">AUDIO</span>
            <div className="flex-1 rounded bg-slate-900 px-2 py-1 flex items-center justify-between border border-emerald-500/30">
              <span className="text-[7px] text-emerald-400 font-semibold">48kHz Voiceover</span>
              <span className="text-[6.5px] text-emerald-400/80 font-mono">|||||||||||||||||||||||||||||</span>
            </div>
          </div>

          {/* Subtitles Track */}
          <div className="flex items-center gap-1.5">
            <span className="text-[7.5px] font-bold text-white/40 w-10">SUBS</span>
            <div className="flex-1 rounded bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-[7px] text-amber-300 font-semibold truncate">
              Kinetic Subtitles • Whisper v3 (0ms Latency)
            </div>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-black/5 text-center">
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Render Speed</div>
            <div className="text-[10px] font-bold text-pink-600 mt-0.5">&lt; 3.2s Synth</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Framerate</div>
            <div className="text-[10px] font-bold text-black mt-0.5">60 FPS Ultra</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Audio Sync</div>
            <div className="text-[10px] font-bold text-emerald-600 mt-0.5">100% Locked</div>
          </div>
        </div>
      </div>
    </div>
  );
  if (i === 4) return (
    <div className="mx-auto w-full max-w-[490px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5 text-left">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Nova Governance Engine</div>
          <div className="text-xs font-bold text-black mt-0.5">Pre-Flight Audit & Smart Queue</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            4/4 Passed
          </span>
          <span className="text-[9px] font-semibold bg-sky-50 text-sky-700 border border-sky-200 px-2 py-0.5 rounded-full">
            Queued
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* 4-Item Audit Matrix */}
        <div className="space-y-1.5">
          {[
            { label: "Safety & Regulatory", status: "50+ Categories • 0 Flags", pass: true, tag: "Safe" },
            { label: "Brand Voice & Lexicon", status: "Tone Guard: 100% Locked", pass: true, tag: "100%" },
            { label: "Auto-Regeneration Guard", status: "Confidence: 99.4% (0 Retries)", pass: true, tag: "Active" },
            { label: "Audience Timing Slotting", status: "Tue 7:30 PM • 24K Reach", pass: true, tag: "Synced" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-200/60"
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px] font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-[9.5px] font-bold text-emerald-950">{item.label}</div>
                  <div className="text-[8px] text-emerald-800/60">{item.status}</div>
                </div>
              </div>
              <span className="text-[7.5px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200 shadow-2xs">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-black/5 text-center">
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Audit Speed</div>
            <div className="text-[10px] font-bold text-emerald-600 mt-0.5">&lt; 380ms Pass</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Risk Level</div>
            <div className="text-[10px] font-bold text-black mt-0.5">Zero Risk</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Peak Window</div>
            <div className="text-[10px] font-bold text-brand mt-0.5">Tue 7:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
  if (i === 5) return (
    <div className="mx-auto w-full max-w-[490px] overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-black/5 text-left">
      <div className="border-b border-black/5 bg-white/60 p-4 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Nova Distribution Engine</div>
          <div className="text-xs font-bold text-black mt-0.5">Live Multi-Platform Dispatch & Cost Tracker</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">
            3 Live • 1 Queued
          </span>
          <span className="text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
            Live Synced
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Top 2-Column Split: Dispatch Status & Cost Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          {/* Left Dispatch List */}
          <div className="sm:col-span-7 space-y-1.5">
            {[
              { platform: "𝕏 / Twitter", status: "Published • 200 OK", color: "#eab308" },
              { platform: "LinkedIn", status: "Published • 4K Carousel", color: "#d97706" },
              { platform: "Instagram", status: "Published • 9:16 Reel", color: "#ca8a04" },
              { platform: "YouTube", status: "Queued • Thu 6:00 PM", color: "#f59e0b" },
            ].map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-1.5 rounded-lg bg-amber-50/40 border border-amber-200/60 text-[8.5px]"
              >
                <span className="font-bold text-black/90">{p.platform}</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                  {p.status}
                </span>
              </div>
            ))}
          </div>

          {/* Right Spend & ROI Card */}
          <div className="sm:col-span-5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white p-3 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[8px] font-bold uppercase tracking-wider text-amber-200">Campaign Spend</div>
              <div className="text-2xl font-black mt-0.5">$14.75</div>
            </div>
            <div className="pt-2 border-t border-white/20 flex justify-between items-center text-[8px]">
              <span className="text-amber-100/80">Avg / Post:</span>
              <span className="font-bold font-mono">$0.042</span>
            </div>
            <div className="flex justify-between items-center text-[8px]">
              <span className="text-amber-100/80">Est. ROI:</span>
              <span className="font-bold text-emerald-300">+380%</span>
            </div>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-black/5 text-center">
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Compute Speed</div>
            <div className="text-[10px] font-bold text-amber-700 mt-0.5">&lt; 1.2s Render</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Token Spend</div>
            <div className="text-[10px] font-bold text-emerald-600 mt-0.5">100% Tracked</div>
          </div>
          <div className="rounded-lg bg-black/[0.02] p-2">
            <div className="text-[8px] font-bold uppercase text-black/40">Auth Channel</div>
            <div className="text-[10px] font-bold text-black mt-0.5">OAuth 2.0 Direct</div>
          </div>
        </div>
      </div>
    </div>
  );
  return null;
}
