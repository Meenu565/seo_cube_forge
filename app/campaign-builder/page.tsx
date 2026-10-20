import type { Metadata } from "next";
import CampaignBuilderClient from "./CampaignBuilderClient";

export const metadata: Metadata = {
  title: "Autonomous Campaign Builder & Strategy Briefs | CubeForgeLabs",
  description:
    "Transform product URLs, customer feedback, and raw concepts into 30 days of coordinated omni-channel campaigns with one unified brief.",
  alternates: {
    canonical: "https://cubeforgelabs.com/campaign-builder",
  },
  openGraph: {
    title: "Autonomous Campaign Builder & Strategy Briefs | CubeForgeLabs",
    description:
      "Transform product URLs and raw ideas into coordinated 30-day omni-channel campaigns in minutes.",
    url: "https://cubeforgelabs.com/campaign-builder",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Campaign Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous Campaign Builder & Strategy Briefs | CubeForgeLabs",
    description:
      "Transform product URLs and raw ideas into coordinated 30-day omni-channel campaigns in minutes.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function CampaignBuilderPage() {
  return <CampaignBuilderClient />;
}
