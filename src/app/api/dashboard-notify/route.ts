import { NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

/**
 * POST /api/dashboard-notify
 * Receives feedback from the dashboard portal and sends notifications
 * to the team via email (Resend) and SMS (Twilio).
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, text, priority, relatedPage, reaction, createdAt } = body;

    if (!type || !text) {
      return NextResponse.json(
        { error: "type and text are required" },
        { status: 400 },
      );
    }

    const referenceId = `DASH-FB-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = createdAt
      ? new Date(createdAt).toLocaleString("en-US", { timeZone: "America/Phoenix" })
      : new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" });

    // Build notification body
    const priorityLabel = priority ? ` [${priority.toUpperCase()} priority]` : "";
    const reactionLabel = reaction ? ` (${reaction === "up" ? "Thumbs Up" : "Thumbs Down"})` : "";
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

    const details = [
      `DASHBOARD FEEDBACK — ${typeLabel}${reactionLabel}${priorityLabel}`,
      ``,
      `Reference: ${referenceId}`,
      `Type: ${typeLabel}`,
      ...(reaction ? [`Reaction: ${reaction === "up" ? "Thumbs Up" : "Thumbs Down"}`] : []),
      ...(priority ? [`Priority: ${priority}`] : []),
      `Related Page: ${relatedPage || "General"}`,
      ``,
      `--- Feedback ---`,
      text,
      ``,
      `Submitted: ${timestamp}`,
    ];

    const emailBody = details.join("\n");
    const smsBody = `Elliott Feedback (${typeLabel}): ${text.substring(0, 120)}${text.length > 120 ? "..." : ""}\nPage: ${relatedPage || "General"}\nRef: ${referenceId}`;

    console.log("=== DASHBOARD FEEDBACK ===");
    console.log(emailBody);
    console.log("==========================");

    // Send notifications in parallel
    const results = await Promise.allSettled([
      sendEmail(referenceId, emailBody, typeLabel, priorityLabel),
      sendSms(smsBody),
      sendWebhook(body, referenceId),
    ]);

    const outcome = {
      email: results[0].status === "fulfilled" ? (results[0].value as { success: boolean }).success : false,
      sms: results[1].status === "fulfilled" ? (results[1].value as { success: boolean }).success : false,
      webhook: results[2].status === "fulfilled" ? (results[2].value as { success: boolean }).success : false,
    };

    console.log("Dashboard feedback integrations:", outcome);

    return NextResponse.json({
      success: true,
      referenceId,
      notifications: outcome,
    });
  } catch (error) {
    console.error("Dashboard notify API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// ─── Email via Resend ──────────────────────────────────────────────────────

async function sendEmail(
  referenceId: string,
  body: string,
  typeLabel: string,
  priorityLabel: string,
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — skipping email");
    return { success: false, error: "Resend not configured" };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL || "dispatch@axletowing.com";
  const toEmail = "julian@aiacrobatics.com";

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `Dashboard Feedback: ${typeLabel}${priorityLabel} [${referenceId}]`,
    text: body,
  });

  if (error) {
    console.error("Resend email error:", error.message);
    return { success: false, error: error.message };
  }

  console.log(`Feedback email sent for ${referenceId}`);
  return { success: true };
}

// ─── SMS via Twilio ────────────────────────────────────────────────────────

async function sendSms(
  message: string,
): Promise<{ success: boolean; error?: string }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhone) {
    console.warn("Twilio not configured — skipping SMS");
    return { success: false, error: "Twilio not configured" };
  }

  const client = twilio(accountSid, authToken);
  const toPhone = "+16195090699";

  try {
    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: toPhone,
    });
    console.log("Feedback SMS sent to Julian");
    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Twilio SMS error:", errorMsg);
    return { success: false, error: errorMsg };
  }
}

// ─── Webhook ───────────────────────────────────────────────────────────────

async function sendWebhook(
  payload: Record<string, unknown>,
  referenceId: string,
): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.FEEDBACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return { success: false, error: "No webhook URL configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "feedback.created",
        referenceId,
        timestamp: new Date().toISOString(),
        data: payload,
      }),
    });

    if (!response.ok) {
      return { success: false, error: `Webhook responded with ${response.status}` };
    }

    console.log(`Feedback webhook sent for ${referenceId}`);
    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Webhook error:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
