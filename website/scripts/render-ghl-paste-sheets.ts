/**
 * Render GHL Automation Builder paste sheets for the 4 BUILT workflows.
 *
 * AI-8344: GHL has no API to provision workflow graphs — wiring is manual UI work.
 * This script generates pasteable markdown sheets per workflow so a human with
 * GHL 2FA access can drop them into the Automation Builder in 30-60 min total.
 *
 * Usage:
 *   pnpm tsx scripts/render-ghl-paste-sheets.ts
 *   # or
 *   npx tsx scripts/render-ghl-paste-sheets.ts
 *
 * Output: docs/ghl-workflows/paste-sheets/*.md (overwritten on every run)
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import {
  EMAIL_SEQUENCES,
  SEQUENCE_NAMES,
  type EmailTemplate,
  type SequenceType,
} from "../src/lib/email-templates";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");
const OUT_DIR = join(REPO_ROOT, "docs/ghl-workflows/paste-sheets");

const GHL_VARS = {
  name: "{{contact.first_name}}",
  propertyName: "{{contact.company_name}}",
  companyName: "{{contact.company_name}}",
  shopName: "{{contact.company_name}}",
  vehicleDescription: "{{custom_values.vehicle_description}}",
  impoundLocation: "{{custom_values.impound_location}}",
  paymentLink: "{{custom_values.payment_link}}",
};

function asciiSubject(s: string): string {
  return s
    .replace(/\$\{propertyName\}/g, "{{contact.company_name}}")
    .replace(/\$\{name\}/g, "{{contact.first_name}}")
    .replace(/\$\{companyName\}/g, "{{contact.company_name}}")
    .replace(/\$\{shopName\}/g, "{{contact.company_name}}")
    .replace(/—/g, " - ")
    .replace(/–/g, "-")
    .replace(/‘|’/g, "'")
    .replace(/“|”/g, '"')
    .replace(/…/g, "...");
}

function dayLabel(offset: number): string {
  if (offset === 0) return "Day 0 (immediate)";
  return `Day ${offset}`;
}

interface WorkflowSpec {
  num: number;
  slug: string;
  title: string;
  trigger: string;
  triggerNotes: string;
  sequenceType: SequenceType;
  exitTag: string;
  activationStatus: string;
  buildOrder: string[];
}

const WORKFLOWS: WorkflowSpec[] = [
  {
    num: 6,
    slug: "06-nurture-pm-inbound",
    title: "Nurture: Property Manager Inbound",
    trigger:
      "Form Submitted (any of /contact, /quote, exit-intent floating CTA)",
    triggerNotes:
      "Filter: contact.tag CONTAINS 'seq-new-lead-nurture' (set by website/src/lib/ghl.ts on lead creation). Source field `propertyType` should be `apartment|commercial|hoa`.",
    sequenceType: "pm-nurture",
    exitTag: "nurture-complete",
    activationStatus:
      "OK to ACTIVATE after Elliott previews the 5 emails (subjects + first paragraph).",
    buildOrder: [
      "Trigger: Form Submitted (Contact Form, Quote Form, Exit-Intent CTA)",
      "Action: Add Tag `seq-new-lead-nurture` (idempotent — already set by API)",
      "Email 1 (Day 0): Welcome",
      "Wait: 3 days",
      "Email 2 (Day 3): 48-hour timeline",
      "Wait: 4 days",
      "Email 3 (Day 7): Copper Creek case study",
      "Wait: 7 days",
      "Email 4 (Day 14): Free assessment offer",
      "Wait: 16 days",
      "Email 5 (Day 30): Final check-in",
      "Action: Remove Tag `seq-new-lead-nurture`",
      "Action: Add Tag `nurture-complete`",
      "End",
    ],
  },
  {
    num: 10,
    slug: "10-referral-locksmith",
    title: "Referral: Locksmith Partner",
    trigger: "Tag Applied: `referral-locksmith`",
    triggerNotes:
      "Filter: contact must NOT already have tag `nurture-complete` or `cold-sequence-complete`. Use Goal node to exit if reply received.",
    sequenceType: "locksmith-partner",
    exitTag: "referral-locksmith-done",
    activationStatus: "OK to ACTIVATE after Elliott previews subjects.",
    buildOrder: [
      "Trigger: Tag Applied `referral-locksmith`",
      "Email 1 (Day 0): Revenue stream intro",
      "Wait: 5 days",
      "Email 2 (Day 5): 3-step process",
      "Wait: 9 days",
      "Email 3 (Day 14): 200+ partners social proof",
      "Action: Add Tag `referral-locksmith-done`",
      "End",
    ],
  },
  {
    num: 11,
    slug: "11-referral-mechanic",
    title: "Referral: Mechanic Partner",
    trigger: "Tag Applied: `referral-mechanic`",
    triggerNotes:
      "Same exit conditions as locksmith. Goal node on `Replied to Email`.",
    sequenceType: "mechanic-partner",
    exitTag: "referral-mechanic-done",
    activationStatus: "OK to ACTIVATE after Elliott previews subjects.",
    buildOrder: [
      "Trigger: Tag Applied `referral-mechanic`",
      "Email 1 (Day 0): Tow-to-shop intro",
      "Wait: 5 days",
      "Email 2 (Day 5): Customer benefits",
      "Wait: 9 days",
      "Email 3 (Day 14): 5-min signup",
      "Action: Add Tag `referral-mechanic-done`",
      "End",
    ],
  },
  {
    num: 14,
    slug: "14-transactional-vehicle-retrieval",
    title: "Transactional: Vehicle Retrieval",
    trigger:
      "Tag Applied `vehicle-impounded` OR Webhook from TowBook (when wired)",
    triggerNotes:
      "DRAFT-ONLY until: (a) TowBook webhook schema confirmed and (b) sender identity decision made. Per email-send-via-gws rule + Hafnia-style transactional rules, route through a separate sender (suggest `dispatch@axletowing.com`) to avoid mixing with marketing throttle. Goal node: exit if tag `vehicle-retrieved` applied.",
    sequenceType: "vehicle-retrieval",
    exitTag: "vehicle-retrieval-done",
    activationStatus:
      "DRAFT-ONLY — needs (1) sender-identity sign-off (2) TowBook webhook schema (3) optional Day-7 storage-fee email if not yet retrieved.",
    buildOrder: [
      "Trigger: Tag Applied `vehicle-impounded` (manual or webhook-driven)",
      "Email 1 (Day 0, immediate): Retrieval information",
      "Wait: 1 day",
      "Goal/If/Else: contact has tag `vehicle-retrieved`?",
      "  YES branch -> End",
      "  NO branch -> continue",
      "Email 2 (Day 1): Reminder + gate directions",
      "Wait: 6 days",
      "Goal/If/Else: contact has tag `vehicle-retrieved`?",
      "  YES branch -> End",
      "  NO branch -> Day-7 storage-fee email (TODO: needs Elliott approval)",
      "Action: Add Tag `vehicle-retrieval-done`",
      "End",
    ],
  },
];

function renderTemplate(t: EmailTemplate): string {
  return t.getHtml(GHL_VARS);
}

function buildSheet(spec: WorkflowSpec): string {
  const templates = EMAIL_SEQUENCES[spec.sequenceType] || [];
  const seqName = SEQUENCE_NAMES[spec.sequenceType];

  const emails = templates
    .map((t, idx) => {
      const subject = asciiSubject(t.subject);
      const html = renderTemplate(t);
      return `### Email ${idx + 1} - ${dayLabel(t.dayOffset)}

**GHL Subject (paste verbatim):**
\`\`\`
${subject}
\`\`\`

**From:** \`info@axletowing.com\` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

\`\`\`html
${html}
\`\`\`
`;
    })
    .join("\n---\n\n");

  return `# Workflow ${spec.num}: ${spec.title}

> **Linear:** AI-8344 - ${spec.title}
> **Source sequence:** \`${spec.sequenceType}\` (${seqName}) - rendered from \`website/src/lib/email-templates.ts\`
> **Activation status:** ${spec.activationStatus}
> **Last regenerated:** ${new Date().toISOString().slice(0, 10)} (run \`npx tsx scripts/render-ghl-paste-sheets.ts\` to refresh)

---

## Trigger Configuration

**Trigger type:** ${spec.trigger}

${spec.triggerNotes}

---

## Build Order in GHL Automation Builder

Drop these nodes in this order. Each "Email" node uses the subject + HTML body from the matching section below.

\`\`\`
${spec.buildOrder.map((s, i) => `${i + 1}. ${s}`).join("\n")}
\`\`\`

---

## Pre-Wiring Checklist

Before building this workflow, confirm in GHL > Settings:

- [ ] Tag \`${spec.exitTag}\` exists (create under Settings > Tags if not)
- [ ] Sender identity \`info@axletowing.com\` is verified (Settings > Email Services)
- [ ] Custom values referenced in this workflow (\`{{contact.first_name}}\`, \`{{contact.company_name}}\`) match real contact fields
- [ ] Test contact has the trigger tag/condition that activates this workflow

---

## Email Templates (Pasteable)

${emails}

---

## Post-Wiring Validation

After publishing as DRAFT in GHL:

1. Add a test contact (\`test+${spec.slug}@axletowing.com\`) with \`first_name=Test\`, \`company_name=Test Property\`.
2. Apply the trigger (tag or form) to that contact.
3. Watch the workflow execution log: every email should send successfully and merge fields should resolve.
4. Spot-check the test inbox: subjects ASCII, HTML renders correctly in Gmail + Apple Mail + Outlook.
5. Only then flip the workflow to ACTIVE.

---

*Generated by \`website/scripts/render-ghl-paste-sheets.ts\`. Edit \`website/src/lib/email-templates.ts\` to change copy, then re-run.*
`;
}

function buildIndex(): string {
  const rows = WORKFLOWS.map((w) => {
    const t = EMAIL_SEQUENCES[w.sequenceType] || [];
    return `| ${w.num} | [\`${w.slug}\`](./${w.slug}.md) | ${t.length} | ${w.activationStatus.split(" - ")[0]} |`;
  }).join("\n");

  return `# GHL Automation Builder - Paste Sheets (Generated)

> **Linear:** AI-8344
> **Generated by:** \`website/scripts/render-ghl-paste-sheets.ts\`
> **Last regenerated:** ${new Date().toISOString().slice(0, 10)}
> **Source of truth for copy:** \`website/src/lib/email-templates.ts\`

## What's in here

This directory holds the 4 fully BUILT workflows from the AI-8344 manifest, rendered as drop-in paste sheets for a human with GHL 2FA access. The other 10 workflows in the manifest are blocked on Elliott copy approval (markdown only) and have NOT been paste-sheetified yet - regenerate this directory after their copy lands in \`email-templates.ts\`.

## The 4 BUILT workflows

| # | Slug | Emails | Status |
|---|------|--------|--------|
${rows}

## How to use these sheets (for the human doing the wiring)

1. Log into GHL with 2FA -> Axle sub-account -> Automation > Workflows
2. Click "+ Create Workflow" -> Start From Scratch
3. Open \`<slug>.md\` from this directory
4. Set the trigger per the "Trigger Configuration" section
5. Drop nodes in the order listed under "Build Order"
6. For each Email node:
   - Paste the subject (already ASCII + GHL-tokenized)
   - Switch the body editor to "Source Code" / HTML mode
   - Paste the HTML body verbatim
   - Set sender to \`info@axletowing.com\`
7. Save as DRAFT (do NOT activate)
8. Run the post-wiring validation in each sheet
9. Only flip to ACTIVE after Elliott previews

Estimated wiring time: 10-15 min per workflow. Total ~45-60 min for all 4.

## What's NOT in here (and why)

The 10 other workflows (#1-5 cold sequences, #7-9 nurture/retention, #12-13 referral) are marked NEEDS-COPY-EDIT in \`docs/ghl-workflows/MANIFEST.md\`. They live as markdown drafts in:

- \`docs/COLD-EMAIL-SEQUENCES.md\` (cold #1-5)
- \`docs/NURTURE-CAMPAIGN-SEQUENCES.md\` (nurture #7-9)
- \`docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md\` (referral #12-13)

To add them to this paste-sheet pipeline:

1. Convert the markdown copy to branded HTML (use \`emailWrapper()\` from \`email-templates.ts\` for consistency)
2. Add a new \`SequenceType\` literal and template array to \`email-templates.ts\`
3. Add a \`WorkflowSpec\` entry to \`scripts/render-ghl-paste-sheets.ts\`
4. Re-run the renderer

That work is gated on Elliott approving the copy iterations - tracked in AI-8363 .. AI-8371 (sub-issues per the AI-8344 thread).

## Regenerate

\`\`\`bash
cd website
npx tsx scripts/render-ghl-paste-sheets.ts
\`\`\`

Output is overwritten in place. Commit the diff so the next agent / human sees the latest.
`;
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  let count = 0;

  for (const spec of WORKFLOWS) {
    const sheet = buildSheet(spec);
    const path = join(OUT_DIR, `${spec.slug}.md`);
    writeFileSync(path, sheet);
    console.log(`wrote ${path}`);
    count++;
  }

  const indexPath = join(OUT_DIR, "README.md");
  writeFileSync(indexPath, buildIndex());
  console.log(`wrote ${indexPath}`);

  console.log(`\nRendered ${count} paste sheets + 1 index to ${OUT_DIR}`);
}

main();
