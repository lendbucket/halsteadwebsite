import { NextResponse } from "next/server";

// This is a minimal lead capture endpoint for v1.
// In production, this should:
//   1. Send an email to the team via Resend or SendGrid
//   2. Push the lead to Airtable / your CRM of choice
//   3. Trigger a Slack notification for fast response
//
// For now, it just logs and returns success. Replace with real wiring
// once you have RESEND_API_KEY or AIRTABLE credentials in env.

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to Vercel logs for now
    console.log("[LEAD]", {
      timestamp: new Date().toISOString(),
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone,
      location: data.location,
      message: data.message,
    });

    // TODO: Replace with real email/CRM wiring
    // Example with Resend:
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "leads@halsteadsecurity.com",
    //   to: "robert@halsteadsecurity.com",
    //   subject: `New ${data.type} lead: ${data.name}`,
    //   text: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
