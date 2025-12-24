import Script from "next/script";

const BASE_URL = "https://hexbox.money";

// Organization Schema for the company
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Hexbox",
    alternateName: "Hexbox Money",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/hexbox_name_logo_black.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/hexbox_name_logo_black.png`,
    description:
      "Hexbox is a decentralized blockchain crowdfunding platform built on Avalanche C-Chain. Back real-world projects with smart contract security, NFT-backed investments, and refundable funding.",
    foundingDate: "2024",
    slogan: "Create. Support. Make Impact.",
    knowsAbout: [
      "Blockchain Crowdfunding",
      "Web3 Fundraising",
      "Smart Contracts",
      "NFT Investments",
      "Avalanche Blockchain",
      "Decentralized Finance",
    ],
    sameAs: [
      "https://twitter.com/hexboxmoney",
      "https://hexbox.gitbook.io/hexbox",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Website Schema for search engines
export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Hexbox",
    description:
      "Blockchain crowdfunding platform on Avalanche C-Chain with smart contract security and NFT-backed investments.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?query={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Campaign/Crowdfunding Schema
interface CampaignJsonLdProps {
  id: string;
  title: string;
  description: string;
  fundAmount: number;
  totalRaised: number;
  deadline: number;
  logo: string;
  location?: string;
  status: string;
}

export function CampaignJsonLd({
  id,
  title,
  description,
  fundAmount,
  totalRaised,
  deadline,
  logo,
  location,
  status,
}: CampaignJsonLdProps) {
  const campaignUrl = `${BASE_URL}/campaign?campaignId=${id}`;
  const imageUrl = logo.startsWith("http")
    ? logo
    : `${process.env.R2_BUCKET_URL}/campaign_logos/${logo}`;

  const campaignData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": campaignUrl,
    name: title,
    description: description.slice(0, 500),
    url: campaignUrl,
    image: imageUrl,
    startDate: new Date().toISOString(),
    endDate: new Date(deadline).toISOString(),
    eventStatus:
      status === "active"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventEnded",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: campaignUrl,
      ...(location && { name: location }),
    },
    organizer: {
      "@type": "Organization",
      name: "Hexbox",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      url: campaignUrl,
      price: "0",
      priceCurrency: "USD",
      availability:
        status === "active"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      validFrom: new Date().toISOString(),
    },
    // Custom properties for crowdfunding
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "fundingGoal",
        value: fundAmount,
        unitCode: "USD",
      },
      {
        "@type": "PropertyValue",
        name: "totalRaised",
        value: totalRaised,
        unitCode: "USD",
      },
      {
        "@type": "PropertyValue",
        name: "fundingPercentage",
        value:
          fundAmount > 0 ? Math.round((totalRaised / fundAmount) * 100) : 0,
      },
      {
        "@type": "PropertyValue",
        name: "blockchain",
        value: "Avalanche C-Chain",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(campaignData) }}
    />
  );
}

// FAQ Schema for pages with FAQs
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  faqs: FAQItem[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// Product Schema for campaign products/rewards
interface ProductJsonLdProps {
  name: string;
  description: string;
  price: number;
  image: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  campaignUrl: string;
}

export function ProductJsonLd({
  name,
  description,
  price,
  image,
  availability,
  campaignUrl,
}: ProductJsonLdProps) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: description.slice(0, 500),
    image,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      availability: `https://schema.org/${availability}`,
      url: campaignUrl,
      seller: {
        "@type": "Organization",
        name: "Hexbox",
      },
    },
    brand: {
      "@type": "Organization",
      name: "Hexbox",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
}

// How-To Schema for guides
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M"
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: HowToJsonLdProps) {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
    />
  );
}
