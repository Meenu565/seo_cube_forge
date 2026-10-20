import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText, 
  Lock, 
  Scale, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Zap 
} from "lucide-react";
import Logo from "@/components/site/Logo";
import Footer from "@/components/site/Footer";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms of Service & Usage Agreement | CubeForgeLabs",
  description:
    "Read the Terms of Service governing access to CubeForgeLabs, autonomous multi-agent pipelines, private edge clusters, and generative AI services.",
  alternates: {
    canonical: "https://cubeforgelabs.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service & Usage Agreement | CubeForgeLabs",
    description:
      "Read the Terms of Service governing access to CubeForgeLabs and generative AI services.",
    url: "https://cubeforgelabs.com/terms-of-service",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Usage Agreement | CubeForgeLabs",
    description:
      "Read the Terms of Service governing access to CubeForgeLabs and generative AI services.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "You Own Your Content",
    desc: "Your prompts, uploaded brand assets, knowledge vaults, and AI-generated outputs remain 100% your intellectual property."
  },
  {
    icon: Lock,
    title: "Zero Unauthorized Model Training",
    desc: "We do not use your private enterprise data, brand materials, or proprietary inputs to train public foundation models without written consent."
  },
  {
    icon: Terminal,
    title: "Private Edge & VPC Isolation",
    desc: "CubeForge Edge clusters and dedicated VPC environments maintain strict tenant boundaries with zero unmonitored external egress."
  },
  {
    icon: Zap,
    title: "Commercial Use Rights",
    desc: "All content generated through paid subscription tiers includes worldwide commercial exploitation and publishing rights."
  }
];

const toc = [
  { num: "01", id: "acceptance", label: "Acceptance & Contractual Scope" },
  { num: "02", id: "platform", label: "The CubeForge Platform & Agents" },
  { num: "03", id: "accounts", label: "Account Access & Security" },
  { num: "04", id: "ownership", label: "Customer Content & IP Ownership" },
  { num: "05", id: "ai-outputs", label: "AI Outputs & Commercial License" },
  { num: "06", id: "billing", label: "Subscriptions, Credits & Billing" },
  { num: "07", id: "acceptable-use", label: "Acceptable Use & Prohibited Conduct" },
  { num: "08", id: "edge-clusters", label: "Edge Clusters & VPC Boundaries" },
  { num: "09", id: "integrations", label: "Publishing Channels & Third Parties" },
  { num: "10", id: "warranties", label: "Service Levels & Disclaimers" },
  { num: "11", id: "liability", label: "Limitation of Liability" },
  { num: "12", id: "governing-law", label: "Governing Law & Legal Contact" }
];

export default function TermsOfServicePage() {
  return (
    <>
      <div className={styles.page}>
        <a className={styles.skipLink} href="#terms-content">Skip to content</a>

        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo} aria-label="CubeForge Labs home">
              <Logo />
            </Link>
            <span className={styles.headerLabel}>Legal Agreement · Terms of Service</span>
            <nav aria-label="Legal navigation" className={styles.headerLinks}>
              <Link href="/trust-center">Trust Center <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <Link href="/contact">Contact Legal <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </nav>
          </div>
        </header>

        <main id="terms-content" tabIndex={-1} className={styles.layout}>
          
          {/* Hero Section */}
          <section className={styles.hero} aria-labelledby="terms-title">
            <p className={styles.eyebrow}>
              <span aria-hidden="true" /> CubeForgeLabs Private Limited
            </p>
            <h1 id="terms-title">
              Clear terms for<br /><em>thoughtful collaboration.</em>
            </h1>
            <p className={styles.heroIntro}>
              These Terms of Service (&ldquo;Terms&rdquo;) establish the agreement between you (or your organization) and CubeForgeLabs Private Limited. They govern your access to the CubeForge web studio, autonomous multi-agent content pipelines, programmatic APIs, and private Edge deployment clusters.
            </p>

            {/* Quick Metadata Bar */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span>Effective Date</span>
                <span>October 9, 2026</span>
              </div>
              <div className={styles.metaItem}>
                <span>Version</span>
                <span>2.4 (Enterprise & Studio)</span>
              </div>
              <div className={styles.metaItem}>
                <span>Entity</span>
                <span>CubeForgeLabs Private Limited</span>
              </div>
              <div className={styles.metaItem}>
                <span>Jurisdiction</span>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Plain English Principles Box */}
            <div className={styles.summaryBox}>
              <div className={styles.summaryHeader}>
                <Sparkles size={16} className="text-[#8657d8]" aria-hidden="true" />
                <span>Executive Summary · Plain-English Commitments</span>
              </div>
              <div className={styles.principlesGrid}>
                {principles.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className={styles.principle}>
                    <h3>
                      <Icon size={18} className="text-[#8657d8] shrink-0" aria-hidden="true" />
                      {title}
                    </h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main Layout: Sticky Sidebar + Clauses */}
          <div className={styles.contentArea}>
            
            {/* Desktop Sticky Table of Contents */}
            <aside className={styles.sidebar} aria-label="Table of contents">
              <div className={styles.sidebarSticky}>
                <p className={styles.sidebarTitle}>
                  <Scale size={14} aria-hidden="true" />
                  Table of Contents
                </p>
                <ul className={styles.tocList}>
                  {toc.map(({ num, id, label }) => (
                    <li key={id}>
                      <a href={`#${id}`} className={styles.tocLink}>
                        <span className={styles.tocNum}>{num}</span>
                        <span>{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Sidebar Contact Helper */}
                <div className={styles.sidebarContactCard}>
                  <strong>Need legal clarification?</strong>
                  <p>Our compliance team can assist with enterprise MSAs, DPA agreements, or procurement reviews.</p>
                  <a href="mailto:info@cubeforgelabs.com?subject=CubeForge%20Terms%20Inquiry">
                    info@cubeforgelabs.com <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Clauses Content */}
            <div className={styles.clauses}>
              
              {/* Mobile Quick Dropdown Nav */}
              <details className={styles.mobileNav}>
                <summary>Jump to section ({toc.length} sections)</summary>
                <ul>
                  {toc.map(({ num, id, label }) => (
                    <li key={id}>
                      <a href={`#${id}`}>{num}. {label}</a>
                    </li>
                  ))}
                </ul>
              </details>

              {/* Clause 01 */}
              <article id="acceptance" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>01</span>
                  <h2 className={styles.clauseTitle}>Acceptance &amp; Contractual Scope</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    By registering an account, invoking an API endpoint, deploying an agent workflow, or accessing any service provided by CubeForgeLabs Private Limited (&ldquo;CubeForge Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;User&rdquo;) agree to be legally bound by these Terms of Service.
                  </p>
                  <p>
                    If you are entering into these Terms on behalf of an enterprise, company, government agency, or other legal entity, you represent and warrant that you possess the full legal authority to bind that entity. If you do not possess such authority, or if you do not agree with any part of these Terms, you may not access or use our services.
                  </p>
                </div>
              </article>

              {/* Clause 02 */}
              <article id="platform" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>02</span>
                  <h2 className={styles.clauseTitle}>The CubeForge Platform &amp; Autonomous Agents</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    CubeForge Labs provides a unified generative content operating system powered by synchronized multi-agent workflows. Our services include:
                  </p>
                  <ul className={styles.clauseList}>
                    <li><strong>Autonomous Agent Squads:</strong> Cato (Research &amp; Audience Strategy), Vela (Channel Architecture), Orin (Multi-Tone Copywriting), Iris (Visual Design &amp; Graphic Synthesis), Kade (Video Generation &amp; Animation), and Nova (Cross-Channel Publishing &amp; Telemetry).</li>
                    <li><strong>Specialized Agent Products:</strong> Content Agents, Voice Agents, Doc Agents, Work Agents, Coding Agents, and CubeForge Edge infrastructure.</li>
                    <li><strong>Brand Knowledge Vaults:</strong> Secure, isolated vectorized memory repositories storing your brand voice guidelines, style rules, and company documents.</li>
                    <li><strong>Connected Publishing Pipelines:</strong> Direct publishing connectors to authorized third-party platforms including LinkedIn, 𝕏, YouTube, and enterprise CMS environments.</li>
                  </ul>
                  <p>
                    We reserve the right to continually improve, update, add, or deprecate platform features and agent capabilities, provided such updates do not materially diminish core subscribed enterprise functionality.
                  </p>
                </div>
              </article>

              {/* Clause 03 */}
              <article id="accounts" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>03</span>
                  <h2 className={styles.clauseTitle}>Account Access &amp; Security</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    To use CubeForge Labs, you must register for an authenticated workspace account. You agree to provide accurate, current, and complete registration information. You are solely responsible for:
                  </p>
                  <ul className={styles.clauseList}>
                    <li>Maintaining the strict confidentiality of your login credentials, SSO sessions, and API tokens.</li>
                    <li>All actions, agent invocations, content generations, and billing charges incurred under your account credentials.</li>
                    <li>Immediately notifying CubeForge Labs at <strong>security@cubeforgelabs.com</strong> upon becoming aware of any unauthorized access or breach of security.</li>
                  </ul>
                  <p>
                    Workspace administrators control user seat invitations and access permissions within their organization. CubeForge Labs is not liable for losses caused by compromised administrator credentials or internal credential sharing.
                  </p>
                </div>
              </article>

              {/* Clause 04 */}
              <article id="ownership" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>04</span>
                  <h2 className={styles.clauseTitle}>Customer Content &amp; Intellectual Property Ownership</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    <strong>Your Data Remains Your Exclusive Property.</strong> As between you and CubeForge Labs, you retain all existing and future intellectual property rights, title, and interest in and to:
                  </p>
                  <ul className={styles.clauseList}>
                    <li>All prompts, briefs, instructions, source documents, brand logos, style kits, videos, and media you upload or transmit to the platform (&ldquo;Customer Inputs&rdquo;).</li>
                    <li>All vectorized embeddings, customer-specific knowledge indices, and brand vaults created from your materials.</li>
                  </ul>
                  <div className={styles.callout}>
                    <strong>Commitment Against Unauthorized Training:</strong> CubeForge Labs does NOT use your private customer inputs, proprietary brand voice vaults, or unpublished drafts to train or fine-tune public foundation models. Your materials are strictly processed in private, isolated runtime containers.
                  </div>
                  <p>
                    You grant CubeForge Labs a non-exclusive, worldwide, royalty-free license solely to host, process, cache, and transmit your Customer Inputs to the extent necessary to deliver the services, maintain agent pipelines, and comply with applicable laws.
                  </p>
                </div>
              </article>

              {/* Clause 05 */}
              <article id="ai-outputs" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>05</span>
                  <h2 className={styles.clauseTitle}>AI Outputs &amp; Commercial Usage License</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    <strong>Ownership of Generated Deliverables:</strong> As between you and CubeForge Labs, to the maximum extent permitted by applicable law, you own all rights, title, and commercial interest in and to the content generated by our agents in response to your Customer Inputs (&ldquo;Outputs&rdquo;).
                  </p>
                  <p>
                    <strong>Commercial Exploitation:</strong> Paid active subscriptions grant you full, perpetual, worldwide rights to publish, modify, monetize, broadcast, and distribute Outputs across digital ads, social networks, websites, print media, and commercial campaigns without royalty payments to CubeForge Labs.
                  </p>
                  <p>
                    <strong>Human Review Recommendation:</strong> Generative artificial intelligence operates on probabilistic modeling. While CubeForge Labs incorporates rigorous verification layers and Brand IQ guards, you acknowledge that Outputs should be reviewed for legal compliance, factual accuracy, and brand alignment prior to public distribution.
                  </p>
                </div>
              </article>

              {/* Clause 06 */}
              <article id="billing" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>06</span>
                  <h2 className={styles.clauseTitle}>Subscriptions, Fees &amp; Compute Credits</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    <strong>Subscription Fees:</strong> Paid tiers (e.g., Starter, Professional, Enterprise) are billed in advance on a recurring monthly or annual basis via authorized payment gateways. All fees are non-refundable except as explicitly required by law or agreed in a written Enterprise Master Services Agreement (MSA).
                  </p>
                  <p>
                    <strong>Compute Credits:</strong> Heavy multimodal agent tasks (such as high-definition video generation, 4K rendering, and multi-hour voice synthesis) consume compute credits as outlined on our pricing schedule. Credits included in monthly plans renew each billing cycle and do not roll over unless specified in your tier agreement.
                  </p>
                  <p>
                    <strong>Taxes:</strong> All listed fees are exclusive of applicable goods and services taxes (GST), value-added taxes (VAT), sales taxes, or withholding duties, which will be calculated and invoiced according to your billing jurisdiction.
                  </p>
                </div>
              </article>

              {/* Clause 07 */}
              <article id="acceptable-use" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>07</span>
                  <h2 className={styles.clauseTitle}>Acceptable Use Policy &amp; Prohibited Conduct</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    You agree not to use the CubeForge Labs platform, APIs, or autonomous agents to:
                  </p>
                  <ul className={styles.clauseList}>
                    <li>Generate, store, or distribute material that is unlawful, defamatory, harassing, sexually explicit, hateful, or promotes violence or self-harm.</li>
                    <li>Infringe upon the copyright, trademark, trade secret, or privacy rights of any third party.</li>
                    <li>Conduct malicious cyber operations, reverse-engineer proprietary agent orchestration models, or perform unauthorized security probing.</li>
                    <li>Generate deceptive synthetic media (deepfakes) intended to mislead voters, manipulate financial markets, or impersonate living individuals without verified consent.</li>
                    <li>Bypass automated rate limits, token quotas, or security firewalls through multi-account cycling or automated bot attacks.</li>
                  </ul>
                  <p>
                    Violations of this Acceptable Use Policy may result in immediate suspension or permanent termination of workspace access without refund.
                  </p>
                </div>
              </article>

              {/* Clause 08 */}
              <article id="edge-clusters" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>08</span>
                  <h2 className={styles.clauseTitle}>CubeForge Edge, VPC Isolation &amp; Data Boundaries</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    For customers utilizing <strong>CubeForge Edge</strong> or private Virtual Private Cloud (VPC) deployments:
                  </p>
                  <ul className={styles.clauseList}>
                    <li><strong>Sovereignty:</strong> Model inferencing and memory storage execute strictly within your designated geographical cloud region or on-premise hardware cluster.</li>
                    <li><strong>No External Egress:</strong> Private clusters are configured with zero unmonitored external network routes, ensuring complete data boundary compliance for regulated industries (healthcare, defense, BFSI).</li>
                    <li><strong>SLAs:</strong> Service level agreements for private clusters are governed by your respective Enterprise Edge Addendum.</li>
                  </ul>
                </div>
              </article>

              {/* Clause 09 */}
              <article id="integrations" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>09</span>
                  <h2 className={styles.clauseTitle}>Publishing Channels &amp; Third-Party Services</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    CubeForge Labs integrates with third-party platforms (such as LinkedIn, 𝕏, YouTube, and Meta) via their official APIs to enable automated scheduling and publishing.
                  </p>
                  <p>
                    Your connection to these services is subject to their respective terms and privacy policies. CubeForge Labs is not responsible for publishing delays, API deprecations, account flags, or reach fluctuations caused by third-party platform algorithm updates or enforcement actions.
                  </p>
                </div>
              </article>

              {/* Clause 10 */}
              <article id="warranties" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>10</span>
                  <h2 className={styles.clauseTitle}>Service Levels &amp; Disclaimers</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    Except as expressly stated in an enterprise SLA, CubeForge Labs services are provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express, implied, statutory, or otherwise.
                  </p>
                  <p>
                    CubeForge Labs does not warrant that the services will be completely uninterrupted, timely, error-free, or that AI-generated outputs will always be unique or factually infallible across all domains. You assume total responsibility and risk for your use of the platform.
                  </p>
                </div>
              </article>

              {/* Clause 11 */}
              <article id="liability" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>11</span>
                  <h2 className={styles.clauseTitle}>Limitation of Liability &amp; Indemnification</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    <strong>Cap on Liability:</strong> To the maximum extent permitted by applicable law, in no event shall either party&rsquo;s aggregate liability arising out of or related to these Terms exceed the total fees paid by Customer to CubeForge Labs in the twelve (12) months preceding the event giving rise to liability.
                  </p>
                  <p>
                    <strong>Consequential Damages:</strong> Neither party shall be liable for any indirect, punitive, special, incidental, or consequential damages, including loss of profits, goodwill, data, or business interruption, regardless of whether advised of the possibility of such damages.
                  </p>
                  <p>
                    <strong>Customer Indemnification:</strong> Customer agrees to defend, indemnify, and hold harmless CubeForge Labs against any third-party claims arising from Customer Inputs that violate intellectual property rights or applicable laws.
                  </p>
                </div>
              </article>

              {/* Clause 12 */}
              <article id="governing-law" className={styles.clause}>
                <div className={styles.clauseHeader}>
                  <span className={styles.clauseNum}>12</span>
                  <h2 className={styles.clauseTitle}>Governing Law &amp; Legal Contact</h2>
                </div>
                <div className={styles.clauseBody}>
                  <p>
                    These Terms of Service and any disputes arising out of or relating to your use of CubeForge Labs shall be governed by and construed in accordance with the substantive laws of <strong>India</strong>, without regard to conflict of law principles.
                  </p>
                  <p>
                    The courts situated in <strong>Chennai, Tamil Nadu, India</strong> shall have exclusive jurisdiction to adjudicate any dispute arising out of or connected with this agreement.
                  </p>
                  <div className={styles.callout}>
                    <strong>Registered Legal Entity:</strong><br />
                    CubeForgeLabs Private Limited<br />
                    No 61, 3rd Floor, Estate 3rd Cross Rd,<br />
                    Developed Plots, Industrial Estate, Perungudi,<br />
                    Chennai, Tamil Nadu 600096, India<br />
                    Legal Inquiries: <a href="mailto:info@cubeforgelabs.com" className="text-[#8657d8] font-bold">info@cubeforgelabs.com</a>
                  </div>
                </div>
              </article>

              {/* Bottom Support & Procurement Banner */}
              <div className={styles.supportBanner}>
                <div>
                  <h3>Custom Enterprise Terms &amp; MSAs</h3>
                  <p>Need a customized Data Processing Addendum (DPA), custom SLA guarantees, or security compliance questionnaire?</p>
                </div>
                <a href="mailto:info@cubeforgelabs.com?subject=Enterprise%20Terms%20Request" className={styles.supportBtn}>
                  Contact Legal &amp; Procurement <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>

            </div>
          </div>
        </main>
      </div>
      <Footer primaryCtaHref="/login" />
    </>
  );
}
