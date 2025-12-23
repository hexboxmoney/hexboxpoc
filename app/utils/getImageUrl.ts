/**
 * Utility to safely construct R2 bucket image URLs
 * Falls back to a placeholder or the raw path if environment variable is not set
 */

const R2_BUCKET_URL = process.env.NEXT_PUBLIC_R2_BUCKET_URL || "";

export function getCampaignLogoUrl(logo: string | undefined | null): string {
  if (!logo) {
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  if (!R2_BUCKET_URL) {
    console.warn("NEXT_PUBLIC_R2_BUCKET_URL is not set");
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  return `${R2_BUCKET_URL}/campaign_logos/${logo}`;
}

export function getProductLogoUrl(logo: string | undefined | null): string {
  if (!logo) {
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  if (!R2_BUCKET_URL) {
    console.warn("NEXT_PUBLIC_R2_BUCKET_URL is not set");
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  return `${R2_BUCKET_URL}/product_logos/${logo}`;
}

export function getProductImageUrl(image: string | undefined | null): string {
  if (!image) {
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  if (!R2_BUCKET_URL) {
    console.warn("NEXT_PUBLIC_R2_BUCKET_URL is not set");
    return "/hexbox_black_logo.svg"; // Fallback to app logo
  }

  return `${R2_BUCKET_URL}/product_images/${image}`;
}
