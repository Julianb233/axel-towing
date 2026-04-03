import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/inbound/partner-callback
 * Called when a HOA/property manager partnership call ends via Dial action callback.
 * If the caller was not reached, sends them a follow-up SMS with partnership info.
 *
 * Twilio Dial action sends: DialCallStatus, DialCallSid, etc.
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const dialCallStatus = String(body.get('DialCallStatus') ?? '');
  const from = String(body.get('From') ?? '');

  console.log(`[voice/inbound/partner-callback] DialCallStatus=${dialCallStatus} From=${from}`);

  // If dispatcher did not answer, send an SMS with partnership info
  if (dialCallStatus === 'no-answer' || dialCallStatus === 'busy' || dialCallStatus === 'failed') {
    // Try to send SMS if Twilio credentials are set
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (accountSid && authToken && fromNumber && from && from.startsWith('+')) {
      try {
        const twilio = (await import('twilio')).default;
        const client = twilio(accountSid, authToken);

        await client.messages.create({
          to: from,
          from: fromNumber,
          body: `Thanks for calling Axle Towing about a property partnership! We partner with HOAs and property managers at no cost to you. Visit axletowing.com/partners or call 480-288-5526 during business hours (Mon-Fri 9am-5pm). We will follow up soon!`,
        });

        console.log(`[voice/inbound/partner-callback] Follow-up SMS sent to ${from}`);
      } catch (err) {
        console.error('[voice/inbound/partner-callback] SMS send failed:', err);
      }
    }

    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    We are sorry our partnerships team is unavailable right now. We have sent you a text message
    with information about our property management programs. You can also visit our website at
    axle towing dot com slash partners. Thank you for calling Axle Towing. Have a great day.
  </Say>
  <Hangup/>
</Response>`,
      { status: 200, headers: { 'Content-Type': 'text/xml' } }
    );
  }

  // Call was answered — nothing extra needed
  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Hangup/>
</Response>`,
    { status: 200, headers: { 'Content-Type': 'text/xml' } }
  );
}
