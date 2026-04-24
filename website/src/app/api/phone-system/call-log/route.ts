import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/phone-system/call-log
 * ──────────────────────────────
 * Retrieves recent call logs from Twilio for the phone system dashboard.
 * Supports pagination and filtering by date range.
 *
 * Query params:
 *   limit - Number of records (default: 20, max: 100)
 *   status - Filter by status: completed, busy, failed, no-answer
 *   direction - Filter: inbound, outbound
 *
 * Linear: AI-3353
 */
export async function GET(req: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    return NextResponse.json({ error: 'Twilio credentials not configured' }, { status: 500 });
  }

  const { searchParams } = req.nextUrl;
  const limit = Math.min(Number(searchParams.get('limit') ?? '20'), 100);
  const status = searchParams.get('status');
  const direction = searchParams.get('direction');

  try {
    const params = new URLSearchParams({ PageSize: String(limit) });
    if (status) params.set('Status', status);

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json?${params}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[phone-system/call-log] Twilio API error:', text);
      return NextResponse.json({ error: 'Failed to fetch call logs' }, { status: 502 });
    }

    const data = await response.json();

    // Transform Twilio call records
    const calls = (data.calls ?? [])
      .filter((call: Record<string, string>) => {
        if (direction === 'inbound') return call.direction === 'inbound';
        if (direction === 'outbound') return call.direction?.startsWith('outbound');
        return true;
      })
      .map((call: Record<string, string>) => ({
        sid: call.sid,
        from: call.from,
        to: call.to,
        direction: call.direction,
        status: call.status,
        duration: call.duration,
        startTime: call.start_time,
        endTime: call.end_time,
        price: call.price,
      }));

    return NextResponse.json({
      calls,
      total: calls.length,
      hasMore: !!data.next_page_uri,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[phone-system/call-log] Error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
