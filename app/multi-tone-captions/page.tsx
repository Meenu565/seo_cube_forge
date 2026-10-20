import type { Metadata } from "next";
import MultiToneCaptionsClient from "./MultiToneCaptionsClient";

export const metadata: Metadata = {
  title: "Multi-Tone Captions & Brand Voice Copywriting | CubeForgeLabs",
  description:
    "Generate social media captions tailored to your brand voice. Switch effortlessly between professional, witty, provocative, or educational styles.",
  alternates: {
    canonical: "https://cubeforgelabs.com/multi-tone-captions",
  },
  openGraph: {
    title: "Multi-Tone Captions & Brand Voice Copywriting | CubeForgeLabs",
    description:
      "Every format, one consistent voice. Generate viral hooks and multi-tone captions calibrated for your audience.",
    url: "https://cubeforgelabs.com/multi-tone-captions",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Multi-Tone Captions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Tone Captions & Brand Voice Copywriting | CubeForgeLabs",
    description:
      "Every format, one consistent voice. Generate viral hooks and multi-tone captions calibrated for your audience.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function MultiToneCaptionsPage() {
  return <MultiToneCaptionsClient />;
}
