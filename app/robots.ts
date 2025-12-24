import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hexbox.money";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/profile/",
          "/executor/",
          "/campaign/update/",
          "/create-product/",
          "/product/",
          "/_next/",
          "/thank-you/",
        ],
      },
      // Block common bad bots
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
