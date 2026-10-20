import type { Metadata } from "next";
import HashtagsGeneratorClient from "./HashtagsGeneratorClient";

export const metadata: Metadata = {
  title: "Smart Hashtag Generator & Algorithmic Tagging | CubeForgeLabs",
  description:
    "Generate platform-native hashtags for LinkedIn, Instagram, TikTok, and X. Categorized by volume, reach, and niche relevance for maximum organic discovery.",
  alternates: {
    canonical: "https://cubeforgelabs.com/hashtags-generator",
  },
  openGraph: {
    title: "Smart Hashtag Generator & Algorithmic Tagging | CubeForgeLabs",
    description:
      "Context-aware hashtags that maximize reach across TikTok, Instagram, LinkedIn, and X.",
    url: "https://cubeforgelabs.com/hashtags-generator",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Hashtags Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Hashtag Generator & Algorithmic Tagging | CubeForgeLabs",
    description:
      "Context-aware hashtags that maximize reach across TikTok, Instagram, LinkedIn, and X.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function HashtagsGeneratorPage() {
  return <HashtagsGeneratorClient />;
}
