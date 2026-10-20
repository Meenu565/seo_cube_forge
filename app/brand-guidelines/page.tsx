import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Download, X } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./brand-guidelines.module.css";

export const metadata: Metadata = {
  title: "Brand Guidelines & Asset Standards | CubeForgeLabs",
  description:
    "Comprehensive guide to using the CubeForgeLabs logo, color palettes, typography rules, and brand voice across digital and print applications.",
  alternates: {
    canonical: "https://cubeforgelabs.com/brand-guidelines",
  },
  openGraph: {
    title: "Brand Guidelines & Asset Standards | CubeForgeLabs",
    description:
      "A practical guide to using the CubeForgeLabs logo, colors, typography, and voice.",
    url: "https://cubeforgelabs.com/brand-guidelines",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Brand Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Guidelines & Asset Standards | CubeForgeLabs",
    description:
      "A practical guide to using the CubeForgeLabs logo, colors, typography, and voice.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const colors = [
  { name: "Forge violet", hex: "#8657D8", className: "violet", use: "Primary accent for links, highlights, and key actions." },
  { name: "Cube lilac", hex: "#B779E2", className: "lilac", use: "A secondary accent for illustration and supporting emphasis." },
  { name: "Warm paper", hex: "#FAF8FC", className: "paper", use: "A soft background that gives content room to breathe." },
  { name: "Deep ink", hex: "#21192B", className: "ink", use: "Text and contrast on light surfaces." },
];

const assets = [
  { name: "Primary wordmark", detail: "For light backgrounds", file: "/cubeforgelabs_logo_main.png", alt: "CubeForge Labs primary logo", className: "lightLogo" },
  { name: "Reversed wordmark", detail: "For dark backgrounds", file: "/cubeforgelabs_logo_darkmode.png", alt: "CubeForge Labs reversed logo", className: "darkLogo" },
  { name: "Stacked mark", detail: "For compact layouts", file: "/cubeforgelabs_logo_stacked.png", alt: "CubeForge Labs stacked logo", className: "stackedLogo" },
];

export default function BrandGuidelinesPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#guidelines-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Brand guidelines</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}><Link href="/brand">Our brand <ArrowUpRight size={15} aria-hidden="true" /></Link></nav>
          </div>
        </header>

        <main id="guidelines-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="guide-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span aria-hidden="true" /> CubeForge Labs · Brand guide</p>
              <h1 id="guide-title">One identity.<br /><em>Room to create.</em></h1>
              <p>Use this guide to keep CubeForge Labs clear and recognizable across products, presentations, and communications. Start with the supplied logo files, then use the colors and voice below as a practical reference.</p>
              <a className={styles.heroLink} href="#logo">Start with the logo <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <div className={styles.heroLogo}><span>CubeForge Labs</span><Image src="/cubeforgelabs_logo_main.png" alt="CubeForge Labs logo" width={1295} height={272} priority /><small>AI for all, from India</small></div>
          </section>

          <nav className={styles.contents} aria-label="Guideline sections">
            <a href="#logo">Logo</a><a href="#color">Color</a><a href="#type">Typography</a><a href="#voice">Voice</a>
          </nav>

          <section id="logo" className={styles.section} aria-labelledby="logo-title">
            <div className={styles.sectionIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> 01 · Logo</p><h2 id="logo-title">Keep the mark<br />intact.</h2><p>Use the supplied artwork as-is. Choose the version that gives the wordmark clear contrast against its background.</p></div>
            <div className={styles.logoGrid}>
              {assets.map((asset) => <article className={styles.assetCard} key={asset.name}><div className={`${styles.assetPreview} ${styles[asset.className]}`}><Image src={asset.file} alt={asset.alt} width={asset.name === "Stacked mark" ? 1142 : 1295} height={asset.name === "Stacked mark" ? 1142 : 272} /></div><div className={styles.assetCaption}><div><h3>{asset.name}</h3><p>{asset.detail}</p></div><a href={asset.file} download aria-label={`Download ${asset.name}`}><Download size={16} aria-hidden="true" /></a></div></article>)}
            </div>
            <div className={styles.logoRules}>
              <div><h3>Do</h3><p><Check size={15} aria-hidden="true" /> Keep its original proportions and leave open space around it.</p><p><Check size={15} aria-hidden="true" /> Use the light wordmark on light surfaces and reversed artwork on dark surfaces.</p></div>
              <div><h3>Avoid</h3><p><X size={15} aria-hidden="true" /> Don’t stretch, rotate, recolor, outline, or add effects to the logo.</p><p><X size={15} aria-hidden="true" /> Don’t place it over busy photography or low-contrast colors.</p></div>
            </div>
          </section>

          <section id="color" className={`${styles.section} ${styles.colorSection}`} aria-labelledby="color-title">
            <div className={styles.sectionIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> 02 · Color</p><h2 id="color-title">Violet, with<br />space to think.</h2><p>Violet comes from the logo. Pair it with warm paper and deep ink so it stays distinct and readable.</p></div>
            <div className={styles.colorGrid}>{colors.map((color) => <article className={styles.colorCard} key={color.name}><span className={`${styles.swatch} ${styles[color.className]}`} /><div><h3>{color.name}</h3><code>{color.hex}</code><p>{color.use}</p></div></article>)}</div>
          </section>

          <section id="type" className={`${styles.section} ${styles.typeSection}`} aria-labelledby="type-title">
            <div className={styles.sectionIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> 03 · Typography</p><h2 id="type-title">Expressive, then<br />easy to read.</h2><p>Use the display serif for character and the sans serif for clarity. Keep hierarchy simple and body copy comfortable to scan.</p></div>
            <div className={styles.typeSamples}>
              <article><span>Display · Instrument Serif</span><p className={styles.serifSample}>Ideas take shape.</p><small>Headlines, short statements, and editorial emphasis</small></article>
              <article><span>Text · Manrope</span><p className={styles.sansSample}>Make useful work feel possible.</p><small>Product interfaces, captions, labels, and longer copy</small></article>
            </div>
          </section>

          <section id="voice" className={`${styles.section} ${styles.voiceSection}`} aria-labelledby="voice-title">
            <div className={styles.sectionIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> 04 · Voice</p><h2 id="voice-title">Clear, curious,<br />human.</h2><p>Write like a thoughtful person explaining useful technology to another person. Be specific about what the product does and what someone can do next.</p></div>
            <div className={styles.voiceGrid}><article><b>Say</b><p>“Turn a topic into a draft your team can review.”</p></article><article><b>Keep it</b><p>Plain, direct, and grounded in real work.</p></article><article><b>Skip</b><p>Grand promises, jargon, and claims without proof.</p></article></div>
          </section>

          <section className={styles.endNote}><div><p className={styles.eyebrow}><span aria-hidden="true" /> Need a specific asset?</p><h2>We can help you use the brand well.</h2></div><Link href="/contact">Contact CubeForge Labs <ArrowUpRight size={15} aria-hidden="true" /></Link></section>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
