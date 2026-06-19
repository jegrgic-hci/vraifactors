interface Env {
  SMTP2GO_API_KEY: string;
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

  try {
    const sendRes = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Smtp2go-Api-Key": context.env.SMTP2GO_API_KEY,
      },
      body: JSON.stringify({
        sender: "vraifactors <contact@vraifactors.com>",
        to: ["jegrgic@gmail.com"],
        subject: `New contact from ${name}`,
        text_body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        custom_headers: [{ header: "Reply-To", value: email }],
      }),
    });

    if (!sendRes.ok) {
      return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    const result = (await sendRes.json()) as { data?: { succeeded?: number } };
    if (!result.data?.succeeded) {
      return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
};
