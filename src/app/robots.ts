import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
    ],
    sitemap: "https://axletowing.com/sitemap.xml",
    host: "https://axletowing.com",
  };
}
