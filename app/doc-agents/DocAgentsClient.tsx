"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check,
  ChevronRight, CircleHelp, Download, FileText, FileType2,
  Lightbulb, PenLine, Search, Send, Sparkles,
} from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./doc-agents.module.css";

const sections = [
  { id: "intro", label: "Overview" },
  { id: "workflow", label: "How it works" },
  { id: "workspace", label: "Writing workspace" },
  { id: "formats", label: "Share your work" },
  { id: "faq", label: "Questions" },
];

const workflow = [
  {
    icon: Search,
    title: "Target keyword & audience research",
    text: "Cato scans search intent, category queries, and audience pain points to surface the highest-impact angle for your article.",
    note: "Audience research & SEO intent"
  },
  {
    icon: PenLine,
    title: "Generate structured long-form drafts",
    text: "Orin writes comprehensive 1,500+ word articles with H2/H3 hierarchies, actionable takeaways, and natural keyword density.",
    note: "Orin SEO writer & outlining"
  },
  {
    icon: Send,
    title: "Refine, publish to Substack & export",
    text: "Fine-tune your draft in the document editor, publish directly to your Substack newsletter, or export clean PDF, DOCX, and HTML copies.",
    note: "Substack publishing & downloads"
  },
];

const documentFormats = [
  {
    icon: FileType2,
    name: "PDF",
    description: "Polished, beautifully formatted documents ready for client presentation and print-ready sharing."
  },
  {
    icon: FileText,
    name: "DOCX",
    description: "Fully editable Word documents formatted with heading hierarchies for Google Docs and Microsoft Word."
  },
  {
    icon: BookOpen,
    name: "Markdown & HTML",
    description: "Clean, semantic markup ready for headless CMS platforms, WordPress, Ghost, and static site generators."
  },
];

const questions = [
  {
    question: "What makes Doc Agents different from generic AI writing tools?",
    answer: "Doc Agents don't just output generic text. They start with real search intent and audience research (via Cato), generate structured 1,500+ word articles with proper SEO hierarchy (via Orin), and provide an interactive editor with direct Substack publishing and multi-format exports."
  },
  {
    question: "Can I customize the article length, tone, and keywords?",
    answer: "Yes. You can specify primary and secondary keywords, choose your target audience, set your brand tone (authoritative, conversational, tactical), and define article sections before generating the draft."
  },
  {
    question: "How does Substack publishing work?",
    answer: "Once your article is finalized in the document editor, our direct publishing integration sends your formatted post, headings, and images straight to your Substack drafts or live publication."
  },
  {
    question: "Which document formats can I export?",
    answer: "You can export standalone PDF documents, editable DOCX files for Google Docs/Word, raw Markdown for developer blogs, and semantic HTML for web CMS platforms."
  },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 145, behavior: reducedMotion ? "instant" : "smooth" });
}

export default function DocAgentsClient() {
  const [activeSection, setActiveSection] = useState("intro");
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

  function handleQuestionKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % questions.length;
    else if (event.key === "ArrowUp") next = (index + questions.length - 1) % questions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = questions.length - 1;
    else return;
    event.preventDefault();
    document.getElementById("doc-faq-question-" + next)?.focus();
  }

  return (
    <>
      <div className={styles.page}>
        <a href="#doc-main" className={styles.skipLink}>Skip to content</a>

        <nav className={styles.sectionNav} aria-label="Doc Agents sections">
          <div className={styles.navInner}>
            <a className={styles.productLabel} href="#intro" onClick={(event) => { event.preventDefault(); scrollToSection("intro"); }}>
              <FileText size={18} /><span>Doc Agents</span>
            </a>
            <div className={styles.sectionLinks}>
              {sections.map((section) => (
                <a key={section.id} href={"#" + section.id} aria-current={activeSection === section.id ? "location" : undefined}
                  onClick={(event) => { event.preventDefault(); scrollToSection(section.id); }}>{section.label}</a>
              ))}
            </div>
          </div>
        </nav>

        <main id="doc-main" tabIndex={-1}>
          <section id="intro" className={styles.hero} aria-labelledby="doc-heading">
            <div className={styles.container}>
              <div className={styles.heroGrid}>
                <div className={styles.heroCopy}>
                  <p className={styles.eyebrow}><span className={styles.eyebrowIcon}><Sparkles size={12} /></span> AI RESEARCH, SEO ARTICLES & PUBLISHING</p>
                  <h1 id="doc-heading">High-ranking SEO blogs<br /><span>from a single prompt.</span></h1>
                  <p className={styles.heroDescription}>Turn any keyword or topic into an in-depth, search-optimized editorial article. Built on deep audience research, refined in an interactive document workspace, and ready for 1-click Substack publishing or PDF/DOCX export.</p>
                  <div className={styles.heroActions}>
                    <Link href="/blog-generator" className={styles.primaryButton}>Generate SEO article <span><ArrowUpRight size={17} /></span></Link>
                    <Link href="/research-insights" className={styles.textButton}><Search size={16} /> Explore Research Insights</Link>
                  </div>
                  <div className={styles.heroNote}><Check size={14} /><span>Deep research swarms, automated SEO structure & 1-click Substack publishing.</span></div>
                </div>

                <div className={styles.heroVisual} aria-label="Preview of the Doc Agents writing workspace">
                  <div className={styles.previewTopline}><span>YOUR WRITING WORKSPACE</span><span><span className={styles.statusDot} /> READY TO DRAFT</span></div>
                  <div className={styles.editorCard}>
                    <div className={styles.editorToolbar}><span className={styles.editorBrand}><span><Sparkles size={13} /></span> doc studio</span><span className={styles.savedStatus}><Check size={12} /> Autosaved</span></div>
                    <div className={styles.documentPage}>
                      <div className={styles.documentCategory}><span>SEO ARTICLE DRAFT</span><span>·</span><span>KEYWORD TARGETED</span></div>
                      <p className={styles.documentKicker}>SEARCH OPTIMIZED · 1,850 WORDS</p>
                      <h2>The Future of Autonomous<br /><span>Content Engines in 2026.</span></h2>
                      <p className={styles.documentLead}>How modern growth teams are using multi-agent AI to scale editorial output 10x without sacrificing depth, voice, or search rankings.</p>
                      <div className={styles.documentRule} />
                      <div className={styles.documentSection}><span>TABLE OF CONTENTS</span><div><i /><i /><i /></div></div>
                      <div className={styles.documentLine} /><div className={styles.documentLine} /><div className={[styles.documentLine, styles.documentLineShort].join(" ")} />
                      <div className={styles.documentFooter}><span>SEO SCORE: 96/100 · 6 MIN READ</span><span>1 / 4</span></div>
                    </div>
                    <div className={styles.exportBar}><span><Download size={13} /> EXPORT & PUBLISH</span><div><i>PDF</i><i>DOCX</i><i>Markdown</i><i>Substack</i></div></div>
                  </div>
                  <div className={styles.visualNote}><span className={styles.visualNoteIcon}><PenLine size={14} /></span><div><strong>Orchestrated by Cato & Orin.</strong><span>Audience research, outline generation, and direct publishing.</span></div><ChevronRight size={16} /></div>
                </div>
              </div>

              <div className={styles.heroBottom}><span className={styles.heroBottomLabel}>SEARCH-READY FORMATS FOR YOUR ENTIRE STACK</span><div className={styles.formatList}><span>Substack</span><span>PDF</span><span>DOCX</span><span>Markdown</span><span>HTML</span></div><a className={styles.discoverLink} href="#workflow" onClick={(event) => { event.preventDefault(); scrollToSection("workflow"); }}>See how it works <ArrowDown size={14} /></a></div>
            </div>
          </section>

          <section id="workflow" className={styles.section} aria-labelledby="workflow-heading">
            <div className={styles.container}>
              <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>THE RESEARCH-TO-ARTICLE PIPELINE</p><h2 id="workflow-heading">From search intent<br /><span>to ranked editorial.</span></h2></div><p>A structured workflow that unites search intelligence, comprehensive outlining, and authoritative writing.</p></div>
              <div className={styles.steps}>
                {workflow.map((step) => (
                  <article key={step.title} className={styles.step}>
                    <div className={styles.stepIcon}><step.icon size={21} strokeWidth={1.7} /><ArrowUpRight size={14} /></div>
                    <h3>{step.title}</h3><p>{step.text}</p><span className={styles.stepNote}>{step.note}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="workspace" className={styles.workspaceSection} aria-labelledby="workspace-heading">
            <div className={styles.container}>
              <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>INTERACTIVE DOCUMENT WORKSPACE</p><h2 id="workspace-heading">A focused studio for<br /><span>editorial perfection.</span></h2></div><p>Review section outlines, regenerate paragraphs, fine-tune headlines, and watch your SEO readiness score update in real time.</p></div>
              <div className={styles.workspaceCard}>
                <div className={styles.workspaceSide}>
                  <div className={styles.workspaceMark}><FileText size={16} /><span>ARTICLE WORKSPACE</span></div>
                  <div className={styles.workspaceProject}><span>YOUR DRAFT</span><strong>Autonomous Content Engines...</strong><small><span /> All changes saved</small></div>
                  <div className={styles.workspaceDivider} />
                  <div className={styles.workspaceMenu}><span className={styles.menuIcon}><PenLine size={14} /></span><span><b>Live Editor</b><small>Real-time formatting</small></span><ChevronRight size={14} /></div>
                  <div className={styles.workspaceMenu}><span className={styles.menuIcon}><Send size={14} /></span><span><b>Substack Connect</b><small>1-click publish</small></span><ChevronRight size={14} /></div>
                  <div className={styles.workspaceMenu}><span className={styles.menuIcon}><Download size={14} /></span><span><b>Downloads</b><small>PDF, DOCX & more</small></span><ChevronRight size={14} /></div>
                </div>
                <div className={styles.workspacePreview}>
                  <div className={styles.previewToolbar}><span><i /> <i /> <i /></span><span>ARTICLE PREVIEW</span><span><Check size={13} /> AUTOSAVED</span></div>
                  <div className={styles.articleMock}><p className={styles.articleEyebrow}>SEO ARTICLE · 1,850 WORDS</p><h3>Scaling Brand Authority with<br /><span>Multi-Agent AI Workflows.</span></h3><p className={styles.articleSubhead}>A tactical breakdown of automated research, creative drafting, and multi-channel publishing for modern marketing teams.</p><div className={styles.articleBody}><div /><div /><div /><div className={styles.articleBodyShort} /></div><div className={styles.articleAction}><span><PenLine size={13} /> Continue editing</span><span><Download size={13} /> Publish & Export</span></div></div>
                </div>
              </div>
              <div className={styles.workspaceFootnote}><span><Lightbulb size={15} /></span><p>Turn raw topic ideas into finished editorial assets that drive organic traffic and newsletter subscribers.</p><Link href="/blog-generator">Launch Blog Generator <ArrowRight size={14} /></Link></div>
            </div>
          </section>

          <section id="formats" className={styles.section} aria-labelledby="formats-heading">
            <div className={styles.container}>
              <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>UNIVERSAL EXPORT & PUBLISHING</p><h2 id="formats-heading">Ready for every channel<br /><span>in your publishing stack.</span></h2></div><p>Export clean files for client delivery, internal documentation, or direct publication to web and newsletter readers.</p></div>
              <div className={styles.formatCards}>
                {documentFormats.map((format) => (
                  <article className={styles.formatCard} key={format.name}><div className={styles.formatIcon}><format.icon size={20} strokeWidth={1.7} /></div><h3>{format.name}</h3><p>{format.description}</p><span className={styles.formatAvailable}><Check size={13} /> Available in the editor</span></article>
                ))}
              </div>
              <div className={styles.publishBanner}><span className={styles.publishIcon}><Send size={16} /></span><div><strong>Direct Substack Publishing</strong><span>Publish your search-optimized article directly to Substack with a single click.</span></div><Link href="/blog-generator">Open Blog Generator <ArrowUpRight size={15} /></Link></div>
            </div>
          </section>

          <section id="faq" className={styles.section} aria-labelledby="faq-heading">
            <div className={[styles.container, styles.faqLayout].join(" ")}>
              <div className={styles.faqIntro}><p className={styles.eyebrow}><CircleHelp size={14} /> A FEW USEFUL ANSWERS</p><h2 id="faq-heading">Before you<br /><span>generate your draft.</span></h2><p>Everything you need to know about the research-backed writing workflow and publishing integrations.</p><Link href="/blog-generator" className={styles.textButton}>Start with a draft <ArrowUpRight size={15} /></Link></div>
              <div className={styles.faqList}>
                {questions.map((item, index) => (
                  <div className={styles.faqItem} key={item.question} data-open={openQuestion === index}>
                    <h3><button id={"doc-faq-question-" + index} aria-expanded={openQuestion === index} aria-controls={"doc-faq-answer-" + index} onKeyDown={(event) => handleQuestionKey(event, index)} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{item.question}</span><span className={styles.faqToggle}>{openQuestion === index ? "−" : "+"}</span></button></h3>
                    <div id={"doc-faq-answer-" + index} role="region" aria-labelledby={"doc-faq-question-" + index} hidden={openQuestion !== index} className={styles.faqAnswer}><p>{item.answer}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.closing} aria-labelledby="closing-heading">
            <div className={[styles.container, styles.closingInner].join(" ")}><div><p className={styles.eyebrow}>SEARCH-READY EDITORIALS</p><h2 id="closing-heading">Write articles that rank.<br /><span>Publish in minutes.</span></h2><p>Turn any keyword or topic into an authoritative, search-optimized article that grows your audience.</p></div><div className={styles.closingActions}><Link href="/blog-generator" className={styles.lightButton}>Launch Blog Generator <ArrowUpRight size={16} /></Link><Link href="/research-insights" className={styles.closingLink}>Explore Research Insights <ArrowRight size={15} /></Link></div></div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
