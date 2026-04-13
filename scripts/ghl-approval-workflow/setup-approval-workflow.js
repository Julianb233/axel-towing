#!/usr/bin/env node
/**
 * Axle Towing - GHL Template Approval Workflow Setup
 * AI-7459: Build Elliott Template Approval Workflow in GHL
 *
 * Creates tags and exports workflow config for Elliott's template
 * review/approval process in GoHighLevel.
 *
 * Prerequisites:
 *   - GHL_API_KEY env var (Location API key)
 *   - GHL_LOCATION_ID env var (from GHL Settings)
 *
 * Usage:
 *   node setup-approval-workflow.js              # Export configs (default)
 *   node setup-approval-workflow.js --dry-run    # Print what would be created
 *   node setup-approval-workflow.js --tags       # Create tags via GHL API
 *   node setup-approval-workflow.js --submit     # Show submission instructions
 *   node setup-approval-workflow.js --status     # Check current approval status
 */

const fs = require('fs');
const path = require('path');

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';
const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;

const APPROVAL_TAGS = [
  'needs-elliott-approval',
  'approval-pending',
  'elliott-approved',
  'elliott-revision-needed',
  'templates-approved',
  'approval-escalate',
  'approval-cancelled',
  'revision-in-progress',
];

const TEMPLATE_CATEGORIES = [
  { name: 'PM Nurture 21-Day', file: '../ghl-nurture-workflows/ghl-nurture-workflow-configs.json', count: '7 emails + 2 SMS' },
  { name: 'PM Nurture Workflow', file: '../ghl-nurture-workflows/workflow-pm-nurture-21day.json', count: '21-day sequence' },
  { name: 'Locksmith Referral', file: '../ghl-referral-workflows/workflow-locksmith-referral.json', count: '3 emails' },
  { name: 'Uber/Lyft Referral', file: '../ghl-referral-workflows/workflow-uber-referral.json', count: '3 emails' },
  { name: 'Parking Permit Referral', file: '../ghl-referral-workflows/workflow-parking-permit-referral.json', count: '3 emails' },
  { name: 'Mechanic Referral', file: '../ghl-referral-workflows/workflow-mechanic-referral.json', count: '3 emails' },
  { name: 'Mover Referral', file: '../ghl-referral-workflows/workflow-mover-referral.json', count: '3 emails' },
  { name: 'Painter Referral', file: '../ghl-referral-workflows/workflow-painter-referral.json', count: '3 emails' },
];

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const mode = args.find(a => ['--tags', '--submit', '--status', '--export'].includes(a)) || '--export';

function log(emoji, msg) { console.log(`${emoji}  ${msg}`); }
function logSection(title) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

async function ghlFetch(endpoint, method = 'GET', body = null) {
  if (!API_KEY) throw new Error('GHL_API_KEY not set');
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}`, Version: '2021-07-28' },
  };
  if (body) opts.body = JSON.stringify(body);
  const response = await fetch(`${GHL_BASE_URL}${endpoint}`, opts);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GHL API ${method} ${endpoint}: ${response.status} - ${text}`);
  }
  return response.json();
}

function buildTemplateInventory() {
  logSection('TEMPLATE INVENTORY');
  const inventory = [];
  for (const cat of TEMPLATE_CATEGORIES) {
    const filePath = path.resolve(__dirname, cat.file);
    const exists = fs.existsSync(filePath);
    inventory.push({ name: cat.name, file: cat.file, count: cat.count, exists });
    const icon = exists ? '[+]' : '[~]';
    log(icon, `${cat.name.padEnd(28)} ${cat.count.padEnd(18)} ${exists ? 'Ready' : 'Branch pending'}`);
  }
  const ready = inventory.filter(i => i.exists).length;
  console.log('');
  log('=', `Total: ${ready} ready out of ${inventory.length} categories`);
  return inventory;
}

async function createTags() {
  logSection('TAGS: Approval Workflow Tags');
  if (DRY_RUN) {
    log('~', `Would create ${APPROVAL_TAGS.length} tags:`);
    APPROVAL_TAGS.forEach(t => log('  ', `  - ${t}`));
    return;
  }
  if (!API_KEY) {
    log('!', 'GHL_API_KEY not set. Tags must be created manually:');
    APPROVAL_TAGS.forEach(t => log('  ', `  - ${t}`));
    return;
  }
  for (const tag of APPROVAL_TAGS) {
    try {
      await ghlFetch(`/tags/?locationId=${LOCATION_ID}`, 'POST', { name: tag, locationId: LOCATION_ID });
      log('+', `Tag created: ${tag}`);
    } catch (err) {
      if (err.message.includes('422') || err.message.includes('already')) {
        log('-', `Tag exists: ${tag}`);
      } else {
        log('!', `Tag failed: ${tag} — ${err.message}`);
      }
    }
  }
}

function exportConfigs() {
  logSection('EXPORT: Approval Workflow Configuration');
  const workflowPath = path.join(__dirname, 'workflow-template-approval.json');
  const workflow = JSON.parse(fs.readFileSync(workflowPath, 'utf8'));
  log('+', `Approval workflow: ${workflow.workflow.name}`);
  log('+', `Revision workflow: ${workflow.revisionWorkflow.name}`);
  log('+', `Tags: ${workflow.tags.length}`);

  logSection('GHL SETUP INSTRUCTIONS');
  console.log(`
  WORKFLOW 1: Template Approval -- Elliott Review
  ================================================
  Trigger:  Tag Added = "needs-elliott-approval"
  Status:   ACTIVE (internal ops workflow)

  Steps:
  1. Add tag "approval-pending"
  2. Send email to elliott@axletowing.com (review instructions)
  3. Send SMS to +18057602314 (review ping)
  4. Send GHL internal notification
  5. Wait 2 days
  6. If "elliott-approved" → mark approved, send confirmation
  7. If not → send reminder, wait 3 more days
  8. If still no response → add "approval-escalate", email Julian

  WORKFLOW 2: Template Revision -- Elliott Feedback
  =================================================
  Trigger:  Tag Added = "elliott-revision-needed"
  Steps:
  1. Remove "approval-pending" tag
  2. Add "revision-in-progress" tag
  3. Email julian@aiacrobatics.com (revision notice)
  4. Email elliott@axletowing.com (feedback acknowledged)
  `);

  buildTemplateInventory();
}

async function checkStatus() {
  logSection('APPROVAL STATUS');
  if (!API_KEY) {
    log('!', 'GHL_API_KEY not set. Check status manually in GHL.');
    return;
  }
  try {
    const pending = await ghlFetch(`/contacts/?locationId=${LOCATION_ID}&query=approval-pending`);
    const approved = await ghlFetch(`/contacts/?locationId=${LOCATION_ID}&query=templates-approved`);
    log('?', `Pending: ${pending.contacts?.length || 0}`);
    log('+', `Approved: ${approved.contacts?.length || 0}`);
  } catch (err) {
    log('!', `Status check failed: ${err.message}`);
  }
}

async function main() {
  console.log('');
  console.log('+------------------------------------------------------------+');
  console.log('|  Axle Towing - Template Approval Workflow Setup            |');
  console.log('|  AI-7459: Elliott Template Review & Approval               |');
  console.log('+------------------------------------------------------------+');
  if (DRY_RUN) log('~', 'DRY RUN MODE');

  switch (mode) {
    case '--tags': await createTags(); break;
    case '--submit':
      const inv = buildTemplateInventory();
      log('i', 'To submit: tag an internal contact with "needs-elliott-approval" in GHL');
      break;
    case '--status': await checkStatus(); break;
    default: exportConfigs();
  }
  logSection('DONE');
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
