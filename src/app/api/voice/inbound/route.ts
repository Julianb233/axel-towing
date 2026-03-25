import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/inbound
 * Twilio webhook handler for inbound calls to Axle Towing.
 * Returns TwiML with an IVR menu:
 *   1 - Towing / emergency request
 *   2 - Roadside assistance (jump start, lockout, flat tire)
 *   3 - Billing / impound questions
 *   4 - HOA / property management partnerships
 *   0 - Speak with a dispatcher (immediate transfer)
 */
export async function POST(req: NextRequest) {
  // Twilio sends form-encoded POST bodies
  const body = await req.formData();
  const from = body.get('From') ?? 'Unknown';
  const callSid = body.get('CallSid') ?? '';
  const digits = body.get('Digits') ?? null;

  console.log(`[voice/inbound] CallSid=${callSid} From=${from} Digits=${digits}`);

  let twiml: string;

  if (!digits) {
    // First time — play the greeting and gather input
    twiml = buildGreeting();
  } else {
    twiml = handleMenuSelection(String(digits), String(from));
  }

  return new NextResponse(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}

function buildGreeting(): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for calling Axle Towing and Impound, Phoenix's trusted towing and parking management company.
    We dispatch 24 hours a day, 7 days a week, 365 days a year.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/inbound" method="POST" timeout="10">
    <Say voice="Polly.Joanna" language="en-US">
      For towing or a roadside emergency, press 1.
      For roadside assistance including jump starts, lockouts, and flat tires, press 2.
      For billing or impound questions, press 3.
      For HOA or property management partnerships, press 4.
      To speak with a dispatcher right away, press 0, or stay on the line.
    </Say>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    We did not receive your selection. Transferring you to our dispatch team now.
  </Say>
  <Dial>${process.env.DISPATCH_PHONE ?? '480-288-5526'}</Dial>
</Response>`;
}

function handleMenuSelection(digit: string, from: string): string {
  const dispatchPhone = process.env.DISPATCH_PHONE ?? '480-288-5526';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  switch (digit) {
    case '1':
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected towing services. Our dispatchers are available 24 hours a day, 7 days a week.
    Please hold while we connect you now.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>
</Response>`;

    case '2':
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected roadside assistance. Our team handles jump starts, lockouts, flat tires, and fuel delivery
    across the Phoenix metro area. Please hold while we connect you with a technician now.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>
</Response>`;

    case '3':
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected billing and impound questions. Our vehicle retrieval hours are Monday through Friday, 9 AM to 5 PM.
    Our storage facility is located at 8155 West Buckeye Road in Phoenix.
    Please hold while we connect you with our billing team.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>
</Response>`;

    case '4':
      // HOA / Property Manager partnership inquiry — gather contact info and route to Elliott
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your interest in partnering with Axle Towing. We work with HOA boards,
    property management companies, and commercial property owners across the Phoenix metro area
    to provide free parking enforcement and vehicle removal services.
    Please hold while we connect you with our partnerships team.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}" action="${baseUrl}/api/voice/inbound/partner-callback" method="POST">
    ${dispatchPhone}
  </Dial>
</Response>`;

    case '0':
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Connecting you with our dispatch team now. Please hold.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${dispatchPhone}</Dial>
</Response>`;

    default:
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    We did not recognise your selection. Transferring you to our dispatch team now.
  </Say>
  <Dial>${dispatchPhone}</Dial>
</Response>`;
  }
}
