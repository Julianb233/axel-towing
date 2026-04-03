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
      // Explicitly allow AI search engine crawlers for citation eligibility
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/portal", "/api/", "/invoice", "/proposal", "/_next/"],
      },
    ],
    sitemap: "https://axletowing.com/sitemap.xml",
    host: "https://axletowing.com",
  };
}
