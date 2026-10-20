import type { Metadata } from "next";
import TermsOfServicePage from "../terms-of-service/page";

export const metadata: Metadata = {
  title: "Terms of Service | CubeForgeLabs",
  description: "Read the Terms of Service governing access to CubeForgeLabs.",
  alternates: {
    canonical: "https://cubeforgelabs.com/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default TermsOfServicePage;
