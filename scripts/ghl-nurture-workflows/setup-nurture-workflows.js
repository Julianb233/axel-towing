#!/usr/bin/env node
/**
 * Axle Towing - GHL PM Nurture Workflow Setup
 * AI-7461: Build 21-Day Property Manager Nurture Campaign in GHL
 *
 * This script generates the complete nurture workflow configuration
 * for GoHighLevel, including:
 *
 *   1. Workflow JSON config for GHL import/manual setup
 *   2. Email templates as plain text for copy-paste into GHL
 *   3. Tag and custom field definitions
 *   4. Optional API-based tag/field creation
 *
 * Prerequisites:
 *   - GHL_API_KEY env var (Location API key from GHL Settings > API Keys)
 *   - GHL_LOCATION_ID env var (from GHL Settings > Business Profile)
 *
 * Usage:
 *   node setup-nurture-workflows.js --export     # Export configs (default)
 *   node setup-nurture-workflows.js --dry-run    # Print what would be created
 *   node setup-nurture-workflows.js --tags       # Create tags via API
 *   node setup-nurture-workflows.js --fields     # Create custom fields via API
 *   node setup-nurture-workflows.js --all        # Create everything via API
 *
 * IMPORTANT:
 *   - SMS steps are DISABLED until A2P 10DLC (AI-7457) is confirmed
 *   - Workflow must be set to DRAFT until Elliott approves
 *   - Depends on: AI-7455 (GHL sub-account), AI-7457 (A2P for SMS)
 */

const { NURTURE_EMAILS, NURTURE_TAGS, NURTURE_CUSTOM_FIELDS } = require('./nurture-templates');
const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const GHL_BASE_URL = 'https://rest.gohighlevel.com/v1';
const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const EXPORT_MODE = args.includes('--export') || args.length === 0; // default to export
const mode = args.find(a => ['--tags', '--fields', '--all', '--export'].includes(a)) || '--export';

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

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Tags Setup ──────────────────────────────────────────────────────

async function createTags() {
  logSection('TAGS: PM Nurture Tags');

  if (DRY_RUN) {
    log('tag', `Would create ${NURTURE_TAGS.length} tags:`);
    NURTURE_TAGS.forEach(t => log('  ', `  - ${t}`));
    return;
  }

  log('info', 'GHL v1 creates tags implicitly when applied to contacts.');
  log('info', 'Creating a temp contact with all tags to register them...');

  try {
    const tempContact = await ghlFetch('/contacts', 'POST', {
      firstName: '_TEMP_NURTURE_TAG_SETUP',
      lastName: 'DELETE_ME',
      email: `temp-nurture-tags-${Date.now()}@axletowing.internal`,
      tags: NURTURE_TAGS,
      source: 'Nurture Tag Setup Script',
    });

    const contactId = tempContact.contact?.id;
    log('ok', `Tags registered via temp contact ${contactId}`);

    if (contactId) {
      await sleep(1000);
      await ghlFetch(`/contacts/${contactId}`, 'DELETE');
      log('del', 'Temp contact deleted');
    }

    NURTURE_TAGS.forEach(t => log('tag', `  Tag: ${t}`));
  } catch (err) {
    log('err', `Tag creation failed: ${err.message}`);
    log('info', 'Create tags manually in GHL: Settings > Tags');
  }
}

// ─── Custom Fields Setup ─────────────────────────────────────────────

async function createCustomFields() {
  logSection('CUSTOM FIELDS: Nurture Tracking');

  if (DRY_RUN) {
    log('field', `Would create ${NURTURE_CUSTOM_FIELDS.length} custom fields:`);
    NURTURE_CUSTOM_FIELDS.forEach(f => log('  ', `  - ${f.name} (${f.type})`));
    return;
  }

  for (const field of NURTURE_CUSTOM_FIELDS) {
    try {
      await sleep(500);
      const body = {
        name: field.name,
        dataType: field.type,
      };

      const result = await ghlFetch('/custom-fields', 'POST', body);
      log('ok', `Field created: ${field.name} (${result.customField?.id || 'ok'})`);
    } catch (err) {
      if (err.message.includes('422') || err.message.includes('already exists')) {
        log('skip', `Field "${field.name}" already exists, skipping`);
      } else {
        log('err', `Field "${field.name}" failed: ${err.message}`);
      }
    }
  }
}

// ─── Workflow Export ──────────────────────────────────────────────────

function exportWorkflowConfigs() {
  logSection('EXPORT: PM Nurture Workflow Configuration');

  const sequence = NURTURE_EMAILS.pm_nurture_21day;

  const workflow = {
    name: 'PM Nurture -- 21 Day',
    status: 'DRAFT',
    description: '21-day property manager nurture sequence. 7 emails + 2 SMS. SMS disabled until A2P 10DLC confirmed.',
    linearTask: 'AI-7461',
    trigger: {
      type: 'TAG_ADDED',
      tag: sequence.tag,
    },
    sendingWindow: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '08:00',
      endTime: '17:00',
      timezone: 'America/Phoenix',
    },
    steps: [
      {
        type: 'ADD_TAG',
        tag: 'nurture-sequence-active',
        description: 'Mark contact as in active nurture sequence',
      },
    ],
    stopConditions: [
      {
        type: 'TAG_ADDED',
        tag: 'nurture-replied',
        description: 'Stop if contact replies',
      },
      {
        type: 'TAG_ADDED',
        tag: 'do-not-contact',
        description: 'Stop if contact is DNC',
      },
    ],
  };

  // Build steps with wait periods
  let previousDay = 0;
  sequence.steps.forEach((step) => {
    // Add wait step
    const waitDays = step.day - previousDay;
    if (waitDays > 0) {
      workflow.steps.push({
        type: 'WAIT',
        duration: waitDays,
        unit: 'days',
        description: `Wait ${waitDays} day${waitDays > 1 ? 's' : ''} (Day ${step.day})`,
      });
    }

    if (step.type === 'EMAIL') {
      workflow.steps.push({
        type: 'SEND_EMAIL',
        step: step.step,
        dayNumber: step.day,
        subject: step.subject,
        subjectB: step.subjectB,
        body: step.body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott -- Axle Towing',
        description: `Email ${step.step}: Day ${step.day} - ${step.subject.substring(0, 50)}...`,
      });
    } else if (step.type === 'SMS') {
      workflow.steps.push({
        type: 'SEND_SMS',
        step: step.step,
        dayNumber: step.day,
        message: step.body,
        charCount: step.charCount,
        enabled: false,
        disabledReason: step.disabledReason,
        description: `SMS ${step.step}: Day ${step.day} (DISABLED - awaiting A2P 10DLC)`,
      });
    }

    previousDay = step.day;
  });

  // Add completion steps
  workflow.steps.push(
    {
      type: 'REMOVE_TAG',
      tag: 'nurture-sequence-active',
      description: 'Remove active nurture sequence tag',
    },
    {
      type: 'ADD_TAG',
      tag: 'nurture-completed',
      description: 'Mark nurture sequence as completed',
    }
  );

  return workflow;
}

// ─── Generate GHL Import Format ──────────────────────────────────────

function generateGHLImportFormat(workflow) {
  return {
    _meta: {
      version: '1.0.0',
      generated: new Date().toISOString(),
      task: 'AI-7461',
      description: 'Axle Towing - PM Nurture 21-Day Campaign for GoHighLevel',
      instructions: [
        '1. Go to GHL > Automation > Workflows > Create New Workflow',
        '2. Name: "PM Nurture -- 21 Day"',
        '3. Trigger: Tag Added = "nurture-active"',
        '4. Add each step in order (see steps array)',
        '5. Copy email body text from the "body" field in each email step',
        '6. Set both SMS steps to INACTIVE/DISABLED',
        '7. Set workflow status to DRAFT',
        '8. Set sending window to Mon-Fri 8AM-5PM America/Phoenix',
        '9. Test with a test contact before activating',
        '10. Do NOT activate until Elliott reviews and approves',
      ],
      smsWarning: 'SMS steps MUST remain disabled until A2P 10DLC registration (AI-7457) is confirmed.',
      dependsOn: ['AI-7455 (GHL sub-account setup)', 'AI-7457 (A2P 10DLC registration for SMS)'],
    },
    workflow,
    tags: NURTURE_TAGS,
    customFields: NURTURE_CUSTOM_FIELDS,
    verification: {
      totalSteps: 9,
      emailSteps: 7,
      smsSteps: 2,
      smsEnabled: false,
      workflowStatus: 'DRAFT',
      daySequence: [1, 3, 5, 7, 10, 12, 14, 17, 21],
      totalDuration: '21 days',
    },
  };
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('+------------------------------------------------------------+');
  console.log('|  Axle Towing - PM Nurture 21-Day Workflow Setup            |');
  console.log('|  AI-7461: 7 Emails + 2 SMS (SMS disabled)                 |');
  console.log('+------------------------------------------------------------+');
  console.log('');

  if (DRY_RUN) {
    log('test', 'DRY RUN MODE - no API calls will be made');
  }

  // Always build workflow config
  const workflow = exportWorkflowConfigs();

  if (EXPORT_MODE) {
    const importData = generateGHLImportFormat(workflow);
    const outPath = path.join(__dirname, 'ghl-nurture-workflow-configs.json');
    fs.writeFileSync(outPath, JSON.stringify(importData, null, 2));
    log('pkg', `Workflow config exported to: ${outPath}`);

    // Export individual email templates as plain text
    const templatesDir = path.join(__dirname, 'templates');
    if (!fs.existsSync(templatesDir)) {
      fs.mkdirSync(templatesDir, { recursive: true });
    }

    const sequence = NURTURE_EMAILS.pm_nurture_21day;
    let emailCount = 0;
    let smsCount = 0;

    sequence.steps.forEach(step => {
      if (step.type === 'EMAIL') {
        emailCount++;
        const filename = `pm-nurture-email-${step.step}-day${step.day}.txt`;
        const content = [
          `Workflow: PM Nurture -- 21 Day`,
          `Type: Email`,
          `Step: ${step.step} of 9`,
          `Day: ${step.day}`,
          `Subject A: ${step.subject}`,
          `Subject B: ${step.subjectB}`,
          `From: elliott@axletowing.com`,
          `From Name: Elliott -- Axle Towing`,
          `Tag Trigger: ${sequence.tag}`,
          '',
          '--- EMAIL BODY ---',
          '',
          step.body,
        ].join('\n');

        fs.writeFileSync(path.join(templatesDir, filename), content);
      } else if (step.type === 'SMS') {
        smsCount++;
        const filename = `pm-nurture-sms-${step.step}-day${step.day}.txt`;
        const content = [
          `Workflow: PM Nurture -- 21 Day`,
          `Type: SMS (DISABLED - awaiting A2P 10DLC)`,
          `Step: ${step.step} of 9`,
          `Day: ${step.day}`,
          `Characters: ${step.charCount}`,
          `Status: INACTIVE until AI-7457 confirmed`,
          '',
          '--- SMS BODY ---',
          '',
          step.body,
        ].join('\n');

        fs.writeFileSync(path.join(templatesDir, filename), content);
      }
    });

    log('mail', `${emailCount} email templates exported to: ${templatesDir}/`);
    log('sms', `${smsCount} SMS templates exported (marked DISABLED)`);

    // Print summary
    logSection('WORKFLOW SUMMARY');
    console.log('');
    console.log('  Workflow: PM Nurture -- 21 Day');
    console.log('  Status:   DRAFT (do not activate until Elliott approves)');
    console.log('  Trigger:  Tag Added = "nurture-active"');
    console.log('  Duration: 21 days');
    console.log('');
    console.log('  Step Schedule:');
    console.log('  -----------------------------------------------');
    sequence.steps.forEach(step => {
      const typeLabel = step.type === 'SMS' ? `SMS  (DISABLED)` : 'Email';
      const statusIcon = step.type === 'SMS' ? '[X]' : '[+]';
      console.log(`  ${statusIcon} Day ${String(step.day).padStart(2)}: ${typeLabel.padEnd(16)} ${step.type === 'EMAIL' ? step.subject.substring(0, 45) + '...' : step.body.substring(0, 45) + '...'}`);
    });
    console.log('  -----------------------------------------------');
    console.log(`  Total: ${emailCount} emails + ${smsCount} SMS = ${emailCount + smsCount} touchpoints`);
    console.log('');

    logSection('NEXT STEPS');
    log('1', 'Confirm AI-7455 (GHL sub-account) is set up');
    log('2', 'In GHL: Automation > Workflows > Create "PM Nurture -- 21 Day"');
    log('3', 'Set trigger: Tag Added = "nurture-active"');
    log('4', 'Add 9 steps with wait periods as defined above');
    log('5', 'Copy email body from template files in templates/');
    log('6', 'Set both SMS steps to INACTIVE');
    log('7', 'Set workflow to DRAFT');
    log('8', 'Test with a test contact');
    log('9', 'Get Elliott\'s approval before publishing');
    log('10', 'When AI-7457 (A2P 10DLC) confirmed, enable SMS steps');
    console.log('');
    return;
  }

  // API-based setup
  if (!API_KEY && !DRY_RUN) {
    log('err', 'GHL_API_KEY not set. Use --export or --dry-run mode.');
    process.exit(1);
  }

  if (mode === '--all' || mode === '--tags') {
    await createTags();
    await sleep(1000);
  }

  if (mode === '--all' || mode === '--fields') {
    await createCustomFields();
  }

  logSection('SUMMARY');
  log('info', `Workflow steps: ${workflow.steps.length}`);
  log('info', `Tags: ${NURTURE_TAGS.length}`);
  log('info', `Custom fields: ${NURTURE_CUSTOM_FIELDS.length}`);
  console.log('');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
