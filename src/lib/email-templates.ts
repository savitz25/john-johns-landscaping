/**
 * Branded HTML email templates for JLuca Landscaping.
 * Table-based layout for broad email client support.
 */

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
};

function escapeHtml(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function brandHeader(siteUrl: string, logoUrl: string): string {
  return `
    <tr>
      <td style="background-color:#ffffff;padding:36px 28px 20px;text-align:center;">
        <a href="${escapeHtml(siteUrl)}" style="text-decoration:none;display:inline-block;line-height:0;background:transparent;">
          <img src="${escapeHtml(logoUrl)}" alt="JLuca Landscaping" width="170" style="display:block;margin:0 auto;width:170px;max-width:52vw;height:auto;border:0;outline:none;background:transparent;" />
        </a>
      </td>
    </tr>
    <tr>
      <td style="background:linear-gradient(90deg,#14532d 0%,#166534 50%,#15803d 100%);background-color:#14532d;padding:12px 32px;text-align:center;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#bbf7d0;letter-spacing:2.2px;text-transform:uppercase;">
          Your Property · Our Pride · Cliffwood, NJ
        </p>
      </td>
    </tr>
  `;
}

function brandFooter(siteUrl: string): string {
  const year = new Date().getFullYear();
  return `
    <tr>
      <td style="background-color:#052e16;padding:28px 32px;text-align:center;">
        <p style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#ffffff;">
          JLuca Landscaping
        </p>
        <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#86efac;line-height:1.6;">
          Cliffwood, New Jersey<br />
          <a href="tel:+17325976659" style="color:#bbf7d0;text-decoration:none;">(732) 597-6659</a>
          &nbsp;·&nbsp;
          <a href="mailto:hello@jlucalandscaping.com" style="color:#bbf7d0;text-decoration:none;">hello@jlucalandscaping.com</a>
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b8f7a;">
          <a href="${escapeHtml(siteUrl)}" style="color:#86efac;text-decoration:underline;">jlucalandscaping.com</a>
          &nbsp;·&nbsp; &copy; ${year} JLuca Landscaping
        </p>
      </td>
    </tr>
  `;
}

function shell(
  inner: string,
  siteUrl: string,
  logoUrl: string,
  preheader: string,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>JLuca Landscaping</title>
</head>
<body style="margin:0;padding:0;background-color:#f0fdf4;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0fdf4;padding:36px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 40px rgba(20,83,45,0.12);">
          ${brandHeader(siteUrl, logoUrl)}
          ${inner}
          ${brandFooter(siteUrl)}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Customer-facing confirmation after form submit */
export function customerConfirmationEmail(
  data: ContactPayload,
  siteUrl: string,
  logoUrl: string,
): { subject: string; html: string; text: string } {
  const firstName = data.name.split(/\s+/)[0] || data.name;
  const subject = "We received your request — JLuca Landscaping";
  const preheader = `Thanks ${firstName}! Your landscaping inquiry is confirmed. We'll be in touch soon.`;

  const messageBlock = data.message
    ? `
      <tr>
        <td style="padding:0 32px 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">
          Your message
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px;">
          <div style="background-color:#f7faf7;border-left:4px solid #16a34a;border-radius:0 12px 12px 0;padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:#1a1f1c;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </td>
      </tr>`
    : "";

  const inner = `
    <tr>
      <td style="padding:36px 32px 4px;text-align:center;">
        <div style="display:inline-block;background-color:#dcfce7;color:#14532d;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:7px 16px;border-radius:999px;">
          ✓ Inquiry received
        </div>
        <h1 style="margin:18px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:600;color:#14532d;line-height:1.25;">
          Thank you, ${escapeHtml(firstName)}!
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 36px 8px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#3d4a42;text-align:center;">
        We’ve received your request and appreciate you reaching out to
        <strong style="color:#14532d;">JLuca Landscaping</strong>.
        A member of our team will follow up shortly with next steps and availability.
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;">
          <tr>
            <td style="padding:18px 20px 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:0.1em;">
              Request summary
            </td>
          </tr>
          <tr>
            <td style="padding:4px 20px 6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:10px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;width:38%;vertical-align:top;">Plan interest</td>
                  <td style="padding:10px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#14532d;">${escapeHtml(data.plan)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-top:1px solid #dcfce7;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;vertical-align:top;">Phone</td>
                  <td style="padding:10px 0;border-top:1px solid #dcfce7;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#14532d;">${escapeHtml(data.phone)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0 14px;border-top:1px solid #dcfce7;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;vertical-align:top;">Email</td>
                  <td style="padding:10px 0 14px;border-top:1px solid #dcfce7;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#14532d;">${escapeHtml(data.email)}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    ${messageBlock}
    <tr>
      <td style="padding:8px 36px 36px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:#3d4a42;text-align:center;">
        Prefer to talk sooner? Call us at
        <a href="tel:+17325976659" style="color:#15803d;font-weight:700;text-decoration:none;">(732) 597-6659</a>
        or just reply to this email.
        <br /><br />
        <strong style="color:#14532d;">— The JLuca Landscaping Team</strong>
      </td>
    </tr>
  `;

  const text = [
    `Thank you, ${firstName}!`,
    "",
    "We've received your landscaping inquiry and will follow up shortly.",
    "",
    `Plan interest: ${data.plan}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    data.message ? `\nMessage:\n${data.message}` : "",
    "",
    "JLuca Landscaping · Cliffwood, NJ",
    "(732) 597-6659 · hello@jlucalandscaping.com",
    siteUrl,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject,
    html: shell(inner, siteUrl, logoUrl, preheader),
    text,
  };
}

/** Internal lead notification for the business owner */
export function ownerNotificationEmail(
  data: ContactPayload,
  siteUrl: string,
  logoUrl: string,
): { subject: string; html: string; text: string } {
  const subject = `New quote request from ${data.name} — ${data.plan}`;
  const preheader = `${data.name} · ${data.phone} · ${data.plan}`;

  const messageBlock = data.message
    ? `
      <tr>
        <td style="padding:0 32px 28px;">
          <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
          <div style="background-color:#f7faf7;border-left:4px solid #16a34a;border-radius:0 12px 12px 0;padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:#1a1f1c;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </td>
      </tr>`
    : "";

  const inner = `
    <tr>
      <td style="padding:32px 32px 8px;">
        <div style="display:inline-block;background-color:#fef3c7;color:#92400e;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
          New website lead
        </div>
        <h1 style="margin:14px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;color:#14532d;line-height:1.3;">
          ${escapeHtml(data.name)} requested a quote
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:12px 16px;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;width:34%;border-bottom:1px solid #e5e7eb;">Name</td>
            <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#1a1f1c;border-bottom:1px solid #e5e7eb;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;border-bottom:1px solid #e5e7eb;">Phone</td>
            <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#1a1f1c;border-bottom:1px solid #e5e7eb;">
              <a href="tel:${escapeHtml(data.phone.replace(/[^\d+]/g, ""))}" style="color:#15803d;text-decoration:none;">${escapeHtml(data.phone)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;border-bottom:1px solid #e5e7eb;">Email</td>
            <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#1a1f1c;border-bottom:1px solid #e5e7eb;">
              <a href="mailto:${escapeHtml(data.email)}" style="color:#15803d;text-decoration:none;">${escapeHtml(data.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;">Plan</td>
            <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#14532d;">${escapeHtml(data.plan)}</td>
          </tr>
        </table>
      </td>
    </tr>
    ${messageBlock}
    <tr>
      <td style="padding:0 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;text-align:center;">
        Reply directly to this email to respond to the customer.
      </td>
    </tr>
  `;

  const text = [
    "NEW WEBSITE LEAD — JLuca Landscaping",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Plan: ${data.plan}`,
    data.message ? `\nMessage:\n${data.message}` : "",
    "",
    `Source: ${siteUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject,
    html: shell(inner, siteUrl, logoUrl, preheader),
    text,
  };
}
