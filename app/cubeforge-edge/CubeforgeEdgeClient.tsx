"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./cubeforge-edge.module.css";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "benefits", label: "Benefits" },
  { id: "use-cases", label: "Use cases" },
  { id: "questions", label: "Questions" },
];

const benefits = [
  {
    title: "Zero Data Leakage & Total IP Sovereignty",
    copy: "Unreleased product designs, internal messaging, and raw video footage stay strictly inside your firewall, never training shared foundation models.",
  },
  {
    title: "Sub-Second Generation & Real-Time Synthesis",
    copy: "Colocated edge nodes deliver lightning-fast audio generation and high-speed video rendering directly to your creative and marketing teams.",
  },
  {
    title: "Predictable Fixed-Cost Economics",
    copy: "Replace volatile per-token cloud API bills with predictable enterprise cluster licensing optimized for high-volume content operations.",
  },
];

const useCases = [
  [
    "Regulated Enterprise Marketing",
    "Financial institutions and healthcare networks generate compliant video ads, social posts, and educational blogs without external data transfer.",
  ],
  [
    "High-Volume Media Studios",
    "Broadcasters and digital entertainment studios render hundreds of daily video shorts and localized multi-language voice tracks with dedicated GPU power.",
  ],
  [
    "Confidential Brand & Product Launches",
    "Stealth startups and top-tier consumer brands develop global launch campaigns while keeping embargoed assets encrypted in isolated Brand IQ vaults.",
  ],
];

const faqs = [
  [
    "What is CubeForge Edge?",
    "CubeForge Edge is the enterprise deployment edition of CubeForgeLabs. It allows organizations to deploy our full content generation suite—including Kade video rendering, studio voice synthesis, Cato research swarms, and Brand IQ vaults—inside their own private VPC, on-premises data centers, or dedicated cloud accounts.",
  ],
  [
    "Where can CubeForge Edge run?",
    "CubeForge Edge runs on any modern Kubernetes-compatible infrastructure with NVIDIA GPU acceleration (A10G, A100, H100, L40S). We support automated Helm chart deployments across AWS (EKS), Google Cloud (GKE), Microsoft Azure (AKS), and on-premises bare metal.",
  ],
  [
    "How does Edge protect our brand assets and proprietary data?",
    "Unlike public SaaS tools where data passes through third-party multi-tenant APIs, CubeForge Edge processes all inputs, video renders, and brand guidelines locally within your network. Your confidential assets never leave your perimeter, and no customer data is ever used to train public models.",
  ],
  [
    "How do updates, model fine-tuning, and support work with Edge?",
    "CubeForgeLabs provides an encrypted update channel for new model checkpoints, platform features, and security patches. We also offer dedicated enterprise SLAs, 24/7 engineering support, and automated installation assistance from our solutions architecture team.",
  ],
];

function Arrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3.5 9h10M9.5 5l4 4-4 4" />
    </svg>
  );
}

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: section.getBoundingClientRect().top + window.scrollY - 145,
    behavior: reducedMotion ? "instant" : "smooth",
  });
}

export default function CubeForgeEdgePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className={styles.page}>
        <nav className={styles.sectionNav} aria-label="CubeForge Edge sections">
          <div className={styles.navInner}>
            <a
              className={styles.productLabel}
              href="#overview"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("overview");
              }}
            >
              <Cpu size={18} />
              <span>CubeForge Edge</span>
            </a>
            <div className={styles.sectionLinks}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={"#" + section.id}
                  aria-current={activeSection === section.id ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className={styles.hero} id="overview">
          <div className={styles.eyebrow}>
            <i /> CubeForge Edge
          </div>
          <h1>
            Private AI media generation,<br />
            <em>deployed on your infrastructure.</em>
          </h1>
          <p>
            Run generative video rendering, studio voice synthesis, and proprietary Brand IQ intelligence inside your own private VPC or on-prem GPU cluster. Zero data leakage, dedicated throughput, and ultra-low latency.
          </p>
          <div className={styles.actions}>
            <Link href="/login" className={styles.primary}>
              Deploy CubeForge Edge <Arrow />
            </Link>
            <button className={styles.secondary} onClick={() => scrollToSection("architecture")}>
              Explore architecture
            </button>
          </div>

          <div className={styles.architectureCard} aria-label="Illustration of an AI edge deployment architecture">
            <div className={styles.archHeader}>
              <span>ENTERPRISE DEPLOYMENT ARCHITECTURE</span>
              <b>
                <i /> Private VPC &amp; On-Premises Isolated
              </b>
            </div>
            <div className={styles.archCanvas}>
              <div className={styles.nodeGroup}>
                <small>ENTERPRISE ENVIRONMENT</small>
                <div className={styles.node}>
                  <i className={styles.deviceIcon}>▦</i>
                  <div>
                    <b>Brand IQ Vault</b>
                    <span>Private assets &amp; guidelines</span>
                  </div>
                </div>
                <div className={styles.node}>
                  <i className={styles.siteIcon}>⌂</i>
                  <div>
                    <b>Creative Workstations</b>
                    <span>Video editors &amp; marketing teams</span>
                  </div>
                </div>
              </div>
              <div className={styles.connection}>
                <span />
                <span />
                <span />
                <b>Zero data egress</b>
              </div>
              <div className={styles.edgeNode}>
                <div className={styles.edgeOrb}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span>CUBEPACK EDGE RUNTIME</span>
                <b>Dedicated Media Cluster</b>
                <small>Kade Video GPU · Voice Engine · LLM Swarms</small>
              </div>
              <div className={styles.connection}>
                <span />
                <span />
                <span />
                <b>Encrypted sync</b>
              </div>
              <div className={styles.cloudNode}>
                <i>⌘</i>
                <span>OPTIONAL</span>
                <b>Managed Cloud Hub</b>
                <small>Model updates &amp; audit logs</small>
              </div>
            </div>
            <div className={styles.archFooter}>
              <span>
                <i /> All creative IP &amp; source footage remains in your security perimeter
              </span>
              <span>SOC2 Type II &amp; HIPAA compliant</span>
            </div>
          </div>
          <p className={styles.caption}>
            Dedicated private cluster deployment. Scales across AWS EKS, Google Cloud GKE, Azure AKS, and on-premises NVIDIA GPUs.
          </p>
        </section>

        <section className={styles.architecture} id="architecture">
          <div className={styles.sectionIntro}>
            <span>Enterprise-grade infrastructure</span>
            <h2>
              High-throughput generative AI<br />
              built for your security perimeter.
            </h2>
            <p>
              Deploy CubeForgeLabs' video, voice, and text generation engines as self-contained containers inside AWS, Google Cloud, Azure, or bare-metal GPU clusters.
            </p>
          </div>
          <div className={styles.archGrid}>
            <article>
              <span>Environment</span>
              <h3>Private VPC &amp; On-Premises Hosting</h3>
              <p>Deploy isolated Docker and Kubernetes clusters within your existing cloud infrastructure with no external data sharing.</p>
            </article>
            <article>
              <span>Throughput</span>
              <h3>Dedicated GPU Acceleration</h3>
              <p>Eliminate rate limits and noisy-neighbor latency. Render dozens of 9:16 viral video ads and long-form voiceovers concurrently.</p>
            </article>
            <article>
              <span>Governance</span>
              <h3>Air-Gapped &amp; SOC2 Type II Compliance</h3>
              <p>Enforce granular RBAC permissions, immutable audit logging, and local Brand IQ encryption for regulated enterprise environments.</p>
            </article>
          </div>
        </section>

        <section className={styles.benefitSection} id="benefits">
          <div className={styles.benefitCopy}>
            <span>Why CubeForge Edge</span>
            <h2>The security of on-prem with the power of autonomous AI.</h2>
            <p>
              For media enterprises, healthcare brands, and financial institutions, where content models run is as critical as what they produce. CubeForge Edge delivers complete computational sovereignty.
            </p>
          </div>
          <div className={styles.benefitList}>
            {benefits.map((item, index) => (
              <article key={item.title}>
                <b>0{index + 1}</b>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.useCases} id="use-cases">
          <div className={styles.sectionIntro}>
            <span>Built for enterprise scale</span>
            <h2>
              Mission-critical content tech<br />
              where security comes first.
            </h2>
          </div>
          <div className={styles.useGrid}>
            {useCases.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i>
                  <Arrow />
                </i>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faq} id="questions">
          <div>
            <span>Questions, answered</span>
            <h2>Enterprise deployment FAQs.</h2>
            <p>Learn how CubeForge Edge delivers private AI content infrastructure for enterprise teams.</p>
            <Link href="/login">
              Talk to our team <Arrow />
            </Link>
          </div>
          <div className={styles.accordion}>
            {faqs.map(([question, answer], index) => (
              <article key={question} className={openFaq === index ? styles.faqOpen : ""}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span>
                  <i>+</i>
                </button>
                <div>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <span>Take control of your AI infrastructure</span>
          <h2>
            Deploy autonomous content AI<br />
            inside your private cloud.
          </h2>
          <p>
            Talk with our enterprise solutions team to evaluate your throughput requirements, security policies, and edge deployment architecture.
          </p>
          <Link href="/login">
            Talk to CubeForge Labs <Arrow />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
