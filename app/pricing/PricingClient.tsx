'use client';

import React from 'react';
import { Zap, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingClient() {
  const handleStart = () => {
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#8763e5] selection:text-white pb-24">
      {/* Navbar placeholder if needed, otherwise just spacing */}
      <div className="pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9f9fb] border border-neutral-200 text-xs font-bold tracking-[0.2em] uppercase text-[#8763e5] mb-8"
        >
          <Zap size={12} className="fill-[#8763e5]" />
          Pricing
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-tight max-w-4xl mb-6 text-black font-sans"
        >
          Pay for shipped campaigns, not headcount.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-normal font-sans"
        >
          Start lean, then scale into a full autonomous content operation when the output becomes a growth channel.
        </motion.p>

      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-4">
        
        {/* Solo Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#120F17] rounded-[2rem] p-8 md:p-10 text-white flex flex-col h-full border border-white/5"
        >
          <div className="text-[10px] tracking-[0.2em] font-bold uppercase text-neutral-400 mb-6">
            Solo Operator
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Starter</h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-8 min-h-[60px]">
            For founders, marketers, and independent creators running their own content cadence.
          </p>
          
          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-5xl font-bold tracking-tight">$49</span>
            <span className="text-sm text-neutral-400">/ month</span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "3 Active Campaign Boards",
              "Standard AI voice generation",
              "Substack, X, & LinkedIn publishing",
              "Brand voice memory",
              "Email support"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-[#8763e5] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleStart}
            className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors duration-200"
          >
            Start Free Trial
          </button>
        </motion.div>

        {/* Growth Plan (Popular) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#8763e5] rounded-[2rem] p-8 md:p-10 text-white flex flex-col h-full shadow-[0_20px_50px_rgba(135,99,229,0.3)] relative md:-translate-y-4"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/80">
              Agency &amp; Growth Team
            </div>
            <span className="bg-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
              Popular
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Pro Engine</h2>
          <p className="text-sm text-white/80 leading-relaxed mb-8 min-h-[60px]">
            For teams that need a reliable content engine across multiple brands and channels.
          </p>
          
          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-5xl font-bold tracking-tight">$149</span>
            <span className="text-sm text-white/80">/ month</span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Unlimited Campaign Boards",
              "Advanced multi-speaker video shorts",
              "Omni-channel scheduling matrix",
              "5 isolated Brand IQ profiles",
              "Full team collaboration & reviews",
              "Priority rendering queue"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white">
                <Check size={16} className="text-white shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleStart}
            className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors duration-200 shadow-md"
          >
            Start 14-Day Pilot
          </button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#120F17] rounded-[2rem] p-8 md:p-10 text-white flex flex-col h-full border border-white/5"
        >
          <div className="text-[10px] tracking-[0.2em] font-bold uppercase text-neutral-400 mb-6">
            Private Content Floor
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Enterprise</h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-8 min-h-[60px]">
            For brands with custom workflows, controls, integrations, and security needs.
          </p>
          
          <div className="flex items-baseline gap-1 mb-10 h-[72px] items-center">
            <span className="text-5xl font-bold tracking-tight">Custom</span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Dedicated agent setup",
              "Custom publishing integrations",
              "SSO and advanced roles",
              "Onboarding and governance",
              "Private model routing"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-white shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleStart}
            className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors duration-200"
          >
            Contact Sales
          </button>
        </motion.div>

      </div>
    </div>
  );
}
