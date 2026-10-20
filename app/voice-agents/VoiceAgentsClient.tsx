"use client";

import { useEffect, useState, type CSSProperties, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, AudioLines, BarChart3,
  BookOpen, Check, ChevronRight, Clapperboard, Globe2, Headphones, Mic,
  Minus, Pause, Play, Plus, Sparkles, Zap,
} from "lucide-react";
import Footer from "@/components/site/Footer";
import styles from "./voice-agents.module.css";

const sections = [
  { id: "intro", label: "Overview" },
  { id: "how-to", label: "How it works" },
  { id: "sandbox", label: "Voice sandbox" },
  { id: "features", label: "Capabilities" },
  { id: "archetypes", label: "Voice library" },
  { id: "faq", label: "FAQ" },
];

const voicePresets = [
  {
    id: "support",
    category: "Video Ads & UGC",
    name: "Aria (Dynamic Storyteller)",
    latency: "Studio 48kHz",
    tone: "Engaging, Warm & Persuasive",
    transcript: [
      { speaker: "Creative Lead", text: "We need a high-retention video ad hook for our Q4 product campaign." },
      { speaker: "Aria (Voice Agent)", text: "“Stop losing leads to boring content. CubeForgeLabs automates your video ads, voiceovers, and SEO blogs from one creative prompt.”" },
      { speaker: "Creative Lead", text: "Love the pacing. Can you punch the call to action for Instagram Reels?" },
      { speaker: "Aria (Voice Agent)", text: "“Try it free today at CubeForgeLabs.com—build smarter, ship faster.” Synced with your timeline in 4K." }
    ],
    badge: "High CTR",
    color: "#8763e5"
  },
  {
    id: "sdr",
    category: "Short-form & Reels",
    name: "Leo (Viral Creator)",
    latency: "Paced for TikTok",
    tone: "Punchy, Upbeat & Relatable",
    transcript: [
      { speaker: "Creator", text: "Leo, give me a quick TikTok hook that stops the scroll immediately." },
      { speaker: "Leo (Voice Agent)", text: "“Here’s the secret top creators don’t tell you: you don’t need a 5-person video crew anymore.”" },
      { speaker: "Creator", text: "Drop the transition cue right before the screen reveal." },
      { speaker: "Leo (Voice Agent)", text: "“Our AI agent cuts your footage, adds animated captions, and matches my voice to every beat. Link in bio!”" }
    ],
    badge: "Viral Reels",
    color: "#3b82f6"
  },
  {
    id: "scheduler",
    category: "Product Walkthrough",
    name: "Elena (Clear Educator)",
    latency: "Neutral & Articulate",
    tone: "Insightful, Composed & Structured",
    transcript: [
      { speaker: "Product Lead", text: "We’re publishing a walkthrough of the new Campaign Builder for our onboarding flow." },
      { speaker: "Elena (Voice Agent)", text: "“In this guide, we’ll see how Cato researches your niche while Orin crafts high-performing hooks for X and LinkedIn.”" },
      { speaker: "Product Lead", text: "Keep the explanation crisp as the interface pans over to the scheduler." },
      { speaker: "Elena (Voice Agent)", text: "“Notice how every script seamlessly translates into video overlays and auto-scheduled posts with a single click.”" }
    ],
    badge: "High Retention",
    color: "#10b981"
  },
  {
    id: "tech",
    category: "Thought Leadership",
    name: "Marcus (Authoritative Host)",
    latency: "Broadcast Caliber",
    tone: "Deep, Resonant & Credible",
    transcript: [
      { speaker: "Podcast Host", text: "Marcus, introduce our latest episode on autonomous multi-agent content pipelines." },
      { speaker: "Marcus (Voice Agent)", text: "“Welcome back. Today we explore how modern creative teams are 10x-ing their content volume without sacrificing editorial taste.”" },
      { speaker: "Podcast Host", text: "Tease the benchmark comparisons between manual agencies and agentic workflows." },
      { speaker: "Marcus (Voice Agent)", text: "“We’ll break down real metrics from top marketing teams scaling omni-channel campaigns with CubeForgeLabs.”" }
    ],
    badge: "Thought Leader",
    color: "#f59e0b"
  }
];

const faqs = [
  {
    q: "How do Voice Agents fit into the CubeForgeLabs content pipeline?",
    a: "Voice Agents bridge the gap between scriptwriting and video production. When Orin writes an ad script, blog summary, or video hook, Voice Agents synthesize realistic narration that Kade (the video producer) immediately synchronizes with generated video scenes and kinetic captions."
  },
  {
    q: "Can we clone our founder's or brand ambassador's voice?",
    a: "Yes. With 60 seconds of clean reference audio, our zero-shot voice cloning engine reproduces vocal timbre, cadence, and prosody with 99.4% acoustic fidelity, ensuring consistent brand identity across all media."
  },
  {
    q: "How does timeline synchronization with video ads work?",
    a: "Our multi-agent system aligns voiceover timestamps with scene transitions, visual motion cues, and animated subtitles. When your script changes, the audio and corresponding video timing re-render automatically."
  },
  {
    q: "Which social platforms and video aspect ratios are supported?",
    a: "Voiceover assets integrate seamlessly into vertical 9:16 reels (TikTok, Instagram Reels, YouTube Shorts), square 1:1 feeds, and landscape 16:9 formats (YouTube, LinkedIn video ads), complete with auto-generated SRT captions."
  },
  {
    q: "Can we localize video voiceovers into multiple languages?",
    a: "Yes. You can translate your script into 32+ languages and synthesize localized native voiceovers while retaining the distinctive acoustic character of your primary brand voice."
  }
];

const capabilities = [
  { icon: Zap, title: "Sub-second synthesis", detail: "Studio-grade generation", text: "Generate broadcast-ready voiceovers in seconds, ready to audition alongside your storyboard." },
  { icon: Mic, title: "Distinctly your brand voice", detail: "Zero-shot voice cloning", text: "Build a recognizable brand voice from 60 seconds of reference audio, with your exact cadence." },
  { icon: Clapperboard, title: "Video timeline sync", detail: "Automated scene alignment", text: "Audio tracks automatically pace and align with video scenes, kinetic subtitles, and b-roll cuts." },
  { icon: Globe2, title: "Global localization", detail: "32+ languages & accents", text: "Translate and re-voice your video ads and reels across global markets while preserving original tone." },
  { icon: Sparkles, title: "Emotion & emphasis control", detail: "Dynamic storytelling", text: "Direct pitch, energy, and inflection per sentence to deliver high-converting hooks and natural delivery." },
  { icon: BarChart3, title: "Multi-platform export", detail: "Omni-channel mastering", text: "Export standalone stems or mastered video assets optimized for YouTube, TikTok, Reels, and LinkedIn." },
];

const archetypes = [
  { category: "Brand Film", name: "The Brand Storyteller", text: "A rich, evocative voice designed for brand manifestos, founder stories, and cinematic video campaigns.", tags: "Cinematic · Measured", letter: "Aa", style: "executive" },
  { category: "Social Video", name: "The Viral Creator", text: "Punchy, energetic delivery engineered to stop the scroll on TikTok, Instagram Reels, and YouTube Shorts.", tags: "Bright · Expressive", letter: "Ll", style: "growth" },
  { category: "Podcasts & Audio", name: "The Conversational Host", text: "A warm, genuine tone crafted for long-form podcasts, audio newsletters, and interview series.", tags: "Warm · Relatable", letter: "Ee", style: "support" },
  { category: "Walkthroughs", name: "The Product Guide", text: "A clear, articulate voice optimized for software walkthroughs, customer onboarding, and technical explainers.", tags: "Clear · Precise", letter: "Mm", style: "technical" },
];

const waveform = [9, 14, 22, 12, 28, 39, 25, 48, 32, 56, 42, 29, 61, 75, 53, 39, 66, 83, 58, 42, 71, 52, 88, 64, 45, 76, 60, 39, 67, 49, 33, 54, 40, 26, 45, 30, 20, 34, 23, 14, 25, 16, 10];

function Waveform({ animated = false }: { animated?: boolean }) {
  return (
    <div className={styles.waveform} data-animated={animated} aria-hidden="true">
      {waveform.map((height, index) => (
        <span key={index} style={{ height: height + "%", "--bar-delay": index * -0.07 + "s" } as CSSProperties} />
      ))}
    </div>
  );
}

export default function VoiceAgentsClient() {
  const [activeSection, setActiveSection] = useState("intro");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeVoiceTab, setActiveVoiceTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentPreset = voicePresets[activeVoiceTab];
  const currentName = currentPreset.name.split(" ")[0];

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      let active = "intro";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 170) active = section.id;
      }
      setActiveSection(active);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateSection();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 150,
      behavior: reducedMotion ? "instant" : "smooth",
    });
    setActiveSection(id);
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % voicePresets.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + voicePresets.length - 1) % voicePresets.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = voicePresets.length - 1;
    else return;
    event.preventDefault();
    setActiveVoiceTab(next);
    document.getElementById("voice-tab-" + voicePresets[next].id)?.focus();
  }

  return (
    <>
    <div className={styles.page}>
      <a href="#voice-main" className={styles.skipLink}>Skip to voice agents content</a>

      <nav className={styles.sectionNav} aria-label="Voice agents sections">
        <div className={styles.navInner}>
          <a className={styles.productLabel} href="#intro" onClick={(event) => { event.preventDefault(); scrollToSection("intro"); }}>
            <AudioLines size={19} strokeWidth={1.6} /><span>Voice agents</span>
          </a>
          <div className={styles.sectionLinks}>
            {sections.map((section) => (
              <a key={section.id} href={"#" + section.id}
                aria-current={activeSection === section.id ? "location" : undefined}
                onClick={(event) => { event.preventDefault(); scrollToSection(section.id); }}>
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="voice-main" tabIndex={-1}>
        <section id="intro" className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}><span className={styles.statusDot} /> CUBEFORGELABS VOICE AGENTS</p>
                <h1 id="hero-heading">Voice that brings your<br /><em>content to life.</em></h1>
                <p className={styles.heroDescription}>Turn scripts into studio-grade narration, high-converting video ad voiceovers, and localized audio across every channel. Seamlessly synced with your video timeline.</p>
                <div className={styles.heroActions}>
                  <Link href="/login" className={styles.primaryButton}>Try Voice Studio <span><ArrowUpRight size={17} /></span></Link>
                  <button className={styles.textButton} onClick={() => scrollToSection("sandbox")}><Headphones size={17} /> Explore the voices</button>
                </div>
                <div className={styles.heroNote}><span /><span>Studio-quality 48kHz Opus audio. Synced directly to video frames.</span></div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.previewTopline}><span>NARRATION PREVIEW</span><span>CUBEFORGE LABS</span></div>
                <div className={styles.callCard}>
                  <div className={styles.callHeader}>
                    <span className={styles.agentAvatar}>A<span /></span>
                    <div><strong>Aria</strong><span>Campaign narrator & voiceover specialist</span></div>
                    <span className={styles.previewBadge}>STUDIO</span>
                  </div>
                  <div className={styles.callStage}>
                    <div className={styles.speakingLabel}><span className={styles.statusDot} /> Studio voiceover preview</div>
                    <Waveform animated={isPlaying} />
                    <div className={styles.waveCaption}><span>STUDIO VOICE</span><span>WARM & PERSUASIVE</span></div>
                  </div>
                  <div className={styles.callTranscript}>
                    <div><span className={styles.speakerLabel}>SCRIPT (ORIN)</span><p>“Stop losing leads to boring content. CubeForgeLabs automates your video ads, voiceovers, and SEO blogs from one creative prompt.”</p></div>
                    <div className={styles.agentResponse}><span className={styles.speakerLabel}>ARIA</span><p>“Your entire creative pipeline—automated from a single prompt with authentic emotion and natural pacing.”</p></div>
                  </div>
                  <div className={styles.callControls}>
                    <span><span className={styles.statusDot} /> 48kHz studio audio</span>
                    <button onClick={() => setIsPlaying(!isPlaying)} aria-pressed={isPlaying} aria-label={isPlaying ? "Pause waveform animation" : "Animate conversation preview"}>
                      {isPlaying ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
                      {isPlaying ? "Pause preview" : "Animate preview"}
                    </button>
                  </div>
                </div>
                <div className={styles.connectionNote}><span className={styles.connectionIcon}><Check size={14} /></span><div><strong>A script. Then, a finished video ad.</strong><span>Connected to your video studio, captions, and publishing workflows.</span></div><ArrowUpRight size={17} /></div>
              </div>
            </div>

            <div className={styles.heroBottom}>
              <div className={styles.integrationIntro}>One voice pipeline.<br /><strong>Your creative channels.</strong></div>
              <div className={styles.integrationNames} aria-label="Publishes to YouTube, TikTok, Instagram, and LinkedIn"><span>YouTube</span><span>TikTok</span><span>Instagram</span><span>LinkedIn</span></div>
              <a href="#how-to" onClick={(event) => { event.preventDefault(); scrollToSection("how-to"); }} className={styles.discoverLink}>Discover how it works <ArrowDown size={15} /></a>
            </div>
          </div>
        </section>

        <section id="how-to" className={styles.section} aria-labelledby="deploy-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><h2 id="deploy-heading">Your script.<br /><em>A voice that resonates.</em></h2></div>
              <p>From your first creative brief to finished video narration, getting started is seamless.</p>
            </div>
            <div className={styles.steps}>
              {[
                { number: "01", icon: BookOpen, title: "Feed your script or brief", text: "Import scripts directly from Orin the copywriter, upload your campaign outline, or paste video copy with custom pacing and emotion tags.", note: "Scriptwriter & prompt sync" },
                { number: "02", icon: AudioLines, title: "Direct tone, cadence & style", text: "Choose from 40+ studio voices or clone your executive brand voice with 60 seconds of reference audio. Dial in tone, emotion, and pace.", note: "Voice cloning & style" },
                { number: "03", icon: Clapperboard, title: "Sync with video & publish", text: "Auto-align audio tracks with video scenes, generate animated captions, and export directly to YouTube, TikTok, Instagram, and LinkedIn.", note: "Video sync & auto-publish" },
              ].map((step) => (
                <article key={step.number} className={styles.step}>
                  <div className={styles.stepTop}><span>{step.number}</span><step.icon size={24} strokeWidth={1.4} /></div>
                  <h3>{step.title}</h3><p>{step.text}</p>
                  <div className={styles.stepNote}>{step.note}<ArrowRight size={15} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sandbox" className={styles.sandboxSection} aria-labelledby="sandbox-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><h2 id="sandbox-heading">Different personalities.<br /><em>The same brand standard.</em></h2></div>
              <p>Explore four versatile voice styles. Find the voice that commands attention for your campaign.</p>
            </div>
            <div className={styles.sandbox}>
              <div className={styles.personaList} role="tablist" aria-label="Voice personas" aria-orientation="vertical">
                <p className={styles.listLabel}>CHOOSE A VOICE</p>
                {voicePresets.map((preset, index) => (
                  <button key={preset.id} id={"voice-tab-" + preset.id} role="tab"
                    aria-selected={activeVoiceTab === index} aria-controls="voice-panel"
                    tabIndex={activeVoiceTab === index ? 0 : -1}
                    onClick={() => setActiveVoiceTab(index)} onKeyDown={(event) => handleTabKey(event, index)}
                    className={styles.personaButton}>
                    <span className={styles.personaInitial} data-persona={preset.id}>{preset.name.charAt(0)}</span>
                    <span className={styles.personaInfo}><strong>{preset.name.split(" ")[0]}</strong><span>{preset.category}</span></span>
                    <ChevronRight size={16} />
                  </button>
                ))}
                <div className={styles.sandboxTip}><Headphones size={18} strokeWidth={1.5} /><p>A voice for every medium.<br />Consistent tone across all content.</p></div>
              </div>
              <div role="tabpanel" id="voice-panel" aria-labelledby={"voice-tab-" + currentPreset.id} tabIndex={0} className={styles.transcriptPanel}>
                <div key={currentPreset.id} className={styles.transcriptContent}>
                  <div className={styles.transcriptHeader}>
                    <div><span className={styles.eyebrow}>SAMPLE NARRATION</span><h3>Meet {currentName}<span>{currentPreset.badge}</span></h3><p>{currentPreset.tone}</p></div>
                    <span className={styles.latency}><Zap size={12} /> {currentPreset.latency}</span>
                  </div>
                  <div className={styles.dialogue}>
                    {currentPreset.transcript.map((line, index) => {
                      const isAgent = line.speaker.includes("Voice Agent");
                      return (
                        <div key={index} className={styles.dialogueLine} data-agent={isAgent}>
                          <span className={styles.dialogueAvatar}>{isAgent ? currentName.charAt(0) : <Sparkles size={13} />}</span>
                          <div><span className={styles.dialogueSpeaker}>{isAgent ? currentName : line.speaker}<span>{isAgent ? "Voice agent" : "Creative direction"}</span></span><p>{line.text}</p></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.sandboxFooter}><span><AudioLines size={15} /> Studio-mastered audio · 48kHz Opus</span><Link href="/login">Generate with {currentName}<ArrowUpRight size={15} /></Link></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={styles.section} aria-labelledby="features-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><h2 id="features-heading">Natural in tone.<br /><em>Engineered for impact.</em></h2></div>
              <p>Everything a high-converting video ad and content campaign needs, backed by multi-agent AI.</p>
            </div>
            <div className={styles.capabilities}>
              {capabilities.map((item) => (
                <article key={item.title} className={styles.capability}>
                  <item.icon size={23} strokeWidth={1.4} /><span className={styles.capabilityDetail}>{item.detail}</span>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="archetypes" className={styles.librarySection} aria-labelledby="library-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><h2 id="library-heading">Character you can <em>hear.</em></h2></div>
              <p>Choose the personality for your content. Make it distinctly your brand.</p>
            </div>
            <div className={styles.archetypes}>
              {archetypes.map((item) => (
                <article key={item.category} className={styles.archetype}>
                  <div className={styles.typeSpecimen} data-voice={item.style}><span>{item.letter}</span><AudioLines size={28} strokeWidth={1} /></div>
                  <span className={styles.archetypeCategory}>{item.category}</span><h3>{item.name}</h3><p>{item.text}</p><span className={styles.archetypeTags}>{item.tags}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-heading">
          <div className={[styles.container, styles.faqLayout].join(" ")}>
            <div className={styles.faqIntro}><h2 id="faq-heading">Glad you <em>asked.</em></h2><p>A closer look at how voice agents power your content workflow.</p><Link href="/login" className={styles.textButton}>Try Voice Studio <ArrowUpRight size={16} /></Link></div>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div key={faq.q} className={styles.faqItem} data-open={openFaq === index}>
                  <h3><button id={"faq-question-" + index} aria-expanded={openFaq === index} aria-controls={"faq-answer-" + index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq.q}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button></h3>
                  <div id={"faq-answer-" + index} role="region" aria-labelledby={"faq-question-" + index} hidden={openFaq !== index} className={styles.faqAnswer}><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-heading">
          <div className={[styles.container, styles.closingInner].join(" ")}>
            <div><p className={styles.eyebrow}>VOICE YOUR CONTENT</p><h2 id="closing-heading">Make every video ad & campaign<br /><em>sound like your brand.</em></h2><p>Build voices that hook audiences and command attention across every channel.</p></div>
            <div className={styles.closingActions}><Link href="/login" className={styles.lightButton}>Start free trial <ArrowUpRight size={17} /></Link><Link href="/login" className={styles.closingLink}>Explore Studio Generator <ArrowRight size={15} /></Link><span>Instant audio preview. Automated timeline sync included.</span></div>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
}
