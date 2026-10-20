import type { Metadata } from "next";
import PriceBreakdownClient from "./PriceBreakdownClient";

export const metadata: Metadata = {
  title: "Spend Analytics & Price Breakdown | CubeForgeLabs",
  description:
    "Know exactly where your AI budget goes. Track token spend, image costs, and video generation economics per platform in real time.",
  alternates: {
    canonical: "https://cubeforgelabs.com/price-breakdown",
  },
  openGraph: {
    title: "Spend Analytics & Price Breakdown | CubeForgeLabs",
    description:
      "Real-time cost telemetry down to fractions of a cent per post. Break down generation costs by platform and campaign.",
    url: "https://cubeforgelabs.com/price-breakdown",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Spend Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spend Analytics & Price Breakdown | CubeForgeLabs",
    description:
      "Real-time cost telemetry down to fractions of a cent per post across all platforms.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function PriceBreakdownPage() {
  return <PriceBreakdownClient />;
}
