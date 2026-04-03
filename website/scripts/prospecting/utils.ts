/**
 * Shared utilities for prospecting scripts
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ProspectFile } from './types';

/** Rate-limit delay between requests (ms) */
export const REQUEST_DELAY_MS = 2000;

/** Phoenix metro cities to search */
export const PHOENIX_METRO_CITIES = [
  'Phoenix',
  'Scottsdale',
  'Tempe',
  'Mesa',
  'Chandler',
  'Gilbert',
  'Glendale',
  'Peoria',
  'Surprise',
  'Goodyear',
  'Avondale',
  'Buckeye',
  'Queen Creek',
  'Maricopa',
  'Casa Grande',
];

/** User-Agent string for requests */
export const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/**
 * Sleep for a given number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch a URL with standard headers and error handling
 */
export async function fetchWithRetry(
  url: string,
  retries = 3
): Promise<string | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(url, {
        headers: {
          'User-Agent': USER_AGENT,
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        console.warn(
          `  [WARN] HTTP ${response.status} for ${url} (attempt ${attempt}/${retries})`
        );
        if (attempt < retries) {
          await sleep(REQUEST_DELAY_MS * attempt);
          continue;
        }
        return null;
      }

      return await response.text();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.warn(
        `  [WARN] Fetch error for ${url}: ${message} (attempt ${attempt}/${retries})`
      );
      if (attempt < retries) {
        await sleep(REQUEST_DELAY_MS * attempt);
      }
    }
  }
  return null;
}

/**
 * Check robots.txt for a given domain
 * Returns true if scraping is likely allowed for the given path
 */
export async function checkRobotsTxt(
  baseUrl: string,
  targetPath = '/'
): Promise<boolean> {
  try {
    const robotsUrl = new URL('/robots.txt', baseUrl).toString();
    const text = await fetchWithRetry(robotsUrl, 1);
    if (!text) return true; // No robots.txt = assume allowed

    const lines = text.split('\n');
    let relevantSection = false;

    for (const line of lines) {
      const trimmed = line.trim().toLowerCase();
      if (trimmed.startsWith('user-agent:')) {
        const agent = trimmed.replace('user-agent:', '').trim();
        relevantSection = agent === '*' || agent === 'mozilla';
      }
      if (relevantSection && trimmed.startsWith('disallow:')) {
        const disallowed = trimmed.replace('disallow:', '').trim();
        if (disallowed && targetPath.startsWith(disallowed)) {
          console.log(`  [INFO] robots.txt disallows ${targetPath} on ${baseUrl}`);
          return false;
        }
      }
    }
    return true;
  } catch {
    return true; // If we can't check, assume allowed
  }
}

/**
 * Save prospects to a JSON file
 */
export function saveProspects<T>(
  filePath: string,
  data: ProspectFile<T>
): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n[OK] Saved ${data.prospects.length} prospects to ${filePath}`);
}

/**
 * Load prospects from a JSON file
 */
export function loadProspects<T>(filePath: string): ProspectFile<T> {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as ProspectFile<T>;
}

/**
 * Clean and normalize phone numbers
 */
export function normalizePhone(phone: string | null | undefined): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone.trim() || null;
}

/**
 * Extract email addresses from text
 */
export function extractEmails(text: string): string[] {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return [...new Set(text.match(emailRegex) || [])];
}

/**
 * Extract phone numbers from text
 */
export function extractPhones(text: string): string[] {
  const phoneRegex =
    /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
  const matches = text.match(phoneRegex) || [];
  return [
    ...new Set(matches.map((p) => normalizePhone(p)).filter(Boolean) as string[]),
  ];
}

/**
 * Get today's date as YYYY-MM-DD
 */
export function today(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Log a section header
 */
export function logSection(title: string): void {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log(`${'='.repeat(60)}\n`);
}
