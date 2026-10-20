import type { Metadata } from "next";
import AutoPublishingClient from "./AutoPublishingClient";

export const metadata: Metadata = {
  title: "Multi-Network Auto-Publishing Engine | CubeForgeLabs",
  description:
    "Schedule and publish directly to LinkedIn, X, Instagram, and YouTube Shorts with authenticated APIs and peak engagement timezone optimization.",
  alternates: {
    canonical: "https://cubeforgelabs.com/auto-publishing",
  },
  openGraph: {
    title: "Multi-Network Auto-Publishing Engine | CubeForgeLabs",
    description:
      "One-click verified API publishing across all social networks with peak engagement timing.",
    url: "https://cubeforgelabs.com/auto-publishing",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Auto-Publishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Network Auto-Publishing Engine | CubeForgeLabs",
    description:
      "One-click verified API publishing across all social networks with peak engagement timing.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function AutoPublishingPage() {
  return <AutoPublishingClient />;
}
