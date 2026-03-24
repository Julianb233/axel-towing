import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/voice/status
 * Twilio status callback — receives lifecycle events for all calls.
 * Used for logging and analytics.
 *
 * Twilio sends: initiated | ringing | answered | completed
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();

  const callSid = body.get("CallSid") ?? "";
  const callStatus = body.get("CallStatus") ?? "";
  const from = body.get("From") ?? "";
  const to = body.get("To") ?? "";
  const direction = body.get("Direction") ?? "";
  const duration = body.get("CallDuration") ?? "0";
  const timestamp = body.get("Timestamp") ?? new Date().toISOString();

  const event = {
    callSid,
    callStatus,
    from,
    to,
    direction,
    duration: Number(duration),
    timestamp,
  };

  console.log("[voice/status]", JSON.stringify(event));

  // TODO: Persist call records to Supabase
  // await supabase.from("calls").upsert({ call_sid: callSid, status: callStatus, ... })

  // Twilio expects a 204 or 200 — no body required
  return new NextResponse(null, { status: 204 });
}
