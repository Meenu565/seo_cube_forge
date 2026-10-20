import type { Metadata } from "next";
import CodingAgentsClient from "./CodingAgentsClient";

export const metadata: Metadata = {
  title: "Coding Agents for Content Engineering | CubeForgeLabs",
  description:
    "Build programmatic media pipelines, CMS connectors, and API integrations with repository-aware coding agents that follow strict engineering standards.",
  alternates: {
    canonical: "https://cubeforgelabs.com/coding-agents",
  },
  openGraph: {
    title: "Coding Agents for Content Engineering | CubeForgeLabs",
    description:
      "Bring context, repository awareness, and focus to content engineering work with CubeForgeLabs Coding Agents.",
    url: "https://cubeforgelabs.com/coding-agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Coding Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Agents for Content Engineering | CubeForgeLabs",
    description:
      "Build programmatic media pipelines and API integrations with repository-aware coding agents.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function CodingAgentsPage() {
  return <CodingAgentsClient />;
}
