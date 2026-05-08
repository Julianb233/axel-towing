'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PhoneSystemStatus {
  system: { provider: string; previousProvider: string; migrationStatus: string; version: string };
  status: { isBusinessHours: boolean; currentTimeMST: string; activeRoute: string };
  routing: {
    mainNumber: string;
    dispatchNumber: string;
    rules: { name: string; action: string; webhook?: string; phone?: string }[];
  };
  callTracking: {
    enabled: boolean;
    features: string[];
    webhooks: Record<string, string>;
  };
  crmIntegration: {
    leadCapture: boolean;
    callLogging: boolean;
    smsNotifications: boolean;
    features: string[];
  };
  environmentVars: Record<string, string>;
}

interface CallRecord {
  sid: string;
  from: string;
  to: string;
  direction: string;
  status: string;
  duration: string;
  startTime: string;
}

export default function PhoneSystemPage() {
  const [systemStatus, setSystemStatus] = useState<PhoneSystemStatus | null>(null);
  const [calls, setCalls] = useState<CallRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [callsLoading, setCallsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStatus();
  }, []);

  async function fetchStatus() {
    try {
      const res = await fetch('/api/phone-system');
      if (!res.ok) throw new Error('Failed to fetch');
      setSystemStatus(await res.json());
    } catch {
      setError('Failed to load phone system status');
    } finally {
      setLoading(false);
    }
  }

  async function fetchCalls() {
    setCallsLoading(true);
    try {
      const res = await fetch('/api/phone-system/call-log?limit=20');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setCalls(data.calls ?? []);
    } catch {
      setError('Failed to load call logs');
    } finally {
      setCallsLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading phone system...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Phone System</h1>
            <p className="text-gray-400 mt-1">
              Axle Towing — Call Routing, Tracking &amp; CRM Integration
            </p>
          </div>
          <Link
            href="/voice-agent"
            className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition"
          >
            Voice Agent Dashboard →
          </Link>
        </div>

        {error && (
          <div className="mb-6 bg-red-900/40 border border-red-700 text-red-300 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {systemStatus && (
          <>
            {/* Status Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatusCard
                label="Provider"
                value={systemStatus.system.provider.toUpperCase()}
                sub={`(from ${systemStatus.system.previousProvider.toUpperCase()})`}
              />
              <StatusCard
                label="Current Route"
                value={systemStatus.status.activeRoute.replace(/-/g, ' ')}
                sub={systemStatus.status.currentTimeMST + ' MST'}
                highlight={systemStatus.status.isBusinessHours ? 'green' : 'amber'}
              />
              <StatusCard
                label="Migration"
                value={systemStatus.system.migrationStatus}
                highlight="green"
              />
              <StatusCard label="Version" value={`v${systemStatus.system.version}`} />
            </div>

            {/* Routing Rules */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-4">Call Routing Rules</h2>
              <div className="space-y-3">
                {systemStatus.routing.rules.map((rule) => (
                  <div
                    key={rule.name}
                    className="flex flex-col md:flex-row md:items-center gap-2 bg-gray-800 rounded-lg px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white md:w-1/3">{rule.name}</span>
                    <span className="text-sm text-gray-400 md:w-1/3">{rule.action}</span>
                    <code className="text-xs text-green-400 font-mono md:w-1/3 truncate">
                      {rule.webhook ?? rule.phone ?? '—'}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-column: CRM Integration + Env Vars */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* CRM Integration */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-white mb-4">CRM Integration</h2>
                <div className="space-y-2">
                  {systemStatus.crmIntegration.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environment Status */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Environment Status</h2>
                <div className="space-y-2">
                  {Object.entries(systemStatus.environmentVars).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-400 font-mono">{key}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          value === 'configured'
                            ? 'bg-green-900 text-green-300'
                            : value.includes('missing')
                              ? 'bg-red-900 text-red-300'
                              : 'bg-yellow-900 text-yellow-300'
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Webhook Endpoints */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-4">Webhook Endpoints</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {Object.entries(systemStatus.callTracking.webhooks).map(([label, url]) => (
                  <div key={label} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
                    <span className="text-xs text-gray-400 w-32 shrink-0 capitalize">
                      {label.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <code className="text-xs text-green-400 font-mono truncate">{url}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Call Log */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Recent Call Log</h2>
                <button
                  onClick={fetchCalls}
                  disabled={callsLoading}
                  className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-1.5 rounded-lg transition disabled:opacity-50"
                >
                  {callsLoading ? 'Loading...' : 'Load Calls'}
                </button>
              </div>

              {calls.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Click &quot;Load Calls&quot; to fetch recent call records from Twilio.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 text-xs uppercase border-b border-gray-800">
                        <th className="text-left py-2 px-2">Direction</th>
                        <th className="text-left py-2 px-2">From</th>
                        <th className="text-left py-2 px-2">To</th>
                        <th className="text-left py-2 px-2">Status</th>
                        <th className="text-left py-2 px-2">Duration</th>
                        <th className="text-left py-2 px-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calls.map((call) => (
                        <tr key={call.sid} className="border-b border-gray-800/50">
                          <td className="py-2 px-2">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                call.direction === 'inbound'
                                  ? 'bg-blue-900 text-blue-300'
                                  : 'bg-purple-900 text-purple-300'
                              }`}
                            >
                              {call.direction}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-gray-300 font-mono text-xs">{call.from}</td>
                          <td className="py-2 px-2 text-gray-300 font-mono text-xs">{call.to}</td>
                          <td className="py-2 px-2">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                call.status === 'completed'
                                  ? 'bg-green-900 text-green-300'
                                  : call.status === 'failed' || call.status === 'busy'
                                    ? 'bg-red-900 text-red-300'
                                    : 'bg-yellow-900 text-yellow-300'
                              }`}
                            >
                              {call.status}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-gray-400">{call.duration}s</td>
                          <td className="py-2 px-2 text-gray-500 text-xs">
                            {call.startTime ? new Date(call.startTime).toLocaleString() : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatusCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: 'green' | 'amber' | 'red';
}) {
  const highlightColors = {
    green: 'text-green-400',
    amber: 'text-amber-400',
    red: 'text-red-400',
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className={`text-lg font-bold mt-1 capitalize ${highlight ? highlightColors[highlight] : 'text-white'}`}>
        {value}
      </p>
      {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
    </div>
  );
}
