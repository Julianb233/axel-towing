'use client';

import { useState } from 'react';

type ScriptKey = 'hoa-intro' | 'follow-up' | 'appointment-reminder';

interface CallLog {
  callSid: string;
  to: string;
  status: string;
  createdAt: string;
  context?: string;
}

interface Transcript {
  callSid: string;
  from: string;
  transcriptionText: string;
  duration: number;
  savedAt: string;
  status: string;
}

const SCRIPTS: { value: ScriptKey; label: string }[] = [
  { value: 'hoa-intro', label: 'HOA Intro' },
  { value: 'follow-up', label: 'Follow-up' },
  { value: 'appointment-reminder', label: 'Appointment Reminder' },
];

const MOCK_METRICS = {
  answeredRate: '64%',
  avgDuration: '2m 18s',
  conversionRate: '12%',
  totalCalls: 148,
};

export default function VoiceAgentContent() {
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [script, setScript] = useState<ScriptKey>('hoa-intro');
  const [isDialing, setIsDialing] = useState(false);
  const [callResult, setCallResult] = useState<{ success: boolean; message: string } | null>(null);

  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [selectedTranscript, setSelectedTranscript] = useState<Transcript | null>(null);
  const [isLoadingTranscripts, setIsLoadingTranscripts] = useState(false);

  const [callLog] = useState<CallLog[]>([]);

  async function initiateCall(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.startsWith('+')) {
      setCallResult({ success: false, message: 'Phone must be in E.164 format (e.g. +14805551234)' });
      return;
    }

    setIsDialing(true);
    setCallResult(null);

    try {
      const res = await fetch('/api/voice/outbound', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: phone,
          contactName: contactName || 'there',
          context: script === 'hoa-intro' ? 'hoa' : script === 'follow-up' ? 'general' : 'general',
          agentUrl: `${window.location.origin}/api/voice/ai-agent`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCallResult({ success: true, message: `Call initiated — SID: ${data.callSid}` });
        setPhone('');
        setContactName('');
      } else {
        setCallResult({ success: false, message: data.error ?? 'Failed to initiate call.' });
      }
    } catch {
      setCallResult({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsDialing(false);
    }
  }

  async function loadTranscripts() {
    setIsLoadingTranscripts(true);
    try {
      const res = await fetch('/api/voice/transcript?limit=20');
      const data = await res.json();
      setTranscripts(data.transcripts ?? []);
    } catch {
      // ignore
    } finally {
      setIsLoadingTranscripts(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">AI Voice Agent</h1>
          <p className="text-gray-400 mt-1">Axle Towing — Inbound / Outbound Call Dashboard</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Calls', value: String(MOCK_METRICS.totalCalls) },
            { label: 'Answered Rate', value: MOCK_METRICS.answeredRate },
            { label: 'Avg Duration', value: MOCK_METRICS.avgDuration },
            { label: 'Conversion Rate', value: MOCK_METRICS.conversionRate },
          ].map((m) => (
            <div key={m.label} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{m.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Outbound Call Form */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Initiate Outbound Call</h2>
            <form onSubmit={initiateCall} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Phone Number (E.164)</label>
                <input
                  type="tel"
                  placeholder="+14805551234"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Contact Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Script</label>
                <select
                  value={script}
                  onChange={(e) => setScript(e.target.value as ScriptKey)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  {SCRIPTS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              {callResult && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    callResult.success
                      ? 'bg-green-900/40 border border-green-700 text-green-300'
                      : 'bg-red-900/40 border border-red-700 text-red-300'
                  }`}
                >
                  {callResult.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isDialing}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
              >
                {isDialing ? 'Dialing...' : 'Initiate Call'}
              </button>
            </form>
          </div>

          {/* Recent Call Log */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Call Log</h2>
            {callLog.length === 0 ? (
              <p className="text-gray-500 text-sm">No calls logged yet in this session.</p>
            ) : (
              <div className="space-y-2">
                {callLog.map((c) => (
                  <div
                    key={c.callSid}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
                  >
                    <span className="text-sm text-gray-300">{c.to}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        c.status === 'completed'
                          ? 'bg-green-900 text-green-300'
                          : c.status === 'failed'
                            ? 'bg-red-900 text-red-300'
                            : 'bg-yellow-900 text-yellow-300'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Transcript Viewer */}
        <div className="mt-6 bg-gray-900 rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Transcript Viewer</h2>
            <button
              onClick={loadTranscripts}
              disabled={isLoadingTranscripts}
              className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-1.5 rounded-lg transition"
            >
              {isLoadingTranscripts ? 'Loading...' : 'Load Transcripts'}
            </button>
          </div>

          {transcripts.length === 0 && !isLoadingTranscripts && (
            <p className="text-gray-500 text-sm">No transcripts loaded. Click &quot;Load Transcripts&quot; to fetch recent calls.</p>
          )}

          {transcripts.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {/* List */}
              <div className="md:col-span-1 space-y-2">
                {transcripts.map((t) => (
                  <button
                    key={t.callSid}
                    onClick={() => setSelectedTranscript(t)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                      selectedTranscript?.callSid === t.callSid
                        ? 'bg-red-900/40 border border-red-700'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <p className="text-gray-300 font-medium truncate">{t.callSid}</p>
                    <p className="text-gray-500 text-xs">{t.savedAt.slice(0, 10)}</p>
                  </button>
                ))}
              </div>

              {/* Detail */}
              <div className="md:col-span-2 bg-gray-800 rounded-lg p-4">
                {selectedTranscript ? (
                  <>
                    <p className="text-xs text-gray-500 mb-1">
                      SID: {selectedTranscript.callSid} · Duration: {selectedTranscript.duration}s · {selectedTranscript.status}
                    </p>
                    <p className="text-gray-300 text-sm whitespace-pre-wrap">
                      {selectedTranscript.transcriptionText || '(No transcription text available)'}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm">Select a call to view its transcript.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Webhook Info */}
        <div className="mt-6 bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Webhook Configuration</h2>
          <div className="space-y-2 text-sm">
            {[
              { label: 'AI Agent (primary)', path: '/api/voice/ai-agent' },
              { label: 'IVR Menu Handler', path: '/api/voice/ai-agent/menu' },
              { label: 'AI Receptionist (after-hours)', path: '/api/voice/receptionist' },
              { label: 'Receptionist Intake', path: '/api/voice/receptionist/intake' },
              { label: 'PM Intake Sub-menu', path: '/api/voice/receptionist/pm-collect' },
              { label: 'TowBook Webhook', path: '/api/towbook/webhook' },
              { label: 'Phone System Config', path: '/api/phone-system' },
              { label: 'Call Log API', path: '/api/phone-system/call-log' },
              { label: 'Transcript Callback', path: '/api/voice/transcript' },
              { label: 'Outbound Initiation', path: '/api/voice/outbound' },
            ].map((w) => (
              <div key={w.path} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
                <span className="text-gray-400 w-40 shrink-0">{w.label}</span>
                <code className="text-green-400 font-mono">{w.path}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
