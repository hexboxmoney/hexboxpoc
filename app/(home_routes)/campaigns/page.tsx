import { Metadata } from "next";
import CampaignsContent from "@/app/components/CampaignsContent";
import { BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Explore Campaigns - Discover Blockchain Crowdfunding Projects",
  description:
    "Browse active blockchain crowdfunding campaigns on Hexbox. Find innovative projects to back on Avalanche C-Chain with smart contract security, NFT rewards, and refundable investments.",
  keywords: [
    "crowdfunding campaigns",
    "blockchain projects",
    "crypto crowdfunding",
    "avalanche projects",
    "web3 campaigns",
    "NFT crowdfunding projects",
    "invest in crypto projects",
    "decentralized fundraising campaigns",
    "hexbox campaigns",
  ],
  openGraph: {
    title: "Explore Campaigns - Blockchain Crowdfunding on Hexbox",
    description:
      "Browse active blockchain crowdfunding campaigns. Find innovative projects with smart contract security and NFT rewards on Avalanche.",
    url: "https://hexbox.money/campaigns",
    type: "website",
  },
  twitter: {
    title: "Explore Blockchain Crowdfunding Campaigns | Hexbox",
    description:
      "Discover innovative projects to back on Avalanche C-Chain with smart contract security and NFT rewards.",
  },
  alternates: {
    canonical: "https://hexbox.money/campaigns",
  },
};

export default async function CampaignsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Campaigns", href: "/campaigns" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CampaignsContent />
    </>
  );
}
