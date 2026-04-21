/**
 * GHL Workflow Engine — Public API
 *
 * Usage:
 *   import { workflowEngine, ALL_WORKFLOWS } from "@/lib/workflows";
 *
 * The workflow engine replaces GHL's built-in workflow builder with
 * a code-first, webhook-driven system. Workflows are defined as
 * TypeScript configs, triggered by GHL webhooks, and executed via
 * Resend (email) + Twilio (SMS) + GHL API (tag/stage updates).
 *
 * Architecture:
 *   GHL contact event → POST /api/webhooks/ghl → engine.handleWebhook()
 *   Cron (15 min) → GET /api/cron/workflows → engine.executePendingSteps()
 *   Admin → GET /api/admin/workflows → engine.getStats()
 */

export { workflowEngine } from "./engine";
export { ALL_WORKFLOWS, getWorkflow, getEnabledWorkflows, getWorkflowByTriggerTag } from "./configs";
export type {
  WorkflowConfig,
  WorkflowStep,
  WorkflowTrigger,
  WorkflowEnrollment,
  ScheduledStep,
  ContactData,
  GHLWebhookPayload,
  WorkflowEngine,
  WorkflowStats,
  EmailTemplate,
  SmsTemplate,
} from "./types";
