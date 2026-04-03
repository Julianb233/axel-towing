/**
 * Voice Agent Configuration for Axle Towing
 * ─────────────────────────────────────────
 * TwiML generation helpers, call script templates, and after-hours detection.
 */

export const BUSINESS_HOURS = {
  /** Business hours: 9 AM – 6 PM MST (UTC-7) */
  startHour: 9,
  endHour: 18,
  timezone: 'America/Phoenix', // MST — Arizona does not observe DST
};

/**
 * Returns true if the current time is within business hours (9 AM – 6 PM MST).
 * Arizona is permanently UTC-7 (no DST).
 */
export function isBusinessHours(): boolean {
  const now = new Date();
  // UTC-7 offset in minutes
  const offsetMs = -7 * 60 * 60 * 1000;
  const mst = new Date(now.getTime() + offsetMs);
  const hour = mst.getUTCHours();
  const day = mst.getUTCDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0 || day === 6) return false; // closed weekends
  return hour >= BUSINESS_HOURS.startHour && hour < BUSINESS_HOURS.endHour;
}

/** Returns a human-readable time string in MST */
export function getMSTTimeString(): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Phoenix',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

// ─── TwiML Helpers ───────────────────────────────────────────────────────────

export function xmlHeader(): string {
  return '<?xml version="1.0" encoding="UTF-8"?>';
}

export function twimlResponse(body: string): string {
  return `${xmlHeader()}\n<Response>\n${body}\n</Response>`;
}

export function sayNode(text: string, voice = 'Polly.Joanna', lang = 'en-US'): string {
  return `  <Say voice="${voice}" language="${lang}">${text}</Say>`;
}

export function gatherNode(action: string, numDigits = 1, body: string): string {
  return `  <Gather numDigits="${numDigits}" action="${action}" method="POST" timeout="10">\n${body}\n  </Gather>`;
}

// ─── Lead Creation ────────────────────────────────────────────────────────────

export interface CallLead {
  callSid: string;
  from: string;
  name?: string;
  address?: string;
  issue?: string;
  source: 'inbound' | 'after-hours';
  createdAt: string;
}

/**
 * Build a lead object from inbound call data.
 * In production this would be persisted to the database or CRM.
 */
export function buildCallLead(params: Omit<CallLead, 'createdAt'>): CallLead {
  return { ...params, createdAt: new Date().toISOString() };
}

/** Serialize a lead to a loggable string (no PII in production logs). */
export function logLead(lead: CallLead): void {
  console.log(
    `[voice-agent] lead source=${lead.source} sid=${lead.callSid} from=${lead.from.slice(0, 6)}***`,
  );
}

// ─── Call Script Templates ────────────────────────────────────────────────────

export type ScriptKey = 'hoa-intro' | 'follow-up' | 'appointment-reminder';

interface OutboundScript {
  label: string;
  /** Returns TwiML body (everything inside <Response>) */
  buildTwiml: (name: string, baseUrl: string) => string;
}

export const OUTBOUND_SCRIPTS: Record<ScriptKey, OutboundScript> = {
  'hoa-intro': {
    label: 'HOA Intro',
    buildTwiml: (name, baseUrl) => `
  ${sayNode(
    `Hello, may I speak with ${name}? This is Sarah calling on behalf of Axle Towing and Impound, ` +
      `Phoenix's leading parking enforcement company. We provide free parking enforcement and vehicle removal ` +
      `services for HOA communities and property managers across the Phoenix metro area. ` +
      `We'd love to learn about your community's parking challenges and see how we can help.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/outbound/callback`,
    1,
    sayNode(
      `To speak with a parking enforcement specialist today, press 1. ` +
        `If you'd like us to call back at a better time, press 2. ` +
        `To be removed from our call list, press 9.`,
    ),
  )}
  ${sayNode('Thank you for your time. We look forward to connecting. Goodbye.')}
  <Hangup/>`,
  },

  'follow-up': {
    label: 'Follow-up',
    buildTwiml: (name, baseUrl) => `
  ${sayNode(
    `Hello ${name}, this is Sarah from Axle Towing and Impound following up on your recent inquiry ` +
      `about our parking enforcement services. We wanted to make sure all your questions were answered ` +
      `and check if you're ready to move forward with a free consultation.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/outbound/callback`,
    1,
    sayNode(
      `To speak with our team right now, press 1. ` +
        `To schedule a callback at a different time, press 2. ` +
        `To be removed from our list, press 9.`,
    ),
  )}
  ${sayNode('Thank you for your time. Have a wonderful day. Goodbye.')}
  <Hangup/>`,
  },

  'appointment-reminder': {
    label: 'Appointment Reminder',
    buildTwiml: (name, baseUrl) => `
  ${sayNode(
    `Hello ${name}, this is a friendly reminder from Axle Towing and Impound about your upcoming ` +
      `consultation regarding parking enforcement for your property. ` +
      `Please call us at 480-288-5526 if you need to reschedule.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/outbound/callback`,
    1,
    sayNode(
      `To confirm your appointment, press 1. ` +
        `To reschedule, press 2. ` +
        `To cancel, press 9.`,
    ),
  )}
  ${sayNode('Thank you and we look forward to speaking with you. Goodbye.')}
  <Hangup/>`,
  },
};

// ─── After-Hours TwiML ────────────────────────────────────────────────────────

export function buildAfterHoursTwiml(baseUrl: string): string {
  return twimlResponse(`
  ${sayNode(
    `Thank you for calling Axle Towing and Impound. Our office is currently closed. ` +
      `Our business hours are Monday through Friday, 9 AM to 6 PM Mountain Standard Time. ` +
      `For after-hours towing emergencies, please press 1. ` +
      `To leave your name and phone number for a callback during business hours, please press 2.`,
  )}
  ${gatherNode(
    `${baseUrl}/api/voice/ai-agent/after-hours`,
    1,
    sayNode('Press 1 for an emergency tow. Press 2 to leave a callback request.'),
  )}
  ${sayNode(
    'We did not receive your input. Please call back during business hours or visit axletowing.com. Goodbye.',
  )}
  <Hangup/>`);
}
