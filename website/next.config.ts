import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    // TypeScript is checked separately via tsc --noEmit; skip the worker spawn during build
    // to avoid EAGAIN errors on resource-constrained environments
    ignoreBuildErrors: true,
  },
  experimental: {
    // Limit worker count to avoid EAGAIN on resource-constrained build environments
    cpus: 1,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy /employment URL (external backlinks / old search index) -> /careers
      {
        source: "/employment",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/employment/:path*",
        destination: "/careers",
        permanent: true,
      },
      // Removed merchandise pages -> partners page (corporate gifting context)
      {
        source: "/merchandise",
        destination: "/partners",
        permanent: true,
      },
      {
        source: "/merchandise/:path*",
        destination: "/partners",
        permanent: true,
      },
      // Removed shop storefront + bulk order -> parking permits (only remaining shop product)
      {
        source: "/shop",
        destination: "/shop/parking-permits",
        permanent: true,
      },
      {
        source: "/shop/bulk-order",
        destination: "/shop/parking-permits",
        permanent: true,
      },
      {
        source: "/shop/bulk-order/:path*",
        destination: "/shop/parking-permits",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
