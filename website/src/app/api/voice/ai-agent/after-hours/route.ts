import { NextRequest, NextResponse } from 'next/server';
import { twimlResponse, sayNode, buildCallLead, logLead } from '@/lib/voice-agent';

/**
 * POST /api/voice/ai-agent/after-hours
 * ──────────────────────────────────────
 * Handles digit input during after-hours IVR.
 *
 * 1 → Emergency tow — transfer to on-call dispatcher
 * 2 → Leave callback request — send SMS confirmation
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const digits = String(body.get('Digits') ?? '');
  const callSid = String(body.get('CallSid') ?? '');
  const from = String(body.get('From') ?? 'Unknown');

  console.log(`[voice/ai-agent/after-hours] CallSid=${callSid} Digits=${digits}`);

  const dispatchPhone = process.env.DISPATCH_PHONE ?? '480-288-5526';

  if (digits === '1') {
    // Emergency tow — connect immediately
    const twiml = twimlResponse(`
  ${sayNode(
    'Connecting you with our on-call emergency dispatcher now. ' +
      'Axle Towing operates 24 hours a day, 7 days a week. Please hold.',
  )}
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>`);
    return xmlResponse(twiml);
  }

  if (digits === '2') {
    // Callback request — log lead and send SMS confirmation
    const lead = buildCallLead({ callSid, from, source: 'after-hours' });
    logLead(lead);

    // Send SMS confirmation via Twilio REST API if credentials are available
    await sendSmsConfirmation(from);

    const twiml = twimlResponse(`
  ${sayNode(
    'Thank you. We have recorded your callback request and will contact you as soon as possible ' +
      'during our next business day, Monday through Friday, 9 AM to 6 PM Mountain Standard Time. ' +
      'You will also receive a text message confirmation shortly. Have a good night. Goodbye.',
  )}
  <Hangup/>`);
    return xmlResponse(twiml);
  }

  // Fallback
  const twiml = twimlResponse(`
  ${sayNode(
    'We did not receive your selection. Please call back during business hours ' +
      'or visit axletowing.com for more information. Thank you. Goodbye.',
  )}
  <Hangup/>`);
  return xmlResponse(twiml);
}

async function sendSmsConfirmation(to: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber || to === 'Unknown') return;

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const params = new URLSearchParams({
      To: to,
      From: fromNumber,
      Body:
        'Axle Towing: We received your after-hours callback request and will contact you during ' +
        'business hours (Mon-Fri 9am-6pm MST). For emergencies call 480-288-5526. ' +
        'Reply STOP to opt out.',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`[voice/ai-agent/after-hours] SMS failed: ${text}`);
    } else {
      console.log(`[voice/ai-agent/after-hours] SMS confirmation sent to ${to.slice(0, 6)}***`);
    }
  } catch (err) {
    console.error('[voice/ai-agent/after-hours] SMS error:', err);
  }
}

function xmlResponse(twiml: string) {
  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
