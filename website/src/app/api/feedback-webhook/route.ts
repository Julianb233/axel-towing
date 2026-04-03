import { NextResponse } from "next/server";

/**
 * POST /api/feedback-webhook
 * Generic webhook endpoint that forwards feedback to a configurable URL.
 * Can be used to connect to Slack, Telegram, or other systems.
 *
 * Uses FEEDBACK_WEBHOOK_URL env var for the target.
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

    const webhookUrl = process.env.FEEDBACK_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({
        success: false,
        error: "FEEDBACK_WEBHOOK_URL not configured",
        message: "Set the FEEDBACK_WEBHOOK_URL environment variable to enable webhook forwarding",
      }, { status: 503 });
    }

    const referenceId = `WH-${Date.now().toString(36).toUpperCase()}`;

    const payload = {
      event: "feedback.submitted",
      referenceId,
      timestamp: new Date().toISOString(),
      source: "axle-towing-dashboard",
      data: {
        type,
        text,
        priority: priority || "medium",
        relatedPage: relatedPage || "General",
        reaction: reaction || null,
        createdAt: createdAt || new Date().toISOString(),
      },
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "AxleTowing-Feedback/1.0",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error(`Webhook failed (${response.status}):`, errorText);
      return NextResponse.json({
        success: false,
        error: `Webhook responded with ${response.status}`,
        referenceId,
      });
    }

    console.log(`Feedback webhook sent: ${referenceId}`);
    return NextResponse.json({
      success: true,
      referenceId,
      message: "Webhook delivered",
    });
  } catch (error) {
    console.error("Feedback webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
