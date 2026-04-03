import { NextResponse } from "next/server";
import { IMAGE_SEO_MANIFEST } from "@/lib/data/image-seo-manifest";

const SITE_URL = "https://axletowing.com";

export async function GET() {
  const urls = IMAGE_SEO_MANIFEST.map((entry) => {
    // Determine the page URL where this image appears
    let pageUrl = SITE_URL;
    switch (entry.category) {
      case "hero":
        pageUrl = SITE_URL;
        break;
      case "service":
        pageUrl = `${SITE_URL}/services`;
        break;
      case "location":
        pageUrl = `${SITE_URL}/locations`;
        break;
      case "about":
        pageUrl = `${SITE_URL}/about`;
        break;
      case "blog":
        pageUrl = `${SITE_URL}/blog`;
        break;
      case "gallery":
        pageUrl = `${SITE_URL}/gallery`;
        break;
      case "testimonial":
        pageUrl = SITE_URL;
        break;
      case "contact":
        pageUrl = `${SITE_URL}/contact`;
        break;
    }

    return `
    <url>
      <loc>${pageUrl}</loc>
      <image:image>
        <image:loc>${SITE_URL}${entry.optimized}</image:loc>
        <image:caption>${escapeXml(entry.caption)}</image:caption>
        <image:title>${escapeXml(entry.alt)}</image:title>
      </image:image>
    </url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
