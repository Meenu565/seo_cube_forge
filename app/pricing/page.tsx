import type { Metadata } from "next";
import Script from "next/script";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing Plans & Tier Economics | CubeForgeLabs",
  description:
    "Transparent, value-aligned pricing for autonomous content operations. Explore Starter, Pro Engine, and Enterprise plans with zero setup fees.",
  alternates: {
    canonical: "https://cubeforgelabs.com/pricing",
  },
  openGraph: {
    title: "Pricing Plans & Tier Economics | CubeForgeLabs",
    description:
      "Pay for shipped campaigns, not headcount. Explore Starter, Pro Engine, and custom Enterprise content operations.",
    url: "https://cubeforgelabs.com/pricing",
    siteName: "CubeForgeLabs",
    type: "website",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans & Tier Economics | CubeForgeLabs",
    description:
      "Pay for shipped campaigns, not headcount. Explore Starter, Pro Engine, and custom Enterprise content operations.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CubeForgeLabs Content Engine",
    "description": "Autonomous multi-agent platform for video ads, SEO blogs, and omni-channel campaigns.",
    "brand": {
      "@type": "Brand",
      "name": "CubeForgeLabs"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "49",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://cubeforgelabs.com/pricing"
      },
      {
        "@type": "Offer",
        "name": "Pro Engine",
        "price": "149",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://cubeforgelabs.com/pricing"
      }
    ]
  };

  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingClient />
    </>
  );
}
