import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./trust-center.module.css";
import TrustTopicsSection from "./TrustTopicsSection";

export const metadata: Metadata = {
  title: "Trust Center — Security, Privacy & Compliance | CubeForgeLabs",
  description:
    "Find information about privacy protection, account access, SOC2 compliance, AI-generated content rights, and enterprise security at CubeForgeLabs.",
  alternates: {
    canonical: "https://cubeforgelabs.com/trust-center",
  },
  openGraph: {
    title: "Trust Center — Security, Privacy & Compliance | CubeForgeLabs",
    description:
      "Enterprise security, zero-retention data privacy, and compliance guidelines at CubeForgeLabs.",
    url: "https://cubeforgelabs.com/trust-center",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Trust Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Center — Security, Privacy & Compliance | CubeForgeLabs",
    description:
      "Enterprise security, zero-retention data privacy, and compliance guidelines at CubeForgeLabs.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function TrustCenterPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#trust-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Trust Center</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}><Link href="/contact">Contact <ArrowUpRight size={15} aria-hidden="true" /></Link></nav>
          </div>
        </header>

        <main id="trust-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="trust-title">
            <div className={styles.heroPhoto}><Image src="/images/trust-center-gavel.jpg" alt="A wooden judge’s gavel resting on white marble" fill priority sizes="(max-width: 720px) 100vw, 1184px" /></div>
            <div className={styles.heroShade} aria-hidden="true" />
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span aria-hidden="true" /> Legal · CubeForge Labs</p>
              <h1 id="trust-title">Welcome to<br />our Trust Center</h1>
              <p>Clear information about privacy, product access, and the questions that matter when your team evaluates CubeForge Labs.</p>
              <a href="#trust-topics" className={styles.heroLink}>Explore trust topics <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <a className={styles.photoCredit} href="https://unsplash.com/photos/wooden-gavel-and-block-on-marble-6sl88x150Xs" target="_blank" rel="noreferrer">Photo: Tingey Injury Law Firm / Unsplash</a>
          </section>

          <section className={styles.overview} aria-labelledby="overview-title">
            <div><p className={styles.eyebrow}><span aria-hidden="true" /> Trust & transparency</p><h2 id="overview-title">Practical information<br />for thoughtful teams.</h2></div>
            <p>CubeForge Labs brings AI-assisted research and content creation together with publishing workflows. The information relevant to your team can depend on the features and connections you use, so contact us with the specifics of your setup.</p>
          </section>

          {/* Interactive Pinned Sticky Scroll Section */}
          <TrustTopicsSection />

          <section className={styles.review} aria-labelledby="review-title">
            <div className={styles.reviewMark} aria-hidden="true"><MessageCircle size={21} /></div>
            <div><p className={styles.eyebrow}><span aria-hidden="true" /> For customer and procurement reviews</p><h2 id="review-title">Tell us what your team needs to know.</h2><p>Include your use case, the product areas under review, and any specific privacy or security questions. We’ll route your note to the right person.</p></div>
            <a href="mailto:info@cubeforgelabs.com?subject=CubeForge%20Labs%20trust%20review">Contact the team <ArrowRight size={15} aria-hidden="true" /></a>
          </section>

          <nav className={styles.legalNav} aria-label="Related legal information">
            <span>Questions about legal information?</span><a href="mailto:info@cubeforgelabs.com?subject=Legal%20information%20request">Request the information you need <ArrowUpRight size={13} aria-hidden="true" /></a><Link href="/contact">Contact CubeForge Labs <ArrowUpRight size={13} aria-hidden="true" /></Link>
          </nav>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
