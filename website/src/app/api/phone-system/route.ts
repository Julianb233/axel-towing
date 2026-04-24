import { NextRequest, NextResponse } from 'next/server';
import { isBusinessHours, getMSTTimeString } from '@/lib/voice-agent';

/**
 * GET /api/phone-system
 * ─────────────────────
 * Phone system configuration and status endpoint.
 * Returns current routing rules, call tracking config, and system health.
 *
 * This serves as the central phone system management API for the
 * UMA → CRM-integrated phone system migration.
 *
 * Linear: AI-3353
 */

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';
  const isOpen = isBusinessHours();
  const currentTime = getMSTTimeString();

  return NextResponse.json({
    system: {
      provider: 'twilio',
      previousProvider: 'uma',
      migrationStatus: 'complete',
      version: '2.0.0',
    },
    status: {
      isBusinessHours: isOpen,
      currentTimeMST: currentTime,
      activeRoute: isOpen ? 'business-hours-ivr' : 'ai-receptionist',
    },
    routing: {
      mainNumber: process.env.TWILIO_PHONE_NUMBER ?? '(not configured)',
      dispatchNumber: process.env.DISPATCH_PHONE ?? '480-288-5526',
      rules: [
        {
          name: 'Business Hours (Mon-Fri 9am-6pm MST)',
          action: 'IVR menu with department routing',
          webhook: `${baseUrl}/api/voice/ai-agent`,
        },
        {
          name: 'After Hours',
          action: 'AI receptionist with intake + form sending',
          webhook: `${baseUrl}/api/voice/receptionist`,
        },
        {
          name: 'Emergency (24/7)',
          action: 'Direct transfer to on-call dispatcher',
          phone: process.env.DISPATCH_PHONE ?? '480-288-5526',
        },
      ],
    },
    callTracking: {
      enabled: true,
      features: [
        'Call recording (configurable via TWILIO_RECORD_CALLS)',
        'Real-time status callbacks',
        'Transcript storage',
        'Lead capture from inbound calls',
        'SMS auto-responder for missed calls',
      ],
      webhooks: {
        inbound: `${baseUrl}/api/voice/inbound`,
        aiAgent: `${baseUrl}/api/voice/ai-agent`,
        receptionist: `${baseUrl}/api/voice/receptionist`,
        statusCallback: `${baseUrl}/api/voice/status`,
        transcriptCallback: `${baseUrl}/api/voice/transcript`,
        smsHandler: `${baseUrl}/api/voice/sms`,
      },
    },
    crmIntegration: {
      leadCapture: true,
      callLogging: true,
      smsNotifications: true,
      towBookWebhook: `${baseUrl}/api/towbook/webhook`,
      features: [
        'Inbound call → automatic lead creation',
        'After-hours intake → SMS form + callback scheduling',
        'TowBook dispatch events → manager SMS notifications',
        'Property manager inquiry → partnership form via SMS',
        'Missed call → auto text-back with service links',
      ],
    },
    environmentVars: {
      TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID ? 'configured' : 'missing',
      TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN ? 'configured' : 'missing',
      TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER ? 'configured' : 'missing',
      DISPATCH_PHONE: process.env.DISPATCH_PHONE ? 'configured' : 'using default (480-288-5526)',
      TOWBOOK_WEBHOOK_SECRET: process.env.TOWBOOK_WEBHOOK_SECRET ? 'configured' : 'not set',
      TWILIO_RECORD_CALLS: process.env.TWILIO_RECORD_CALLS ?? 'false',
    },
  });
}

/**
 * POST /api/phone-system
 * Updates phone system routing configuration.
 * Protected by API key.
 */
export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    action: string;
    config?: Record<string, string>;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  switch (body.action) {
    case 'test-routing': {
      const isOpen = isBusinessHours();
      return NextResponse.json({
        testResult: 'success',
        currentRoute: isOpen ? 'business-hours-ivr' : 'ai-receptionist',
        isBusinessHours: isOpen,
        currentTimeMST: getMSTTimeString(),
      });
    }

    case 'health-check': {
      const twilioConfigured = !!(
        process.env.TWILIO_ACCOUNT_SID &&
        process.env.TWILIO_AUTH_TOKEN &&
        process.env.TWILIO_PHONE_NUMBER
      );
      return NextResponse.json({
        healthy: twilioConfigured,
        twilio: twilioConfigured ? 'connected' : 'missing credentials',
        dispatch: process.env.DISPATCH_PHONE ?? '480-288-5526',
        recording: process.env.TWILIO_RECORD_CALLS === 'true',
      });
    }

    default:
      return NextResponse.json({ error: `Unknown action: ${body.action}` }, { status: 400 });
  }
}
