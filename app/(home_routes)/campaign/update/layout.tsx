import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Campaign - Edit Your Hexbox Project",
  description:
    "Update and manage your blockchain crowdfunding campaign on Hexbox. Edit campaign details, update your description, and keep your backers informed.",
  keywords: [
    "update crowdfunding campaign",
    "edit blockchain project",
    "manage crypto fundraising",
    "hexbox campaign management",
  ],
  openGraph: {
    title: "Update Campaign - Edit Your Hexbox Project",
    description:
      "Manage and update your blockchain crowdfunding campaign on Hexbox.",
    url: "https://hexbox.money/campaign/update",
    type: "website",
  },
  robots: {
    index: false, // Don't index update pages
    follow: false,
  },
};

export default function UpdateCampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

