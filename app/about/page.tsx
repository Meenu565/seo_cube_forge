import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us — Our Team, Principles & Mission | CubeForgeLabs",
  description:
    "Meet CubeForgeLabs: the autonomous AI content platform for marketing teams, agencies, and creators. Built in-house in Chennai, India since June 2026.",
  alternates: {
    canonical: "https://cubeforgelabs.com/about",
  },
  openGraph: {
    title: "About Us — Our Team, Principles & Mission | CubeForgeLabs",
    description:
      "Meet CubeForgeLabs: the unified AI content platform for marketing teams, agencies, and creators.",
    url: "https://cubeforgelabs.com/about",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "About CubeForgeLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Our Team, Principles & Mission | CubeForgeLabs",
    description:
      "Meet CubeForgeLabs: the unified AI content platform for marketing teams, agencies, and creators.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const principles = [
  { title: "Craft", copy: "Make every output worth publishing." },
  { title: "Clarity", copy: "Keep the work easy to understand." },
  { title: "Built to last", copy: "Build systems we can maintain." },
];

export default function AboutPage() {
  return (
    <>
    <div className={styles.page}>
      <a className={styles.skipLink} href="#about-content">Skip to content</a>

      <header className={`${styles.container} ${styles.header}`}>
        <Link href="/" className={styles.logo} aria-label="CubeForge Labs home">
          <Logo />
        </Link>
        <nav aria-label="Main navigation" className={styles.navigation}>
          <Link href="/features">Product</Link>
          <Link href="/about" aria-current="page">About us</Link>
        </nav>
      </header>

      <main id="about-content" tabIndex={-1} className={styles.container}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.heroMeta}>
            <p className={styles.eyebrow}><span className={styles.dot} /> About CubeForge Labs</p>
            <p className={styles.eyebrow}>Est. June 2026</p>
          </div>
          <h1 id="about-title">From one idea to<br className={styles.desktopBreak} /> content ready<br className={styles.desktopBreak} /> to publish<span className={styles.period}>.</span></h1>
          <div className={styles.heroBottom}>
            <p className={styles.intro}>An AI content platform for marketing teams, agencies, founders, and creators.</p>
            <a href="#our-story" className={styles.storyLink}>Our story <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <figure className={styles.photograph}>
          {/* Real editorial photography; source and license are recorded in /CREDITS.md. */}
          <Image
            src="/images/about/workspace.webp"
            alt="A desk with a laptop, books, and headphones in soft natural light."
            width={1600}
            height={900}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 96px), 1184px"
            loading="lazy"
            className={styles.photo}
          />
          <figcaption>
            <span>A little space to think.</span>
            <a href="https://unsplash.com/photos/a-modern-desk-setup-with-laptop-and-books-xjyHDnA93Pk/">Photography by Logan Weaver / Unsplash</a>
          </figcaption>
        </figure>

        <section id="our-story" className={`${styles.section} ${styles.story}`} aria-labelledby="story-title">
          <p className={styles.eyebrow}><span className={styles.sectionNumber}>01</span> Our story</p>
          <div>
            <h2 id="story-title">Less manual work.<br />More room to create.</h2>
            <div className={styles.storyCopy}>
              <p>Started in June 2026, CubeForge Labs helps people create content and reach qualified leads with less manual work.</p>
              <p>We design the architecture and build the platform’s AI bots in-house.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="values-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}><span className={styles.sectionNumber}>02</span> Our principles</p>
            <h2 id="values-title">How we build.</h2>
          </div>
          <div className={styles.values}>
            {principles.map((principle, index) => (
              <article className={styles.value} key={principle.title}>
                <span className={styles.valueNumber} aria-hidden="true">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.team}`} aria-labelledby="team-title">
          <div>
            <p className={styles.eyebrow}><span className={styles.sectionNumber}>03</span> The person behind it</p>
            <h2 id="team-title">Built with care.</h2>
          </div>
          <div className={styles.person}>
            {/* Intentional initials placeholder; replace only with Janarthvasan's real portrait. */}
            <div className={styles.portrait} aria-hidden="true">J<span>.</span></div>
            <div className={styles.personDetails}>
              <h3>Janarthvasan</h3>
              <p>AI Architect &amp; Lead Developer</p>
              <a className={styles.textLink} href="https://www.linkedin.com/in/janarth-vasan-591511285/" aria-label="Janarthvasan on LinkedIn">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Let’s talk</p>
          <h2 id="contact-title">
            <a href="https://www.linkedin.com/company/cubeforge-labs" className={styles.contactLink}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </h2>
        </section>
      </main>

    </div>
    <Footer primaryCtaHref="/#choice-section" />
    </>
  );
}
