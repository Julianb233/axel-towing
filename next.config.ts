import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e5cdia7uckj.exactdn.com",
      },
    ],
  },
};

export default nextConfig;
