import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";
const NOTIFY_EMAIL =
  process.env.NOTIFY_EMAIL || "robert@halsteadsecurity.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to Vercel logs (always, regardless of Resend)
    console.log("[LEAD]", {
      timestamp: new Date().toISOString(),
      type: data.type,
      ...data,
    });

    // Send notification email via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const subject =
        data.type === "dealer-application"
          ? `Dealer application: ${data.name} (${data.location || "unknown"})`
          : `New ${data.type || "lead"}: ${data.name}`;

      const body = Object.entries(data)
        .filter(([key]) => key !== "type")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const { error } = await resend.emails.send({
        from: `Halstead Leads <${FROM_EMAIL}>`,
        to: NOTIFY_EMAIL,
        subject,
        text: `New ${data.type || "lead"} submission:\n\n${body}\n\nSubmitted at ${new Date().toISOString()}`,
      });

      if (error) {
        console.error("[RESEND ERROR]", error);
        // Still return ok since the lead was logged
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
