#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const runDate = process.env.GBP_RUN_DATE || "2026-05-15";
const client = "Axle Towing";
const domain = "axletowing.com";
const baseDir = path.join(repoRoot, "data", "gbp", domain, runDate);
const mediaDir = path.join(baseDir, "media", "gbp-ready");

const assets = [
  {
    source: "website/public/images/axle-towing-logo.png",
    filename: "axle-towing-logo-google-business-profile.png",
    type: "logo",
    location: "both",
    service: "brand",
    keywords: ["Axle Towing", "Axle Towing & Impound", "Phoenix towing", "Apache Junction towing"],
    entities: ["Axle Towing & Impound", "Arizona towing company"],
    alt: "Axle Towing & Impound logo for Google Business Profile",
  },
  {
    source: "website/public/images/hero-tow-truck.jpg",
    filename: "axle-towing-cover-branded-tow-truck-phoenix-apache-junction.jpg",
    type: "cover",
    location: "both",
    service: "towing dispatch",
    keywords: ["24/7 towing dispatch", "Phoenix towing service", "Apache Junction towing service"],
    entities: ["tow truck", "private property towing", "Phoenix metro"],
    alt: "Branded Axle Towing truck for the Google Business Profile cover photo",
  },
  {
    source: "website/public/images/service-private-impound.jpg",
    filename: "axle-towing-private-property-impound-service.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Private Property Towing",
    keywords: ["private property towing", "private property impound", "parking enforcement"],
    entities: ["property managers", "HOA boards", "apartment communities"],
    alt: "Axle Towing private property impound service photo",
  },
  {
    source: "website/public/images/service-apartment-towing.jpg",
    filename: "axle-towing-apartment-complex-parking-enforcement.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Apartment Complex Towing",
    keywords: ["apartment complex towing", "apartment parking enforcement", "unauthorized parking removal"],
    entities: ["apartment complexes", "resident parking", "guest parking enforcement"],
    alt: "Apartment complex parking enforcement by Axle Towing",
  },
  {
    source: "website/public/images/service-hoa-towing.jpg",
    filename: "axle-towing-hoa-parking-enforcement.jpg",
    type: "photos_at_work",
    location: "both",
    service: "HOA Parking Enforcement",
    keywords: ["HOA towing", "HOA parking enforcement", "community parking rules"],
    entities: ["HOA communities", "board meetings", "parking enforcement"],
    alt: "HOA parking enforcement service by Axle Towing",
  },
  {
    source: "website/public/images/service-commercial-towing.jpg",
    filename: "axle-towing-commercial-property-towing.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Commercial Property Towing",
    keywords: ["commercial property towing", "retail parking enforcement", "office building towing"],
    entities: ["commercial properties", "retail centers", "office buildings"],
    alt: "Commercial property towing and parking enforcement by Axle Towing",
  },
  {
    source: "website/public/images/service-vehicle-relocation.jpg",
    filename: "axle-towing-paid-vehicle-relocation-service.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Vehicle Relocation",
    keywords: ["vehicle relocation", "paid vehicle relocation", "property maintenance towing"],
    entities: ["property maintenance", "landscaping access", "scheduled relocation"],
    alt: "Paid vehicle relocation service by Axle Towing",
  },
  {
    source: "website/public/images/arizona-impound-lot.jpg",
    filename: "axle-towing-secure-impound-lot-arizona.jpg",
    type: "exterior",
    location: "both",
    service: "Impound Lot",
    keywords: ["impound lot", "vehicle storage facility", "secure vehicle storage"],
    entities: ["impound lot", "vehicle storage", "Arizona towing"],
    alt: "Secure Axle Towing impound lot and vehicle storage facility",
  },
  {
    source: "website/public/images/about-office.jpg",
    filename: "axle-towing-office-vehicle-release-hours.jpg",
    type: "interior",
    location: "both",
    service: "Office / vehicle release",
    keywords: ["vehicle release office", "towed vehicle pickup", "impound office"],
    entities: ["office hours", "vehicle release", "customer service"],
    alt: "Axle Towing office for vehicle release and customer service",
  },
  {
    source: "website/public/images/about-team.jpg",
    filename: "axle-towing-team-arizona.jpg",
    type: "team",
    location: "both",
    service: "team",
    keywords: ["Arizona towing team", "Axle Towing staff", "towing professionals"],
    entities: ["Axle Towing team", "Arizona towing professionals"],
    alt: "Axle Towing team photo for Google Business Profile",
  },
  {
    source: "website/public/images/gallery/truck-with-sign.jpg",
    filename: "axle-towing-compliant-signage-installation.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Compliant Towing Signage Installation",
    keywords: ["towing signage installation", "parking enforcement signs", "compliant towing signage"],
    entities: ["property managers", "parking signs", "private property enforcement"],
    alt: "Axle Towing compliant towing signage installation",
  },
  {
    source: "website/public/images/gallery/apartment-flatbed.jpg",
    filename: "axle-towing-abandoned-vehicle-removal-apartment-property.jpg",
    type: "photos_at_work",
    location: "both",
    service: "Abandoned Vehicle Removal",
    keywords: ["abandoned vehicle removal", "abandoned car towing", "apartment abandoned vehicle removal"],
    entities: ["abandoned vehicles", "apartment communities", "property owners"],
    alt: "Abandoned vehicle removal for an apartment property by Axle Towing",
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function fileStats(file) {
  const stats = fs.statSync(file);
  let dimensions = {};
  try {
    const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", "-g", "format", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    for (const line of out.split("\n")) {
      const match = line.match(/^\s*(pixelWidth|pixelHeight|format):\s*(.+)$/);
      if (match) dimensions[match[1]] = match[2];
    }
  } catch (_) {
    dimensions = {};
  }
  return {
    bytes: stats.size,
    width: dimensions.pixelWidth ? Number(dimensions.pixelWidth) : null,
    height: dimensions.pixelHeight ? Number(dimensions.pixelHeight) : null,
    format: dimensions.format || path.extname(file).slice(1).toLowerCase(),
  };
}

function xattr(file, key, value) {
  try {
    execFileSync("xattr", ["-w", key, String(value), file], { stdio: "ignore" });
  } catch (error) {
    console.warn(`xattr failed for ${file}: ${key}`);
  }
}

function googleMediaStatus(stats) {
  const extOk = ["jpg", "jpeg", "png"].includes(String(stats.format).toLowerCase());
  const sizeOk = stats.bytes >= 10 * 1024 && stats.bytes <= 5 * 1024 * 1024;
  const minOk = (stats.width || 0) >= 250 && (stats.height || 0) >= 250;
  const recommendedOk = (stats.width || 0) >= 720 && (stats.height || 0) >= 720;
  return { extOk, sizeOk, minOk, recommendedOk, uploadReady: extOk && sizeOk && minOk };
}

ensureDir(mediaDir);

const manifest = {
  client,
  domain,
  run_date: runDate,
  generated_at: new Date().toISOString(),
  google_best_practices_source: [
    "https://support.google.com/business/answer/7091",
    "https://support.google.com/business/answer/6123536",
    "https://support.google.com/business/answer/6103862",
  ],
  meeting_guardrails: {
    dispatch: "24/7 towing dispatch can be described.",
    office_release: "Do not imply office or vehicle release is available 24/7.",
    content: "Avoid legal advice and competitor-comparison content.",
  },
  assets: [],
};

for (const asset of assets) {
  const sourceAbs = path.join(repoRoot, asset.source);
  if (!fs.existsSync(sourceAbs)) {
    manifest.assets.push({ ...asset, status: "missing_source" });
    continue;
  }

  const destAbs = path.join(mediaDir, asset.filename);
  fs.copyFileSync(sourceAbs, destAbs);
  const stats = fileStats(destAbs);
  const google = googleMediaStatus(stats);
  const relativeDest = path.relative(repoRoot, destAbs);
  const sidecar = {
    client,
    domain,
    capture_date: runDate,
    storage_path: relativeDest,
    source_path: asset.source,
    gbp_photo_type: asset.type,
    location_applicability: asset.location,
    service_intent: asset.service,
    local_seo_keywords: asset.keywords,
    ai_seo_entities: asset.entities,
    alt_text: asset.alt,
    google_media_requirements: {
      format_allowed: "JPG or PNG",
      size_allowed: "10 KB to 5 MB",
      recommended_resolution: "720 x 720 or higher",
      minimum_resolution: "250 x 250",
      quality: "In focus, well lit, represents reality, no heavy filters or AI alteration",
    },
    file: stats,
    validation: google,
    usage_notes: [
      "Use only if the image truthfully represents Axle Towing's current business.",
      "Do not use legal-advice captions or competitor-comparison captions.",
      "Use 24/7 wording only for towing dispatch, not vehicle release or office availability.",
    ],
  };

  const sidecarPath = `${destAbs}.metadata.json`;
  fs.writeFileSync(sidecarPath, `${JSON.stringify(sidecar, null, 2)}\n`);

  xattr(destAbs, "ai_acrobatics.client", client);
  xattr(destAbs, "ai_acrobatics.domain", domain);
  xattr(destAbs, "ai_acrobatics.capture_date", runDate);
  xattr(destAbs, "ai_acrobatics.source", asset.source);
  xattr(destAbs, "ai_acrobatics.gbp_photo_type", asset.type);
  xattr(destAbs, "ai_acrobatics.service_intent", asset.service);
  xattr(destAbs, "ai_acrobatics.local_seo_keywords", asset.keywords.join(", "));
  xattr(destAbs, "ai_acrobatics.ai_seo_entities", asset.entities.join(", "));
  xattr(destAbs, "ai_acrobatics.alt_text", asset.alt);

  manifest.assets.push({
    storage_path: relativeDest,
    metadata_path: path.relative(repoRoot, sidecarPath),
    gbp_photo_type: asset.type,
    location_applicability: asset.location,
    service_intent: asset.service,
    local_seo_keywords: asset.keywords,
    ai_seo_entities: asset.entities,
    validation: google,
  });
}

const manifestPath = path.join(mediaDir, "gbp-media-manifest.json");
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${path.relative(repoRoot, manifestPath)}`);
console.log(`Assets: ${manifest.assets.length}`);
