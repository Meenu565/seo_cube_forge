import type { Metadata } from "next";
import ResearchInsightsClient from "./ResearchInsightsClient";

export const metadata: Metadata = {
  title: "AI Research Insights & Competitor Whitespace | CubeForgeLabs",
  description:
    "Autonomous web scraping and category intelligence. Ingest context URLs and uncover market whitespace before drafting campaigns.",
  alternates: {
    canonical: "https://cubeforgelabs.com/research-insights",
  },
  openGraph: {
    title: "AI Research Insights & Competitor Whitespace | CubeForgeLabs",
    description:
      "Ingest context URLs, extract core value propositions, and uncover high-impact competitor whitespace.",
    url: "https://cubeforgelabs.com/research-insights",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Research Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research Insights & Competitor Whitespace | CubeForgeLabs",
    description:
      "Ingest context URLs and uncover high-impact competitor whitespace before writing.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function ResearchInsightsPage() {
  return <ResearchInsightsClient />;
}
