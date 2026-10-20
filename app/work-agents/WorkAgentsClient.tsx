"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./work-agents.module.css";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "How it works" },
  { id: "workspace", label: "Workspace" },
  { id: "use-cases", label: "Use cases" },
  { id: "questions", label: "Questions" },
];

const steps = [
  {
    tag: "Brief",
    title: "Input your creative direction",
    copy: "Provide a target topic, product URL, or campaign goal. Define your target audience, brand tone, and desired media deliverables in seconds.",
  },
  {
    tag: "Orchestrate",
    title: "Agents execute in parallel",
    copy: "Cato researches SEO intent, Orin crafts video hooks, Iris generates visual systems, and Kade produces timeline-synced video ads simultaneously.",
  },
  {
    tag: "Approve",
    title: "Review & 1-click publish",
    copy: "Inspect generated media in your workspace, refine any details with full creative control, and approve Nova to schedule directly to X, LinkedIn, and Substack.",
  },
];

const useCases = [
  [
    "Omni-channel product launches",
    "Turn a single campaign brief into synchronized video ads, blog posts, email copy, and social teasers deployed simultaneously.",
  ],
  [
    "Daily short-form video pipelines",
    "Keep YouTube Shorts, TikToks, and Instagram Reels flowing with automated b-roll cutting, dynamic subtitles, and AI voiceovers.",
  ],
  [
    "Multi-brand agency workflows",
    "Manage 50+ client accounts with isolated Brand IQ vaults, customized approval workflows, and automated white-label exports.",
  ],
  [
    "SEO & editorial authority",
    "Coordinate deep keyword research with structured 1,500+ word article generation and 1-click direct publishing to Substack.",
  ],
];

const faqs = [
  [
    "What is a Work Agent in CubeForgeLabs?",
    "A Work Agent serves as the master orchestrator for your content pipelines. Instead of managing disparate AI tools, you give the Work Agent a campaign brief. It coordinates our 6 specialized agents—Cato for research, Vela for strategy, Orin for copywriting, Iris for art direction, Kade for video production, and Nova for distribution—guiding your campaign from concept to published assets.",
  ],
  [
    "How does the review and approval process work?",
    "Every critical milestone has a built-in approval gate. You can review video cuts, tweak script drafts in the document editor, preview LinkedIn carousels, and approve scheduled times before Nova broadcasts anything to your social channels.",
  ],
  [
    "Can Work Agents follow our brand guidelines and tone of voice?",
    "Yes. Work Agents draw directly from your Brand IQ vault, which stores your brand voice guidelines, target audience profiles, preferred design styles, and forbidden keywords to ensure 100% brand consistency across every generated asset.",
  ],
  [
    "Which platforms can Work Agents publish to directly?",
    "Through our Nova distribution agent, Work Agents support direct 1-click publishing and automated scheduling to X (formerly Twitter), LinkedIn, and Substack newsletters, as well as multi-format downloads (MP4 9:16, PDF carousels, DOCX, Markdown, and HTML).",
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

export default function WorkAgentsClient() {
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
        <nav className={styles.sectionNav} aria-label="Work Agents sections">
          <div className={styles.navInner}>
            <a
              className={styles.productLabel}
              href="#overview"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("overview");
              }}
            >
              <Briefcase size={18} />
              <span>Work Agents</span>
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
          <div className={styles.heroGlow} />
          <div className={styles.eyebrow}>
            <span /> Work Agents
          </div>
          <h1>
            Orchestrate entire content pipelines<br />
            <em>from a single creative brief.</em>
          </h1>
          <p className={styles.heroCopy}>
            Coordinate research, video production, copywriting, and distribution in one unified workflow. Direct your AI agent swarm, review creative milestones, and publish with complete brand confidence.
          </p>
          <div className={styles.heroActions}>
            <Link href="/login" className={styles.primary}>
              Build your first campaign <Arrow />
            </Link>
            <button className={styles.secondary} onClick={() => scrollToSection("process")}>
              See how it works
            </button>
          </div>

          <div className={styles.console} aria-label="Example Work Agent workspace">
            <div className={styles.consoleTop}>
              <div className={styles.projectMark}>CF</div>
              <div>
                <b>Q4 Growth Campaign</b>
                <span>Omni-channel content pipeline</span>
              </div>
              <div className={styles.status}>
                <i /> 4 agents active
              </div>
              <button aria-label="More options">•••</button>
            </div>
            <div className={styles.consoleBody}>
              <aside>
                <span>WORKSTREAMS</span>
                <a className={styles.selected}>
                  <i /> Campaign overview <b>6</b>
                </a>
                <a>
                  <i /> Audience research (Cato) <b>3</b>
                </a>
                <a>
                  <i /> Video ads &amp; shorts (Kade) <b>5</b>
                </a>
                <a>
                  <i /> Publishing queue (Nova) <b>8</b>
                </a>
                <div className={styles.agentCard}>
                  <span>WORK AGENT</span>
                  <b>Pipeline Orchestrator</b>
                  <small>Coordinating 6 agent tasks</small>
                </div>
              </aside>
              <div className={styles.board}>
                <div className={styles.boardHead}>
                  <div>
                    <span>CAMPAIGN WORKFLOW</span>
                    <h2>From concept to multi-channel rollout</h2>
                  </div>
                  <button>Export bundle</button>
                </div>
                <div className={styles.progress}>
                  <div>
                    <span>Pipeline completion</span>
                    <b>68%</b>
                  </div>
                  <i>
                    <u />
                  </i>
                </div>
                <div className={styles.columns}>
                  <div>
                    <header>
                      <span>UP NEXT</span>
                      <b>3</b>
                    </header>
                    <article>
                      <small>SEO &amp; RESEARCH</small>
                      <h3>Extract high-intent search queries</h3>
                      <p>Cato analyzing competitor keywords</p>
                      <footer>
                        <i className={styles.avatar}>CA</i>
                        <time>Just now</time>
                      </footer>
                    </article>
                    <article>
                      <small>COPYWRITING</small>
                      <h3>Generate TikTok hooks &amp; captions</h3>
                      <p>Orin drafting 5 viral hook variants</p>
                      <footer>
                        <i className={styles.avatarAlt}>OR</i>
                        <time>10 min ago</time>
                      </footer>
                    </article>
                  </div>
                  <div>
                    <header>
                      <span>IN PROGRESS</span>
                      <b>2</b>
                    </header>
                    <article className={styles.highlight}>
                      <small>VIDEO PRODUCTION</small>
                      <h3>Render 9:16 video ad with voiceover</h3>
                      <p>Kade syncing scene cuts with Aria audio</p>
                      <div className={styles.miniProgress}>
                        <i />
                      </div>
                      <footer>
                        <span className={styles.pulse}>Rendering 4K</span>
                        <time>Scene 3/4</time>
                      </footer>
                    </article>
                  </div>
                  <div>
                    <header>
                      <span>REVIEW</span>
                      <b>1</b>
                    </header>
                    <article>
                      <small>BRAND IQ APPROVAL</small>
                      <h3>Approve LinkedIn carousel &amp; Substack draft</h3>
                      <p>Brand compliance verified (98% match)</p>
                      <button className={styles.review}>
                        Review &amp; approve <Arrow />
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.process} id="process">
          <div className={styles.sectionIntro}>
            <span>From prompt to publication</span>
            <h2>
              Delegate the execution.<br />
              Keep the creative judgment.
            </h2>
            <p>
              Work Agents orchestrate the 6-agent swarm across research, copywriting, video rendering, and scheduled delivery while your team stays in full control of every release.
            </p>
          </div>
          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.tag}>
                <div className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</div>
                <span>{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workspaceSection} id="workspace">
          <div className={styles.workspaceCopy}>
            <span>One calm control room</span>
            <h2>Real-time visibility over every content asset.</h2>
            <p>
              Stop chasing assets across multiple point solutions. Track briefs, video clips, editorial drafts, and publication queues inside one centralized operational hub.
            </p>
            <ul>
              <li>
                <i>✓</i>
                <div>
                  <b>Autonomous orchestration</b>
                  <span>Every brief turns into a sequenced pipeline across research, copy, video, and social.</span>
                </div>
              </li>
              <li>
                <i>✓</i>
                <div>
                  <b>Brand IQ compliance</b>
                  <span>Automated checks verify messaging, typography, and tone against your brand vault.</span>
                </div>
              </li>
              <li>
                <i>✓</i>
                <div>
                  <b>Human-in-the-loop gates</b>
                  <span>High-impact posts and ad creative pause for your approval before going live.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.activityPanel}>
            <header>
              <div>
                <span>Activity</span>
                <b>Content Pipeline</b>
              </div>
              <i>Live</i>
            </header>
            <div className={styles.timeline}>
              <article>
                <i className={styles.done}>✓</i>
                <div>
                  <b>Audience research completed</b>
                  <p>Cato surfaced 12 high-CTR angles and 8 search intent queries.</p>
                  <time>9:42 AM</time>
                </div>
              </article>
              <article>
                <i className={styles.done}>✓</i>
                <div>
                  <b>Video ad master rendered</b>
                  <p>Kade synced Aria voiceover, dynamic captions, and 9:16 cuts.</p>
                  <time>10:15 AM</time>
                </div>
              </article>
              <article className={styles.current}>
                <i>◆</i>
                <div>
                  <b>Publication review requested</b>
                  <p>Nova prepared 3 LinkedIn posts and 1 Substack article for approval.</p>
                  <button>
                    Review &amp; release <Arrow />
                  </button>
                </div>
              </article>
            </div>
            <footer>
              <span>Next: Schedule 1-click rollout to X &amp; LinkedIn</span>
              <b>4 deliverables ready</b>
            </footer>
          </div>
        </section>

        <section className={styles.useCases} id="use-cases">
          <div className={styles.sectionIntro}>
            <span>Engineered for modern growth</span>
            <h2>
              High-velocity content operations<br />
              built for scale.
            </h2>
          </div>
          <div className={styles.useGrid}>
            {useCases.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
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
            <h2>Everything you need to know.</h2>
            <p>Scale your content output without sacrificing creative quality or brand safety.</p>
            <Link href="/login">
              Start with Work Agents <Arrow />
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
          <div className={styles.ctaGlow} />
          <span>Transform your creative velocity</span>
          <h2>
            Your next viral campaign<br />
            starts with a single prompt.
          </h2>
          <p>
            Stop managing fragmented tools and endless status checks. Put autonomous Work Agents to work and scale your content engine effortlessly.
          </p>
          <Link href="/login">
            Build your first campaign <Arrow />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
