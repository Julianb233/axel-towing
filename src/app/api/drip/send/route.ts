import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getEnrollments } from "../route";
import { getTemplate } from "@/lib/email-templates";

/**
 * Drip Scheduler — GET /api/drip/send
 *
 * Designed to be called by a cron job (e.g., every 15 minutes).
 * Checks for emails that are due to be sent, sends them via Resend,
 * and marks them as sent.
 *
 * Authentication: Requires CRON_SECRET header to prevent unauthorized triggers.
 */

const resendApiKey = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || "dispatch@axletowing.com";

export async function GET(req: Request) {
  try {
    // Optional cron secret check
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const authHeader = req.headers.get("authorization");
      if (authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 },
        );
      }
    }

    const now = new Date();
    const enrollments = getEnrollments();
    const results: Array<{
      email: string;
      subject: string;
      status: "sent" | "skipped" | "failed";
      error?: string;
    }> = [];

    let resend: Resend | null = null;
    if (resendApiKey) {
      resend = new Resend(resendApiKey);
    }

    // Iterate all enrollments and find due emails
    for (const [, enrollmentList] of enrollments.entries()) {
      for (const enrollment of enrollmentList) {
        for (const scheduledEmail of enrollment.emails) {
          // Skip already-sent emails
          if (scheduledEmail.sent) continue;

          // Check if this email is due
          const scheduledTime = new Date(scheduledEmail.scheduledAt);
          if (scheduledTime > now) continue;

          // Get the template to generate HTML
          const template = getTemplate(
            scheduledEmail.sequenceType,
            scheduledEmail.dayOffset,
          );

          if (!template) {
            results.push({
              email: scheduledEmail.email,
              subject: scheduledEmail.subject,
              status: "failed",
              error: "Template not found",
            });
            continue;
          }

          // Build template variables
          const vars: Record<string, string> = {
            name: scheduledEmail.name,
            ...scheduledEmail.metadata,
          };

          const html = template.getHtml(vars);

          if (!resend) {
            console.warn(
              `RESEND_API_KEY not configured — marking email as sent (dry run): ${scheduledEmail.subject}`,
            );
            scheduledEmail.sent = true;
            scheduledEmail.sentAt = now.toISOString();
            results.push({
              email: scheduledEmail.email,
              subject: scheduledEmail.subject,
              status: "sent",
              error: "Dry run — Resend not configured",
            });
            continue;
          }

          // Send via Resend
          try {
            const { error } = await resend.emails.send({
              from: FROM_EMAIL,
              to: scheduledEmail.email,
              subject: scheduledEmail.subject,
              html,
            });

            if (error) {
              console.error(
                `Drip send failed for ${scheduledEmail.email}:`,
                error.message,
              );
              results.push({
                email: scheduledEmail.email,
                subject: scheduledEmail.subject,
                status: "failed",
                error: error.message,
              });
            } else {
              scheduledEmail.sent = true;
              scheduledEmail.sentAt = now.toISOString();
              console.log(
                `Drip email sent: ${scheduledEmail.email} — "${scheduledEmail.subject}"`,
              );
              results.push({
                email: scheduledEmail.email,
                subject: scheduledEmail.subject,
                status: "sent",
              });
            }
          } catch (sendError) {
            const errorMsg =
              sendError instanceof Error
                ? sendError.message
                : "Unknown send error";
            console.error(
              `Drip send exception for ${scheduledEmail.email}:`,
              errorMsg,
            );
            results.push({
              email: scheduledEmail.email,
              subject: scheduledEmail.subject,
              status: "failed",
              error: errorMsg,
            });
          }
        }
      }
    }

    const sent = results.filter((r) => r.status === "sent").length;
    const failed = results.filter((r) => r.status === "failed").length;

    return NextResponse.json({
      success: true,
      processedAt: now.toISOString(),
      summary: {
        checked: results.length,
        sent,
        failed,
      },
      results,
    });
  } catch (error) {
    console.error("Drip send error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
