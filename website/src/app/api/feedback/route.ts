import { NextResponse } from "next/server";
import { sendDispatchEmail } from "@/lib/dispatch-email";
import { sendDispatchSms } from "@/lib/dispatch-sms";
import { storeDispatchRequest } from "@/lib/supabase";

/**
 * POST /api/feedback
 * Receives private feedback from the review management flow.
 * Negative experiences are captured here instead of going to public review sites.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name || "";
    const email = body.email || "";
    const phone = body.phone || "";
    const propertyName = body.propertyName || "";
    const dateOfService = body.dateOfService || "";
    const whatWentWrong = body.whatWentWrong || "";
    const whatWeCanDoBetter = body.whatWeCanDoBetter || "";
    const source = body.source || "feedback-form";

    if (!name && !email && !phone) {
      return NextResponse.json(
        { error: "At least one contact method is required" },
        { status: 400 }
      );
    }

    if (!whatWentWrong) {
      return NextResponse.json(
        { error: "Please describe the issue" },
        { status: 400 }
      );
    }

    const referenceId = `FB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const details: string[] = [
      `PRIVATE FEEDBACK — NEEDS ATTENTION`,
      ``,
      `Reference: ${referenceId}`,
      `Source: ${source}`,
      ``,
      `--- Contact ---`,
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      ``,
      `--- Details ---`,
      `Property: ${propertyName || "Not provided"}`,
      `Date of Service: ${dateOfService || "Not provided"}`,
      ``,
      `--- What Went Wrong ---`,
      whatWentWrong,
      ``,
      `--- Suggested Improvement ---`,
      whatWeCanDoBetter || "No suggestion provided",
      ``,
      `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })}`,
    ];

    const emailBody = details.join("\n");

    console.log("=== PRIVATE FEEDBACK ===");
    console.log(emailBody);
    console.log("========================");

    // Send notifications in parallel
    const [emailResult, smsResult, dbResult] = await Promise.allSettled([
      sendDispatchEmail(
        referenceId,
        `PRIVATE FEEDBACK — ${name} — ${propertyName || "No Property"} [${referenceId}]`,
        emailBody
      ),
      sendDispatchSms(
        referenceId,
        `FEEDBACK (needs attention): ${name}\n${phone || email || "No contact"}\nIssue: ${whatWentWrong.substring(0, 80)}...\nRef: ${referenceId}`
      ),
      storeDispatchRequest({
        reference_id: referenceId,
        request_type: "feedback",
        contact_name: name,
        contact_phone: phone,
        contact_email: email,
        property_name: propertyName,
        property_address: "",
        urgent: true,
        request_data: body as Record<string, unknown>,
        status: "pending",
      }),
    ]);

    const results = {
      email:
        emailResult.status === "fulfilled"
          ? (emailResult.value as { success: boolean }).success
          : false,
      sms:
        smsResult.status === "fulfilled"
          ? (smsResult.value as { success: boolean }).success
          : false,
      db:
        dbResult.status === "fulfilled"
          ? (dbResult.value as { success: boolean }).success
          : false,
    };
    console.log("Feedback integrations:", results);

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Feedback received — our team will follow up within 24 hours",
    });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
