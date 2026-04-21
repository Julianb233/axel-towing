import { NextResponse } from "next/server";
import { workflowEngine } from "@/lib/workflows/engine";
import type { GHLWebhookPayload } from "@/lib/workflows/types";

/**
 * GHL Inbound Webhook Receiver
 *
 * POST /api/webhooks/ghl
 *
 * Receives contact events from GoHighLevel and routes them to the
 * workflow engine. The engine checks all enabled workflows for matching
 * triggers and enrolls the contact accordingly.
 *
 * GHL Webhook Setup:
 *   1. In GHL: Settings > Integrations > Webhooks
 *   2. Add webhook URL: https://axletowing.com/api/webhooks/ghl
 *   3. Select events: Contact Create, Contact Tag Update, Pipeline Stage Change
 *
 * Security: Validates WEBHOOK_SECRET header if configured.
 */

export async function POST(req: Request) {
  try {
    // Optional secret validation
    const secret = process.env.GHL_WEBHOOK_SECRET;
    if (secret) {
      const headerSecret = req.headers.get("x-webhook-secret") || req.headers.get("authorization");
      if (headerSecret !== secret && headerSecret !== `Bearer ${secret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = await req.json();

    // Normalize GHL webhook payload
    const payload = normalizePayload(body);
    if (!payload) {
      return NextResponse.json(
        { error: "Unrecognized payload format" },
        { status: 400 },
      );
    }

    console.log(
      `[GHL Webhook] ${payload.type} — contact: ${payload.contact?.email || "unknown"}, tag: ${payload.tag || "none"}`,
    );

    // Process through workflow engine
    const result = await workflowEngine.handleWebhook(payload);

    return NextResponse.json({
      success: true,
      enrolled: result.enrolled,
      skipped: result.skipped,
    });
  } catch (error) {
    console.error("[GHL Webhook] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

/**
 * Also support manual enrollment via GET for testing.
 *
 * GET /api/webhooks/ghl?action=test&email=test@example.com&workflow=cold-outreach
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  if (action === "test") {
    const email = searchParams.get("email");
    const workflowId = searchParams.get("workflow");

    if (!email || !workflowId) {
      return NextResponse.json(
        { error: "Required: email, workflow" },
        { status: 400 },
      );
    }

    const enrollment = await workflowEngine.enrollContact(workflowId, {
      id: `test-${Date.now()}`,
      email,
      firstName: searchParams.get("name") || "Test",
      lastName: "Contact",
      companyName: searchParams.get("company") || "Test Company",
      city: searchParams.get("city") || "Phoenix",
      tags: [],
    });

    return NextResponse.json({
      success: !!enrollment,
      enrollment: enrollment
        ? { id: enrollment.id, workflowId: enrollment.workflowId }
        : null,
    });
  }

  // Default: return webhook status
  const stats = await workflowEngine.getStats();
  return NextResponse.json({ status: "active", stats });
}

// ─── Payload Normalization ──────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizePayload(body: any): GHLWebhookPayload | null {
  // GHL sends different formats depending on webhook version
  // Handle both v1 and v2 formats

  // Format 1: Standard GHL webhook
  if (body.type && body.contact) {
    return {
      type: body.type,
      locationId: body.locationId || body.location_id || "",
      contact: {
        id: body.contact.id,
        email: body.contact.email,
        phone: body.contact.phone,
        firstName: body.contact.firstName || body.contact.first_name || "",
        lastName: body.contact.lastName || body.contact.last_name || "",
        companyName: body.contact.companyName || body.contact.company_name,
        city: body.contact.city,
        tags: body.contact.tags || [],
        customField: body.contact.customField || body.contact.custom_field,
      },
      tag: body.tag || body.tags?.[0],
      pipeline: body.pipeline
        ? {
            id: body.pipeline.id,
            stageId: body.pipeline.stageId || body.pipeline.stage_id,
            stageName: body.pipeline.stageName || body.pipeline.stage_name || "",
          }
        : undefined,
    };
  }

  // Format 2: Flat payload (some GHL webhook configs)
  if (body.contact_id || body.email) {
    return {
      type: body.event || body.type || "ContactCreate",
      locationId: body.location_id || "",
      contact: {
        id: body.contact_id || body.id || "",
        email: body.email || "",
        phone: body.phone,
        firstName: body.first_name || body.firstName || "",
        lastName: body.last_name || body.lastName || "",
        companyName: body.company_name || body.companyName,
        city: body.city,
        tags: body.tags || [],
        customField: body.customField || body.custom_field,
      },
      tag: body.tag,
    };
  }

  return null;
}
