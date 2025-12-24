import { MetadataRoute } from "next";
import client from "@/app/utils/mongodb";

const BASE_URL = "https://hexbox.money";

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/campaigns", priority: 0.9, changeFrequency: "hourly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/campaign/create",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  { path: "/search", priority: 0.7, changeFrequency: "daily" as const },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terms-and-conditions",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

async function getAllCampaigns() {
  try {
    const db = client.db(process.env.HEXBOX_DB);
    const campaigns = await db
      .collection("campaigns")
      .find(
        { status: { $in: ["active", "verified", "finalized"] } },
        {
          projection: {
            _id: 1,
            created_timestamp: 1,
            title: 1,
          },
        }
      )
      .toArray();
    return campaigns;
  } catch (error) {
    console.error("Error fetching campaigns for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Generate static page entries
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Generate dynamic campaign entries
  const campaigns = await getAllCampaigns();
  const campaignEntries: MetadataRoute.Sitemap = campaigns.map((campaign) => ({
    url: `${BASE_URL}/campaign?campaignId=${campaign._id.toString()}`,
    lastModified: campaign.created_timestamp
      ? new Date(campaign.created_timestamp)
      : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...campaignEntries];
}
