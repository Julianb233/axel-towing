#!/usr/bin/env npx tsx
/**
 * enrich-leads.ts — Enrich prospect data with scoring and public data
 *
 * Takes a prospects JSON file as input and adds estimated revenue,
 * employee count, years in business, and a composite score.
 *
 * Usage: npx tsx scripts/prospecting/enrich-leads.ts <input-file> [output-file]
 * Example: npx tsx scripts/prospecting/enrich-leads.ts data/prospects/hoas.json
 * Output: data/prospects/hoas-enriched.json (or specified output file)
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import type { EnrichedProspect } from './types';
import {
  fetchWithRetry,
  sleep,
  today,
  logSection,
  REQUEST_DELAY_MS,
} from './utils';

interface RawProspect {
  name?: string;
  businessName?: string;
  companyName?: string;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string;
  website?: string | null;
  googleRating?: number | null;
  reviewCount?: number | null;
  numberOfUnits?: number | null;
  numberOfProperties?: number | null;
  areasServed?: string[];
  contactEmail?: string | null;
  email?: string | null;
  [key: string]: unknown;
}

/**
 * Try to extract business info from their website
 */
async function enrichFromWebsite(
  website: string | null
): Promise<{
  estimatedRevenue: string | null;
  employeeCount: number | null;
  yearsInBusiness: number | null;
}> {
  const result = {
    estimatedRevenue: null as string | null,
    employeeCount: null as number | null,
    yearsInBusiness: null as number | null,
  };

  if (!website) return result;

  try {
    // Try the about page first, then homepage
    const aboutUrl = new URL('/about', website).toString();
    let html = await fetchWithRetry(aboutUrl, 1);

    if (!html) {
      html = await fetchWithRetry(website, 1);
    }

    if (!html) return result;

    const $ = cheerio.load(html);
    const text = $('body').text().toLowerCase();

    // Look for "established in YYYY" or "since YYYY" or "founded YYYY"
    const yearPatterns = [
      /(?:established|founded|since|serving since|in business since)\s*(?:in\s*)?(\d{4})/i,
      /(\d{4})\s*-\s*(?:present|today|current)/i,
    ];

    for (const pattern of yearPatterns) {
      const match = text.match(pattern);
      if (match) {
        const year = parseInt(match[1], 10);
        if (year > 1900 && year <= new Date().getFullYear()) {
          result.yearsInBusiness = new Date().getFullYear() - year;
          break;
        }
      }
    }

    // Look for employee count indicators
    const employeePatterns = [
      /(\d+)\+?\s*(?:employees|team members|technicians|staff)/i,
      /team of\s*(\d+)/i,
    ];

    for (const pattern of employeePatterns) {
      const match = text.match(pattern);
      if (match) {
        result.employeeCount = parseInt(match[1], 10);
        break;
      }
    }
  } catch {
    // Silently continue on enrichment failures
  }

  return result;
}

/**
 * Estimate revenue based on available signals
 */
function estimateRevenue(prospect: RawProspect): string | null {
  const reviewCount = prospect.reviewCount || 0;
  const units = prospect.numberOfUnits || prospect.numberOfProperties || 0;

  if (units > 500) return '$5M+';
  if (units > 100) return '$1M-$5M';
  if (units > 50) return '$500K-$1M';

  if (reviewCount > 500) return '$1M-$5M';
  if (reviewCount > 100) return '$500K-$1M';
  if (reviewCount > 30) return '$250K-$500K';
  if (reviewCount > 10) return '$100K-$250K';

  return null;
}

/**
 * Score a prospect for partner/client potential
 * Scale: 0-100
 */
function scoreProspect(
  prospect: RawProspect,
  enrichment: {
    estimatedRevenue: string | null;
    employeeCount: number | null;
    yearsInBusiness: number | null;
  }
): { score: number; breakdown: EnrichedProspect['scoreBreakdown'] } {
  let sizeScore = 0;
  let proximityScore = 0;
  let partnerPotentialScore = 0;
  let reputationScore = 0;

  // Size score (0-25) — bigger companies = more towing needs
  const units = prospect.numberOfUnits || prospect.numberOfProperties || 0;
  if (units > 500) sizeScore = 25;
  else if (units > 200) sizeScore = 20;
  else if (units > 50) sizeScore = 15;
  else if (units > 10) sizeScore = 10;
  else if (enrichment.employeeCount && enrichment.employeeCount > 20) sizeScore = 15;
  else if (enrichment.employeeCount && enrichment.employeeCount > 5) sizeScore = 10;
  else sizeScore = 5;

  // Proximity score (0-25) — Phoenix core is better
  const city = (prospect.city || '').toLowerCase();
  const corePhoenix = ['phoenix', 'tempe', 'scottsdale', 'mesa', 'chandler'];
  const innerRing = ['gilbert', 'glendale', 'peoria'];
  const outerRing = ['surprise', 'goodyear', 'avondale', 'buckeye', 'queen creek'];

  if (corePhoenix.includes(city)) proximityScore = 25;
  else if (innerRing.includes(city)) proximityScore = 20;
  else if (outerRing.includes(city)) proximityScore = 15;
  else proximityScore = 10;

  // Partner potential (0-25) — contact info available = actionable lead
  if (prospect.phone) partnerPotentialScore += 8;
  if (prospect.website) partnerPotentialScore += 7;
  if (prospect.contactEmail || prospect.email) partnerPotentialScore += 10;

  // Reputation score (0-25)
  const rating = prospect.googleRating || 0;
  const reviews = prospect.reviewCount || 0;
  if (rating >= 4.5 && reviews > 50) reputationScore = 25;
  else if (rating >= 4.0 && reviews > 20) reputationScore = 20;
  else if (rating >= 3.5) reputationScore = 15;
  else if (enrichment.yearsInBusiness && enrichment.yearsInBusiness > 10) reputationScore = 15;
  else if (enrichment.yearsInBusiness && enrichment.yearsInBusiness > 5) reputationScore = 10;
  else reputationScore = 5;

  const score = sizeScore + proximityScore + partnerPotentialScore + reputationScore;

  return {
    score,
    breakdown: {
      sizeScore,
      proximityScore,
      partnerPotentialScore,
      reputationScore,
    },
  };
}

async function main(): Promise<void> {
  logSection('Axle Towing — Lead Enrichment');

  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('Usage: npx tsx scripts/prospecting/enrich-leads.ts <input-file> [output-file]');
    console.error('Example: npx tsx scripts/prospecting/enrich-leads.ts data/prospects/hoas.json');
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), inputFile);
  if (!fs.existsSync(inputPath)) {
    console.error(`[ERROR] File not found: ${inputPath}`);
    process.exit(1);
  }

  const outputFile =
    process.argv[3] ||
    inputFile.replace(/\.json$/, '-enriched.json');
  const outputPath = path.resolve(process.cwd(), outputFile);

  console.log(`Input:  ${inputPath}`);
  console.log(`Output: ${outputPath}\n`);

  const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  // Support both flat arrays and ProspectFile format
  const prospects: RawProspect[] = Array.isArray(raw)
    ? raw
    : raw.prospects || raw.hoa_management_companies || [];

  console.log(`Found ${prospects.length} prospects to enrich\n`);

  const enriched: EnrichedProspect[] = [];

  for (let i = 0; i < prospects.length; i++) {
    const prospect = prospects[i];
    const name =
      prospect.name || prospect.businessName || prospect.companyName || 'Unknown';
    console.log(
      `  [${i + 1}/${prospects.length}] Enriching: ${name}`
    );

    // Enrich from website (rate limited)
    const websiteData = await enrichFromWebsite(
      prospect.website || null
    );

    // Estimate revenue from available signals
    const estimatedRevenue =
      websiteData.estimatedRevenue || estimateRevenue(prospect);

    const enrichment = {
      estimatedRevenue,
      employeeCount: websiteData.employeeCount,
      yearsInBusiness: websiteData.yearsInBusiness,
      bbbRating: null, // Not scraping BBB per client instructions
    };

    const { score, breakdown } = scoreProspect(prospect, enrichment);

    enriched.push({
      original: prospect as Record<string, unknown>,
      enrichment,
      score,
      scoreBreakdown: breakdown,
    });

    // Rate limit website lookups
    if (prospect.website) {
      await sleep(REQUEST_DELAY_MS);
    }
  }

  // Sort by score descending
  enriched.sort((a, b) => b.score - a.score);

  const output = {
    metadata: {
      generated: today(),
      source: `Enriched from ${inputFile}`,
      region: 'Phoenix AZ Metro Area',
      purpose: 'Enriched and scored prospect list for Axle Towing outreach',
      totalResults: enriched.length,
      scoringMethod:
        'Composite score (0-100): size(25) + proximity(25) + contactability(25) + reputation(25)',
    },
    prospects: enriched,
  };

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

  // Print summary
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  Enrichment Summary`);
  console.log(`${'='.repeat(60)}`);
  console.log(`  Total prospects: ${enriched.length}`);
  console.log(
    `  High score (70+): ${enriched.filter((e) => e.score >= 70).length}`
  );
  console.log(
    `  Medium score (40-69): ${enriched.filter((e) => e.score >= 40 && e.score < 70).length}`
  );
  console.log(
    `  Low score (<40): ${enriched.filter((e) => e.score < 40).length}`
  );

  if (enriched.length > 0) {
    console.log(`\n  Top 5 prospects:`);
    for (const e of enriched.slice(0, 5)) {
      const name =
        (e.original as RawProspect).name ||
        (e.original as RawProspect).businessName ||
        (e.original as RawProspect).companyName ||
        'Unknown';
      console.log(`    ${e.score}/100 — ${name}`);
    }
  }

  console.log(`\n[OK] Saved enriched data to ${outputPath}`);
}

main().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
