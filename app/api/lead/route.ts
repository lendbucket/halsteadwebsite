import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 *
 * Currently logs to Vercel logs. To wire up real email delivery:
 *
 *   1. Sign up for Resend at https://resend.com (free tier: 3,000/month)
 *   2. Add RESEND_API_KEY to Vercel env vars
 *   3. Uncomment the Resend block below
 *
 * Or push to Airtable using the AIRTABLE_API_KEY env var
 * (Robert's Airtable MCP is already connected).
 */

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to Vercel logs (visible at https://vercel.com/.../logs)
    console.log("[LEAD]", {
      timestamp: new Date().toISOString(),
      type: data.type,
      ...data,
    });

    // Production wiring (uncomment when env vars are set):
    //
    // if (process.env.RESEND_API_KEY) {
    //   const { Resend } = await import("resend");
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Halstead Leads <leads@halsteadsecurity.com>",
    //     to: process.env.NOTIFY_EMAIL || "robert@halsteadsecurity.com",
    //     subject: `New ${data.type} lead: ${data.name}`,
    //     text: Object.entries(data)
    //       .map(([k, v]) => `${k}: ${v}`)
    //       .join("\n"),
    //   });
    // }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
