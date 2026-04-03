import { NextRequest, NextResponse } from 'next/server';
import { twimlResponse, sayNode, gatherNode, buildCallLead, logLead } from '@/lib/voice-agent';

/**
 * POST /api/voice/ai-agent/menu
 * ──────────────────────────────
 * Handles digit input from the AI agent IVR menu.
 *
 * 1 → Property management services (gather contact info)
 * 2 → Transfer to dispatch team
 * 3 → After-hours emergency line
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const digits = String(body.get('Digits') ?? '');
  const callSid = String(body.get('CallSid') ?? '');
  const from = String(body.get('From') ?? 'Unknown');

  console.log(`[voice/ai-agent/menu] CallSid=${callSid} Digits=${digits}`);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';
  const dispatchPhone = process.env.DISPATCH_PHONE ?? '480-288-5526';

  switch (digits) {
    case '1': {
      // Property management — gather name and address
      const lead = buildCallLead({ callSid, from, source: 'inbound' });
      logLead(lead);

      const twiml = twimlResponse(`
  ${sayNode(
    'Thank you for your interest in our property management towing services. ' +
      'We provide free parking enforcement and vehicle removal for HOA communities, ' +
      'apartment complexes, and commercial properties across the Phoenix metro area.',
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/ai-agent/collect-info`,
    1,
    sayNode(
      'To speak with a parking enforcement specialist right now, press 1. ' +
        'To schedule a free consultation at your property, press 2.',
    ),
  )}
  ${sayNode('Please hold while we connect you with our partnerships team.')}
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>`);

      return xmlResponse(twiml);
    }

    case '2': {
      // Connect to dispatch
      const twiml = twimlResponse(`
  ${sayNode('Connecting you with our team now. Please hold.')}
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>`);
      return xmlResponse(twiml);
    }

    case '3': {
      // After-hours emergency
      const twiml = twimlResponse(`
  ${sayNode(
    'Our after-hours emergency dispatch is available 24 hours a day, 7 days a week. ' +
      'Connecting you with an emergency dispatcher now. Please hold.',
  )}
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>`);
      return xmlResponse(twiml);
    }

    default: {
      // No valid input — transfer to dispatch
      const twiml = twimlResponse(`
  ${sayNode(
    'We did not recognise your selection. Connecting you with our dispatch team now.',
  )}
  <Dial>${dispatchPhone}</Dial>`);
      return xmlResponse(twiml);
    }
  }
}

function xmlResponse(twiml: string) {
  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
