import { Resend } from "resend";

export const config = {
    runtime: "edge",
};

type Env = {
    RESEND_API_KEY: string;
    CONTACT_EMAIL: string;
};

function getEnv(): Env {
    const env = (globalThis as any).process?.env;

    if (!env?.RESEND_API_KEY || !env?.CONTACT_EMAIL) {
        throw new Error("Missing environment variables");
    }

    return env as Env;
}

export default async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Missing fields" }),
                { status: 400 }
            );
        }

        const { RESEND_API_KEY, CONTACT_EMAIL } = getEnv();

        const resend = new Resend(RESEND_API_KEY);

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: CONTACT_EMAIL,
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
        });

        return new Response(
            JSON.stringify({ success: true }),
            { headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to send message" }),
            { status: 500 }
        );
    }
}
