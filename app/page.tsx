import type { Metadata } from "next";
import Script from "next/script";
import Landing from "@/components/site/Landing";

export const metadata: Metadata = {
  title: "CubeForgeLabs — Unified AI Content Platform & Multi-Agent Operations",
  description:
    "Automate your entire content pipeline. Generate viral video ads, high-ranking SEO blogs, and multi-channel campaigns from a single prompt with CubeForgeLabs.",
  alternates: {
    canonical: "https://cubeforgelabs.com",
  },
  openGraph: {
    title: "CubeForgeLabs — Unified AI Content Platform & Multi-Agent Operations",
    description:
      "Automate your entire content pipeline. Generate viral video ads and high-ranking SEO blogs from a single prompt.",
    url: "https://cubeforgelabs.com",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs — Unified AI Content Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CubeForgeLabs — Unified AI Content Platform & Multi-Agent Operations",
    description:
      "Automate your entire content pipeline. Generate viral video ads and high-ranking SEO blogs from a single prompt.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a creative team to use CubeForgeLabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The agent swarm covers research, strategy, copy, design, video preparation, and publishing. You stay in the editor-in-chief seat and approve what ships."
        }
      },
      {
        "@type": "Question",
        "name": "Whose voice do the agents write in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yours. Add a few examples of existing content and CubeForgeLabs builds a voice memory around tone, cadence, vocabulary, proof style, and calls to action."
        }
      },
      {
        "@type": "Question",
        "name": "What channels does it publish to natively?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The workflow is built for X, LinkedIn, Instagram, TikTok, YouTube, newsletters, blogs, and custom webhooks, with asset formatting handled per channel."
        }
      },
      {
        "@type": "Question",
        "name": "How is video handled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The motion agent prepares hooks, scripts, storyboards, scene beats, captions, and aspect-ratio cutdowns so video production starts from a coherent campaign system."
        }
      },
      {
        "@type": "Question",
        "name": "Can I stop or edit a campaign mid-run?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Campaigns are reviewable as boards. You can pause, branch, rewrite, approve individual assets, or ask agents to rework a specific part."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CubeForgeLabs",
    "operatingSystem": "All modern web browsers",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "description": "Unified AI content platform for ideation, drafting, and publishing across every social and editorial channel."
  };

  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="homepage-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Landing />
    </>
  );
}
