import type { Metadata, Viewport } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthSession from "./components/AuthSession";
import Script from "next/script";
import Providers from "./components/providers/Providers";
import Notification from "./components/Notification";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { OrganizationJsonLd } from "./components/seo/StructuredData";

import * as Sentry from "@sentry/nextjs";

const BASE_URL = "https://hexbox.money";

// SEO Keywords for blockchain crowdfunding
const seoKeywords = [
  // Primary keywords
  "blockchain crowdfunding",
  "crypto crowdfunding",
  "web3 fundraising",
  "decentralized crowdfunding",
  "avalanche crowdfunding",
  // Feature keywords
  "NFT crowdfunding",
  "smart contract funding",
  "refundable crypto investment",
  "on-chain fundraising",
  "milestone-based funding",
  // Long-tail keywords
  "blockchain crowdfunding platform",
  "crypto project funding",
  "avalanche c-chain crowdfunding",
  "web3 startup funding",
  "decentralized fundraising platform",
  // Brand keywords
  "hexbox",
  "hexbox crowdfunding",
  "hexbox money",
].join(", ");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hexbox | Blockchain Crowdfunding Platform on Avalanche",
    template: "%s | Hexbox",
  },
  description:
    "Hexbox is a decentralized crowdfunding platform built on Avalanche C-Chain. Back real-world projects with smart contract security, NFT-backed investments, and refundable funding. Create. Support. Make Impact.",
  keywords: seoKeywords,
  authors: [{ name: "Hexbox Team", url: BASE_URL }],
  creator: "Hexbox",
  publisher: "Hexbox",
  applicationName: "Hexbox",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Hexbox",
    title: "Hexbox | Blockchain Crowdfunding Platform on Avalanche",
    description:
      "Back real-world projects with blockchain security. NFT-backed investments, smart contract escrow, and refundable crowdfunding on Avalanche C-Chain.",
    images: [
      {
        url: "/hexbox_name_logo_black.png",
        width: 1200,
        height: 630,
        alt: "Hexbox - Blockchain Crowdfunding Platform",
        type: "image/png",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Hexbox | Blockchain Crowdfunding on Avalanche",
    description:
      "Decentralized crowdfunding with smart contract security, NFT tickets, and refundable investments. Fund innovation on Avalanche C-Chain.",
    images: ["/hexbox_name_logo_black.png"],
    creator: "@hexbox_money",
    site: "@hexbox_money",
  },
  // Additional meta
  alternates: {
    canonical: BASE_URL,
  },
  category: "Finance",
  classification: "Crowdfunding Platform",
  other: {
    ...Sentry.getTraceData(),
    "blockchain-network": "Avalanche C-Chain",
    "crypto-payment": "AVAX",
  },
  // App links
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },
  // Verification (add  verification codes when available)
  // verification: {
  //   google: "-google-verification-code",
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data - Organization */}
        <OrganizationJsonLd />
      </head>
      <body className="bg-white dark:bg-dark-bg text-black dark:text-dark-text transition-colors duration-200">
        {/* Google Consent Mode initialization */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500,
            });
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5JPDTJB8');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JPDTJB8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>
          <Notification />
          {children}
          <CookieConsentBanner />
        </Providers>
      </body>
    </html>
  );
}
