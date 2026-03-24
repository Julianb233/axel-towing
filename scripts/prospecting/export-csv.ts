#!/usr/bin/env npx tsx
/**
 * export-csv.ts — Export any prospects JSON file to CSV for CRM import
 *
 * Handles both raw prospect files and enriched files.
 * Auto-detects the format and flattens nested data.
 *
 * Usage: npx tsx scripts/prospecting/export-csv.ts <input-file> [output-file]
 * Example: npx tsx scripts/prospecting/export-csv.ts data/prospects/hoas.json
 * Output: data/prospects/hoas.csv (or specified output file)
 */

import * as fs from 'fs';
import * as path from 'path';
import { logSection } from './utils';

interface FlatRecord {
  [key: string]: string | number | null;
}

/**
 * Flatten a nested object into a single-level record
 */
function flattenObject(
  obj: Record<string, unknown>,
  prefix = ''
): FlatRecord {
  const result: FlatRecord = {};

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}_${key}` : key;

    if (value === null || value === undefined) {
      result[fullKey] = null;
    } else if (Array.isArray(value)) {
      result[fullKey] = value.join('; ');
    } else if (typeof value === 'object') {
      Object.assign(result, flattenObject(value as Record<string, unknown>, fullKey));
    } else {
      result[fullKey] = value as string | number;
    }
  }

  return result;
}

/**
 * Escape a CSV field value
 */
function escapeCsvField(value: string | number | null): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Convert an array of flat records to CSV string
 */
function toCsv(records: FlatRecord[]): string {
  if (records.length === 0) return '';

  // Collect all unique headers
  const headerSet = new Set<string>();
  for (const record of records) {
    for (const key of Object.keys(record)) {
      headerSet.add(key);
    }
  }

  // Prioritize common fields first
  const priorityFields = [
    'name',
    'businessName',
    'companyName',
    'original_name',
    'original_businessName',
    'original_companyName',
    'phone',
    'original_phone',
    'email',
    'original_email',
    'contactEmail',
    'original_contactEmail',
    'contactPhone',
    'original_contactPhone',
    'address',
    'original_address',
    'city',
    'original_city',
    'state',
    'original_state',
    'website',
    'original_website',
    'score',
    'googleRating',
    'original_googleRating',
    'reviewCount',
    'original_reviewCount',
  ];

  const headers = [
    ...priorityFields.filter((f) => headerSet.has(f)),
    ...[...headerSet].filter((h) => !priorityFields.includes(h)).sort(),
  ];

  const lines: string[] = [];
  lines.push(headers.map(escapeCsvField).join(','));

  for (const record of records) {
    const values = headers.map((h) => escapeCsvField(record[h] ?? null));
    lines.push(values.join(','));
  }

  return lines.join('\n');
}

async function main(): Promise<void> {
  logSection('Axle Towing — CSV Exporter');

  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error(
      'Usage: npx tsx scripts/prospecting/export-csv.ts <input-file> [output-file]'
    );
    console.error(
      'Example: npx tsx scripts/prospecting/export-csv.ts data/prospects/hoas.json'
    );
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), inputFile);
  if (!fs.existsSync(inputPath)) {
    console.error(`[ERROR] File not found: ${inputPath}`);
    process.exit(1);
  }

  const outputFile =
    process.argv[3] || inputFile.replace(/\.json$/, '.csv');
  const outputPath = path.resolve(process.cwd(), outputFile);

  console.log(`Input:  ${inputPath}`);
  console.log(`Output: ${outputPath}\n`);

  const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  // Support multiple formats
  let records: Record<string, unknown>[];
  if (Array.isArray(raw)) {
    records = raw;
  } else if (raw.prospects) {
    records = raw.prospects;
  } else if (raw.hoa_management_companies) {
    records = raw.hoa_management_companies;
  } else {
    console.error(
      '[ERROR] Unrecognized file format. Expected array or object with "prospects" key.'
    );
    process.exit(1);
  }

  console.log(`Found ${records.length} records to export\n`);

  // Flatten all records
  const flat = records.map((r) => flattenObject(r));

  // Convert to CSV
  const csv = toCsv(flat);

  // Write output
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, csv, 'utf-8');

  console.log(`[OK] Exported ${records.length} records to ${outputPath}`);
  console.log(`     File size: ${(Buffer.byteLength(csv) / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
