import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/voice/ringless-vm
 * Sends a ringless voicemail to a contact via Twilio or SlyBroadcast-style API.
 * Messages are signed as "Elliot" per client spec.
 *
 * Body: { to, templateId, contactName?, contactId? }
 *
 * GET /api/voice/ringless-vm
 * Returns available VM templates and campaign history.
 */

export interface RinglessVMTemplate {
  id: string;
  name: string;
  description: string;
  script: string;
  category: 'client-appreciation' | 'referral-request' | 'seasonal-checkin' | 'account-nurture' | 'on-hold-followup';
}

export const VM_TEMPLATES: RinglessVMTemplate[] = [
  {
    id: 'vm-appreciation',
    name: 'Client Appreciation',
    description: 'Thank existing clients for their partnership',
    script:
      "Hey, this is Elliot from Axle Towing. I just wanted to reach out personally to say thank you for trusting us with your property's parking enforcement. We really value our partnership. If there's anything we can do to improve our service, don't hesitate to call me directly. Have a great day!",
    category: 'client-appreciation',
  },
  {
    id: 'vm-referral',
    name: 'Referral Request',
    description: 'Ask happy clients for property manager referrals',
    script:
      "Hi, this is Elliot with Axle Towing. I hope everything's been going smoothly with your parking enforcement. I wanted to ask — if you know any other property managers or HOA boards that could use our services, we'd love an introduction. We offer a referral bonus for every new property that signs on. Thanks again, and feel free to give me a call anytime!",
    category: 'referral-request',
  },
  {
    id: 'vm-seasonal-summer',
    name: 'Summer Check-in',
    description: 'Seasonal check-in for Arizona summer concerns',
    script:
      "Hey there, Elliot from Axle Towing here. With summer heating up in the Valley, I wanted to check in on your property. We often see an uptick in parking violations this time of year with pool season and visitors. If you need us to increase patrol frequency or have any concerns, just give me a ring. Stay cool out there!",
    category: 'seasonal-checkin',
  },
  {
    id: 'vm-quarterly',
    name: 'Quarterly Account Review',
    description: 'Quarterly touchpoint to prevent churn',
    script:
      "Hi, this is Elliot from Axle Towing calling for our quarterly check-in. I wanted to make sure everything is running smoothly with your parking enforcement and see if there's anything we can adjust. We can pull together a report on enforcement activity for your next board meeting. Give me a call when you get a chance — I'd love to touch base!",
    category: 'account-nurture',
  },
  {
    id: 'vm-on-hold',
    name: 'On-Hold Account Follow-up',
    description: 'Re-engage accounts that went on hold',
    script:
      "Hey, Elliot from Axle Towing here. I know we paused services a while back, and I just wanted to check in to see if your parking situation has changed. We've added some new services since we last spoke, including free parking signage and 24/7 dispatch. I'd love to reconnect and see if we can help. Give me a call anytime!",
    category: 'on-hold-followup',
  },
];

interface VMCampaignRecord {
  id: string;
  to: string;
  contactId: string;
  contactName: string;
  templateId: string;
  status: 'queued' | 'sent' | 'delivered' | 'failed';
  createdAt: string;
}

// In-memory store (Supabase in production)
const campaignHistory: VMCampaignRecord[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, templateId, contactName, contactId } = body as {
      to?: string;
      templateId?: string;
      contactName?: string;
      contactId?: string;
    };

    if (!to || !templateId) {
      return NextResponse.json(
        { error: 'to (phone number) and templateId are required' },
        { status: 400 },
      );
    }

    const template = VM_TEMPLATES.find((t) => t.id === templateId);
    if (!template) {
      return NextResponse.json(
        { error: `Unknown template. Available: ${VM_TEMPLATES.map((t) => t.id).join(', ')}` },
        { status: 400 },
      );
    }

    // In production, this would call the ringless VM provider (SlyBroadcast, Drop Cowboy, etc.)
    // For now, we queue the message and log it.
    const record: VMCampaignRecord = {
      id: `rvm-${Date.now().toString(36)}`,
      to,
      contactId: contactId || '',
      contactName: contactName || '',
      templateId,
      status: 'queued',
      createdAt: new Date().toISOString(),
    };

    campaignHistory.push(record);

    console.log(
      `[ringless-vm] Queued: ${record.id} → ${to} (template: ${template.name})`,
    );

    // If Twilio is configured, we can use voicemail drop via the Twilio API
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axletowing.com';

    if (twilioSid && twilioToken && twilioFrom) {
      try {
        // Use Twilio to initiate a call that drops to voicemail
        // AMD (Answering Machine Detection) + machine voicemail message
        const twilio = (await import('twilio')).default;
        const client = twilio(twilioSid, twilioToken);

        await client.calls.create({
          to,
          from: twilioFrom,
          twiml: `<Response><Say voice="Polly.Matthew">${template.script}</Say></Response>`,
          machineDetection: 'DetectMessageEnd',
          asyncAmd: 'true',
          asyncAmdStatusCallback: `${baseUrl}/api/voice/status`,
        });

        record.status = 'sent';
        console.log(`[ringless-vm] Sent via Twilio: ${record.id}`);
      } catch (twilioError) {
        console.error('[ringless-vm] Twilio error:', twilioError);
        record.status = 'failed';
      }
    } else {
      console.warn('[ringless-vm] Twilio not configured — message queued only');
    }

    return NextResponse.json({
      success: true,
      record,
      template: { id: template.id, name: template.name, category: template.category },
    });
  } catch (error) {
    console.error('Ringless VM API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    templates: VM_TEMPLATES.map((t) => ({
      id: t.id,
      name: t.name,
      description: t.description,
      category: t.category,
    })),
    history: {
      total: campaignHistory.length,
      recent: campaignHistory.slice(-20).reverse(),
      byStatus: {
        queued: campaignHistory.filter((r) => r.status === 'queued').length,
        sent: campaignHistory.filter((r) => r.status === 'sent').length,
        delivered: campaignHistory.filter((r) => r.status === 'delivered').length,
        failed: campaignHistory.filter((r) => r.status === 'failed').length,
      },
    },
  });
}
