import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  FileKey, 
  Lock, 
  Scale, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Zap 
} from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./eula.module.css";
import EulaClient from "./EulaClient";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA) | CubeForgeLabs",
  description:
    "Read the End User License Agreement (EULA) governing installation, access, private Edge cluster deployment, and use of CubeForgeLabs software and agent runtimes.",
  alternates: {
    canonical: "https://cubeforgelabs.com/eula",
  },
  openGraph: {
    title: "End User License Agreement (EULA) | CubeForgeLabs",
    description:
      "Read the End User License Agreement (EULA) governing software licensing and private Edge deployment.",
    url: "https://cubeforgelabs.com/eula",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs EULA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End User License Agreement (EULA) | CubeForgeLabs",
    description:
      "Read the End User License Agreement (EULA) governing software licensing and private Edge deployment.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Non-Exclusive Commercial Grant",
    desc: "Worldwide license to execute CubeForge Agent Studio, developer SDKs, and CLI tools for commercial content marketing and creation."
  },
  {
    icon: FileKey,
    title: "100% Output Ownership",
    desc: "You retain all intellectual property, copyright, and commercial exploitation rights to all synthesized copy, video ads, imagery, and code."
  },
  {
    icon: Lock,
    title: "Zero Reverse Engineering",
    desc: "Strict prohibition against decompiling, model distillation, extracting model weights, or scraping outputs for foundation model pre-training."
  },
  {
    icon: Server,
    title: "Private Edge VPC Sovereignty",
    desc: "Deploy sovereign CubeForge Edge containers in customer-administered cloud VPCs or on-prem hardware with guaranteed zero data egress."
  }
];

export default function EulaPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#eula-content">Skip to content</a>

        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home">
              <Logo />
            </Link>
            <span className={styles.headerLabel}>
              <Scale size={13} className="text-[#8657d8]" aria-hidden="true" />
              End User License Agreement (EULA)
            </span>
            <nav aria-label="Legal navigation" className={styles.headerLinks}>
              <Link href="/terms-of-service">Terms <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/privacy-policy">Privacy <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/trust-center">Trust Center <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/contact">Support <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="eula-content" tabIndex={-1} className={styles.layout}>
          
          {/* Hero Section */}
          <section className={styles.hero} aria-labelledby="eula-title">
            <div className={styles.ambientGlow} aria-hidden="true" />
            
            <div className={styles.eyebrow}>
              <span className={styles.liveDot} aria-hidden="true" />
              Software Licensing &amp; Runtime Terms · CubeForge Labs
            </div>

            <h1 id="eula-title">
              End User License Agreement<br /><em>Software, Edge Clusters &amp; Agent Engines.</em>
            </h1>

            <p className={styles.heroIntro}>
              This End User License Agreement (&ldquo;Agreement&rdquo;) is a binding legal contract between you (or your organization, &ldquo;Licensee&rdquo;) and CubeForgeLabs Private Limited (&ldquo;Licensor&rdquo;). It governs your download, installation, programmatic integration, and operational execution of CubeForge Labs software, autonomous multi-agent engines, developer CLI tools, and private Edge deployment containers.
            </p>

            {/* Quick Metadata Bar */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span>Effective Date</span>
                <span>October 9, 2026</span>
              </div>
              <div className={styles.metaItem}>
                <span>Version</span>
                <span>3.2 (Enterprise &amp; Studio)</span>
              </div>
              <div className={styles.metaItem}>
                <span>License Category</span>
                <span>Proprietary Commercial Software</span>
              </div>
              <div className={styles.metaItem}>
                <span>Governing Entity</span>
                <span>CubeForgeLabs Private Limited</span>
              </div>
              <div className={styles.metaItem}>
                <span>Primary Jurisdiction</span>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Plain English Principles Box */}
            <div className={styles.summaryBox}>
              <div className={styles.summaryHeader}>
                <Sparkles size={16} className="text-[#8657d8]" aria-hidden="true" />
                <span>Executive Summary · Core Licensing Entitlements</span>
              </div>
              <div className={styles.principlesGrid}>
                {principles.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className={styles.principle}>
                    <h3>
                      <Icon size={18} className="text-[#8657d8] shrink-0" aria-hidden="true" />
                      {title}
                    </h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive EULA Client (Search, Table of Contents, Clauses, Actions) */}
          <EulaClient />

        </main>
      </div>

      <Footer />
    </>
  );
}

