import type { Metadata } from "next";
import DocAgentsClient from "./DocAgentsClient";

export const metadata: Metadata = {
  title: "Doc Agents — Research-Led Long-Form Writing | CubeForgeLabs",
  description:
    "Generate comprehensive 1,500+ word articles, research briefs, and whitepapers. Export clean PDF, DOCX, and HTML copies or publish directly to Substack.",
  alternates: {
    canonical: "https://cubeforgelabs.com/doc-agents",
  },
  openGraph: {
    title: "Doc Agents — Research-Led Long-Form Writing | CubeForgeLabs",
    description:
      "Generate comprehensive 1,500+ word articles, research briefs, and whitepapers with automated Substack and multi-format exports.",
    url: "https://cubeforgelabs.com/doc-agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Doc Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doc Agents — Research-Led Long-Form Writing | CubeForgeLabs",
    description:
      "Generate comprehensive 1,500+ word articles and whitepapers with multi-format export.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function DocAgentsPage() {
  return <DocAgentsClient />;
}
