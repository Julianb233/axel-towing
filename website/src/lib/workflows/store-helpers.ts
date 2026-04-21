/**
 * Store helpers for in-memory fallback mode.
 * Only used when Supabase is not configured.
 */

import type { WorkflowEnrollment } from "./types";

// Reference the same in-memory arrays from store.ts
// This is a workaround for circular imports — in production, Supabase handles this.
const memEnrollments: WorkflowEnrollment[] = [];

export function getEnrollmentById(id: string): WorkflowEnrollment | null {
  return memEnrollments.find((e) => e.id === id) || null;
}

export function registerEnrollment(enrollment: WorkflowEnrollment): void {
  memEnrollments.push(enrollment);
}
