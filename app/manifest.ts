import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hexbox - Blockchain Crowdfunding Platform",
    short_name: "Hexbox",
    description:
      "Decentralized crowdfunding on Avalanche C-Chain with smart contract security, NFT-backed investments, and refundable funding.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3B82F6",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/hexbox_black_logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/hexbox_white_logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["finance", "business", "blockchain"],
    lang: "en",
    dir: "ltr",
  };
}

