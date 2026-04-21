/**
 * Template Interpolation & Email Rendering
 *
 * Resolves {{contact.field}} placeholders in email/SMS templates
 * and wraps email bodies in the branded Axle Towing HTML template.
 */

import type { ContactData, EmailTemplate, SmsTemplate } from "./types";

// ─── Placeholder Resolution ─────────────────────────────────────────────────

/**
 * Resolve all {{contact.field}} placeholders in a string.
 * Falls back to empty string for missing fields.
 */
export function interpolate(template: string, contact: ContactData): string {
  return template.replace(/\{\{contact\.(\w+)\}\}/g, (_, field: string) => {
    // Map common GHL field names to our contact data
    const fieldMap: Record<string, string> = {
      first_name: contact.firstName || "",
      last_name: contact.lastName || "",
      full_name: `${contact.firstName || ""} ${contact.lastName || ""}`.trim(),
      email: contact.email || "",
      phone: contact.phone || "",
      company_name: contact.companyName || "",
      city: contact.city || "the Phoenix area",
      // Custom fields
      contract_renewal_date: contact.customFields?.["Contract Renewal Date"] || "",
      property_name: contact.customFields?.["Property Name"] || contact.companyName || "",
      property_type: contact.customFields?.["Property Type"] || "",
      referred_by: contact.customFields?.["Referred By"] || "",
    };

    return fieldMap[field] ?? (contact.customFields?.[field] || "");
  });
}

// ─── Email HTML Wrapper ─────────────────────────────────────────────────────

/**
 * Wrap a plain text email body in the branded Axle Towing HTML template.
 */
export function renderEmailHtml(subject: string, body: string): string {
  // Convert plain text to HTML paragraphs
  const htmlBody = body
    .split("\n\n")
    .map((paragraph) => {
      // Handle bullet lists
      if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
        const items = paragraph
          .split("\n")
          .filter((line) => line.startsWith("- "))
          .map((line) => `<li>${line.slice(2)}</li>`)
          .join("");
        const intro = paragraph.split("\n")[0];
        const hasIntro = !intro.startsWith("- ");
        return `${hasIntro ? `<p>${intro}</p>` : ""}<ul>${items}</ul>`;
      }
      // Handle CTA links
      if (paragraph.includes("https://axletowing.com")) {
        const linkMatch = paragraph.match(/(.*?):\s*(https:\/\/axletowing\.com\S*)/);
        if (linkMatch) {
          return `<p style="text-align:center;margin:24px 0;"><a href="${linkMatch[2]}" class="cta-btn">${linkMatch[1].trim()}</a></p>`;
        }
      }
      return `<p>${paragraph.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { margin: 0; padding: 0; background: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; }
    .container { max-width: 480px; margin: 0 auto; background: #fff; }
    .header { background: linear-gradient(135deg, #1B2A3F 0%, #243752 100%); padding: 28px 32px; text-align: center; }
    .header-text { color: #fff; font-size: 20px; font-weight: 700; letter-spacing: -0.3px; }
    .header-sub { color: #94a3b8; font-size: 12px; margin-top: 4px; letter-spacing: 0.5px; text-transform: uppercase; }
    .body { padding: 32px; }
    .body p { font-size: 15px; color: #4b5563; line-height: 1.65; margin: 0 0 16px; }
    .body ul { padding-left: 20px; margin: 0 0 16px; }
    .body li { font-size: 15px; color: #4b5563; line-height: 1.65; margin-bottom: 8px; }
    .cta-btn { display: inline-block; background: #1E6BB8; color: #fff !important; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; }
    .footer { background: #1B2A3F; padding: 24px 32px; text-align: center; }
    .footer p { color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 0 0 8px; }
    .footer a { color: #60a5fa; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-text">Axle Towing & Impound</div>
      <div class="header-sub">Professional Private Property Towing</div>
    </div>
    <div class="body">
      ${htmlBody}
    </div>
    <div class="footer">
      <p>Axle Towing & Impound<br>320 E. Pioneer St, Phoenix AZ 85040<br>480-288-5526</p>
      <p><a href="https://axletowing.com">axletowing.com</a></p>
      <p style="margin-top:16px;"><a href="{{unsubscribe_url}}">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Rendering Helpers ──────────────────────────────────────────────────────

export function renderEmail(
  template: EmailTemplate,
  contact: ContactData,
): { subject: string; text: string; html: string } {
  const subject = interpolate(template.subject, contact);
  const text = interpolate(template.body, contact);
  const html = template.html
    ? interpolate(template.html, contact)
    : renderEmailHtml(subject, text);

  return { subject, text, html };
}

export function renderSms(
  template: SmsTemplate,
  contact: ContactData,
): string {
  return interpolate(template.body, contact);
}
