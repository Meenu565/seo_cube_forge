import type { Metadata } from "next";
import ContentAgentsClient from "./ContentAgentsClient";

export const metadata: Metadata = {
  title: "Content Agents for Multi-Channel Publishing | CubeForgeLabs",
  description:
    "Accelerate your content pipeline from research to finished copy. Specialized AI content agents craft search-ranking articles, viral hooks, and social carousels.",
  alternates: {
    canonical: "https://cubeforgelabs.com/content-agents",
  },
  openGraph: {
    title: "Content Agents for Multi-Channel Publishing | CubeForgeLabs",
    description:
      "A clearer path from idea to publishable content. Multi-agent teams craft high-ranking blogs and omni-channel campaigns.",
    url: "https://cubeforgelabs.com/content-agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Content Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Agents for Multi-Channel Publishing | CubeForgeLabs",
    description:
      "A clearer path from idea to publishable content with specialized AI content agents.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function ContentAgentsPage() {
  return <ContentAgentsClient />;
}
