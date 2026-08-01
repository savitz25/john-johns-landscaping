import { NextResponse } from "next/server";
import { BRAND } from "@/lib/brand";

export const runtime = "nodejs";

/**
 * Lightweight config check for ops — does not expose secrets.
 * GET /api/health
 */
export async function GET() {
  const hasResendKey = Boolean(
    process.env.RESEND_API_KEY ||
      process.env.RESEND_KEY ||
      process.env.RESEND_TOKEN,
  );
  const emailFrom =
    process.env.EMAIL_FROM || `${BRAND.name} <${BRAND.email}>`;
  const forwardTo = process.env.EMAIL_FORWARD_TO || "savitz25@gmail.com";
  const siteUrl = (process.env.SITE_URL || BRAND.siteUrl).replace(/\/$/, "");

  return NextResponse.json({
    ok: true,
    service: "jluca-landscaping-contact",
    resendConfigured: hasResendKey,
    emailFrom,
    forwardTo,
    siteUrl,
    ready: hasResendKey,
  });
}
