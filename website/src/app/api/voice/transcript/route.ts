import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * /api/voice/transcript
 * ──────────────────────
 * POST  — Save a call transcript (from Twilio Recording / transcription callback)
 * GET   — Retrieve recent transcripts (paginated, most-recent first)
 *
 * Transcripts are persisted to `data/transcripts/` as individual JSON files.
 * In production, replace the file-system layer with a database write.
 */

const TRANSCRIPT_DIR = path.join(process.cwd(), 'data', 'transcripts');

async function ensureDir() {
  await fs.mkdir(TRANSCRIPT_DIR, { recursive: true });
}

// ─── POST ─────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  const contentType = req.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
  } else {
    // Twilio sends form-encoded webhooks
    const form = await req.formData();
    body = Object.fromEntries(form.entries());
  }

  const callSid = String(body.CallSid ?? body.callSid ?? '');
  if (!callSid) {
    return NextResponse.json({ error: 'CallSid is required' }, { status: 400 });
  }

  const transcript = {
    callSid,
    from: String(body.From ?? body.from ?? 'Unknown'),
    to: String(body.To ?? body.to ?? 'Unknown'),
    duration: Number(body.CallDuration ?? body.duration ?? 0),
    transcriptionText: String(body.TranscriptionText ?? body.transcript ?? ''),
    recordingUrl: String(body.RecordingUrl ?? body.recordingUrl ?? ''),
    status: String(body.CallStatus ?? body.status ?? 'completed'),
    direction: String(body.Direction ?? body.direction ?? 'inbound'),
    savedAt: new Date().toISOString(),
  };

  await ensureDir();
  const filename = `${transcript.savedAt.replace(/[:.]/g, '-')}_${callSid}.json`;
  await fs.writeFile(
    path.join(TRANSCRIPT_DIR, filename),
    JSON.stringify(transcript, null, 2),
    'utf8',
  );

  console.log(`[voice/transcript] Saved transcript for CallSid=${callSid}`);

  return NextResponse.json({ success: true, callSid }, { status: 201 });
}

// ─── GET ──────────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(Number(searchParams.get('limit') ?? '20'), 100);
  const offset = Number(searchParams.get('offset') ?? '0');

  await ensureDir();

  let files: string[];
  try {
    files = await fs.readdir(TRANSCRIPT_DIR);
  } catch {
    return NextResponse.json({ transcripts: [], total: 0 });
  }

  // Sort descending (newest first) — filenames start with ISO timestamp
  const jsonFiles = files.filter((f) => f.endsWith('.json')).sort().reverse();
  const total = jsonFiles.length;
  const page = jsonFiles.slice(offset, offset + limit);

  const transcripts = await Promise.all(
    page.map(async (filename) => {
      try {
        const raw = await fs.readFile(path.join(TRANSCRIPT_DIR, filename), 'utf8');
        return JSON.parse(raw);
      } catch {
        return null;
      }
    }),
  );

  return NextResponse.json({
    transcripts: transcripts.filter(Boolean),
    total,
    limit,
    offset,
  });
}
