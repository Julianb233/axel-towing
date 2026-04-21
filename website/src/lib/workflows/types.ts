/**
 * GHL Workflow Engine — Type Definitions
 *
 * Declarative workflow system that replaces GHL's UI workflow builder.
 * Workflows are defined in code, triggered by GHL webhooks, and executed
 * via Resend (email) + Twilio (SMS) + GHL API (tag/stage updates).
 *
 * Architecture:
 *   GHL contact event → webhook → workflow engine → Resend/Twilio/GHL API
 *   Delayed steps stored in Supabase, executed by cron every 15 min.
 */

// ─── Workflow Definition (static config) ────────────────────────────────────

export type StepAction = "send_email" | "send_sms" | "add_tag" | "remove_tag" | "move_stage" | "wait" | "condition";

export interface EmailTemplate {
  subject: string;
  /** Plain text body with {{contact.field}} placeholders */
  body: string;
  /** Optional HTML body — if omitted, uses the branded email wrapper */
  html?: string;
}

export interface SmsTemplate {
  body: string;
}

export interface WorkflowStep {
  id: string;
  action: StepAction;
  /** Delay in days before this step executes (0 = immediate) */
  delayDays: number;
  /** Optional delay in hours for finer control */
  delayHours?: number;
  /** Email template (required when action = send_email) */
  email?: EmailTemplate;
  /** SMS template (required when action = send_sms) */
  sms?: SmsTemplate;
  /** Tag name (required when action = add_tag or remove_tag) */
  tag?: string;
  /** Pipeline stage ID (required when action = move_stage) */
  stageId?: string;
  /** Condition for branching (action = condition) */
  condition?: {
    /** Check if contact has this tag */
    hasTag?: string;
    /** Check if contact does NOT have this tag */
    notHasTag?: string;
    /** Steps to execute if condition is true */
    thenSteps: string[];
    /** Steps to execute if condition is false */
    elseSteps?: string[];
  };
}

export type WorkflowTriggerType =
  | "tag_added"
  | "tag_removed"
  | "stage_changed"
  | "contact_created"
  | "webhook_inbound";

export interface WorkflowTrigger {
  type: WorkflowTriggerType;
  /** Tag name (for tag_added/tag_removed triggers) */
  tag?: string;
  /** Stage name (for stage_changed trigger) */
  stage?: string;
  /** Exclude contacts with these tags */
  excludeTags?: string[];
}

export type SendingChannel = "email" | "sms" | "voicemail";

export interface SendingWindow {
  /** Channels this window applies to */
  channels: SendingChannel[];
  /** Start hour in 24h format (MST) */
  startHour: number;
  /** End hour in 24h format (MST) */
  endHour: number;
  /** Days of week (0=Sun, 1=Mon, ..., 6=Sat) */
  days: number[];
}

export interface WorkflowConfig {
  /** Unique workflow identifier (e.g., "cold-outreach") */
  id: string;
  /** Human-readable name */
  name: string;
  /** Description for admin dashboard */
  description: string;
  /** What triggers this workflow */
  trigger: WorkflowTrigger;
  /** Ordered list of steps */
  steps: WorkflowStep[];
  /** Sending windows (optional — defaults to business hours) */
  sendingWindows?: SendingWindow[];
  /** From email address */
  fromEmail?: string;
  /** From display name */
  fromName?: string;
  /** Whether this workflow is active */
  enabled: boolean;
}

// ─── Runtime State (persisted in Supabase) ──────────────────────────────────

export type EnrollmentStatus = "active" | "completed" | "paused" | "cancelled";
export type StepStatus = "pending" | "scheduled" | "sent" | "skipped" | "failed";

export interface WorkflowEnrollment {
  id: string;
  /** Workflow config ID */
  workflowId: string;
  /** GHL contact ID */
  contactId: string;
  /** Contact email */
  contactEmail: string;
  /** Contact data snapshot (for template interpolation) */
  contactData: ContactData;
  /** Current status */
  status: EnrollmentStatus;
  /** When enrolled */
  enrolledAt: string;
  /** When completed (if applicable) */
  completedAt?: string;
  /** Current step index */
  currentStepIndex: number;
}

export interface ScheduledStep {
  id: string;
  enrollmentId: string;
  workflowId: string;
  stepId: string;
  stepIndex: number;
  /** When this step should execute */
  scheduledAt: string;
  /** Current status */
  status: StepStatus;
  /** When actually executed */
  executedAt?: string;
  /** Error message if failed */
  error?: string;
  /** Resend email ID or Twilio SID if applicable */
  externalId?: string;
}

// ─── Contact Data (from GHL webhook or API) ─────────────────────────────────

export interface ContactData {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  city?: string;
  tags: string[];
  customFields?: Record<string, string>;
  /** Computed fields for template interpolation */
  [key: string]: unknown;
}

// ─── Webhook Payloads ───────────────────────────────────────────────────────

export interface GHLWebhookPayload {
  /** Event type from GHL */
  type: string;
  /** Location ID */
  locationId: string;
  /** Contact data */
  contact?: {
    id: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    city?: string;
    tags?: string[];
    customField?: Record<string, string>;
  };
  /** Tag that was added/removed */
  tag?: string;
  /** Pipeline stage info */
  pipeline?: {
    id: string;
    stageId: string;
    stageName: string;
  };
}

// ─── Engine Interface ───────────────────────────────────────────────────────

export interface WorkflowEngine {
  /** Process an incoming GHL webhook */
  handleWebhook(payload: GHLWebhookPayload): Promise<{ enrolled: string[]; skipped: string[] }>;
  /** Execute all pending scheduled steps */
  executePendingSteps(): Promise<{ executed: number; failed: number; skipped: number }>;
  /** Enroll a contact in a specific workflow */
  enrollContact(workflowId: string, contact: ContactData): Promise<WorkflowEnrollment | null>;
  /** Cancel a contact's enrollment */
  cancelEnrollment(enrollmentId: string): Promise<void>;
  /** Get all active enrollments for a contact */
  getContactEnrollments(contactEmail: string): Promise<WorkflowEnrollment[]>;
  /** Get workflow execution stats */
  getStats(): Promise<WorkflowStats>;
}

export interface WorkflowStats {
  totalEnrollments: number;
  activeEnrollments: number;
  completedEnrollments: number;
  emailsSent: number;
  smsSent: number;
  failedSteps: number;
  byWorkflow: Record<string, {
    active: number;
    completed: number;
    emailsSent: number;
  }>;
}
