import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lightbulb, MessageCircle, Share2, Sparkles } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./champions.module.css";

export const metadata: Metadata = {
  title: "CubeForge Champions Community & Creator Program | CubeForgeLabs",
  description:
    "Join the CubeForge Champions community: creators, marketers, founders, and engineers pushing the boundaries of autonomous AI content.",
  alternates: {
    canonical: "https://cubeforgelabs.com/champions",
  },
  openGraph: {
    title: "CubeForge Champions Community & Creator Program | CubeForgeLabs",
    description:
      "Meet the creators, marketers, and engineers shaping the future of autonomous AI content.",
    url: "https://cubeforgelabs.com/champions",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForge Champions Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CubeForge Champions Community & Creator Program | CubeForgeLabs",
    description:
      "Meet the creators, marketers, and engineers shaping the future of autonomous AI content.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const ways = [
  { icon: Lightbulb, title: "Explore the product", text: "Bring CubeForge Labs into your creative workflow and see where it helps you move from idea to publishable content." },
  { icon: MessageCircle, title: "Share what you learn", text: "Tell us what works, what feels unclear, and what would make the platform more useful." },
  { icon: Share2, title: "Show your approach", text: "Share practical examples of how you plan, shape, and publish content with your audience." },
];

export default function ChampionsPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#champions-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>CubeForge Champions</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}>
              <Link href="/about">About us <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="champions-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="champions-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span aria-hidden="true" /> A community around making</p>
              <h1 id="champions-title">Good work<br />travels <span>further.</span></h1>
              <p className={styles.intro}>CubeForge Champions brings together people who care about thoughtful content and better creative workflows. Learn with us, share what you make, and help shape what comes next.</p>
              <a href="https://www.linkedin.com/company/cubeforge-labs" className={styles.heroLink} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className={styles.heroMark} aria-hidden="true"><span className={styles.markOrbit} /><span className={styles.markCore}><Sparkles size={36} strokeWidth={1.25} /></span><span className={styles.markLabel}>Make · Share · Learn</span></div>
          </section>

          <section className={styles.section} aria-labelledby="community-title">
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}><span aria-hidden="true" /> Who it is for</p><h2 id="community-title">For people who<br />make things move.</h2></div>
              <p>Creators, founders, marketers, and agency teams all bring a different point of view. Champions is a place to compare notes, try new approaches, and make useful work together.</p>
            </div>
            <div className={styles.audience}>
              <span>Creators</span><span>Founders</span><span>Marketing teams</span><span>Agencies</span>
            </div>
          </section>

          <section className={styles.waysSection} aria-labelledby="ways-title">
            <div className={styles.waysIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> The spirit of Champions</p><h2 id="ways-title">Make it useful.<br />Make it yours.</h2><p>There is no single way to create well. Champions bring their own experience and help make the tools and ideas around them better.</p></div>
            <div className={styles.ways}>
              {ways.map(({ icon: Icon, title, text }) => <article className={styles.way} key={title}><span className={styles.wayIcon}><Icon size={19} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </section>

          <section className={styles.closing} aria-labelledby="closing-title">
            <div><p className={styles.eyebrow}><span aria-hidden="true" /> Have a point of view?</p><h2 id="closing-title">Let’s make better<br />content together.</h2><p>Tell us what you do and what you would like to explore with CubeForge Labs.</p></div>
            <a href="https://www.linkedin.com/company/cubeforge-labs" target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={16} aria-hidden="true" /></a>
          </section>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
