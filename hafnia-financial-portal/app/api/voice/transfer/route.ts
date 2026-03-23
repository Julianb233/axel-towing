import { NextRequest, NextResponse } from 'next/server';
import {
  executeWarmTransfer,
  type TransferParams,
} from '@/server/media-handler';

export async function POST(request: NextRequest) {
  try {
    const body: TransferParams = await request.json();

    if (!body.callSid || !body.advisorNumber || !body.reason) {
      return NextResponse.json(
        { error: 'Missing required fields: callSid, advisorNumber, reason' },
        { status: 400 }
      );
    }

    const baseUrl = process.env.BASE_URL || `https://${request.headers.get('host')}`;

    const result = await executeWarmTransfer(body, baseUrl);

    return NextResponse.json({
      success: true,
      conferenceSid: result.conferenceSid,
      advisorCallSid: result.advisorCallSid,
    });
  } catch (error) {
    console.error('Transfer error:', error);
    return NextResponse.json(
      {
        error: 'Failed to execute transfer',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
