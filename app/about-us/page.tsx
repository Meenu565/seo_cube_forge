import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/site/Footer";
import styles from "./about-us.module.css";

export const metadata: Metadata = {
  title: "About CubeForgeLabs — AI For All, From India",
  description:
    "We build thoughtful AI products that help teams move from ideas to meaningful work with people firmly in the picture. Based in Chennai, India.",
  alternates: {
    canonical: "https://cubeforgelabs.com/about",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const products = [
  { name: "Voice Agents", description: "Natural conversations for the moments that matter.", href: "/voice-agents", mark: "01" },
  { name: "Content Agents", description: "A clearer path from idea to publishable content.", href: "/content-agents", mark: "02" },
  { name: "Doc Agents", description: "Research-led writing, ready to refine and share.", href: "/doc-agents", mark: "03" },
  { name: "Work Agents", description: "A more considered way to move complex work forward.", href: "/work-agents", mark: "04" },
  { name: "Coding Agents", description: "Bring context and focus to engineering work.", href: "/coding-agents", mark: "05" },
  { name: "CubeForge Edge", description: "Explore AI closer to your systems and operations.", href: "/cubeforge-edge", mark: "06" },
];

const principles = [
  { title: "Useful by design", copy: "We start with real work and build AI experiences that help people make progress in practical ways." },
  { title: "Human at the center", copy: "Good technology should give people more room for judgment, creativity, and meaningful decisions." },
  { title: "Built with perspective", copy: "From India, we bring a grounded point of view to the way AI can serve teams everywhere." },
];

export default function AboutUsPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}><i /> About CubeForgeLabs</span>
            <h1>AI that makes room<br />for <em>what people do best.</em></h1>
            <p>We build thoughtful AI products that help teams move from ideas to meaningful work—with people firmly in the picture.</p>
            <a className={styles.heroLink} href="#our-approach">Get to know us <span>↓</span></a>
          </div>
          <div className={styles.visual} aria-label="CubeForgeLabs abstract brand sculpture">
            <div className={`${styles.orbit} ${styles.orbitOne}`} /><div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <div className={styles.cube}><i /><i /><i /><i /><i /><i /></div>
            <div className={styles.visualLabel}><span>AI FOR ALL</span><b>From India, for everywhere.</b></div>
            <div className={styles.visualIndex}>CF<span> / </span>LABS</div>
          </div>
        </section>

        <section className={styles.intro} id="our-approach">
          <div className={styles.introLabel}>Our point of view</div>
          <div><h2>Technology should expand human possibility.</h2><p>CubeForgeLabs brings people and AI together through products designed for the work teams do every day. We focus on useful tools, clear experiences, and a future where powerful technology feels within reach.</p><p>We are building from Chennai, India, with a global outlook and a simple belief: AI should help more people do more of what matters to them.</p></div>
        </section>

        <section className={styles.principles}>
          <div className={styles.sectionHeading}><span>What guides us</span><h2>Ambition, with<br />a human point of view.</h2></div>
          <div className={styles.principleGrid}>{principles.map((item, index) => <article key={item.title}><span className={styles.principleMark}>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </section>

        <section className={styles.products}>
          <div className={styles.sectionHeading}><span>What we are building</span><h2>A growing family<br />of AI products.</h2><p>Each product is shaped around a different kind of work. Together, they make advanced AI more approachable across a team.</p></div>
          <div className={styles.productGrid}>{products.map((product) => <Link href={product.href} className={styles.productCard} key={product.name}><span>{product.mark}</span><div><h3>{product.name}</h3><p>{product.description}</p></div><i>↗</i></Link>)}</div>
        </section>

        <section className={styles.origin}>
          <div className={styles.originArt}><div className={styles.originRing} /><span>13° 04′ N<br />80° 16′ E</span><b>CHENNAI<br />INDIA</b></div>
          <div className={styles.originCopy}><span>Rooted in India</span><h2>Local perspective.<br /><em>Open horizons.</em></h2><p>CubeForgeLabs is based in Chennai, Tamil Nadu. We are proud to build here and to create products for people and organizations across the world.</p><a href="mailto:info@cubeforgelabs.com">Say hello <span>↗</span></a></div>
        </section>

        <section className={styles.closing}><span>CubeForgeLabs · Chennai, India</span><h2>Let’s make the future<br />more useful, together.</h2><a href="mailto:info@cubeforgelabs.com">Contact our team <span>↗</span></a></section>
      </main>
      <Footer />
    </>
  );
}
