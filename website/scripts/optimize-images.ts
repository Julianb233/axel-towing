/**
 * Image SEO Optimization Pipeline for Axle Towing
 *
 * Converts all images to WebP, generates thumbnails, applies SEO-friendly
 * filenames, and produces an image-seo-manifest.ts for the website.
 *
 * Usage:  tsx scripts/optimize-images.ts
 */

import sharp from "sharp";
import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PUBLIC_DIR = path.resolve(__dirname, "../public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const OUTPUT_DIR = path.join(PUBLIC_DIR, "images/optimized");
const MANIFEST_PATH = path.resolve(
  __dirname,
  "../src/lib/data/image-seo-manifest.ts",
);

const MAX_WIDTH = 1920;
const THUMB_WIDTH = 400;
const WEBP_QUALITY = 80;

// ---------------------------------------------------------------------------
// SEO mapping – maps every source image to its SEO filename, alt, and caption
// ---------------------------------------------------------------------------

interface SeoEntry {
  /** Original path relative to public/ */
  original: string;
  /** SEO slug (no extension) */
  seoSlug: string;
  /** Category for grouping */
  category: "hero" | "service" | "location" | "about" | "blog" | "gallery" | "testimonial" | "contact";
  /** Alt text */
  alt: string;
  /** Structured caption (who/what/where) */
  caption: string;
}

const SEO_MAP: SeoEntry[] = [
  // ── Hero images ──────────────────────────────────────────────────────
  {
    original: "images/hero-tow-truck.jpg",
    seoSlug: "axle-towing-hero-private-property-towing-phoenix",
    category: "hero",
    alt: "Axle Towing private property towing services in Phoenix, Arizona — 24/7 parking enforcement and vehicle removal",
    caption:
      "Axle Towing provides professional private property towing and parking enforcement services across the Phoenix, Arizona metropolitan area including Scottsdale, Mesa, Glendale, Gilbert, Chandler, and Tempe.",
  },
  {
    original: "images/hero-parking-lot.jpg",
    seoSlug: "axle-towing-hero-parking-enforcement-phoenix-az",
    category: "hero",
    alt: "Axle Towing parking lot enforcement in Phoenix, AZ — professional parking management for property owners",
    caption:
      "Axle Towing provides comprehensive parking lot enforcement and vehicle management services to property owners throughout the Phoenix, Arizona metro area.",
  },

  // ── Service images ───────────────────────────────────────────────────
  {
    original: "images/service-private-impound.jpg",
    seoSlug: "axle-towing-private-property-impound-phoenix-az",
    category: "service",
    alt: "Private property impound services by Axle Towing in Phoenix, AZ — professional vehicle removal for property managers and HOAs",
    caption:
      "Axle Towing performs private property impounds across Phoenix, Arizona, removing unauthorized vehicles from HOA communities, apartment complexes, and commercial properties.",
  },
  {
    original: "images/service-parking-enforcement.jpg",
    seoSlug: "axle-towing-parking-enforcement-phoenix-az",
    category: "service",
    alt: "Parking enforcement by Axle Towing in Phoenix, AZ — professional patrol and towing for property managers and HOAs",
    caption:
      "Axle Towing provides 24/7 parking enforcement patrol services in the Phoenix, Arizona metro, ensuring compliance at apartment complexes and commercial properties.",
  },
  {
    original: "images/service-vehicle-relocation.jpg",
    seoSlug: "axle-towing-vehicle-relocation-phoenix-az",
    category: "service",
    alt: "Vehicle relocation services by Axle Towing in Phoenix, AZ — professional on-site vehicle moves for property managers",
    caption:
      "Axle Towing offers affordable vehicle relocation services in Phoenix, Arizona, helping property managers and HOAs move vehicles for maintenance, repairs, and lot management.",
  },
  {
    original: "images/service-hoa-towing.jpg",
    seoSlug: "axle-towing-hoa-towing-phoenix-az",
    category: "service",
    alt: "HOA towing services by Axle Towing in Phoenix, AZ — custom towing programs for homeowner associations",
    caption:
      "Axle Towing designs and manages custom HOA towing programs throughout the Phoenix, Arizona metro area, protecting community parking at zero cost to the association.",
  },
  {
    original: "images/service-apartment-towing.jpg",
    seoSlug: "axle-towing-apartment-towing-phoenix-az",
    category: "service",
    alt: "Apartment towing services by Axle Towing in Phoenix, AZ — parking enforcement for apartment complexes",
    caption:
      "Axle Towing keeps apartment complex parking organized across Phoenix, Arizona with professional towing and enforcement services for property managers.",
  },
  {
    original: "images/service-commercial-towing.jpg",
    seoSlug: "axle-towing-commercial-property-towing-phoenix-az",
    category: "service",
    alt: "Commercial property towing by Axle Towing in Phoenix, AZ — professional unauthorized parking removal for businesses",
    caption:
      "Axle Towing protects commercial properties in Phoenix, Arizona from unauthorized parking with 24/7 towing and enforcement services.",
  },

  // ── Location / Arizona images ────────────────────────────────────────
  {
    original: "images/arizona-hoa-entrance.jpg",
    seoSlug: "axle-towing-hoa-entrance-arizona-towing-service",
    category: "location",
    alt: "Axle Towing services at an HOA entrance in Arizona — local towing and parking enforcement",
    caption:
      "Axle Towing provides towing and parking enforcement services at HOA community entrances throughout Arizona.",
  },
  {
    original: "images/arizona-apartment-parking.jpg",
    seoSlug: "axle-towing-apartment-parking-arizona-towing-service",
    category: "location",
    alt: "Axle Towing services at an apartment parking lot in Arizona — local towing and parking enforcement",
    caption:
      "Axle Towing enforces parking rules at apartment complexes across the Arizona metro area.",
  },
  {
    original: "images/arizona-fire-lane.jpg",
    seoSlug: "axle-towing-fire-lane-enforcement-arizona-towing-service",
    category: "location",
    alt: "Axle Towing fire lane enforcement in Arizona — keeping fire lanes clear for safety",
    caption:
      "Axle Towing enforces fire lane compliance at properties throughout Arizona, ensuring emergency access is never blocked.",
  },
  {
    original: "images/arizona-commercial-parking.jpg",
    seoSlug: "axle-towing-commercial-parking-arizona-towing-service",
    category: "location",
    alt: "Axle Towing services at a commercial parking lot in Arizona — local towing and parking enforcement",
    caption:
      "Axle Towing manages commercial parking enforcement across the Phoenix, Arizona metropolitan area.",
  },
  {
    original: "images/arizona-skyline-panoramic.jpg",
    seoSlug: "axle-towing-phoenix-arizona-skyline-towing-service",
    category: "location",
    alt: "Axle Towing services in Phoenix, Arizona — local towing and parking enforcement across the metro area",
    caption:
      "Axle Towing serves the entire Phoenix, Arizona metropolitan area including Scottsdale, Mesa, Glendale, Gilbert, Chandler, and Tempe.",
  },
  {
    original: "images/arizona-tow-operator.jpg",
    seoSlug: "axle-towing-tow-operator-phoenix-arizona",
    category: "location",
    alt: "Axle Towing professional tow operator in Phoenix, Arizona — experienced and certified towing team",
    caption:
      "Axle Towing employs professional, experienced tow operators serving the Phoenix, Arizona metro area.",
  },
  {
    original: "images/arizona-mesa-residential.jpg",
    seoSlug: "axle-towing-mesa-arizona-towing-service",
    category: "location",
    alt: "Axle Towing services in Mesa, Arizona — local towing and parking enforcement",
    caption:
      "Axle Towing provides residential and commercial towing services in Mesa, Arizona.",
  },
  {
    original: "images/arizona-impound-lot.jpg",
    seoSlug: "axle-towing-impound-lot-phoenix-arizona",
    category: "location",
    alt: "Axle Towing impound lot in Phoenix, Arizona — secure vehicle storage facility",
    caption:
      "Axle Towing operates a secure impound lot in Phoenix, Arizona for vehicle storage and retrieval.",
  },

  // ── About images ─────────────────────────────────────────────────────
  {
    original: "images/about-team.jpg",
    seoSlug: "axle-towing-team-phoenix-arizona",
    category: "about",
    alt: "Axle Towing team in Phoenix, Arizona — veteran-owned private property towing company",
    caption:
      "The Axle Towing team is a veteran-owned, professional private property towing company based in Phoenix, Arizona.",
  },
  {
    original: "images/about-office.jpg",
    seoSlug: "axle-towing-office-phoenix-arizona",
    category: "about",
    alt: "Axle Towing office in Phoenix, Arizona — local private property towing headquarters",
    caption:
      "Axle Towing headquarters in Phoenix, Arizona — the operations center for private property towing and parking enforcement across the metro.",
  },
  {
    original: "images/veteran-owned.jpg",
    seoSlug: "axle-towing-veteran-owned-phoenix-arizona",
    category: "about",
    alt: "Axle Towing is a veteran-owned towing company in Phoenix, Arizona",
    caption:
      "Axle Towing is proudly veteran-owned, serving the Phoenix, Arizona metro with professional private property towing services.",
  },

  // ── Contact images ───────────────────────────────────────────────────
  {
    original: "images/contact-phoenix.jpg",
    seoSlug: "axle-towing-contact-phoenix-arizona",
    category: "contact",
    alt: "Contact Axle Towing in Phoenix, Arizona for private property towing and parking enforcement",
    caption:
      "Contact Axle Towing for a free consultation on private property towing and parking enforcement in Phoenix, Arizona.",
  },

  // ── Blog images ──────────────────────────────────────────────────────
  {
    original: "images/blog-tow-truck-night.jpg",
    seoSlug: "axle-towing-blog-night-towing-phoenix-az",
    category: "blog",
    alt: "Axle Towing 24/7 night towing operations in Phoenix, AZ",
    caption:
      "Axle Towing provides around-the-clock towing dispatch in Phoenix, Arizona, including nighttime private property enforcement.",
  },
  {
    original: "images/blog-fire-lane.jpg",
    seoSlug: "axle-towing-blog-fire-lane-enforcement-phoenix-az",
    category: "blog",
    alt: "Fire lane enforcement towing by Axle Towing in Phoenix, AZ",
    caption:
      "Axle Towing enforces fire lane compliance at properties throughout the Phoenix, Arizona metro area.",
  },
  {
    original: "images/blog-parking-sign.jpg",
    seoSlug: "axle-towing-blog-parking-sign-compliance-phoenix-az",
    category: "blog",
    alt: "ARS-compliant towing signage installed by Axle Towing in Phoenix, AZ",
    caption:
      "Axle Towing installs ARS-compliant towing signage at no cost to property owners throughout Phoenix, Arizona.",
  },

  // ── Testimonial background ───────────────────────────────────────────
  {
    original: "images/testimonial-bg.jpg",
    seoSlug: "axle-towing-testimonials-phoenix-az",
    category: "testimonial",
    alt: "Axle Towing customer testimonials — trusted by property managers across Phoenix, Arizona",
    caption:
      "Property managers across Phoenix, Arizona trust Axle Towing for professional private property towing and parking enforcement.",
  },

  // ── Gallery images ───────────────────────────────────────────────────
  {
    original: "images/gallery/desert-recovery.jpg",
    seoSlug: "axle-towing-desert-recovery-phoenix-az",
    category: "gallery",
    alt: "Axle Towing off-road desert recovery with Superstition Mountains and saguaro cactus in Arizona",
    caption:
      "Axle Towing performs off-road desert vehicle recovery near the Superstition Mountains in Arizona.",
  },
  {
    original: "images/gallery/apartment-flatbed.jpg",
    seoSlug: "axle-towing-apartment-flatbed-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing flatbed truck at an apartment complex in Phoenix, AZ — professional vehicle transport",
    caption:
      "Axle Towing flatbed truck performing a professional vehicle transport at an apartment complex in the Phoenix, Arizona metro area.",
  },
  {
    original: "images/gallery/cybertruck-tow.jpg",
    seoSlug: "axle-towing-tesla-cybertruck-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing towing a Tesla Cybertruck in Phoenix, AZ — specialty vehicle handling",
    caption:
      "Axle Towing safely tows a Tesla Cybertruck in Phoenix, Arizona, demonstrating specialty vehicle handling capabilities.",
  },
  {
    original: "images/gallery/boat-tow.jpg",
    seoSlug: "axle-towing-boat-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing towing a boat in a Phoenix, AZ neighborhood — oversized vehicle towing",
    caption:
      "Axle Towing handles boat and oversized vehicle towing in Phoenix, Arizona neighborhoods.",
  },
  {
    original: "images/gallery/garage-impound.jpg",
    seoSlug: "axle-towing-garage-impound-phoenix-az",
    category: "gallery",
    alt: "Axle Towing performing an impound in a parking garage in Phoenix, AZ",
    caption:
      "Axle Towing performs parking garage impounds in Phoenix, Arizona, removing unauthorized vehicles from covered structures.",
  },
  {
    original: "images/gallery/truck-with-sign.jpg",
    seoSlug: "axle-towing-truck-branded-signage-phoenix-az",
    category: "gallery",
    alt: "Axle Towing branded tow truck with signage in Phoenix, AZ",
    caption:
      "Axle Towing operates a fleet of clearly branded tow trucks across the Phoenix, Arizona metro area.",
  },
  {
    original: "images/gallery/rv-tow-night.jpg",
    seoSlug: "axle-towing-rv-tow-night-phoenix-az",
    category: "gallery",
    alt: "Axle Towing 24/7 night service towing an RV in Phoenix, AZ",
    caption:
      "Axle Towing provides 24/7 RV and oversized vehicle towing services in Phoenix, Arizona.",
  },
  {
    original: "images/gallery/classic-car-flatbed.jpg",
    seoSlug: "axle-towing-classic-car-flatbed-phoenix-az",
    category: "gallery",
    alt: "Axle Towing flatbed transporting a classic car in Phoenix, AZ — careful vehicle handling",
    caption:
      "Axle Towing carefully transports classic and collectible vehicles on flatbed trucks in Phoenix, Arizona.",
  },
  {
    original: "images/gallery/maserati-night.jpg",
    seoSlug: "axle-towing-maserati-luxury-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing handling a Maserati luxury vehicle tow at night in Phoenix, AZ",
    caption:
      "Axle Towing provides professional luxury vehicle towing, including a Maserati night tow in Phoenix, Arizona.",
  },
  {
    original: "images/gallery/rv-palmtrees.jpg",
    seoSlug: "axle-towing-rv-tow-palm-trees-phoenix-az",
    category: "gallery",
    alt: "Axle Towing RV tow with palm trees in Phoenix, AZ — Arizona towing service",
    caption:
      "Axle Towing tows an RV past palm trees in the Phoenix, Arizona area.",
  },
  {
    original: "images/gallery/gmc-tow.jpg",
    seoSlug: "axle-towing-gmc-truck-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing towing a GMC truck in Phoenix, AZ — full-size truck towing",
    caption:
      "Axle Towing handles full-size truck towing including GMC vehicles in Phoenix, Arizona.",
  },
  {
    original: "images/gallery/rv-daytime.jpg",
    seoSlug: "axle-towing-rv-daytime-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing daytime RV towing in Phoenix, AZ — oversized vehicle transport",
    caption:
      "Axle Towing provides daytime RV and oversized vehicle towing across the Phoenix, Arizona metro area.",
  },
  {
    original: "images/gallery/classic-car-dusk.jpg",
    seoSlug: "axle-towing-classic-car-dusk-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing flatbed with a classic car at dusk in Arizona — specialty vehicle transport",
    caption:
      "Axle Towing transports a classic car on a flatbed at dusk in Arizona, providing specialty vehicle handling.",
  },
  {
    original: "images/gallery/corvette-tow.jpg",
    seoSlug: "axle-towing-corvette-c8-tow-phoenix-az",
    category: "gallery",
    alt: "Axle Towing handling a Corvette C8 specialty tow in Phoenix, AZ",
    caption:
      "Axle Towing carefully handles a Corvette C8 specialty tow in the Phoenix, Arizona metro area.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function ensureDir(dir: string) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function getExtension(filePath: string): string {
  return path.extname(filePath).toLowerCase();
}

async function processImage(entry: SeoEntry): Promise<{
  seoSlug: string;
  category: string;
  alt: string;
  caption: string;
  original: string;
  optimized: string;
  thumbnail: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  originalSize: number;
  optimizedSize: number;
}> {
  const srcPath = path.join(PUBLIC_DIR, entry.original);

  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source image not found: ${srcPath}`);
  }

  const originalStats = fs.statSync(srcPath);
  const image = sharp(srcPath);
  const metadata = await image.metadata();

  const srcWidth = metadata.width || MAX_WIDTH;
  const srcHeight = metadata.height || MAX_WIDTH;

  // Determine output dimensions (cap at MAX_WIDTH)
  const needsResize = srcWidth > MAX_WIDTH;
  const outputWidth = needsResize ? MAX_WIDTH : srcWidth;
  const outputHeight = needsResize
    ? Math.round((srcHeight / srcWidth) * MAX_WIDTH)
    : srcHeight;

  // Full-size WebP
  const fullOutputPath = path.join(OUTPUT_DIR, `${entry.seoSlug}.webp`);
  let pipeline = sharp(srcPath);
  if (needsResize) {
    pipeline = pipeline.resize(MAX_WIDTH);
  }
  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(fullOutputPath);

  // Thumbnail WebP
  const thumbOutputPath = path.join(
    OUTPUT_DIR,
    `${entry.seoSlug}-thumb.webp`,
  );
  const thumbHeight = Math.round((srcHeight / srcWidth) * THUMB_WIDTH);
  await sharp(srcPath)
    .resize(THUMB_WIDTH)
    .webp({ quality: WEBP_QUALITY })
    .toFile(thumbOutputPath);

  const optimizedStats = fs.statSync(fullOutputPath);

  return {
    seoSlug: entry.seoSlug,
    category: entry.category,
    alt: entry.alt,
    caption: entry.caption,
    original: `/${entry.original}`,
    optimized: `/images/optimized/${entry.seoSlug}.webp`,
    thumbnail: `/images/optimized/${entry.seoSlug}-thumb.webp`,
    width: outputWidth,
    height: outputHeight,
    thumbWidth: THUMB_WIDTH,
    thumbHeight: thumbHeight,
    originalSize: originalStats.size,
    optimizedSize: optimizedStats.size,
  };
}

// ---------------------------------------------------------------------------
// Manifest generation
// ---------------------------------------------------------------------------

function generateManifest(
  results: Awaited<ReturnType<typeof processImage>>[],
): string {
  const lines: string[] = [
    "/**",
    " * Auto-generated by scripts/optimize-images.ts",
    ` * Generated: ${new Date().toISOString()}`,
    " * DO NOT EDIT MANUALLY",
    " */",
    "",
    "export interface SeoImageEntry {",
    "  seoSlug: string;",
    '  category: "hero" | "service" | "location" | "about" | "blog" | "gallery" | "testimonial" | "contact";',
    "  alt: string;",
    "  caption: string;",
    "  original: string;",
    "  optimized: string;",
    "  thumbnail: string;",
    "  width: number;",
    "  height: number;",
    "  thumbWidth: number;",
    "  thumbHeight: number;",
    "}",
    "",
    "export const IMAGE_SEO_MANIFEST: SeoImageEntry[] = [",
  ];

  for (const r of results) {
    lines.push("  {");
    lines.push(`    seoSlug: ${JSON.stringify(r.seoSlug)},`);
    lines.push(`    category: ${JSON.stringify(r.category)},`);
    lines.push(`    alt: ${JSON.stringify(r.alt)},`);
    lines.push(`    caption: ${JSON.stringify(r.caption)},`);
    lines.push(`    original: ${JSON.stringify(r.original)},`);
    lines.push(`    optimized: ${JSON.stringify(r.optimized)},`);
    lines.push(`    thumbnail: ${JSON.stringify(r.thumbnail)},`);
    lines.push(`    width: ${r.width},`);
    lines.push(`    height: ${r.height},`);
    lines.push(`    thumbWidth: ${r.thumbWidth},`);
    lines.push(`    thumbHeight: ${r.thumbHeight},`);
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");

  // Build a lookup by original path for easy migration
  lines.push(
    "/** Quick lookup: original path -> SEO entry */",
  );
  lines.push(
    "export const IMAGE_SEO_BY_ORIGINAL: Record<string, SeoImageEntry> = {};",
  );
  lines.push("for (const entry of IMAGE_SEO_MANIFEST) {");
  lines.push("  IMAGE_SEO_BY_ORIGINAL[entry.original] = entry;");
  lines.push("}");
  lines.push("");

  // Build a lookup by category
  lines.push(
    "/** Lookup by category */",
  );
  lines.push(
    "export const IMAGE_SEO_BY_CATEGORY: Record<string, SeoImageEntry[]> = {};",
  );
  lines.push("for (const entry of IMAGE_SEO_MANIFEST) {");
  lines.push(
    "  if (!IMAGE_SEO_BY_CATEGORY[entry.category]) IMAGE_SEO_BY_CATEGORY[entry.category] = [];",
  );
  lines.push("  IMAGE_SEO_BY_CATEGORY[entry.category].push(entry);");
  lines.push("}");
  lines.push("");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== Axle Towing Image SEO Optimization Pipeline ===\n");

  await ensureDir(OUTPUT_DIR);

  const results: Awaited<ReturnType<typeof processImage>>[] = [];
  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;

  for (const entry of SEO_MAP) {
    try {
      const result = await processImage(entry);
      results.push(result);
      totalOriginalBytes += result.originalSize;
      totalOptimizedBytes += result.optimizedSize;

      const savings = (
        ((result.originalSize - result.optimizedSize) / result.originalSize) *
        100
      ).toFixed(1);
      console.log(
        `  [OK] ${entry.original} -> ${result.optimized} (${savings}% smaller)`,
      );
    } catch (err: any) {
      console.error(`  [ERR] ${entry.original}: ${err.message}`);
    }
  }

  // Write manifest
  const manifest = generateManifest(results);
  await fs.promises.writeFile(MANIFEST_PATH, manifest, "utf-8");

  const totalSavings = (
    ((totalOriginalBytes - totalOptimizedBytes) / totalOriginalBytes) *
    100
  ).toFixed(1);

  console.log(`\n=== Summary ===`);
  console.log(`  Images processed: ${results.length}/${SEO_MAP.length}`);
  console.log(
    `  Original total:  ${(totalOriginalBytes / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(
    `  Optimized total: ${(totalOptimizedBytes / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(`  Savings:         ${totalSavings}%`);
  console.log(`  Manifest:        ${MANIFEST_PATH}`);
  console.log(`  Output dir:      ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
