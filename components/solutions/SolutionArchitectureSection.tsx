"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Send, 
  Database, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Code2,
  Terminal
} from "lucide-react";


interface ArchProps {
  slug: string;
  title: string;
  accentColor: string;
}

const ARCH_LAYERS = [
  {
    id: "ingestion",
    number: "01",
    name: "Unified Ingestion Mesh",
    badge: "Multi-Source Sync",
    icon: Database,
    description: "Connects your raw company intelligence without manual formatting or re-uploading.",
    features: [
      "Real-time sync with Google Drive, Notion, and Confluence",
      "Direct Figma design token & color variable extraction",
      "Zoom & podcast MP4 automated speech-to-text transcript parsing",
      "Brand stylebook PDF vectorization and tone embedding"
    ],
    sampleCode: `// Brand IQ Ingestion Event
POST /api/v1/vault/sync
{
  "source": "notion://workspace/q4-brand-guidelines",
  "vectors_extracted": 1420,
  "tone_archetype": "Authoritative Innovator",
  "banned_phrases": ["legacy", "cheapest", "guaranteed"],
  "status": "INDEXED_AND_LOCKED"
}`
  },
  {
    id: "agents",
    number: "02",
    name: "Multi-Agent Neural Core",
    badge: "6 Autonomous Specialists",
    icon: Cpu,
    description: "Six coordinated AI models executing research, narrative drafting, visual rendering, and audio pacing.",
    features: [
      "Cato & Vela: Market signal scanning and 4-tier funnel mapping",
      "Orin: Multi-tone channel-native copywriting (LinkedIn, 𝕏, Blogs)",
      "Iris: 4K generative visual art direction with brand color lock",
      "Kade: Kinetic 9:16 short-form clipping and auto-subtitles"
    ],
    sampleCode: `// Parallel Autonomous Agent Pipeline
const campaign = await cubeForgeLabs.executeMesh({
  briefId: "bf_884920",
  agents: ["cato", "vela", "orin", "iris", "nova"],
  outputChannels: ["linkedin", "twitter", "instagram"],
  concurrency: "MAX_PARALLEL_STREAM"
});`
  },
  {
    id: "governance",
    number: "03",
    name: "GuardIQ Policy & Compliance Vault",
    badge: "SOC2 & Zero Retention",
    icon: ShieldCheck,
    description: "Deterministic legal risk checks, claim verifications, and compliance enforcement before publishing.",
    features: [
      "Zero-data retention guarantee: Customer data never used for public model training",
      "Deterministic claim verification against approved enterprise whitepapers",
      "Automated SEC, FTC, and GDPR regulatory disclaimer injection",
      "Fine-grained role-based access control (RBAC) and Okta SAML 2.0"
    ],
    sampleCode: `// GuardIQ Pre-Publish Audit Response
{
  "audit_id": "audit_sec_9941",
  "passed": true,
  "trademark_risk_score": 0.00,
  "hallucination_detected": false,
  "approved_claims_verified": 4,
  "encryption": "AES_256_GCM"
}`
  },
  {
    id: "dispatch",
    number: "04",
    name: "Direct API Multi-Network Dispatch",
    badge: "Zero Aggregator Delay",
    icon: Send,
    description: "Direct OAuth 2.0 publishing to social networks with cryptographic delivery receipts.",
    features: [
      "Native REST/GraphQL dispatch directly to LinkedIn, 𝕏, Meta, and YouTube",
      "Zero third-party middleware aggregators: eliminates rate-limiting delays",
      "Real-time webhook telemetry & closed-loop impression feedback",
      "Timezone-optimized smart queue for peak regional engagement"
    ],
    sampleCode: `// Direct API Broadcast Receipt
{
  "dispatch_id": "disp_77391",
  "channels": {
    "linkedin": { "status": "LIVE", "urn": "urn:li:share:98471" },
    "twitter": { "status": "LIVE", "tweet_id": "184918294719" },
    "youtube": { "status": "QUEUED", "scheduled_utc": "09:15:00" }
  },
  "latency_ms": 184
}`
  }
];

export default function SolutionArchitectureSection({ slug, title, accentColor }: ArchProps) {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const current = ARCH_LAYERS[activeLayer];

  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d79de4] font-mono">
              System Architecture & Infrastructure
            </span>
            <h2 className={`mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-white `}>
              The Enterprise Tech Stack behind {title}
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
              Engineered with zero third-party middleware, deterministic brand compliance vaults, and low-latency multi-network APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
              ● 99.99% Direct API Uptime
            </span>
          </div>
        </div>

        {/* 4 Architecture Layer Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ARCH_LAYERS.map((layer, idx) => {
            const Icon = layer.icon;
            const isSelected = activeLayer === idx;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(idx)}
                className={`flex flex-col text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-white/15 border-white/40 shadow-lg shadow-[#8763e5]/20 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#d79de4]">
                    Layer {layer.number}
                  </span>
                  <Icon size={16} className={isSelected ? "text-white" : "text-neutral-400"} />
                </div>
                <div className="text-sm font-semibold text-white truncate">
                  {layer.name}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5 truncate font-normal">
                  {layer.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Layer Deep Dive Split View */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 rounded-3xl bg-neutral-900/90 p-6 sm:p-9 border border-white/10">
          
          {/* Left: Features & Explanations */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold uppercase text-[#d79de4]">
                  Layer {current.number} / 04
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  {current.badge}
                </span>
              </div>

              <h3 className={`text-2xl font-medium text-white mb-2 `}>
                {current.name}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              <div className="space-y-3">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Security: AES-256 GCM</span>
              <span className="text-emerald-400 font-semibold">Latency: &lt; 220ms</span>
            </div>
          </div>

          {/* Right: Code Payload / Terminal Preview */}
          <div className="lg:col-span-6 rounded-2xl bg-black/90 p-5 border border-white/10 font-mono text-xs text-neutral-300 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <Terminal size={12} />
                  <span>mesh_telemetry.json</span>
                </div>
              </div>

              {/* Code Snippet */}
              <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-emerald-400/90 whitespace-pre-wrap">
                {current.sampleCode}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-500">
              <span>Direct Node Webhook</span>
              <span className="text-white/60">Verified Production Payload</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
