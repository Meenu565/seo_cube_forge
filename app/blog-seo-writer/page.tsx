import type { Metadata } from "next";
import VoiceAgentsPage from "../voice-agents/page";

export const metadata: Metadata = {
  title: "AI Blog SEO Writer & Longform Article Generator | CubeForgeLabs",
  description:
    "Autonomous SEO article generation with live search intent analysis, keyword swarms, and structured long-form drafts ready to rank.",
  alternates: {
    canonical: "https://cubeforgelabs.com/blog-seo-writer",
  },
  openGraph: {
    title: "AI Blog SEO Writer & Longform Article Generator | CubeForgeLabs",
    description:
      "Autonomous SEO article generation with live search intent analysis and structured long-form drafts.",
    url: "https://cubeforgelabs.com/blog-seo-writer",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Blog SEO Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blog SEO Writer & Longform Article Generator | CubeForgeLabs",
    description:
      "Autonomous SEO article generation with live search intent analysis and structured drafts.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function BlogSEOWriterPage() {
  return <VoiceAgentsPage />;
}
