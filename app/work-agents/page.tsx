import type { Metadata } from "next";
import WorkAgentsClient from "./WorkAgentsClient";

export const metadata: Metadata = {
  title: "Work Agents for Autonomous Operations | CubeForgeLabs",
  description:
    "A considered way to move complex marketing work forward. Orchestrate research, video production, image generation, and multi-network publishing in parallel.",
  alternates: {
    canonical: "https://cubeforgelabs.com/work-agents",
  },
  openGraph: {
    title: "Work Agents for Autonomous Operations | CubeForgeLabs",
    description:
      "Orchestrate complex campaign workflows with specialized autonomous agents operating in harmony.",
    url: "https://cubeforgelabs.com/work-agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Work Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Agents for Autonomous Operations | CubeForgeLabs",
    description:
      "Orchestrate complex campaign workflows with specialized autonomous agents operating in harmony.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function WorkAgentsPage() {
  return <WorkAgentsClient />;
}
