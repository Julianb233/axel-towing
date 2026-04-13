#!/usr/bin/env node
/**
 * Axle Towing - Template Approval Workflow Test Script
 * AI-7459: Verify the Elliott template approval workflow
 *
 * This script tests the approval workflow end-to-end:
 *
 *   1. Creates (or finds) a test contact
 *   2. Adds the "needs-elliott-approval" tag (triggers workflow)
 *   3. Waits briefly, then checks if the workflow processed
 *   4. Adds "elliott-approved" tag (simulates Elliott approving)
 *   5. Verifies the contact moves to "templates-approved" state
 *
 * Prerequisites:
 *   - GHL_API_KEY and GHL_LOCATION_ID env vars
 *   - Approval workflows created in GHL UI (run setup-approval-workflow.js first)
 *
 * Usage:
 *   source ../../website/.env.local && node test-approval-workflow.js
 *
 * Options:
 *   --trigger-only    Only add the trigger tag (don't auto-approve)
 *   --approve-only    Only add the approval tag (for manual follow-up)
 *   --cleanup         Remove test contact and tags
 *   --check           Check status of existing test contact (no modifications)
 */

const GHL_BASE_URL_V1 = 'https://rest.gohighlevel.com/v1';
const GHL_BASE_URL_V2 = 'https://services.leadconnectorhq.com';

const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;

const args = process.argv.slice(2);
const TRIGGER_ONLY = args.includes('--trigger-only');
const APPROVE_ONLY = args.includes('--approve-only');
const CLEANUP = args.includes('--cleanup');
const CHECK_ONLY = args.includes('--check');

const TEST_EMAIL = 'test-approval@axletowing.com';
const TEST_PHONE = '+10000000001';

// ─── Helpers ─────────────────────────────────────────────────────────

function log(emoji, msg) {
  console.log(`${emoji}  ${msg}`);
}

function logSection(title) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ghlV1(endpoint, method = 'GET', body = null) {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  if (body) opts.body = JSON.stringify(body);

  const response = await fetch(`${GHL_BASE_URL_V1}${endpoint}`, opts);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GHL v1 ${method} ${endpoint}: ${response.status} - ${text}`);
  }
  return response.json();
}

async function ghlV2(endpoint, method = 'GET', body = null) {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      Version: '2021-07-28',
    },
  };
  if (LOCATION_ID) opts.headers['Location'] = LOCATION_ID;
  if (body) opts.body = JSON.stringify(body);

  const response = await fetch(`${GHL_BASE_URL_V2}${endpoint}`, opts);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GHL v2 ${method} ${endpoint}: ${response.status} - ${text}`);
  }
  return response.json();
}

// ─── Find or Create Test Contact ─────────────────────────────────────

async function findTestContact() {
  try {
    // Search by email via v1 API
    const result = await ghlV1(`/contacts/lookup?email=${encodeURIComponent(TEST_EMAIL)}`);
    if (result.contacts && result.contacts.length > 0) {
      return result.contacts[0];
    }
  } catch (err) {
    // v1 lookup may not work, try v2
    try {
      const result = await ghlV2(`/contacts/search/duplicate?email=${encodeURIComponent(TEST_EMAIL)}&locationId=${LOCATION_ID}`);
      if (result.contact) {
        return result.contact;
      }
    } catch {
      // Neither worked
    }
  }
  return null;
}

async function createTestContact() {
  const contact = {
    firstName: 'Test',
    lastName: 'Approval Workflow',
    email: TEST_EMAIL,
    phone: TEST_PHONE,
    companyName: 'Test Property — Approval Workflow',
    tags: [],
    source: 'Workflow Test — AI-7459',
    notes: 'Test contact for approval workflow validation. Safe to delete.',
  };

  try {
    const result = await ghlV1('/contacts', 'POST', contact);
    return result.contact;
  } catch (err) {
    // Try v2
    try {
      contact.locationId = LOCATION_ID;
      const result = await ghlV2('/contacts', 'POST', contact);
      return result.contact;
    } catch (err2) {
      throw new Error(`Failed to create test contact: ${err2.message}`);
    }
  }
}

// ─── Tag Operations ──────────────────────────────────────────────────

async function addTag(contactId, tag) {
  try {
    await ghlV1(`/contacts/${contactId}`, 'PUT', {
      tags: [tag],
    });
    return true;
  } catch (err) {
    log('X', `Failed to add tag "${tag}": ${err.message}`);
    return false;
  }
}

async function getContactTags(contactId) {
  try {
    const result = await ghlV1(`/contacts/${contactId}`);
    return result.contact?.tags || [];
  } catch {
    return [];
  }
}

async function removeTag(contactId, tag) {
  try {
    // GHL v1 doesn't have a direct "remove tag" — need to get all tags, filter, and update
    const contact = await ghlV1(`/contacts/${contactId}`);
    const currentTags = contact.contact?.tags || [];
    const newTags = currentTags.filter(t => t !== tag);

    await ghlV1(`/contacts/${contactId}`, 'PUT', {
      tags: newTags,
    });
    return true;
  } catch (err) {
    log('X', `Failed to remove tag "${tag}": ${err.message}`);
    return false;
  }
}

// ─── Test Flows ──────────────────────────────────────────────────────

async function runTriggerTest(contactId) {
  logSection('TEST: Trigger Approval Workflow');

  log('i', `Adding tag "needs-elliott-approval" to contact ${contactId}`);
  const success = await addTag(contactId, 'needs-elliott-approval');

  if (success) {
    log('+', 'Tag "needs-elliott-approval" added successfully');
    log('i', 'The approval workflow should now trigger:');
    log('  ', '  1. Contact gets "approval-pending" tag');
    log('  ', '  2. Elliott receives approval request email');
    log('  ', '  3. Workflow waits 2 days for initial response');
    console.log('');
    log('i', 'Check GHL:');
    log('  ', '  - Contacts > "Test Approval Workflow" > Tags');
    log('  ', '  - Automation > Workflow History');
    log('  ', '  - Elliott\'s email inbox for the notification');
  } else {
    log('X', 'Failed to trigger workflow. Check GHL API access.');
  }

  return success;
}

async function runApprovalTest(contactId) {
  logSection('TEST: Simulate Elliott Approval');

  log('i', `Adding tag "elliott-approved" to contact ${contactId}`);
  const success = await addTag(contactId, 'elliott-approved');

  if (success) {
    log('+', 'Tag "elliott-approved" added successfully');
    log('i', 'Expected behavior:');
    log('  ', '  1. Contact gets "templates-approved" tag');
    log('  ', '  2. "approval-pending" tag is removed');
    log('  ', '  3. "needs-elliott-approval" tag is removed');
    log('  ', '  4. Elliott receives approval confirmation email');
    log('  ', '  5. Contact gets "campaign-active" tag (activation workflow)');
  }

  return success;
}

async function runCheckTest(contactId) {
  logSection('CHECK: Current Test Contact State');

  const tags = await getContactTags(contactId);

  log('i', `Contact ID: ${contactId}`);
  log('i', `Tags (${tags.length}):`);

  if (tags.length === 0) {
    log('  ', '  (no tags)');
  } else {
    // Color-code the approval-related tags
    const approvalTags = [
      'needs-elliott-approval',
      'approval-pending',
      'elliott-approved',
      'templates-approved',
      'campaign-active',
      'elliott-revision-needed',
      'revision-in-progress',
      'approval-escalate',
      'approval-cancelled',
    ];

    for (const tag of tags) {
      const isApproval = approvalTags.includes(tag);
      log('  ', `  ${isApproval ? '>>>' : '   '} ${tag}`);
    }
  }

  // Determine workflow state
  const hasApprovalPending = tags.includes('approval-pending');
  const hasApproved = tags.includes('elliott-approved');
  const hasTemplatesApproved = tags.includes('templates-approved');
  const hasCampaignActive = tags.includes('campaign-active');
  const hasEscalation = tags.includes('approval-escalate');
  const hasRevision = tags.includes('elliott-revision-needed');

  console.log('');
  log('i', 'Workflow state:');

  if (hasTemplatesApproved && hasCampaignActive) {
    log('+', 'COMPLETE — Templates approved, campaign active');
  } else if (hasTemplatesApproved) {
    log('+', 'APPROVED — Templates approved, waiting for campaign activation');
  } else if (hasApproved && hasApprovalPending) {
    log('~', 'PROCESSING — Elliott approved, workflow processing approval');
  } else if (hasApproved) {
    log('+', 'APPROVED — Elliott approved');
  } else if (hasRevision) {
    log('~', 'REVISION NEEDED — Elliott requested changes');
  } else if (hasEscalation) {
    log('!', 'ESCALATED — No response after 5 days');
  } else if (hasApprovalPending) {
    log('~', 'PENDING — Waiting for Elliott review');
  } else {
    log('i', 'NOT STARTED — No approval tags found');
  }
}

async function runCleanup(contactId) {
  logSection('CLEANUP: Remove Test Tags');

  const tagsToRemove = [
    'needs-elliott-approval',
    'approval-pending',
    'elliott-approved',
    'templates-approved',
    'campaign-active',
    'elliott-revision-needed',
    'revision-in-progress',
    'approval-escalate',
    'approval-cancelled',
  ];

  log('i', 'Removing all approval tags from test contact...');

  for (const tag of tagsToRemove) {
    await removeTag(contactId, tag);
    await sleep(200);
  }

  log('+', 'All approval tags removed. Contact reset for retesting.');
  log('i', 'Note: The contact itself was NOT deleted. Delete manually in GHL if needed.');
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('+============================================================+');
  console.log('|  Axle Towing - Template Approval Workflow Test             |');
  console.log('|  AI-7459: End-to-End Workflow Verification                 |');
  console.log('+============================================================+');
  console.log('');

  if (!API_KEY) {
    log('X', 'GHL_API_KEY not set.');
    log('i', 'Usage: source ../../website/.env.local && node test-approval-workflow.js');
    process.exit(1);
  }

  // Step 1: Find or create test contact
  logSection('SETUP: Test Contact');

  let contact = await findTestContact();

  if (contact) {
    log('+', `Found existing test contact: ${contact.id}`);
  } else {
    log('i', 'Test contact not found. Creating...');
    contact = await createTestContact();

    if (!contact) {
      log('X', 'Could not create test contact. Run setup-approval-workflow.js first.');
      process.exit(1);
    }

    log('+', `Test contact created: ${contact.id}`);
  }

  const contactId = contact.id;

  // Step 2: Run the requested test mode
  if (CHECK_ONLY) {
    await runCheckTest(contactId);
  } else if (CLEANUP) {
    await runCleanup(contactId);
  } else if (APPROVE_ONLY) {
    await runApprovalTest(contactId);
    await sleep(2000);
    await runCheckTest(contactId);
  } else if (TRIGGER_ONLY) {
    await runTriggerTest(contactId);
    await sleep(2000);
    await runCheckTest(contactId);
  } else {
    // Full test: trigger → wait → approve → verify
    log('i', 'Running full approval workflow test...\n');

    // Cleanup first
    await runCleanup(contactId);
    await sleep(1000);

    // Trigger
    const triggered = await runTriggerTest(contactId);
    if (!triggered) {
      log('X', 'Trigger failed. Aborting test.');
      process.exit(1);
    }

    // Wait for workflow to process
    log('i', '\nWaiting 5 seconds for workflow to process...');
    await sleep(5000);

    // Check intermediate state
    await runCheckTest(contactId);

    // Approve
    await runApprovalTest(contactId);

    // Wait for approval workflow to process
    log('i', '\nWaiting 5 seconds for approval to process...');
    await sleep(5000);

    // Final check
    await runCheckTest(contactId);

    logSection('TEST COMPLETE');
    log('i', 'Manual verification checklist:');
    log('  ', '  [ ] Elliott received approval request email');
    log('  ', '  [ ] GHL Workflow History shows execution');
    log('  ', '  [ ] Contact has "templates-approved" tag');
    log('  ', '  [ ] Contact has "campaign-active" tag (if activation workflow is live)');
    log('  ', '  [ ] Elliott received approval confirmation email');
    console.log('');
    log('i', 'Run with --cleanup to reset the test contact for retesting.');
  }

  console.log('');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
