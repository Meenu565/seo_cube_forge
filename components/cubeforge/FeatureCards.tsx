import { Globe, Users, Compass, Target, Flame, ShieldCheck, Layers, Clock, Wand2, Maximize2, Palette, Cpu, Film, Video, MessageSquareText, RotateCcw, Lock, Calendar, Send, DollarSign, LineChart, CheckCheck, BarChart3, TrendingUp } from "lucide-react";

const researchItems = [
  {
    title: "Context Ingestion",
    Icon: Globe,
    desc: "Autonomous agents scrape product URLs, briefs, and docs to extract key value propositions, tone, and proof points.",
    offset: "mt-[60px]",
  },
  {
    title: "Audience Profiling",
    Icon: Users,
    desc: "Constructs granular buyer personas and emotional pain-point matrices grounded in live community data from Reddit and X.",
    offset: "mt-4",
  },
  {
    title: "Competitor Tracking",
    Icon: Compass,
    desc: "Monitors category leaders across SERPs and social feeds to pinpoint high-converting narrative whitespace your brand can own.",
    offset: "mt-[64px]",
  },
  {
    title: "Strategic Blueprint",
    Icon: Target,
    desc: "Translates raw research into ready-to-execute multi-channel briefs with calibrated hooks, formats, and posting schedules.",
    offset: "mt-4",
  },
];

const copyItems = [
  {
    title: "Multi-Angle Hooks",
    Icon: Flame,
    desc: "Generates 20+ viral opening hooks tailored to algorithm retention curves and 3-second hold metrics.",
    offset: "mt-[60px]",
    glow: "from-[#f59e0b] to-[#ea580c]",
  },
  {
    title: "Tone Guard",
    Icon: ShieldCheck,
    desc: "Enforces strict brand voice guidelines, style rules, and banned vocabulary filters in real-time.",
    offset: "mt-4",
    glow: "from-[#ea580c] to-[#c2410c]",
  },
  {
    title: "Adaptive Formats",
    Icon: Layers,
    desc: "Instantly converts a core narrative into 𝕏 threads, LinkedIn articles, YouTube deep-dives, and Shorts.",
    offset: "mt-[64px]",
    glow: "from-[#f59e0b] to-[#ea580c]",
  },
  {
    title: "Pacing & Timestamps",
    Icon: Clock,
    desc: "Structures scene-by-scene scripts with spoken-word WPM markers, audio cues, and dynamic timestamps.",
    offset: "mt-4",
    glow: "from-[#ea580c] to-[#c2410c]",
  },
];

const visualItems = [
  {
    title: "Autonomous Prompting",
    Icon: Wand2,
    desc: "The AI agent writes Midjourney-grade prompt strings calibrated to the emotional tone of your copy.",
    offset: "mt-[60px]",
    glow: "from-[#0284c7] to-[#2563eb]",
  },
  {
    title: "Safe-Zone Layouts",
    Icon: Maximize2,
    desc: "Auto-generates pixel-perfect social carousels respecting Instagram, LinkedIn, and X safe margins.",
    offset: "mt-4",
    glow: "from-[#2563eb] to-[#4f46e5]",
  },
  {
    title: "Brand Kit Lock",
    Icon: Palette,
    desc: "Automatically applies your exact hex codes, custom typography, and logo watermarks to every frame.",
    offset: "mt-[64px]",
    glow: "from-[#0284c7] to-[#0ea5e9]",
  },
  {
    title: "Headless Composer",
    Icon: Cpu,
    desc: "Composes high-DPI HTML/CSS layouts and renders publication-ready assets with Playwright in < 2s.",
    offset: "mt-4",
    glow: "from-[#2563eb] to-[#0284c7]",
  },
];

const videoItems = [
  {
    title: "Scene-by-Scene Slicing",
    Icon: Film,
    desc: "Intelligently segments scripts into optimal 3–5 second visual chunks calibrated for peak viewer retention curves.",
    offset: "mt-[60px]",
    glow: "from-[#ec4899] to-[#d946ef]",
  },
  {
    title: "B-Roll Synthesis",
    Icon: Video,
    desc: "Autonomous agents generate or retrieve hyper-relevant contextual B-roll matching every spoken emotional beat.",
    offset: "mt-4",
    glow: "from-[#d946ef] to-[#8b5cf6]",
  },
  {
    title: "Kinetic Captions",
    Icon: MessageSquareText,
    desc: "Dynamic animated captions burned into vertical 9:16 reels with karaoke word highlights and zero sync lag.",
    offset: "mt-[64px]",
    glow: "from-[#ec4899] to-[#a855f7]",
  },
  {
    title: "Timeline Stitching",
    Icon: Layers,
    desc: "Compiles voiceover audio, transitions, sound effects, and 60fps video clips into a publication-ready MP4.",
    offset: "mt-4",
    glow: "from-[#a855f7] to-[#3b82f6]",
  },
];

const complianceItems = [
  {
    title: "Zero-Risk Guardrails",
    Icon: ShieldCheck,
    desc: "Autonomous multi-layer scanner detects regulatory violations, IP risks, and toxic sentiment across 50+ categories.",
    offset: "mt-[60px]",
    glow: "from-[#10b981] to-[#059669]",
  },
  {
    title: "Auto-Regeneration",
    Icon: RotateCcw,
    desc: "Instantly re-drafts flagged sentences or media chunks in under 350ms without restarting the generation pipeline.",
    offset: "mt-4",
    glow: "from-[#059669] to-[#047857]",
  },
  {
    title: "Brand Voice Audit",
    Icon: Lock,
    desc: "Enforces strict organizational guidelines, prohibited terminology, tone compliance, and trademark consistency.",
    offset: "mt-[64px]",
    glow: "from-[#10b981] to-[#14b8a6]",
  },
  {
    title: "Audience Timing Engine",
    Icon: Calendar,
    desc: "Calculates maximum engagement windows across LinkedIn, X, and YouTube to auto-slot posts into the calendar.",
    offset: "mt-4",
    glow: "from-[#14b8a6] to-[#0d9488]",
  },
];

const publishItems = [
  {
    title: "Direct API Dispatch",
    Icon: Send,
    desc: "Native API publishing directly to 𝕏, LinkedIn, Instagram, and YouTube with zero third-party middleware bottlenecks.",
    offset: "mt-[60px]",
    glow: "from-[#eab308] to-[#d97706]",
  },
  {
    title: "Cost-Per-Post Tracking",
    Icon: DollarSign,
    desc: "Granular breakdown of exact LLM token spend, GPU compute costs, and storage overhead per campaign asset.",
    offset: "mt-4",
    glow: "from-[#d97706] to-[#b45309]",
  },
  {
    title: "Closed-Loop Learning",
    Icon: LineChart,
    desc: "Feeds real-world impressions, CTRs, and conversion metrics back into upstream research models to optimize future copy.",
    offset: "mt-[64px]",
    glow: "from-[#eab308] to-[#ca8a04]",
  },
  {
    title: "Live Delivery Audit",
    Icon: CheckCheck,
    desc: "Cryptographically verifies post delivery with webhook receipts, URL confirmation, and live preview rendering.",
    offset: "mt-4",
    glow: "from-[#ca8a04] to-[#a16207]",
  },
];

export default function FeatureCards({ slug }: { slug?: string }) {
  const isCopy = slug === "copywriting-and-scripting";
  const isVisual = slug === "visual-and-media-generation";
  const isVideo = slug === "video-automation";
  const isCompliance = slug === "compliance-and-scheduling";
  const isPublish = slug === "publishing-and-analytics";
  const items = isCopy 
    ? copyItems 
    : isVisual 
    ? visualItems 
    : isVideo 
    ? videoItems 
    : isCompliance
    ? complianceItems
    : isPublish
    ? publishItems
    : researchItems;

  const bgGradient = isCopy 
    ? "bg-[linear-gradient(to_bottom,#ffffff_35%,#fff8f0_35%)]" 
    : isVisual 
    ? "bg-[linear-gradient(to_bottom,#ffffff_35%,#f0f8ff_35%)]" 
    : isVideo
    ? "bg-[linear-gradient(to_bottom,#ffffff_35%,#fdf4ff_35%)]"
    : isCompliance
    ? "bg-[linear-gradient(to_bottom,#ffffff_35%,#f0fdf4_35%)]"
    : isPublish
    ? "bg-[linear-gradient(to_bottom,#ffffff_35%,#fefce8_35%)]"
    : "bg-[linear-gradient(to_bottom,#ffffff_35%,#f5f0ff_35%)]";

  return (
    <section className={`w-full min-h-[440px] py-12 ${bgGradient}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-6 px-4">
        {items.map(({ title, Icon, desc, offset, glow }: any) => (
          <div
            key={title}
            className={`${offset} w-64 rounded-2xl bg-white p-6 text-center shadow-[0_10px_30px_rgba(135,99,229,0.08)] border border-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(135,99,229,0.16)]`}
          >
            {/* Icon */}
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${glow ? `bg-gradient-to-br ${glow} shadow-md shadow-amber-500/20` : "bg-gradient-to-br from-[#8763e5] to-[#53099d] shadow-md shadow-brand/20"}`}>
              <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
            </div>

            {/* Title */}
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#1a0848]">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-xs leading-relaxed text-black/60">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
