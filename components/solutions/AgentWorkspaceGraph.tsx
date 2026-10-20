"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Aperture, 
  FileText, 
  Send, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";


interface NodeItem {
  id: string;
  name: string;
  agent: string;
  role: string;
  icon: any;
  status: string;
  tag: string;
  detail: string;
  color: string;
  position: { x: number; y: number };
}

const NODES: NodeItem[] = [
  {
    id: "research",
    name: "RESEARCH",
    agent: "Cato",
    role: "Audience & Competitor Intelligence",
    icon: Search,
    status: "Active",
    tag: "Signal Ingestion",
    detail: "Ingesting SERP, social sentiment & competitor campaigns",
    color: "#8763e5",
    position: { x: 18, y: 25 }
  },
  {
    id: "strategy",
    name: "STRATEGY",
    agent: "Vela",
    role: "Campaign Architect",
    icon: Target,
    status: "Q4 Plan",
    tag: "Funnel Mapping",
    detail: "Synthesizing research into 4-tier omni-channel blueprint",
    color: "#3b82f6",
    position: { x: 50, y: 15 }
  },
  {
    id: "visuals",
    name: "VISUALS",
    agent: "Iris",
    role: "Art Director",
    icon: Aperture,
    status: "4K Ready",
    tag: "Generative Art",
    detail: "Rendering studio-grade imagery & multi-ratio carousels",
    color: "#8763e5",
    position: { x: 82, y: 25 }
  },
  {
    id: "content",
    name: "CONTENT",
    agent: "Orin",
    role: "Lead Copywriter",
    icon: FileText,
    status: "Multi-Tone",
    tag: "Narrative Engine",
    detail: "Drafting channel-native copy grounded in Brand IQ voice",
    color: "#f59e0b",
    position: { x: 30, y: 78 }
  },
  {
    id: "distribution",
    name: "DISTRIBUTION",
    agent: "Nova",
    role: "Auto-Publisher",
    icon: Send,
    status: "Direct Sync",
    tag: "API Dispatch",
    detail: "Scheduling and dispatching to 𝕏, LinkedIn, IG & YouTube",
    color: "#10b981",
    position: { x: 70, y: 78 }
  }
];

export default function AgentWorkspaceGraph() {
  const [selectedNode, setSelectedNode] = useState<string>("strategy");

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#faf9fe] to-white overflow-hidden border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7852dc] font-mono">
            Autonomous Agent Mesh
          </span>
          <h2 className={`mt-3 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl leading-[1.08] `}>
            Every agent, one workspace.
          </h2>
          <p className="mt-4 text-base text-black/65 leading-relaxed font-normal">
            CubeForgeLabs connects specialized agents into a continuous intelligence network. Context is automatically shared from research to publish without manual re-briefing.
          </p>
        </div>

        {/* Interactive Visual Graph Canvas */}
        <div className="mt-14 relative mx-auto w-full max-w-5xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl border border-black/5 overflow-hidden">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, #8763e5 1px, transparent 1px)`,
              backgroundSize: "28px 28px"
            }}
          />

          {/* Connected SVG lines with animated energy pulses */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none z-0">
            <line x1="22%" y1="28%" x2="48%" y2="20%" stroke="#8763e5" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
            <line x1="52%" y1="20%" x2="78%" y2="28%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
            <line x1="48%" y1="22%" x2="33%" y2="75%" stroke="#8763e5" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
            <line x1="36%" y1="75%" x2="78%" y2="30%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
            <line x1="38%" y1="80%" x2="65%" y2="80%" stroke="#10b981" strokeWidth="2.5" className="opacity-60" />
            <line x1="80%" y1="32%" x2="72%" y2="75%" stroke="#8763e5" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          </svg>

          {/* Nodes Container (Desktop / Tablet layout) */}
          <div className="relative z-10 min-h-[420px] w-full hidden sm:block">
            {NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    isSelected ? "z-30" : "z-10"
                  }`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`
                  }}
                >
                  <div
                    className={`flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg transition-all border ${
                      isSelected
                        ? "border-[#8763e5] shadow-xl shadow-[#8763e5]/20 ring-2 ring-[#8763e5]/20"
                        : "border-black/5 hover:border-black/20 hover:shadow-md"
                    }`}
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
                      style={{ backgroundColor: node.color }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono tracking-wider text-neutral-900">
                          {node.name}
                        </span>
                        <span className="rounded-full bg-neutral-100 px-2 py-0.2 text-[10px] font-semibold text-neutral-600">
                          {node.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-black/50 font-medium">
                        {node.agent} • {node.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile responsive card list */}
          <div className="relative z-10 sm:hidden space-y-3">
            {NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition ${
                    isSelected ? "bg-[#8763e5]/5 border-[#8763e5]" : "bg-white border-black/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl text-white" style={{ backgroundColor: node.color }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900">{node.name} ({node.agent})</div>
                      <div className="text-xs text-black/50">{node.detail}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Bar for Selected Node */}
          {selectedNode && (
            <div className="relative z-10 mt-6 sm:mt-0 rounded-2xl bg-neutral-900 p-4 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <span className="font-mono text-xs text-[#d79de4] font-bold uppercase">
                    Agent {NODES.find(n => n.id === selectedNode)?.agent} ({NODES.find(n => n.id === selectedNode)?.role}):
                  </span>
                  <p className="text-xs text-neutral-200 mt-0.5">
                    {NODES.find(n => n.id === selectedNode)?.detail}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">
                  Zero Context Loss
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
