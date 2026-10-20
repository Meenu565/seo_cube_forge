import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Download, FileText, Info, Sparkles } from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./integrations.module.css";

export const metadata: Metadata = {
  title: "Social & CMS Platform Integrations | CubeForgeLabs",
  description:
    "Connect LinkedIn and X for direct publishing, generate channel-ready video assets for Instagram and YouTube, and publish finished blogs to Substack.",
  alternates: {
    canonical: "https://cubeforgelabs.com/integrations",
  },
  openGraph: {
    title: "Social & CMS Platform Integrations | CubeForgeLabs",
    description:
      "Connect CubeForgeLabs with your favorite distribution channels: LinkedIn, X, Substack, YouTube, and Instagram.",
    url: "https://cubeforgelabs.com/integrations",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Platform Integrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social & CMS Platform Integrations | CubeForgeLabs",
    description:
      "Connect CubeForgeLabs with your favorite distribution channels: LinkedIn, X, Substack, YouTube, and Instagram.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const platforms = [
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    status: "Direct publishing",
    availability: "Connect your account",
    description: "Connect your LinkedIn profile or organization, then publish supported posts directly from the studio.",
    href: "/generate?tab=linkedin",
    action: "Connect LinkedIn",
    tone: "linkedin",
    direct: true,
  },
  {
    name: "X",
    icon: "/twitter-x.svg",
    status: "Direct publishing",
    availability: "Manage your connection",
    description: "Add and verify your X account in settings to publish posts from your content workspace.",
    href: "/settings/twitter",
    action: "Connect X",
    tone: "x",
    direct: true,
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    status: "Create and export",
    availability: "Publish through Instagram",
    description: "Prepare Instagram-ready visuals, captions, and videos in the studio. Download the finished content to publish on Instagram.",
    href: "/generate?tab=instagram",
    action: "Create Instagram content",
    tone: "instagram",
    direct: false,
  },
  {
    name: "YouTube",
    icon: "/youtube.svg",
    status: "Create and export",
    availability: "Publish through YouTube",
    description: "Create video content for YouTube, then download and upload it through your YouTube account.",
    href: "/generate?tab=youtube",
    action: "Create YouTube content",
    tone: "youtube",
    direct: false,
  },
  {
    name: "Substack",
    icon: "",
    status: "Blog publishing",
    availability: "Sign in when prompted",
    description: "Publish a saved blog from the editor. If you are not signed in to Substack, follow the sign-in step shown during publishing.",
    href: "/blog-generator/generator",
    action: "Write a blog",
    tone: "substack",
    direct: false,
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#integrations-content">Skip to content</a>

        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home"><Logo /></Link>
            <span className={styles.headerLabel}>Integrations</span>
            <nav aria-label="Main navigation" className={styles.headerLinks}>
              <Link href="/documentation">Documentation <ArrowUpRight size={15} aria-hidden="true" /></Link>
              <Link href="/generate">Open studio <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="integrations-content" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="integrations-title">
            <p className={styles.eyebrow}><span aria-hidden="true" /> Your channels, in one workflow</p>
            <h1 id="integrations-title">Create here.<br />Share from anywhere<span>.</span></h1>
            <p className={styles.intro}>Connect LinkedIn or X for direct publishing. Create and download channel-ready content for Instagram and YouTube. Write blogs for Substack from the editor.</p>
            <a href="#channels" className={styles.heroLink}>Explore channel connections <ArrowRight size={15} aria-hidden="true" /></a>
            <div className={styles.heroPlatforms} aria-label="Supported platforms">
              {platforms.map(platform => <a key={platform.name} href={`#${platform.tone}`} className={styles.heroPlatform}>{platform.icon ? <Image src={platform.icon} alt={`${platform.name} icon`} width={20} height={20} /> : <span aria-hidden="true">S</span>}{platform.name}</a>)}
            </div>
          </section>

          <section id="channels" className={styles.channels} aria-labelledby="channels-title">
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}><span aria-hidden="true" /> Where content goes</p><h2 id="channels-title">Your channels, at a glance.</h2></div>
              <p>Publish to connected accounts, make content to download, or send a finished blog to Substack. Each card shows what you can do today.</p>
            </div>

            <div className={styles.channelGroups}>
              <section className={styles.channelGroup} aria-labelledby="direct-title">
                <div className={styles.groupHeading}><span className={styles.groupIcon}><Check size={16} aria-hidden="true" /></span><div><p className={styles.groupLabel}>Publish from the studio</p><h3 id="direct-title">Direct publishing</h3></div></div>
                <p className={styles.groupIntro}>Connect your account to send supported content straight from CubeForge Labs.</p>
                <div className={`${styles.grid} ${styles.directGrid}`}>{platforms.filter(platform => platform.direct).map(platform => <PlatformCard key={platform.name} platform={platform} />)}</div>
              </section>

              <section className={styles.channelGroup} aria-labelledby="create-title">
                <div className={styles.groupHeading}><span className={`${styles.groupIcon} ${styles.createIcon}`}><Download size={16} aria-hidden="true" /></span><div><p className={styles.groupLabel}>Create and share</p><h3 id="create-title">Take it to the platform</h3></div></div>
                <p className={styles.groupIntro}>Prepare your creative in the studio, download the file, and publish from your account.</p>
                <div className={`${styles.grid} ${styles.createGrid}`}>{platforms.filter(platform => !platform.direct && platform.name !== "Substack").map(platform => <PlatformCard key={platform.name} platform={platform} />)}</div>
              </section>
            </div>
          </section>

          <section id="substack" className={styles.blogConnection} aria-labelledby="blog-title">
            <div className={styles.blogIcon}><FileText size={20} aria-hidden="true" /></div>
            <div className={styles.blogText}><p className={styles.eyebrow}><span aria-hidden="true" /> Blog publishing</p><h2 id="blog-title">A finished draft, ready for Substack.</h2><p>Write and edit your post in the blog editor, then choose Substack when you are ready to publish. The editor walks you through signing in if your session needs it.</p><Link className={styles.blogLink} href="/blog-generator/generator">Open blog generator <ArrowRight size={15} aria-hidden="true" /></Link></div>
            <div className={styles.substackBadge} aria-label="Substack integration">S</div>
          </section>

          <section className={styles.workflow} aria-labelledby="workflow-title">
            <div className={styles.workflowIntro}><p className={styles.eyebrow}><span aria-hidden="true" /> A simple path from idea to post</p><h2 id="workflow-title">One brief.<br />Your next move.</h2><p>Shape your content once, then choose how to share it with each audience.</p><Link href="/documentation">Explore the guides <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
            <div className={styles.workflowSteps}>
              <article><span className={styles.stepMark}><Sparkles size={17} aria-hidden="true" /></span><div><h3>Make your brief</h3><p>Add a topic, audience, and creative direction in the studio.</p></div></article>
              <article><span className={styles.stepMark}><FileText size={17} aria-hidden="true" /></span><div><h3>Shape each channel</h3><p>Choose a platform, review its content, and refine the copy.</p></div></article>
              <article><span className={styles.stepMark}><ArrowUpRight size={17} aria-hidden="true" /></span><div><h3>Choose how to share</h3><p>Publish from a connected LinkedIn or X account. For Instagram and YouTube, download and post from the platform.</p></div></article>
            </div>
          </section>
        </main>
      </div>
      <Footer primaryCtaHref="/generate" />
    </>
  );
}

function PlatformCard({ platform }: { platform: (typeof platforms)[number] }) {
  return (
    <article id={platform.tone} className={`${styles.card} ${styles[platform.tone]}`}>
      <div className={styles.cardTop}>
        <span className={styles.iconWrap}>{platform.icon ? <Image src={platform.icon} alt={`${platform.name} icon`} width={25} height={25} /> : <span className={styles.substackLetter} aria-hidden="true">S</span>}</span>
        <span className={styles.status}><span aria-hidden="true" />{platform.status}</span>
      </div>
      <h4>{platform.name}</h4>
      <p className={styles.description}>{platform.description}</p>
      <div className={styles.availability}>{platform.direct ? <Check size={14} aria-hidden="true" /> : <Info size={14} aria-hidden="true" />}{platform.availability}</div>
      <Link className={styles.cardLink} href={platform.href}>{platform.action} <ArrowRight size={15} aria-hidden="true" /></Link>
    </article>
  );
}
