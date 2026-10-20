import type { Metadata } from "next";
import AudiencePainpointsClient from "./AudiencePainpointsClient";

export const metadata: Metadata = {
  title: "Audience Painpoints & Intent Intelligence | CubeForgeLabs",
  description:
    "Uncover buyer psychology, category objections, and emotional triggers before writing. Cato maps verified audience pain points into your campaign brief.",
  alternates: {
    canonical: "https://cubeforgelabs.com/audience-painpoints",
  },
  openGraph: {
    title: "Audience Painpoints & Intent Intelligence | CubeForgeLabs",
    description:
      "Map buyer psychology and real-world friction into bulletproof messaging angles that convert.",
    url: "https://cubeforgelabs.com/audience-painpoints",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Audience Painpoints Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audience Painpoints & Intent Intelligence | CubeForgeLabs",
    description:
      "Map buyer psychology and real-world friction into bulletproof messaging angles that convert.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function AudiencePainpointsPage() {
  return <AudiencePainpointsClient />;
}
