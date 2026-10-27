import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      // Campaign alias so Discord traffic shows up as its own page in Vercel Web Analytics.
      { source: "/discord", destination: "/" },
    ];
  },
};

export default nextConfig;
