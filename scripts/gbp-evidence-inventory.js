#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const runDate = process.env.GBP_RUN_DATE || "2026-05-15";
const client = "Axle Towing";
const domain = "axletowing.com";
const screenshotsDir = path.join(repoRoot, "data", "gbp", domain, runDate, "screenshots");

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
  } catch (_) {
    console.warn(`xattr failed for ${file}: ${key}`);
  }
}

function classify(filename) {
  const lower = filename.toLowerCase();
  const location = lower.includes("phoenix")
    ? "Phoenix"
    : lower.includes("apache-junction")
      ? "Apache Junction"
      : "Both";
  const surface = lower.includes("services")
    ? "Services"
    : lower.includes("business-info")
      ? "Business info"
      : lower.includes("phone")
        ? "Phone / contact"
        : lower.includes("profile")
          ? "Public profile"
          : lower.includes("businesses-list")
            ? "Business list"
            : "GBP evidence";
  const intent = lower.includes("clean-state")
    ? "Clean state after discarding unsaved hours edits"
    : lower.includes("pending")
      ? "Pending Google review state"
      : "Live Google Business Profile evidence";
  return { location, surface, intent };
}

if (!fs.existsSync(screenshotsDir)) {
  throw new Error(`Missing screenshots directory: ${screenshotsDir}`);
}

const entries = [];
for (const file of fs.readdirSync(screenshotsDir).sort()) {
  if (!file.match(/\.(png|jpe?g)$/i) || file.endsWith(".metadata.json")) continue;
  const abs = path.join(screenshotsDir, file);
  const classified = classify(file);
  const stats = fileStats(abs);
  const relative = path.relative(repoRoot, abs);
  const sidecar = {
    client,
    domain,
    capture_date: runDate,
    storage_path: relative,
    evidence_type: "Google Business Profile screenshot",
    location: classified.location,
    gbp_surface: classified.surface,
    evidence_intent: classified.intent,
    source: "Google Business Profile Manager via local Chrome",
    meeting_guardrails: {
      dispatch: "24/7 dispatch is allowed.",
      office_release: "Do not imply vehicle release or office is open 24/7.",
    },
    file: stats,
    recall_tags: [
      "gbp",
      "local-seo",
      "ai-seo-evidence",
      "Axle Towing",
      classified.location,
      classified.surface,
    ].filter(Boolean),
  };
  const sidecarPath = `${abs}.metadata.json`;
  fs.writeFileSync(sidecarPath, `${JSON.stringify(sidecar, null, 2)}\n`);

  xattr(abs, "ai_acrobatics.client", client);
  xattr(abs, "ai_acrobatics.domain", domain);
  xattr(abs, "ai_acrobatics.capture_date", runDate);
  xattr(abs, "ai_acrobatics.source", sidecar.source);
  xattr(abs, "ai_acrobatics.location", classified.location);
  xattr(abs, "ai_acrobatics.gbp_surface", classified.surface);
  xattr(abs, "ai_acrobatics.evidence_intent", classified.intent);
  xattr(abs, "ai_acrobatics.recall_tags", sidecar.recall_tags.join(", "));

  entries.push({
    storage_path: relative,
    metadata_path: path.relative(repoRoot, sidecarPath),
    location: classified.location,
    gbp_surface: classified.surface,
    evidence_intent: classified.intent,
  });
}

const manifestPath = path.join(screenshotsDir, "screenshot-evidence-manifest.json");
fs.writeFileSync(
  manifestPath,
  `${JSON.stringify(
    {
      client,
      domain,
      run_date: runDate,
      generated_at: new Date().toISOString(),
      screenshots: entries,
    },
    null,
    2,
  )}\n`,
);
console.log(`Wrote ${path.relative(repoRoot, manifestPath)}`);
console.log(`Screenshots: ${entries.length}`);
