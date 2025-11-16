import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "lagg312@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

export async function POST(request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY. Configure it in your environment variables." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      reply_to: email,
      subject: `Nuevo mensaje del portfolio: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 24px; background:#050014; color:#f8f9ff;">
          <h2 style="margin-top:0;">Nuevo mensaje del portfolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="white-space:pre-line;"><strong>Mensaje:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos." },
      { status: 500 },
    );
  }
}
