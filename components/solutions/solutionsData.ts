import React from "react";
import {
  Search,
  Target,
  FileText,
  Aperture,
  Video,
  Send,
  Sparkles,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  Users,
  Building2,
  Film,
  Briefcase,
  Share2,
  DollarSign,
  Palette,
  CheckCheck,
  Clock,
  ArrowRight
} from "lucide-react";

export interface StageData {
  id: string;
  number: string;
  title: string;
  category: string;
  agent: string;
  agentRole: string;
  badge: string;
  description: string;
  cards: {
    title: string;
    badge?: string;
    content: string;
    subcontent?: string;
    status: string;
    tone?: "green" | "purple" | "amber" | "blue";
    meta?: string;
  }[];
}

export const stagesData: StageData[] = [
  {
    id: "research",
    number: "01",
    title: "Research & Strategy",
    category: "Intelligence & Signal Ingestion",
    agent: "Cato & Vela",
    agentRole: "Lead Researcher & Strategist",
    badge: "Audience Mapped",
    description: "Ingests market signals, audience pain points, and competitor positioning into a bulletproof campaign brief.",
    cards: [
      {
        title: "RESEARCH",
        badge: "Insights",
        content: "Audience mapped: 4 core ICP personas",
        subcontent: "14 trending pain-points analyzed across Reddit & 𝕏",
        status: "Done",
        tone: "purple",
        meta: "Confidence: 98.4%"
      },
      {
        title: "STRATEGY",
        badge: "Q4 Plan",
        content: "Core Hook: 'Zero Context Switching'",
        subcontent: "Omni-channel sequence across 4 tiers",
        status: "Ready",
        tone: "blue",
        meta: "Target ROAS: 3.8x"
      }
    ]
  },
  {
    id: "copywriting",
    number: "02",
    title: "Copywriting & Scripting",
    category: "Multi-Tone Narrative Engine",
    agent: "Orin",
    agentRole: "Master Copywriter",
    badge: "10x Iterations",
    description: "Generates channel-native copy, long-form articles, ad copy, and video scripts matched to your brand voice.",
    cards: [
      {
        title: "SCRIPT",
        badge: "Hook Matrix",
        content: "Hook A (Curiosity): 'Why 84% of content fails before launch'",
        subcontent: "Hook B (Value): 'Generate 30 days of assets in 12 minutes'",
        status: "Done",
        tone: "amber",
        meta: "Flesch Score: 78"
      },
      {
        title: "COPY DRAFTS",
        badge: "Multi-Tone",
        content: "LinkedIn Thought Leader + 𝕏 Viral Thread",
        subcontent: "Grounded with 6 customer proof quotes",
        status: "In progress",
        tone: "purple",
        meta: "4 Formats Ready"
      }
    ]
  },
  {
    id: "visual",
    number: "03",
    title: "Visual & Media",
    category: "Generative Art Direction",
    agent: "Iris",
    agentRole: "Art Director",
    badge: "4K Cinema Quality",
    description: "Generates high-resolution visuals, UI mockups, infographics, and ad banners formatted for every platform ratio.",
    cards: [
      {
        title: "VISUALS",
        badge: "4K Render",
        content: "Volumetric Studio Lighting & 3D Glass Mockups",
        subcontent: "Brand Palette #8763e5, #0d0a1a, #facc15 verified",
        status: "Done",
        tone: "green",
        meta: "1:1, 16:9, 9:16"
      },
      {
        title: "CAROUSEL FRAMES",
        badge: "10-Slide Deck",
        content: "Infographic slide cards with vector typography",
        subcontent: "Zero visual artifacts, pixel-perfect contrast",
        status: "Ready",
        tone: "blue",
        meta: "Figma/PNG sync"
      }
    ]
  },
  {
    id: "video",
    number: "04",
    title: "Video Automation",
    category: "Short-Form Clip Producer",
    agent: "Kade",
    agentRole: "Video Producer",
    badge: "Viral Pacing",
    description: "Cuts long-form recordings into viral Reels, TikToks, and YouTube Shorts with dynamic animated captions.",
    cards: [
      {
        title: "VIDEO TRIM",
        badge: "Smart Cut",
        content: "58-sec Highlight: 'The Single System Paradigm'",
        subcontent: "Auto-captioning + audio normalization + 9:16 crop",
        status: "Done",
        tone: "purple",
        meta: "60 FPS 1080p"
      },
      {
        title: "B-ROLL ENGINE",
        badge: "Kinetic",
        content: "Synced dynamic zoom transitions & sound design",
        subcontent: "Hook retention score: 94/100",
        status: "Ready",
        tone: "amber",
        meta: "Render: 1.4s"
      }
    ]
  },
  {
    id: "compliance",
    number: "05",
    title: "Compliance & Scheduling",
    category: "Governance & Smart Queue",
    agent: "GuardIQ & CronEngine",
    agentRole: "Compliance Officer",
    badge: "100% Policy Clean",
    description: "Automated legal risk checks, claim verifications, embargo scheduling, and global timezone dispatch windows.",
    cards: [
      {
        title: "COMPLIANCE",
        badge: "Passed",
        content: "0 Trademark flags, 0 Hallucinations, 100% Brand Safe",
        subcontent: "Claims cross-referenced against approved whitepapers",
        status: "Verified",
        tone: "green",
        meta: "Audit #88219"
      },
      {
        title: "SMART SCHEDULE",
        badge: "Optimized",
        content: "Peak Global Reach: Tuesday 09:15 EST / 14:15 GMT",
        subcontent: "Timezone-staggered queue across 4 continents",
        status: "Queued",
        tone: "blue",
        meta: "4 Channels"
      }
    ]
  },
  {
    id: "publishing",
    number: "06",
    title: "Publishing & Cost",
    category: "Direct API & Telemetry",
    agent: "Nova",
    agentRole: "Distribution & Cost Auditor",
    badge: "Direct Dispatch",
    description: "Direct API multi-platform broadcast with zero middlemen, real-time cost-per-post audit, and closed-loop ROI feedback.",
    cards: [
      {
        title: "PUBLISH",
        badge: "Live",
        content: "𝕏 + LinkedIn + YouTube Shorts + Instagram",
        subcontent: "Cryptographic delivery receipt generated",
        status: "Live",
        tone: "green",
        meta: "Latency: 280ms"
      },
      {
        title: "COST TELEMETRY",
        badge: "$0.042/post",
        content: "Total campaign compute spend: $0.21 across 5 assets",
        subcontent: "97.6% savings vs fragmented SaaS point tools",
        status: "Tracked",
        tone: "amber",
        meta: "Token Audit 100%"
      }
    ]
  }
];

export const pipelineItems = [
  {
    stage: "Input",
    name: "Input",
    description: "Brief, prompt, or source material",
    badge: "Ready",
    tone: "green",
    icon: Sparkles,
    detail: "Markdown brief, raw Zoom transcript, or 1-sentence prompt"
  },
  {
    stage: "Research",
    name: "Research",
    description: "Audience, competitor, and market signals",
    badge: "Ready",
    tone: "green",
    icon: Search,
    detail: "Analyzes 500+ SERP & social queries in real-time"
  },
  {
    stage: "Strategy",
    name: "Strategy",
    description: "Channel plan and messaging pillars",
    badge: "Ready",
    tone: "green",
    icon: Target,
    detail: "4-tier funnel mapping with channel-native tone blueprints"
  },
  {
    stage: "Content",
    name: "Content",
    description: "On brand copy for every channel",
    badge: "Ready",
    tone: "green",
    icon: FileText,
    detail: "Zero hallucination, grounded in your company Brand IQ"
  },
  {
    stage: "Visual",
    name: "Visual",
    description: "Imagery sized for each placement",
    badge: "Ready",
    tone: "green",
    icon: Aperture,
    detail: "Multi-aspect visual generation with unified art direction"
  },
  {
    stage: "Video",
    name: "Video",
    description: "Cut ready sequences from your library",
    badge: "Ready",
    tone: "green",
    icon: Video,
    detail: "Kinetic animated captions, viral pacing, and sound FX"
  },
  {
    stage: "Distribution",
    name: "Distribution",
    description: "Scheduled and published automatically",
    badge: "Ready",
    tone: "green",
    icon: Send,
    detail: "Direct API dispatch to 𝕏, LinkedIn, YouTube, and Meta"
  }
];

export const whatElseData: Record<string, {
  label: string;
  pillTone: "purple" | "amber" | "blue" | "green";
  title: string;
  subtitle: string;
  badge1: string;
  badge2: string;
  badge3: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}> = {
  research: {
    label: "research",
    pillTone: "purple",
    title: "Market Intelligence & Competitor Gaps",
    subtitle: "Pulls live audience pain-points, competitor keyword shifts, and past campaign performance into one brief.",
    badge1: "Insights",
    badge2: "Audience",
    badge3: "Trending",
    metrics: [
      { label: "Sources Scanned", value: "1,200+" },
      { label: "Signal Confidence", value: "98.9%" },
      { label: "Brief Gen Time", value: "4.2s" }
    ],
    bulletPoints: [
      "Real-time SERP & Reddit sentiment cluster analysis",
      "Competitor messaging differentiation matrix",
      "Automatic persona ICP angle recommendations"
    ]
  },
  strategy: {
    label: "strategy",
    pillTone: "blue",
    title: "Multi-Channel Campaign Architecture",
    subtitle: "Turns raw research insights into 4-week thematic calendars, conversion funnels, and KPI projections.",
    badge1: "Channel Mix",
    badge2: "Q4 Roadmap",
    badge3: "Pillars",
    metrics: [
      { label: "Channel Coverage", value: "6 Networks" },
      { label: "Cadence", value: "30 Posts/mo" },
      { label: "Projected ROI", value: "+380%" }
    ],
    bulletPoints: [
      "Top/Middle/Bottom of funnel content distribution",
      "Executive tone guidelines mapped per platform",
      "Predictive virality scoring and conversion triggers"
    ]
  },
  copy: {
    label: "copy",
    pillTone: "amber",
    title: "Multi-Tone Copywriting Engine",
    subtitle: "Writes high-converting LinkedIn thoughts, 𝕏 threads, Substack articles, and ad headlines instantly.",
    badge1: "Brand IQ",
    badge2: "Tone Switcher",
    badge3: "SEO Clean",
    metrics: [
      { label: "Tone Variants", value: "6 Styles" },
      { label: "Reading Grade", value: "7.8 Level" },
      { label: "Review Time", value: "< 2 mins" }
    ],
    bulletPoints: [
      "Strict zero-hallucination compliance enforcement",
      "Automatic hashtag, call-to-action, and hook variations",
      "Platform-native character limit and formatting optimization"
    ]
  },
  visuals: {
    label: "visuals",
    pillTone: "purple",
    title: "Studio-Grade Visual Art Direction",
    subtitle: "Creates 4K photorealistic product renders, infographic carousels, and striking brand illustrations.",
    badge1: "4K UHD",
    badge2: "Auto-Crop",
    badge3: "Figma Sync",
    metrics: [
      { label: "Render Res", value: "3840x2160" },
      { label: "Color Match", value: "100% Hex" },
      { label: "Aspect Ratios", value: "1:1 | 16:9 | 9:16" }
    ],
    bulletPoints: [
      "Brand color palette lock and typographic alignment",
      "Carousel slide generation with consistent layout rules",
      "Instant export to SVG, PNG, and WebP"
    ]
  },
  video: {
    label: "video",
    pillTone: "green",
    title: "Kinetic Video & Shorts Automation",
    subtitle: "Transforms podcasts, product demos, and webinars into snappy TikToks, Reels, and YouTube Shorts.",
    badge1: "Auto-Captions",
    badge2: "9:16 Cropping",
    badge3: "Smart B-Roll",
    metrics: [
      { label: "Clip Yield", value: "10 Shorts / 1hr" },
      { label: "Retention Rate", value: "88.4%" },
      { label: "Subtitle Accuracy", value: "99.2%" }
    ],
    bulletPoints: [
      "AI silence detection & dynamic pace acceleration",
      "Animated word-by-word karaoke typography with emojis",
      "Automatic sound effects and background audio ducking"
    ]
  },
  distribution: {
    label: "distribution",
    pillTone: "blue",
    title: "Automated Dispatch & Cost Auditing",
    subtitle: "Direct API posting across all networks with zero human copy-pasting and live token spend tracking.",
    badge1: "Direct API",
    badge2: "Timezone AI",
    badge3: "Token Audit",
    metrics: [
      { label: "Dispatch Speed", value: "< 500ms" },
      { label: "Avg Post Cost", value: "$0.042" },
      { label: "API Uptime", value: "99.99%" }
    ],
    bulletPoints: [
      "Native OAuth 2.0 direct publishing without aggregator delays",
      "Granular cost-per-post and GPU compute spend accounting",
      "Closed-loop telemetry syncing engagement back into strategy"
    ]
  }
};

export interface SolutionPageData {
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  accentColor: string;
  statPrimary: string;
  statPrimaryLabel: string;
  statSecondary: string;
  statSecondaryLabel: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  challenges: {
    title: string;
    before: string;
    after: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    iconName: string;
    tag: string;
  }[];
  workflows: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const solutionsDataBySlug: Record<string, SolutionPageData> = {
  marketing: {
    slug: "marketing",
    title: "Marketing Teams",
    badge: "For High-Velocity Brand & Growth Teams",
    heroHeadline: "Ship 30 days of omni-channel campaigns in 3 hours.",
    heroSubheadline: "CubeForgeLabs unites your research, brand copywriting, visual studio, and multi-network publishing into one calm, autonomous operating system.",
    accentColor: "#8763e5",
    statPrimary: "10x",
    statPrimaryLabel: "Faster campaign time-to-market",
    statSecondary: "84%",
    statSecondaryLabel: "Reduction in agency & tool spend",
    quote: "CubeForgeLabs completely eliminated the endless handoff loops between our copywriters, designers, and social managers. Everything launches on time with zero panic.",
    quoteAuthor: "Sarah Jenkins",
    quoteRole: "Head of Growth, Northwind Brands",
    challenges: [
      {
        title: "Fragmented Point Tools",
        before: "Switching between 6 different AI apps, Google Docs, Figma, and buffer queues.",
        after: "One connected workspace where research flows directly into copy, visuals, and publishing."
      },
      {
        title: "Brand Voice Drift",
        before: "Inconsistent tone across channels as freelance writers guess company messaging.",
        after: "Brand IQ locks your specific tone, approved claims, and banned keywords across every agent."
      },
      {
        title: "Slow Review Cycles",
        before: "Weeks spent reviewing drafts in email threads and waiting for design assets.",
        after: "Instant generation of multi-platform post bundles ready for 1-click team approval."
      }
    ],
    capabilities: [
      {
        title: "Autonomous Campaign Builder",
        description: "Turn one product release brief into 30 days of coordinated blog posts, carousels, 𝕏 threads, and video shorts.",
        iconName: "Sparkles",
        tag: "Core Engine"
      },
      {
        title: "Brand IQ Memory Vault",
        description: "Upload brand guidelines, tone voice samples, and product specs that every agent references continuously.",
        iconName: "ShieldCheck",
        tag: "Governance"
      },
      {
        title: "Omni-Channel Auto-Publisher",
        description: "Direct API dispatch to LinkedIn, 𝕏, Instagram, and YouTube Shorts with custom timezone optimization.",
        iconName: "Send",
        tag: "Distribution"
      },
      {
        title: "Live Cost & ROI Telemetry",
        description: "Audit exact token spend down to fractions of a cent per post and track engagement signals back to prompts.",
        iconName: "DollarSign",
        tag: "Analytics"
      }
    ],
    workflows: [
      { step: "01", title: "Drop In Your Core Brief", desc: "Paste product release notes, a customer interview transcript, or a single goal." },
      { step: "02", title: "Review Agent Plan", desc: "Cato & Vela map target personas, competitor gaps, and 4-tier content pillars." },
      { step: "03", title: "Batch Generate & Approve", desc: "Orin & Iris craft on-brand copy and 4K visuals formatted for every screen ratio." },
      { step: "04", title: "1-Click Global Dispatch", desc: "Nova schedules and publishes across all channels with verified cryptographic delivery." }
    ]
  },
  "marketing-teams": {
    slug: "marketing-teams",
    title: "Marketing Teams",
    badge: "For High-Velocity Brand & Growth Teams",
    heroHeadline: "Ship 30 days of omni-channel campaigns in 3 hours.",
    heroSubheadline: "CubeForgeLabs unites your research, brand copywriting, visual studio, and multi-network publishing into one calm, autonomous operating system.",
    accentColor: "#8763e5",
    statPrimary: "10x",
    statPrimaryLabel: "Faster campaign time-to-market",
    statSecondary: "84%",
    statSecondaryLabel: "Reduction in agency & tool spend",
    quote: "CubeForgeLabs completely eliminated the endless handoff loops between our copywriters, designers, and social managers. Everything launches on time with zero panic.",
    quoteAuthor: "Sarah Jenkins",
    quoteRole: "Head of Growth, Northwind Brands",
    challenges: [
      {
        title: "Fragmented Point Tools",
        before: "Switching between 6 different AI apps, Google Docs, Figma, and buffer queues.",
        after: "One connected workspace where research flows directly into copy, visuals, and publishing."
      },
      {
        title: "Brand Voice Drift",
        before: "Inconsistent tone across channels as freelance writers guess company messaging.",
        after: "Brand IQ locks your specific tone, approved claims, and banned keywords across every agent."
      },
      {
        title: "Slow Review Cycles",
        before: "Weeks spent reviewing drafts in email threads and waiting for design assets.",
        after: "Instant generation of multi-platform post bundles ready for 1-click team approval."
      }
    ],
    capabilities: [
      {
        title: "Autonomous Campaign Builder",
        description: "Turn one product release brief into 30 days of coordinated blog posts, carousels, 𝕏 threads, and video shorts.",
        iconName: "Sparkles",
        tag: "Core Engine"
      },
      {
        title: "Brand IQ Memory Vault",
        description: "Upload brand guidelines, tone voice samples, and product specs that every agent references continuously.",
        iconName: "ShieldCheck",
        tag: "Governance"
      },
      {
        title: "Omni-Channel Auto-Publisher",
        description: "Direct API dispatch to LinkedIn, 𝕏, Instagram, and YouTube Shorts with custom timezone optimization.",
        iconName: "Send",
        tag: "Distribution"
      },
      {
        title: "Live Cost & ROI Telemetry",
        description: "Audit exact token spend down to fractions of a cent per post and track engagement signals back to prompts.",
        iconName: "DollarSign",
        tag: "Analytics"
      }
    ],
    workflows: [
      { step: "01", title: "Drop In Your Core Brief", desc: "Paste product release notes, a customer interview transcript, or a single goal." },
      { step: "02", title: "Review Agent Plan", desc: "Cato & Vela map target personas, competitor gaps, and 4-tier content pillars." },
      { step: "03", title: "Batch Generate & Approve", desc: "Orin & Iris craft on-brand copy and 4K visuals formatted for every screen ratio." },
      { step: "04", title: "1-Click Global Dispatch", desc: "Nova schedules and publishes across all channels with verified cryptographic delivery." }
    ]
  },
  "media-entertainment": {
    slug: "media-entertainment",
    title: "Media & Entertainment",
    badge: "For Studios, Creators & Media Publishers",
    heroHeadline: "Convert raw video & episodes into 50+ viral hooks daily.",
    heroSubheadline: "Automate short-form video cutting, kinetic animated captions, dynamic teaser trailers, and multilingual social syndication at studio speed.",
    accentColor: "#06b6d4",
    statPrimary: "50+",
    statPrimaryLabel: "Viral clips produced per hour",
    statSecondary: "94%",
    statSecondaryLabel: "Viewer retention rate on 9:16 cuts",
    quote: "We turned our 60-minute weekly podcast into 25 high-performing TikToks, 10 LinkedIn carousels, and 3 Substack breakdowns in literally 15 minutes.",
    quoteAuthor: "Marcus Vance",
    quoteRole: "Executive Producer, Apex Media Labs",
    challenges: [
      {
        title: "High Video Editing Bottlenecks",
        before: "Human editors spending 4 hours scrubbing timestamps for a single 45-second short.",
        after: "AI speaker tracking, silence removal, and viral hook identification in under 30 seconds."
      },
      {
        title: "Asset Aspect Ratio Formatting",
        before: "Manual reframing and re-exporting horizontal footage for 9:16 Reels and 1:1 feeds.",
        after: "Intelligent auto-framing keeps subjects centered with dynamic zoom & motion tracking."
      },
      {
        title: "Global Audience Localization",
        before: "Expensive dubbing and translation delays across regional channels.",
        after: "Automated multilingual subtitle burning and regionalized cultural nuance adaptation."
      }
    ],
    capabilities: [
      {
        title: "Kinetic Shorts Clipper",
        description: "Detects emotional peaks, viral quotes, and punchlines in long videos and clips them with 9:16 vertical styling.",
        iconName: "Film",
        tag: "Video Engine"
      },
      {
        title: "Dynamic Karaoke Subtitles",
        description: "Word-by-word synced animated captions with custom brand colors, highlights, and contextual emojis.",
        iconName: "Sparkles",
        tag: "Pacing"
      },
      {
        title: "Episode Teaser Generator",
        description: "Synthesize full episode transcripts into gripping cliffhanger hooks and social carousels.",
        iconName: "TrendingUp",
        tag: "Syndication"
      },
      {
        title: "High-Volume Multi-Channel Sync",
        description: "Publish seamlessly across YouTube Shorts, Instagram Reels, TikTok, and 𝕏 simultaneously.",
        iconName: "Share2",
        tag: "Distribution"
      }
    ],
    workflows: [
      { step: "01", title: "Upload Raw Recording", desc: "Drop your MP4, YouTube link, or Zoom cloud recording URL." },
      { step: "02", title: "AI Moments Discovery", desc: "Kade identifies high-retention segments and rates virality potential from 1-100." },
      { step: "03", title: "Automated Auto-Edit & Captions", desc: "Applies 9:16 reframing, animated captions, B-roll overlays, and sound enhancement." },
      { step: "04", title: "Publish Across All Feeds", desc: "Schedule across TikTok, Shorts, Reels, and 𝕏 with native platform tags." }
    ]
  },
  "media-and-entertainment": {
    slug: "media-and-entertainment",
    title: "Media & Entertainment",
    badge: "For Studios, Creators & Media Publishers",
    heroHeadline: "Convert raw video & episodes into 50+ viral hooks daily.",
    heroSubheadline: "Automate short-form video cutting, kinetic animated captions, dynamic teaser trailers, and multilingual social syndication at studio speed.",
    accentColor: "#06b6d4",
    statPrimary: "50+",
    statPrimaryLabel: "Viral clips produced per hour",
    statSecondary: "94%",
    statSecondaryLabel: "Viewer retention rate on 9:16 cuts",
    quote: "We turned our 60-minute weekly podcast into 25 high-performing TikToks, 10 LinkedIn carousels, and 3 Substack breakdowns in literally 15 minutes.",
    quoteAuthor: "Marcus Vance",
    quoteRole: "Executive Producer, Apex Media Labs",
    challenges: [
      {
        title: "High Video Editing Bottlenecks",
        before: "Human editors spending 4 hours scrubbing timestamps for a single 45-second short.",
        after: "AI speaker tracking, silence removal, and viral hook identification in under 30 seconds."
      },
      {
        title: "Asset Aspect Ratio Formatting",
        before: "Manual reframing and re-exporting horizontal footage for 9:16 Reels and 1:1 feeds.",
        after: "Intelligent auto-framing keeps subjects centered with dynamic zoom & motion tracking."
      },
      {
        title: "Global Audience Localization",
        before: "Expensive dubbing and translation delays across regional channels.",
        after: "Automated multilingual subtitle burning and regionalized cultural nuance adaptation."
      }
    ],
    capabilities: [
      {
        title: "Kinetic Shorts Clipper",
        description: "Detects emotional peaks, viral quotes, and punchlines in long videos and clips them with 9:16 vertical styling.",
        iconName: "Film",
        tag: "Video Engine"
      },
      {
        title: "Dynamic Karaoke Subtitles",
        description: "Word-by-word synced animated captions with custom brand colors, highlights, and contextual emojis.",
        iconName: "Sparkles",
        tag: "Pacing"
      },
      {
        title: "Episode Teaser Generator",
        description: "Synthesize full episode transcripts into gripping cliffhanger hooks and social carousels.",
        iconName: "TrendingUp",
        tag: "Syndication"
      },
      {
        title: "High-Volume Multi-Channel Sync",
        description: "Publish seamlessly across YouTube Shorts, Instagram Reels, TikTok, and 𝕏 simultaneously.",
        iconName: "Share2",
        tag: "Distribution"
      }
    ],
    workflows: [
      { step: "01", title: "Upload Raw Recording", desc: "Drop your MP4, YouTube link, or Zoom cloud recording URL." },
      { step: "02", title: "AI Moments Discovery", desc: "Kade identifies high-retention segments and rates virality potential from 1-100." },
      { step: "03", title: "Automated Auto-Edit & Captions", desc: "Applies 9:16 reframing, animated captions, B-roll overlays, and sound enhancement." },
      { step: "04", title: "Publish Across All Feeds", desc: "Schedule across TikTok, Shorts, Reels, and 𝕏 with native platform tags." }
    ]
  },
  agencies: {
    slug: "agencies",
    title: "Agencies & Consultancies",
    badge: "For Multi-Client Marketing & Creative Agencies",
    heroHeadline: "Manage 50+ client brands with isolated Brand IQ and 5x margins.",
    heroSubheadline: "Scale content output without inflating payroll. Provide dedicated client workspaces, white-labeled approval portals, and instant campaign deliverables.",
    accentColor: "#f59e0b",
    statPrimary: "5x",
    statPrimaryLabel: "Agency gross margin expansion",
    statSecondary: "50+",
    statSecondaryLabel: "Client brands managed per strategist",
    quote: "CubeForgeLabs made our agency 5x more profitable. We deliver 4x the content volume for our clients while spending 70% less time in drafting cycles.",
    quoteAuthor: "Elena Rostova",
    quoteRole: "Founder & Managing Director, Marrow & Co.",
    challenges: [
      {
        title: "Context Bleed Between Clients",
        before: "Writers accidentally using one client's tone or proprietary terminology for another.",
        after: "Strict multi-tenant Brand IQ vaults completely isolate data, guidelines, and assets."
      },
      {
        title: "Margin Compression from Headcount",
        before: "Hiring more writers and junior designers whenever signing a new retainer.",
        after: "One senior strategist manages 10-15 client accounts with AI agent squads handling production."
      },
      {
        title: "Messy Client Approval Portals",
        before: "Scattered Google Docs comments, WhatsApp messages, and delayed signoffs.",
        after: "White-labeled, 1-click client review links with live preview and instant approval triggers."
      }
    ],
    capabilities: [
      {
        title: "Isolated Brand IQ Workspaces",
        description: "Create distinct client containers with unique tone vectors, visual presets, and compliance rules.",
        iconName: "Building2",
        tag: "Multi-Tenant"
      },
      {
        title: "White-Label Client Approval Links",
        description: "Send gorgeous branded preview links where clients can review and approve posts in seconds.",
        iconName: "CheckCheck",
        tag: "Collaboration"
      },
      {
        title: "Batch Multi-Brand Generation",
        description: "Generate monthly content calendars for 20 clients simultaneously with one coordinated master prompt.",
        iconName: "Zap",
        tag: "Throughput"
      },
      {
        title: "Granular Client Billing Audits",
        description: "Track exact token spend per client workspace for transparent pass-through billing or high-margin retainers.",
        iconName: "DollarSign",
        tag: "Profitability"
      }
    ],
    workflows: [
      { step: "01", title: "Onboard Client Brand IQ", desc: "Upload client style guide, past top-performing posts, and brand guidelines in 2 minutes." },
      { step: "02", title: "Generate Monthly Retainer Batch", desc: "Agents generate 30 days of multi-format content for all assigned client channels." },
      { step: "03", title: "Share Branded Approval Link", desc: "Client receives a sleek branded portal to approve, adjust, or request revisions." },
      { step: "04", title: "Automated Publishing & Reporting", desc: "Approved posts deploy on schedule while clients receive automated monthly ROI reports." }
    ]
  },
  enterprise: {
    slug: "enterprise",
    title: "Enterprise",
    badge: "For Global Enterprises & Regulated Industries",
    heroHeadline: "Enterprise AI content operations with zero data leakage.",
    heroSubheadline: "SOC2 Type II certified infrastructure, dedicated private LLM/VRAM clusters, role-based access control, and strict brand governance for global scale.",
    accentColor: "#10b981",
    statPrimary: "99.99%",
    statPrimaryLabel: "Guaranteed SLA uptime",
    statSecondary: "SOC2",
    statSecondaryLabel: "Type II Certified & Zero-Retention",
    quote: "CubeForgeLabs provided the strict compliance, private VPC hosting, and RBAC permissions required by our legal and security divisions from day one.",
    quoteAuthor: "David Sterling",
    quoteRole: "VP Global Communications, Portside Financial",
    challenges: [
      {
        title: "Strict Data Privacy & IP Safety",
        before: "Employees using consumer AI tools that train on proprietary corporate intelligence.",
        after: "Zero-data retention guarantee, private VPC deployments, and dedicated fine-tuned models."
      },
      {
        title: "Regulatory & Compliance Risks",
        before: "Risk of unapproved claims, legal liabilities, or non-compliant marketing language.",
        after: "Automated GuardIQ scanning checks every single post against legal rulebooks before publishing."
      },
      {
        title: "Global Team Governance & RBAC",
        before: "No visibility into who is generating what across 20 international regional offices.",
        after: "Granular role-based access, audit logs, SSO/SAML 2.0 integration, and tiered approval chains."
      }
    ],
    capabilities: [
      {
        title: "Private Dedicated LLM / VPC",
        description: "Run on isolated enterprise infrastructure with custom model fine-tuning and zero public model sharing.",
        iconName: "Cpu",
        tag: "Infrastructure"
      },
      {
        title: "GuardIQ Compliance Scanner",
        description: "Deterministic checks against SEC, FTC, GDPR, and brand safety standards with audit logs.",
        iconName: "ShieldCheck",
        tag: "Security"
      },
      {
        title: "Enterprise SSO & Custom RBAC",
        description: "Integrate with Okta, Azure AD, and Google Workspace with granular read/write/publish permissions.",
        iconName: "Users",
        tag: "Identity"
      },
      {
        title: "24/7 Dedicated Support & SLA",
        description: "Dedicated solutions engineer, custom agent prompt development, and 99.99% uptime guarantee.",
        iconName: "Clock",
        tag: "Enterprise SLA"
      }
    ],
    workflows: [
      { step: "01", title: "Enterprise Setup & SSO Connect", desc: "Deploy in private cloud with Okta SAML 2.0 and regional data residency guarantees." },
      { step: "02", title: "Configure GuardIQ Policies", desc: "Define mandatory disclaimers, blacklisted terms, and multi-tier approval hierarchies." },
      { step: "03", title: "Autonomous Regional Production", desc: "Global marketing teams generate localized, brand-compliant campaigns in 30+ languages." },
      { step: "04", title: "Full Cryptographic Audit Trail", desc: "Every generated post and edit is logged with permanent compliance verification records." }
    ]
  }
};
