import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/voice/inbound
 * Twilio webhook handler for inbound calls to Axle Towing.
 * Returns TwiML with an IVR menu:
 *   1 - Towing request
 *   2 - Roadside assistance
 *   3 - Billing / account questions
 *   0 - Speak with a dispatcher (transfers to main line)
 */
export async function POST(req: NextRequest) {
  // Twilio sends form-encoded POST bodies
  const body = await req.formData();
  const from = body.get("From") ?? "Unknown";
  const callSid = body.get("CallSid") ?? "";
  const digits = body.get("Digits") ?? null;

  console.log(`[voice/inbound] CallSid=${callSid} From=${from} Digits=${digits}`);

  let twiml: string;

  if (!digits) {
    // First time — play the greeting and gather input
    twiml = buildGreeting();
  } else {
    twiml = handleMenuSelection(String(digits));
  }

  return new NextResponse(twiml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

function buildGreeting(): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://axletowing.com";

  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for calling Axle Towing and Impound, Phoenix's trusted towing and parking management company.
    Please listen carefully, as our menu has recently changed.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/inbound" method="POST" timeout="10">
    <Say voice="Polly.Joanna" language="en-US">
      For towing services, press 1.
      For roadside assistance, press 2.
      For billing and account questions, press 3.
      To speak with a dispatcher right away, press 0, or stay on the line.
    </Say>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    We did not receive your selection. Transferring you to our dispatch team now.
  </Say>
  <Dial>${process.env.DISPATCH_PHONE ?? "480-288-5526"}</Dial>
</Response>`;
}

function handleMenuSelection(digit: string): string {
  const dispatchPhone = process.env.DISPATCH_PHONE ?? "480-288-5526";

  switch (digit) {
    case "1":
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected towing services. Please hold while we connect you with our dispatch team.
    We are available 24 hours a day, 7 days a week.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ""}">${dispatchPhone}</Dial>
</Response>`;

    case "2":
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected roadside assistance. Our team handles jump starts, lockouts, flat tires, and fuel delivery.
    Please hold while we connect you with a technician.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ""}">${dispatchPhone}</Dial>
</Response>`;

    case "3":
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    You selected billing and account questions. Our office hours are Monday through Friday, 9 AM to 5 PM.
    Please hold while we connect you with our billing department.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ""}">${dispatchPhone}</Dial>
</Response>`;

    case "0":
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="en-US">
    Connecting you with our dispatch team now. Please hold.
  </Say>
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ""}">${dispatchPhone}</Dial>
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
