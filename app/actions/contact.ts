"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactState = { success: true } | { error: string } | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const token = formData.get("cf-turnstile-response") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  // Verify Turnstile token
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return { error: "Captcha verification failed. Please try again." };
  }

  try {
    await resend.emails.send({
      from: "vraifactors <contact@vraifactors.com>",
      to: "jegrgic@gmail.com",
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again." };
  }
}
