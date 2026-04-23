/**
 * Workflow Execution Engine
 *
 * Processes GHL webhooks, enrolls contacts into workflows,
 * schedules delayed steps, and executes them via Resend/Twilio/GHL API.
 */

import { Resend } from "resend";
import { randomUUID } from "crypto";
import type {
  WorkflowConfig,
  WorkflowEnrollment,
  ScheduledStep,
  ContactData,
  GHLWebhookPayload,
  WorkflowStep,
  WorkflowEngine,
  WorkflowStats,
} from "./types";
import {
  createEnrollment,
  updateEnrollmentStatus,
  getActiveEnrollment,
  getEnrollmentsByContact,
  createScheduledSteps,
  getPendingSteps,
  updateStepStatus,
  getWorkflowStats,
} from "./store";
import { renderEmail, renderSms } from "./template";
import { ALL_WORKFLOWS } from "./configs";

// ─── Senders ────────────────────────────────────────────────────────────────

let resend: Resend | null = null;
function getResend(): Resend | null {
  if (resend) return resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  resend = new Resend(key);
  return resend;
}

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

function ghlHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function ghlAddTag(contactId: string, tag: string): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) return;

  await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers: ghlHeaders(apiKey),
    body: JSON.stringify({ tags: [tag] }),
  });
}

async function ghlRemoveTag(contactId: string, tag: string): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) return;

  await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
    method: "DELETE",
    headers: ghlHeaders(apiKey),
    body: JSON.stringify({ tags: [tag] }),
  });
}

async function sendSms(to: string, body: string): Promise<string | null> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.warn("[Workflows] Twilio not configured — skipping SMS");
    return null;
  }

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: to, From: fromNumber, Body: body }),
    },
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Twilio error: ${res.status} ${err}`);
  }

  const data = (await res.json()) as { sid?: string };
  return data.sid || null;
}

// ─── Sending Window Check ───────────────────────────────────────────────────

function isWithinSendingWindow(workflow: WorkflowConfig, channel: "email" | "sms"): boolean {
  const windows = workflow.sendingWindows || [
    { channels: ["email"], startHour: 8, endHour: 17, days: [1, 2, 3, 4, 5] },
    { channels: ["sms"], startHour: 9, endHour: 16, days: [1, 2, 3, 4, 5] },
  ];

  // Current hour in MST (UTC-7)
  const now = new Date();
  const mstHour = (now.getUTCHours() - 7 + 24) % 24;
  const mstDay = now.getUTCDay();

  for (const window of windows) {
    if (window.channels.includes(channel)) {
      if (window.days.includes(mstDay) && mstHour >= window.startHour && mstHour < window.endHour) {
        return true;
      }
    }
  }
  return false;
}

// ─── Core Engine ────────────────────────────────────────────────────────────

function getWorkflowConfigs(): Map<string, WorkflowConfig> {
  const map = new Map<string, WorkflowConfig>();
  for (const wf of ALL_WORKFLOWS) {
    map.set(wf.id, wf);
  }
  return map;
}

function findMatchingWorkflows(payload: GHLWebhookPayload): WorkflowConfig[] {
  const configs = getWorkflowConfigs();
  const matches: WorkflowConfig[] = [];

  for (const [, wf] of configs) {
    if (!wf.enabled) continue;

    const trigger = wf.trigger;

    // Check trigger type match
    if (trigger.type === "tag_added" && payload.type === "ContactTagUpdate" && payload.tag) {
      if (trigger.tag === payload.tag) {
        matches.push(wf);
      }
    } else if (trigger.type === "contact_created" && payload.type === "ContactCreate") {
      matches.push(wf);
    } else if (trigger.type === "stage_changed" && payload.pipeline) {
      if (trigger.stage === payload.pipeline.stageName) {
        matches.push(wf);
      }
    }
  }

  return matches;
}

function contactFromPayload(payload: GHLWebhookPayload): ContactData | null {
  const c = payload.contact;
  if (!c) return null;

  return {
    id: c.id,
    email: c.email || "",
    phone: c.phone,
    firstName: c.firstName || "",
    lastName: c.lastName || "",
    companyName: c.companyName,
    city: c.city,
    tags: c.tags || [],
    customFields: c.customField,
  };
}

function scheduleSteps(
  enrollment: WorkflowEnrollment,
  workflow: WorkflowConfig,
): ScheduledStep[] {
  const enrolledAt = new Date(enrollment.enrolledAt);
  const scheduled: ScheduledStep[] = [];

  let cumulativeDelayMs = 0;

  for (let i = 0; i < workflow.steps.length; i++) {
    const step = workflow.steps[i];

    // Skip condition/wait steps — they're handled inline
    if (step.action === "wait" || step.action === "condition") continue;

    // Calculate absolute schedule time
    const delayMs =
      (step.delayDays * 24 * 60 * 60 * 1000) +
      ((step.delayHours || 0) * 60 * 60 * 1000);
    cumulativeDelayMs += delayMs;

    const scheduledAt = new Date(enrolledAt.getTime() + cumulativeDelayMs);

    // Snap to 9am MST if it's an email, 10am MST if SMS
    if (step.action === "send_email") {
      scheduledAt.setUTCHours(16, 0, 0, 0); // 9am MST
    } else if (step.action === "send_sms") {
      scheduledAt.setUTCHours(17, 0, 0, 0); // 10am MST
    }

    // Don't schedule in the past — bump to next valid window
    if (scheduledAt < new Date()) {
      scheduledAt.setTime(Date.now() + 60_000); // 1 minute from now
    }

    scheduled.push({
      id: randomUUID(),
      enrollmentId: enrollment.id,
      workflowId: workflow.id,
      stepId: step.id,
      stepIndex: i,
      scheduledAt: scheduledAt.toISOString(),
      status: "scheduled",
    });
  }

  return scheduled;
}

async function executeStep(
  step: ScheduledStep,
  workflow: WorkflowConfig,
  enrollment: WorkflowEnrollment,
): Promise<void> {
  const workflowStep = workflow.steps.find((s) => s.id === step.stepId);
  if (!workflowStep) {
    await updateStepStatus(step.id, "failed", { error: "Step config not found" });
    return;
  }

  const contact = enrollment.contactData;

  // Check exclude tags
  if (workflow.trigger.excludeTags?.some((t) => contact.tags.includes(t))) {
    await updateStepStatus(step.id, "skipped", { error: "Contact has exclude tag" });
    return;
  }

  try {
    switch (workflowStep.action) {
      case "send_email": {
        if (!workflowStep.email) {
          await updateStepStatus(step.id, "failed", { error: "No email template" });
          return;
        }

        // Check sending window — reschedule if outside
        if (!isWithinSendingWindow(workflow, "email")) {
          // Will be picked up next cron run during business hours
          return;
        }

        const r = getResend();
        if (!r) {
          await updateStepStatus(step.id, "failed", { error: "Resend not configured" });
          return;
        }

        const rendered = renderEmail(workflowStep.email, contact);
        const fromEmail = workflow.fromEmail || "info@axletowing.com";
        const fromName = workflow.fromName || "Elliott — Axle Towing";

        const { data, error } = await r.emails.send({
          from: `${fromName} <${fromEmail}>`,
          to: contact.email,
          subject: rendered.subject,
          text: rendered.text,
          html: rendered.html,
        });

        if (error) {
          await updateStepStatus(step.id, "failed", { error: error.message });
          return;
        }

        await updateStepStatus(step.id, "sent", { externalId: data?.id });
        break;
      }

      case "send_sms": {
        if (!workflowStep.sms || !contact.phone) {
          await updateStepStatus(step.id, "skipped", {
            error: !contact.phone ? "No phone number" : "No SMS template",
          });
          return;
        }

        if (!isWithinSendingWindow(workflow, "sms")) {
          return; // Wait for next cron within business hours
        }

        const smsBody = renderSms(workflowStep.sms, contact);
        const sid = await sendSms(contact.phone, smsBody);

        await updateStepStatus(step.id, "sent", { externalId: sid || undefined });
        break;
      }

      case "add_tag": {
        if (workflowStep.tag) {
          await ghlAddTag(contact.id, workflowStep.tag);
        }
        await updateStepStatus(step.id, "sent");
        break;
      }

      case "remove_tag": {
        if (workflowStep.tag) {
          await ghlRemoveTag(contact.id, workflowStep.tag);
        }
        await updateStepStatus(step.id, "sent");
        break;
      }

      default:
        await updateStepStatus(step.id, "skipped", { error: `Unhandled action: ${workflowStep.action}` });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await updateStepStatus(step.id, "failed", { error: message });
    console.error(`[Workflows] Step ${step.id} failed:`, message);
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

export const workflowEngine: WorkflowEngine = {
  async handleWebhook(payload) {
    const enrolled: string[] = [];
    const skipped: string[] = [];

    const contact = contactFromPayload(payload);
    if (!contact || !contact.email) {
      return { enrolled, skipped: ["No contact email in payload"] };
    }

    const matchingWorkflows = findMatchingWorkflows(payload);

    for (const wf of matchingWorkflows) {
      // Check if already enrolled
      const existing = await getActiveEnrollment(wf.id, contact.email);
      if (existing) {
        skipped.push(`${wf.id}: already enrolled`);
        continue;
      }

      // Check exclude tags
      if (wf.trigger.excludeTags?.some((t) => contact.tags.includes(t))) {
        skipped.push(`${wf.id}: has exclude tag`);
        continue;
      }

      const result = await this.enrollContact(wf.id, contact);
      if (result) {
        enrolled.push(wf.id);
      } else {
        skipped.push(`${wf.id}: enrollment failed`);
      }
    }

    return { enrolled, skipped };
  },

  async enrollContact(workflowId, contact) {
    const configs = getWorkflowConfigs();
    const wf = configs.get(workflowId);
    if (!wf) return null;

    const enrollment: WorkflowEnrollment = {
      id: randomUUID(),
      workflowId,
      contactId: contact.id,
      contactEmail: contact.email.toLowerCase(),
      contactData: contact,
      status: "active",
      enrolledAt: new Date().toISOString(),
      currentStepIndex: 0,
    };

    await createEnrollment(enrollment);

    // Schedule all steps
    const steps = scheduleSteps(enrollment, wf);
    if (steps.length > 0) {
      await createScheduledSteps(steps);
    }

    console.log(
      `[Workflows] Enrolled ${contact.email} in "${wf.name}" (${steps.length} steps scheduled)`,
    );

    return enrollment;
  },

  async executePendingSteps() {
    const configs = getWorkflowConfigs();
    const pending = await getPendingSteps(50);

    let executed = 0;
    let failed = 0;
    let skippedCount = 0;

    for (const step of pending) {
      const wf = configs.get(step.workflowId);
      if (!wf) {
        await updateStepStatus(step.id, "failed", { error: "Workflow config not found" });
        failed++;
        continue;
      }

      // Get enrollment for contact data
      // For in-memory, we need a lookup — for Supabase, we'd join
      // Simplified: look up by enrollment ID in the step
      const enrollments = await getEnrollmentsByContact("");
      // We need the enrollment data — let's get it directly
      const sb = getSupabaseClient();
      let enrollment: WorkflowEnrollment | null = null;

      if (sb) {
        const { data } = await sb
          .from("workflow_enrollments")
          .select("*")
          .eq("id", step.enrollmentId)
          .single();
        if (data) {
          enrollment = {
            id: data.id,
            workflowId: data.workflow_id,
            contactId: data.contact_id,
            contactEmail: data.contact_email,
            contactData: data.contact_data,
            status: data.status,
            enrolledAt: data.enrolled_at,
            currentStepIndex: data.current_step_index,
          };
        }
      } else {
        // In-memory fallback — import from store
        const { getEnrollmentById } = await import("./store-helpers");
        enrollment = getEnrollmentById(step.enrollmentId);
      }

      if (!enrollment || enrollment.status !== "active") {
        await updateStepStatus(step.id, "skipped", { error: "Enrollment not active" });
        skippedCount++;
        continue;
      }

      await executeStep(step, wf, enrollment);

      const updatedStep = step; // Re-read would be ideal but for perf we check inline
      // We already updated status inside executeStep
      executed++;

      // Check if this was the last step — mark enrollment complete
      const allSteps = wf.steps.filter(
        (s) => s.action !== "wait" && s.action !== "condition",
      );
      if (step.stepIndex >= allSteps.length - 1) {
        await updateEnrollmentStatus(enrollment.id, "completed");
      } else {
        await updateEnrollmentStatus(enrollment.id, "active", step.stepIndex + 1);
      }
    }

    return { executed, failed, skipped: skippedCount };
  },

  async cancelEnrollment(enrollmentId) {
    await updateEnrollmentStatus(enrollmentId, "cancelled");
  },

  async getContactEnrollments(contactEmail) {
    return getEnrollmentsByContact(contactEmail);
  },

  async getStats() {
    return getWorkflowStats();
  },
};

// Helper to get supabase for direct queries in executePendingSteps
function getSupabaseClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } = require("@supabase/supabase-js");
  return createClient(url, key);
}

// Re-export for convenience
export { ALL_WORKFLOWS } from "./configs";
