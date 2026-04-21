/**
 * Workflow Store — Supabase-backed persistence for enrollments and scheduled steps.
 *
 * Tables required (auto-created by deploy script):
 *   - workflow_enrollments
 *   - workflow_scheduled_steps
 *   - workflow_execution_log
 *
 * Falls back to in-memory store when SUPABASE_URL is not configured,
 * so the system works in development without a database.
 */

import type {
  WorkflowEnrollment,
  ScheduledStep,
  EnrollmentStatus,
  StepStatus,
  ContactData,
  WorkflowStats,
} from "./types";

// ─── Supabase Client ────────────────────────────────────────────────────────

let supabase: ReturnType<typeof createClient> | null = null;

function createClient(url: string, key: string) {
  // Dynamic import to avoid build issues when supabase isn't installed
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient: create } = require("@supabase/supabase-js");
  return create(url, key);
}

function getSupabase() {
  if (supabase) return supabase;

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn("[Workflows] No Supabase config — using in-memory store");
    return null;
  }

  supabase = createClient(url, key);
  return supabase;
}

// ─── In-Memory Fallback ─────────────────────────────────────────────────────

const memEnrollments: WorkflowEnrollment[] = [];
const memSteps: ScheduledStep[] = [];

// ─── Enrollment CRUD ────────────────────────────────────────────────────────

export async function createEnrollment(enrollment: WorkflowEnrollment): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from("workflow_enrollments").insert({
      id: enrollment.id,
      workflow_id: enrollment.workflowId,
      contact_id: enrollment.contactId,
      contact_email: enrollment.contactEmail,
      contact_data: enrollment.contactData,
      status: enrollment.status,
      enrolled_at: enrollment.enrolledAt,
      current_step_index: enrollment.currentStepIndex,
    });
    if (error) throw new Error(`Failed to create enrollment: ${error.message}`);
  } else {
    memEnrollments.push(enrollment);
  }
}

export async function updateEnrollmentStatus(
  enrollmentId: string,
  status: EnrollmentStatus,
  stepIndex?: number,
): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const update: Record<string, unknown> = { status };
    if (stepIndex !== undefined) update.current_step_index = stepIndex;
    if (status === "completed") update.completed_at = new Date().toISOString();

    const { error } = await sb
      .from("workflow_enrollments")
      .update(update)
      .eq("id", enrollmentId);
    if (error) throw new Error(`Failed to update enrollment: ${error.message}`);
  } else {
    const e = memEnrollments.find((x) => x.id === enrollmentId);
    if (e) {
      e.status = status;
      if (stepIndex !== undefined) e.currentStepIndex = stepIndex;
      if (status === "completed") e.completedAt = new Date().toISOString();
    }
  }
}

export async function getEnrollmentsByContact(email: string): Promise<WorkflowEnrollment[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("workflow_enrollments")
      .select("*")
      .eq("contact_email", email.toLowerCase());
    if (error) throw new Error(`Failed to get enrollments: ${error.message}`);
    return (data || []).map(mapEnrollmentRow);
  }
  return memEnrollments.filter((e) => e.contactEmail === email.toLowerCase());
}

export async function getActiveEnrollment(
  workflowId: string,
  contactEmail: string,
): Promise<WorkflowEnrollment | null> {
  const sb = getSupabase();
  if (sb) {
    const { data } = await sb
      .from("workflow_enrollments")
      .select("*")
      .eq("workflow_id", workflowId)
      .eq("contact_email", contactEmail.toLowerCase())
      .eq("status", "active")
      .limit(1)
      .single();
    return data ? mapEnrollmentRow(data) : null;
  }
  return (
    memEnrollments.find(
      (e) =>
        e.workflowId === workflowId &&
        e.contactEmail === contactEmail.toLowerCase() &&
        e.status === "active",
    ) || null
  );
}

// ─── Scheduled Step CRUD ────────────────────────────────────────────────────

export async function createScheduledSteps(steps: ScheduledStep[]): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const rows = steps.map((s) => ({
      id: s.id,
      enrollment_id: s.enrollmentId,
      workflow_id: s.workflowId,
      step_id: s.stepId,
      step_index: s.stepIndex,
      scheduled_at: s.scheduledAt,
      status: s.status,
    }));
    const { error } = await sb.from("workflow_scheduled_steps").insert(rows);
    if (error) throw new Error(`Failed to create steps: ${error.message}`);
  } else {
    memSteps.push(...steps);
  }
}

export async function getPendingSteps(limit = 50): Promise<ScheduledStep[]> {
  const now = new Date().toISOString();
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("workflow_scheduled_steps")
      .select("*")
      .in("status", ["pending", "scheduled"])
      .lte("scheduled_at", now)
      .order("scheduled_at", { ascending: true })
      .limit(limit);
    if (error) throw new Error(`Failed to get pending steps: ${error.message}`);
    return (data || []).map(mapStepRow);
  }
  return memSteps
    .filter((s) => (s.status === "pending" || s.status === "scheduled") && s.scheduledAt <= now)
    .sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt))
    .slice(0, limit);
}

export async function updateStepStatus(
  stepId: string,
  status: StepStatus,
  extra?: { externalId?: string; error?: string },
): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const update: Record<string, unknown> = { status };
    if (status === "sent" || status === "failed") update.executed_at = new Date().toISOString();
    if (extra?.externalId) update.external_id = extra.externalId;
    if (extra?.error) update.error = extra.error;

    const { error } = await sb
      .from("workflow_scheduled_steps")
      .update(update)
      .eq("id", stepId);
    if (error) throw new Error(`Failed to update step: ${error.message}`);
  } else {
    const s = memSteps.find((x) => x.id === stepId);
    if (s) {
      s.status = status;
      if (status === "sent" || status === "failed") s.executedAt = new Date().toISOString();
      if (extra?.externalId) s.externalId = extra.externalId;
      if (extra?.error) s.error = extra.error;
    }
  }
}

// ─── Stats ──────────────────────────────────────────────────────────────────

export async function getWorkflowStats(): Promise<WorkflowStats> {
  const sb = getSupabase();
  if (sb) {
    const [enrollData, stepData] = await Promise.all([
      sb.from("workflow_enrollments").select("workflow_id, status"),
      sb.from("workflow_scheduled_steps").select("workflow_id, status"),
    ]);

    const enrollments = enrollData.data || [];
    const steps = stepData.data || [];

    const byWorkflow: WorkflowStats["byWorkflow"] = {};
    for (const e of enrollments) {
      const wid = e.workflow_id;
      if (!byWorkflow[wid]) byWorkflow[wid] = { active: 0, completed: 0, emailsSent: 0 };
      if (e.status === "active") byWorkflow[wid].active++;
      if (e.status === "completed") byWorkflow[wid].completed++;
    }

    let emailsSent = 0;
    let smsSent = 0;
    let failedSteps = 0;
    for (const s of steps) {
      if (s.status === "sent") {
        // Count based on step_id naming convention
        if (s.step_id?.includes("email")) emailsSent++;
        else if (s.step_id?.includes("sms")) smsSent++;
        if (byWorkflow[s.workflow_id]) byWorkflow[s.workflow_id].emailsSent++;
      }
      if (s.status === "failed") failedSteps++;
    }

    return {
      totalEnrollments: enrollments.length,
      activeEnrollments: enrollments.filter((e) => e.status === "active").length,
      completedEnrollments: enrollments.filter((e) => e.status === "completed").length,
      emailsSent,
      smsSent,
      failedSteps,
      byWorkflow,
    };
  }

  // In-memory fallback stats
  const byWorkflow: WorkflowStats["byWorkflow"] = {};
  for (const e of memEnrollments) {
    if (!byWorkflow[e.workflowId]) byWorkflow[e.workflowId] = { active: 0, completed: 0, emailsSent: 0 };
    if (e.status === "active") byWorkflow[e.workflowId].active++;
    if (e.status === "completed") byWorkflow[e.workflowId].completed++;
  }

  return {
    totalEnrollments: memEnrollments.length,
    activeEnrollments: memEnrollments.filter((e) => e.status === "active").length,
    completedEnrollments: memEnrollments.filter((e) => e.status === "completed").length,
    emailsSent: memSteps.filter((s) => s.status === "sent" && s.stepId.includes("email")).length,
    smsSent: memSteps.filter((s) => s.status === "sent" && s.stepId.includes("sms")).length,
    failedSteps: memSteps.filter((s) => s.status === "failed").length,
    byWorkflow,
  };
}

// ─── Row Mappers ────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapEnrollmentRow(row: any): WorkflowEnrollment {
  return {
    id: row.id,
    workflowId: row.workflow_id,
    contactId: row.contact_id,
    contactEmail: row.contact_email,
    contactData: row.contact_data as ContactData,
    status: row.status,
    enrolledAt: row.enrolled_at,
    completedAt: row.completed_at || undefined,
    currentStepIndex: row.current_step_index,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapStepRow(row: any): ScheduledStep {
  return {
    id: row.id,
    enrollmentId: row.enrollment_id,
    workflowId: row.workflow_id,
    stepId: row.step_id,
    stepIndex: row.step_index,
    scheduledAt: row.scheduled_at,
    status: row.status,
    executedAt: row.executed_at || undefined,
    error: row.error || undefined,
    externalId: row.external_id || undefined,
  };
}
