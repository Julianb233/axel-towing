import { NextResponse } from "next/server";
import { formatRequestForEmail } from "@/lib/towbook";
import { sendDispatchEmail } from "@/lib/dispatch-email";
import { sendDispatchSms } from "@/lib/dispatch-sms";
import { storeDispatchRequest } from "@/lib/supabase";
import type { ChatbotRequest } from "@/lib/chatbot-knowledge";

/**
 * POST /api/dispatch
 * Receives tow/service requests from the chatbot and processes them.
 * - Sends email notification via Resend to dispatch
 * - Sends SMS notification via Twilio to dispatch
 * - Stores request in Supabase for tracking
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

    // Format for notification
    const emailBody = formatRequestForEmail({ ...request, referenceId });

    // Log the request (server-side)
    console.log("=== NEW DISPATCH REQUEST ===");
    console.log(emailBody);
    console.log("============================");

    const typeLabel = {
      "tow-request": "Tow Request",
      stickering: "Stickering Request",
      "patrol-request": "Patrol Request",
      report: "Report Request",
      question: "General Inquiry",
    }[request.type] || "Request";

    const urgencyTag = request.urgent ? "[URGENT] " : "";

    // Run all integrations concurrently — failures are logged but don't block the response
    const [emailResult, smsResult, dbResult] = await Promise.allSettled([
      // 1. Send email notification via Resend
      sendDispatchEmail(
        referenceId,
        `${urgencyTag}New ${typeLabel} — ${request.propertyName} [${referenceId}]`,
        emailBody,
      ),

      // 2. Send SMS notification to dispatch
      sendDispatchSms(
        referenceId,
        `${urgencyTag}${typeLabel}: ${request.propertyName}\n` +
          `Contact: ${request.contactName} ${request.contactPhone}\n` +
          `Ref: ${referenceId}`,
      ),

      // 3. Store dispatch request in database
      storeDispatchRequest({
        reference_id: referenceId,
        request_type: request.type,
        contact_name: request.contactName,
        contact_phone: request.contactPhone,
        contact_email: request.contactEmail,
        property_name: request.propertyName,
        property_address: request.propertyAddress,
        urgent: request.urgent,
        request_data: request as unknown as Record<string, unknown>,
        status: "pending",
      }),
    ]);

    // Log integration results
    const results = {
      email: emailResult.status === "fulfilled" ? emailResult.value.success : false,
      sms: smsResult.status === "fulfilled" ? smsResult.value.success : false,
      db: dbResult.status === "fulfilled" ? dbResult.value.success : false,
    };
    console.log("Dispatch integrations:", results);

    // TODO Phase 3: Create TowBook dispatch entry via API (pending API credentials from client)

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
