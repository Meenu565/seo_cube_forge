"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Aperture, AudioLines,
  Check, ChevronRight, Clapperboard, FileText,
  Globe2, Lightbulb, PenLine, Search, Send, ShieldCheck,
  Sparkles, Target, Users, WandSparkles,
} from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./content-agents.module.css";

const sections = [
  { id: "intro", label: "Overview" },
  { id: "workflow", label: "How it works" },
  { id: "team", label: "Meet the team" },
  { id: "outputs", label: "What you create" },
  { id: "faq", label: "Questions" },
];

const agents = [
  {
    id: "cato",
    name: "Cato",
    role: "Audience & SEO Researcher",
    icon: Search,
    hue: "orchid",
    status: "Analyzing audience painpoints",
    output: "Deep market research & keyword swarms",
    detail: "Cato investigates search intent, customer queries, category trends, and competitive positioning to give each campaign a validated, high-conversion starting angle."
  },
  {
    id: "vela",
    name: "Vela",
    role: "Campaign Strategist",
    icon: Target,
    hue: "blue",
    status: "Building campaign blueprint",
    output: "Omni-channel distribution roadmap",
    detail: "Vela turns research into a high-impact campaign strategy, defining target demographics, compelling narrative angles, and the optimal platform rollout plan."
  },
  {
    id: "orin",
    name: "Orin",
    role: "Scriptwriter & SEO Author",
    icon: PenLine,
    hue: "rose",
    status: "Drafting video scripts & blogs",
    output: "Viral hooks, multi-tone captions & SEO blogs",
    detail: "Orin transforms campaign concepts into platform-ready copy—from high-retention video ad scripts and short-form hooks to 1,500+ word search-ranking blog articles."
  },
  {
    id: "iris",
    name: "Iris",
    role: "Art Director",
    icon: Aperture,
    hue: "violet",
    status: "Synthesizing visual systems",
    output: "Image prompts, carousels & post graphics",
    detail: "Iris establishes visual systems and generates high-fidelity image prompts, multi-slide LinkedIn carousels, and striking brand-consistent post layouts."
  },
  {
    id: "kade",
    name: "Kade",
    role: "AI Video Producer",
    icon: Clapperboard,
    hue: "amber",
    status: "Rendering ad scenes & shorts",
    output: "Mastered video ads, kinetic captions & 9:16 cuts",
    detail: "Kade orchestrates generative video models, stitches multi-clip scenes, overlays kinetic subtitles, and trims long videos into viral TikToks and Reels."
  },
  {
    id: "nova",
    name: "Nova",
    role: "Auto-Publisher & Compliance",
    icon: Send,
    hue: "indigo",
    status: "Preparing channel delivery",
    output: "Automated scheduling & multi-platform rollout",
    detail: "Nova inspects content for platform compliance, formats media for native algorithms, tracks token costs, and schedules 1-click publishing to X and LinkedIn."
  },
];

const outputs = [
  {
    icon: WandSparkles,
    title: "Viral Video Ads & Shorts",
    text: "Fully mastered 9:16 and 16:9 video ads complete with voiceover narration, animated subtitles, and scene transitions ready for TikTok, Reels, and YouTube."
  },
  {
    icon: FileText,
    title: "High-Ranking SEO Blogs",
    text: "Researched, long-form editorial articles optimized for search engines, complete with headers, meta tags, and direct 1-click publishing to Substack."
  },
  {
    icon: Globe2,
    title: "Platform-Native Social Packs",
    text: "Multi-tone captions, hashtag clusters, LinkedIn PDF carousels, and X/Twitter threads specifically tailored to each platform's best practices."
  },
];

const questions = [
  {
    question: "What are Content Agents?",
    answer: "Content Agents are a coordinated team of six specialized AI agents (Cato, Vela, Orin, Iris, Kade, Nova) that automate your entire content pipeline—from audience research and scripting to video ad production and auto-publishing."
  },
  {
    question: "How do I get started with a campaign?",
    answer: "Simply submit a brief, product URL, or raw campaign idea in the Campaign Builder. The agents autonomously handle audience research, script generation, visual creation, and publishing schedules."
  },
  {
    question: "Can I review and edit content before it goes live?",
    answer: "Yes. You have complete human-in-the-loop control. You can review and tweak video scripts, regenerate visuals, adjust captions, and approve scheduling in the Studio Dashboard before anything is published."
  },
  {
    question: "Which platforms can Content Agents publish to?",
    answer: "Content Agents generate platform-native assets for YouTube, TikTok, Instagram Reels, LinkedIn, X (Twitter), and Substack, including automated direct publishing for connected social accounts."
  },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: section.getBoundingClientRect().top + window.scrollY - 145,
    behavior: reducedMotion ? "instant" : "smooth",
  });
}

export default function ContentAgentsClient() {
  const [activeSection, setActiveSection] = useState("intro");
  const [activeAgent, setActiveAgent] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -65% 0px" });
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  function handleAgentKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % agents.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + agents.length - 1) % agents.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = agents.length - 1;
    else return;
    event.preventDefault();
    setActiveAgent(next);
    document.getElementById("content-agent-tab-" + agents[next].id)?.focus();
  }

  const selectedAgent = agents[activeAgent];

  return (
    <>
    <div className={styles.page}>
      <a href="#content-main" className={styles.skipLink}>Skip to content</a>

      <nav className={styles.sectionNav} aria-label="Content Agents sections">
        <div className={styles.navInner}>
          <a className={styles.productLabel} href="#intro" onClick={(event) => { event.preventDefault(); scrollToSection("intro"); }}>
            <WandSparkles size={18} /><span>Content Agents</span>
          </a>
          <div className={styles.sectionLinks}>
            {sections.map((section) => (
              <a key={section.id} href={"#" + section.id} aria-current={activeSection === section.id ? "location" : undefined}
                onClick={(event) => { event.preventDefault(); scrollToSection(section.id); }}>
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="content-main" tabIndex={-1}>
        <section id="intro" className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}><span className={styles.eyebrowMark}><WandSparkles size={12} /></span> SIX SPECIALISTS. ONE CONTENT PIPELINE.</p>
                <h1 id="hero-heading">From a single prompt<br />to <span>multi-platform virality.</span></h1>
                <p className={styles.heroDescription}>Meet the Content Agents: a coordinated swarm of six AI specialists that handle audience research, copywriting, high-ranking SEO blogs, viral video ads, and multi-channel publishing in quiet harmony.</p>
                <div className={styles.heroActions}>
                  <Link href="/campaign-builder" className={styles.primaryButton}>Build a campaign <span><ArrowUpRight size={17} /></span></Link>
                  <button className={styles.textButton} onClick={() => scrollToSection("team")}><Users size={16} /> Meet your specialists</button>
                </div>
                <div className={styles.heroNote}><span /> One prompt connects every specialist from research to publishing.</div>
              </div>

              <div className={styles.heroVisual} aria-label="Preview of the six-agent content workflow">
                <div className={styles.previewTopline}><span>YOUR CONTENT PIPELINE</span><span><span className={styles.liveDot} /> READY WHEN YOU ARE</span></div>
                <div className={styles.pipelineCard}>
                  <div className={styles.pipelineHeader}>
                    <div className={styles.pipelineIcon}><WandSparkles size={17} /></div>
                    <div><strong>Campaign brief · Viral Video Ads & SEO Blogs</strong><span>6 AI agents in sync · Omni-channel output</span></div>
                    <ChevronRight size={16} />
                  </div>
                  <div className={styles.pipelineFlow} aria-label="Content Agents in sequence">
                    {agents.map((agent, index) => (
                      <div className={styles.pipelineStep} key={agent.id}>
                        <span className={styles.pipelineNode} data-hue={agent.hue}><agent.icon size={15} /></span>
                        <span className={styles.pipelineName}>{agent.name}</span>
                        <span className={styles.pipelineRole}>{agent.role.split(" ")[0]}</span>
                        {index < agents.length - 1 && <span className={styles.pipelineConnector} />}
                      </div>
                    ))}
                  </div>
                  <div className={styles.previewDivider}><span>THE WORK, WORKING TOGETHER</span><AudioLines size={14} /></div>
                  <div className={styles.previewProgress}>
                    <span className={styles.progressAvatar} data-hue="orchid">C</span>
                    <div><strong>Cato is analyzing audience pain points</strong><span>Mapping search intent & high-conversion viral hooks across YouTube & X.</span></div>
                    <span className={styles.workingLabel}>IN FLOW</span>
                  </div>
                  <div className={styles.outputPreview}>
                    <span className={styles.outputLabel}>YOUR CAMPAIGN TAKES SHAPE</span>
                    <div className={styles.outputTags}><span>Audience pain points</span><span>Viral video ads</span><span>SEO articles</span><span>Auto-scheduling</span></div>
                    <div className={styles.outputMeter}><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <span className={styles.outputFootnote}><Check size={12} /> One brief. Every specialist in sync.</span>
                  </div>
                </div>
                <div className={styles.visualNote}><span className={styles.visualNoteIcon}><Users size={15} /></span><div><strong>A complete studio in your browser.</strong><span>Research, copywriting, video rendering, and auto-publishing.</span></div><ArrowUpRight size={16} /></div>
              </div>
            </div>

            <div className={styles.heroBottom}>
              <div className={styles.toolIntro}>ONE BRIEF, EVERY PLATFORM</div>
              <div className={styles.channelList} aria-label="Supported content platforms"><span>YouTube</span><span>TikTok</span><span>Instagram</span><span>LinkedIn</span><span>X</span></div>
              <a href="#workflow" onClick={(event) => { event.preventDefault(); scrollToSection("workflow"); }} className={styles.discoverLink}>See how it comes together <ArrowDown size={14} /></a>
            </div>
          </div>
        </section>

        <section id="workflow" className={styles.section} aria-labelledby="workflow-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>THE 3-STEP PIPELINE</p><h2 id="workflow-heading">Input your creative brief.<br /><span>Deploy a full campaign.</span></h2></div>
              <p>Transform a single idea into finished video ads, search-optimized blogs, and social carousels without juggling multiple fragmented tools.</p>
            </div>
            <div className={styles.steps}>
              {[
                { icon: FileText, title: "Define your brief & goals", text: "Provide your product URL, target audience, and key campaign objectives. Add your brand voice guidelines, color palettes, and tone preferences.", detail: "Deep audience & brand alignment" },
                { icon: Users, title: "Autonomous agent collaboration", text: "Cato uncovers high-intent pain points, Vela sets the creative blueprint, Orin scripts multi-tone copy, and Iris generates visual concepts.", detail: "Research, copy & visual direction" },
                { icon: Send, title: "Produce, master & distribute", text: "Kade renders video ads and viral shorts with kinetic subtitles, while Nova schedules and publishes across YouTube, TikTok, LinkedIn, and X.", detail: "Video rendering & 1-click publishing" },
              ].map((step) => (
                <article className={styles.step} key={step.title}>
                  <div className={styles.stepTop}><step.icon size={23} strokeWidth={1.7} /><ArrowUpRight size={15} /></div>
                  <h3>{step.title}</h3><p>{step.text}</p><span className={styles.stepDetail}>{step.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className={styles.teamSection} aria-labelledby="team-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>SIX SPECIALIZED AGENTS</p><h2 id="team-heading">Six specialists.<br /><span>One calm control room.</span></h2></div>
              <p>Each agent is built for a distinct stage of the creative and distribution lifecycle. Together, they eliminate content bottlenecks.</p>
            </div>
            <div className={styles.teamWorkspace}>
              <div className={styles.teamTabs} role="tablist" aria-label="Content Agent roles" aria-orientation="vertical">
                <span className={styles.tabsLabel}>YOUR CREATIVE TEAM</span>
                {agents.map((agent, index) => (
                  <button key={agent.id} id={"content-agent-tab-" + agent.id} role="tab" aria-selected={activeAgent === index}
                    aria-controls="content-agent-panel" tabIndex={activeAgent === index ? 0 : -1}
                    onClick={() => setActiveAgent(index)} onKeyDown={(event) => handleAgentKey(event, index)} className={styles.agentTab}>
                    <span className={styles.agentTabIcon} data-hue={agent.hue}><agent.icon size={16} /></span>
                    <span className={styles.agentTabName}><strong>{agent.name}</strong><span>{agent.role}</span></span>
                    <ChevronRight size={15} />
                  </button>
                ))}
                <div className={styles.teamFooter}><span className={styles.teamFooterMark}><AudioLines size={16} /></span><p>Different capabilities.<br />One unified engine.</p></div>
              </div>

              <div className={styles.agentPanel} id="content-agent-panel" role="tabpanel" aria-labelledby={"content-agent-tab-" + selectedAgent.id} tabIndex={0}>
                <div className={styles.agentPanelContent} key={selectedAgent.id}>
                  <div className={styles.agentPanelTop}>
                    <span className={styles.agentLargeIcon} data-hue={selectedAgent.hue}><selectedAgent.icon size={27} strokeWidth={1.6} /></span>
                    <div><span className={styles.panelLabel}>MEET YOUR SPECIALIST</span><h3>{selectedAgent.name}<span> — {selectedAgent.role}</span></h3></div>
                    <span className={styles.agentReady}><span /> ACTIVE AGENT</span>
                  </div>
                  <p className={styles.agentDescription}>{selectedAgent.detail}</p>
                  <div className={styles.agentAssignment}><span className={styles.assignmentLabel}>WHAT {selectedAgent.name.toUpperCase()} DELIVERS</span><div><span className={styles.assignmentIcon}><Check size={14} /></span><strong>{selectedAgent.output}</strong></div></div>
                  <div className={styles.agentActivity}><span className={styles.activityLine} /><span>PART OF THE AUTONOMOUS PIPELINE</span><span className={styles.agentActivityDot} /></div>
                </div>
                <div className={styles.agentPanelFooter}><span><ShieldCheck size={15} /> Integrated with Campaign Builder & Studio Dashboard.</span><Link href="/campaign-builder">Launch Campaign Builder <ArrowUpRight size={15} /></Link></div>
              </div>
            </div>
          </div>
        </section>

        <section id="outputs" className={styles.section} aria-labelledby="outputs-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>DELIVERABLES FROM ONE BRIEF</p><h2 id="outputs-heading">Everything you need to<br /><span>own your category.</span></h2></div>
              <p>High-volume creative production without sacrificing editorial taste, brand tone, or search performance.</p>
            </div>
            <div className={styles.outputsGrid}>
              {outputs.map((output) => (
                <article className={styles.outputCard} key={output.title}>
                  <div className={styles.outputCardTop}><output.icon size={20} strokeWidth={1.6} /></div>
                  <h3>{output.title}</h3><p>{output.text}</p><span className={styles.outputCardRule} />
                </article>
              ))}
            </div>
            <div className={styles.channelBanner}><div><span className={styles.eyebrow}>OMNI-CHANNEL CONTENT PACKAGING</span><p>Script once. Voice, render, and publish everywhere.</p></div><div className={styles.channelPills}><span>YouTube</span><span>TikTok</span><span>Instagram</span><span>LinkedIn</span><span>X</span></div></div>
          </div>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-heading">
          <div className={[styles.container, styles.faqLayout].join(" ")}>
            <div className={styles.faqIntro}><p className={styles.eyebrow}>A FEW THINGS TO KNOW</p><h2 id="faq-heading">Questions?<br /><span>Good place to start.</span></h2><p>Everything you need to know about scaling your content with Content Agents.</p><Link href="/campaign-builder" className={styles.textButton}>Create your brief <ArrowUpRight size={16} /></Link></div>
            <div className={styles.faqList}>
              {questions.map((item, index) => (
                <div className={styles.faqItem} key={item.question} data-open={openQuestion === index}>
                  <h3><button id={"content-faq-question-" + index} aria-expanded={openQuestion === index} aria-controls={"content-faq-answer-" + index} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{item.question}</span>{openQuestion === index ? <span className={styles.faqMinus}>−</span> : <span className={styles.faqPlus}>+</span>}</button></h3>
                  <div id={"content-faq-answer-" + index} role="region" aria-labelledby={"content-faq-question-" + index} hidden={openQuestion !== index} className={styles.faqAnswer}><p>{item.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-heading">
          <div className={[styles.container, styles.closingInner].join(" ")}>
            <div><p className={styles.eyebrow}>AUTONOMOUS CONTENT CREATION</p><h2 id="closing-heading">Build your entire content pipeline<br /><span>from a single prompt.</span></h2><p>Six AI specialists working together in quiet harmony to research, script, produce, and publish your brand's story.</p></div>
            <div className={styles.closingActions}><Link href="/campaign-builder" className={styles.lightButton}>Open Campaign Builder <ArrowUpRight size={16} /></Link><Link href="/studio-dashboard" className={styles.closingLink}>Explore Studio Dashboard <ArrowRight size={15} /></Link></div>
          </div>
        </section>
      </main>
    </div>
      <Footer />
    </>
  );
}
