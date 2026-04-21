/**
 * All Workflow Configurations — Barrel Export
 *
 * Each workflow is defined as a TypeScript config object.
 * To add a new workflow: create a file, define the config, add it to ALL_WORKFLOWS.
 */

import type { WorkflowConfig } from "../types";
import { coldOutreach } from "./cold-outreach";
import { hoaBoardMember } from "./hoa-board-member";
import { propertyManager } from "./property-manager";
import { reEngagement } from "./re-engagement";
import { retentionQuarterly } from "./retention-quarterly";
import { renewalReminder } from "./renewal-reminder";
import { referralThankYou } from "./referral-thank-you";
import { referralLocksmith } from "./referral-locksmith";
import { referralUber } from "./referral-uber";
import { referralParkingPermit } from "./referral-parking-permit";
import { referralMechanic } from "./referral-mechanic";
import { referralMoving } from "./referral-moving";
import { referralPainter } from "./referral-painter";
import { referralHoaPm } from "./referral-hoa-pm";
import { referralPaving } from "./referral-paving";

export const ALL_WORKFLOWS: WorkflowConfig[] = [
  // Nurture sequences (7)
  coldOutreach,
  hoaBoardMember,
  propertyManager,
  reEngagement,
  retentionQuarterly,
  renewalReminder,
  referralThankYou,
  // Referral partner sequences (8)
  referralLocksmith,
  referralUber,
  referralParkingPermit,
  referralMechanic,
  referralMoving,
  referralPainter,
  referralHoaPm,
  referralPaving,
];

/** Lookup a workflow config by ID */
export function getWorkflow(id: string): WorkflowConfig | undefined {
  return ALL_WORKFLOWS.find((w) => w.id === id);
}

/** Get all enabled workflows */
export function getEnabledWorkflows(): WorkflowConfig[] {
  return ALL_WORKFLOWS.filter((w) => w.enabled);
}

/** Tag-to-workflow quick lookup */
export function getWorkflowByTriggerTag(tag: string): WorkflowConfig | undefined {
  return ALL_WORKFLOWS.find(
    (w) => w.enabled && w.trigger.type === "tag_added" && w.trigger.tag === tag,
  );
}
