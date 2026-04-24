import { NextRequest, NextResponse } from 'next/server';
import {
  RECEPTIONIST_SCRIPTS,
  sendReceptionistSms,
  captureReceptionistLead,
} from '@/lib/receptionist';

/**
 * POST /api/voice/receptionist/pm-collect
 * ────────────────────────────────────────
 * Property manager sub-menu handler.
 *
 * 1 → Text partnership form
 * 2 → Schedule callback with partnerships team
 * 3 → Connect to emergency dispatcher
 *
 * Linear: AI-3353
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const digits = String(body.get('Digits') ?? '');
  const callSid = String(body.get('CallSid') ?? '');
  const from = String(body.get('From') ?? 'Unknown');

  console.log(`[voice/receptionist/pm-collect] CallSid=${callSid} Digits=${digits}`);

  switch (digits) {
    case '1': {
      // Send partnership form via SMS
      const smsResult = await sendReceptionistSms(from, 'partnershipForm');
      captureReceptionistLead({
        callSid,
        from,
        type: 'property-manager',
        formSent: smsResult.success,
      });
      return xmlResponse(RECEPTIONIST_SCRIPTS.formSent());
    }

    case '2': {
      // Callback during business hours
      await sendReceptionistSms(from, 'callbackConfirmation');
      captureReceptionistLead({ callSid, from, type: 'callback', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.callbackConfirmed());
    }

    case '3': {
      // Emergency dispatcher
      captureReceptionistLead({ callSid, from, type: 'emergency', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.emergencyTransfer());
    }

    default: {
      // Default — send form and hang up
      await sendReceptionistSms(from, 'partnershipForm');
      captureReceptionistLead({ callSid, from, type: 'property-manager', formSent: true });
      return xmlResponse(RECEPTIONIST_SCRIPTS.formSent());
    }
  }
}

function xmlResponse(twiml: string) {
  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
