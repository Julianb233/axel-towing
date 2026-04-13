# GHL Template Approval Workflow — Axle Towing

**Linear:** AI-7459
**Owner:** Elliott (axletowing.com)
**Status:** Ready for GHL setup

## What This Does

Ensures all outreach templates (nurture campaigns, referral sequences, cold outreach) are reviewed and approved by Elliott before any emails or SMS messages are sent to real contacts.

## Two Workflows

### 1. Template Approval (`needs-elliott-approval` trigger)
- Sends Elliott a notification email + SMS with review instructions
- Waits 2 days, then sends a reminder if no response
- Waits 3 more days (5 total), then escalates to Julian
- On approval: marks templates approved, sends confirmation
- On cancellation: cleans up tags

### 2. Template Revision (`elliott-revision-needed` trigger)
- Notifies AI Acrobatics team of requested changes
- Sends Elliott acknowledgment
- Team updates templates and resubmits

## Tag Flow

```
Submit for review:    needs-elliott-approval → approval-pending
Elliott approves:     elliott-approved → templates-approved
Elliott wants edits:  elliott-revision-needed → revision-in-progress
Resubmit after edits: needs-elliott-approval (cycle restarts)
No response 5 days:   approval-escalate
Cancel review:        approval-cancelled
```

## Files

| File | Purpose |
|------|---------|
| `workflow-template-approval.json` | Full GHL workflow config (approval + revision) |
| `setup-approval-workflow.js` | CLI tool for tags, status, submission |
| `test-approval-workflow.js` | E2E test script for workflow verification |
| `templates/approval-request-email.html` | Initial review notification to Elliott |
| `templates/approval-confirmed-email.html` | Approval confirmation to Elliott |
| `templates/revision-request-email.html` | Revision acknowledgment to Elliott |
| `templates/approval-request-sms.txt` | SMS ping for review request |
| `templates/approval-reminder-sms.txt` | SMS reminder after 48h |

## Usage

```bash
# Export configs and see setup instructions
node setup-approval-workflow.js

# Dry run — print what would be created
node setup-approval-workflow.js --dry-run

# Create tags via GHL API
node setup-approval-workflow.js --tags

# Check current approval status
node setup-approval-workflow.js --status

# Show what to submit for approval
node setup-approval-workflow.js --submit

# Test the workflow end-to-end
source ../../website/.env.local && node test-approval-workflow.js

# Test options
node test-approval-workflow.js --trigger-only   # Only trigger (don't auto-approve)
node test-approval-workflow.js --approve-only   # Only approve
node test-approval-workflow.js --check          # Check status
node test-approval-workflow.js --cleanup        # Reset test contact
```

## GHL Manual Setup

1. Go to **Automation > Workflows > Create New**
2. Name: `Template Approval -- Elliott Review`
3. Trigger: **Tag Added** = `needs-elliott-approval`
4. Add steps from `workflow-template-approval.json`
5. Set to **ACTIVE** (this is an internal ops workflow)
6. Repeat for the Revision workflow

## Dependencies

- AI-7455: GHL sub-account must be set up
- AI-7457: A2P 10DLC for SMS (SMS stays disabled until confirmed)
- AI-7461: PM Nurture templates (primary approval batch)
- AI-7460: Referral Partner templates
