/**
 * Media Handler — Twilio call management for Hafnia Financial voice agent
 *
 * Handles:
 * - Incoming call setup with TwiML
 * - Warm transfer via Twilio REST API (conference-based)
 * - Call status tracking
 *
 * Transfer strategy: Conference-based warm transfer
 * 1. Move the active call into a conference room
 * 2. Dial the advisor into the same conference
 * 3. AI agent plays a brief hold message, then drops out
 * This ensures a seamless handoff where the caller never gets disconnected.
 */

import twilio from 'twilio';

const { VoiceResponse } = twilio.twiml;

// Environment config
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID!;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN!;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER!;

function getTwilioClient() {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
    throw new Error(
      'Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN environment variables'
    );
  }
  return twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
}

export interface TransferParams {
  callSid: string;
  advisorNumber: string;
  reason: string;
  callerName?: string;
  context?: string;
}

export interface TransferResponse {
  conferenceSid: string;
  advisorCallSid: string;
}

/**
 * Generate TwiML for the initial incoming call.
 * Connects the caller to the AI agent via WebSocket media stream.
 */
export function generateIncomingCallTwiml(baseUrl: string): string {
  const response = new VoiceResponse();

  response.say(
    {
      voice: 'Polly.Joanna',
    },
    'Thank you for calling Hafnia Financial. One moment while I connect you with our AI assistant.'
  );

  // Pause briefly for natural flow
  response.pause({ length: 1 });

  // Connect to WebSocket for real-time AI agent interaction
  const connect = response.connect();
  connect.stream({
    url: `wss://${new URL(baseUrl).host}/api/voice/stream`,
    statusCallback: `${baseUrl}/api/voice/status`,
    statusCallbackMethod: 'POST',
  });

  return response.toString();
}

/**
 * Generate TwiML to place the caller into a conference room.
 * Used during the warm transfer process.
 */
export function generateConferenceTwiml(conferenceName: string): string {
  const response = new VoiceResponse();

  response.say(
    {
      voice: 'Polly.Joanna',
    },
    'Please hold while I connect you with a financial advisor.'
  );

  const dial = response.dial();
  dial.conference(
    {
      startConferenceOnEnter: true,
      endConferenceOnExit: false,
      waitUrl: 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.classical',
      statusCallback: '/api/voice/conference-status',
      statusCallbackEvent: ['join', 'leave', 'end'],
    },
    conferenceName
  );

  return response.toString();
}

/**
 * Execute a warm transfer via Twilio REST API.
 *
 * Steps:
 * 1. Create a unique conference name
 * 2. Update the active call to redirect into the conference
 * 3. Dial the advisor into the same conference
 *
 * The caller hears hold music while the advisor is being connected.
 * Once the advisor joins, both parties are in the same conference.
 */
export async function executeWarmTransfer(
  params: TransferParams,
  baseUrl: string
): Promise<TransferResponse> {
  const client = getTwilioClient();
  const conferenceName = `hafnia-transfer-${params.callSid}-${Date.now()}`;

  // Step 1: Redirect the active call into a conference room
  // This moves the caller from the AI agent stream into a conference
  // with hold music while we connect the advisor
  await client.calls(params.callSid).update({
    twiml: generateConferenceTwiml(conferenceName),
  });

  // Step 2: Dial the advisor into the same conference
  const advisorCall = await client.calls.create({
    to: params.advisorNumber,
    from: TWILIO_PHONE_NUMBER,
    twiml: generateAdvisorJoinTwiml(conferenceName, params),
  });

  // Step 3: Look up the conference SID (it's created when the first
  // participant joins, so we may need a brief wait)
  let conferenceSid = '';
  const maxAttempts = 10;
  for (let i = 0; i < maxAttempts; i++) {
    const conferences = await client.conferences.list({
      friendlyName: conferenceName,
      status: 'in-progress',
      limit: 1,
    });
    if (conferences.length > 0) {
      conferenceSid = conferences[0].sid;
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return {
    conferenceSid,
    advisorCallSid: advisorCall.sid,
  };
}

/**
 * Generate TwiML for the advisor joining the conference.
 * Plays a brief whisper to the advisor with context before connecting.
 */
function generateAdvisorJoinTwiml(
  conferenceName: string,
  params: TransferParams
): string {
  const response = new VoiceResponse();

  // Whisper context to the advisor before joining the conference
  const callerInfo = params.callerName
    ? `Incoming transfer from ${params.callerName}.`
    : 'Incoming transfer from a Hafnia Financial caller.';

  response.say(
    {
      voice: 'Polly.Joanna',
    },
    `${callerInfo} Reason: ${params.reason}. Connecting you now.`
  );

  response.pause({ length: 1 });

  const dial = response.dial();
  dial.conference(
    {
      startConferenceOnEnter: true,
      endConferenceOnExit: true,
    },
    conferenceName
  );

  return response.toString();
}

/**
 * Handle call status webhook updates from Twilio.
 */
export function handleCallStatus(params: Record<string, string>): {
  callSid: string;
  status: string;
} {
  return {
    callSid: params.CallSid || '',
    status: params.CallStatus || '',
  };
}
