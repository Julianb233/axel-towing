#!/usr/bin/env node
/**
 * Axle Towing - GHL 21-Day Nurture Campaign Workflow Setup
 * AI-7461: Build 21-Day Nurture Campaign Workflow in GHL
 *
 * This script sets up the complete lead nurture system in GoHighLevel
 * via the REST API:
 *
 *   1. Creates the "Lead Nurture Pipeline" with 9 stages
 *   2. Creates custom fields for lead tracking
 *   3. Creates tags for sequence enrollment/management
 *   4. Exports 7 workflow configurations for GHL import
 *
 * Workflows created:
 *   1. Cold Outreach Automation (21 days, multi-channel)
 *   2. HOA Board Member Sequence (25 days, 5 emails)
 *   3. Property Manager Sequence (28 days, 5 emails)
 *   4. Re-Engagement Sequence (14 days, on-hold accounts)
 *   5. Retention - Quarterly Check-In (recurring)
 *   6. Renewal Reminder (60/30/7 days before contract renewal)
 *   7. Referral Thank-You (immediate trigger)
 *
 * Prerequisites:
 *   - GHL_API_KEY env var (Location API key from GHL Settings > API Keys)
 *   - GHL_LOCATION_ID env var (from GHL Settings > Business Profile)
 *
 * Usage:
 *   GHL_API_KEY=xxx GHL_LOCATION_ID=yyy node setup-nurture-workflows.js
 *   OR: source ../../website/.env.local && node setup-nurture-workflows.js
 *
 * Modes:
 *   --dry-run     Print what would be created without making API calls
 *   --pipeline    Create pipeline only
 *   --tags        Create tags only
 *   --fields      Create custom fields only
 *   --all         Create everything (default)
 *   --export      Export workflow configs as JSON for manual GHL import
 */

const {
  COLD_OUTREACH,
  HOA_BOARD_MEMBER,
  PROPERTY_MANAGER,
  RE_ENGAGEMENT,
  RETENTION_QUARTERLY,
  RENEWAL_REMINDER,
  REFERRAL_THANK_YOU,
  SMS_TEMPLATES,
  VOICEMAIL_SCRIPTS,
  PIPELINE_STAGES,
  REQUIRED_TAGS,
  CUSTOM_FIELDS,
} = require('./nurture-email-templates');

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';
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

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    Version: '2021-07-28',
  };

  if (LOCATION_ID) {
    headers['Location'] = LOCATION_ID;
  }

  const opts = { method, headers };

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

// ─── Pipeline Setup ──────────────────────────────────────────────────

async function createPipeline() {
  logSection('PIPELINE: Lead Nurture Pipeline');

  const stages = PIPELINE_STAGES.map((name, i) => ({
    name,
    position: i,
  }));

  if (DRY_RUN) {
    log('*', `Would create pipeline "Lead Nurture Pipeline" with ${stages.length} stages:`);
    stages.forEach((s, i) => log('  ', `  ${i + 1}. ${s.name}`));
    return { id: 'dry-run-pipeline-id', stages: stages.map(s => ({ ...s, id: `dry-${s.position}` })) };
  }

  try {
    const result = await ghlFetch('/opportunities/pipelines', 'POST', {
      name: 'Lead Nurture Pipeline',
      stages,
      locationId: LOCATION_ID,
    });

    log('+', `Pipeline created: ${result.pipeline?.id || 'ok'}`);
    if (result.pipeline?.stages) {
      result.pipeline.stages.forEach(s => {
        log('  ', `  Stage "${s.name}" -> ${s.id}`);
      });
    }
    return result.pipeline;
  } catch (err) {
    log('X', `Pipeline creation failed: ${err.message}`);
    log('i', 'If pipeline already exists, check GHL UI and note the pipeline ID.');
    return null;
  }
}

// ─── Tags Setup ──────────────────────────────────────────────────────

async function createTags() {
  logSection('TAGS: Nurture Campaign Tags');

  if (DRY_RUN) {
    log('*', `Would create ${REQUIRED_TAGS.length} tags:`);
    REQUIRED_TAGS.forEach(t => log('  ', `  - ${t}`));
    return;
  }

  for (const tag of REQUIRED_TAGS) {
    try {
      await sleep(300);
      await ghlFetch('/tags', 'POST', {
        name: tag,
        locationId: LOCATION_ID,
      });
      log('+', `Tag created: ${tag}`);
    } catch (err) {
      if (err.message.includes('422') || err.message.includes('already exists') || err.message.includes('409')) {
        log('~', `Tag "${tag}" already exists, skipping`);
      } else {
        log('X', `Tag "${tag}" failed: ${err.message}`);
      }
    }
  }
}

// ─── Custom Fields Setup ─────────────────────────────────────────────

async function createCustomFields() {
  logSection('CUSTOM FIELDS: Lead Nurture Tracking');

  if (DRY_RUN) {
    log('*', `Would create ${CUSTOM_FIELDS.length} custom fields:`);
    CUSTOM_FIELDS.forEach(f => log('  ', `  - ${f.name} (${f.type})`));
    return;
  }

  for (const field of CUSTOM_FIELDS) {
    try {
      await sleep(500);
      const body = {
        name: field.name,
        dataType: field.type,
        locationId: LOCATION_ID,
      };

      if (field.options) {
        body.options = field.options;
      }

      const result = await ghlFetch('/custom-fields', 'POST', body);
      log('+', `Field created: ${field.name} (${result.customField?.id || 'ok'})`);
    } catch (err) {
      if (err.message.includes('422') || err.message.includes('already exists') || err.message.includes('409')) {
        log('~', `Field "${field.name}" already exists, skipping`);
      } else {
        log('X', `Field "${field.name}" failed: ${err.message}`);
      }
    }
  }
}

// ─── Workflow Builder ────────────────────────────────────────────────

function buildWorkflowSteps(sequence, workflowName) {
  const steps = [
    {
      type: 'ADD_TAG',
      tag: 'nurture-active',
      description: 'Mark contact as in active nurture sequence',
    },
  ];

  let prevDay = 0;

  for (const step of sequence.steps) {
    // Add wait step between touchpoints
    if (step.day > prevDay) {
      const waitDays = step.day - prevDay;
      steps.push({
        type: 'WAIT',
        duration: waitDays,
        unit: 'days',
        description: `Wait ${waitDays} day${waitDays > 1 ? 's' : ''} (Day ${step.day})`,
      });
    }

    // Build the action step
    switch (step.type) {
      case 'EMAIL':
        steps.push({
          type: 'SEND_EMAIL',
          step: step.step,
          subject: step.subject,
          body: step.body,
          from: 'elliott@axletowing.com',
          fromName: 'Elliott - Axle Towing',
          description: `Email ${step.step}: Day ${step.day}`,
        });
        break;

      case 'SMS':
        steps.push({
          type: 'SEND_SMS',
          step: step.step,
          body: step.body,
          description: `SMS ${step.step}: Day ${step.day}`,
        });
        break;

      case 'VOICEMAIL':
        steps.push({
          type: 'DROP_VOICEMAIL',
          step: step.step,
          script: step.script,
          body: step.body,
          schedule: '10:00 AM weekday',
          description: `Ringless Voicemail (Script ${step.script}): Day ${step.day}`,
        });
        break;

      case 'PIPELINE_MOVE':
        steps.push({
          type: 'MOVE_PIPELINE_STAGE',
          stage: step.stage,
          condition: step.condition,
          description: `Move to "${step.stage}" if ${step.condition}`,
        });
        break;

      default:
        steps.push(step);
    }

    prevDay = step.day;
  }

  // Add completion steps
  steps.push(
    {
      type: 'REMOVE_TAG',
      tag: 'nurture-active',
      description: 'Remove active nurture tag',
    },
    {
      type: 'ADD_TAG',
      tag: 'nurture-completed',
      description: 'Mark nurture sequence as completed',
    }
  );

  return steps;
}

function exportWorkflowConfigs() {
  logSection('EXPORT: Nurture Campaign Workflow Configurations');

  const workflows = {};

  // Workflow 1: Cold Outreach Automation
  workflows['cold_outreach'] = {
    name: 'Nurture: Cold Outreach (21-Day Multi-Channel)',
    trigger: {
      type: 'PIPELINE_STAGE_CHANGE',
      pipeline: 'Lead Nurture Pipeline',
      stage: 'New Lead',
      description: 'Contact added to New Lead stage',
    },
    steps: buildWorkflowSteps(COLD_OUTREACH, 'Cold Outreach'),
    stopCondition: {
      type: 'TAG_ADDED',
      tag: 'nurture-replied',
      description: 'Stop if contact replies to any email/SMS',
    },
    sendingWindow: {
      emails: 'Mon-Fri 8:00 AM - 5:00 PM',
      sms: 'Mon-Fri 9:00 AM - 4:00 PM',
      voicemail: 'Tue-Thu 10:00 AM - 12:00 PM',
    },
    duration: '22 days',
    touchpoints: '3 emails + 2 SMS + 1 voicemail = 6 touches',
  };

  // Workflow 2: HOA Board Member Sequence
  workflows['hoa_board_member'] = {
    name: 'Nurture: HOA Board Member (25-Day Email Sequence)',
    trigger: {
      type: 'TAG_ADDED',
      tag: 'hoa-board-member',
      description: 'Contact tagged as HOA Board Member',
    },
    steps: buildWorkflowSteps(HOA_BOARD_MEMBER, 'HOA Board Member'),
    stopCondition: {
      type: 'TAG_ADDED',
      tag: 'nurture-replied',
      description: 'Stop if contact replies',
    },
    sendingWindow: {
      emails: 'Mon-Fri 8:00 AM - 5:00 PM',
    },
    duration: '25 days',
    touchpoints: '5 emails',
  };

  // Workflow 3: Property Manager Sequence
  workflows['property_manager'] = {
    name: 'Nurture: Property Manager (28-Day Email Sequence)',
    trigger: {
      type: 'TAG_ADDED',
      tag: 'property-manager',
      description: 'Contact tagged as Property Manager',
    },
    steps: buildWorkflowSteps(PROPERTY_MANAGER, 'Property Manager'),
    stopCondition: {
      type: 'TAG_ADDED',
      tag: 'nurture-replied',
      description: 'Stop if contact replies',
    },
    sendingWindow: {
      emails: 'Mon-Fri 8:00 AM - 5:00 PM',
    },
    duration: '28 days',
    touchpoints: '5 emails',
  };

  // Workflow 4: Re-Engagement
  workflows['re_engagement'] = {
    name: 'Nurture: Re-Engagement (On Hold Accounts)',
    trigger: {
      type: 'PIPELINE_STAGE_CHANGE',
      pipeline: 'Lead Nurture Pipeline',
      stage: 'On Hold',
      delay: '30 days',
      description: 'Contact in On Hold stage for 30+ days',
    },
    steps: buildWorkflowSteps(RE_ENGAGEMENT, 'Re-Engagement'),
    stopCondition: {
      type: 'TAG_ADDED',
      tag: 'nurture-replied',
      description: 'Stop if contact replies',
    },
    sendingWindow: {
      emails: 'Mon-Fri 8:00 AM - 5:00 PM',
      sms: 'Mon-Fri 9:00 AM - 4:00 PM',
    },
    duration: '14 days',
    touchpoints: '2 emails + 1 SMS = 3 touches',
  };

  // Workflow 5: Retention - Quarterly
  workflows['retention_quarterly'] = {
    name: 'Nurture: Quarterly Account Check-In',
    trigger: {
      type: 'TAG_AND_DATE',
      tag: 'active-account',
      dateCondition: 'Every 90 days',
      description: 'Active account quarterly touchpoint',
    },
    steps: [
      {
        type: 'SEND_EMAIL',
        step: 1,
        subject: RETENTION_QUARTERLY.steps[0].subject,
        body: RETENTION_QUARTERLY.steps[0].body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott - Axle Towing',
        description: 'Quarterly check-in email',
      },
      {
        type: 'SEND_SMS',
        step: 2,
        body: RETENTION_QUARTERLY.steps[1].body,
        description: 'Quarterly check-in SMS',
      },
    ],
    recurring: true,
    interval: '90 days',
    duration: 'Recurring',
    touchpoints: '1 email + 1 SMS = 2 touches per quarter',
  };

  // Workflow 6: Renewal Reminder
  workflows['renewal_reminder'] = {
    name: 'Nurture: Contract Renewal Reminder',
    trigger: {
      type: 'CUSTOM_FIELD_DATE',
      field: 'Contract Renewal Date',
      offset: '-60 days',
      description: 'Fires 60 days before contract renewal date',
    },
    steps: [
      {
        type: 'SEND_EMAIL',
        step: 1,
        subject: RENEWAL_REMINDER.steps[0].subject,
        body: RENEWAL_REMINDER.steps[0].body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott - Axle Towing',
        description: 'Renewal email 1: 60 days out',
      },
      {
        type: 'WAIT',
        duration: 30,
        unit: 'days',
        description: 'Wait 30 days (now 30 days before renewal)',
      },
      {
        type: 'SEND_EMAIL',
        step: 2,
        subject: RENEWAL_REMINDER.steps[1].subject,
        body: RENEWAL_REMINDER.steps[1].body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott - Axle Towing',
        description: 'Renewal email 2: 30 days out',
      },
      {
        type: 'SEND_SMS',
        step: 3,
        body: RENEWAL_REMINDER.steps[3].body,
        description: 'Renewal SMS reminder: 30 days out',
      },
      {
        type: 'WAIT',
        duration: 23,
        unit: 'days',
        description: 'Wait 23 days (now 7 days before renewal)',
      },
      {
        type: 'SEND_EMAIL',
        step: 4,
        subject: RENEWAL_REMINDER.steps[2].subject,
        body: RENEWAL_REMINDER.steps[2].body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott - Axle Towing',
        description: 'Renewal email 3: 7 days out',
      },
    ],
    duration: '53 days (60 to 7 days before renewal)',
    touchpoints: '3 emails + 1 SMS = 4 touches',
  };

  // Workflow 7: Referral Thank-You
  workflows['referral_thank_you'] = {
    name: 'Nurture: Referral Thank-You',
    trigger: {
      type: 'TAG_ADDED',
      tag: 'referred-us',
      description: 'Contact tagged as having referred business',
    },
    steps: [
      {
        type: 'SEND_EMAIL',
        step: 1,
        subject: REFERRAL_THANK_YOU.steps[0].subject,
        body: REFERRAL_THANK_YOU.steps[0].body,
        from: 'elliott@axletowing.com',
        fromName: 'Elliott - Axle Towing',
        description: 'Thank-you email (immediate)',
      },
      {
        type: 'SEND_SMS',
        step: 2,
        body: REFERRAL_THANK_YOU.steps[1].body,
        description: 'Thank-you SMS (immediate)',
      },
      {
        type: 'ADD_TAG',
        tag: 'retention-enrolled',
        description: 'Enroll in retention priority',
      },
    ],
    duration: 'Immediate',
    touchpoints: '1 email + 1 SMS = 2 touches',
  };

  // Reply-stop workflow (shared across all sequences)
  workflows['reply_stop'] = {
    name: 'Nurture: Reply Detection & Sequence Stop',
    trigger: {
      type: 'EMAIL_REPLY',
      condition: 'Contact has tag: nurture-active',
      description: 'Any reply from a contact in an active nurture sequence',
    },
    steps: [
      {
        type: 'REMOVE_TAG',
        tag: 'nurture-active',
        description: 'Stop the active sequence',
      },
      {
        type: 'ADD_TAG',
        tag: 'nurture-replied',
        description: 'Mark as replied',
      },
      {
        type: 'MOVE_PIPELINE_STAGE',
        pipeline: 'Lead Nurture Pipeline',
        stage: 'Engaged',
        description: 'Move to Engaged stage',
      },
      {
        type: 'CREATE_TASK',
        title: 'Reply received from {{contact.first_name}} {{contact.last_name}} - follow up within 24 hrs',
        assignTo: 'elliott@axletowing.com',
        description: 'Manual follow-up task for Elliott',
      },
      {
        type: 'SEND_SMS',
        to: '4802885526',
        body: 'Nurture prospect {{contact.first_name}} {{contact.last_name}} replied to your email. Check GHL inbox.',
        description: 'Notify Elliott via SMS',
      },
    ],
  };

  return workflows;
}

// ─── GHL Import Format ──────────────────────────────────────────────

function generateGHLImportFormat(workflows) {
  const totalEmails = [COLD_OUTREACH, HOA_BOARD_MEMBER, PROPERTY_MANAGER, RE_ENGAGEMENT]
    .reduce((sum, seq) => sum + seq.steps.filter(s => s.type === 'EMAIL').length, 0)
    + RETENTION_QUARTERLY.steps.filter(s => s.type === 'EMAIL').length
    + RENEWAL_REMINDER.steps.filter(s => s.type === 'EMAIL').length
    + REFERRAL_THANK_YOU.steps.filter(s => s.type === 'EMAIL').length;

  const totalSMS = [COLD_OUTREACH, RE_ENGAGEMENT]
    .reduce((sum, seq) => sum + seq.steps.filter(s => s.type === 'SMS').length, 0)
    + RETENTION_QUARTERLY.steps.filter(s => s.type === 'SMS').length
    + RENEWAL_REMINDER.steps.filter(s => s.type === 'SMS').length
    + REFERRAL_THANK_YOU.steps.filter(s => s.type === 'SMS').length;

  return {
    _meta: {
      version: '1.0.0',
      generated: new Date().toISOString(),
      task: 'AI-7461',
      description: 'Axle Towing - 21-Day Nurture Campaign Workflows for GoHighLevel',
      source: 'docs/NURTURE-CAMPAIGN-SEQUENCES.md',
      stats: {
        workflows: Object.keys(workflows).length,
        email_templates: totalEmails,
        sms_templates: totalSMS,
        voicemail_scripts: Object.keys(VOICEMAIL_SCRIPTS).length,
        pipeline_stages: PIPELINE_STAGES.length,
        tags: REQUIRED_TAGS.length,
        custom_fields: CUSTOM_FIELDS.length,
      },
      instructions: [
        '1. Go to GHL > Automation > Workflows',
        '2. Create a new workflow for each entry in the "workflows" object',
        '3. Set the trigger as specified in each workflow\'s "trigger" field',
        '4. Add each step in order, copying email body text from "body" fields',
        '5. Set sending windows as specified in each workflow\'s "sendingWindow" field',
        '6. Create the "Reply Detection & Sequence Stop" workflow last',
        '7. Test each workflow with a test contact before activating',
        '8. Set up email domain authentication for axletowing.com in GHL Settings',
      ],
    },
    workflows,
    pipeline: {
      name: 'Lead Nurture Pipeline',
      stages: PIPELINE_STAGES,
    },
    tags: REQUIRED_TAGS,
    customFields: CUSTOM_FIELDS,
    smsTemplates: SMS_TEMPLATES,
    voicemailScripts: VOICEMAIL_SCRIPTS,
    sendingBestPractices: {
      fromName: 'Elliott - Axle Towing',
      fromEmail: 'elliott@axletowing.com',
      emailWindow: 'Mon-Fri 8:00 AM - 5:00 PM MST',
      smsWindow: 'Mon-Fri 9:00 AM - 4:00 PM MST (TCPA safe harbor)',
      voicemailWindow: 'Tue-Thu 10:00 AM - 12:00 PM MST',
      unsubscribe: 'Required - GHL adds footer automatically',
    },
  };
}

// ─── Template Export ─────────────────────────────────────────────────

function exportEmailTemplates() {
  const templatesDir = path.join(__dirname, 'templates');
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }

  const sequences = {
    'cold-outreach': COLD_OUTREACH,
    'hoa-board-member': HOA_BOARD_MEMBER,
    'property-manager': PROPERTY_MANAGER,
    're-engagement': RE_ENGAGEMENT,
    'retention-quarterly': RETENTION_QUARTERLY,
    'renewal-reminder': RENEWAL_REMINDER,
    'referral-thank-you': REFERRAL_THANK_YOU,
  };

  let templateCount = 0;

  for (const [seqName, sequence] of Object.entries(sequences)) {
    for (const step of sequence.steps) {
      const filename = `${seqName}-${step.type.toLowerCase()}-${step.step}.txt`;
      const lines = [
        `Sequence: ${seqName}`,
        `Step: ${step.step}`,
        `Day: ${step.day}`,
        `Type: ${step.type}`,
      ];

      if (step.subject) {
        lines.push(`Subject: ${step.subject}`);
      }

      if (step.script) {
        lines.push(`Voicemail Script: ${step.script}`);
      }

      lines.push('', '--- CONTENT ---', '', step.body);

      fs.writeFileSync(path.join(templatesDir, filename), lines.join('\n'));
      templateCount++;
    }
  }

  // Export SMS templates
  for (const sms of SMS_TEMPLATES) {
    const filename = `sms-${sms.id}.txt`;
    const content = [
      `SMS Template: ${sms.id}`,
      `Use Case: ${sms.use_case}`,
      `Characters: ${sms.chars}`,
      '',
      '--- MESSAGE ---',
      '',
      sms.body,
    ].join('\n');

    fs.writeFileSync(path.join(templatesDir, filename), content);
    templateCount++;
  }

  // Export voicemail scripts
  for (const [key, vm] of Object.entries(VOICEMAIL_SCRIPTS)) {
    const filename = `voicemail-script-${key.toLowerCase()}.txt`;
    const content = [
      `Voicemail Script: ${key} - ${vm.name}`,
      `Duration: ~${vm.duration_seconds} seconds`,
      '',
      '--- SCRIPT ---',
      '',
      vm.script,
    ].join('\n');

    fs.writeFileSync(path.join(templatesDir, filename), content);
    templateCount++;
  }

  return templateCount;
}

// ─── Individual Workflow JSON Export ──────────────────────────────────

function exportIndividualWorkflows(workflows) {
  let count = 0;
  for (const [key, workflow] of Object.entries(workflows)) {
    const filename = `workflow-${key.replace(/_/g, '-')}.json`;
    const outPath = path.join(__dirname, filename);
    fs.writeFileSync(outPath, JSON.stringify(workflow, null, 2));
    count++;
  }
  return count;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('+============================================================+');
  console.log('|  Axle Towing - GHL 21-Day Nurture Campaign Setup           |');
  console.log('|  AI-7461: 7 Workflows + Pipeline + Tags + Custom Fields    |');
  console.log('+============================================================+');
  console.log('');

  if (DRY_RUN) {
    log('*', 'DRY RUN MODE - no API calls will be made');
  }

  if (!API_KEY && !DRY_RUN && !EXPORT_MODE) {
    log('X', 'GHL_API_KEY not set. Use --dry-run or --export mode, or set the env var.');
    log('i', 'Example: GHL_API_KEY=xxx GHL_LOCATION_ID=yyy node setup-nurture-workflows.js');
    process.exit(1);
  }

  // Always build workflow configs
  const workflows = exportWorkflowConfigs();

  if (EXPORT_MODE || mode === '--export') {
    // Export master JSON
    const importData = generateGHLImportFormat(workflows);
    const outPath = path.join(__dirname, 'ghl-nurture-workflow-configs.json');
    fs.writeFileSync(outPath, JSON.stringify(importData, null, 2));
    log('+', `Master config exported to: ${outPath}`);

    // Export individual workflow JSONs
    const workflowCount = exportIndividualWorkflows(workflows);
    log('+', `${workflowCount} individual workflow JSON files exported`);

    // Export templates
    const templateCount = exportEmailTemplates();
    log('+', `${templateCount} templates exported to: templates/`);

    // Summary
    logSection('EXPORT SUMMARY');
    const stats = importData._meta.stats;
    log('#', `Workflows: ${stats.workflows}`);
    log('#', `Email templates: ${stats.email_templates}`);
    log('#', `SMS templates: ${stats.sms_templates}`);
    log('#', `Voicemail scripts: ${stats.voicemail_scripts}`);
    log('#', `Pipeline stages: ${stats.pipeline_stages}`);
    log('#', `Tags: ${stats.tags}`);
    log('#', `Custom fields: ${stats.custom_fields}`);
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
  log('#', `Workflows defined: ${Object.keys(workflows).length}`);
  log('#', `Tags: ${REQUIRED_TAGS.length}`);
  log('#', `Custom fields: ${CUSTOM_FIELDS.length}`);
  log('#', `Pipeline stages: ${PIPELINE_STAGES.length}`);
  console.log('');

  logSection('NEXT STEPS');
  log('1', 'Run with --export to generate JSON configs and email templates');
  log('2', 'In GHL UI: Automation > Workflows > Create each workflow');
  log('3', 'Set triggers and steps as defined in the workflow JSON files');
  log('4', 'Configure sending windows (email: 8-5 M-F, SMS: 9-4 M-F)');
  log('5', 'Create the Reply Detection workflow last (shared stop condition)');
  log('6', 'Set up email domain auth for axletowing.com');
  log('7', 'Test each workflow with a test contact before activating');
  console.log('');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
