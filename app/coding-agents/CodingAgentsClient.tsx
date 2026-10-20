"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./coding-agents.module.css";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "workflow", label: "Workflow" },
  { id: "teams", label: "For teams" },
  { id: "questions", label: "Questions" },
];

const capabilities = [
  {
    number: "01",
    title: "Repository & context awareness",
    copy: "Index your repository structure, OpenAPI schemas, and coding conventions so the agent strictly adheres to your formatting, typing, and architectural rules.",
  },
  {
    number: "02",
    title: "Multi-step implementation plans",
    copy: "Transform complex feature specs into structured, step-by-step plans with dependency tracking, automated test harness execution, and edge-case handling.",
  },
  {
    number: "03",
    title: "Production-ready PRs with review gates",
    copy: "Review clean diffs, automated unit test results, and security validations before merging into main. Your team's judgment retains full control.",
  },
];

const faqs = [
  [
    "What can a Coding Agent do in CubeForgeLabs?",
    "Coding Agents help engineers build, extend, and integrate content technology into their tech stacks. They can write programmatic media pipelines using CubeForgeLabs APIs, build webhook handlers, create custom CMS connectors (WordPress, Ghost, Substack, Shopify), and implement full-stack features with complete type safety.",
  ],
  [
    "Does the agent push directly to production or commit without review?",
    "No. Coding Agents operate on isolated branches and generate clean, unified pull requests accompanied by implementation notes, test coverage, and security checks. Your engineering team always retains complete merge approval.",
  ],
  [
    "How does it integrate with existing repositories and tech stacks?",
    "Coding Agents connect seamlessly with GitHub, GitLab, and local workspaces. They scan your project's tsconfig, linters, dependencies, and architectural conventions to write code that looks and functions like it was written by your own senior engineers.",
  ],
  [
    "Which languages, frameworks, and tools are supported?",
    "Coding Agents excel in modern TypeScript, JavaScript (Next.js, Node.js, React), Python (FastAPI, PyTorch, LangChain), Go, and SQL, as well as REST/GraphQL APIs, Docker environments, and serverless workflows.",
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

export default function CodingAgentsClient() {
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
        <nav className={styles.sectionNav} aria-label="Coding Agents sections">
          <div className={styles.navInner}>
            <a
              className={styles.productLabel}
              href="#overview"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("overview");
              }}
            >
              <Code2 size={18} />
              <span>Coding Agents</span>
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
            <i /> Coding Agents
          </div>
          <h1>
            Build, integrate, and ship<br />
            <em>content technology faster.</em>
          </h1>
          <p>
            Accelerate your engineering roadmap. From programmatic video generation pipelines and headless CMS connectors to full-stack feature development and API integrations—guided by your architectural standards.
          </p>
          <div className={styles.actions}>
            <Link href="/login" className={styles.primary}>
              Explore Coding Agents <Arrow />
            </Link>
            <button className={styles.secondary} onClick={() => scrollToSection("workflow")}>
              See the workflow
            </button>
          </div>

          <div className={styles.editor} aria-label="Illustrative coding workspace">
            <header className={styles.editorTop}>
              <div className={styles.windowDots}>
                <i />
                <i />
                <i />
              </div>
              <span>cubeforge-sdk / programmatic-pipeline.ts</span>
              <span className={styles.editorStatus}>
                <i /> Implementation in progress
              </span>
            </header>
            <div className={styles.editorBody}>
              <aside className={styles.files}>
                <small>PROJECT FILES</small>
                <div className={styles.folder}>⌄　src</div>
                <div className={styles.fileActive}>◈　campaign-pipeline.ts</div>
                <div className={styles.file}>◈　brand-iq-vault.ts</div>
                <div className={styles.file}>◈　video-renderer.ts</div>
                <div className={styles.folder}>›　connectors</div>
                <div className={styles.folder}>›　tests</div>
                <div className={styles.context}>
                  <small>AGENT CONTEXT</small>
                  <p>Generate an automated campaign pipeline connecting Cato SEO research, Kade 9:16 video rendering, and Nova social dispatch.</p>
                </div>
              </aside>
              <div className={styles.codeArea}>
                <div className={styles.tabs}>
                  <span>campaign-pipeline.ts</span>
                  <span>brand-iq-vault.ts</span>
                  <span>+ 2 files modified</span>
                </div>
                <div className={styles.code}>
                  <div>
                    <b>01</b>
                    <code><i>export async function</i> buildCampaignPipeline(brief: CampaignBrief) &#123;</code>
                  </div>
                  <div>
                    <b>02</b>
                    <code>　 <i>const</i> research = <i>await</i> cato.analyzeSearchIntent(brief.keyword);</code>
                  </div>
                  <div>
                    <b>03</b>
                    <code>　 <i>const</i> script = <i>await</i> orin.draftVideoScript(research.viralAngle);</code>
                  </div>
                  <div>
                    <b>04</b>
                    <code>　 <i>const</i> videoAd = <i>await</i> kade.renderShortsMaster(&#123; script, ratio: <u>"9:16"</u> &#125;);</code>
                  </div>
                  <div>
                    <b>05</b>
                    <code>　 <i>const</i> validation = <i>await</i> brandIQ.verifyCompliance(videoAd);</code>
                  </div>
                  <div>
                    <b>06</b>
                    <code>　 <i>if</i> (!validation.passed) <i>throw new</i> BrandComplianceError(validation.flags);</code>
                  </div>
                  <div>
                    <b>07</b>
                    <code>　 <i>return await</i> nova.queueSocialRollout(&#123; media: videoAd, networks: brief.targets &#125;);</code>
                  </div>
                  <div className={styles.added}>
                    <b>08</b>
                    <code>&#125;</code>
                  </div>
                </div>
                <div className={styles.diff}>
                  <span>PULL REQUEST SUMMARY</span>
                  <p>
                    <i>+</i> Stitches multi-agent media generation with Brand IQ verification
                  </p>
                  <p>
                    <i>+</i> Connects automated webhook dispatcher for X and LinkedIn delivery
                  </p>
                  <button onClick={() => scrollToSection("workflow")}>
                    Review proposed PR <Arrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.caption}>Illustrative workspace preview</p>
        </section>

        <section className={styles.capabilities} id="capabilities">
          <div className={styles.sectionIntro}>
            <span>Engineering, with a clear path</span>
            <h2>
              Deep codebase understanding.<br />
              Zero boilerplate friction.
            </h2>
            <p>
              Give engineering work a clear trajectory. Coding Agents analyze your repository structure, respect your coding conventions, and implement features with complete precision.
            </p>
          </div>
          <div className={styles.capGrid}>
            {capabilities.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <i>
                  <Arrow />
                </i>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workflow} id="workflow">
          <div className={styles.workflowCopy}>
            <span>A rigorous development loop</span>
            <h2>Code alongside an intelligent partner at every step.</h2>
            <p>
              Start with a GitHub issue, feature spec, or API integration goal. Provide repo context, let the agent formulate the technical architecture, and review the pull request with your team.
            </p>
            <Link href="/login">
              Start with a coding task <Arrow />
            </Link>
          </div>
          <div className={styles.reviewCard}>
            <header>
              <div className={styles.avatar}>CF</div>
              <div>
                <b>Programmatic Content API</b>
                <span>Implementation plan</span>
              </div>
              <em>Ready to review</em>
            </header>
            <div className={styles.reviewSteps}>
              <article>
                <i>✓</i>
                <div>
                  <b>Repo analysis &amp; schema verification</b>
                  <p>Indexed OpenAPI spec and validated TypeScript types.</p>
                </div>
                <span>Done</span>
              </article>
              <article>
                <i>✓</i>
                <div>
                  <b>Implement pipeline &amp; webhook handlers</b>
                  <p>Added async queueing, retry logic, and token metering.</p>
                </div>
                <span>Done</span>
              </article>
              <article className={styles.nextStep}>
                <i>3</i>
                <div>
                  <b>Review pull request &amp; test coverage</b>
                  <p>3 unit tests passing (100% coverage). Ready for human merge.</p>
                </div>
                <span>Next</span>
              </article>
            </div>
            <footer>
              <span>Plan 3 of 3</span>
              <div>
                <i />
              </div>
            </footer>
          </div>
        </section>

        <section className={styles.teams} id="teams">
          <div className={styles.sectionIntro}>
            <span>Made for the people who build</span>
            <h2>
              Accelerate every stage of the<br />
              modern software lifecycle.
            </h2>
          </div>
          <div className={styles.teamGrid}>
            <article>
              <b>01</b>
              <h3>Full-stack product engineers</h3>
              <p>Integrate CubeForgeLabs media APIs, automate custom customer workflows, and eliminate routine boilerplate implementation.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Platform &amp; infrastructure teams</h3>
              <p>Build robust webhook consumers, manage API rate limits and token metering, and maintain private VPC connector layers.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Engineering leads &amp; architects</h3>
              <p>Enforce architectural consistency, review comprehensive PR diffs with automated test evidence, and ship faster with high confidence.</p>
            </article>
          </div>
        </section>

        <section className={styles.faq} id="questions">
          <div>
            <span>Questions, answered</span>
            <h2>Before you start building.</h2>
            <p>Keep your team’s context and judgment at the center of the work.</p>
            <Link href="/login">
              Explore Coding Agents <Arrow />
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
          <span>Build the future of content tech</span>
          <h2>
            Turn technical requirements<br />
            into production-ready code.
          </h2>
          <p>
            Bring your API keys, your repository context, and your highest-impact features. Let autonomous Coding Agents accelerate your engineering velocity.
          </p>
          <Link href="/login">
            Get started <Arrow />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
