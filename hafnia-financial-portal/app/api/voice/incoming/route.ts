import { NextRequest, NextResponse } from 'next/server';
import { generateIncomingCallTwiml } from '@/server/media-handler';

/**
 * Twilio webhook for incoming calls.
 * Returns TwiML that greets the caller and connects them to the AI agent.
 */
export async function POST(request: NextRequest) {
  const baseUrl = process.env.BASE_URL || `https://${request.headers.get('host')}`;
  const twiml = generateIncomingCallTwiml(baseUrl);

  return new NextResponse(twiml, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
