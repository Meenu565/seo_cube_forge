import React from "react";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";

export const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const Logo = ({ dark = false }: { dark?: boolean }) => (
  <span className={`flex items-center gap-2 font-semibold tracking-tight ${dark ? "text-black" : "text-black"}`}>
    <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-brand text-[10px] text-white">◆</span>
    ContentForge
  </span>
);

export function Nav({ links }: { links: string[] }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 text-sm">
        <div className="flex items-center gap-8">
          <Link href="/"><Logo /></Link>
          <nav className="hidden gap-6 text-black/70 md:flex">
            {links.map((l) => <a key={l} href="#" className="hover:text-black">{l}</a>)}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-black/70">Log in</a>
          <a href="#" className="rounded-full bg-brand px-4 py-1.5 font-medium text-white">Start free trial</a>
        </div>
      </div>
    </header>
  );
}

export const Btn = ({ children, primary = true }: { children: React.ReactNode; primary?: boolean }) => (
  <a href="#" className={`rounded-full px-5 py-2 text-sm font-medium ${primary ? "bg-brand text-white" : "bg-black/[0.04] text-black hover:bg-black/[0.07]"}`}>{children}</a>
);

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-black/[0.05] px-2.5 py-1 text-xs text-black/70">{children}</span>
);

export const Testimonial = () => (
  <section className="mx-auto grid max-w-6xl items-center gap-10 border-t border-black/5 px-6 py-20 md:grid-cols-[1fr_2fr]">
    <div>
      <div className="text-6xl font-semibold text-brand">4.2x</div>
      <p className="mt-2 text-sm text-black/60">faster campaign turnaround after switching to ContentForge</p>
    </div>
    <div>
      <p className="text-2xl font-medium leading-snug">“We stopped rebriefing five different tools for one campaign. Everything my team needs now lives in a single workspace.”</p>
      <div className="mt-5 flex items-center gap-3 text-sm">
        <span className="h-9 w-9 rounded-full bg-brand/30" />
        <div><div className="font-medium">Dana Whitfield</div><div className="text-black/50">VP Marketing, Northwind Outdoor</div></div>
      </div>
    </div>
  </section>
);

export const CTA = () => (
  <section className="bg-[#0d0a1a] px-6 py-24 text-white">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-10">
      <div className="max-w-md">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight">See the full engine in action.</h2>
        <p className="mt-4 text-white/60">Walk through research, scripting, generation, compliance, and publishing in a single live session with our team.</p>
        <div className="mt-6 flex gap-3">
          <a href="#" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">Get a demo</a>
          <a href="#" className="rounded-full bg-white/10 px-5 py-2 text-sm">Talk to sales</a>
        </div>
      </div>
      <div className="hidden h-40 w-40 rotate-12 rounded-3xl border border-brand/50 md:block" />
    </div>
  </section>
);

const columns = [
  {
    title: "Products",
    links: [
      { label: "Voice Agents", href: "/voice-agents" },
      { label: "Content Agents", href: "#" },
      { label: "Doc Agents", href: "#" },
      { label: "Work Agents", href: "#" },
      { label: "Coding Agents", href: "#" },
      { label: "CubeForge Edge", href: "#" },
      { label: "Model Training", href: "#" }
    ]
  },
  {
    title: "Features",
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
    title: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Marketing Teams", href: "/solutions/marketing" },
      { label: "Media & Entertainment", href: "/solutions/media-entertainment" },
      { label: "Agencies & Consultancies", href: "/solutions/agencies" },
      { label: "Enterprise", href: "/solutions/enterprise" }
    ]
  },
  {
    title: "Resources",
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
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "/contact" },
      { label: "Brand", href: "/brand" },
      { label: "Brand Guidelines", href: "/brand-guidelines" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Trust Center", href: "/trust-center" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "EULA", href: "/eula" }
    ]
  }
];

export const Footer = () => (
  <footer className="relative w-full bg-black overflow-hidden">
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
          <div className="mb-6 font-sans font-semibold text-[15px] tracking-tight text-white capitalize">{column.title}</div>
          <ul className="space-y-4">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[14px] font-sans font-normal text-neutral-400 transition hover:text-white">{link.label}</Link>
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
  </footer>
);

export const PurpleStage = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_30%_20%,#53099d,#1a0638_60%,#0a0316)] ${className}`}>
    <div className="absolute -right-10 top-10 h-60 w-60 rounded-full bg-brand/40 blur-3xl" />
    <div className="relative">{children}</div>
  </div>
);

export const MiniCard = ({ title, children, className = "" }: { title: string; children?: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl bg-white p-3 text-xs text-black shadow-xl ${className}`}>
    <div className="mb-2 font-semibold text-black/50">{title}</div>
    {children}
  </div>
);

export const Pill = ({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "purple" | "amber" }) => (
  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tone === "green" ? "bg-green-100 text-green-700" : tone === "amber" ? "bg-amber-100 text-amber-700" : "bg-brand/15 text-deep"}`}>{children}</span>
);
