import type { Metadata } from "next";
import PrivacyPolicyPage from "../privacy-policy/page";

export const metadata: Metadata = {
  title: "Privacy Policy | CubeForgeLabs",
  description: "Learn how CubeForgeLabs protects your data.",
  alternates: {
    canonical: "https://cubeforgelabs.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default PrivacyPolicyPage;
