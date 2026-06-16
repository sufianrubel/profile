import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { getResendClient } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/utils";
import { contactSchema } from "@/lib/validations";

export const runtime = "nodejs";

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit({ key: `contact:${ip}`, limit: 5, windowMs: 60 * 60 * 1000 });

    if (!limit.success) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const { name, email, message, company, sourcePage } = parsed.data;

    if (company) {
      // Honeypot spam protection: return a generic success response without sending email.
      return NextResponse.json({ ok: true, message: "Thank you. Your message has been received." });
    }

    const resend = getResendClient();
    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    const timestamp = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const safeSource = escapeHtml(sourcePage || siteConfig.url);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "New Portfolio Inquiry — Abu Sufian Rubel",
      text: `New portfolio inquiry\n\nName: ${name}\nEmail: ${email}\nTimestamp: ${timestamp}\nSource: ${sourcePage || siteConfig.url}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 16px">New Portfolio Inquiry — Abu Sufian Rubel</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <p><strong>Source:</strong> ${safeSource}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0" />
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true, message: "Thank you. Your message has been sent." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
