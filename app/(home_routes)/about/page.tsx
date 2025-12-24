import { Metadata } from "next";
import About from "@/app/components/About";
import Team from "@/app/components/ui/Team";
import OurStory from "@/app/components/ui/OurStory";
import { BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About Us - Meet the Hexbox Team",
  description:
    "Learn about Hexbox, the blockchain crowdfunding platform on Avalanche C-Chain. Meet our team, discover our mission, and see how we're revolutionizing decentralized fundraising with smart contracts and NFT-backed investments.",
  keywords: [
    "hexbox team",
    "about hexbox",
    "blockchain crowdfunding team",
    "avalanche crowdfunding",
    "web3 startup",
    "decentralized fundraising platform",
    "hexbox money",
  ],
  openGraph: {
    title: "About Us - Meet the Hexbox Team",
    description:
      "Learn about Hexbox, the blockchain crowdfunding platform revolutionizing decentralized fundraising on Avalanche C-Chain.",
    url: "https://hexbox.money/about",
    type: "website",
  },
  twitter: {
    title: "About Hexbox - Blockchain Crowdfunding Team",
    description:
      "Meet the team behind Hexbox, revolutionizing crowdfunding with blockchain technology on Avalanche.",
  },
  alternates: {
    canonical: "https://hexbox.money/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Team />
      <OurStory />
      <About />
    </div>
  );
}
