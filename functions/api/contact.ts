import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

interface ContactBody {
  name: string;
  email: string;
  message: string;
  token: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  let body: ContactBody;

  try {
    body = await context.request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, token } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Verify Turnstile
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: context.env.TURNSTILE_SECRET_KEY, response: token }),
    }
  );
  const { success: captchaOk } = await verifyRes.json() as { success: boolean };

  if (!captchaOk) {
    return Response.json({ error: "Captcha verification failed. Please try again." }, { status: 400 });
  }

  const resend = new Resend(context.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "vraifactors <contact@vraifactors.com>",
      to: "jegrgic@gmail.com",
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
};
