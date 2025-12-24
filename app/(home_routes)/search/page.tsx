import { Metadata } from "next";
import CampaignsContent from "@/app/components/CampaignsContent";
import { BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Search Campaigns - Find Blockchain Crowdfunding Projects",
  description:
    "Search for blockchain crowdfunding campaigns on Hexbox. Find projects by category, funding goal, or keywords across Avalanche C-Chain campaigns.",
  keywords: [
    "search crowdfunding",
    "find crypto projects",
    "blockchain campaign search",
    "avalanche projects",
    "web3 project discovery",
    "hexbox search",
  ],
  openGraph: {
    title: "Search Campaigns - Find Projects on Hexbox",
    description:
      "Search for blockchain crowdfunding campaigns. Find projects by category, funding goal, or keywords.",
    url: "https://hexbox.money/search",
    type: "website",
  },
  alternates: {
    canonical: "https://hexbox.money/search",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SearchPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Search", href: "/search" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CampaignsContent />
    </>
  );
}
