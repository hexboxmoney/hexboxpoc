// Helper to get the base URL for API calls
const getBaseUrl = () => {
  // For server-side, use NEXTAUTH_URL or NEXT_PUBLIC_APP_BASE_URL
  // For client-side or when not set, return empty string for relative URLs
  return process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_APP_BASE_URL || '';
};

// Helper to build URL with query params (handles relative URLs)
const buildUrlWithParams = (path: string, params: Record<string, string>): string => {
  const baseUrl = getBaseUrl();
  const searchParams = new URLSearchParams(params);
  
  if (baseUrl) {
    const url = new URL(path, baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });
    return url.toString();
  }
  
  // For relative URLs
  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
};

export const fetchCampaignsWithCount = async (
  limit: number,
  skip: number,
  query?: string,
  status: string = "active",
  sortBy: string = "total_raised",
  sortOrder: string = "desc"
): Promise<{ campaigns: any[]; total: number }> => {
  try {
    console.log("fetchCampaignsWithCount | apiHelpers | utils");
    
    const params: Record<string, string> = {
      limit: limit.toString(),
      skip: skip.toString(),
      sortBy,
      sortOrder,
    };
    if (status) params.status = status;
    if (query) params.query = query;
    
    const url = buildUrlWithParams('/api/getCampaigns', params);
    console.log(`Fetching from: ${url}`);

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch campaigns | fetchCampaignsWithCount | apiHelpers");
    }

    const data = await response.json();

    if (data.campaigns && data.total !== undefined) {
      return {
        campaigns: data.campaigns,
        total: data.total,
      };
    } else if (Array.isArray(data)) {
      return {
        campaigns: data,
        total: data.length,
      };
    } else {
      return {
        campaigns: data.campaigns || [],
        total: data.total || 0,
      };
    }
  } catch (error) {
    console.error("Failed to fetch campaigns with count:", error);
    return { campaigns: [], total: 0 };
  }
};
export const fetchCampaigns = async (
  limit: number,
  skip: number,
  query?: string,
  status: string = "active",
  sortBy: string = "total_raised",
  sortOrder: string = "desc"
): Promise<any> => {
  try {
    console.log("fetchCampaigns | apiHelpers | utils");
    
    const params: Record<string, string> = {
      limit: limit.toString(),
      skip: skip.toString(),
      sortBy,
      sortOrder,
    };
    if (status) params.status = status;
    if (query) params.query = query;
    
    const url = buildUrlWithParams('/api/getCampaigns', params);
    console.log(`Fetching from: ${url}`);

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("fetchCampaigns non-OK response:", {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      });

      try {
        const errorText = await response.text();
        console.error("fetchCampaigns error body:", errorText);
      } catch (readError) {
        console.error("Failed to read fetchCampaigns error body:", readError);
      }

      throw new Error("Failed to fetch campaigns | fetchCampaigns | apiHelpers");
    }

    const data = await response.json();
    console.log("fetchCampaigns data:", data);

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray((data as any).campaigns)) {
      return (data as any).campaigns;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    return [];
  }
};
export const fetchCampaignsByUser = async (userId: string): Promise<any> => {
  const url = buildUrlWithParams('/api/userCampaigns', { userId });
  console.log(`Fetching user campaigns from: ${url}`);
  
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch campaigns for the user");
  }

  return response.json();
};

export const fetchSingleCampaign = async (campaignId: string): Promise<any> => {
  console.log("campaignId----fetch", campaignId);

  try {
    console.log("fetchSingleCampaign | apiHelpers | utils");
    const url = buildUrlWithParams('/api/getCampaign', { campaignId });
    console.log(`Fetching from: ${url}`);
    
    const response = await fetch(url, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(
      "Error while fetching a single Campaign",
      (error as any).message
    );
    throw error;
  }
};

type BuyTokenResponse = {
  success?: boolean;
  error?: string;
  transaction?: any;
};

export const buyCampaignToken = async (
  campaign_id: string,
  amount: number
): Promise<BuyTokenResponse> => {
  const apiUrl = "/api/buyToken";
  try {
    const formData = new FormData();
    formData.append("campaign_id", campaign_id);
    formData.append("amount", amount.toString());
    console.log("----------FoRM", formData);
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch");
    }

    const data: BuyTokenResponse = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error calling buyToken API:", error.message);
    return { error: error.message };
  }
};
