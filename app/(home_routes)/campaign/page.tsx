import CampaignDetails from "@/app/components/campaign/CampaignDetails";
import { fetchSingleCampaign } from "@/app/utils/apiHelpers";
import { getProducts } from "@/app/utils/poc_utils/getProducts";
import { Metadata, ResolvingMetadata } from "next";
import { getPublicCampaign } from "@/app/utils/campaigns";
import {
  CampaignJsonLd,
  BreadcrumbJsonLd,
} from "@/app/components/seo/StructuredData";

interface Props {
  searchParams: { campaignId: string };
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const campaignId = searchParams.campaignId;
  const campaign = await getPublicCampaign(campaignId);

  if (!campaign) {
    return {
      title: "Campaign not found",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://hexbox.money/campaign?campaignId=${campaignId}`;
  const imageUrl = `${process.env.R2_BUCKET_URL}/campaign_logos/${campaign.logo}`;

  // Create a clean description for meta tags (strip any markdown/html)
  const cleanDescription = campaign.description
    .replace(/[#*_`]/g, "")
    .slice(0, 160);

  // Keywords based on campaign data
  const campaignKeywords = [
    campaign.title,
    "blockchain crowdfunding",
    "avalanche campaign",
    "crypto fundraising",
    campaign.location || "",
    "hexbox campaign",
    "NFT investment",
  ].filter(Boolean);

  return {
    title: `${campaign.title} - Blockchain Crowdfunding Campaign`,
    description: cleanDescription,
    keywords: campaignKeywords,
    openGraph: {
      title: `${campaign.title} | Hexbox Crowdfunding`,
      description: cleanDescription,
      url: url,
      siteName: "Hexbox",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: campaign.title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${campaign.title} | Hexbox`,
      description: cleanDescription,
      images: [imageUrl],
      creator: "@hexboxmoney",
      site: "@hexboxmoney",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function CampaignPage({ searchParams }: Props) {
  const campaignId = searchParams.campaignId;
  const campaign = await getPublicCampaign(campaignId);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  if (!campaign._id) {
    return <div>Campaign ID not found {JSON.stringify(campaign)}</div>;
  }

  const plainCampaign = {
    ...(campaign as any),
    _id: campaign._id.toString(),
    created_timestamp: campaign.created_timestamp?.toISOString(),
  };
  const products = await getProducts(campaignId);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Campaigns", href: "/campaigns" },
    { name: campaign.title, href: `/campaign?campaignId=${campaignId}` },
  ];

  return (
    <div>
      {/* Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CampaignJsonLd
        id={campaignId}
        title={campaign.title}
        description={campaign.description}
        fundAmount={campaign.fund_amount}
        totalRaised={campaign.total_raised || 0}
        deadline={campaign.deadline}
        logo={campaign.logo}
        location={campaign.location}
        status={campaign.status}
      />

      <CampaignDetails {...plainCampaign} products={products} />
    </div>
  );
}
