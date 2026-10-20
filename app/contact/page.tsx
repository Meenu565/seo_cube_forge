import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us & Global Enterprise Inquiries | CubeForgeLabs",
  description:
    "Talk with the CubeForgeLabs team about enterprise pilots, partnership opportunities, or optimizing your autonomous content workflows.",
  alternates: {
    canonical: "https://cubeforgelabs.com/contact",
  },
  openGraph: {
    title: "Contact Us & Global Enterprise Inquiries | CubeForgeLabs",
    description:
      "Get in touch with the CubeForgeLabs team. Questions about the platform, enterprise plans, or partnership opportunities.",
    url: "https://cubeforgelabs.com/contact",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "Contact CubeForgeLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Global Enterprise Inquiries | CubeForgeLabs",
    description:
      "Talk with the CubeForgeLabs team about enterprise pilots, partnerships, or support.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const topics = [
  { label: "Product and platform", subject: "Product%20and%20platform", text: "Questions about using CubeForge Labs or finding the right workflow." },
  { label: "Partnerships", subject: "Partnerships", text: "Ideas for working together, integrations, or a community collaboration." },
  { label: "Everything else", subject: "General%20inquiry", text: "Press, feedback, or anything that does not fit the other topics." },
];

export default function ContactPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#contact-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Contact</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}><Link href="/about">About us <ArrowUpRight size={15} aria-hidden="true" /></Link></nav>
          </div>
        </header>

        <main id="contact-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="contact-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span aria-hidden="true" /> Contact CubeForge Labs</p>
              <h1 id="contact-title">A good conversation<br />can <span>start here.</span></h1>
              <p className={styles.intro}>Tell us what you are building, what is slowing your team down, or what you would like to explore. We’ll help you find the right next step.</p>
              <a className={styles.primaryLink} href="mailto:info@cubeforgelabs.com?subject=Hello%20CubeForge%20Labs"><Mail size={17} aria-hidden="true" /> Email our team <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <aside className={styles.contactCard} aria-label="CubeForge Labs contact details">
              <div className={styles.cardTop}><span className={styles.cardMark}><Sparkles size={17} aria-hidden="true" /></span><span>We’re listening</span></div>
              <a className={styles.email} href="mailto:info@cubeforgelabs.com">info@cubeforgelabs.com <ArrowUpRight size={17} aria-hidden="true" /></a>
              <div className={styles.cardRule} />
              <p className={styles.locationLabel}>Based in</p>
              <p className={styles.location}><MapPin size={15} aria-hidden="true" /> Chennai, India</p>
              <p className={styles.cardNote}>Working across time zones. Reach out any time and we’ll take it from there.</p>
              <span className={styles.cardGlyph} aria-hidden="true">C</span>
            </aside>
          </section>

          <section className={styles.topicsSection} aria-labelledby="topics-title">
            <div className={styles.topicsHeading}><p className={styles.eyebrow}><span aria-hidden="true" /> What’s on your mind?</p><h2 id="topics-title">Start with the<br />thing you need.</h2><p className={styles.topicsIntro}>Choose a starting point. Each link opens an email addressed to our team.</p></div>
            <div className={styles.topics}>
              {topics.map((topic) => <a className={styles.topic} key={topic.label} href={`mailto:info@cubeforgelabs.com?subject=${topic.subject}`}><span className={styles.topicIcon}><MessageCircle size={17} aria-hidden="true" /></span><span className={styles.topicCopy}><strong>{topic.label}</strong><span>{topic.text}</span></span><ArrowDownRight className={styles.topicArrow} size={18} aria-hidden="true" /></a>)}
            </div>
          </section>

          <section className={styles.note} aria-labelledby="note-title">
            <p className={styles.noteLabel}>A helpful first note</p>
            <h2 id="note-title">A little context goes a long way.</h2>
            <p>Tell us about your team, the kind of content you make, and what you hope to improve. A few sentences are plenty.</p>
            <a href="https://www.linkedin.com/company/cubeforge-labs" target="_blank" rel="noreferrer">Find CubeForge Labs on LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          </section>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
