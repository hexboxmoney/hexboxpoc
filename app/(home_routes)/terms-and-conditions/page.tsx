import { Metadata } from "next";
import TermsAndConditionsContent from "./TermsAndConditionsContent";
import { BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Terms and Conditions - Hexbox Platform Agreement",
  description:
    "Read the terms and conditions for using Hexbox blockchain crowdfunding platform. Understand your rights and responsibilities as an executor or investor on Avalanche C-Chain.",
  keywords: [
    "hexbox terms",
    "crowdfunding terms and conditions",
    "blockchain platform agreement",
    "crypto crowdfunding rules",
    "web3 platform terms",
    "avalanche terms of service",
    "executor terms",
    "investor terms",
  ],
  openGraph: {
    title: "Terms and Conditions - Hexbox Platform Agreement",
    description:
      "Read the terms and conditions for using Hexbox blockchain crowdfunding platform on Avalanche.",
    url: "https://hexbox.money/terms-and-conditions",
    type: "website",
  },
  twitter: {
    title: "Terms and Conditions - Hexbox",
    description:
      "Terms for executors and investors using Hexbox blockchain crowdfunding platform.",
  },
  alternates: {
    canonical: "https://hexbox.money/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TermsAndConditionsContent />
    </>
  );
}
