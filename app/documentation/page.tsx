import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FileText, Scissors, Layers } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import DocsSearch from "./DocsSearch";
import { guides } from "./guides";
import styles from "./documentation.module.css";

export const metadata: Metadata = {
  title: "Documentation & Developer Guides | CubeForgeLabs",
  description:
    "Learn how to create content packages, write blogs, make short videos, and publish with CubeForgeLabs. Practical guides from your first brief to your finished content.",
  alternates: {
    canonical: "https://cubeforgelabs.com/documentation",
  },
  openGraph: {
    title: "Documentation & Developer Guides | CubeForgeLabs",
    description:
      "Learn how to build, generate, and publish multi-channel campaigns with CubeForgeLabs step-by-step guides.",
    url: "https://cubeforgelabs.com/documentation",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation & Developer Guides | CubeForgeLabs",
    description:
      "Learn how to build, generate, and publish multi-channel campaigns with CubeForgeLabs step-by-step guides.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

function GuideNavigation() {
  return <nav aria-label="Documentation sections">{["Start here", "Create", "Share", "Support"].map(category => <div className={styles.navGroup} key={category}><p>{category}</p>{guides.filter(guide => guide.category === category).map(guide => <a key={guide.id} href={`#${guide.id}`}>{guide.title === "When something needs a second look" ? "Troubleshooting" : guide.title}</a>)}</div>)}</nav>;
}

export default function DocumentationPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#documentation-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Documentation</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}>
              <Link href="/features" className={styles.productLink}>Product</Link>
              <Link href="/generate">Open studio <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <p className={styles.sidebarTitle}><BookOpen size={17} aria-hidden="true" /> The essentials</p>
              <GuideNavigation />
              <a className={styles.supportLink} href="mailto:info@cubeforgelabs.com">Need a hand? <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </aside>

          <main id="documentation-content" tabIndex={-1} className={styles.main}>
            <div className={styles.breadcrumb}>Resources <span aria-hidden="true">/</span> Documentation</div>
            <section className={styles.hero} aria-labelledby="docs-title">
              <p className={styles.eyebrow}><span /> A guide to your workspace</p>
              <h1 id="docs-title">From your first idea<br />to your next post<span>.</span></h1>
              <p className={styles.intro}>The practical guide to CubeForge Labs. Find your workflow, write a better brief, and get your content ready to share.</p>
              <DocsSearch />
            </section>

            <details className={styles.mobileNav}>
              <summary>Browse documentation</summary>
              <GuideNavigation />
            </details>

            <nav className={styles.cards} aria-label="Popular workflows">
              {[{ id: "content-packages", title: "Create content", text: "Turn a brief into a package.", Icon: Layers }, { id: "blogs", title: "Write a blog", text: "Shape, edit, and export a draft.", Icon: FileText }, { id: "shorts", title: "Make short clips", text: "Find moments in a longer video.", Icon: Scissors }].map(({ id, title, text, Icon }) => <a href={`#${id}`} key={id} className={styles.card}><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><h2>{title}</h2><p>{text}</p><ArrowUpRight size={17} className={styles.cardArrow} aria-hidden="true" /></a>)}
            </nav>

            <div className={styles.guides}>
              {guides.map((guide, index) => (
                <section id={guide.id} key={guide.id} tabIndex={-1} className={styles.guide} aria-labelledby={`${guide.id}-title`}>
                  <p className={styles.eyebrow}>{String(index + 1).padStart(2, "0")} <span aria-hidden="true" /> {guide.category}</p>
                  <h2 id={`${guide.id}-title`}>{guide.title}</h2>
                  <p className={styles.description}>{guide.description}</p>
                  <ol className={styles.steps}>
                    {guide.steps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}
                  </ol>
                  {guide.note && <aside className={styles.note} aria-label={`${guide.title}: note`}><p>{guide.note}</p></aside>}
                  {guide.action && <Link className={styles.action} href={guide.action.href}>{guide.action.label} <ArrowRight size={16} aria-hidden="true" /></Link>}
                </section>
              ))}
            </div>
            <div className={styles.endNote}><p>Make something worth sharing.</p><a href="#docs-title">Back to top ↑</a></div>
          </main>
        </div>
      </div>
      <Footer primaryCtaHref="/#choice-section" />
    </>
  );
}
