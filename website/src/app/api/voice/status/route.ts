import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/status
 * Twilio status callback — receives lifecycle events for all calls.
 * Used for logging, analytics, and missed-call SMS auto-reply.
 *
 * Twilio sends: initiated | ringing | answered | completed | busy | no-answer | failed
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();

  const callSid = String(body.get('CallSid') ?? '');
  const callStatus = String(body.get('CallStatus') ?? '');
  const from = String(body.get('From') ?? '');
  const to = String(body.get('To') ?? '');
  const direction = String(body.get('Direction') ?? '');
  const duration = String(body.get('CallDuration') ?? '0');
  const timestamp = String(body.get('Timestamp') ?? new Date().toISOString());
  const answeredBy = String(body.get('AnsweredBy') ?? '');

  const event = {
    callSid,
    callStatus,
    from,
    to,
    direction,
    duration: Number(duration),
    timestamp,
    answeredBy,
  };

  console.log('[voice/status]', JSON.stringify(event));

  // TODO: Persist call records to Supabase
  // await supabase.from("calls").upsert({ call_sid: callSid, status: callStatus, ... })

  // For inbound calls that were missed (no-answer or busy on the dispatch line),
  // send an automatic text-back so the caller gets immediate info.
  if (
    direction === 'inbound' &&
    (callStatus === 'no-answer' || callStatus === 'busy' || callStatus === 'failed') &&
    from &&
    from.startsWith('+')
  ) {
    await sendMissedCallSms(from);
  }

  // Twilio expects a 204 or 200 — no body required
  return new NextResponse(null, { status: 204 });
}

async function sendMissedCallSms(to: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.warn('[voice/status] Twilio credentials not set — skipping missed-call SMS');
    return;
  }

  try {
    const twilio = (await import('twilio')).default;
    const client = twilio(accountSid, authToken);

    await client.messages.create({
      to,
      from: fromNumber,
      body: `You called Axle Towing & Impound. Sorry we missed you! Dispatch is available 24/7 — call 480-288-5526. Vehicle lookup: https://axletowing.com/locate-vehicle. Storage: 8155 W Buckeye Rd, Phoenix (Mon-Fri 9am-5pm).`,
    });

    console.log(`[voice/status] Missed-call SMS sent to ${to}`);
  } catch (err) {
    console.error('[voice/status] Failed to send missed-call SMS:', err);
  }
}
