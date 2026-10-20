import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Lock, Shield, Sparkles } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./privacy.module.css";
import PrivacyHubClient from "./PrivacyHubClient";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Governance Standards | CubeForgeLabs",
  description:
    "Learn how CubeForgeLabs protects your data, isolates Brand IQ vector memory, and enforces a strict zero-retention foundation model training policy.",
  alternates: {
    canonical: "https://cubeforgelabs.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy & Data Governance Standards | CubeForgeLabs",
    description:
      "Learn how CubeForgeLabs protects your data, isolates Brand IQ vector memory, and enforces zero public foundation model training.",
    url: "https://cubeforgelabs.com/privacy-policy",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Governance Standards | CubeForgeLabs",
    description:
      "Learn how CubeForgeLabs protects your data and enforces zero public foundation model training.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className={styles.page}>
        
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home">
              <Logo />
            </Link>
            <span className={styles.headerLabel}>
              <Lock size={13} className="text-[#a881fc]" aria-hidden="true" />
              Privacy &amp; Data Governance Hub
            </span>
            <nav aria-label="Privacy navigation" className={styles.headerLinks}>
              <Link href="/trust-center">Trust Center <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/terms-of-service">Terms <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/contact">Support <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="privacy-content" tabIndex={-1} className={styles.layout}>
          
          {/* Hero Section */}
          <section className={styles.hero} aria-labelledby="privacy-title">
            <div className={styles.ambientGlow} aria-hidden="true" />
            
            <div className={styles.eyebrow}>
              <span className={styles.liveDot} aria-hidden="true" />
              Zero-Egress Data Architecture · CubeForge Labs
            </div>

            <h1 id="privacy-title">
              Your brand is proprietary.<br /><em>Your privacy is absolute.</em>
            </h1>

            <p className={styles.heroIntro}>
              At CubeForge Labs, privacy is an engineering primitive, not an afterthought. We build autonomous content agents and edge clusters that keep your proprietary brand intelligence isolated, private, and strictly under your control.
            </p>

            {/* Quick Compliance Badges Strip */}
            <div className={styles.trustPills}>
              <div className={styles.trustPill}>
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>DPDP Act 2023 Compliant</span>
              </div>
              <div className={styles.trustPill}>
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>GDPR &amp; UK-GDPR Ready</span>
              </div>
              <div className={styles.trustPill}>
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>Zero Public Model Training</span>
              </div>
              <div className={styles.trustPill}>
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>AES-256 &amp; TLS 1.3 Encryption</span>
              </div>
              <div className={styles.trustPill}>
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>SOC2 Type II Aligned</span>
              </div>
            </div>
          </section>

          {/* Interactive Privacy Explorer (Tabs, Pipeline, Search, Rights Matrix) */}
          <PrivacyHubClient />

        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}

