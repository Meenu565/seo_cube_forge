'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Users, 
  Film, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SOLUTIONS = [
  {
    id: 'marketing',
    name: 'Marketing Teams',
    description: '10x faster campaign turnaround with unified brand IQ',
    href: '/solutions/marketing',
    icon: Users,
    color: '#8763e5'
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    description: 'Auto-clip 50+ viral shorts & dynamic subtitles daily',
    href: '/solutions/media-entertainment',
    icon: Film,
    color: '#06b6d4'
  },
  {
    id: 'agencies',
    name: 'Agencies & Consultancies',
    description: 'Manage 50+ client brands with isolated Brand IQ vaults',
    href: '/solutions/agencies',
    icon: Building2,
    color: '#f59e0b'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'SOC2 Type II, private VPC hosting & custom RBAC',
    href: '/solutions/enterprise',
    icon: ShieldCheck,
    color: '#10b981'
  },
];

export default function SolutionsMegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }: SolutionsMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -5, scale: 0.99 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[100%] left-0 w-full z-50 pt-2 flex justify-center pointer-events-none"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Main Card */}
          <div className="bg-white rounded-[20px] border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row w-[780px] max-w-[92vw] pointer-events-auto">
            
            {/* Left Column */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-neutral-50/50">
              <div>
                <span className="text-[11px] font-bold text-[#8763e5] uppercase tracking-wider block mb-2 font-mono">
                  Industry & Team Solutions
                </span>
                <h2 className="text-[26px] leading-[1.2] font-medium tracking-tight text-black mb-4">
                  Built to run content<br />
                  as an autonomous<br />
                  operating system.
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-xs font-normal">
                  Tailored workflows, compliance vaults, and multi-network publishing for every organization.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/solutions" 
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-black/80 hover:text-[#8763e5] transition"
                >
                  View All Solutions Overview →
                </Link>
              </div>
            </div>

            {/* Right Column (Solutions List) */}
            <div className="flex-1 p-6 md:p-8 bg-[#FAFAFA] border-t md:border-t-0 md:border-l border-black/5">
              <div className="text-[12px] font-medium text-black/40 mb-4 px-3">
                Solutions by Team
              </div>

              <div className="flex flex-col gap-1">
                {SOLUTIONS.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <Link 
                      key={sol.id}
                      href={sol.href}
                      onClick={onClose}
                      className="group flex items-center gap-3.5 p-3 rounded-xl hover:bg-black/[0.04] transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-neutral-600 group-hover:text-[#8763e5] group-hover:border-[#8763e5]/20 shadow-2xs transition">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-black/90 group-hover:text-black transition">
                          {sol.name}
                        </div>
                        <div className="text-[11px] text-black/50 group-hover:text-black/70 transition line-clamp-1">
                          {sol.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
