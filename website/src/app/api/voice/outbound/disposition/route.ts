import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/outbound/disposition
 * Records the outcome of an outbound call for auto-dialer tracking.
 *
 * Disposition options:
 *   - answered-interested: Prospect wants to learn more
 *   - answered-not-now: Not ready, schedule follow-up
 *   - no-answer: No pickup
 *   - voicemail-left: Left a voicemail
 *   - wrong-number: Invalid contact
 *   - do-not-call: Requested removal from call list
 *   - callback-scheduled: Prospect wants a callback at specific time
 *
 * Body: { callSid, contactId, disposition, notes?, callbackDate? }
 */

export type CallDisposition =
  | 'answered-interested'
  | 'answered-not-now'
  | 'no-answer'
  | 'voicemail-left'
  | 'wrong-number'
  | 'do-not-call'
  | 'callback-scheduled';

interface DispositionRecord {
  id: string;
  callSid: string;
  contactId: string;
  disposition: CallDisposition;
  notes: string;
  callbackDate: string | null;
  createdAt: string;
  agent: string;
}

// In-memory store (Supabase in production)
const dispositions: DispositionRecord[] = [];

const VALID_DISPOSITIONS: CallDisposition[] = [
  'answered-interested',
  'answered-not-now',
  'no-answer',
  'voicemail-left',
  'wrong-number',
  'do-not-call',
  'callback-scheduled',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { callSid, contactId, disposition, notes, callbackDate, agent } = body as {
      callSid?: string;
      contactId?: string;
      disposition?: CallDisposition;
      notes?: string;
      callbackDate?: string;
      agent?: string;
    };

    if (!disposition || !VALID_DISPOSITIONS.includes(disposition)) {
      return NextResponse.json(
        { error: `Invalid disposition. Valid: ${VALID_DISPOSITIONS.join(', ')}` },
        { status: 400 },
      );
    }

    const record: DispositionRecord = {
      id: `disp-${Date.now().toString(36)}`,
      callSid: callSid || '',
      contactId: contactId || '',
      disposition,
      notes: notes || '',
      callbackDate: callbackDate || null,
      createdAt: new Date().toISOString(),
      agent: agent || 'system',
    };

    dispositions.push(record);

    console.log(
      `[disposition] ${record.id}: ${contactId} → ${disposition}${callbackDate ? ` (callback: ${callbackDate})` : ''}`,
    );

    return NextResponse.json({ success: true, record });
  } catch (error) {
    console.error('Disposition API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const summary: Record<string, number> = {};
  for (const d of dispositions) {
    summary[d.disposition] = (summary[d.disposition] || 0) + 1;
  }

  return NextResponse.json({
    total: dispositions.length,
    summary,
    recent: dispositions.slice(-20).reverse(),
  });
}
