import { NextResponse } from "next/server";
import { Resend } from "resend";
import { JOB_POSITIONS } from "@/lib/jobs";

const resendApiKey = process.env.RESEND_API_KEY;
const HIRING_EMAIL = process.env.HIRING_EMAIL || "axletowing@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "careers@axletowing.com";

interface ApplicationPayload {
  position: string;
  name: string;
  email: string;
  phone: string;
  answers: Record<string, string>;
}

function computeLeadScore(position: string, answers: Record<string, string>): number {
  const job = JOB_POSITIONS.find((j) => j.slug === position);
  if (!job) return 0;

  let score = 50; // base score for passing pre-qual

  for (const q of job.preQualQuestions) {
    const val = answers[q.id];
    if (!val || !q.options) continue;
    const opt = q.options.find((o) => o.value === val);
    if (!opt) continue;

    // Disqualified answers should never reach here, but safety check
    if (!opt.qualified) return 0;

    // Bonus points for strong answers
    if (position === "tow-truck-driver") {
      if (q.id === "experience" && val === "experienced") score += 20;
      if (q.id === "experience" && val === "some") score += 10;
      if (q.id === "driving-record" && val === "clean") score += 10;
      if (q.id === "availability" && val === "flexible") score += 10;
      if (q.id === "license" && val === "yes") score += 5;
    }

    if (position === "sales-representative") {
      if (q.id === "sales-experience" && val === "5plus") score += 20;
      if (q.id === "sales-experience" && val === "2to4") score += 10;
      if (q.id === "industry" && val === "direct") score += 15;
      if (q.id === "industry" && val === "related") score += 8;
      if (q.id === "compensation" && val === "yes") score += 5;
      if (q.id === "start-date" && val === "immediately") score += 5;
      if (q.id === "start-date" && val === "2weeks") score += 3;
    }
  }

  return Math.min(score, 100);
}

function scoreLabel(score: number): string {
  if (score >= 80) return "HIGH PRIORITY";
  if (score >= 60) return "GOOD FIT";
  return "REVIEW NEEDED";
}

function buildEmailBody(data: ApplicationPayload, score: number): string {
  const job = JOB_POSITIONS.find((j) => j.slug === data.position);
  const label = scoreLabel(score);

  const lines = [
    `NEW JOB APPLICATION — ${label} (Score: ${score}/100)`,
    ``,
    `Position: ${job?.title || data.position}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    ``,
    `--- Pre-Qualification Answers ---`,
  ];

  if (job) {
    for (const q of job.preQualQuestions) {
      const val = data.answers[q.id];
      if (!val) continue;
      const opt = q.options?.find((o) => o.value === val);
      lines.push(`${q.question}: ${opt?.label || val}`);
    }
  }

  lines.push(``);
  lines.push(`Lead Score: ${score}/100 (${label})`);
  lines.push(`Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })}`);

  return lines.join("\n");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ApplicationPayload;

    if (!body.position || !body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const score = computeLeadScore(body.position, body.answers || {});
    const label = scoreLabel(score);
    const emailBody = buildEmailBody(body, score);

    const job = JOB_POSITIONS.find((j) => j.slug === body.position);
    const subject = `[${label}] New Application: ${job?.title || body.position} — ${body.name}`;

    // Send email notification
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: HIRING_EMAIL,
        subject,
        text: emailBody,
      });
      if (error) {
        console.error("Email send error:", error.message);
      }
    } else {
      console.warn("RESEND_API_KEY not configured — logging application:");
      console.log(emailBody);
    }

    return NextResponse.json({
      success: true,
      score,
      label,
    });
  } catch (err) {
    console.error("Application API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
