import type { MetadataRoute } from "next";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { BLOG_SLUGS } from "@/lib/blog-slugs";
import { NICHE_VERTICALS, NICHE_CITIES } from "@/lib/niche-data";
import { SPANISH_CITY_SLUGS } from "@/lib/spanish-location-data";

const BASE_URL = "https://axletowing.com";

/** Neighborhood sub-pages under each main location */
const NEIGHBORHOOD_PAGES: { parent: string; sub: string }[] = [
  { parent: "phoenix", sub: "ahwatukee" },
  { parent: "phoenix", sub: "arcadia" },
  { parent: "phoenix", sub: "desert-ridge" },
  { parent: "phoenix", sub: "downtown-phoenix" },
  { parent: "phoenix", sub: "north-phoenix" },
  { parent: "scottsdale", sub: "dc-ranch" },
  { parent: "scottsdale", sub: "north-scottsdale" },
  { parent: "scottsdale", sub: "old-town-scottsdale" },
  { parent: "mesa", sub: "red-mountain" },
  { parent: "mesa", sub: "superstition-springs" },
  { parent: "chandler", sub: "ocotillo" },
  { parent: "gilbert", sub: "san-tan-village" },
  { parent: "glendale", sub: "westgate" },
  { parent: "tempe", sub: "asu-area" },
  { parent: "tempe", sub: "south-tempe" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/locate-vehicle`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/service-area`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/we-buy-cars`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/referral`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/get-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/hoa-enforcement-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/parking-policy-template`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/property-manager-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Spanish / bilingual pages
  const spanishPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/es`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/es/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/preguntas-frecuentes`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/mi-vehiculo-fue-remolcado`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/precios`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/cotizacion`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/ubicar-vehiculo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/area-de-servicio`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/es/ubicaciones`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...SPANISH_CITY_SLUGS.map((slug) => ({
      url: `${BASE_URL}/es/ubicaciones/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Main location pages
  const locationPages: MetadataRoute.Sitemap = SERVICE_AREAS.map(({ slug }) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Neighborhood sub-pages
  const neighborhoodPages: MetadataRoute.Sitemap = NEIGHBORHOOD_PAGES.map(({ parent, sub }) => ({
    url: `${BASE_URL}/locations/${parent}/${sub}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  // Niche specialty pages (hub + vertical hubs + city pages)
  const nichePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/niche`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...NICHE_VERTICALS.map((v) => ({
      url: `${BASE_URL}/niche/${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...NICHE_VERTICALS.flatMap((v) =>
      NICHE_CITIES.map((c) => ({
        url: `${BASE_URL}/niche/${v.slug}/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    ),
  ];

  return [
    ...staticPages,
    ...spanishPages,
    ...servicePages,
    ...locationPages,
    ...neighborhoodPages,
    ...blogPages,
    ...nichePages,
  ];
}
