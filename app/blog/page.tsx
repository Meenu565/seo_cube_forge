import type { Metadata } from "next";
import Script from "next/script";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Engineering & AI Content Architecture Blog | CubeForgeLabs",
  description:
    "Insights, technical breakdowns, and deep-dives on multi-agent AI systems, omni-channel publishing workflows, and generative video architecture.",
  alternates: {
    canonical: "https://cubeforgelabs.com/blog",
  },
  openGraph: {
    title: "Engineering & AI Content Architecture Blog | CubeForgeLabs",
    description:
      "Deep-dives into multi-agent systems, autonomous content generation pipelines, and omni-channel distribution.",
    url: "https://cubeforgelabs.com/blog",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Engineering & Product Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & AI Content Architecture Blog | CubeForgeLabs",
    description:
      "Deep-dives into multi-agent systems, autonomous content generation pipelines, and omni-channel distribution.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CubeForgeLabs Architecture & Engineering Blog",
    "description": "Insights, technical breakdowns, and guides on autonomous AI content pipelines.",
    "url": "https://cubeforgelabs.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "CubeForgeLabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cubeforgelabs.com/cubeforgelabs_logo_darkmode.png"
      }
    }
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogClient />
    </>
  );
}
