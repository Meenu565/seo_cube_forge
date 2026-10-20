import type { Metadata } from "next";
import VoiceAgentsClient from "./VoiceAgentsClient";

export const metadata: Metadata = {
  title: "Autonomous Voice Agents & Speech Synthesis | CubeForgeLabs",
  description:
    "Deploy hyper-realistic AI voice agents for video ads, TikTok shorts, and product walkthroughs. Studio-grade 48kHz audio synchronized directly with your timeline.",
  alternates: {
    canonical: "https://cubeforgelabs.com/voice-agents",
  },
  openGraph: {
    title: "Autonomous Voice Agents & Speech Synthesis | CubeForgeLabs",
    description:
      "Deploy hyper-realistic AI voice agents for video ads, TikTok shorts, and product walkthroughs with studio-grade 48kHz fidelity.",
    url: "https://cubeforgelabs.com/voice-agents",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Autonomous Voice Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous Voice Agents & Speech Synthesis | CubeForgeLabs",
    description:
      "Deploy hyper-realistic AI voice agents for video ads, TikTok shorts, and product walkthroughs.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function VoiceAgentsPage() {
  return <VoiceAgentsClient />;
}
