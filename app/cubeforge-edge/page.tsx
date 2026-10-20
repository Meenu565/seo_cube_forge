import type { Metadata } from "next";
import CubeforgeEdgeClient from "./CubeforgeEdgeClient";

export const metadata: Metadata = {
  title: "CubeForge Edge — Sovereign Enterprise AI Runtime | CubeForgeLabs",
  description:
    "Deploy autonomous content agent runtimes on sovereign VPC clusters or on-premises infrastructure with guaranteed zero data leakage and sub-second generation.",
  alternates: {
    canonical: "https://cubeforgelabs.com/cubeforge-edge",
  },
  openGraph: {
    title: "CubeForge Edge — Sovereign Enterprise AI Runtime | CubeForgeLabs",
    description:
      "Explore AI closer to your infrastructure. Sovereign containers, private VPC clusters, and guaranteed zero data leakage.",
    url: "https://cubeforgelabs.com/cubeforge-edge",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForge Edge Enterprise Runtime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CubeForge Edge — Sovereign Enterprise AI Runtime | CubeForgeLabs",
    description:
      "Sovereign containers, private VPC clusters, and guaranteed zero data leakage.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function CubeforgeEdgePage() {
  return <CubeforgeEdgeClient />;
}
