"use client";

import React from "react";
import {
  Activity,
  Crosshair,
  FileText,
  Globe,
  Compass,
  Calendar,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Flame,
  ShieldCheck,
  Layers,
  GitBranch,
  Clock,
  Languages,
  Zap,
  Sliders,
  Check,
  Volume2,
  Play,
  Wand2,
  Maximize2,
  Palette,
  Cpu,
  Image as ImageIcon,
  FileCheck2,
  Layout,
  Download,
  Film,
  Video,
  MessageSquareText,
  Scissors,
  Mic,
  Music,
  Lock,
  RotateCcw,
  RefreshCw,
  AlertTriangle,
  ShieldAlert,
  DollarSign,
  Send,
  BarChart3,
  CheckCheck,
  Share2,
  Repeat,
  LineChart,
} from "lucide-react";

interface SubFeatureShowcaseProps {
  index: number;
  slug?: string;
}

export default function SubFeatureShowcase({ index, slug }: SubFeatureShowcaseProps) {
  if (slug === "publishing-and-analytics") {
    switch (index) {
      case 0:
        return <DirectApiPublishingShowcase />;
      case 1:
        return <CostPerPostTrackingShowcase />;
      case 2:
        return <ClosedLoopFeedbackShowcase />;
      case 3:
        return <MultiPlatformDispatchShowcase />;
      case 4:
        return <EngagementAnalyticsShowcase />;
      case 5:
      default:
        return <LiveVerificationShowcase />;
    }
  }

  if (slug === "compliance-and-scheduling") {
    switch (index) {
      case 0:
        return <ZeroRiskGuardrailsShowcase />;
      case 1:
        return <AutoRegenerationShowcase />;
      case 2:
        return <BrandVoiceComplianceShowcase />;
      case 3:
        return <AudienceTimingShowcase />;
      case 4:
        return <MultiChannelQueueShowcase />;
      case 5:
      default:
        return <LivePublishingAuditShowcase />;
    }
  }

  if (slug === "video-automation") {
    switch (index) {
      case 0:
        return <SceneSlicingShowcase />;
      case 1:
        return <BRollSynthesisShowcase />;
      case 2:
        return <WaveformSyncShowcase />;
      case 3:
        return <KineticCaptionsShowcase />;
      case 4:
        return <MultiTrackStitchingShowcase />;
      case 5:
      default:
        return <HeadlessExportShowcase />;
    }
  }

  if (slug === "visual-and-media-generation") {
    switch (index) {
      case 0:
        return <AutonomousPromptingShowcase />;
      case 1:
        return <SafeZoneLayoutsShowcase />;
      case 2:
        return <BrandKitShowcase />;
      case 3:
        return <VisualConceptShowcase />;
      case 4:
        return <GenerativeRenderingShowcase />;
      case 5:
      default:
        return <CarouselComposerShowcase />;
    }
  }

  if (slug === "copywriting-and-scripting") {
    switch (index) {
      case 0:
        return <MultiAngleHooksShowcase />;
      case 1:
        return <ToneGuardShowcase />;
      case 2:
        return <AdaptiveFormattingShowcase />;
      case 3:
        return <ConceptExpansionShowcase />;
      case 4:
        return <ScriptDraftingShowcase />;
      case 5:
      default:
        return <LocalizationShowcase />;
    }
  }

  // Default: Research & Strategy
  switch (index) {
    case 0:
      return <AudienceEmpathyShowcase />;
    case 1:
      return <CompetitorTrackingShowcase />;
    case 2:
      return <StrategicBriefShowcase />;
    case 3:
      return <ContextIngestionShowcase />;
    case 4:
      return <MarketPositioningShowcase />;
    case 5:
    default:
      return <DistributionBlueprintShowcase />;
  }
}

/* =========================================================================
   VISUAL & MEDIA GENERATION (Ice-Blue / Cyan Studio 3D Floating Showcases)
   ========================================================================= */

/* 01. Autonomous Prompting */
function AutonomousPromptingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f4f9ff] to-[#e0f0fe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      {/* Cool Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar: Title + 3D Glass Badge */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Autonomous Prompting
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            Midjourney v6 & DALL-E 3 neural prompt generator
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Wand2 className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      {/* Center 3D Floating Prompt Cards */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        {/* Left Prompt String Card */}
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-[0_10px_25px_rgba(2,132,199,0.08)] transform -rotate-1 hover:rotate-0 transition-transform space-y-2">
          <div className="flex items-center justify-between text-[8.5px] font-bold text-sky-900">
            <span className="font-mono bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded border border-sky-200">/imagine prompt:</span>
            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">420ms Synth</span>
          </div>
          <p className="text-[9.5px] font-medium text-slate-800 leading-tight">
            &ldquo;Hyper-detailed 3D isometric glowing glass turbine floating above neon grid floor, octane render, volumetric lighting <span className="font-mono text-sky-600 font-bold">--v 6.0 --ar 16:9 --style raw</span>&rdquo;
          </p>
        </div>

        {/* Right Precision Score Card */}
        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-[0_10px_25px_rgba(2,132,199,0.08)] flex flex-col items-center text-center transform rotate-1 hover:rotate-0 transition-transform">
          <div className="text-[9px] font-bold uppercase tracking-wider text-sky-900/50 mb-1">
            Prompt Precision
          </div>
          <div className="relative flex items-center justify-center my-1">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              99.4%
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[8.5px] font-bold text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="h-2.5 w-2.5" /> Zero Artifacts
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-sky-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Pixel-Perfect Layouts & Safe Zones */
function SafeZoneLayoutsShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0f9ff] to-[#dff3fe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Pixel-Perfect Safe Zones
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            Multi-platform margin compliance & safe zones
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Maximize2 className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      {/* Center 3D Floating Safe-Zone Grid */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        {/* Compliance Rows */}
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-[0_10px_25px_rgba(2,132,199,0.08)] space-y-1.5 text-[9px]">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-sky-50/80 border border-sky-200/60 text-sky-950 font-semibold">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#e4405f]" /> Instagram (4:5 Portrait)</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-xs">Safe Margins Passed</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-sky-50/80 border border-sky-200/60 text-sky-950 font-semibold">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#0a66c2]" /> LinkedIn (1:1 Carousel)</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-xs">Header Verified</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-sky-50/80 border border-sky-200/60 text-sky-950 font-semibold">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-black" /> Twitter/X (16:9 Landscape)</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-xs">Crop Boundaries Locked</span>
          </div>
        </div>

        {/* Zero-Crop Badge Card */}
        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-[0_10px_25px_rgba(2,132,199,0.08)] flex flex-col items-center justify-center text-center">
          <div className="text-[8.5px] font-bold uppercase tracking-wider text-sky-900/50 mb-1">
            Crop Risk
          </div>
          <div className="text-2xl font-black text-emerald-600 my-0.5">
            0% Risk
          </div>
          <div className="text-[8px] text-sky-950/60 font-medium">
            Safe zones auto-calculated for all mobile aspect ratios
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-sky-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Brand Kit Integration */
function BrandKitShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f5f9ff] to-[#e2ecfe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-indigo-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Brand Kit Integration
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            Exact hex codes, custom typography & watermark locks
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Palette className="h-5 w-5 text-indigo-600" />
        </div>
      </div>

      {/* Center 3D Floating Brand Kit Cards */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
        {/* Swatch Palette */}
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-sm space-y-2">
          <div className="text-[8.5px] font-bold uppercase tracking-wider text-sky-900/50">
            Locked Hex Palette
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl p-2 bg-[#8763e5]/10 border border-[#8763e5]/30 text-center">
              <div className="h-4 w-full rounded-md bg-[#8763e5] mb-1 shadow-xs" />
              <span className="text-[8.5px] font-mono font-bold text-purple-950">#8763E5</span>
            </div>
            <div className="rounded-xl p-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-center">
              <div className="h-4 w-full rounded-md bg-[#0ea5e9] mb-1 shadow-xs" />
              <span className="text-[8.5px] font-mono font-bold text-sky-950">#0EA5E9</span>
            </div>
            <div className="rounded-xl p-2 bg-[#0d0a1a]/10 border border-[#0d0a1a]/30 text-center">
              <div className="h-4 w-full rounded-md bg-[#0d0a1a] mb-1 shadow-xs" />
              <span className="text-[8.5px] font-mono font-bold text-slate-900">#0D0A1A</span>
            </div>
          </div>
        </div>

        {/* Typography & Watermark */}
        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3 border border-sky-200/80 shadow-sm space-y-2">
          <div>
            <div className="text-[8px] font-bold uppercase text-sky-900/50">Font Family</div>
            <div className="text-xs font-black text-slate-900">Inter Display 700</div>
          </div>
          <div className="pt-2 border-t border-sky-100 flex items-center justify-between">
            <span className="text-[8px] font-bold text-sky-900/50 uppercase">Watermark</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Auto-Applied</span>
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-indigo-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Visual Conceptualization */
function VisualConceptShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f3f9ff] to-[#e1f0fe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Visual Conceptualization
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            Semantic script-to-visual metaphor translator
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Sparkles className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      {/* Center 3D Floating Metaphor Cards */}
      <div className="relative z-20 my-auto space-y-2 pt-1">
        <div className="rounded-xl bg-white/95 backdrop-blur-md p-3 border border-sky-200/80 shadow-sm flex items-center justify-between text-[9px]">
          <div>
            <span className="text-[8px] font-bold text-sky-700 uppercase tracking-wide">Script Hook</span>
            <p className="font-semibold text-slate-900 mt-0.5">&ldquo;Stop burning budget on fragmented point solutions...&rdquo;</p>
          </div>
          <span className="text-[8px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Parsed</span>
        </div>

        <div className="rounded-xl bg-sky-50/90 backdrop-blur-md p-3 border border-sky-200 shadow-sm flex items-center justify-between text-[9px]">
          <div>
            <span className="text-[8px] font-bold text-blue-700 uppercase tracking-wide">Synthesized Visual Metaphor</span>
            <p className="font-extrabold text-blue-950 mt-0.5">➔ 3D Floating Monolith Turbine with 6 Synchronized Core Modules</p>
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">96% Resonance</span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-sky-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Generative Image Rendering */
function GenerativeRenderingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Generative Image Rendering
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            4K UHD neural upscaling & HDR post-processing
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Cpu className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      {/* Center 3D Floating Upscaler Cards */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between text-[8.5px] font-bold text-sky-900">
            <span>Neural Upscaling Engine</span>
            <span className="text-emerald-600 font-mono font-bold">1.2s Render</span>
          </div>
          <div className="space-y-1 text-[9px] text-slate-800">
            <div className="flex justify-between"><span>Native Resolution:</span> <span className="font-mono font-semibold">1080×1080</span></div>
            <div className="flex justify-between"><span>Upscaled Master:</span> <span className="font-mono font-bold text-sky-700">3840×3840 (4K UHD)</span></div>
            <div className="flex justify-between"><span>Color Depth:</span> <span className="font-semibold text-emerald-600">HDR 10-Bit</span></div>
          </div>
        </div>

        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-sky-200/80 shadow-sm flex flex-col items-center text-center">
          <div className="text-[8.5px] font-bold uppercase tracking-wider text-sky-900/50 mb-1">
            Clarity Score
          </div>
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
            4K UHD
          </div>
          <span className="mt-1 text-[8px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Zero Pixelation
          </span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-sky-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. Headless Carousel Composer */
function CarouselComposerShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f4f8ff] to-[#e2effe] border border-sky-200/70 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#082142]">
            Headless Carousel Composer
          </h4>
          <p className="text-[11px] font-medium text-sky-900/60 mt-0.5">
            Automated multi-slide compilation with Playwright
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-300/70 shadow-[0_8px_20px_rgba(14,165,233,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Layers className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      {/* Center 3D Floating Carousel Thumbnails */}
      <div className="relative z-20 my-auto grid grid-cols-4 gap-2 pt-2">
        <div className="rounded-xl p-2 bg-white/95 backdrop-blur-md border border-sky-200/80 shadow-sm text-center">
          <div className="h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-black text-[10px] mb-1">01</div>
          <span className="text-[8px] font-bold text-slate-800">Visual Hook</span>
        </div>

        <div className="rounded-xl p-2 bg-white/95 backdrop-blur-md border border-sky-200/80 shadow-sm text-center">
          <div className="h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-white font-black text-[10px] mb-1">02</div>
          <span className="text-[8px] font-bold text-slate-800">Infographic</span>
        </div>

        <div className="rounded-xl p-2 bg-white/95 backdrop-blur-md border border-sky-200/80 shadow-sm text-center">
          <div className="h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-black text-[10px] mb-1">03</div>
          <span className="text-[8px] font-bold text-slate-800">Framework</span>
        </div>

        <div className="rounded-xl p-2 bg-white/95 backdrop-blur-md border border-sky-200/80 shadow-sm text-center">
          <div className="h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-[10px] mb-1">04</div>
          <span className="text-[8px] font-bold text-slate-800">CTA Slide</span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-sky-300/40 via-sky-200/70 to-sky-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* =========================================================================
   COPYWRITING & SCRIPTING (Warm Amber / Coral Studio 3D Floating Showcases)
   ========================================================================= */

/* 01. Multi-Angle Hooks */
function MultiAngleHooksShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffaf5] to-[#ffeedb] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      {/* Warm Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar: Title + 3D Glass Badge */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Multi-Angle Hooks
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Predictive retention curves & 3s hook A/B matrix
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Flame className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Center 3D Floating Hook Cards */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        {/* Left Hook Comparison Card */}
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-amber-200/80 shadow-[0_10px_25px_rgba(217,119,6,0.08)] transform -rotate-1 hover:rotate-0 transition-transform space-y-2">
          {/* Hook A */}
          <div className="rounded-xl p-2 bg-amber-50/80 border border-amber-200/60">
            <div className="flex items-center justify-between text-[8.5px] font-bold text-amber-900 mb-0.5">
              <span>Hook A (Contrarian Interrupt)</span>
              <span className="text-emerald-700 bg-emerald-100/90 px-1.5 py-0.2 rounded font-mono">+4.8x CTR</span>
            </div>
            <p className="text-[9.5px] font-medium text-black/90 leading-tight">
              &ldquo;90% of SaaS founders post daily without building real authority. Here is the 3-step flywheel...&rdquo;
            </p>
          </div>
          {/* Hook B */}
          <div className="rounded-xl p-2 bg-orange-50/40 border border-orange-100 text-black/60">
            <div className="flex items-center justify-between text-[8.5px] font-bold text-orange-900/70 mb-0.5">
              <span>Hook B (Curiosity Gap)</span>
              <span className="text-[8px] font-mono text-orange-700">+3.1x CTR</span>
            </div>
            <p className="text-[9px] leading-tight">
              &ldquo;The 3-word prompt framework we used to scale 10x content output...&rdquo;
            </p>
          </div>
        </div>

        {/* Right Retention Score Card */}
        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-amber-200/80 shadow-[0_10px_25px_rgba(217,119,6,0.08)] flex flex-col items-center text-center transform rotate-1 hover:rotate-0 transition-transform">
          <div className="text-[9px] font-bold uppercase tracking-wider text-amber-900/50 mb-1">
            3s Retention Hold
          </div>
          <div className="relative flex items-center justify-center my-1">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              88%
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[8.5px] font-bold text-emerald-600 border border-emerald-200">
            <TrendingUp className="h-2.5 w-2.5" /> High Viral Score
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-amber-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Tone Guard & Brand Voice */
function ToneGuardShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffaf3] to-[#ffeed8] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Tone Guard & Brand Voice
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Real-time tone calibration & banned lexicon filters
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      {/* Center 3D Floating Tone Sliders & Lexicon Filter */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        {/* Sliders Card */}
        <div className="sm:col-span-6 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-amber-200/80 shadow-[0_10px_25px_rgba(217,119,6,0.08)] space-y-2">
          <div className="flex items-center justify-between text-[9px] font-bold text-amber-900/60 uppercase">
            <span>Voice Resonance</span>
            <span className="text-emerald-600 font-extrabold">100% Match</span>
          </div>
          <div className="space-y-1.5 text-[9px]">
            <div>
              <div className="flex justify-between text-black font-semibold mb-0.5">
                <span>Authoritative</span> <span>95%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-amber-100 overflow-hidden">
                <div className="h-full bg-amber-500 w-[95%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-black font-semibold mb-0.5">
                <span>Crisp & Direct</span> <span>92%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-amber-100 overflow-hidden">
                <div className="h-full bg-orange-500 w-[92%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Banned Lexicon Filter Card */}
        <div className="sm:col-span-6 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-amber-200/80 shadow-[0_10px_25px_rgba(217,119,6,0.08)] space-y-1.5 text-[9px]">
          <div className="text-[8.5px] font-bold uppercase tracking-wider text-amber-900/50 mb-1">
            Banned Lexicon Filter
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-rose-50/80 border border-rose-200/60 text-rose-900 font-medium">
            <span className="line-through text-rose-600">&ldquo;Delve into&rdquo;</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-xs">➔ &ldquo;Analyze&rdquo;</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-rose-50/80 border border-rose-200/60 text-rose-900 font-medium">
            <span className="line-through text-rose-600">&ldquo;Game-changer&rdquo;</span>
            <span className="text-[8px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-xs">➔ &ldquo;High-ROI&rdquo;</span>
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-orange-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Adaptive Multi-Format Engine */
function AdaptiveFormattingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fff8f2] to-[#ffead4] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Adaptive Multi-Format Engine
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            1 Core Narrative ➔ 4 Native Platform Formats
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Layers className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Center 3D Floating Formats Matrix */}
      <div className="relative z-20 my-auto grid grid-cols-2 gap-2.5 pt-2">
        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-black text-white flex items-center justify-center font-bold text-[10px]">𝕏</span>
            <div>
              <div className="text-[10px] font-bold text-black">Twitter/X Thread</div>
              <div className="text-[8px] text-amber-900/50">8 Tweets • 2,400 chars</div>
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Synced</span>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-[#0a66c2] text-white flex items-center justify-center font-bold text-[10px]">in</span>
            <div>
              <div className="text-[10px] font-bold text-black">LinkedIn Post</div>
              <div className="text-[8px] text-amber-900/50">Long-Form • 450 words</div>
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Synced</span>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-[#ff0000] text-white flex items-center justify-center font-bold text-[10px]">YT</span>
            <div>
              <div className="text-[10px] font-bold text-black">YouTube Deep-Dive</div>
              <div className="text-[8px] text-amber-900/50">10-Min Video Script</div>
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Synced</span>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center font-bold text-[10px]">⚡</span>
            <div>
              <div className="text-[10px] font-bold text-black">Shorts / Reels</div>
              <div className="text-[8px] text-amber-900/50">30s Paced Script</div>
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Synced</span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-amber-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Concept Expansion & Angle Branching */
function ConceptExpansionShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fff9f3] to-[#ffeed9] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Concept Expansion
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Multi-angle emotional branching trees from 1 brief
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <GitBranch className="h-5 w-5 text-orange-600" />
        </div>
      </div>

      {/* Center 3D Floating Branching Tree */}
      <div className="relative z-20 my-auto space-y-2 pt-1">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="font-bold text-black">Angle 1: Contrarian Paradigm Shift</span>
          </div>
          <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[8.5px]">
            High Virality (89k est.)
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-black">Angle 2: Step-by-Step Operator Blueprint</span>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8.5px]">
            High Bookmark Rate (94%)
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="font-bold text-black">Angle 3: Data-Backed ROI Case Study</span>
          </div>
          <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[8.5px]">
            High Buying Intent
          </span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-amber-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Automated Script Drafting & Timestamps */
function ScriptDraftingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffaf5] to-[#ffeedc] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Script Drafting & Timestamps
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Platform-native pacing & spoken-word markers
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Clock className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Center 3D Floating Script Timeline */}
      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between text-[9px]">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">[0:00 - 0:03]</span>
            <span className="font-bold text-black">⚡ Hook Beat</span>
            <span className="text-amber-900/60 truncate max-w-[150px]">&ldquo;Stop burning budget on manual...&rdquo;</span>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[8px]">160 WPM</span>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between text-[9px]">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">[0:04 - 0:18]</span>
            <span className="font-bold text-black">💡 Agitation</span>
            <span className="text-amber-900/60 truncate max-w-[150px]">&ldquo;Here is what the top 1% do...&rdquo;</span>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[8px]">142 WPM</span>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-between text-[9px]">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">[0:19 - 0:45]</span>
            <span className="font-bold text-black">🚀 Core Flywheel</span>
            <span className="text-amber-900/60 truncate max-w-[150px]">&ldquo;Step 1: Ingest URL into Orin...&rdquo;</span>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[8px]">138 WPM</span>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-amber-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. Multi-Language Localization & Polish */
function LocalizationShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffaf5] to-[#ffeede] border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b1900]">
            Localization & Polish
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Global multi-language translation without tone drift
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Languages className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Center 3D Floating Language Cards */}
      <div className="relative z-20 my-auto grid grid-cols-2 gap-2.5 pt-2">
        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-bold text-black mb-1">
            <span>🇺🇸 English (US)</span>
            <span className="text-[8px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">Master</span>
          </div>
          <p className="text-[8.5px] text-amber-900/60">100% Brand Resonance</p>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-bold text-black mb-1">
            <span>🇪🇸 Spanish (ES)</span>
            <span className="text-[8px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">99% Match</span>
          </div>
          <p className="text-[8.5px] text-amber-900/60">Localized Idiomatic Cadence</p>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-bold text-black mb-1">
            <span>🇩🇪 German (DE)</span>
            <span className="text-[8px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">98% Match</span>
          </div>
          <p className="text-[8.5px] text-amber-900/60">Technical Precision Adapted</p>
        </div>

        <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 border border-amber-200/80 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-bold text-black mb-1">
            <span>🇯🇵 Japanese (JA)</span>
            <span className="text-[8px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">100% Match</span>
          </div>
          <p className="text-[8.5px] text-amber-900/60">Keigo Formality Preserved</p>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-orange-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* =========================================================================
   RESEARCH & STRATEGY (Locked Violet / Studio 3D Floating Showcases)
   ========================================================================= */

/* 01. Deep Audience Empathy (Light 3D Floating Showcase) */
function AudienceEmpathyShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f8f4ff] to-[#ebe0ff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(135,99,229,0.2)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a0848]">
            Audience Empathy
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Real-time persona & sentiment analysis
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(135,99,229,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Activity className="h-5 w-5 text-brand" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        <div className="sm:col-span-6 rounded-2xl bg-white/90 backdrop-blur-md p-3.5 border border-purple-200/80 shadow-[0_10px_25px_rgba(83,9,157,0.08)] transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-brand to-purple-400 p-[2px] shadow-sm">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-brand">
                VP
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-black">VP Growth & Founders</div>
              <div className="text-[9px] text-purple-900/50">Tech / SaaS • Series A-B</div>
            </div>
          </div>
          <div className="space-y-1.5 text-[9.5px]">
            <div className="flex items-center justify-between py-0.5 px-1.5 rounded-md bg-purple-50/80 border border-purple-100 text-purple-950">
              <span className="font-semibold">Tool Fragmentation</span>
              <span className="text-[8px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded">Severe</span>
            </div>
            <div className="flex items-center justify-between py-0.5 px-1.5 rounded-md bg-purple-50/80 border border-purple-100 text-purple-950">
              <span className="font-semibold">Scale Consistency</span>
              <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded">High</span>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 rounded-2xl bg-white/90 backdrop-blur-md p-3.5 border border-purple-200/80 shadow-[0_10px_25px_rgba(83,9,157,0.08)] flex flex-col items-center text-center transform rotate-1 hover:rotate-0 transition-transform">
          <div className="text-[9px] font-bold uppercase tracking-wider text-purple-900/50 mb-1">
            Purchase Intent
          </div>
          <div className="relative flex items-center justify-center my-1">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">
              88%
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[8.5px] font-bold text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="h-2.5 w-2.5" /> High Buying Signal
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-purple-200/70 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Automated Competitor Tracking (Light 3D Floating Showcase) */
function CompetitorTrackingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f6f2ff] to-[#ebdfff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(135,99,229,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a0848]">
            Competitor Tracking
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Multi-axis landscape radar & gap analysis
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(135,99,229,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Crosshair className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        <div className="sm:col-span-6 rounded-2xl bg-white/90 backdrop-blur-md p-3.5 border border-purple-200/80 shadow-[0_10px_25px_rgba(83,9,157,0.08)] flex flex-col items-center justify-center">
          <div className="text-[9px] font-bold uppercase tracking-wider text-purple-900/50 mb-1">
            Competitive Radar
          </div>
          <svg className="w-24 h-24 my-0.5" viewBox="0 0 100 100">
            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="rgba(135,99,229,0.2)" strokeWidth="1" />
            <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="rgba(135,99,229,0.2)" strokeWidth="1" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(135,99,229,0.15)" strokeWidth="1" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(135,99,229,0.15)" strokeWidth="1" />
            <polygon points="50,30 70,50 50,65 35,50" fill="rgba(135,99,229,0.15)" stroke="#8763e5" strokeWidth="1.5" />
            <polygon points="50,15 85,45 50,85 15,55" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="2" />
          </svg>
          <div className="flex gap-2 text-[8px] font-bold text-purple-900/60 mt-0.5">
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> CubeForge</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> Competitors</span>
          </div>
        </div>

        <div className="sm:col-span-6 rounded-2xl bg-emerald-50/90 backdrop-blur-md p-3.5 border border-emerald-200 shadow-[0_10px_25px_rgba(16,185,129,0.12)]">
          <div className="inline-flex items-center gap-1 text-[8px] font-bold text-emerald-700 uppercase tracking-widest mb-1">
            <Sparkles className="h-2.5 w-2.5 text-emerald-600" /> Whitespace Found
          </div>
          <div className="text-xs font-black text-emerald-950 leading-tight">
            Unified AI Content Engine
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-emerald-600">94/100</span>
            <span className="text-[9px] font-medium text-emerald-800/70">Opportunity Score</span>
          </div>
          <div className="mt-1 text-[8.5px] text-emerald-800/60">
            4 critical positioning gaps ready to claim
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-emerald-200/50 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Strategic Brief Generation (Light 3D Floating Showcase) */
function StrategicBriefShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f7f3ff] to-[#ebe0ff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(135,99,229,0.2)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a0848]">
            Strategic Brief
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Omnichannel blueprint & hook generation
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(135,99,229,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <FileText className="h-5 w-5 text-brand" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-purple-200/80 shadow-[0_10px_25px_rgba(83,9,157,0.08)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-brand uppercase tracking-wider">Q4 Launch Brief</span>
            <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Generated • 2m 14s</span>
          </div>
          <div className="text-xs font-extrabold text-black mb-1">Omnichannel Strategy Document</div>
          <div className="text-[9px] text-purple-950/60 space-y-1">
            <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> <strong>LinkedIn:</strong> 12x Thought Leadership Posts</div>
            <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> <strong>Twitter/X:</strong> 8-Part Retention Thread</div>
            <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> <strong>YouTube:</strong> 15-Min Step-by-Step Demo</div>
          </div>
        </div>

        <div className="sm:col-span-5 rounded-2xl bg-white/90 backdrop-blur-md p-3 border border-purple-200/80 shadow-[0_10px_25px_rgba(83,9,157,0.08)] flex flex-col justify-between">
          <div>
            <div className="text-[8.5px] font-bold uppercase text-purple-900/50 mb-0.5">Brand Tone</div>
            <div className="text-xs font-bold text-purple-950">Authoritative & Crisp</div>
          </div>
          <div className="mt-2 pt-2 border-t border-purple-100">
            <div className="text-[8px] font-semibold text-purple-900/50">Top Hook Conversion</div>
            <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +3.4x Higher CTR
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-purple-200/70 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Context Ingestion & Scraping (Light 3D Floating Showcase) */
function ContextIngestionShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f5f8ff] to-[#e6edff] border border-blue-200/60 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c2340]">
            Context Ingestion
          </h4>
          <p className="text-[11px] font-medium text-blue-900/60 mt-0.5">
            Autonomous URL & document neural scraper
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-300/70 shadow-[0_8px_20px_rgba(59,130,246,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Globe className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
        <div className="sm:col-span-12 rounded-xl bg-white/95 backdrop-blur-md px-3 py-2 border border-blue-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono text-blue-950 font-semibold truncate">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            cubeforgelabs.ai/product-launch
          </div>
          <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Scraped in 420ms
          </span>
        </div>

        <div className="sm:col-span-6 rounded-xl bg-white/90 backdrop-blur-md p-3 border border-blue-200/80 shadow-sm">
          <div className="text-[8px] font-bold uppercase tracking-wider text-blue-900/50 mb-1">Brand Voice</div>
          <div className="text-xs font-bold text-blue-950">Technical & Visionary</div>
          <div className="mt-1 text-[8.5px] text-blue-800/60">5 Value propositions indexed</div>
        </div>

        <div className="sm:col-span-6 rounded-xl bg-white/90 backdrop-blur-md p-3 border border-blue-200/80 shadow-sm">
          <div className="text-[8px] font-bold uppercase tracking-wider text-blue-900/50 mb-1">Knowledge Graph</div>
          <div className="text-xs font-bold text-blue-950">136 Entity Nodes</div>
          <div className="mt-1 text-[8.5px] text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="h-2.5 w-2.5" /> Vector Mapped
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-blue-300/40 via-blue-200/70 to-blue-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Market Positioning & Whitespace (Light 3D Floating Showcase) */
function MarketPositioningShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f6f2ff] to-[#ebe0ff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(135,99,229,0.2)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a0848]">
            Market Positioning
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Authority vs. originality positioning matrix
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(135,99,229,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Compass className="h-5 w-5 text-brand" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
        <div className="sm:col-span-7 rounded-2xl bg-emerald-50/95 backdrop-blur-md p-3.5 border border-emerald-200 shadow-sm">
          <div className="text-[8.5px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
            Winning Whitespace Angle
          </div>
          <div className="text-xs font-black text-emerald-950">
            End-to-End Autonomous Pipeline
          </div>
          <div className="mt-2 text-[9px] text-emerald-900/70 font-medium leading-relaxed">
            High Authority + High Originality quadrant. Outperforms fragmented point solutions.
          </div>
        </div>

        <div className="sm:col-span-5 rounded-2xl bg-white/90 backdrop-blur-md p-3 border border-purple-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-purple-900/50 uppercase">Search Intent</div>
            <div className="text-base font-black text-brand">78% Commercial</div>
          </div>
          <div className="mt-1.5 text-[8.5px] text-purple-900/60">
            High intent keyword volume: <strong>45K/mo</strong>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-emerald-200/60 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. Multi-Channel Distribution Blueprint (Light 3D Floating Showcase) */
function DistributionBlueprintShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f7f3ff] to-[#ebe0ff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(135,99,229,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a0848]">
            Distribution Blueprint
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Calibrated timing & multi-channel queuing
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(135,99,229,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Calendar className="h-5 w-5 text-brand" />
        </div>
      </div>

      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-[#0a66c2] px-1.5 py-0.5 rounded text-[8px]">in</span>
            <span className="font-bold text-black">LinkedIn Article</span>
            <span className="text-purple-900/50">• Tue 7:30 PM</span>
          </div>
          <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8.5px]">
            AI Scheduled (24K est.)
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-black px-1.5 py-0.5 rounded text-[8px]">𝕏</span>
            <span className="font-bold text-black">Twitter/X Thread</span>
            <span className="text-purple-900/50">• Thu 9:00 AM</span>
          </div>
          <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8.5px]">
            AI Scheduled (19.5K est.)
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-[#e4405f] px-1.5 py-0.5 rounded text-[8px]">IG</span>
            <span className="font-bold text-black">Carousel Post</span>
            <span className="text-purple-900/50">• Sat 11:30 AM</span>
          </div>
          <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8.5px]">
            AI Scheduled (12K est.)
          </span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-purple-200/70 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* =========================================================================
   VIDEO AUTOMATION SUBFEATURE SHOWCASE COMPONENTS (LIGHT GRADIENT 3D DECK)
   ========================================================================= */

/* 01. Scene Slicing & Hook Detection */
function SceneSlicingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fdf2f8] to-[#fce7f3] border border-pink-200/60 shadow-[0_20px_50px_-12px_rgba(236,72,153,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-pink-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#2a0832]">
            Scene Slicing & Hook Detection
          </h4>
          <p className="text-[11px] font-medium text-pink-900/60 mt-0.5">
            Calibrated 3–5s retention segmenting & tension curves
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-300/70 shadow-[0_8px_20px_rgba(236,72,153,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Film className="h-5 w-5 text-pink-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-pink-600 px-1.5 py-0.5 rounded text-[8px]">01</span>
            <span className="font-bold text-black">Opening Hook</span>
            <span className="text-pink-900/50">• 0.0s – 3.2s</span>
          </div>
          <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8.5px]">
            94.8% Retention Hold
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-purple-600 px-1.5 py-0.5 rounded text-[8px]">02</span>
            <span className="font-bold text-black">Contextual Tension</span>
            <span className="text-pink-900/50">• 3.2s – 8.5s</span>
          </div>
          <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 text-[8.5px]">
            Emotional Peak
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-sm text-[9.5px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded text-[8px]">03</span>
            <span className="font-bold text-black">Resolution & CTA</span>
            <span className="text-pink-900/50">• 8.5s – 15.0s</span>
          </div>
          <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[8.5px]">
            High-Converting Close
          </span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-pink-300/40 via-purple-200/70 to-pink-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Contextual B-Roll Synthesis */
function BRollSynthesisShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#faf5ff] to-[#f3e8ff] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(168,85,247,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#220738]">
            Contextual B-Roll Synthesis
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Auto-generated 4K cinematic assets matched to script beats
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(168,85,247,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Video className="h-5 w-5 text-purple-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-3 gap-2 pt-1">
        <div className="rounded-xl p-2.5 bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-center flex flex-col justify-between">
          <div className="text-[8px] font-bold uppercase tracking-wider text-purple-900/60">Scene 01</div>
          <div className="my-1.5 text-[9.5px] font-extrabold text-black">Macro 3D Hook</div>
          <span className="text-[7.5px] font-bold text-pink-600 bg-pink-50 rounded py-0.5">99.4% Match</span>
        </div>

        <div className="rounded-xl p-2.5 bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-center flex flex-col justify-between">
          <div className="text-[8px] font-bold uppercase tracking-wider text-purple-900/60">Scene 02</div>
          <div className="my-1.5 text-[9.5px] font-extrabold text-black">Camera Orbit</div>
          <span className="text-[7.5px] font-bold text-purple-600 bg-purple-50 rounded py-0.5">4K Depth Map</span>
        </div>

        <div className="rounded-xl p-2.5 bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm text-center flex flex-col justify-between">
          <div className="text-[8px] font-bold uppercase tracking-wider text-purple-900/60">Scene 03</div>
          <div className="my-1.5 text-[9.5px] font-extrabold text-black">UI Particle Burst</div>
          <span className="text-[7.5px] font-bold text-blue-600 bg-blue-50 rounded py-0.5">60 FPS HDR</span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-pink-200/70 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Audio Waveform & Voice Sync */
function WaveformSyncShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf4] to-[#dcfce7] border border-emerald-200/60 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#06331a]">
            Audio Waveform & Voice Sync
          </h4>
          <p className="text-[11px] font-medium text-emerald-900/60 mt-0.5">
            Whisper v3 speech alignment with 0ms audio drift
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Volume2 className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto space-y-2 pt-1">
        {/* Waveform Envelope Visualization */}
        <div className="rounded-xl bg-slate-950 p-3 text-white border border-black/10">
          <div className="flex items-center justify-between text-[7.5px] text-white/50 mb-1.5">
            <span className="font-bold text-emerald-400">48kHz STEREO ENVELOPE</span>
            <span>120 Peak Samples</span>
          </div>
          <div className="flex items-center justify-between gap-1 h-7 px-1">
            {[4, 8, 14, 18, 10, 6, 12, 22, 16, 8, 14, 20, 24, 16, 10, 6, 12, 18, 22, 14, 8, 4, 10, 16, 20, 12, 6, 14, 18, 10, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-emerald-400 transition-all duration-300"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-2 text-[9px] text-emerald-900/70 font-semibold">
          <span>✓ Speech-to-Word Timestamps Locked</span>
          <span className="text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">0.00ms Drift</span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-emerald-300/40 via-teal-200/70 to-emerald-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Kinetic Typography Captions */
function KineticCaptionsShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffbeb] to-[#fef3c7] border border-amber-200/60 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3b2308]">
            Kinetic Typography Captions
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Dynamic animated word highlighting for 9:16 vertical feeds
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(245,158,11,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <MessageSquareText className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto space-y-2 pt-1">
        {/* Caption Preview Box */}
        <div className="rounded-xl bg-black/90 p-3.5 text-center border border-amber-400/40 shadow-sm">
          <div className="text-[8px] font-bold text-amber-300/70 uppercase tracking-widest mb-1">Live Caption Preview</div>
          <div className="text-sm font-black tracking-wide text-white">
            SCRIPTS BECOME <span className="text-amber-400 bg-amber-400/20 px-1.5 py-0.5 rounded">FINISHED VIDEO</span>
          </div>
          <div className="text-[8.5px] text-white/60 mt-1">Karaoke Sync • 0 Dropped Word Frames</div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[8.5px]">
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200 font-bold text-amber-950">Inter 800</div>
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200 font-bold text-amber-950">Montserrat</div>
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200 font-bold text-amber-950">Safe-Zone ✓</div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-amber-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Multi-Track Timeline Assembly */
function MultiTrackStitchingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#eff6ff] to-[#dbeafe] border border-blue-200/60 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081e42]">
            Multi-Track Timeline Assembly
          </h4>
          <p className="text-[11px] font-medium text-blue-900/60 mt-0.5">
            Automated FFmpeg timeline compiling video, audio, SFX & text
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-300/70 shadow-[0_8px_20px_rgba(59,130,246,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Layers className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-pink-600 px-1.5 py-0.5 rounded text-[7.5px] w-12 text-center">VIDEO</span>
          <span className="font-bold text-black flex-1">3x 4K UHD Video Scenes</span>
          <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">60 FPS</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-emerald-600 px-1.5 py-0.5 rounded text-[7.5px] w-12 text-center">VOICE</span>
          <span className="font-bold text-black flex-1">ElevenLabs Neural Voiceover</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">48kHz</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-purple-600 px-1.5 py-0.5 rounded text-[7.5px] w-12 text-center">SFX</span>
          <span className="font-bold text-black flex-1">Dynamic Whoosh & Impact Transitions</span>
          <span className="text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.5 rounded">Stereo</span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-blue-300/40 via-purple-200/70 to-blue-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. 60 FPS Headless Render & Export */
function HeadlessExportShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fdf2f8] to-[#ede9fe] border border-purple-200/60 shadow-[0_20px_50px_-12px_rgba(168,85,247,0.2)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-pink-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#220738]">
            60 FPS Headless Export
          </h4>
          <p className="text-[11px] font-medium text-purple-900/60 mt-0.5">
            Instant publication-ready MP4 rendering with NVENC speed
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-300/70 shadow-[0_8px_20px_rgba(168,85,247,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Download className="h-5 w-5 text-purple-600" />
        </div>
      </div>

      <div className="relative z-20 my-auto grid grid-cols-2 gap-2.5 pt-1">
        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-purple-900/50 uppercase">Vertical Reel Format</div>
            <div className="text-xs font-black text-black mt-0.5">1080×1920 (9:16)</div>
          </div>
          <div className="mt-2 text-[8px] text-pink-600 font-bold bg-pink-50 p-1 rounded text-center">
            TikTok • Reels • Shorts
          </div>
        </div>

        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-purple-900/50 uppercase">Master Export Time</div>
            <div className="text-xs font-black text-emerald-600 mt-0.5">&lt; 3.2s Render</div>
          </div>
          <div className="mt-2 text-[8px] text-emerald-700 font-bold bg-emerald-50 p-1 rounded text-center">
            1-Click Social Publish
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-purple-300/40 via-pink-200/70 to-purple-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* =========================================================================
   COMPLIANCE & SCHEDULING (Emerald / Mint Studio 3D Floating Showcases)
   ========================================================================= */

/* 01. Zero-Risk Guardrails */
function ZeroRiskGuardrailsShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf4] to-[#dcfce7] border border-emerald-200/70 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-teal-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042f1a]">
            Zero-Risk Guardrails
          </h4>
          <p className="text-[11px] font-medium text-emerald-900/60 mt-0.5">
            Autonomous multi-layer scanner auditing 50+ risk categories
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      {/* Center 3D Floating Cards */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center pt-2">
        {/* Left Audit Check Matrix */}
        <div className="sm:col-span-7 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-emerald-200/80 shadow-[0_10px_25px_rgba(16,185,129,0.08)] transform -rotate-1 hover:rotate-0 transition-transform space-y-2">
          <div className="flex items-center justify-between text-[8.5px] font-bold text-emerald-900">
            <span className="font-mono bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200">Safety Check Matrix</span>
            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">0 Flags</span>
          </div>
          <div className="space-y-1.5 text-[9px]">
            <div className="flex items-center justify-between">
              <span className="text-black/80 font-medium">Regulatory & Legal Guidelines</span>
              <span className="text-emerald-600 font-bold">Passed ✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black/80 font-medium">Copyright & IP Protection</span>
              <span className="text-emerald-600 font-bold">Passed ✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black/80 font-medium">Toxicity & Sentiment Filter</span>
              <span className="text-emerald-600 font-bold">Passed ✓</span>
            </div>
          </div>
        </div>

        {/* Right Safety Score */}
        <div className="sm:col-span-5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-emerald-200/80 shadow-[0_10px_25px_rgba(16,185,129,0.08)] flex flex-col items-center text-center transform rotate-1 hover:rotate-0 transition-transform">
          <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-900/50 mb-1">
            Safety Score
          </div>
          <div className="relative flex items-center justify-center my-1">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              100%
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[8.5px] font-bold text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="h-2.5 w-2.5" /> Brand Safe
          </div>
        </div>
      </div>

      {/* 3D Angled Device Base */}
      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-emerald-300/40 via-emerald-200/70 to-emerald-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Autonomous Auto-Regeneration */
function AutoRegenerationShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf9] to-[#ccfbf1] border border-teal-200/70 shadow-[0_20px_50px_-12px_rgba(20,184,166,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-teal-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-emerald-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042f2e]">
            Autonomous Auto-Regeneration
          </h4>
          <p className="text-[11px] font-medium text-teal-900/60 mt-0.5">
            Instant sentence-level re-drafting on confidence breach
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-teal-300/70 shadow-[0_8px_20px_rgba(20,184,166,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <RotateCcw className="h-5 w-5 text-teal-600" />
        </div>
      </div>

      {/* Live Diff Cards */}
      <div className="relative z-20 my-auto space-y-2 pt-2">
        <div className="rounded-xl p-2.5 bg-red-50/70 border border-red-200/80 text-[9.5px]">
          <div className="flex items-center justify-between text-[8px] font-bold text-red-700 mb-1">
            <span>Flagged Chunk (Unsubstantiated Claim)</span>
            <span className="bg-red-100 text-red-800 px-1.5 py-0.2 rounded font-mono">Flagged</span>
          </div>
          <p className="line-through text-red-600/80 leading-tight">
            &ldquo;Guaranteed 1000% ROI in 24 hours without any market risk...&rdquo;
          </p>
        </div>

        <div className="rounded-xl p-2.5 bg-emerald-50/80 border border-emerald-200/90 text-[9.5px]">
          <div className="flex items-center justify-between text-[8px] font-bold text-emerald-800 mb-1">
            <span>Autonomous Re-Draft (Compliant & High-Converting)</span>
            <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-mono">320ms Auto-Swap</span>
          </div>
          <p className="text-emerald-950 font-medium leading-tight">
            &ldquo;Data-backed 3.4x average conversion boost verified across 500+ audited B2B campaigns...&rdquo;
          </p>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-teal-300/40 via-emerald-200/70 to-teal-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Brand Voice Compliance */
function BrandVoiceComplianceShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf4] to-[#d1fae5] border border-emerald-200/70 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-teal-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042f1a]">
            Brand Voice Compliance
          </h4>
          <p className="text-[11px] font-medium text-emerald-900/60 mt-0.5">
            Strict tone governance, banned words & style rules
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Lock className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      {/* 3 Brand Voice Cards */}
      <div className="relative z-20 my-auto grid grid-cols-3 gap-2.5 pt-2 text-center">
        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div className="text-[8px] font-bold text-emerald-900/50 uppercase">Banned Words</div>
          <div className="text-base font-black text-emerald-600 my-1">0 Flags</div>
          <div className="text-[7.5px] text-emerald-800/60">Filtered in real-time</div>
        </div>

        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div className="text-[8px] font-bold text-emerald-900/50 uppercase">Tone Match</div>
          <div className="text-base font-black text-emerald-600 my-1">100%</div>
          <div className="text-[7.5px] text-emerald-800/60">Authoritative & Sharp</div>
        </div>

        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div className="text-[8px] font-bold text-emerald-900/50 uppercase">Readability</div>
          <div className="text-base font-black text-teal-700 my-1">Grade 8</div>
          <div className="text-[7.5px] text-teal-800/60">Optimal social cadence</div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-emerald-300/40 via-teal-200/70 to-emerald-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Audience Peak Timing */
function AudienceTimingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf4] to-[#dcfce7] border border-emerald-200/70 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-teal-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042f1a]">
            Audience Peak Timing
          </h4>
          <p className="text-[11px] font-medium text-emerald-900/60 mt-0.5">
            Neural slotting based on follower engagement history
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Clock className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      {/* Peak Heatmap Showcase */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 items-center">
        {/* Peak Slot Banner */}
        <div className="sm:col-span-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-3.5 shadow-md">
          <div className="text-[8px] font-bold uppercase tracking-widest text-emerald-200">
            Optimal Global Slot
          </div>
          <div className="text-xl font-black mt-0.5">Tue 7:30 PM</div>
          <div className="text-[8.5px] text-emerald-100/80 mt-1">24K Est. Reach • +4.8x CTR Boost</div>
        </div>

        {/* Platform Breakdown */}
        <div className="sm:col-span-6 space-y-1.5 text-[8.5px]">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/90 border border-emerald-200 font-medium">
            <span className="text-slate-800">LinkedIn Authority</span>
            <span className="text-emerald-700 font-bold">Tue 7:30 PM</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/90 border border-emerald-200 font-medium">
            <span className="text-slate-800">𝕏 Viral Thread</span>
            <span className="text-emerald-700 font-bold">Wed 11:15 AM</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/90 border border-emerald-200 font-medium">
            <span className="text-slate-800">YouTube Deep-Dive</span>
            <span className="text-emerald-700 font-bold">Thu 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-emerald-300/40 via-teal-200/70 to-emerald-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Multi-Channel Queue */
function MultiChannelQueueShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#eff6ff] to-[#dbeafe] border border-blue-200/60 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081e42]">
            Multi-Channel Queue
          </h4>
          <p className="text-[11px] font-medium text-blue-900/60 mt-0.5">
            Unified calendar queue across LinkedIn, X, Instagram & YouTube
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-300/70 shadow-[0_8px_20px_rgba(59,130,246,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Calendar className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      {/* Queue List */}
      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-[#0a66c2] px-1.5 py-0.5 rounded text-[7.5px] w-14 text-center">LINKEDIN</span>
          <span className="font-bold text-black flex-1">Founder Authority Carousel</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Tue 7:30 PM ✓</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-black px-1.5 py-0.5 rounded text-[7.5px] w-14 text-center">𝕏 / TWITTER</span>
          <span className="font-bold text-black flex-1">10-Part Framework Thread</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Wed 11:15 AM ✓</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-blue-200 text-[8.5px]">
          <span className="font-bold text-white bg-[#ff0000] px-1.5 py-0.5 rounded text-[7.5px] w-14 text-center">YOUTUBE</span>
          <span className="font-bold text-black flex-1">60s Product Launch Short</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Thu 6:00 PM ✓</span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-blue-300/40 via-emerald-200/70 to-blue-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. Live Pre-Flight Governance & Audit */
function LivePublishingAuditShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#f0fdf4] to-[#dcfce7] border border-emerald-200/70 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042f1a]">
            Live Pre-Flight Audit
          </h4>
          <p className="text-[11px] font-medium text-emerald-900/60 mt-0.5">
            Encrypted OAuth token authentication & verified pre-flight checklist
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <FileCheck2 className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      {/* 2 Pre-flight boxes */}
      <div className="relative z-20 my-auto grid grid-cols-2 gap-2.5 pt-1">
        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-emerald-900/50 uppercase">OAuth 2.0 Auth</div>
            <div className="text-xs font-black text-black mt-0.5">AES-256 Encrypted</div>
          </div>
          <div className="mt-2 text-[8px] text-emerald-700 font-bold bg-emerald-50 p-1 rounded text-center">
            Zero Human Bottleneck
          </div>
        </div>

        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-emerald-900/50 uppercase">Pre-Flight Status</div>
            <div className="text-xs font-black text-emerald-600 mt-0.5">100% Passed</div>
          </div>
          <div className="mt-2 text-[8px] text-emerald-700 font-bold bg-emerald-50 p-1 rounded text-center">
            Ready to Dispatch
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-emerald-300/40 via-teal-200/70 to-emerald-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* =========================================================================
   PUBLISHING & COST ANALYTICS (Amber / Gold Studio 3D Floating Showcases)
   ========================================================================= */

/* 01. Direct API Publishing */
function DirectApiPublishingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fefce8] to-[#fef08a]/60 border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(234,179,8,0.18)]">
      {/* Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Native API Publishing
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Direct authenticated API pipeline with 0 third-party middle-men
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(234,179,8,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Send className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* 4 Connected API Channels */}
      <div className="relative z-20 my-auto grid grid-cols-2 gap-2 pt-1">
        {[
          { platform: "𝕏 / Twitter", status: "OAuth 2.0 • 140ms", color: "#eab308" },
          { platform: "LinkedIn API", status: "OAuth 2.0 • 180ms", color: "#d97706" },
          { platform: "Instagram Graph", status: "Meta API • 210ms", color: "#ca8a04" },
          { platform: "YouTube Data v3", status: "Google API • 260ms", color: "#b45309" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-2 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-2xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-amber-950">{item.platform}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="mt-1 flex items-center justify-between text-[7.5px] text-amber-800/70 font-mono">
              <span>{item.status}</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-1 rounded">200 OK</span>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-yellow-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 02. Cost-Per-Post Tracking */
function CostPerPostTrackingShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffbeb] to-[#fde68a]/60 border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(217,119,6,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-400/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-orange-300/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Cost-Per-Post Tracking
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Itemized LLM token spend, GPU render compute & storage audit
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(217,119,6,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <DollarSign className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Cost Ledger & Summary Box */}
      <div className="relative z-20 my-auto grid grid-cols-1 sm:grid-cols-12 gap-2.5 pt-1">
        <div className="sm:col-span-7 space-y-1">
          {[
            { label: "Claude 3.5 Sonnet", cost: "$0.014", detail: "1,840 Tokens" },
            { label: "Midjourney v6 4K", cost: "$0.022", detail: "4 Renders" },
            { label: "Whisper & Video Render", cost: "$0.006", detail: "60fps MP4" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-1.5 rounded-lg bg-white/95 border border-amber-200/70 text-[8px]"
            >
              <div>
                <span className="font-bold text-amber-950 block leading-none">{item.label}</span>
                <span className="text-[7px] text-amber-800/50">{item.detail}</span>
              </div>
              <span className="font-mono font-bold text-amber-700">{item.cost}</span>
            </div>
          ))}
        </div>

        <div className="sm:col-span-5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white p-3 flex flex-col justify-between shadow-sm">
          <div>
            <div className="text-[7.5px] font-bold uppercase tracking-wider text-amber-200">Total Spend</div>
            <div className="text-xl font-black mt-0.5">$0.042</div>
          </div>
          <div className="pt-1.5 border-t border-white/20 text-[7px] text-amber-100 font-semibold flex justify-between">
            <span>vs Agency:</span>
            <span className="text-emerald-300 font-bold">-92%</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-orange-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 03. Closed-Loop Feedback */
function ClosedLoopFeedbackShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fef9c3] to-[#fde047]/40 border border-yellow-300/70 shadow-[0_20px_50px_-12px_rgba(202,138,4,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-yellow-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Closed-Loop Feedback
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Engagement telemetry automatically retrains upstream strategy models
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-yellow-300/70 shadow-[0_8px_20px_rgba(202,138,4,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <TrendingUp className="h-5 w-5 text-yellow-600" />
        </div>
      </div>

      {/* Flywheel Loop Pipeline */}
      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="p-2 rounded-xl bg-white/95 border border-yellow-300/80 shadow-2xs">
          <div className="flex items-center justify-between text-[8px] font-bold text-amber-950 mb-1">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Live Telemetry Ingestion
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">+4.8% CTR</span>
          </div>
          <div className="text-[8px] text-amber-900/70">
            Ingested 42.4K impressions → Hook Framework A weighted +18% for next cycle.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-yellow-50/80 border border-yellow-200 text-center">
            <div className="text-[7.5px] uppercase font-bold text-amber-800/60">Strategy Memory</div>
            <div className="text-[9.5px] font-extrabold text-amber-950 mt-0.5">Auto-Calibrated</div>
          </div>
          <div className="p-2 rounded-lg bg-yellow-50/80 border border-yellow-200 text-center">
            <div className="text-[7.5px] uppercase font-bold text-amber-800/60">Compounding ROI</div>
            <div className="text-[9.5px] font-extrabold text-emerald-700 mt-0.5">+380% Flywheel</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-yellow-300/40 via-amber-200/70 to-yellow-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 04. Multi-Platform Dispatch */
function MultiPlatformDispatchShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fefce8] to-[#fef08a]/60 border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(234,179,8,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Multi-Platform Dispatch
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Parallel synchronous distribution with native format payloads
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(234,179,8,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <Share2 className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Dispatch Cards */}
      <div className="relative z-20 my-auto space-y-1.5 pt-1">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-amber-200 text-[8.5px]">
          <span className="font-bold text-white bg-black px-1.5 py-0.5 rounded text-[7.5px] w-16 text-center">𝕏 / TWITTER</span>
          <span className="font-bold text-black flex-1">280-char formatted thread + media</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Dispatched ✓</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-amber-200 text-[8.5px]">
          <span className="font-bold text-white bg-[#0a66c2] px-1.5 py-0.5 rounded text-[7.5px] w-16 text-center">LINKEDIN</span>
          <span className="font-bold text-black flex-1">1080x1350 PDF carousel (6 slides)</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Dispatched ✓</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/95 border border-amber-200 text-[8.5px]">
          <span className="font-bold text-white bg-[#ff0000] px-1.5 py-0.5 rounded text-[7.5px] w-16 text-center">YOUTUBE</span>
          <span className="font-bold text-black flex-1">Shorts 60s 4K UHD 60fps</span>
          <span className="text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">Queued 6:00 PM</span>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-yellow-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 05. Engagement Telemetry */
function EngagementAnalyticsShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fffbeb] to-[#fed7aa]/50 border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(217,119,6,0.18)]">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Engagement Telemetry
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Real-time impression velocity, engagement rate & conversion tracking
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(217,119,6,0.25)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <BarChart3 className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* 3 Analytics Cards */}
      <div className="relative z-20 my-auto grid grid-cols-3 gap-2 pt-1">
        <div className="rounded-xl p-2.5 bg-white/95 border border-amber-200/80 shadow-2xs text-center">
          <div className="text-[7.5px] uppercase font-bold text-amber-800/60">Impressions</div>
          <div className="text-sm font-extrabold text-amber-950 mt-0.5">128.4K</div>
          <div className="text-[7px] text-emerald-600 font-semibold mt-0.5">+44% Velocity</div>
        </div>

        <div className="rounded-xl p-2.5 bg-white/95 border border-amber-200/80 shadow-2xs text-center">
          <div className="text-[7.5px] uppercase font-bold text-amber-800/60">Avg CTR</div>
          <div className="text-sm font-extrabold text-amber-950 mt-0.5">5.2%</div>
          <div className="text-[7px] text-emerald-600 font-semibold mt-0.5">Top 1% SaaS</div>
        </div>

        <div className="rounded-xl p-2.5 bg-white/95 border border-amber-200/80 shadow-2xs text-center">
          <div className="text-[7.5px] uppercase font-bold text-amber-800/60">Cost / Lead</div>
          <div className="text-sm font-extrabold text-amber-950 mt-0.5">$0.28</div>
          <div className="text-[7px] text-emerald-600 font-semibold mt-0.5">vs $4.50 Avg</div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-orange-300/40 via-amber-200/70 to-orange-300/40 border-t border-white shadow-inner" />
    </div>
  );
}

/* 06. Live Delivery Audit */
function LiveVerificationShowcase() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between select-none bg-gradient-to-br from-white via-[#fefce8] to-[#fef08a]/60 border border-amber-200/70 shadow-[0_20px_50px_-12px_rgba(234,179,8,0.18)]">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#451a03]">
            Live Delivery Audit
          </h4>
          <p className="text-[11px] font-medium text-amber-900/60 mt-0.5">
            Cryptographic post verification, webhook receipts & live URL confirmation
          </p>
        </div>
        <div className="h-11 w-11 rounded-2xl bg-white/85 backdrop-blur-md border border-amber-300/70 shadow-[0_8px_20px_rgba(234,179,8,0.25)] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
          <CheckCheck className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* 2 Verification Proof Boxes */}
      <div className="relative z-20 my-auto grid grid-cols-2 gap-2.5 pt-1">
        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-amber-900/50 uppercase">Webhook Receipt</div>
            <div className="text-xs font-black text-black mt-0.5">SHA-256 Verified</div>
          </div>
          <div className="mt-2 text-[8px] text-emerald-700 font-bold bg-emerald-50 p-1 rounded text-center">
            HTTP 200 OK • 0ms Latency
          </div>
        </div>

        <div className="rounded-xl p-3 bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-amber-900/50 uppercase">Live URL Status</div>
            <div className="text-xs font-black text-emerald-600 mt-0.5">100% Live Proof</div>
          </div>
          <div className="mt-2 text-[8px] text-emerald-700 font-bold bg-emerald-50 p-1 rounded text-center">
            Zero Silent Failures
          </div>
        </div>
      </div>

      <div className="relative z-10 -mb-2 mt-1 h-3 rounded-t-xl bg-gradient-to-r from-amber-300/40 via-yellow-200/70 to-amber-300/40 border-t border-white shadow-inner" />
    </div>
  );
}


