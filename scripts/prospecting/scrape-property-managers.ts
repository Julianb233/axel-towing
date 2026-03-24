#!/usr/bin/env npx tsx
/**
 * scrape-property-managers.ts — Find property management companies in Phoenix metro
 *
 * Searches public directories for property management companies
 * that could partner with or contract Axle Towing.
 *
 * Usage: npx tsx scripts/prospecting/scrape-property-managers.ts
 * Output: data/prospects/property-managers.json
 */

import * as path from 'path';
import * as cheerio from 'cheerio';
import type { PropertyManagerProspect, ProspectFile } from './types';
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

const OUTPUT_PATH = path.resolve(
  __dirname,
  '../../data/prospects/property-managers.json'
);

/**
 * Scrape Yellow Pages for property management companies
 */
async function scrapeYellowPages(): Promise<PropertyManagerProspect[]> {
  console.log('[1/3] Searching Yellow Pages for property managers...');
  const prospects: PropertyManagerProspect[] = [];

  for (const city of PHOENIX_METRO_CITIES.slice(0, 5)) {
    const url = `https://www.yellowpages.com/search?search_terms=property+management+company&geo_location_terms=${encodeURIComponent(city)}+AZ`;
    const allowed = await checkRobotsTxt(
      'https://www.yellowpages.com',
      '/search'
    );

    if (!allowed) {
      console.log(`  [SKIP] Yellow Pages disallows scraping /search`);
      break;
    }

    const html = await fetchWithRetry(url);
    if (html) {
      const $ = cheerio.load(html);

      $('.result, .srp-listing, .v-card').each((_i, el) => {
        const $el = $(el);
        const companyName = $el
          .find('.business-name a, .n a, h2 a')
          .first()
          .text()
          .trim();
        const phone = $el.find('.phones, .phone').first().text().trim();
        const address = $el.find('.adr, .street-address').first().text().trim();
        const website =
          $el.find('a.track-visit-website').attr('href') || null;

        if (companyName && companyName.length > 3) {
          prospects.push({
            companyName,
            contactPerson: null,
            email: null,
            phone: normalizePhone(phone) || null,
            address: address || null,
            city,
            state: 'AZ',
            website,
            numberOfProperties: null,
            areasServed: [city],
            source: 'yellowpages.com',
            scrapedAt: today(),
          });
        }
      });

      console.log(`  ${city}: ${prospects.length} total so far`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  return prospects;
}

/**
 * Scrape Apartments.com property management listings
 */
async function scrapeApartmentsCom(): Promise<PropertyManagerProspect[]> {
  console.log('[2/3] Searching Apartments.com for property managers...');
  const prospects: PropertyManagerProspect[] = [];

  const url =
    'https://www.apartments.com/property-management/phoenix-az/';
  const allowed = await checkRobotsTxt(
    'https://www.apartments.com',
    '/property-management/'
  );

  if (!allowed) {
    console.log('  [SKIP] Apartments.com disallows this path');
    return prospects;
  }

  const html = await fetchWithRetry(url);
  if (html) {
    const $ = cheerio.load(html);

    $(
      '.placard, .property-card, .listing-card, .mortar-wrapper article'
    ).each((_i, el) => {
      const $el = $(el);
      const text = $el.text();
      const companyName = $el
        .find('.property-title, .title, h2, h3')
        .first()
        .text()
        .trim();
      const phone =
        $el.find('.phone-link, .phone, [href^="tel:"]').first().text().trim() ||
        null;

      if (companyName && companyName.length > 3) {
        const emails = extractEmails(text);
        const phones = extractPhones(text);

        prospects.push({
          companyName,
          contactPerson: null,
          email: emails[0] || null,
          phone: normalizePhone(phone) || phones[0] || null,
          address: null,
          city: 'Phoenix',
          state: 'AZ',
          website: null,
          numberOfProperties: null,
          areasServed: ['Phoenix Metro'],
          source: 'apartments.com',
          scrapedAt: today(),
        });
      }
    });

    console.log(`  Found ${prospects.length} from Apartments.com`);
  }

  await sleep(REQUEST_DELAY_MS);
  return prospects;
}

/**
 * Search NARPM (National Association of Residential Property Managers)
 */
async function scrapeNARPM(): Promise<PropertyManagerProspect[]> {
  console.log('[3/3] Searching NARPM directory...');
  const prospects: PropertyManagerProspect[] = [];

  const url =
    'https://www.narpm.org/find-a-property-manager/search/?state=AZ&city=Phoenix';
  const allowed = await checkRobotsTxt(
    'https://www.narpm.org',
    '/find-a-property-manager/'
  );

  if (!allowed) {
    console.log('  [SKIP] NARPM disallows this path');
    return prospects;
  }

  const html = await fetchWithRetry(url);
  if (html) {
    const $ = cheerio.load(html);

    $(
      '.member-listing, .search-result, .member-card, .result-item'
    ).each((_i, el) => {
      const $el = $(el);
      const text = $el.text();
      const companyName = $el
        .find('.company-name, .name, h3, h4')
        .first()
        .text()
        .trim();

      if (companyName && companyName.length > 3) {
        const emails = extractEmails(text);
        const phones = extractPhones(text);
        const website = $el.find('a[href*="http"]').attr('href') || null;

        prospects.push({
          companyName,
          contactPerson: null,
          email: emails[0] || null,
          phone: phones[0] || null,
          address: null,
          city: 'Phoenix',
          state: 'AZ',
          website:
            website && !website.includes('narpm.org') ? website : null,
          numberOfProperties: null,
          areasServed: ['Phoenix Metro'],
          source: 'narpm.org',
          scrapedAt: today(),
        });
      }
    });

    console.log(`  Found ${prospects.length} from NARPM`);
  }

  await sleep(REQUEST_DELAY_MS);
  return prospects;
}

/**
 * Deduplicate by normalized company name
 */
function deduplicateProspects(
  prospects: PropertyManagerProspect[]
): PropertyManagerProspect[] {
  const seen = new Map<string, PropertyManagerProspect>();
  for (const p of prospects) {
    const key = p.companyName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key)) {
      seen.set(key, p);
    } else {
      const existing = seen.get(key)!;
      existing.email = existing.email || p.email;
      existing.phone = existing.phone || p.phone;
      existing.website = existing.website || p.website;
      existing.address = existing.address || p.address;
      const areas = new Set([...existing.areasServed, ...p.areasServed]);
      existing.areasServed = [...areas];
    }
  }
  return [...seen.values()];
}

async function main(): Promise<void> {
  logSection('Axle Towing — Property Manager Scraper');
  console.log(`Region: Phoenix AZ Metro Area`);
  console.log(`Output: ${OUTPUT_PATH}\n`);

  const allProspects: PropertyManagerProspect[] = [];

  const ypResults = await scrapeYellowPages();
  allProspects.push(...ypResults);

  const aptResults = await scrapeApartmentsCom();
  allProspects.push(...aptResults);

  const narpmResults = await scrapeNARPM();
  allProspects.push(...narpmResults);

  const deduped = deduplicateProspects(allProspects);

  const output: ProspectFile<PropertyManagerProspect> = {
    metadata: {
      generated: today(),
      source: 'Yellow Pages, Apartments.com, NARPM',
      region: 'Phoenix AZ Metro Area',
      purpose:
        'Property management companies — towing partnership targets for Axle Towing',
      totalResults: deduped.length,
    },
    prospects: deduped,
  };

  saveProspects(OUTPUT_PATH, output);

  console.log(
    `\n[DONE] Scraped ${deduped.length} unique property manager prospects`
  );
}

main().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
