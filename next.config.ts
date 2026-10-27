import type { NextConfig } from "next";

const CAMPAIGN_ALIASES = ["discord", "instagram", "x", "whatsapp"] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    // Campaign aliases so each channel shows up as its own page in Vercel Web Analytics.
    return CAMPAIGN_ALIASES.map((alias) => ({
      source: `/${alias}`,
      destination: "/",
    }));
  },
};

export default nextConfig;
