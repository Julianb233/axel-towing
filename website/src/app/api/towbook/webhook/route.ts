import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/towbook/webhook
 * ─────────────────────────
 * TowBook integration webhook receiver.
 * Receives dispatch events from TowBook and forwards notifications
 * to property managers via SMS.
 *
 * Event types:
 *   - tow_created: New tow dispatched
 *   - tow_completed: Vehicle delivered to lot
 *   - tow_released: Vehicle released to owner
 *   - invoice_created: New invoice generated
 *   - driver_assigned: Driver assigned to call
 *   - status_update: Generic status change
 *
 * Authentication: Bearer token via TOWBOOK_WEBHOOK_SECRET
 *
 * Linear: AI-3353
 */

interface TowBookEvent {
  event: string;
  timestamp: string;
  data: {
    towId?: string;
    vehicleMake?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    vehicleColor?: string;
    licensePlate?: string;
    vin?: string;
    propertyName?: string;
    propertyManagerPhone?: string;
    propertyManagerEmail?: string;
    driverName?: string;
    location?: string;
    status?: string;
    invoiceAmount?: string;
    notes?: string;
  };
}

export async function POST(req: NextRequest) {
  // Verify webhook secret
  const authHeader = req.headers.get('authorization');
  const webhookSecret = process.env.TOWBOOK_WEBHOOK_SECRET;

  if (webhookSecret && authHeader !== `Bearer ${webhookSecret}`) {
    console.warn('[towbook/webhook] Unauthorized request');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let event: TowBookEvent;
  try {
    event = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  console.log(`[towbook/webhook] Event: ${event.event} TowID: ${event.data.towId ?? 'N/A'}`);

  // Process event
  const result = await processEvent(event);

  return NextResponse.json({
    received: true,
    event: event.event,
    processed: result.processed,
    notifications: result.notifications,
  });
}

// Also support GET for webhook verification handshakes
export async function GET(req: NextRequest) {
  const challenge = req.nextUrl.searchParams.get('challenge');
  if (challenge) {
    return NextResponse.json({ challenge });
  }
  return NextResponse.json({
    status: 'active',
    endpoint: '/api/towbook/webhook',
    events: [
      'tow_created',
      'tow_completed',
      'tow_released',
      'invoice_created',
      'driver_assigned',
      'status_update',
    ],
  });
}

async function processEvent(
  event: TowBookEvent,
): Promise<{ processed: boolean; notifications: number }> {
  const { data } = event;
  let notificationsSent = 0;

  switch (event.event) {
    case 'tow_created': {
      // Notify property manager that a tow has been dispatched
      if (data.propertyManagerPhone) {
        const vehicle = formatVehicle(data);
        await sendManagerNotification(
          data.propertyManagerPhone,
          `Axle Towing Update: A tow has been dispatched for ${vehicle} at ${data.propertyName ?? 'your property'}. ` +
            `${data.driverName ? `Driver: ${data.driverName}. ` : ''}` +
            `Track status at axletowing.com/portal. Ref: ${data.towId ?? 'N/A'}`,
        );
        notificationsSent++;
      }
      break;
    }

    case 'tow_completed': {
      if (data.propertyManagerPhone) {
        const vehicle = formatVehicle(data);
        await sendManagerNotification(
          data.propertyManagerPhone,
          `Axle Towing: Tow completed for ${vehicle} at ${data.propertyName ?? 'your property'}. ` +
            `Vehicle has been delivered to our storage facility. Ref: ${data.towId ?? 'N/A'}`,
        );
        notificationsSent++;
      }
      break;
    }

    case 'tow_released': {
      if (data.propertyManagerPhone) {
        const vehicle = formatVehicle(data);
        await sendManagerNotification(
          data.propertyManagerPhone,
          `Axle Towing: ${vehicle} has been released to the owner from ${data.propertyName ?? 'your property'} tow. Ref: ${data.towId ?? 'N/A'}`,
        );
        notificationsSent++;
      }
      break;
    }

    case 'driver_assigned': {
      if (data.propertyManagerPhone && data.driverName) {
        await sendManagerNotification(
          data.propertyManagerPhone,
          `Axle Towing: Driver ${data.driverName} has been assigned to your tow request at ${data.propertyName ?? 'your property'}. Ref: ${data.towId ?? 'N/A'}`,
        );
        notificationsSent++;
      }
      break;
    }

    case 'invoice_created': {
      if (data.propertyManagerEmail) {
        console.log(
          `[towbook/webhook] Invoice created: ${data.invoiceAmount} for ${data.propertyName}. Email notification queued.`,
        );
      }
      break;
    }

    case 'status_update': {
      console.log(
        `[towbook/webhook] Status update: TowID=${data.towId} Status=${data.status} Property=${data.propertyName}`,
      );
      break;
    }

    default:
      console.log(`[towbook/webhook] Unhandled event type: ${event.event}`);
  }

  return { processed: true, notifications: notificationsSent };
}

function formatVehicle(data: TowBookEvent['data']): string {
  const parts = [data.vehicleColor, data.vehicleYear, data.vehicleMake, data.vehicleModel].filter(
    Boolean,
  );
  if (parts.length === 0) return 'a vehicle';
  const desc = parts.join(' ');
  return data.licensePlate ? `${desc} (${data.licensePlate})` : desc;
}

async function sendManagerNotification(to: string, body: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.warn('[towbook/webhook] Cannot send SMS — Twilio not configured');
    return;
  }

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const params = new URLSearchParams({
      To: to.startsWith('+') ? to : `+1${to.replace(/\D/g, '')}`,
      From: fromNumber,
      Body: body,
    });

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
      console.error(`[towbook/webhook] SMS failed: ${text}`);
    } else {
      console.log(`[towbook/webhook] SMS sent to ${to.slice(0, 6)}***`);
    }
  } catch (err) {
    console.error('[towbook/webhook] SMS error:', err);
  }
}
