import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, FlaskConical, Hammer, Sparkles } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./brand.module.css";

export const metadata: Metadata = {
  title: "Brand Identity, Mission & Design System | CubeForgeLabs",
  description:
    "Discover the idea, visual identity, and point of view behind CubeForgeLabs. Official brand assets, wordmarks, and product philosophy.",
  alternates: {
    canonical: "https://cubeforgelabs.com/brand",
  },
  openGraph: {
    title: "Brand Identity, Mission & Design System | CubeForgeLabs",
    description:
      "Discover the idea, visual identity, and point of view behind CubeForgeLabs.",
    url: "https://cubeforgelabs.com/brand",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Brand Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity, Mission & Design System | CubeForgeLabs",
    description:
      "Discover the idea, visual identity, and point of view behind CubeForgeLabs.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const nameParts = [
  { name: "Cube", icon: Boxes, copy: "A structure made of parts that fit together. It reflects our belief that ambitious work needs a strong foundation." },
  { name: "Forge", icon: Hammer, copy: "A place where ideas are shaped through care and effort. We build tools for work that has a real purpose." },
  { name: "Labs", icon: FlaskConical, copy: "A signal of curiosity. We keep exploring how AI can make creative and everyday work more useful." },
];

const values = [
  { word: "Useful", copy: "Start with the work people need to get done." },
  { word: "Clear", copy: "Make powerful technology easier to understand and use." },
  { word: "Curious", copy: "Keep testing, learning, and improving what we make." },
];

export default function BrandPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#brand-content">Skip to content</a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Our brand</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}><Link href="/brand-guidelines">Brand guidelines <ArrowUpRight size={15} aria-hidden="true" /></Link></nav>
          </div>
        </header>

        <main id="brand-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="brand-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span aria-hidden="true" /> The idea behind the identity</p>
              <h1 id="brand-title">Ideas, shaped<br />into <em>something useful.</em></h1>
              <p>CubeForge Labs is built around a simple belief: technology should help people turn good ideas into meaningful work. Our name, mark, and voice all come back to that purpose.</p>
              <a className={styles.heroLink} href="#brand-idea">Explore the brand <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <div className={styles.logoStage} aria-label="CubeForge Labs logo">
              <span className={styles.stageLabel}>Our name, made visible</span>
              <div className={styles.logoCard}><Image src="/cubeforgelabs_logo_main.png" alt="CubeForge Labs logo: a violet geometric cube symbol followed by the Forge Labs wordmark" width={1295} height={272} priority /></div>
              <div className={styles.stageCaption}><span>CubeForge Labs</span><span>AI for all, from India</span></div>
            </div>
          </section>

          <section className={styles.brandIdea} id="brand-idea" aria-labelledby="idea-title">
            <p className={styles.sectionLabel}>Our point of view</p>
            <div><h2 id="idea-title">AI should make more room for people.</h2><p>We build AI products for the work people do every day: creating, communicating, and solving problems. The technology matters. So does making it clear, useful, and open to more people.</p><p>That balance is the core of CubeForge Labs: practical tools, thoughtful design, and a belief in what people can do with the right support.</p></div>
          </section>

          <section className={styles.nameSection} aria-labelledby="name-title">
            <div className={styles.sectionHeading}><p className={styles.eyebrow}><span aria-hidden="true" /> What the name means</p><h2 id="name-title">Three ideas.<br />One direction.</h2><p>CubeForge Labs brings structure, making, and discovery together in one name.</p></div>
            <div className={styles.nameGrid}>{nameParts.map(({ name, icon: Icon, copy }) => <article className={styles.nameCard} key={name}><span className={styles.nameIcon}><Icon size={19} aria-hidden="true" /></span><h3>{name}</h3><p>{copy}</p></article>)}</div>
          </section>

          <section className={styles.identity} aria-labelledby="identity-title">
            <div className={styles.identityHead}><p className={styles.eyebrow}><span aria-hidden="true" /> The visual language</p><h2 id="identity-title">Built to feel<br />clear and capable.</h2><p>The cube mark gives the identity its structure. Violet brings the sense of possibility; warm white space keeps the work grounded and easy to read.</p></div>
            <div className={styles.identityVisual}>
              <div className={styles.logoOnLight}><span>Primary logo</span><Image src="/cubeforgelabs_logo_main.png" alt="CubeForge Labs primary logo for light backgrounds" width={1295} height={272} /></div>
              <div className={styles.logoOnDark}><span>Reversed logo</span><Image src="/cubeforgelabs_logo_darkmode.png" alt="CubeForge Labs white and violet logo for dark backgrounds" width={1295} height={272} /></div>
              <div className={styles.palette} aria-label="CubeForge Labs brand colors">
                <div><span className={styles.swatchViolet} /><b>Forge violet</b><code>#8657D8</code></div>
                <div><span className={styles.swatchLilac} /><b>Cube lilac</b><code>#B779E2</code></div>
                <div><span className={styles.swatchPaper} /><b>Open paper</b><code>#FAF8FC</code></div>
              </div>
            </div>
          </section>

          <section className={styles.valuesSection} aria-labelledby="values-title">
            <div><p className={styles.eyebrow}><span aria-hidden="true" /> How we want to show up</p><h2 id="values-title">A clear point<br />of view.</h2></div>
            <div className={styles.values}>{values.map((value) => <article key={value.word}><Sparkles size={16} aria-hidden="true" /><h3>{value.word}</h3><p>{value.copy}</p></article>)}</div>
          </section>

          <section className={styles.closing} aria-labelledby="closing-title">
            <p className={styles.closingLabel}>CubeForge Labs · Chennai, India</p>
            <h2 id="closing-title">Technology with<br /><em>people in the picture.</em></h2>
            <Link href="/about">Meet the team and our story <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </section>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
