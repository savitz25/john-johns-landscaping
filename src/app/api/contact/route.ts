import { NextResponse } from "next/server";
import { BRAND } from "@/lib/brand";
import {
  customerConfirmationEmail,
  ownerNotificationEmail,
  type ContactPayload,
} from "@/lib/email-templates";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function env(name: string, fallback = ""): string {
  const v = process.env[name];
  return v == null || v === "" ? fallback : v;
}

function getConfig() {
  return {
    apiKey: env("RESEND_API_KEY"),
    // Prefer verified domain: JLuca Landscaping <hello@jlucalandscaping.com>
    from: env(
      "EMAIL_FROM",
      `${BRAND.name} <onboarding@resend.dev>`,
    ),
    forwardTo: env("EMAIL_FORWARD_TO", "savitz25@gmail.com"),
    siteUrl: env("SITE_URL", BRAND.siteUrl).replace(/\/$/, ""),
  };
}

async function sendResendEmail(opts: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<{ id?: string }> {
  const { apiKey } = getConfig();
  if (!apiKey) {
    const err = new Error("RESEND_API_KEY is not configured") as Error & {
      code?: string;
    };
    err.code = "NO_API_KEY";
    throw err;
  }

  const payload: Record<string, unknown> = {
    from: opts.from,
    to: Array.isArray(opts.to) ? opts.to : [opts.to],
    subject: opts.subject,
    html: opts.html,
  };
  if (opts.text) payload.text = opts.text;
  if (opts.replyTo) payload.reply_to = opts.replyTo;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = (await res.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
    error?: string;
  };

  if (!res.ok) {
    const err = new Error(
      body.message || body.error || `Resend error ${res.status}`,
    ) as Error & { status?: number; body?: unknown };
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body;
}

function parseBody(raw: unknown): ContactPayload | null {
  if (!raw || typeof raw !== "object") return null;
  const b = raw as Record<string, unknown>;
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const plan = String(b.plan ?? "").trim();
  const message = String(b.message ?? "").trim();

  if (!name || !email || !phone || !plan) return null;
  if (!EMAIL_RE.test(email)) return null;
  if (name.length > 120 || phone.length > 40 || plan.length > 80) return null;
  if (message.length > 5000) return null;

  return { name, email, phone, plan, message };
}

export async function POST(request: Request) {
  try {
    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const data = parseBody(raw);
    if (!data) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please provide a valid name, email, phone, and plan.",
        },
        { status: 400 },
      );
    }

    const cfg = getConfig();
    // JPG is more reliable than SVG across email clients (e.g. Gmail).
    const logoUrl = `${cfg.siteUrl}${BRAND.logoEmailPath}`;

    const ownerMail = ownerNotificationEmail(data, cfg.siteUrl, logoUrl);
    const customerMail = customerConfirmationEmail(data, cfg.siteUrl, logoUrl);

    // Owner lead email is required; customer confirmation is best-effort.
    const ownerResult = await sendResendEmail({
      from: cfg.from,
      to: cfg.forwardTo,
      replyTo: data.email,
      subject: ownerMail.subject,
      html: ownerMail.html,
      text: ownerMail.text,
    });

    let customerId: string | undefined;
    let customerError: string | undefined;
    try {
      const customerResult = await sendResendEmail({
        from: cfg.from,
        to: data.email,
        replyTo: cfg.forwardTo,
        subject: customerMail.subject,
        html: customerMail.html,
        text: customerMail.text,
      });
      customerId = customerResult.id;
    } catch (err) {
      // Common when domain isn't verified: Resend only allows sending to the account email.
      customerError =
        err instanceof Error ? err.message : "Customer confirmation failed";
      console.warn("[api/contact] customer confirmation skipped:", customerError);
    }

    return NextResponse.json({
      ok: true,
      id: ownerResult.id,
      customerId,
      customerConfirmation: !customerError,
    });
  } catch (err) {
    console.error("[api/contact]", err);
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code?: string }).code)
        : "";
    const status =
      err && typeof err === "object" && "status" in err
        ? Number((err as { status?: number }).status)
        : 500;
    const message =
      err instanceof Error ? err.message : "Failed to send email";

    return NextResponse.json(
      {
        ok: false,
        error:
          code === "NO_API_KEY"
            ? "Email service is not configured yet."
            : message,
      },
      { status: code === "NO_API_KEY" ? 500 : status || 500 },
    );
  }
}
