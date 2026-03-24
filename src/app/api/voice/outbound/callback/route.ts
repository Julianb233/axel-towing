import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/voice/outbound/callback
 * Handles DTMF responses from outbound call scripts.
 *   1 - Caller wants a callback → queue for follow-up
 *   9 - Opt-out → log and hang up
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const digits = body.get("Digits") ?? "";
  const callSid = body.get("CallSid") ?? "";
  const from = body.get("To") ?? ""; // Outbound: "To" is the called party

  console.log(`[voice/outbound/callback] CallSid=${callSid} From=${from} Digits=${digits}`);

  if (digits === "1") {
    // Queue for callback — in production, write to Supabase / CRM
    console.log(`[voice/outbound/callback] Callback requested from ${from}`);

    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Great! We will have a team member call you back shortly.
    Thank you for your interest in Axle Towing. Have a wonderful day. Goodbye.
  </Say>
  <Hangup/>
</Response>`,
      { status: 200, headers: { "Content-Type": "text/xml" } },
    );
  }

  if (digits === "9") {
    // Opt-out — log for suppression list
    console.log(`[voice/outbound/callback] Opt-out request from ${from}`);

    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You have been removed from our call list. We apologise for any inconvenience.
    Thank you. Goodbye.
  </Say>
  <Hangup/>
</Response>`,
      { status: 200, headers: { "Content-Type": "text/xml" } },
    );
  }

  // Unrecognised input — hang up politely
  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your time. Have a great day. Goodbye.
  </Say>
  <Hangup/>
</Response>`,
    { status: 200, headers: { "Content-Type": "text/xml" } },
  );
}
