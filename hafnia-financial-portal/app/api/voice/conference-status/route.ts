import { NextRequest, NextResponse } from 'next/server';

/**
 * Twilio conference status callback webhook.
 * Receives events: participant join, leave, conference end.
 */
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const params: Record<string, string> = {};
  formData.forEach((value, key) => {
    params[key] = value.toString();
  });

  console.log(
    `[Conference] ${params.StatusCallbackEvent}: ${params.ConferenceSid} — Participant: ${params.CallSid || 'N/A'}`
  );

  return NextResponse.json({ received: true });
}
