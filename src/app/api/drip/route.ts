import { NextResponse } from "next/server";
import type { SequenceType } from "@/lib/email-templates";
import { EMAIL_SEQUENCES, SEQUENCE_NAMES } from "@/lib/email-templates";

/**
 * Drip Campaign API
 *
 * POST /api/drip — Enroll a lead into a drip sequence
 * GET  /api/drip?email=... — Check status of a lead's drip sequence
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface DripEmail {
  /** Unique ID for this scheduled email */
  id: string;
  /** Recipient email */
  email: string;
  /** Recipient name */
  name: string;
  /** Sequence type */
  sequenceType: SequenceType;
  /** Day offset from enrollment (0, 3, 7, etc.) */
  dayOffset: number;
  /** Email subject line */
  subject: string;
  /** Absolute scheduled send time (ISO string) */
  scheduledAt: string;
  /** Whether this email has been sent */
  sent: boolean;
  /** Actual send time (ISO string), null if not sent */
  sentAt: string | null;
  /** Additional metadata (property name, etc.) */
  metadata: Record<string, string>;
}

export interface DripEnrollment {
  /** Lead email (used as key) */
  email: string;
  /** Lead name */
  name: string;
  /** Sequence type */
  sequenceType: SequenceType;
  /** When the lead was enrolled (ISO string) */
  enrolledAt: string;
  /** Scheduled emails in this enrollment */
  emails: DripEmail[];
}

// ─── In-Memory Store (upgrade to Supabase/Redis in production) ──────────────

// In production this would be backed by Supabase, but for now we use a
// module-level Map so it persists across requests within the same server instance.
const enrollments = new Map<string, DripEnrollment[]>();

/** Exported for use by the /api/drip/send route */
export function getEnrollments(): Map<string, DripEnrollment[]> {
  return enrollments;
}

// ─── POST: Enroll a lead ────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim();
    const sequenceType = body.sequenceType as SequenceType;
    const metadata: Record<string, string> = body.metadata || {};

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }

    if (!sequenceType || !EMAIL_SEQUENCES[sequenceType]) {
      return NextResponse.json(
        {
          error: `Invalid sequence type. Valid types: ${Object.keys(EMAIL_SEQUENCES).join(", ")}`,
        },
        { status: 400 },
      );
    }

    // Check if already enrolled in this sequence
    const existing = enrollments.get(email) || [];
    const alreadyEnrolled = existing.some(
      (e) => e.sequenceType === sequenceType,
    );
    if (alreadyEnrolled) {
      return NextResponse.json(
        { error: `Lead is already enrolled in the ${SEQUENCE_NAMES[sequenceType]} sequence` },
        { status: 409 },
      );
    }

    // Build scheduled emails
    const now = new Date();
    const templates = EMAIL_SEQUENCES[sequenceType];
    const scheduledEmails: DripEmail[] = templates.map((template) => {
      const scheduledDate = new Date(now);
      scheduledDate.setDate(scheduledDate.getDate() + template.dayOffset);
      // Schedule for 9am Phoenix time (MST = UTC-7)
      scheduledDate.setUTCHours(16, 0, 0, 0); // 16:00 UTC = 9:00 AM MST

      // Interpolate subject line with metadata
      let subject = template.subject;
      for (const [key, value] of Object.entries(metadata)) {
        subject = subject.replace(`\${${key}}`, value);
      }
      // Replace any remaining template variables with defaults
      subject = subject.replace(/\$\{propertyName\}/g, "your property");
      subject = subject.replace(/\$\{name\}/g, name || "there");

      return {
        id: `drip-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
        email,
        name,
        sequenceType,
        dayOffset: template.dayOffset,
        subject,
        scheduledAt: scheduledDate.toISOString(),
        sent: false,
        sentAt: null,
        metadata,
      };
    });

    // Store enrollment
    const enrollment: DripEnrollment = {
      email,
      name,
      sequenceType,
      enrolledAt: now.toISOString(),
      emails: scheduledEmails,
    };

    existing.push(enrollment);
    enrollments.set(email, existing);

    console.log(
      `Drip enrollment: ${email} → ${SEQUENCE_NAMES[sequenceType]} (${scheduledEmails.length} emails)`,
    );

    return NextResponse.json({
      success: true,
      enrollment: {
        email,
        name,
        sequenceType,
        sequenceName: SEQUENCE_NAMES[sequenceType],
        enrolledAt: enrollment.enrolledAt,
        emailCount: scheduledEmails.length,
        emails: scheduledEmails.map((e) => ({
          dayOffset: e.dayOffset,
          subject: e.subject,
          scheduledAt: e.scheduledAt,
          sent: e.sent,
        })),
      },
    });
  } catch (error) {
    console.error("Drip API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// ─── GET: Check enrollment status ───────────────────────────────────────────

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = (searchParams.get("email") || "").trim().toLowerCase();

    if (!email) {
      // Return summary of all enrollments
      const summary: Array<{
        email: string;
        sequences: Array<{
          type: SequenceType;
          name: string;
          enrolledAt: string;
          totalEmails: number;
          sentEmails: number;
        }>;
      }> = [];

      for (const [key, enrollmentList] of enrollments.entries()) {
        summary.push({
          email: key,
          sequences: enrollmentList.map((e) => ({
            type: e.sequenceType,
            name: SEQUENCE_NAMES[e.sequenceType],
            enrolledAt: e.enrolledAt,
            totalEmails: e.emails.length,
            sentEmails: e.emails.filter((em) => em.sent).length,
          })),
        });
      }

      return NextResponse.json({
        totalEnrollments: enrollments.size,
        enrollments: summary,
      });
    }

    // Return specific lead's enrollments
    const leadEnrollments = enrollments.get(email);
    if (!leadEnrollments || leadEnrollments.length === 0) {
      return NextResponse.json(
        { error: "No enrollments found for this email" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      email,
      sequences: leadEnrollments.map((e) => ({
        type: e.sequenceType,
        name: SEQUENCE_NAMES[e.sequenceType],
        enrolledAt: e.enrolledAt,
        emails: e.emails.map((em) => ({
          dayOffset: em.dayOffset,
          subject: em.subject,
          scheduledAt: em.scheduledAt,
          sent: em.sent,
          sentAt: em.sentAt,
        })),
      })),
    });
  } catch (error) {
    console.error("Drip GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
