import { NextRequest, NextResponse } from 'next/server';
import { handleCallStatus } from '@/server/media-handler';

/**
 * Twilio call status callback webhook.
 * Receives status updates for active calls.
 */
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const params: Record<string, string> = {};
  formData.forEach((value, key) => {
    params[key] = value.toString();
  });

  const status = handleCallStatus(params);
  console.log(`[Voice] Call ${status.callSid} status: ${status.status}`);

  return NextResponse.json({ received: true });
}
