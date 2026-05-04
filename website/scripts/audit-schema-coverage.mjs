#!/usr/bin/env node
// AI-8998: Audit schema.org coverage across every public blog/service page
// in the axel-towing website.
//
// Outputs a human-readable Markdown report listing:
//   - which pages have which schema types
//   - which pages are MISSING schema entirely
//   - recommended schema additions per page (Article / FAQ / HowTo / etc.)
//
// Usage:
//   node scripts/audit-schema-coverage.mjs                  # writes ./docs/seo/schema-audit-baseline.md
//   node scripts/audit-schema-coverage.mjs --out path.md    # custom output
//   node scripts/audit-schema-coverage.mjs --json           # JSON instead of Markdown
//   node scripts/audit-schema-coverage.mjs --strict         # exit 1 if any pages missing

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'src/app');

const args = process.argv.slice(2);
const outFlag = args.indexOf('--out');
const outPath = outFlag >= 0 ? args[outFlag + 1] : path.join(ROOT, 'docs/seo/schema-audit-baseline.md');
const jsonMode = args.includes('--json');
const strict = args.includes('--strict');

const SCHEMA_TYPES = [
  'articleSchema',
  'faqSchema',
  'howToSchema',
  'breadcrumbSchema',
  'localBusinessSchema',
  'serviceSchema',
  'itemListSchema',
  'organizationSchema',
  'websiteSchema',
  'aggregateRatingSchema',
  'towingServiceSchema',
];

const RAW_LDJSON_RE = /application\/ld\+json/;

async function walk(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, acc);
    else if (e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}

function detectSchemas(src) {
  const found = new Set();
  for (const fn of SCHEMA_TYPES) {
    // matches both helper calls (`articleSchema(`) and locally declared
    // raw JSON-LD constants (`const articleSchema = {`).
    const re = new RegExp(`\\b${fn}\\s*[(=]`);
    if (re.test(src)) found.add(fn);
  }
  if (RAW_LDJSON_RE.test(src) && !found.size) found.add('rawLdJson');
  return [...found];
}

function recommendForBlog(slug, src) {
  // Heuristics: which schemas SHOULD this page have?
  const recs = new Set(['articleSchema', 'breadcrumbSchema']);
  if (/<h2|## |###|FAQ|frequently asked/i.test(src)) recs.add('faqSchema');
  if (/^#?\s*how to|how to .*: |steps?:|step \d|step-by-step/im.test(src) ||
      /How to /i.test(slug.replace(/-/g, ' '))) {
    recs.add('howToSchema');
  }
  return [...recs];
}

function categorize(filePath) {
  const rel = path.relative(APP_DIR, filePath);
  if (rel.startsWith('blog/') && rel !== 'blog/page.tsx') return 'blog';
  if (rel.startsWith('services/') && rel !== 'services/page.tsx') return 'service';
  if (rel.startsWith('areas-served/') && rel !== 'areas-served/page.tsx') return 'area';
  if (rel.startsWith('shop/') && rel !== 'shop/page.tsx') return 'shop';
  if (rel === 'page.tsx') return 'home';
  if (rel.startsWith('es/')) return 'es';
  return 'other';
}

async function main() {
  if (!existsSync(APP_DIR)) {
    console.error(`Cannot find ${APP_DIR}`);
    process.exit(2);
  }

  const pages = await walk(APP_DIR);
  const records = await Promise.all(pages.map(async (p) => {
    const src = await readFile(p, 'utf-8');
    const found = detectSchemas(src);
    const slug = path.basename(path.dirname(p));
    const cat = categorize(p);
    const recs = cat === 'blog' ? recommendForBlog(slug, src) : [];
    const missing = recs.filter((r) => !found.includes(r));
    return {
      path: path.relative(ROOT, p),
      category: cat,
      slug,
      found,
      recommended: recs,
      missing,
    };
  }));

  const blogRecords = records.filter((r) => r.category === 'blog');
  const summary = {
    totalPages: records.length,
    blogPages: blogRecords.length,
    blogWithArticleSchema: blogRecords.filter((r) => r.found.includes('articleSchema')).length,
    blogWithFaqSchema: blogRecords.filter((r) => r.found.includes('faqSchema')).length,
    blogWithHowToSchema: blogRecords.filter((r) => r.found.includes('howToSchema')).length,
    blogWithBreadcrumb: blogRecords.filter((r) => r.found.includes('breadcrumbSchema')).length,
    blogMissingAllSchema: blogRecords.filter((r) => r.found.length === 0).length,
    blogMissingArticle: blogRecords.filter((r) => !r.found.includes('articleSchema')).length,
    blogMissingFaqWhereExpected: blogRecords.filter((r) =>
      r.recommended.includes('faqSchema') && !r.found.includes('faqSchema')
    ).length,
    blogMissingHowToWhereExpected: blogRecords.filter((r) =>
      r.recommended.includes('howToSchema') && !r.found.includes('howToSchema')
    ).length,
  };

  if (jsonMode) {
    const payload = JSON.stringify({ summary, records }, null, 2);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, payload);
    console.log(`JSON written to ${outPath}`);
  } else {
    const lines = [];
    lines.push('# Schema Coverage Audit');
    lines.push('');
    lines.push(`_Generated: ${new Date().toISOString()}_`);
    lines.push('');
    lines.push('## Summary');
    lines.push('');
    lines.push(`- Total pages scanned: **${summary.totalPages}**`);
    lines.push(`- Blog pages: **${summary.blogPages}**`);
    lines.push(`  - With Article schema: **${summary.blogWithArticleSchema}** / ${summary.blogPages}`);
    lines.push(`  - With FAQ schema: **${summary.blogWithFaqSchema}**`);
    lines.push(`  - With HowTo schema: **${summary.blogWithHowToSchema}**`);
    lines.push(`  - With Breadcrumb schema: **${summary.blogWithBreadcrumb}**`);
    lines.push(`  - Missing ALL schema: **${summary.blogMissingAllSchema}**`);
    lines.push('');
    lines.push('## Blog pages missing schema');
    lines.push('');
    lines.push('| Page | Has | Recommended additions |');
    lines.push('|---|---|---|');
    for (const r of blogRecords) {
      if (!r.missing.length) continue;
      lines.push(`| \`${r.slug}\` | ${r.found.join(', ') || '—'} | ${r.missing.join(', ')} |`);
    }
    lines.push('');
    lines.push('## Non-blog pages without site-wide schema');
    lines.push('');
    lines.push('Note: site-wide `Organization` + `WebSite` + `LocalBusiness` schemas are emitted from `src/app/layout.tsx`, so all child pages inherit those. Per-page article/howto/faq is what gets audited above.');
    lines.push('');

    const out = lines.join('\n');
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, out);
    console.log(`Markdown report written to ${outPath}`);
    console.log('');
    console.log(out.split('\n').slice(0, 18).join('\n'));
  }

  if (strict && (summary.blogMissingAllSchema > 0 || summary.blogMissingFaqWhereExpected > 0)) {
    console.error(`\nstrict mode: ${summary.blogMissingAllSchema} pages missing all schema, ${summary.blogMissingFaqWhereExpected} missing recommended FAQ.`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(2); });
