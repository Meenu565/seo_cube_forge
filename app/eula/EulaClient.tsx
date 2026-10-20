"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Bot, 
  Check, 
  CheckCircle2, 
  Copy, 
  Cpu, 
  Database, 
  FileCode2, 
  FileKey, 
  HardDrive, 
  Lock, 
  Printer, 
  Scale, 
  Search, 
  Server, 
  ShieldAlert, 
  ShieldCheck, 
  Sliders, 
  Terminal, 
  Zap 
} from "lucide-react";
import styles from "./eula.module.css";

export const eulaSections = [
  {
    num: "01",
    id: "license-grant",
    badge: "Core License",
    title: "Software License Grant & Scope of Entitlement",
    content: (
      <>
        <p>
          Subject to your compliance with this Agreement and active subscription plan, <strong>CubeForgeLabs Private Limited (&ldquo;Licensor&rdquo;)</strong> grants you (or your organization, <strong>&ldquo;Licensee&rdquo;</strong>) a revocable, non-exclusive, non-transferable, non-sublicensable, worldwide license to install, execute, access, and interface with the <strong>CubeForge Agent Studio</strong>, <strong>CubeForge Command Line Interface (CLI)</strong>, <strong>Agent SDKs</strong>, and containerized <strong>CubeForge Edge</strong> binaries.
        </p>
        <div className={styles.clauseCallout}>
          <strong>Authorized Seat Allocation:</strong>
          License rights are provisioned per named enterprise workspace seat or developer seat. Sharing individual login credentials, SSO tokens, or private developer API keys across non-licensed personnel is strictly prohibited without seat tier upgrades.
        </div>
        <ul className={styles.clauseBullets}>
          <li><strong>Production vs. Staging Entitlements:</strong> Production licenses grant authorization to schedule live omni-channel campaigns. Sandbox and developer API keys are restricted to staging integration and pre-flight quality verification.</li>
          <li><strong>Agent Studio Access:</strong> Authorized web portal access to design, parameterize, prompt, and orchestrate autonomous generative multi-agent workflows.</li>
          <li><strong>SDK &amp; Webhook Integration:</strong> Programmatic access to dispatch brief payloads and retrieve rendered outputs via authenticated TLS 1.3 endpoints.</li>
        </ul>
      </>
    )
  },
  {
    num: "02",
    id: "agent-runtimes",
    badge: "Execution Sandboxes",
    title: "Autonomous Agent Engines & Runtime Execution",
    content: (
      <>
        <p>
          CubeForge Labs delivers specialized, autonomous agent runtimes designed to collaborate across distinct generative disciplines. This license governs runtime execution for all current and future agent engines:
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Cato (Content Architect):</strong> Ingestion of campaign briefs, persona calibration, tone synthesis, and long-form narrative structure generation.</li>
          <li><strong>Vela (Visual Art Director):</strong> Diffusion prompt parameterization, scene composition, visual asset rendering, and brand aesthetic harmonization.</li>
          <li><strong>Orin (Voice &amp; Audio Producer):</strong> Voiceover vocal synthesis, cadence modulation, audio mastering, and multilingual speech rendering.</li>
          <li><strong>Iris (Research &amp; Fact Synthesizer):</strong> Deep document indexing, citation extraction, source cross-referencing, and factual grounding verification.</li>
          <li><strong>Kade (Full-Stack Coding Agent):</strong> Landing page syntax compilation, Tailwind generation, interactive UI drafting, and component scaffold rendering.</li>
          <li><strong>Nova (Omni-Channel Distribution):</strong> Content scheduling, automated OAuth packaging, publishing pipeline verification, and cross-channel sync.</li>
        </ul>
        <div className={styles.clauseCallout}>
          <strong>Ephemeral Memory Guarantee:</strong>
          All agent inference containers execute in sandboxed compute runtimes. Prompts, intermediate tokens, and raw scratchpads exist in volatile RAM strictly for the duration of inference and are purged upon task completion.
        </div>
      </>
    )
  },
  {
    num: "03",
    id: "edge-clusters",
    badge: "Sovereign VPC",
    title: "Private Edge Binaries & Offline VPC Deployments",
    content: (
      <>
        <p>
          Enterprise customers licensed under the <strong>CubeForge Edge Sovereign Tier</strong> receive authorization to deploy containerized software images into customer-administered Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, or on-premise bare metal infrastructure.
        </p>
        <div className={styles.codeBlock}>
          {`# CubeForge Edge Container Deployment Verification
docker pull registry.cubeforgelabs.com/edge/runtime:v3.2-sovereign
docker run -d --name cubeforge-edge \\
  --env TENANT_ID="ent_corp_primary" \\
  --env ZERO_EGRESS_ENFORCED="true" \\
  --mount type=bind,source=/vault/vectors,target=/opt/cubeforge/indices \\
  registry.cubeforgelabs.com/edge/runtime:v3.2-sovereign`}
        </div>
        <ul className={styles.clauseBullets}>
          <li><strong>Zero External Egress:</strong> Sovereign Edge nodes operate fully within your VPC boundary with zero external payload transmission back to CubeForge public clusters.</li>
          <li><strong>Air-Gapped Operation:</strong> Certified air-gapped clusters are granted periodic offline cryptographic license renewal via signed HMAC hardware tokens.</li>
          <li><strong>Customer Infrastructure Responsibility:</strong> Licensee remains solely responsible for compute provisioning, firewall ingress rules, and host operating system maintenance.</li>
        </ul>
      </>
    )
  },
  {
    num: "04",
    id: "restrictions",
    badge: "Strict Prohibitions",
    title: "Prohibited Uses & Reverse Engineering Restrictions",
    content: (
      <>
        <p>
          The software binaries, model orchestration architectures, prompt synthesis graphs, and agent routing heuristics represent proprietary trade secrets of CubeForge Labs. You agree <strong>NOT</strong> to:
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Decompile or Reverse Engineer:</strong> Decompile, disassemble, translate, or attempt to derive the human-readable source code, weight parameters, or latent representations of any CubeForge software or runtime binary.</li>
          <li><strong>Model Distillation &amp; Competitive Extraction:</strong> Scrape, aggregate, or systematically extract agent synthetic outputs to train, fine-tune, distill, or evaluate competing machine learning models, autonomous agents, or foundation models.</li>
          <li><strong>Quota Circumvention:</strong> Interfere with, bypass, or tamper with compute token metering, rate limiting gateways, or cryptographic tenant boundary partitioning.</li>
          <li><strong>Harmful or Unlawful Content:</strong> Dispatch prompts designed to generate malware, hate speech, unauthorized deepfakes, defamatory material, or content violating applicable international cyber laws.</li>
        </ul>
        <div className={styles.clauseCallout}>
          <strong>Immediate Injunctive Relief:</strong>
          Any violation of this Section 04 constitutes material copyright infringement and trade secret misappropriation, entitling CubeForge Labs to immediate equitable injunctive relief without bond.
        </div>
      </>
    )
  },
  {
    num: "05",
    id: "ip-ownership",
    badge: "100% Customer IP",
    title: "Customer Intellectual Property & Output Ownership",
    content: (
      <>
        <p>
          CubeForge Labs operates under a clear, uncompromised intellectual property principle: <strong>You retain 100% ownership of your proprietary inputs and generated outputs.</strong>
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Brand Knowledge Vaults:</strong> All brand guidelines, product wikis, tone archetypes, visual moodboards, and vector embeddings uploaded to your workspace remain your exclusive property.</li>
          <li><strong>Generated Creative Outputs:</strong> As between you and CubeForge Labs, all commercial rights, copyrights, trademarks, and exploitation privileges in synthesized articles, video ads, voiceovers, imagery, and code are assigned fully to you upon generation.</li>
          <li><strong>Zero Model Training:</strong> CubeForge Labs contractually guarantees that your brand materials, prompts, and output drafts are <strong>NEVER</strong> utilized to train, retrain, or improve public foundation models or shared agent checkpoints.</li>
        </ul>
      </>
    )
  },
  {
    num: "06",
    id: "third-party",
    badge: "Sub-Processors",
    title: "Third-Party Foundation Models & Infrastructure Dependencies",
    content: (
      <>
        <p>
          The software interfaces with underlying infrastructure sub-processors and foundation model APIs (including AWS, GCP, Supabase, Pinecone, OpenAI, Anthropic, and open-weights inference backends).
        </p>
        <p>
          Where CubeForge invokes foundational inference APIs on your behalf, we enforce commercial zero-data-retention (ZDR) agreements. Your commercial rights in generated outputs remain intact regardless of which underlying inference engine or hybrid model cluster produces the final output.
        </p>
        <div className={styles.clauseCallout}>
          <strong>BYOK (Bring Your Own Key) Support:</strong>
          Enterprise customers utilizing private enterprise API keys for model providers maintain direct billing and telemetry autonomy with those providers through our pass-through gateway.
        </div>
      </>
    )
  },
  {
    num: "07",
    id: "updates",
    badge: "Continuous Delivery",
    title: "Software Updates, Agent Enhancements & Deprecations",
    content: (
      <>
        <p>
          CubeForge Labs regularly releases software updates, inference speed optimizations, agent personality patches, and security firmware.
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Cloud Studio Continuous Updates:</strong> Web studio features, agent prompt architectures, and collaborative canvases are upgraded automatically without requiring manual action.</li>
          <li><strong>Edge Container SemVer:</strong> Edge runtime container images follow Semantic Versioning (SemVer). Major version releases are supported with security backports for a minimum of twelve (12) months.</li>
          <li><strong>Deprecation Notices:</strong> In the event an API endpoint or agent parameter archetype is phased out, CubeForge Labs provides at least ninety (90) days advance notice via workspace console and developer documentation.</li>
        </ul>
      </>
    )
  },
  {
    num: "08",
    id: "metering-telemetry",
    badge: "Telemetry Boundaries",
    title: "Quota Metering, Telemetry & Non-Invasive Verification",
    content: (
      <>
        <p>
          To maintain system reliability, allocate GPU inference compute fairly, and enforce billing tiers, the software communicates aggregated operational telemetry to our license verification gateways:
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Permitted Telemetry:</strong> Active seat count verification, compute token quota consumption, API latency metrics, error status codes, and Edge cluster health pings.</li>
          <li><strong>Strictly Excluded:</strong> Telemetry does <strong>NEVER</strong> inspect, record, or transmit raw prompt payloads, document text, customer wiki contents, or rendered media files.</li>
          <li><strong>Audit Compliance:</strong> For enterprise on-premise deployments, Licensee agrees to provide reasonable software-generated usage logs once per calendar year upon written request.</li>
        </ul>
      </>
    )
  },
  {
    num: "09",
    id: "term-termination",
    badge: "Lifecycle & Purge",
    title: "Term, License Suspension & Data Purge Protocols",
    content: (
      <>
        <p>
          This Agreement remains in full effect for the duration of your active subscription term or enterprise MSA.
        </p>
        <ul className={styles.clauseBullets}>
          <li><strong>Suspension for Cause:</strong> CubeForge Labs reserves the right to suspend software execution if Licensee engages in prohibited reverse engineering, disseminates malicious code, or fails to satisfy billing obligations after ten (10) business days written notice.</li>
          <li><strong>30-Day Export Grace Window:</strong> Upon subscription non-renewal or termination, Licensee retains a thirty (30) day window to export all Brand Knowledge Vaults, prompt histories, and rendered media in standard JSON and MP4/PNG formats.</li>
          <li><strong>Cryptographic Zero-Trace Purge:</strong> Following the 30-day window, all customer vector partitions, database records, and caching instances are permanently overwritten in accordance with DoD 5220.22-M sanitation standards.</li>
        </ul>
      </>
    )
  },
  {
    num: "10",
    id: "warranty-disclaimer",
    badge: "SLA & Warranties",
    title: "Limited Warranty, Service Levels & Output Review",
    content: (
      <>
        <p>
          CubeForge Labs warrants that the software will perform substantially in accordance with published documentation and provides a <strong>99.9% Monthly Uptime SLA</strong> for Enterprise tier workspaces.
        </p>
        <div className={styles.clauseCallout}>
          <strong>Human-in-the-Loop Review Obligation:</strong>
          Because autonomous AI generation is probabilistic in nature, Licensee acknowledges that generative outputs must be reviewed by qualified personnel prior to public publication, particularly when dealing with regulated financial claims, legal opinions, or medical information.
        </div>
        <p>
          EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
        </p>
      </>
    )
  },
  {
    num: "11",
    id: "indemnity-liability",
    badge: "Dual Indemnity",
    title: "Mutual Indemnification & Limitation of Liability",
    content: (
      <>
        <ul className={styles.clauseBullets}>
          <li><strong>CubeForge IP Indemnity:</strong> CubeForge Labs shall defend, indemnify, and hold harmless Licensee against any third-party claim alleging that the proprietary CubeForge software platform infringes any valid copyright, trade secret, or trademark.</li>
          <li><strong>Customer Source Indemnity:</strong> Licensee shall defend and indemnify CubeForge Labs against any claim arising from uploaded customer assets or proprietary prompt briefs that infringe third-party privacy or intellectual property rights.</li>
          <li><strong>Cap on Consequential Damages:</strong> To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages. Total aggregate liability under this Agreement shall not exceed the total fees paid by Licensee during the twelve (12) months preceding the incident.</li>
        </ul>
      </>
    )
  },
  {
    num: "12",
    id: "governing-law",
    badge: "Legal Jurisdiction",
    title: "Export Compliance, Governing Law & Jurisdiction",
    content: (
      <>
        <p>
          This Agreement is governed by and construed in accordance with the laws of <strong>India and the State of Tamil Nadu</strong>, without regard to conflict of law principles.
        </p>
        <p>
          Any dispute, controversy, or claim arising out of or relating to this Agreement shall be referred to and finally resolved by binding arbitration seated in <strong>Chennai, India</strong>, conducted in the English language under the Arbitration and Conciliation Act, 1996. For international enterprise customers, global Standard Contractual Clauses (SCCs) govern cross-border data protection matters.
        </p>
        <div className={styles.clauseCallout}>
          <strong>Export Compliance:</strong>
          Licensee certifies that software binaries, Edge images, and cryptographic keys will not be downloaded, exported, or re-exported to any sanctioned jurisdiction or entity prohibited under international export regulations.
        </div>
      </>
    )
  }
];

export default function EulaClient() {
  const [activeSectionId, setActiveSectionId] = useState("license-grant");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  // Active section metadata
  const activeSection = eulaSections.find(s => s.id === activeSectionId) || eulaSections[0];

  // Filter sections by search query
  const filteredSections = eulaSections.filter(sec => 
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.num.includes(searchQuery)
  );

  // Track active section on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          // If at the very bottom of the page, highlight the last section
          if (windowHeight + scrollY >= docHeight - 80) {
            setActiveSectionId(eulaSections[eulaSections.length - 1].id);
            ticking = false;
            return;
          }

          // Offset below sticky header (header is ~85px)
          const threshold = 140;

          // Find the lowest section whose top is at or above the threshold
          let currentId = eulaSections[0].id;
          for (let i = eulaSections.length - 1; i >= 0; i--) {
            const sec = eulaSections[i];
            const el = document.getElementById(sec.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold) {
                currentId = sec.id;
                break;
              }
            }
          }

          setActiveSectionId(currentId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSectionId(id);
    const el = document.getElementById(id);
    if (el) {
      const elTop = el.getBoundingClientRect().top + window.scrollY - 105;
      window.scrollTo({
        top: elTop,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className={styles.contentArea}>
      
      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside className={styles.sidebar} aria-label="EULA table of contents">
        <div className={styles.sidebarSticky}>
          
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarTitle}>
              <Scale size={13} className="text-[#8657d8]" aria-hidden="true" />
              EULA Sections ({eulaSections.length})
            </span>
            <span className={styles.activeProgressBadge} title="Currently viewing section">
              {activeSection.num} / 12
            </span>
          </div>

          {/* Quick Search */}
          <div className={styles.searchBox}>
            <Search size={14} className={styles.searchIcon} aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clauses, edge..."
              className={styles.searchInput}
              aria-label="Filter EULA clauses"
            />
          </div>

          {/* Table of Contents List */}
          <nav aria-label="Clauses list">
            <ul className={styles.tocList}>
              {filteredSections.length === 0 ? (
                <li className="py-4 text-xs text-[#74677f]">No matching clauses found.</li>
              ) : (
                filteredSections.map(({ num, id, title }) => {
                  const isActive = activeSectionId === id;

                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(e) => handleTocClick(e, id)}
                        className={`${styles.tocLink} ${isActive ? styles.tocLinkActive : ""}`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className={styles.tocNum}>{num}</span>
                        <span className="truncate">{title.split(" &")[0]}</span>
                        {isActive && <span className={styles.activeDot} aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })
              )}
            </ul>
          </nav>

          {/* Action Buttons: Copy Link & Print */}
          <div className={styles.sidebarActions}>
            <button
              type="button"
              onClick={handleCopyLink}
              className={styles.actionBtn}
              title="Copy link to this agreement"
            >
              {copiedLink ? (
                <>
                  <Check size={13} className="text-[#059669]" />
                  <span className="text-[#059669]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className={styles.actionBtn}
              title="Print or save this agreement as PDF"
            >
              <Printer size={13} />
              <span>Print / PDF</span>
            </button>
          </div>

          {/* Sidebar Contact Helper */}
          <div className={styles.sidebarContactCard}>
            <strong>Need bespoke licensing?</strong>
            <p>Our legal team handles custom enterprise Master Service Agreements (MSAs), offline edge keys, and custom seat tiers.</p>
            <a href="mailto:legal@cubeforgelabs.com?subject=CubeForge%20EULA%20Inquiry">
              legal@cubeforgelabs.com <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>

        </div>
      </aside>

      {/* Main Legal Clauses Column */}
      <div className={styles.clauses}>
        
        {/* Mobile Quick Dropdown */}
        <details className={styles.mobileNav}>
          <summary>Jump to EULA Section ({eulaSections.length})</summary>
          <ul>
            {eulaSections.map(({ num, id, title }) => (
              <li key={id}>
                <a href={`#${id}`}>{num}. {title}</a>
              </li>
            ))}
          </ul>
        </details>

        {filteredSections.map(({ num, id, badge, title, content }) => (
          <article key={id} id={id} className={styles.clause}>
            <div className={styles.clauseHeader}>
              <div className={styles.clauseTitleGroup}>
                <span className={styles.clauseNum}>{num}</span>
                <h2>{title}</h2>
              </div>
              <span className={styles.clauseBadge}>{badge}</span>
            </div>

            <div className={styles.clauseBody}>
              {content}
            </div>
          </article>
        ))}

        {/* Enterprise Inquiries Box */}
        <div className={styles.enterpriseCard}>
          <div>
            <h3>Enterprise &amp; Sovereign Licensing Inquiries</h3>
            <p>
              Looking to deploy CubeForge Edge on air-gapped sovereign hardware, white-label agent runtimes for proprietary consumer devices, or negotiate customized liability provisions? Our corporate counsel reviews institutional licensing proposals directly.
            </p>
          </div>

          <div className={styles.enterpriseDetails}>
            <strong>Legal &amp; Commercial Licensing Division</strong><br />
            CubeForgeLabs Private Limited<br />
            No 61, 3rd Floor, Industrial Estate, Perungudi,<br />
            Chennai, Tamil Nadu 600096, India<br />
            Direct Inquiries: <a href="mailto:legal@cubeforgelabs.com">legal@cubeforgelabs.com</a>
          </div>
        </div>

      </div>

    </div>
  );
}

