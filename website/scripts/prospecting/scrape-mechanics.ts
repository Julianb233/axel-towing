#!/usr/bin/env npx tsx
/**
 * scrape-mechanics.ts — Find auto repair shops in Phoenix metro
 *
 * Searches public directories for auto repair / mechanic shops
 * that could be referral partners for Axle Towing.
 *
 * Usage: npx tsx scripts/prospecting/scrape-mechanics.ts
 * Output: data/prospects/mechanics.json
 */

import * as path from 'path';
import * as cheerio from 'cheerio';
import type { MechanicProspect, ProspectFile } from './types';
import {
  fetchWithRetry,
  checkRobotsTxt,
  saveProspects,
  sleep,
  normalizePhone,
  today,
  logSection,
  REQUEST_DELAY_MS,
  PHOENIX_METRO_CITIES,
} from './utils';

const OUTPUT_PATH = path.resolve(
  __dirname,
  '../../data/prospects/mechanics.json'
);

/**
 * Scrape Yellow Pages for auto repair shops
 */
async function scrapeYellowPages(): Promise<MechanicProspect[]> {
  console.log('[1/2] Searching Yellow Pages for auto repair shops...');
  const prospects: MechanicProspect[] = [];

  const searchTerms = [
    'auto+repair+shop',
    'mechanic',
  ];

  for (const term of searchTerms) {
    for (const city of PHOENIX_METRO_CITIES.slice(0, 4)) {
      const url = `https://www.yellowpages.com/search?search_terms=${term}&geo_location_terms=${encodeURIComponent(city)}+AZ`;
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
          const businessName = $el
            .find('.business-name a, .n a, h2 a')
            .first()
            .text()
            .trim();
          const phone = $el.find('.phones, .phone').first().text().trim();
          const address = $el
            .find('.adr, .street-address')
            .first()
            .text()
            .trim();
          const website =
            $el.find('a.track-visit-website').attr('href') || null;

          const categories = $el
            .find('.categories a, .links a')
            .map((_j, a) => $(a).text().trim())
            .get()
            .filter((c: string) => c.length > 0);

          const ratingText = $el.find('.ratings, .rating').first().text();
          const ratingMatch = ratingText.match(/([\d.]+)/);
          const rating = ratingMatch ? parseFloat(ratingMatch[1]) : null;

          const reviewText = $el
            .find('.count, .review-count')
            .first()
            .text();
          const reviewMatch = reviewText.match(/(\d+)/);
          const reviewCount = reviewMatch
            ? parseInt(reviewMatch[1], 10)
            : null;

          if (businessName && businessName.length > 3) {
            prospects.push({
              businessName,
              phone: normalizePhone(phone) || null,
              address: address || null,
              city,
              state: 'AZ',
              website,
              googleRating: rating,
              reviewCount,
              specialties: categories,
              source: 'yellowpages.com',
              scrapedAt: today(),
            });
          }
        });

        console.log(
          `  ${term} / ${city}: ${prospects.length} total so far`
        );
      }

      await sleep(REQUEST_DELAY_MS);
    }
  }

  return prospects;
}

/**
 * Scrape Yelp for auto repair shops
 */
async function scrapeYelp(): Promise<MechanicProspect[]> {
  console.log('[2/2] Searching Yelp for auto repair shops...');
  const prospects: MechanicProspect[] = [];

  const url =
    'https://www.yelp.com/search?find_desc=auto+repair&find_loc=Phoenix%2C+AZ';
  const allowed = await checkRobotsTxt('https://www.yelp.com', '/search');

  if (!allowed) {
    console.log('  [SKIP] Yelp disallows scraping /search');
    return prospects;
  }

  const html = await fetchWithRetry(url);
  if (html) {
    const $ = cheerio.load(html);

    $(
      '[data-testid="serp-ia-card"], .container__09f24__mpR8_, li[class*="border"]'
    ).each((_i, el) => {
      const $el = $(el);
      const text = $el.text();
      const businessName = $el
        .find(
          'a[href*="/biz/"], h3, [class*="businessName"], [class*="heading"]'
        )
        .first()
        .text()
        .trim();

      const ratingEl = $el.find('[aria-label*="star rating"], [class*="star"]');
      const ratingLabel = ratingEl.attr('aria-label') || '';
      const ratingMatch = ratingLabel.match(/([\d.]+)/);
      const rating = ratingMatch ? parseFloat(ratingMatch[1]) : null;

      const reviewMatch = text.match(/(\d+)\s*reviews?/i);
      const reviewCount = reviewMatch ? parseInt(reviewMatch[1], 10) : null;

      const phoneMatch = text.match(
        /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/
      );
      const phone = phoneMatch ? normalizePhone(phoneMatch[0]) : null;

      if (businessName && businessName.length > 3) {
        const link = $el.find('a[href*="/biz/"]').attr('href');
        const website = link ? `https://www.yelp.com${link}` : null;

        prospects.push({
          businessName,
          phone,
          address: null,
          city: 'Phoenix',
          state: 'AZ',
          website,
          googleRating: rating,
          reviewCount,
          specialties: [],
          source: 'yelp.com',
          scrapedAt: today(),
        });
      }
    });

    console.log(`  Found ${prospects.length} from Yelp`);
  }

  await sleep(REQUEST_DELAY_MS);
  return prospects;
}

/**
 * Deduplicate by normalized business name
 */
function deduplicateProspects(
  prospects: MechanicProspect[]
): MechanicProspect[] {
  const seen = new Map<string, MechanicProspect>();
  for (const p of prospects) {
    const key = p.businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key)) {
      seen.set(key, p);
    } else {
      const existing = seen.get(key)!;
      existing.phone = existing.phone || p.phone;
      existing.address = existing.address || p.address;
      existing.website = existing.website || p.website;
      existing.googleRating = existing.googleRating || p.googleRating;
      existing.reviewCount = existing.reviewCount || p.reviewCount;
      const specialties = new Set([
        ...existing.specialties,
        ...p.specialties,
      ]);
      existing.specialties = [...specialties];
    }
  }
  return [...seen.values()];
}

async function main(): Promise<void> {
  logSection('Axle Towing — Auto Repair / Mechanic Scraper');
  console.log(`Region: Phoenix AZ Metro Area`);
  console.log(`Output: ${OUTPUT_PATH}\n`);

  const allProspects: MechanicProspect[] = [];

  const ypResults = await scrapeYellowPages();
  allProspects.push(...ypResults);

  const yelpResults = await scrapeYelp();
  allProspects.push(...yelpResults);

  const deduped = deduplicateProspects(allProspects);

  const output: ProspectFile<MechanicProspect> = {
    metadata: {
      generated: today(),
      source: 'Yellow Pages, Yelp',
      region: 'Phoenix AZ Metro Area',
      purpose:
        'Auto repair shops and mechanics — referral partner targets for Axle Towing',
      totalResults: deduped.length,
    },
    prospects: deduped,
  };

  saveProspects(OUTPUT_PATH, output);

  console.log(
    `\n[DONE] Scraped ${deduped.length} unique mechanic prospects`
  );
}

main().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
