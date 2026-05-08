import { NextRequest, NextResponse } from 'next/server';
import { RECEPTIONIST_SCRIPTS } from '@/lib/receptionist';

/**
 * POST /api/voice/receptionist
 * ─────────────────────────────
 * Primary AI receptionist webhook for Twilio.
 * Enhanced after-hours handler with conversational intake, form sending,
 * and intelligent call routing.
 *
 * This replaces the basic after-hours IVR with a full AI receptionist
 * that can handle intake, send forms via SMS, and capture leads.
 *
 * Linear: AI-3353
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const from = String(body.get('From') ?? 'Unknown');
  const callSid = String(body.get('CallSid') ?? '');

  console.log(`[voice/receptionist] CallSid=${callSid} From=${from.slice(0, 6)}***`);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';
  const twiml = RECEPTIONIST_SCRIPTS.afterHoursGreeting(baseUrl);

  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
