# The Complete Web Developer's Guide to SEO & Metadata

> A comprehensive handbook for software engineers on optimizing modern websites and web applications for search engines, web crawlers, and social media platforms.

---

## Table of Contents
1. [How Search Engines Work](#1-how-search-engines-work)
2. [Document Head & Fundamental Meta Tags](#2-document-head--fundamental-meta-tags)
3. [Canonical URLs & Duplicate Content Prevention](#3-canonical-urls--duplicate-content-prevention)
4. [Social Sharing Metadata: Open Graph & Twitter Cards](#4-social-sharing-metadata-open-graph--twitter-cards)
5. [Structured Data & Schema.org (JSON-LD)](#5-structured-data--schemaorg-json-ld)
6. [XML Sitemaps: Architecture & Rules](#6-xml-sitemaps-architecture--rules)
7. [Robots.txt & Crawler Directives](#7-robotstxt--crawler-directives)
8. [Semantic HTML & Content Hierarchy](#8-semantic-html--content-hierarchy)
9. [Image SEO & Asset Optimization](#9-image-seo--asset-optimization)
10. [Single Page Applications (SPAs) vs SSR / SSG](#10-single-page-applications-spas-vs-ssr--ssg)
11. [Core Web Vitals & Technical Performance](#11-core-web-vitals--technical-performance)
12. [Internationalization & Multi-Language (`hreflang`)](#12-internationalization--multi-language-hreflang)
13. [Auditing, Testing & Verification Tools](#13-auditing-testing--verification-tools)
14. [Pre-Launch Production Checklist](#14-pre-launch-production-checklist)
15. [Using AI Coding Agents for SEO: Antigravity, Claude & Codex](#15-using-ai-coding-agents-for-seo-antigravity-claude--codex)

---

## 1. How Search Engines Work

Search engines (like Google, Bing, and DuckDuckGo) discover and rank content through a three-stage pipeline:

```
[ Crawling ] ────────► [ Indexing ] ────────► [ Ranking ]
Discovers URLs          Analyzes HTML,         Calculates relevance,
via links & sitemaps    metadata & content     speed, quality & intent
```

1. **Crawling (Discovery)**: Automated web spiders (e.g., `Googlebot`, `Bingbot`) traverse the internet following hyperlinks and consuming XML sitemaps.
2. **Indexing (Parsing & Understanding)**: The crawler parses the text, semantic structure, links, images, and meta tags of each discovered page. If approved, the page is stored in a massive database (the index).
3. **Ranking (Serving Results)**: When a human submits a search query, algorithms score indexed pages by topical relevance, domain authority, user experience, speed, and mobile responsiveness.

---

## 2. Document Head & Fundamental Meta Tags

Every HTML page must provide essential tags inside `<head>` to guide both human browsers and search bots.

### Complete Boilerplate Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. Technical Encoding & Viewport -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- 2. Primary Search Meta -->
  <title>Acme Studio — High-Performance Cloud Architecture & DevOps</title>
  <meta name="description" content="Acme Studio builds secure, resilient cloud architecture and enterprise DevOps pipelines. Scale your infrastructure with zero downtime." />

  <!-- 3. Crawler Directives -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

  <!-- 4. Author & Branding -->
  <meta name="author" content="Acme Corporation" />
  <meta name="theme-color" content="#0F172A" />

  <!-- 5. Canonical URL -->
  <link rel="canonical" href="https://example.com/services/cloud-architecture" />

  <!-- 6. Favicon & App Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</head>
<body>
  <!-- Page Content -->
</body>
</html>
```

### Deep-Dive on Essential Tags

#### A. The `<title>` Tag
- **Formula**: `Primary Keyword — Secondary Context | Brand Name`
  - Example: `DevOps Consulting & CI/CD Pipelines | Acme Inc`
- **Length**: **50–60 characters** (approx. 600 pixels width). Longer titles will be truncated with `...` on search engine results pages (SERPs).
- **Rule**: Every single URL must have a unique, non-generic title. Never use "Home" or "Page 1".

#### B. The `<meta name="description">`
- **Purpose**: The black snippet text displayed under the blue title link on Google.
- **Length**: **140–160 characters**.
- **Rule**: Include a clear value proposition and a call to action. Avoid keyword stuffing.

#### C. The `<meta name="robots">` Tag
Controls how search engines treat this specific page:
- `index, follow`: (Default) Index this page and follow all outbound links.
- `noindex, follow`: Do **not** show this page in search results, but follow links to other pages (common for paginated category lists or thank-you pages).
- `noindex, nofollow`: Completely ignore this page and its links (use for user dashboards, checkout screens, internal search results).

---

## 3. Canonical URLs & Duplicate Content Prevention

Search engines penalize websites that publish identical or near-identical content on different URLs.

### Why Duplicate URLs Occur
A single webpage can often be loaded via multiple variations:
- `https://example.com/product`
- `https://example.com/product/` (trailing slash)
- `https://example.com/product?ref=newsletter` (tracking query params)
- `http://example.com/product` (HTTP instead of HTTPS)
- `https://www.example.com/product` (www vs non-www)

### The Solution: The Self-Referential Canonical Tag
Tell search engines which URL is the single master copy by placing this in the `<head>` of every page:

```html
<link rel="canonical" href="https://example.com/product" />
```

> **Golden Rule**: Always use **absolute URLs** (including protocol `https://` and exact domain) in canonical tags. Never use relative paths like `/product`.

---

## 4. Social Sharing Metadata: Open Graph & Twitter Cards

When someone shares your link on Slack, WhatsApp, Twitter/X, LinkedIn, Discord, or iMessage, the chat client reads special metadata tags to render a rich link preview card.

### Open Graph (OG) Specification (Facebook, LinkedIn, Slack, WhatsApp)

```html
<!-- Open Graph Basics -->
<meta property="og:site_name" content="Acme Cloud" />
<meta property="og:type" content="website" /> <!-- Use 'article' for blog posts, 'profile' for personal pages -->
<meta property="og:url" content="https://example.com/services/cloud-architecture" />
<meta property="og:title" content="Acme Cloud Architecture & Enterprise DevOps" />
<meta property="og:description" content="Scale your infrastructure with zero downtime. Built for enterprise reliability." />
<meta property="og:image" content="https://example.com/images/og-cloud-service.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Acme Cloud Architecture platform dashboard showing server telemetry." />
```

### Twitter / X Cards Specification

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@acme_corp" />
<meta name="twitter:creator" content="@author_handle" />
<meta name="twitter:title" content="Acme Cloud Architecture & Enterprise DevOps" />
<meta name="twitter:description" content="Scale your infrastructure with zero downtime." />
<meta name="twitter:image" content="https://example.com/images/og-cloud-service.png" />
```

### Critical Image Guidelines for Social Previews
- **Ideal Dimensions**: **1200 × 630 pixels** (1.91:1 aspect ratio).
- **File Format**: JPG, PNG, or WebP (SVG is **not** supported by social scrapers).
- **File Size**: Under 5 MB (ideally under 500 KB for fast previews).
- **Absolute URL Required**: `https://example.com/image.png` (relative paths like `/image.png` fail completely on external scrapers).

---

## 5. Structured Data & Schema.org (JSON-LD)

Structured data uses a standardized vocabulary from [Schema.org](https://schema.org) formatted in JSON-LD. It allows search engines to understand the exact meaning of your content and unlocks **Rich Results** (star ratings, event dates, author cards, FAQ accordions).

Place JSON-LD inside a `<script type="application/ld+json">` tag in your `<head>` or at the bottom of `<body>`.

### Example 1: Organization / Brand Identity

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acme Inc.",
  "url": "https://example.com",
  "logo": "https://example.com/assets/logo.png",
  "sameAs": [
    "https://twitter.com/acme",
    "https://linkedin.com/company/acme",
    "https://github.com/acme"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@example.com",
    "contactType": "customer service"
  }
}
</script>
```

### Example 2: FAQ Page (Generates Google Accordion Snippets)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can we migrate our database?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most databases under 10TB migrate in less than 4 hours using our continuous zero-downtime replication tool."
      }
    },
    {
      "@type": "Question",
      "name": "Is your infrastructure SOC2 Type II certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our infrastructure undergoes annual third-party audits with continuous compliance monitoring."
      }
    }
  ]
}
</script>
```

### Example 3: Blog Post / Technical Article

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "A Zero-Downtime Migration Playbook for PostgreSQL",
  "image": "https://example.com/images/postgres-migration.png",
  "datePublished": "2026-10-14T08:00:00+00:00",
  "dateModified": "2026-10-14T12:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Alex Morgan",
    "jobTitle": "Principal Infrastructure Architect"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Acme Inc",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}
</script>
```

---

## 6. XML Sitemaps: Architecture & Rules

An XML sitemap is a machine-readable directory informing search engines of all pages available for crawling, when they were last updated, and their relative priority.

### Standard XML Sitemap Example (`/sitemap.xml`)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-10-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Core Product / Service -->
  <url>
    <loc>https://example.com/products</loc>
    <lastmod>2026-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Article -->
  <url>
    <loc>https://example.com/blog/zero-downtime-migration</loc>
    <lastmod>2026-10-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### Explanation of Attributes

| Tag | Requirement | Purpose |
| :--- | :--- | :--- |
| `<loc>` | **Mandatory** | The absolute URL of the page. Must match the canonical URL exactly. |
| `<lastmod>` | Recommended | Date of last substantial edit in ISO 8601 (`YYYY-MM-DD`). Helps crawlers prioritize re-indexing. |
| `<changefreq>` | Optional | Hint on update frequency: `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`. |
| `<priority>` | Optional | Relative weight within your site (`0.0` to `1.0`). Note: Googlebot uses internal heuristics, but it provides guidance to other crawlers. |

### Sitemap Index for Large Websites (>50,000 URLs)
If a website exceeds 50,000 URLs or 50 MB uncompressed, split URLs into multiple sitemaps linked by a master sitemap index:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-marketing.xml</loc>
    <lastmod>2026-10-14</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
    <lastmod>2026-10-14</lastmod>
  </sitemap>
</sitemapindex>
```

---

## 7. Robots.txt & Crawler Directives

Located at the website root (`https://example.com/robots.txt`). It is the first file bots request before crawling your site.

### Standard Production `robots.txt`

```txt
# Allow all standard search engines
User-agent: *
Allow: /
Disallow: /admin
Disallow: /dashboard
Disallow: /checkout
Disallow: /api/
Disallow: /auth/

# Block aggressive AI scrapers (optional, if desired)
User-agent: GPTBot
Disallow: /

# Point directly to your sitemap
Sitemap: https://example.com/sitemap.xml
```

### Rules & Gotchas for `robots.txt`
1. **`robots.txt` is NOT access control**: Never use `robots.txt` to hide private or sensitive data. Anyone can read your `robots.txt` file simply by visiting `example.com/robots.txt`. Always use real backend authentication.
2. **Do NOT block CSS / JavaScript**: Never disallow search engines from loading your `.css` or `.js` bundles. Googlebot renders pages visually; blocking assets causes Google to think your page is broken or not mobile-friendly.

---

## 8. Semantic HTML & Content Hierarchy

Search engine algorithms prioritize semantic markup over generic `<div>` soup.

```html
<!-- BAD: Non-semantic div soup -->
<div class="header">
  <div class="logo">Acme</div>
  <div class="links"><a href="/about">About</a></div>
</div>
<div class="big-text">Cloud Infrastructure</div>

<!-- GOOD: Clean HTML5 Semantics -->
<header>
  <a href="/" aria-label="Acme Home">Acme</a>
  <nav aria-label="Main Navigation">
    <ul>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Cloud Infrastructure Designed for Scale</h1>
    <section>
      <h2>Zero-Downtime Deployments</h2>
      <p>Content explaining zero-downtime mechanisms...</p>
    </section>
  </article>
</main>
<footer>
  <p>© 2026 Acme Inc.</p>
</footer>
```

### Heading Hierarchy Rules (`<h1>` to `<h6>`)
1. **Exactly one `<h1>` per page**: Represents the primary topic of the document.
2. **Never skip levels**: Do not jump from `<h1>` directly to `<h4>`. Nest sequentially (`<h1>` -> `<h2>` -> `<h3>`).
3. **Keywords in headings**: Headings carry significantly more ranking weight than body paragraphs.

---

## 9. Image SEO & Asset Optimization

Search engines evaluate images for accessibility, page speed, and image search ranking.

### Best Practice Implementation

```html
<picture>
  <!-- Modern Next-Gen Formats -->
  <source srcset="/images/hero-device.avif" type="image/avif" />
  <source srcset="/images/hero-device.webp" type="image/webp" />
  
  <!-- Fallback with explicit sizing and descriptive alt text -->
  <img 
    src="/images/hero-device.jpg" 
    alt="MacBook Pro displaying Acme cloud telemetry dashboard with real-time server metrics"
    width="1200" 
    height="675" 
    loading="lazy" 
    decoding="async"
    class="responsive-hero-img"
  />
</picture>
```

### Key Principles
1. **Descriptive `alt` text**: Describe the content and function of the image. Screen readers and search bots rely on this.
2. **Explicit `width` and `height`**: Prevents **Cumulative Layout Shift (CLS)** by allowing the browser to calculate the image aspect ratio before the file downloads.
3. **`loading="lazy"`**: Defer off-screen images until the user scrolls near them. (Note: Never lazy-load your primary above-the-fold hero image, as this harms Largest Contentful Paint).

---

## 10. Single Page Applications (SPAs) vs SSR / SSG

When building applications with React, Vue, Svelte, or Angular:

### The Problem with Pure Client-Side Rendering (CSR)
In a pure CSR app, the server returns an empty HTML shell (`<div id="root"></div>`). JavaScript runs client-side to fetch data and construct the DOM.
- **Googlebot**: Googlebot executes JavaScript, but it puts dynamic rendering into a deferred queue, leading to indexing delays.
- **Social Media Crawlers**: Scrapers for Twitter, LinkedIn, WhatsApp, and iMessage **do not execute JavaScript**. If your metadata is injected purely via client-side JavaScript, social shares may show a blank preview or the default title.

### Solution Pattern: Reusable Dynamic SEO Helper
If running client-side, manage metadata cleanly on route mount using a centralized utility:

```typescript
// utils/seo.ts
interface PageSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

export function updatePageSEO({ title, description, canonicalUrl, ogImage }: PageSEOProps) {
  // 1. Update Title
  document.title = title;

  // 2. Helper to set/update meta tags
  const setMeta = (nameOrProperty: string, content: string, isOG = false) => {
    const attribute = isOG ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, nameOrProperty);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  // 3. Update Standard Meta
  setMeta('description', description);
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:url', canonicalUrl, true);
  if (ogImage) {
    setMeta('og:image', ogImage, true);
    setMeta('twitter:image', ogImage);
  }
  setMeta('twitter:card', 'summary_large_image');

  // 4. Update Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
}
```

---

## 11. Core Web Vitals & Technical Performance

Google directly incorporates user experience and performance into ranking through **Core Web Vitals**:

```
┌─────────────────────────────────┐
│ LCP (Largest Contentful Paint)  │  < 2.5 seconds  (Loading Speed)
├─────────────────────────────────┤
│ INP (Interaction to Next Paint) │  < 200 ms       (Interactivity & Responsiveness)
├─────────────────────────────────┤
│ CLS (Cumulative Layout Shift)   │  < 0.1 score    (Visual Stability)
└─────────────────────────────────┘
```

- **Optimize LCP**: Preload hero fonts (`<link rel="preload">`), compress primary hero imagery, and avoid render-blocking scripts in `<head>`.
- **Optimize INP**: Avoid heavy main-thread JavaScript tasks exceeding 50ms. Split chunks with dynamic `import()`.
- **Optimize CLS**: Set explicit dimensions (`width`, `height`, or CSS `aspect-ratio`) on images, videos, embeds, and banner ads.

---

## 12. Internationalization & Multi-Language (`hreflang`)

If your website serves content in multiple languages or localized for specific countries:

```html
<link rel="alternate" hreflang="en" href="https://example.com/pricing" />
<link rel="alternate" hreflang="es" href="https://example.com/es/pricing" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/pricing" />
<link rel="alternate" hreflang="x-default" href="https://example.com/pricing" />
```

- `hreflang="x-default"`: The fallback destination for visitors whose language does not match any specified translation.

---

## 13. Auditing, Testing & Verification Tools

Always test your SEO before pushing to production:

| Category | Recommended Tool | Purpose |
| :--- | :--- | :--- |
| **Social Previews** | [OpenGraph.xyz](https://www.opengraph.xyz) | Live preview across Twitter, LinkedIn, Facebook, Slack. |
| **Rich Snippets** | [Google Rich Results Test](https://search.google.com/test/rich-results) | Validates JSON-LD structured data and schema markup. |
| **Page Speed & SEO** | Chrome DevTools Lighthouse | Automated audit giving a score out of 100 for SEO, Accessibility, and Performance. |
| **Site Health & Indexing** | [Google Search Console](https://search.google.com/search-console) | Real-world coverage reports, index status, and crawl errors. |
| **Crawler Simulation** | Screaming Frog SEO Spider | Desktop crawler simulating search engine spider visits across every internal link. |

---

## 14. Pre-Launch Production Checklist

Run through this checklist on every new page before deploying:

- [ ] **Title Tag**: Is it between 50–60 characters, distinct, and descriptive?
- [ ] **Meta Description**: Is it between 140–160 characters with a clear value proposition?
- [ ] **Canonical Link**: Is there a single absolute canonical URL pointing to the master page?
- [ ] **Open Graph Meta**: Are `og:title`, `og:description`, `og:image`, and `og:url` present with absolute URLs?
- [ ] **Social Image**: Is the image at least 1200×630px and reachable publicly over HTTPS?
- [ ] **Semantic Heading**: Is there exactly one `<h1>` containing the core topic?
- [ ] **Image Alt Tags**: Does every `<img>` have meaningful, descriptive alternative text?
- [ ] **Robots Directives**: Are private routes (`/admin`, `/app`) protected with `noindex` or disallowed in `robots.txt`?
- [ ] **Sitemap Update**: Is the new public route added to `sitemap.xml` with proper priority and ISO date?
- [ ] **Performance Verification**: Does Lighthouse report an SEO score of 100 with zero layout shifts?

---

## 15. Using AI Coding Agents for SEO: Antigravity, Claude & Codex

Modern software engineering relies on autonomous and interactive AI coding agents (**Google Antigravity**, **Claude Code**, **OpenAI Codex / Copilot**). These tools excel at technical SEO because SEO is deterministic, code-driven, and rule-based.

Instead of writing boilerplate metadata or manually updating 200 lines of XML sitemaps, you can delegate these repetitive workflows to your agent.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   HOW CODING AGENTS ACCELERATE SEO                     │
│                                                                        │
│  [ Antigravity ]  ──► Live browser execution, DOM extraction,           │
│                       visual rendering tests & Playwright validation   │
│  [ Claude Code ]  ──► Whole-repo AST sweeps, git-aware refactors,       │
│                       and terminal-driven audit automation             │
│  [ Codex/Copilot] ──► Instant type-safe JSX schema generation,          │
│                       props completion, and inline metadata typing     │
└────────────────────────────────────────────────────────────────────────┘
```

---

### A. Platform Breakdown & When to Use Which

#### 1. Google Antigravity (AGY)
- **Best For**: **Live DOM validation, browser execution & visual verification.**
- **Superpower**: Antigravity can launch a headless browser subagent (via Playwright or Chrome CDP), navigate to your local dev server (`http://localhost:3000`), inspect `<head>` elements dynamically injected by JavaScript, verify Open Graph previews, and run Lighthouse performance audits directly.
- **Example Use Case**: Verifying that a React SPA actually updates `document.title` and canonical tags when changing routes client-side.

#### 2. Claude Code (Anthropic)
- **Best For**: **Codebase-wide refactoring, script execution, and git reviews.**
- **Superpower**: High-context terminal tool use (`grep`, `glob`, `edit`). Claude Code can sweep 100+ route files in seconds, identify routes missing canonical tags, generate matching `sitemap.xml` entries, and stage clean atomic git commits.
- **Example Use Case**: Auditing an entire repo to ensure every image has an `alt` attribute and explicit `width`/`height`.

#### 3. OpenAI Codex / GitHub Copilot
- **Best For**: **Inline TypeScript typing, JSON-LD Schema generation, and component props.**
- **Superpower**: Predictive token generation directly in your IDE while you write React/Vue components.
- **Example Use Case**: Instantly auto-completing complex Schema.org TypeScript interfaces and JSON-LD markup without looking up documentation.

---

### B. 5 High-Impact Agent Workflows (with Copy-Paste Prompts)

Here are production-ready prompt recipes junior developers can run directly with any coding agent:

---

#### Workflow 1: The Full-Repo Metadata Audit
> **Objective**: Find all pages missing `<title>`, `<meta name="description">`, or canonical tags.

**Prompt to Agent**:
```text
Run an SEO metadata audit across all page and route components in this repository.
1. Scan every route file and check if it sets:
   - Unique title tag (50-60 characters)
   - Meta description (140-160 characters)
   - Canonical URL link
   - Open Graph tags (og:title, og:description, og:image, og:url)
2. Produce a markdown table summarizing findings:
   | Route / File | Title Status | Description Status | Canonical Status | Open Graph |
3. For any missing or incomplete metadata, propose concrete code fixes using our project's established SEO pattern.
```

---

#### Workflow 2: Automated XML Sitemap Synchronization
> **Objective**: Keep `sitemap.xml` 100% in sync with your router without manual copy-paste errors.

**Prompt to Agent**:
```text
Inspect our routing configuration (e.g., App.tsx / routes directory).
1. Extract all public, indexable routes.
2. Filter out private/authenticated routes (e.g., /admin, /dashboard, /auth, /checkout).
3. Compare the list against public/sitemap.xml:
   - Identify any missing routes.
   - Assign appropriate priorities (1.0 for homepage, 0.9 for core products, 0.8 for solutions, 0.7 for secondary features).
   - Update <lastmod> to today's date in YYYY-MM-DD format.
4. Update public/sitemap.xml cleanly and run tests to verify no syntax errors.
```

---

#### Workflow 3: Structured Data (JSON-LD) Generation
> **Objective**: Add rich-result Schema.org structured data to a product, article, or FAQ page.

**Prompt to Agent**:
```text
Look at src/pages/PricingPage.tsx and its FAQ section.
1. Extract all FAQ questions and answers.
2. Generate valid Schema.org FAQPage JSON-LD.
3. Inject the structured data cleanly into the page using a <script type="application/ld+json"> tag.
4. Validate that all strings are escaped, dates are in ISO 8601, and no required Schema.org fields are missing.
```

---

#### Workflow 4: Live DOM & Social Unfurl Verification (Antigravity Browser Agent)
> **Objective**: Verify that client-side SPA routing actually updates `<head>` tags in the real DOM.

**Prompt to Agent**:
```text
Using your browser subagent or Playwright tool:
1. Navigate to http://localhost:5180/pricing.
2. Inspect the document <head> and extract:
   - document.title
   - meta[name="description"]
   - link[rel="canonical"]
   - All meta[property^="og:"] tags
   - meta[name="twitter:card"]
3. Click a link in the navigation to go to /about.
4. Verify that the <head> tags updated dynamically and the canonical link matches the new route without full page refresh.
5. Report any stale tags or missing attributes.
```

---

#### Workflow 5: Image SEO & Core Web Vitals Optimization Sweep
> **Objective**: Eliminate layout shifts (CLS) and missing alt texts across all marketing templates.

**Prompt to Agent**:
```text
Perform an image SEO and layout-shift audit:
1. Grep for all <img> tags in src/.
2. Check for:
   - Missing or generic alt attributes (e.g. alt="image", alt="hero").
   - Missing explicit width and height attributes (which cause Cumulative Layout Shift).
   - Missing loading="lazy" on below-the-fold images.
3. For any non-WebP/AVIF images in public/, suggest or run a sharp/imagemin conversion script.
4. Apply the fixes directly to the affected components.
```

---

### C. Enforcing SEO Rules Permanently in Agent Instructions

To prevent coding agents from ever generating pages without proper SEO, add permanent rules to your repository's agent configuration file (`AGENTS.md`, `CLAUDE.md`, or `.cursorrules`):

```markdown
<!-- Put this in AGENTS.md or CLAUDE.md -->

## SEO & Metadata Quality Standards
Whenever you create or modify a page/route component:
1. **Never ship an untitled page**: Every route must specify a distinct `document.title` following the pattern: `<Page Title> — <Context> | <Brand>`.
2. **Always include a Meta Description**: 140–160 characters, active voice, describing user benefit.
3. **Always set a Canonical Link**: Absolute URL with `https://`, matching the current route without query parameters.
4. **Open Graph Fidelity**: Include `og:title`, `og:description`, `og:url`, `og:type`, and a 1200×630px `og:image`.
5. **Single H1 Rule**: Every page must have exactly one `<h1>`. Do not nest multiple `<h1>` tags inside cards or sidebars.
6. **Images Must Be Layout-Safe**: All `<img>` tags must include descriptive `alt` text and explicit `width` & `height` attributes to prevent CLS.
7. **Sitemap Sync**: If adding a new public route, immediately add its entry to `public/sitemap.xml` with appropriate priority.
```

---

### D. Junior Developer Cheat Sheet: Working With Coding Agents

| What You Want Done | Best Prompt Technique |
| :--- | :--- |
| **New Landing Page** | *"Implement the landing page at `/new-feature` using our existing design system. Include full SEO metadata (title, meta description, canonical, OG tags, and add it to `sitemap.xml`)."* |
| **Fix Broken Social Previews** | *"Social previews on LinkedIn show the homepage title instead of the blog title when sharing `/blog/xyz`. Check our `<head>` update logic and fix the bug."* |
| **Schema Validation** | *"Review this JSON-LD schema against the Schema.org specification for `SoftwareApplication`. Point out any missing recommended fields and fix them."* |
| **Performance Audit** | *"Run a Lighthouse audit via CLI on `/` and `/pricing`. Fix the top 2 issues causing Largest Contentful Paint (LCP) delays."* |

