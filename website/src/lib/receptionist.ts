/**
 * AI Receptionist Configuration for Axle Towing
 * ──────────────────────────────────────────────
 * Enhanced after-hours AI receptionist with conversational intake,
 * form sending via SMS, and lead capture.
 *
 * Linear: AI-3353
 */

import { twimlResponse, sayNode, gatherNode } from './voice-agent';

// ─── Receptionist Scripts ────────────────────────────────────────────────────

export const RECEPTIONIST_SCRIPTS = {
  afterHoursGreeting: (baseUrl: string) =>
    twimlResponse(`
  ${sayNode(
    `Thank you for calling Axle Towing and Impound. ` +
      `Our office is currently closed, but I'm our AI assistant and I can help you right now. ` +
      `We dispatch 24 hours a day, 7 days a week.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/receptionist/intake`,
    1,
    sayNode(
      `If you need an emergency tow right now, press 1 and I'll connect you to our dispatcher immediately. ` +
        `If you're a property manager or HOA board member needing parking enforcement, press 2. ` +
        `If you'd like us to text you a service request form, press 3. ` +
        `If you'd like to leave a message for a callback during business hours, press 4. ` +
        `To hear our hours, address, and storage lot information, press 5.`,
    ),
  )}
  ${sayNode(
    `I didn't catch that. Let me connect you with our emergency dispatcher. Please hold.`,
  )}
  <Dial>${process.env.DISPATCH_PHONE ?? '480-288-5526'}</Dial>`),

  emergencyTransfer: () =>
    twimlResponse(`
  ${sayNode(
    `Connecting you with our 24/7 emergency dispatcher now. ` +
      `Axle Towing serves the entire Phoenix metro area. Please hold.`,
  )}
  <Dial callerId="${process.env.TWILIO_PHONE_NUMBER ?? ''}">${process.env.DISPATCH_PHONE ?? '480-288-5526'}</Dial>`),

  propertyManagerIntake: (baseUrl: string) =>
    twimlResponse(`
  ${sayNode(
    `Thank you for your interest in our property management services. ` +
      `Axle Towing provides free parking enforcement and vehicle removal for HOA communities, ` +
      `apartment complexes, and commercial properties across the Phoenix metro area.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/receptionist/pm-collect`,
    1,
    sayNode(
      `I can text you our property manager partnership form right now. Press 1 to receive the form via text. ` +
        `Press 2 to speak with our partnerships team during business hours. ` +
        `Press 3 to connect with our emergency dispatcher.`,
    ),
  )}
  ${sayNode(
    `We'll text you our partnership form. You'll receive it shortly. Thank you for calling Axle Towing.`,
  )}
  <Hangup/>`),

  formSent: () =>
    twimlResponse(`
  ${sayNode(
    `I've sent a service request form to your phone via text message. ` +
      `Please fill it out at your convenience, and our partnerships team will reach out ` +
      `within one business day. Thank you for considering Axle Towing. Have a great night.`,
  )}
  <Hangup/>`),

  callbackConfirmed: () =>
    twimlResponse(`
  ${sayNode(
    `Thank you. I've recorded your callback request. Our team will contact you ` +
      `during our next business day, Monday through Friday, 9 AM to 6 PM Mountain Standard Time. ` +
      `You'll also receive a text confirmation shortly. Have a good night.`,
  )}
  <Hangup/>`),

  infoMessage: (baseUrl: string) =>
    twimlResponse(`
  ${sayNode(
    `Axle Towing and Impound is open for vehicle retrieval Monday through Friday, 9 AM to 5 PM. ` +
      `Our dispatch operates 24 hours a day, 7 days a week, 365 days a year. ` +
      `Our storage facility is at 1151 West Apache Trail in Apache Junction, ` +
      `and 320 East Pioneer Street in Phoenix. ` +
      `You can look up your vehicle online at axletowing.com slash locate dash vehicle.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/receptionist/intake`,
    1,
    sayNode(
      `Press 1 for an emergency tow. ` +
        `Press 3 to receive a service request form by text. ` +
        `Press 4 to leave a callback request. ` +
        `Or press 9 to end this call.`,
    ),
  )}
  ${sayNode(`Thank you for calling Axle Towing. Goodbye.`)}
  <Hangup/>`),
};

// ─── SMS Templates ───────────────────────────────────────────────────────────

export const SMS_TEMPLATES = {
  serviceRequestForm: (baseUrl: string) =>
    `Axle Towing - Service Request Form\n\n` +
    `Submit your service request here:\n` +
    `${baseUrl}/portal/request\n\n` +
    `Or contact us:\n` +
    `Phone: 480-288-5526 (24/7 dispatch)\n` +
    `Email: info@axletowing.com\n` +
    `Hours: Mon-Fri 9am-5pm MST`,

  partnershipForm: (baseUrl: string) =>
    `Axle Towing - Property Manager Partnership\n\n` +
    `Start your FREE parking enforcement program:\n` +
    `${baseUrl}/get-quote\n\n` +
    `What you get:\n` +
    `- Free parking enforcement & towing\n` +
    `- TowBook management portal access\n` +
    `- 24/7 dispatch support\n` +
    `- Monthly reports & analytics\n\n` +
    `Questions? Call 480-288-5526`,

  callbackConfirmation: () =>
    `Axle Towing: We received your after-hours callback request. ` +
    `Our team will contact you Mon-Fri 9am-6pm MST. ` +
    `For emergencies, call 480-288-5526 (24/7). ` +
    `Reply STOP to opt out.`,

  missedCallFollowup: (baseUrl: string) =>
    `Hi, you just called Axle Towing after hours. We're available 24/7 for emergencies at 480-288-5526.\n\n` +
    `Need parking enforcement? Get a free quote: ${baseUrl}/get-quote\n` +
    `Looking for your vehicle? ${baseUrl}/locate-vehicle\n\n` +
    `We'll call you back during business hours (Mon-Fri 9am-6pm MST).`,
};

// ─── Twilio SMS Helper ───────────────────────────────────────────────────────

export async function sendReceptionistSms(
  to: string,
  template: keyof typeof SMS_TEMPLATES,
): Promise<{ success: boolean; messageSid?: string; error?: string }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  if (!accountSid || !authToken || !fromNumber || to === 'Unknown') {
    return { success: false, error: 'Twilio credentials not configured or invalid number' };
  }

  const templateFn = SMS_TEMPLATES[template];
  const body =
    template === 'callbackConfirmation'
      ? (templateFn as () => string)()
      : (templateFn as (url: string) => string)(baseUrl);

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const params = new URLSearchParams({ To: to, From: fromNumber, Body: body });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`[receptionist] SMS send failed: ${text}`);
      return { success: false, error: text };
    }

    const data = await response.json();
    console.log(`[receptionist] SMS sent SID=${data.sid} to=${to.slice(0, 6)}*** template=${template}`);
    return { success: true, messageSid: data.sid };
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[receptionist] SMS error:', msg);
    return { success: false, error: msg };
  }
}

// ─── Lead Capture ────────────────────────────────────────────────────────────

export interface ReceptionistLead {
  callSid: string;
  from: string;
  type: 'emergency' | 'property-manager' | 'callback' | 'form-request' | 'info';
  formSent: boolean;
  timestamp: string;
}

export function captureReceptionistLead(params: Omit<ReceptionistLead, 'timestamp'>): ReceptionistLead {
  const lead: ReceptionistLead = { ...params, timestamp: new Date().toISOString() };
  console.log(
    `[receptionist] Lead captured: type=${lead.type} sid=${lead.callSid} from=${lead.from.slice(0, 6)}*** formSent=${lead.formSent}`,
  );
  return lead;
}
