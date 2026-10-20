import type { Metadata } from "next";
import Script from "next/script";
import AppShell from "@/components/AppShell";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://cubeforgelabs.com"),
  title: {
    default: "CubeForgeLabs — AI Content Platform & Autonomous Multi-Agent Teams",
    template: "%s | CubeForgeLabs",
  },
  description:
    "CubeForgeLabs is the unified AI content platform for ideation, drafting, and publishing across every channel.",
  applicationName: "CubeForgeLabs",
  authors: [{ name: "CubeForgeLabs Private Limited", url: "https://cubeforgelabs.com" }],
  creator: "CubeForgeLabs",
  publisher: "CubeForgeLabs Private Limited",
  keywords: [
    "AI content platform",
    "autonomous AI agents",
    "video ad generator",
    "SEO blog writer",
    "social media auto-publishing",
    "content pipeline automation",
    "CubeForgeLabs",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cubeforgelabs.com",
    siteName: "CubeForgeLabs",
    title: "CubeForgeLabs — AI Content Platform & Autonomous Multi-Agent Teams",
    description:
      "Automate your entire content pipeline. Generate viral video ads and high-ranking SEO blogs from a single prompt with CubeForgeLabs.",
    images: [
      {
        url: "/cubeforgelabs_logo_darkmode.png",
        width: 1200,
        height: 630,
        alt: "CubeForgeLabs — Unified AI Content Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CubeForgeLabs — AI Content Platform & Autonomous Multi-Agent Teams",
    description:
      "Automate your entire content pipeline. Generate viral video ads and high-ranking SEO blogs from a single prompt.",
    images: ["/cubeforgelabs_logo_darkmode.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans")} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cubeforgelabs.com/#organization",
                  "name": "CubeForgeLabs Private Limited",
                  "alternateName": "CubeForgeLabs",
                  "url": "https://cubeforgelabs.com",
                  "logo": "https://cubeforgelabs.com/cubeforgelabs_logo_darkmode.png",
                  "email": "info@cubeforgelabs.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "No 61, 3rd Floor, Estate 3rd Cross Rd, Developed Plots, Industrial Estate, Perungudi",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600096",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "info@cubeforgelabs.com",
                    "contactType": "customer service"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cubeforgelabs.com/#website",
                  "url": "https://cubeforgelabs.com",
                  "name": "CubeForgeLabs",
                  "publisher": {
                    "@id": "https://cubeforgelabs.com/#organization"
                  }
                }
              ]
            })
          }}
        />
        <Script
          id="chunk-error-reload"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e && e.message && (e.message.indexOf('ChunkLoadError') !== -1 || e.message.indexOf('Loading chunk') !== -1)) {
                  console.warn('ChunkLoadError detected, automatically reloading page to fetch latest chunks...');
                  window.location.reload();
                }
              });
            `
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
