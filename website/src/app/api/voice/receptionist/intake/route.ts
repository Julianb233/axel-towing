import { NextRequest, NextResponse } from 'next/server';
import {
  RECEPTIONIST_SCRIPTS,
  sendReceptionistSms,
  captureReceptionistLead,
} from '@/lib/receptionist';

/**
 * POST /api/voice/receptionist/intake
 * ────────────────────────────────────
 * Handles digit input from the AI receptionist main menu.
 *
 * 1 → Emergency tow (transfer to 24/7 dispatcher)
 * 2 → Property manager inquiry (sub-menu with form sending)
 * 3 → Text service request form to caller
 * 4 → Leave callback request
 * 5 → Hours, address, and info
 * 9 → End call
 *
 * Linear: AI-3353
 */
export async function POST(req: NextRequest) {
  const body = await req.formData();
  const digits = String(body.get('Digits') ?? '');
  const callSid = String(body.get('CallSid') ?? '');
  const from = String(body.get('From') ?? 'Unknown');

  console.log(`[voice/receptionist/intake] CallSid=${callSid} Digits=${digits}`);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  switch (digits) {
    case '1': {
      // Emergency tow — connect immediately
      captureReceptionistLead({ callSid, from, type: 'emergency', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.emergencyTransfer());
    }

    case '2': {
      // Property manager — sub-menu
      captureReceptionistLead({ callSid, from, type: 'property-manager', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.propertyManagerIntake(baseUrl));
    }

    case '3': {
      // Send service request form via SMS
      const smsResult = await sendReceptionistSms(from, 'serviceRequestForm');
      captureReceptionistLead({ callSid, from, type: 'form-request', formSent: smsResult.success });
      return xmlResponse(RECEPTIONIST_SCRIPTS.formSent());
    }

    case '4': {
      // Callback request — send confirmation SMS
      await sendReceptionistSms(from, 'callbackConfirmation');
      captureReceptionistLead({ callSid, from, type: 'callback', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.callbackConfirmed());
    }

    case '5': {
      // Info about hours, address, storage lot
      captureReceptionistLead({ callSid, from, type: 'info', formSent: false });
      return xmlResponse(RECEPTIONIST_SCRIPTS.infoMessage(baseUrl));
    }

    case '9': {
      // End call
      return xmlResponse(
        `<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="Polly.Joanna" language="en-US">Thank you for calling Axle Towing. Goodbye.</Say><Hangup/></Response>`,
      );
    }

    default: {
      // Unrecognized — transfer to dispatcher
      return xmlResponse(RECEPTIONIST_SCRIPTS.emergencyTransfer());
    }
  }
}

function xmlResponse(twiml: string) {
  return new NextResponse(twiml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
