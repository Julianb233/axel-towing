import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

/**
 * POST /api/voice/outbound
 * Initiates an outbound call using Twilio for sales outreach.
 * Primarily used for HOA/property manager follow-ups.
 *
 * Request body:
 *   to        - E.164 phone number to call, e.g. "+14805551234"
 *   contactName - Recipient name (used in TwiML greeting)
 *   context   - "hoa" | "property-manager" | "general" (default: "general")
 *   agentUrl  - Optional: custom TwiML URL to use for this call
 *
 * Required env vars:
 *   TWILIO_ACCOUNT_SID
 *   TWILIO_AUTH_TOKEN
 *   TWILIO_PHONE_NUMBER
 *   NEXT_PUBLIC_BASE_URL
 */
export async function POST(req: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://axletowing.com";

  if (!accountSid || !authToken || !fromNumber) {
    return NextResponse.json(
      { error: "Twilio credentials not configured" },
      { status: 500 },
    );
  }

  let body: {
    to: string;
    contactName?: string;
    context?: "hoa" | "property-manager" | "general";
    agentUrl?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { to, contactName = "there", context = "general", agentUrl } = body;

  if (!to || !to.startsWith("+")) {
    return NextResponse.json(
      { error: "A valid E.164 phone number is required (e.g. +14805551234)" },
      { status: 400 },
    );
  }

  // Build TwiML URL — use agentUrl if provided, otherwise use the outbound script endpoint
  const twimlUrl =
    agentUrl ??
    `${baseUrl}/api/voice/outbound/script?context=${context}&name=${encodeURIComponent(contactName)}`;

  const client = twilio(accountSid, authToken);

  try {
    const call = await client.calls.create({
      to,
      from: fromNumber,
      url: twimlUrl,
      statusCallback: `${baseUrl}/api/voice/status`,
      statusCallbackMethod: "POST",
      statusCallbackEvent: ["initiated", "ringing", "answered", "completed"],
      record: process.env.TWILIO_RECORD_CALLS === "true",
    });

    console.log(`[voice/outbound] Call initiated SID=${call.sid} to=${to} context=${context}`);

    return NextResponse.json({
      success: true,
      callSid: call.sid,
      to,
      status: call.status,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown Twilio error";
    console.error("[voice/outbound] Error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
