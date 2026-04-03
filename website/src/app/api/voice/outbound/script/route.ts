import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/voice/outbound/script
 * Returns TwiML script for outbound sales calls.
 * Context-aware — adjusts message for HOA vs property manager vs locksmith vs mechanic vs general.
 *
 * Query params:
 *   context - "hoa" | "property-manager" | "locksmith" | "mechanic" | "general"
 *   name    - Recipient name for personalised greeting
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const context = searchParams.get('context') ?? 'general';
  const name = searchParams.get('name') ?? 'there';

  const twiml = buildOutboundScript(context, name);

  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}

// Twilio can POST to TwiML bins too — support both
export { GET as POST };

function buildOutboundScript(context: string, name: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  if (context === 'hoa') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is a call from Axle Towing and Impound.
    We partner with homeowners associations across the Phoenix metro area to manage
    unauthorized parking and vehicle removal at absolutely no cost to the community.
    We handle signage, patrols, and impounds so your board does not have to.
    If you would like to learn more, please press 1 and we will have a specialist
    call you back at a time that works for you.
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

  if (context === 'property-manager') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is Axle Towing and Impound calling from Phoenix.
    We provide free towing and parking enforcement services for apartment complexes,
    commercial properties, and multi-family communities throughout the Valley.
    We handle everything from routine impounds to 24-hour patrol services at zero cost to property owners.
    Press 1 if you would like a free consultation, or press 9 to be removed from our call list.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/outbound/callback" method="POST" timeout="10">
    <Pause length="2"/>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your time. Have a great day. Goodbye.
  </Say>
</Response>`;
  }

  if (context === 'locksmith') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is Axle Towing and Impound calling from Phoenix.
    We work with locksmiths across the Valley on a referral partnership program.
    When you respond to a vehicle lockout or a property manager call, we can be your go-to towing referral,
    and we send referrals your way when our clients need lock services.
    It costs nothing to join, and you earn a commission on every property management partnership you refer to us.
    Press 1 if you would like to hear more, or press 9 to be removed from our list.
  </Say>
  <Gather numDigits="1" action="${baseUrl}/api/voice/outbound/callback" method="POST" timeout="10">
    <Pause length="2"/>
  </Gather>
  <Say voice="Polly.Joanna" language="en-US">
    Thank you for your time. Have a great day. Goodbye.
  </Say>
</Response>`;
  }

  if (context === 'mechanic') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Joanna" language="en-US">
    Hello, may I speak with ${name}? This is Axle Towing and Impound calling from Phoenix.
    We are looking to build partnerships with local auto repair shops.
    When vehicles need to be towed to a shop for repairs, we can bring them straight to you.
    In return, when your customers need towing, you refer them to us.
    It is a cross-referral partnership that helps both businesses grow.
    Press 1 if you would like to discuss a partnership, or press 9 to be removed from our list.
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
    We provide professional towing, roadside assistance, and parking enforcement services
    throughout the Phoenix metro area, available 24 hours a day, 7 days a week.
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
