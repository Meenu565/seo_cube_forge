import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const columns = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Voice Agents", href: "/voice-agents" },
      { label: "Content Agents", href: "/content-agents" },
      { label: "Doc Agents", href: "/doc-agents" },
      { label: "Work Agents", href: "/work-agents" },
      { label: "Coding Agents", href: "/coding-agents" },
      { label: "CubeForge Edge", href: "/cubeforge-edge" }
    ]
  },
  {
    title: "FEATURES",
    links: [
      { label: "Research & Strategy", href: "/features/research-and-strategy" },
      { label: "Copywriting & Scripting", href: "/features/copywriting-and-scripting" },
      { label: "Visual & Media Generation", href: "/features/visual-and-media-generation" },
      { label: "Video Automation", href: "/features/video-automation" },
      { label: "Compliance & Scheduling", href: "/features/compliance-and-scheduling" },
      { label: "Publishing & Analytics", href: "/features/publishing-and-analytics" }
    ]
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Marketing Teams", href: "/solutions/marketing" },
      { label: "Media & Entertainment", href: "/solutions/media-entertainment" },
      { label: "Agencies & Consultancies", href: "/solutions/agencies" },
      { label: "Enterprise", href: "/solutions/enterprise" }
    ]
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blogs", href: "/blog" },
      { label: "Customer Stories", href: "#" },
      { label: "Documentation", href: "/documentation" },
      { label: "API Pricing", href: "/api-pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "CubeForge Champions", href: "/champions" }
    ]
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "/contact" },
      { label: "Brand", href: "/brand" },
      { label: "Brand Guidelines", href: "/brand-guidelines" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { label: "Trust Center", href: "/trust-center" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "EULA", href: "/eula" }
    ]
  }
];

interface FooterProps {
  ctaBgClass?: string;
  primaryCtaHref?: string;
}

export default function Footer({ ctaBgClass = "bg-[#050505]", primaryCtaHref = "#choice-section" }: FooterProps) {
  return (
    <footer className="relative w-full" data-testid="site-footer">
      
      {/* Top CTA Area - Floating Premium Card */}
      <div className={`relative w-full ${ctaBgClass} py-16 px-4 sm:px-6 md:px-12 lg:px-20`}>
        <div className="relative mx-auto max-w-[1400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050505] border border-white/10 shadow-[0_20px_80px_-20px_rgba(135,99,229,0.3)] min-h-[420px] md:min-h-[480px] flex items-center justify-center">
          
          {/* Full-Box Silk Background Video */}
          <video
            src="/videos/silk.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-screen pointer-events-none"
          />

          {/* Card Overlay & Gradient Vignette for perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]/80 z-1 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#8763e5] to-transparent opacity-50 z-2" />

          {/* Floating Content hovering over the full video */}
          <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 z-10 w-full">
            <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Automate your entire content pipeline.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300 font-medium mt-2 mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Generate viral video ads and high-ranking SEO blogs from a single prompt. Build the future of content with CubeForgeLabs.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={primaryCtaHref} className="inline-flex min-h-14 items-center gap-2 rounded-full bg-[#8763e5] px-10 text-[17px] font-sans font-bold text-white transition-all hover:bg-[#724cc9] shadow-[0_0_35px_0px_rgba(135,99,229,0.6)] hover:shadow-[0_0_45px_5px_rgba(135,99,229,0.8)] hover:-translate-y-1" data-testid="footer-cta-primary">
                Login for free
                <ArrowRight size={20} />
              </Link>
              <Link href="/pricing" className="inline-flex min-h-14 items-center rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-10 text-[17px] font-sans font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50" data-testid="footer-cta-secondary">
                Explore pricing plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation - Black Background */}
      <div className="relative w-full bg-black border-t border-white/10 overflow-hidden">
        {/* Subtle light background glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(135,99,229,0.04),transparent_34%)]" />
        
        <div className="relative mx-auto max-w-[1550px] px-6 pb-6 pt-16 md:px-12 md:pt-24">
          <div className="grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-8">
          
          {/* Left Column (Brand, Certs, Socials, Address) */}
          <div className="lg:col-span-2 flex flex-col gap-9 pr-8">
            <div className="flex flex-col gap-3">
              <img src="/cubeforgelabs_logo_darkmode.png" alt="CubeForgeLabs Logo" width={180} height={38} loading="lazy" decoding="async" className="h-[38px] w-auto object-contain self-start" />
              <p className="text-[15px] text-neutral-400 mt-2">AI for all from India</p>
            </div>
            


            <div>
              <p className="text-[15px] text-neutral-400 mb-5">Find us at</p>
              <div className="flex items-center gap-5 text-neutral-400">
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="X" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.6 5.9 3.5 5 4.7 4.9C7.1 4.6 12 4.6 12 4.6s4.9 0 7.3.3c1.2.1 2.1 1 2.2 2.2.2 1.6.2 4.9.2 4.9s0 3.3-.2 4.9c-.1 1.2-1 2.1-2.2 2.2-2.4.3-7.3.3-7.3.3s-4.9 0-7.3-.3c-1.2-.1-2.1-1-2.2-2.2C2.3 15.3 2.3 12 2.3 12s0-3.3.2-4.9z"></path><polygon points="9.8,15 15.8,12 9.8,9"></polygon></svg>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" aria-label="Discord" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M7.5 16.5c2.5 1 5.5 1 8 0"></path><path d="M14.5 4a12.5 12.5 0 0 1 4.5 2.5 12.5 12.5 0 0 1 2 4.5c.5 3 .5 6.5 0 9.5a12.5 12.5 0 0 1-2 4.5 12.5 12.5 0 0 1-4.5 2.5 12.5 12.5 0 0 1-4.5-2.5 12.5 12.5 0 0 1-2-4.5c-.5-3-.5-6.5 0-9.5a12.5 12.5 0 0 1 2-4.5 12.5 12.5 0 0 1 4.5-2.5z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            <div className="text-[14px] text-neutral-500 mt-8 space-y-7 leading-relaxed border border-white/10 p-6 w-fit">
              <p>© 2026 CubeForgeLabs Private<br/>Limited. All rights reserved.</p>
              <div className="space-y-1">
                <p>For any queries contact at</p>
                <a href="mailto:info@cubeforgelabs.com" className="text-neutral-300 hover:text-white transition">info@cubeforgelabs.com</a>
              </div>
              <p>
                No 61, 3rd Floor, Estate 3rd Cross Rd,<br/>
                Developed Plots, Industrial Estate,<br/>
                Perungudi, Chennai,<br/>
                Tamil Nadu 600096
              </p>
            </div>
          </div>

          {/* Right Columns (Links) */}
          {columns.map((column) => (
            <div key={column.title} className="col-span-1">
              <div className="mb-6 font-sans font-semibold text-[22px] tracking-tight text-neutral-400 capitalize">{column.title.toLowerCase()}</div>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[15px] font-sans font-normal text-neutral-400 transition hover:text-[#8763e5]">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive Full Width Brand Typography */}
        <div className="w-full text-center pt-10 pb-0 select-none pointer-events-none flex justify-center items-center">
          <img src="/cubeforgelabs_logo_darkmode.png" alt="CubeForgeLabs Logo" width={1200} height={252} loading="lazy" decoding="async" className="w-full max-w-[1200px] mx-auto h-auto object-contain drop-shadow-2xl opacity-90" />
        </div>
      </div>
      </div>
    </footer>
  );
}
