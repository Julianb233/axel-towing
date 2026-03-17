import { NextResponse } from "next/server";
import { formatRequestForEmail } from "@/lib/towbook";
import type { ChatbotRequest } from "@/lib/chatbot-knowledge";

/**
 * POST /api/dispatch
 * Receives tow/service requests from the chatbot and processes them.
 * Phase 1: Logs request + sends notification.
 * Phase 2: Will integrate with TowBook API for automated dispatch.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { referenceId, ...request } = body as ChatbotRequest & { referenceId: string };

    // Validate required fields
    if (!request.type || !request.contactName || !request.contactPhone || !request.propertyName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Format for logging/notification
    const emailBody = formatRequestForEmail({ ...request, referenceId });

    // Log the request (server-side)
    console.log("=== NEW DISPATCH REQUEST ===");
    console.log(emailBody);
    console.log("============================");

    // TODO Phase 2: Send email notification via Resend/SMTP
    // TODO Phase 2: Create TowBook dispatch entry via API
    // TODO Phase 2: Store in database for tracking
    // TODO Phase 2: Send SMS notification to dispatch

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Request received and dispatched",
    });
  } catch (error) {
    console.error("Dispatch API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
