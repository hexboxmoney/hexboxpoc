import { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import { BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy - Hexbox Data Protection",
  description:
    "Learn how Hexbox protects your privacy and handles your data. Our privacy policy covers data collection, blockchain data handling, GDPR compliance, and your rights as a user of our blockchain crowdfunding platform.",
  keywords: [
    "hexbox privacy policy",
    "blockchain privacy",
    "crowdfunding data protection",
    "GDPR compliance",
    "crypto platform privacy",
    "web3 data security",
    "avalanche privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Hexbox Data Protection",
    description:
      "Learn how Hexbox protects your privacy on our blockchain crowdfunding platform. GDPR compliant data handling.",
    url: "https://hexbox.money/privacy-policy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy - Hexbox",
    description:
      "Learn how Hexbox protects your privacy on our blockchain crowdfunding platform.",
  },
  alternates: {
    canonical: "https://hexbox.money/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PrivacyPolicyContent />
    </>
  );
}
