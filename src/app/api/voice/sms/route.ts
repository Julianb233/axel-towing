import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/sms
 * Sends an SMS text-back to a caller after a missed or after-hours call.
 * Also handles inbound SMS replies from callers.
 *
 * Used by the AI voice agent to:
 *   - Send vehicle lookup links to callers asking about impounded cars
 *   - Send gate/storage directions to callers needing retrieval info
 *   - Confirm tow requests with ETA information
 *
 * Twilio sends inbound SMS to this endpoint.
 * Can also be called directly from internal tools.
 *
 * Required env vars:
 *   TWILIO_ACCOUNT_SID
 *   TWILIO_AUTH_TOKEN
 *   TWILIO_PHONE_NUMBER
 *   NEXT_PUBLIC_BASE_URL
 */

const STORAGE_ADDRESS = '8155 W Buckeye Rd, Phoenix, AZ 85043';
const RETRIEVE_HOURS = 'Mon-Fri 9am-5pm';
const VEHICLE_LOOKUP_URL = 'https://axletowing.com/locate-vehicle';

/**
 * Inbound SMS handler — Twilio webhook
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const from = String(body.get('From') ?? '');
  const messageBody = String(body.get('Body') ?? '')
    .toLowerCase()
    .trim();

  console.log(`[voice/sms] Inbound SMS from=${from} body="${messageBody}"`);

  const responseMessage = buildSmsReply(messageBody);

  // Return TwiML MessagingResponse
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${responseMessage}</Message>
</Response>`;

  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}

/**
 * Programmatic SMS send — called from internal tools or voice agent
 * Body: { to: string, type: "vehicle-lookup" | "directions" | "confirm-tow" | "missed-call" | "custom", message?: string }
 */
export async function PUT(req: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    return NextResponse.json({ error: 'Twilio credentials not configured' }, { status: 500 });
  }

  let body: {
    to: string;
    type: 'vehicle-lookup' | 'directions' | 'confirm-tow' | 'missed-call' | 'custom';
    message?: string;
    eta?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { to, type, message, eta } = body;

  if (!to || !to.startsWith('+')) {
    return NextResponse.json(
      { error: 'A valid E.164 phone number is required (e.g. +14805551234)' },
      { status: 400 }
    );
  }

  const smsBody = buildSmsTemplate(type, message, eta);

  // Lazy-load twilio to avoid import issues when env vars are not set
  const twilio = (await import('twilio')).default;
  const client = twilio(accountSid, authToken);

  try {
    const msg = await client.messages.create({
      to,
      from: fromNumber,
      body: smsBody,
    });

    console.log(`[voice/sms] Sent SMS SID=${msg.sid} to=${to} type=${type}`);

    return NextResponse.json({
      success: true,
      messageSid: msg.sid,
      to,
      type,
    });
  } catch (err: unknown) {
    const errMessage = err instanceof Error ? err.message : 'Unknown Twilio error';
    console.error('[voice/sms] Send error:', errMessage);
    return NextResponse.json({ error: errMessage }, { status: 502 });
  }
}

function buildSmsReply(inboundMessage: string): string {
  // Simple keyword routing for inbound SMS replies
  if (
    inboundMessage.includes('location') ||
    inboundMessage.includes('where') ||
    inboundMessage.includes('address')
  ) {
    return `Axle Towing storage: ${STORAGE_ADDRESS}. Retrieval hours: ${RETRIEVE_HOURS}. Questions? Call 480-288-5526.`;
  }

  if (
    inboundMessage.includes('hours') ||
    inboundMessage.includes('open') ||
    inboundMessage.includes('close')
  ) {
    return `Dispatch: 24/7/365. Vehicle retrieval: ${RETRIEVE_HOURS} at ${STORAGE_ADDRESS}. Call us anytime at 480-288-5526.`;
  }

  if (
    inboundMessage.includes('car') ||
    inboundMessage.includes('vehicle') ||
    inboundMessage.includes('tow') ||
    inboundMessage.includes('impound') ||
    inboundMessage.includes('locate')
  ) {
    return `Look up your vehicle here: ${VEHICLE_LOOKUP_URL}\n\nStorage lot: ${STORAGE_ADDRESS}\nRetrieval hours: ${RETRIEVE_HOURS}\nQuestions: 480-288-5526`;
  }

  if (
    inboundMessage.includes('price') ||
    inboundMessage.includes('cost') ||
    inboundMessage.includes('fee') ||
    inboundMessage.includes('pay')
  ) {
    return `For billing and fee questions, please call our office at 480-288-5526 (${RETRIEVE_HOURS}) or visit axletowing.com/locate-vehicle to look up your vehicle details.`;
  }

  if (
    inboundMessage.includes('partner') ||
    inboundMessage.includes('hoa') ||
    inboundMessage.includes('property')
  ) {
    return `Thanks for your interest in partnering with Axle Towing! We offer free parking enforcement for HOAs and property managers. Visit axletowing.com/contact or call 480-288-5526 to get started.`;
  }

  // Default reply
  return `Thanks for texting Axle Towing & Impound. For immediate assistance, call 480-288-5526 (dispatch available 24/7). Vehicle retrieval hours: ${RETRIEVE_HOURS}. Look up your vehicle: ${VEHICLE_LOOKUP_URL}`;
}

function buildSmsTemplate(type: string, customMessage?: string, eta?: string): string {
  switch (type) {
    case 'vehicle-lookup':
      return `Axle Towing: Look up your impounded vehicle here:\n${VEHICLE_LOOKUP_URL}\n\nStorage: ${STORAGE_ADDRESS}\nHours: ${RETRIEVE_HOURS}\nPhone: 480-288-5526`;

    case 'directions':
      return `Axle Towing storage lot directions:\n${STORAGE_ADDRESS}\nGoogle Maps: https://maps.google.com/?q=8155+W+Buckeye+Rd+Phoenix+AZ\n\nRetrieval hours: ${RETRIEVE_HOURS}\nBring valid ID and vehicle title. Call 480-288-5526 with questions.`;

    case 'confirm-tow':
      return `Axle Towing: Your tow request has been received.${eta ? ` Estimated arrival: ${eta}.` : ''} Your dispatcher is on the way. For updates call 480-288-5526. We are available 24/7.`;

    case 'missed-call':
      return `You called Axle Towing & Impound. We are sorry we missed you! For immediate service call 480-288-5526. Dispatch available 24/7/365. Vehicle retrieval: ${RETRIEVE_HOURS}.\n\nVehicle lookup: ${VEHICLE_LOOKUP_URL}`;

    case 'custom':
      return (
        customMessage ??
        'Thank you for contacting Axle Towing & Impound. Call 480-288-5526 for assistance.'
      );

    default:
      return `Axle Towing & Impound - Phoenix, AZ\nDispatch: 480-288-5526 (24/7)\nVehicle lookup: ${VEHICLE_LOOKUP_URL}\nStorage: ${STORAGE_ADDRESS} (${RETRIEVE_HOURS})`;
  }
}
