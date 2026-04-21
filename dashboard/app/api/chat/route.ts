import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// PPP Chat - Claude + createRequest tool, logs to Dashboard Daddy,
// creates Linear tickets, notifies Julian.
// ---------------------------------------------------------------------------

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const CLAUDE_MODEL = "claude-sonnet-4-20250514";

const CLIENT_SLUG = process.env.CLIENT_SLUG || "axel-towing";
const CLIENT_NAME = "Axel Towing";
const CLIENT_ID = "0ddf81d0-e4aa-46f2-9c7d-4018ebe7cd9e";

const DASHBOARD_SUPABASE_URL =
  process.env.DASHBOARD_SUPABASE_URL ?? "https://jrirksdiklqwsaatbhvg.supabase.co";
const DASHBOARD_SUPABASE_KEY =
  process.env.DASHBOARD_SUPABASE_ANON_KEY ??
  process.env.DASHBOARD_SUPABASE_SERVICE_ROLE_KEY ??
  "";

function dashboardClient() {
  return createClient(DASHBOARD_SUPABASE_URL, DASHBOARD_SUPABASE_KEY);
}

const PPP_TOOLS = [
  {
    name: "createRequest",
    description:
      "Create a Linear task when the client asks for any change, new feature, bug fix, content update, or project work.",
    input_schema: {
      type: "object" as const,
      properties: {
        title: { type: "string", description: "Short, clear task title (max 100 chars)" },
        description: {
          type: "string",
          description: "Detailed description - what the client wants, page(s) affected, context.",
        },
        page: { type: "string", description: "Which page or area this affects (optional)" },
        priority: {
          type: "number",
          enum: [1, 2, 3, 4],
          description: "1=urgent, 2=high, 3=normal, 4=low",
        },
      },
      required: ["title", "description", "priority"],
    },
  },
];

async function logChatMessage(
  sender: "client" | "agent",
  message: string,
  linearIssueId?: string | null
) {
  try {
    const sb = dashboardClient();
    await sb.from("portal_chat_messages").insert({
      client_id: CLIENT_ID,
      sender,
      message,
      attachments: [],
      linear_issue_id: linearIssueId ?? null,
    });
  } catch (err) {
    console.error("[PPP] chat log insert failed:", err);
  }
}

async function createLinearIssue(
  title: string,
  description: string,
  priority: number,
  page: string | null
): Promise<{ id: string; identifier: string; url: string } | null> {
  const key = process.env.LINEAR_API_KEY;
  const teamId =
    process.env.LINEAR_TEAM_ID ?? "9a9d11aa-c8a5-4dc5-855c-c1da260db615";
  if (!key) return null;

  const labelQuery = `query { issueLabels(filter: { name: { in: ["client-request","chat-request","${CLIENT_SLUG}"] } }) { nodes { id } } }`;
  const labelRes = await fetch("https://api.linear.app/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: key },
    body: JSON.stringify({ query: labelQuery }),
  });
  const labelData = await labelRes.json();
  const labelIds: string[] = (labelData?.data?.issueLabels?.nodes ?? []).map(
    (l: { id: string }) => l.id
  );

  const pageLine = page ? `**Page:** ${page}\n\n` : "";
  const fullDesc = `**Client Request via PPP Chat**\n\n${pageLine}${description}\n\n---\n*Submitted by ${CLIENT_NAME} via portal chat widget*`;

  const mutation = `mutation($input: IssueCreateInput!) { issueCreate(input:$input) { success issue { id identifier url } } }`;
  const res = await fetch("https://api.linear.app/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: key },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          title,
          description: fullDesc,
          priority,
          teamId,
          labelIds: labelIds.length ? labelIds : undefined,
        },
      },
    }),
  });
  const data = await res.json();
  return data?.data?.issueCreate?.issue ?? null;
}

const SYSTEM_PROMPT = `You are the AI project assistant for ${CLIENT_NAME} (Elliott, owner), a client of AI Acrobatics (Julian Bradley's agency).

PROJECT CONTEXT
Axel Towing is a private-property towing and impound company in the Phoenix metro. Customers are property managers, HOAs, apartment complexes, and commercial properties (NOT vehicle owners). AI Acrobatics builds:
- Public website: axletowing.com (English + Spanish, property-manager-focused content)
- Operations dashboard for dispatch and lead management
- GoHighLevel CRM, A2P SMS, voice AI integrations

CRITICAL RULES (do NOT violate):
- NEVER discuss specific dollar pricing on the website
- NEVER help the client publish content that helps vehicle owners fight tows
- All blog content targets property managers, HOAs, commercial properties

YOUR JOB
- Answer project-status questions briefly and directly. Elliott is brief, direct, low-tech.
- When the client describes ANY change, fix, feature, or task, IMMEDIATELY call the createRequest tool. Don't ask for confirmation unless ambiguous.
- After creating a task, confirm it and say the team will follow up. Keep to 2-3 sentences.
- Never promise specific timelines. Say "the team will review and provide an estimate."
- For billing or contract questions, direct them to Julian at julian@aiacrobatics.com or (619) 509-0699.

PRIORITY for createRequest:
  1 = urgent (site/dashboard broken / blocking dispatch)
  2 = high (client-facing errors / time-sensitive)
  3 = normal (most change requests)
  4 = low (nice-to-have polish)`;

type WidgetBody = {
  messages?: Array<{ role: string; content: string }>;
  message?: string;
  type?: string;
  editRequest?: { page?: string; description?: string };
  attachmentNames?: string[];
};

export async function POST(req: NextRequest) {
  const body: WidgetBody = await req.json().catch(() => ({}));

  // Accept both shapes:
  //   messages-thread: { messages: [{role, content}, ...] }  (Volare's existing widget)
  //   single:         { message, type, editRequest, attachmentNames }  (TBT-style widget)
  const threadMessages = (body.messages ?? [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

  const singleMessage = body.editRequest?.description ?? body.message ?? "";
  const latestUserText =
    threadMessages.length > 0
      ? threadMessages[threadMessages.length - 1].content
      : singleMessage;
  const page = body.editRequest?.page ?? null;

  if (!latestUserText) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  await logChatMessage("client", latestUserText);

  // Effective messages to send to Claude
  const claudeMessages =
    threadMessages.length > 0
      ? threadMessages
      : [
          {
            role: "user" as const,
            content: page ? `[Page: ${page}]\n\n${latestUserText}` : latestUserText,
          },
        ];

  if (!ANTHROPIC_API_KEY) {
    const fallbackTitle =
      latestUserText.slice(0, 90) + (latestUserText.length > 90 ? "..." : "");
    const task = await createLinearIssue(
      `[Client chat] ${fallbackTitle}`,
      `Client sent via PPP chat widget. AI unavailable - needs manual triage:\n\n"${latestUserText}"`,
      3,
      page
    );
    const reply = task
      ? `Got it - I've logged your message and created a ticket (${task.identifier}). The team will follow up within 24 hours.`
      : "Got it - we received your message. The team will follow up within 24 hours.";
    await logChatMessage("agent", reply, task?.id ?? null);
    return new Response(reply, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const claudeRes = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: PPP_TOOLS,
      messages: claudeMessages,
    }),
  });

  if (!claudeRes.ok) {
    const errText = await claudeRes.text();
    console.error("[PPP] Claude API error:", errText);
    const fallbackTitle =
      latestUserText.slice(0, 90) + (latestUserText.length > 90 ? "..." : "");
    const task = await createLinearIssue(
      `[Client chat] ${fallbackTitle}`,
      `Client sent via PPP chat widget. AI unavailable - needs manual triage:\n\n"${latestUserText}"`,
      3,
      page
    );
    const reply = task
      ? `Got it - I've logged your message and created a ticket (${task.identifier}). The team will follow up within 24 hours.`
      : "Got it - we received your message. The team will follow up within 24 hours.";
    await logChatMessage("agent", reply, task?.id ?? null);
    return new Response(reply, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const claudeData = await claudeRes.json();
  let responseText = "";
  let linearTask: { id: string; identifier: string; url: string } | null = null;

  for (const block of claudeData.content ?? []) {
    if (block.type === "text") {
      responseText += block.text;
    } else if (block.type === "tool_use" && block.name === "createRequest") {
      const input = block.input as {
        title: string;
        description: string;
        priority: number;
        page?: string;
      };
      linearTask = await createLinearIssue(
        input.title,
        input.description,
        input.priority,
        input.page ?? page
      );

      const followUp = await fetch(ANTHROPIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: CLAUDE_MODEL,
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          tools: PPP_TOOLS,
          messages: [
            ...claudeMessages,
            { role: "assistant", content: claudeData.content },
            {
              role: "user",
              content: [
                {
                  type: "tool_result",
                  tool_use_id: block.id,
                  content: linearTask
                    ? `Task created: ${linearTask.identifier} - "${input.title}"`
                    : "Task creation failed (team will follow up manually).",
                },
              ],
            },
          ],
        }),
      });
      if (followUp.ok) {
        const fu = await followUp.json();
        const newText = (fu.content ?? [])
          .filter((b: { type: string }) => b.type === "text")
          .map((b: { text: string }) => b.text)
          .join("");
        if (newText) responseText = newText;
      }
    }
  }

  const finalReply =
    responseText ||
    "Got it - we have your request logged and the team will follow up shortly.";
  await logChatMessage("agent", finalReply, linearTask?.id ?? null);

  return new Response(finalReply, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
