#!/usr/bin/env npx tsx
/**
 * scrape-hoas.ts — Find HOA management companies in Phoenix metro
 *
 * Searches public HOA directories and association listings to build
 * a prospect list for Axle Towing's outreach.
 *
 * Usage: npx tsx scripts/prospecting/scrape-hoas.ts
 * Output: data/prospects/hoas.json
 */

import * as path from 'path';
import * as cheerio from 'cheerio';
import type { HOAProspect, ProspectFile } from './types';
import {
  fetchWithRetry,
  checkRobotsTxt,
  saveProspects,
  sleep,
  extractEmails,
  extractPhones,
  normalizePhone,
  today,
  logSection,
  REQUEST_DELAY_MS,
  PHOENIX_METRO_CITIES,
} from './utils';

const OUTPUT_PATH = path.resolve(__dirname, '../../data/prospects/hoas.json');

/**
 * Scrape Arizona HOA listing sites for management companies
 */
async function scrapeAZHoaDirectory(): Promise<HOAProspect[]> {
  console.log('[1/3] Searching Arizona HOA directories...');
  const prospects: HOAProspect[] = [];

  const azHoaUrl = 'https://azhoainfo.com/management-companies/';
  const allowed = await checkRobotsTxt('https://azhoainfo.com', '/management-companies/');

  if (allowed) {
    const html = await fetchWithRetry(azHoaUrl);
    if (html) {
      const $ = cheerio.load(html);

      $('article, .entry-content li, .management-company, .listing').each(
        (_i, el) => {
          const $el = $(el);
          const text = $el.text();
          const name =
            $el.find('h2, h3, h4, .title, a').first().text().trim() ||
            text.split('\n')[0]?.trim();

          if (name && name.length > 3 && name.length < 100) {
            const emails = extractEmails(text);
            const phones = extractPhones(text);
            const link = $el.find('a').attr('href') || null;

            prospects.push({
              name,
              type: 'management_company',
              managementCompany: null,
              contactEmail: emails[0] || null,
              contactPhone: phones[0] || null,
              address: null,
              city: 'Phoenix',
              state: 'AZ',
              website: link?.startsWith('http') ? link : null,
              numberOfUnits: null,
              source: 'azhoainfo.com',
              scrapedAt: today(),
            });
          }
        }
      );
      console.log(`  Found ${prospects.length} from AZ HOA Info`);
    }
  }

  await sleep(REQUEST_DELAY_MS);
  return prospects;
}

/**
 * Search Community Associations Institute (CAI) member directory
 */
async function scrapeCAIDirectory(): Promise<HOAProspect[]> {
  console.log('[2/3] Searching Community Associations Institute listings...');
  const prospects: HOAProspect[] = [];

  const caiUrl =
    'https://www.caionline.org/HomeownerLeaders/FindaManager/Pages/default.aspx';
  const allowed = await checkRobotsTxt('https://www.caionline.org', '/HomeownerLeaders/');

  if (allowed) {
    const html = await fetchWithRetry(caiUrl);
    if (html) {
      const $ = cheerio.load(html);

      $('.manager-listing, .search-result, .member-card, tr').each((_i, el) => {
        const $el = $(el);
        const text = $el.text();

        if (text.toLowerCase().includes('arizona') || text.includes(', AZ')) {
          const name =
            $el.find('.name, .company-name, h3, td:first-child').first().text().trim();
          if (name && name.length > 3) {
            const emails = extractEmails(text);
            const phones = extractPhones(text);

            prospects.push({
              name,
              type: 'management_company',
              managementCompany: null,
              contactEmail: emails[0] || null,
              contactPhone: phones[0] || null,
              address: null,
              city: null,
              state: 'AZ',
              website: null,
              numberOfUnits: null,
              source: 'caionline.org',
              scrapedAt: today(),
            });
          }
        }
      });
      console.log(`  Found ${prospects.length} from CAI directory`);
    }
  }

  await sleep(REQUEST_DELAY_MS);
  return prospects;
}

/**
 * Search HOA-related Yellow Pages / directory listings
 */
async function scrapeYellowPagesHOA(): Promise<HOAProspect[]> {
  console.log('[3/3] Searching Yellow Pages for HOA management companies...');
  const prospects: HOAProspect[] = [];

  for (const city of PHOENIX_METRO_CITIES.slice(0, 5)) {
    const url = `https://www.yellowpages.com/search?search_terms=hoa+management+company&geo_location_terms=${encodeURIComponent(city)}+AZ`;
    const allowed = await checkRobotsTxt('https://www.yellowpages.com', '/search');

    if (!allowed) {
      console.log(`  [SKIP] Yellow Pages disallows scraping /search`);
      break;
    }

    const html = await fetchWithRetry(url);
    if (html) {
      const $ = cheerio.load(html);

      $('.result, .search-results .srp-listing, .v-card').each((_i, el) => {
        const $el = $(el);
        const name = $el
          .find('.business-name a, .n a, h2 a')
          .first()
          .text()
          .trim();
        const phone = $el.find('.phones, .phone').first().text().trim();
        const address = $el.find('.adr, .street-address').first().text().trim();
        const website = $el.find('a.track-visit-website').attr('href') || null;

        if (name && name.length > 3) {
          prospects.push({
            name,
            type: 'management_company',
            managementCompany: null,
            contactEmail: null,
            contactPhone: normalizePhone(phone) || null,
            address: address || null,
            city,
            state: 'AZ',
            website,
            numberOfUnits: null,
            source: 'yellowpages.com',
            scrapedAt: today(),
          });
        }
      });

      console.log(`  ${city}: found ${prospects.length} total so far`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  return prospects;
}

/**
 * Deduplicate prospects by normalized name
 */
function deduplicateProspects(prospects: HOAProspect[]): HOAProspect[] {
  const seen = new Map<string, HOAProspect>();
  for (const p of prospects) {
    const key = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key)) {
      seen.set(key, p);
    } else {
      const existing = seen.get(key)!;
      existing.contactEmail = existing.contactEmail || p.contactEmail;
      existing.contactPhone = existing.contactPhone || p.contactPhone;
      existing.address = existing.address || p.address;
      existing.website = existing.website || p.website;
      existing.numberOfUnits = existing.numberOfUnits || p.numberOfUnits;
    }
  }
  return [...seen.values()];
}

async function main(): Promise<void> {
  logSection('Axle Towing — HOA Management Company Scraper');
  console.log(`Region: Phoenix AZ Metro Area`);
  console.log(`Output: ${OUTPUT_PATH}\n`);

  const allProspects: HOAProspect[] = [];

  const azResults = await scrapeAZHoaDirectory();
  allProspects.push(...azResults);

  const caiResults = await scrapeCAIDirectory();
  allProspects.push(...caiResults);

  const ypResults = await scrapeYellowPagesHOA();
  allProspects.push(...ypResults);

  const deduped = deduplicateProspects(allProspects);

  const output: ProspectFile<HOAProspect> = {
    metadata: {
      generated: today(),
      source: 'AZ HOA directories, CAI, Yellow Pages',
      region: 'Phoenix AZ Metro Area',
      purpose:
        'HOA communities and management companies — towing service targets for Axle Towing',
      totalResults: deduped.length,
    },
    prospects: deduped,
  };

  saveProspects(OUTPUT_PATH, output);

  console.log(`\n[DONE] Scraped ${deduped.length} unique HOA management prospects`);
}

main().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
