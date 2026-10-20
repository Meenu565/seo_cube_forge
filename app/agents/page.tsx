import type { Metadata } from "next";
import AgentsClient from "./AgentsClient";

export const metadata: Metadata = {
  title: "Six Autonomous AI Agents, One Content Pipeline | CubeForgeLabs",
  description:
    "Meet Cato, Vela, Orin, Iris, Kade, and Nova: specialized AI agents collaborating from research and strategy to video assembly and multi-network publishing.",
  alternates: {
    canonical: "https://cubeforgelabs.com/agents",
  },
  openGraph: {
    title: "Six Autonomous AI Agents, One Content Pipeline | CubeForgeLabs",
    description:
      "Experience the precision of an orchestrated AI workforce. From raw data acquisition to finalized global rollout.",
    url: "https://cubeforgelabs.com/agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Autonomous AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Six Autonomous AI Agents, One Content Pipeline | CubeForgeLabs",
    description:
      "Meet the 6 specialized AI agents running your entire content production floor.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function AgentsPage() {
  return <AgentsClient />;
}
