import { Metadata } from "next";
import { HowToJsonLd, BreadcrumbJsonLd } from "@/app/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Create Campaign - Launch Your Blockchain Crowdfunding Project",
  description:
    "Start your blockchain crowdfunding campaign on Hexbox. Launch on Avalanche C-Chain with smart contract escrow, NFT tickets, and flexible funding options. Create campaigns for products, services, or donations.",
  keywords: [
    "create crowdfunding campaign",
    "launch blockchain project",
    "start crypto fundraising",
    "avalanche crowdfunding",
    "blockchain project funding",
    "NFT crowdfunding campaign",
    "web3 fundraising",
    "hexbox campaign",
    "smart contract fundraising",
  ],
  openGraph: {
    title: "Create Campaign - Launch Your Project on Hexbox",
    description:
      "Start your blockchain crowdfunding campaign on Avalanche C-Chain with smart contract security and NFT-backed investments.",
    url: "https://hexbox.money/campaign/create",
    type: "website",
  },
  twitter: {
    title: "Create a Blockchain Crowdfunding Campaign | Hexbox",
    description:
      "Launch your project on Avalanche with smart contract escrow and NFT tickets.",
  },
  alternates: {
    canonical: "https://hexbox.money/campaign/create",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreateCampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Create Campaign", href: "/campaign/create" },
  ];

  const howToSteps = [
    {
      name: "Connect Your Wallet",
      text: "Connect your Web3 wallet (MetaMask, WalletConnect, etc.) to authenticate and sign transactions on Avalanche C-Chain.",
    },
    {
      name: "Fill Campaign Details",
      text: "Enter your campaign title, description, funding goal, deadline, and upload your logo. Add social links for credibility.",
    },
    {
      name: "Choose Funding Type",
      text: "Select between All-or-Nothing, Flexible, or Limitless funding models based on your project needs.",
    },
    {
      name: "Submit and Sign Transaction",
      text: "Review your campaign details and sign the blockchain transaction to deploy your campaign smart contract.",
    },
    {
      name: "Share and Promote",
      text: "Once live, share your campaign link and engage with potential backers to reach your funding goal.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <HowToJsonLd
        name="How to Create a Crowdfunding Campaign on Hexbox"
        description="Step-by-step guide to launching your blockchain crowdfunding campaign on Hexbox using Avalanche C-Chain."
        steps={howToSteps}
        totalTime="PT15M"
      />
      {children}
    </>
  );
}

