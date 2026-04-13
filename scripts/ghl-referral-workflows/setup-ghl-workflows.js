#!/usr/bin/env node
/**
 * Axle Towing - GHL Referral Partner Workflow Setup
 * AI-7460: Build 6 Referral Partner Email Workflows in GHL
 *
 * This script sets up the complete referral partner outreach system
 * in GoHighLevel via the REST API:
 *
 *   1. Creates the "Referral Partner Pipeline" with 9 stages
 *   2. Creates custom fields for partner tracking
 *   3. Creates 6 email workflow configurations (one per partner category)
 *   4. Outputs workflow JSON for GHL import
 *
 * Prerequisites:
 *   - GHL_API_KEY env var (Location API key from GHL Settings > API Keys)
 *   - GHL_LOCATION_ID env var (from GHL Settings > Business Profile)
 *
 * Usage:
 *   GHL_API_KEY=xxx GHL_LOCATION_ID=yyy node setup-ghl-workflows.js
 *   OR: source ../../website/.env.local && node setup-ghl-workflows.js
 *
 * Modes:
 *   --dry-run     Print what would be created without making API calls
 *   --pipeline    Create pipeline only
 *   --tags        Create tags only
 *   --fields      Create custom fields only
 *   --all         Create everything (default)
 *   --export      Export workflow configs as JSON for manual GHL import
 */

const { EMAIL_TEMPLATES, REQUIRED_TAGS, CUSTOM_FIELDS, PIPELINE_STAGES } = require('./email-templates');
const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const GHL_BASE_URL = 'https://rest.gohighlevel.com/v1';
const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const EXPORT_MODE = args.includes('--export');
const mode = args.find(a => ['--pipeline', '--tags', '--fields', '--all', '--export'].includes(a)) || '--all';

// ─── Helpers ─────────────────────────────────────────────────────────

function log(emoji, msg) {
  console.log(`${emoji}  ${msg}`);
}

function logSection(title) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

async function ghlFetch(endpoint, method = 'GET', body = null) {
  if (!API_KEY) {
    throw new Error('GHL_API_KEY not set. Export it or pass via env.');
  }

  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  const url = `${GHL_BASE_URL}${endpoint}`;
  const response = await fetch(url, opts);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GHL API ${method} ${endpoint} failed: ${response.status} - ${text}`);
  }

  return response.json();
}

// Rate limiting: GHL allows ~60 req/min on v1
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Pipeline Setup ──────────────────────────────────────────────────

async function createPipeline() {
  logSection('PIPELINE: Referral Partner Pipeline');

  const stages = PIPELINE_STAGES.map((name, i) => ({
    name,
    position: i,
  }));

  if (DRY_RUN) {
    log('🏗️', `Would create pipeline "Referral Partner Pipeline" with ${stages.length} stages:`);
    stages.forEach((s, i) => log('  ', `  ${i + 1}. ${s.name}`));
    return { id: 'dry-run-pipeline-id', stages: stages.map(s => ({ ...s, id: `dry-${s.position}` })) };
  }

  try {
    const result = await ghlFetch('/pipelines', 'POST', {
      name: 'Referral Partner Pipeline',
      stages,
    });

    log('✅', `Pipeline created: ${result.pipeline?.id || 'ok'}`);
    if (result.pipeline?.stages) {
      result.pipeline.stages.forEach(s => {
        log('  ', `  Stage "${s.name}" -> ${s.id}`);
      });
    }
    return result.pipeline;
  } catch (err) {
    log('❌', `Pipeline creation failed: ${err.message}`);
    log('ℹ️', 'If pipeline already exists, check GHL UI and note the pipeline ID.');
    return null;
  }
}

// ─── Tags Setup ──────────────────────────────────────────────────────

async function createTags() {
  logSection('TAGS: Referral Partner Tags');

  if (DRY_RUN) {
    log('🏷️', `Would create ${REQUIRED_TAGS.length} tags:`);
    REQUIRED_TAGS.forEach(t => log('  ', `  - ${t}`));
    return;
  }

  // GHL v1 doesn't have a dedicated "create tag" endpoint.
  // Tags are created implicitly when added to contacts.
  // We'll create a temporary contact with all tags, then delete it.
  log('ℹ️', 'GHL v1 creates tags implicitly when applied to contacts.');
  log('ℹ️', 'Creating a temp contact with all tags to register them...');

  try {
    const tempContact = await ghlFetch('/contacts', 'POST', {
      firstName: '_TEMP_TAG_SETUP',
      lastName: 'DELETE_ME',
      email: `temp-tag-setup-${Date.now()}@axletowing.internal`,
      tags: REQUIRED_TAGS,
      source: 'Tag Setup Script',
    });

    const contactId = tempContact.contact?.id;
    log('✅', `Tags registered via temp contact ${contactId}`);

    // Clean up temp contact
    if (contactId) {
      await sleep(1000);
      await ghlFetch(`/contacts/${contactId}`, 'DELETE');
      log('🗑️', 'Temp contact deleted');
    }

    REQUIRED_TAGS.forEach(t => log('🏷️', `  Tag: ${t}`));
  } catch (err) {
    log('❌', `Tag creation failed: ${err.message}`);
    log('ℹ️', 'Create tags manually in GHL: Settings > Tags');
  }
}

// ─── Custom Fields Setup ─────────────────────────────────────────────

async function createCustomFields() {
  logSection('CUSTOM FIELDS: Referral Partner Tracking');

  if (DRY_RUN) {
    log('📋', `Would create ${CUSTOM_FIELDS.length} custom fields:`);
    CUSTOM_FIELDS.forEach(f => log('  ', `  - ${f.name} (${f.type})`));
    return;
  }

  for (const field of CUSTOM_FIELDS) {
    try {
      await sleep(500); // rate limit
      const body = {
        name: field.name,
        dataType: field.type,
      };

      // GHL v1 custom field creation endpoint
      const result = await ghlFetch('/custom-fields', 'POST', body);
      log('✅', `Field created: ${field.name} (${result.customField?.id || 'ok'})`);
    } catch (err) {
      if (err.message.includes('422') || err.message.includes('already exists')) {
        log('⏭️', `Field "${field.name}" already exists, skipping`);
      } else {
        log('❌', `Field "${field.name}" failed: ${err.message}`);
      }
    }
  }
}

// ─── Workflow Export ──────────────────────────────────────────────────

function exportWorkflowConfigs() {
  logSection('EXPORT: Workflow Configurations');

  const workflows = {};

  for (const [key, category] of Object.entries(EMAIL_TEMPLATES)) {
    const workflow = {
      name: `Referral Outreach: ${key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`,
      trigger: {
        type: 'TAG_ADDED',
        tag: category.tag,
      },
      steps: [
        {
          type: 'ADD_TAG',
          tag: 'sequence-active',
          description: 'Mark contact as in active sequence',
        },
      ],
      stopCondition: {
        type: 'TAG_ADDED',
        tag: 'sequence-replied',
        description: 'Stop if contact replies to any email',
      },
    };

    // Add email steps with wait periods
    category.emails.forEach((email, i) => {
      // Add wait step (except for first email)
      if (i > 0) {
        const waitDays = category.cadence[i] - category.cadence[i - 1];
        workflow.steps.push({
          type: 'WAIT',
          duration: waitDays,
          unit: 'days',
          description: `Wait ${waitDays} days before next email`,
        });
      }

      workflow.steps.push({
        type: 'SEND_EMAIL',
        step: email.step,
        subjectA: email.subjectA,
        subjectB: email.subjectB,
        body: email.body,
        from: 'elliott@axletowing.com',
        description: `Email ${email.step}: Day ${email.day}`,
      });
    });

    // Add completion steps
    workflow.steps.push(
      {
        type: 'REMOVE_TAG',
        tag: 'sequence-active',
        description: 'Remove active sequence tag',
      },
      {
        type: 'ADD_TAG',
        tag: 'sequence-completed',
        description: 'Mark sequence as completed',
      }
    );

    workflows[key] = workflow;
  }

  // Add the reply-stop workflow (Workflow 5 from spec)
  workflows['reply_stop'] = {
    name: 'Referral Sequence: Reply Stop',
    trigger: {
      type: 'EMAIL_REPLY',
      condition: 'Contact has tag: sequence-active',
    },
    steps: [
      {
        type: 'REMOVE_TAG',
        tag: 'sequence-active',
        description: 'Stop the sequence',
      },
      {
        type: 'ADD_TAG',
        tag: 'sequence-replied',
        description: 'Mark as replied',
      },
      {
        type: 'CREATE_TASK',
        title: 'Reply received from {{contact.first_name}} {{contact.last_name}} - follow up within 24 hrs',
        assignTo: 'elliott@axletowing.com',
        description: 'Manual follow-up required',
      },
      {
        type: 'SEND_SMS',
        to: '4802885526',
        message: 'Referral prospect {{contact.first_name}} {{contact.last_name}} replied. Check GHL.',
        description: 'Notify Elliott via SMS',
      },
    ],
  };

  // Add partner onboarding workflow (Workflow 6 from spec)
  workflows['partner_onboarding'] = {
    name: 'Referral Partner Onboarding',
    trigger: {
      type: 'TAG_ADDED',
      tag: 'partner-active',
    },
    steps: [
      {
        type: 'MOVE_PIPELINE',
        pipeline: 'Referral Partner Pipeline',
        stage: 'Active Partner',
        description: 'Move to Active Partner stage',
      },
      {
        type: 'SEND_EMAIL',
        subject: 'Welcome to the Axle Towing partner network',
        body: `Hi {{contact.first_name}},

Great talking - looking forward to working together.

Here's how to reach us when you have a referral:
Direct dispatch: (480) 288-5526 (24/7 - always answered)
Email: elliott@axletowing.com

When you refer someone to us, just let them know Axle Towing is your trusted towing partner. If it helps, tell them to mention {{contact.first_name}} when they call - we'll give them priority dispatch.

I'll have partner materials sent over within the week.

In the meantime, our website is axletowing.com if any of your customers want to learn more.

Thanks again - let's build something good here.

Elliott
Axle Towing & Impound
(480) 288-5526`,
        from: 'elliott@axletowing.com',
        description: 'Send welcome email',
      },
      {
        type: 'CREATE_TASK',
        title: 'Mail co-branded cards to {{contact.first_name}} {{contact.last_name}} within 5 days',
        assignTo: 'elliott@axletowing.com',
        dueIn: 5,
        dueUnit: 'days',
        description: 'Ensure cards are mailed',
      },
      {
        type: 'WAIT',
        duration: 30,
        unit: 'days',
        description: 'Wait 30 days for first check-in',
      },
      {
        type: 'CREATE_TASK',
        title: '30-day partner check-in: {{contact.first_name}} {{contact.last_name}}',
        assignTo: 'elliott@axletowing.com',
        description: 'Monthly partner relationship maintenance',
      },
    ],
  };

  return workflows;
}

// ─── GHL Workflow Import Format ──────────────────────────────────────

function generateGHLImportFormat(workflows) {
  // GHL doesn't have a direct workflow import API in v1.
  // But we can generate the structured data that maps 1:1 to the GHL UI
  // for efficient manual setup, plus create contacts with triggers.

  const importData = {
    _meta: {
      version: '1.0.0',
      generated: new Date().toISOString(),
      task: 'AI-7460',
      description: 'Axle Towing - 6 Referral Partner Email Workflows for GoHighLevel',
      instructions: [
        '1. Go to GHL > Automation > Workflows',
        '2. Create a new workflow for each entry below',
        '3. Set the trigger as specified',
        '4. Add each step in order',
        '5. Copy email body text from the "body" field',
        '6. Test with a test contact before activating',
      ],
    },
    workflows,
    pipeline: {
      name: 'Referral Partner Pipeline',
      stages: PIPELINE_STAGES,
    },
    tags: REQUIRED_TAGS,
    customFields: CUSTOM_FIELDS,
  };

  return importData;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Axle Towing - GHL Referral Partner Workflow Setup        ║');
  console.log('║  AI-7460: 6 Email Workflows + Pipeline + Tags + Fields   ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');

  if (DRY_RUN) {
    log('🧪', 'DRY RUN MODE - no API calls will be made');
  }

  if (!API_KEY && !DRY_RUN && !EXPORT_MODE) {
    log('❌', 'GHL_API_KEY not set. Use --dry-run or --export mode, or set the env var.');
    log('ℹ️', 'Example: GHL_API_KEY=xxx GHL_LOCATION_ID=yyy node setup-ghl-workflows.js');
    process.exit(1);
  }

  // Always export workflow configs
  const workflows = exportWorkflowConfigs();

  if (EXPORT_MODE || mode === '--export') {
    const importData = generateGHLImportFormat(workflows);
    const outPath = path.join(__dirname, 'ghl-workflow-configs.json');
    fs.writeFileSync(outPath, JSON.stringify(importData, null, 2));
    log('📦', `Workflow configs exported to: ${outPath}`);
    log('ℹ️', `Contains ${Object.keys(workflows).length} workflows, ${REQUIRED_TAGS.length} tags, ${CUSTOM_FIELDS.length} custom fields`);

    // Also export individual email templates as plain text for easy copy-paste
    const templatesDir = path.join(__dirname, 'templates');
    if (!fs.existsSync(templatesDir)) {
      fs.mkdirSync(templatesDir, { recursive: true });
    }

    for (const [key, category] of Object.entries(EMAIL_TEMPLATES)) {
      const categoryName = key.replace(/_/g, '-');
      category.emails.forEach(email => {
        const filename = `${categoryName}-email-${email.step}.txt`;
        const content = [
          `Category: ${key}`,
          `Step: ${email.step} of 3`,
          `Day: ${email.day}`,
          `Subject A: ${email.subjectA}`,
          `Subject B: ${email.subjectB}`,
          `Tag Trigger: ${category.tag}`,
          '',
          '--- EMAIL BODY ---',
          '',
          email.body,
        ].join('\n');

        fs.writeFileSync(path.join(templatesDir, filename), content);
      });
    }

    log('📧', `${Object.keys(EMAIL_TEMPLATES).length * 3} email templates exported to: ${templatesDir}/`);
    console.log('');
    return;
  }

  // API-based setup
  if (mode === '--all' || mode === '--pipeline') {
    await createPipeline();
    await sleep(1000);
  }

  if (mode === '--all' || mode === '--tags') {
    await createTags();
    await sleep(1000);
  }

  if (mode === '--all' || mode === '--fields') {
    await createCustomFields();
  }

  // Always output summary
  logSection('SUMMARY');
  log('📊', `Workflows defined: ${Object.keys(workflows).length}`);
  log('📊', `Email templates: ${Object.keys(EMAIL_TEMPLATES).length * 3}`);
  log('📊', `Tags: ${REQUIRED_TAGS.length}`);
  log('📊', `Custom fields: ${CUSTOM_FIELDS.length}`);
  log('📊', `Pipeline stages: ${PIPELINE_STAGES.length}`);
  console.log('');

  logSection('NEXT STEPS');
  log('1️⃣', 'Run with --export to generate JSON configs for GHL import');
  log('2️⃣', 'In GHL UI: Automation > Workflows > Create new workflow for each category');
  log('3️⃣', 'Set triggers (Tag Added) and email steps as defined in the export');
  log('4️⃣', 'Create the Reply Stop workflow to auto-pause sequences on reply');
  log('5️⃣', 'Create the Partner Onboarding workflow for confirmed partners');
  log('6️⃣', 'Test each workflow with a test contact before activating');
  console.log('');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
