import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Image as ImageIcon, Clapperboard } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./api-pricing.module.css";

export const metadata: Metadata = {
  title: "API Pricing & Developer Token Economics | CubeForgeLabs",
  description:
    "See CubeForgeLabs developer API plans, token economics, and unit generation costs for programmatic content pipelines.",
  alternates: {
    canonical: "https://cubeforgelabs.com/api-pricing",
  },
  openGraph: {
    title: "API Pricing & Developer Token Economics | CubeForgeLabs",
    description:
      "Simple, transparent pricing for CubeForgeLabs APIs. Pay only for what you generate with volume discounts.",
    url: "https://cubeforgelabs.com/api-pricing",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs API Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Pricing & Developer Token Economics | CubeForgeLabs",
    description:
      "Simple, transparent pricing for CubeForgeLabs APIs with predictable unit costs.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const plans = [
  {
    name: "Solo", price: "$29", description: "For founders and creators building a steady content practice.",
    features: ["20 campaigns per month", "Copy and image agents", "3 connected channels", "Brand voice memory"],
  },
  {
    name: "Studio", price: "$129", description: "For teams shipping campaigns, launches, and social content.",
    features: ["Unlimited campaigns", "Full 6-agent swarm", "Video scripts and reel packs", "9 channels and scheduling", "Approval board"],
    featured: true,
  },
  {
    name: "Enterprise", price: "Custom", description: "For brands that need a more tailored content setup.",
    features: ["Dedicated agent setup", "Custom publishing integrations", "SSO and advanced roles", "Onboarding and governance"],
  },
];

export default function ApiPricingPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#api-pricing-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>API pricing</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}>
              <Link href="/pricing">Platform plans <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="api-pricing-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="api-pricing-title">
            <p className={styles.eyebrow}><span /> CubeForge Labs · API pricing</p>
            <h1 id="api-pricing-title">Clear plans.<br />Clearer numbers<span>.</span></h1>
            <p className={styles.intro}>Choose the CubeForge Labs plan that fits your team. See how the platform estimates generation spend, and where to find your complete plan details.</p>
            <a className={styles.textLink} href="#plans">Explore plans <ArrowDown size={15} aria-hidden="true" /></a>
          </section>

          <section id="plans" className={styles.section} aria-labelledby="plans-title">
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}><span /> Platform subscriptions</p><h2 id="plans-title">Plans at a glance.</h2></div>
              <p className={styles.sectionIntro}>These are the platform plans published on the <Link href="/pricing">main pricing page <ArrowUpRight size={14} aria-hidden="true" /></Link>. See that page for full details.</p>
            </div>

            <div className={styles.plans}>
              {plans.map(plan => (
                <article key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}>
                  <p className={`${styles.planLabel} ${plan.name === "Solo" ? styles.soloLabel : ""} ${plan.name === "Enterprise" ? styles.enterpriseLabel : ""}`}>{plan.featured ? "For growing teams" : plan.name === "Enterprise" ? "Tailored setup" : "For individuals"}</p>
                  <h3>{plan.name}</h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                  <p className={styles.price}>{plan.price}{plan.price !== "Custom" && <span> / month</span>}</p>
                  <ul>{plan.features.map(feature => <li key={feature}><Check size={15} aria-hidden="true" /> {feature}</li>)}</ul>
                  <Link className={styles.planLink} href={plan.name === "Enterprise" ? "mailto:info@cubeforgelabs.com?subject=CubeForge%20Labs%20Enterprise%20plan" : "/login"}>{plan.name === "Enterprise" ? "Talk with our team" : `Get ${plan.name}`} <ArrowRight size={15} aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
            <p className={styles.planFootnote}>Monthly plan prices are shown in USD. The complete plan comparison is on the <Link href="/pricing">CubeForge Labs pricing page <ArrowUpRight size={14} aria-hidden="true" /></Link>.</p>
          </section>

          <section className={`${styles.section} ${styles.estimates}`} aria-labelledby="estimates-title">
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}><span /> Generation spend</p><h2 id="estimates-title">A useful estimate.<br />Clearly labeled.</h2></div>
              <p className={styles.sectionIntro}>Spend Analytics uses these fixed estimates when it totals the generated assets in your dashboard.</p>
            </div>

            <div className={styles.rates}>
              <div className={styles.rateHeader}><span>Generated asset</span><span>Analytics estimate</span></div>
              <div className={`${styles.rate} ${styles.imageRate}`}><div><span className={styles.rateIcon}><ImageIcon size={19} aria-hidden="true" /></span><span>Image</span></div><strong>$0.25 <span>per image</span></strong></div>
              <div className={`${styles.rate} ${styles.videoRate}`}><div><span className={styles.rateIcon}><Clapperboard size={19} aria-hidden="true" /></span><span>Video</span></div><strong>$2.00 <span>per video</span></strong></div>
            </div>
            <p className={styles.disclosure}>These are Spend Analytics estimates used to track generated assets. They are not additional subscription fees, a public API rate card, or a quote for third-party provider charges.</p>
            <Link className={styles.analyticsLink} href="/price-breakdown">Explore Spend Analytics <ArrowRight size={15} aria-hidden="true" /></Link>
          </section>

          <section className={styles.contact} aria-labelledby="contact-title">
            <div><p className={styles.eyebrow}>Have a different setup in mind?</p><h2 id="contact-title">Let’s talk through what you need.</h2></div>
            <a href="mailto:info@cubeforgelabs.com?subject=CubeForge%20Labs%20API%20pricing">Ask about API and integration pricing <ArrowUpRight size={16} aria-hidden="true" /></a>
          </section>
        </main>
      </div>
      <Footer primaryCtaHref="/pricing" />
    </>
  );
}
