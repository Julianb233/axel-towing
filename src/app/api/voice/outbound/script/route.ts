import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/voice/outbound/script
 * Returns TwiML script for outbound sales calls.
 * Context-aware — adjusts message for HOA vs property manager vs general.
 *
 * Query params:
 *   context - "hoa" | "property-manager" | "general"
 *   name    - Recipient name for personalised greeting
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const context = searchParams.get("context") ?? "general";
  const name = searchParams.get("name") ?? "there";

  const twiml = buildOutboundScript(context, name);

  return new NextResponse(twiml, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}

// Twilio can POST to TwiML bins too — support both
export { GET as POST };

function buildOutboundScript(context: string, name: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://axletowing.com";

  if (context === "hoa") {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is a call from Axle Towing and Impound.
    We partner with homeowners associations across the Phoenix metro area to manage
    unauthorized parking and vehicle removal. I'd love to discuss how we can help
    keep your community's parking compliant. If you'd like to connect, please press 1
    and we'll have a specialist call you back at a time that works for you.
    To opt out of future calls, press 9.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/outbound/callback" method="POST" timeout="10">
    <Pause length="2"/>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your time. Have a great day. Goodbye.
  </Say>
</Response>`;
  }

  if (context === "property-manager") {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is Axle Towing and Impound calling from Phoenix.
    We provide towing and parking enforcement services for apartment complexes,
    commercial properties, and multi-family communities throughout the Valley.
    We handle everything from routine impounds to 24-hour patrol services,
    and we integrate with most property management platforms.
    Press 1 if you'd like a free consultation, or press 9 to be removed from our call list.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/outbound/callback" method="POST" timeout="10">
    <Pause length="2"/>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your time. Have a great day. Goodbye.
  </Say>
</Response>`;
  }

  // Default / general
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, this is Axle Towing and Impound calling from Phoenix, Arizona.
    We are reaching out to share information about our towing and roadside assistance services.
    Press 1 to speak with a team member, or press 9 to be removed from our call list.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/outbound/callback" method="POST" timeout="10">
    <Pause length="2"/>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you. Have a great day. Goodbye.
  </Say>
</Response>`;
}
