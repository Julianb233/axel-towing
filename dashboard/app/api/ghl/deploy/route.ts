import { NextResponse } from "next/server";

/* ── GHL API Config ────────────────────────────────────────────── */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const GHL_API_TOKEN = process.env.GHL_API_TOKEN || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_TOKEN}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
  };
}

function isConfigured(): boolean {
  return !!(GHL_API_TOKEN && GHL_LOCATION_ID);
}

/* ── Types ─────────────────────────────────────────────────────── */

interface DeployRequest {
  action:
    | "create-email-template"
    | "send-email"
    | "send-sms"
    | "add-to-campaign"
    | "add-to-workflow"
    | "status";
  // For create-email-template
  name?: string;
  subject?: string;
  html?: string;
  // For send-email / send-sms
  contactId?: string;
  message?: string;
  emailFrom?: string;
  // For campaign / workflow
  contactIds?: string[];
  campaignId?: string;
  workflowId?: string;
  // Template reference (for logging/tracking)
  templateId?: string;
}

/* ── Handlers ──────────────────────────────────────────────────── */

async function createEmailTemplate(data: DeployRequest) {
  const resp = await fetch(`${GHL_BASE}/emails/builder`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      name: data.name,
      type: "html",
      subject: data.subject || "",
      content: data.html || "",
    }),
  });
  const json = await resp.json();
  if (!resp.ok) throw new Error(json.message || `HTTP ${resp.status}`);
  return { success: true, templateId: json.id, data: json };
}

async function sendEmail(data: DeployRequest) {
  if (!data.contactId) throw new Error("contactId is required");
  if (!data.subject) throw new Error("subject is required");
  if (!data.html) throw new Error("html is required");

  const body: Record<string, string> = {
    type: "Email",
    contactId: data.contactId,
    subject: data.subject,
    html: data.html,
    emailMessageType: "html",
  };
  if (data.emailFrom) body.emailFrom = data.emailFrom;

  const resp = await fetch(`${GHL_BASE}/conversations/messages`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify(body),
  });
  const json = await resp.json();
  if (!resp.ok) throw new Error(json.message || `HTTP ${resp.status}`);
  return { success: true, messageId: json.id || json.messageId, data: json };
}

async function sendSms(data: DeployRequest) {
  if (!data.contactId) throw new Error("contactId is required");
  if (!data.message) throw new Error("message is required");

  const resp = await fetch(`${GHL_BASE}/conversations/messages`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      type: "SMS",
      contactId: data.contactId,
      message: data.message,
    }),
  });
  const json = await resp.json();
  if (!resp.ok) throw new Error(json.message || `HTTP ${resp.status}`);
  return { success: true, messageId: json.id || json.messageId, data: json };
}

async function addToCampaign(data: DeployRequest) {
  if (!data.campaignId) throw new Error("campaignId is required");
  const contactIds = data.contactIds || (data.contactId ? [data.contactId] : []);
  if (contactIds.length === 0) throw new Error("At least one contactId is required");

  const results = [];
  for (const cid of contactIds) {
    const resp = await fetch(
      `${GHL_BASE}/contacts/${cid}/campaigns/${data.campaignId}`,
      { method: "POST", headers: ghlHeaders(), body: "{}" }
    );
    const json = await resp.json();
    results.push({ contactId: cid, success: resp.ok, data: json });
    // Rate limit: small delay between calls
    if (contactIds.length > 1) await new Promise((r) => setTimeout(r, 300));
  }
  return { success: results.every((r) => r.success), results };
}

async function addToWorkflow(data: DeployRequest) {
  if (!data.workflowId) throw new Error("workflowId is required");
  const contactIds = data.contactIds || (data.contactId ? [data.contactId] : []);
  if (contactIds.length === 0) throw new Error("At least one contactId is required");

  const results = [];
  for (const cid of contactIds) {
    const resp = await fetch(
      `${GHL_BASE}/contacts/${cid}/workflow/${data.workflowId}`,
      {
        method: "POST",
        headers: ghlHeaders(),
        body: JSON.stringify({
          eventStartTime: new Date().toISOString(),
        }),
      }
    );
    const json = await resp.json();
    results.push({ contactId: cid, success: resp.ok, data: json });
    if (contactIds.length > 1) await new Promise((r) => setTimeout(r, 300));
  }
  return { success: results.every((r) => r.success), results };
}

async function getStatus() {
  // Quick health check: try listing campaigns
  const resp = await fetch(
    `${GHL_BASE}/campaigns/?locationId=${GHL_LOCATION_ID}`,
    { method: "GET", headers: ghlHeaders() }
  );
  const json = await resp.json();
  return {
    connected: resp.ok,
    configured: isConfigured(),
    locationId: GHL_LOCATION_ID,
    campaignCount: json.campaigns?.length ?? 0,
    error: resp.ok ? null : json.message,
  };
}

/* ── Route handler ─────────────────────────────────────────────── */

export async function POST(request: Request) {
  try {
    const data: DeployRequest = await request.json();

    // If GHL is not configured, return a dry-run response
    if (!isConfigured()) {
      return NextResponse.json({
        success: false,
        dryRun: true,
        message:
          "GHL API is not configured. Set GHL_API_TOKEN and GHL_LOCATION_ID environment variables.",
        wouldExecute: {
          action: data.action,
          details: data,
        },
      });
    }

    let result;
    switch (data.action) {
      case "create-email-template":
        result = await createEmailTemplate(data);
        break;
      case "send-email":
        result = await sendEmail(data);
        break;
      case "send-sms":
        result = await sendSms(data);
        break;
      case "add-to-campaign":
        result = await addToCampaign(data);
        break;
      case "add-to-workflow":
        result = await addToWorkflow(data);
        break;
      case "status":
        result = await getStatus();
        break;
      default:
        return NextResponse.json(
          { success: false, error: `Unknown action: ${data.action}` },
          { status: 400 }
        );
    }

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[GHL Deploy API]", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

/* ── GET handler for status check ──────────────────────────────── */

export async function GET() {
  if (!isConfigured()) {
    return NextResponse.json({
      connected: false,
      configured: false,
      message:
        "GHL API is not configured. Set GHL_API_TOKEN and GHL_LOCATION_ID environment variables.",
    });
  }

  try {
    const result = await getStatus();
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({
      connected: false,
      configured: true,
      error: message,
    });
  }
}
