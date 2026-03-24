import { NextRequest, NextResponse } from 'next/server';
import {
  isBusinessHours,
  buildAfterHoursTwiml,
  twimlResponse,
  sayNode,
  gatherNode,
} from '@/lib/voice-agent';

/**
 * POST /api/voice/ai-agent
 * ─────────────────────────
 * Primary AI voice agent webhook for Twilio.
 *
 * Behaviour:
 *  - Business hours (Mon-Fri 9am-6pm MST): IVR menu for property managers / HOA boards.
 *  - After hours: collect callback info and send SMS confirmation.
 *
 * Required env vars: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, NEXT_PUBLIC_BASE_URL
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const from = String(body.get('From') ?? 'Unknown');
  const callSid = String(body.get('CallSid') ?? '');

  console.log(`[voice/ai-agent] CallSid=${callSid} From=${from.slice(0, 6)}***`);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  // Route based on business hours
  if (!isBusinessHours()) {
    return xmlResponse(buildAfterHoursTwiml(baseUrl));
  }

  // Business-hours greeting — matches the task's TwiML spec
  const twiml = twimlResponse(`
  ${sayNode(
    'Thank you for calling Axle Towing. I\'m here to help with your parking enforcement needs. ' +
      'Are you a property manager or HOA board member looking for towing services?',
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/ai-agent/menu`,
    1,
    sayNode(
      'Press 1 for property management services. ' +
        'Press 2 to speak with our team. ' +
        'Press 3 for our after-hours emergency line.',
    ),
  )}
  ${sayNode(
    'We did not receive your selection. Please hold while we connect you with our dispatch team.',
  )}
  <Dial>${process.env.DISPATCH_PHONE ?? '480-288-5526'}</Dial>`);

  return xmlResponse(twiml);
}

function xmlResponse(twiml: string) {
  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
