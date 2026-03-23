import { NextResponse } from "next/server";

/**
 * Placeholder endpoint for CMS-driven newsletter integrations (Mailchimp, Brevo, etc.).
 * Uses a redirect so a plain HTML form POST works without client JS.
 */
export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return NextResponse.redirect(`${origin}/?newsletter=invalid`, { status: 303 });
  }

  // TODO: validate email, dedupe, send to ESP using `actionKey`
  return NextResponse.redirect(`${origin}/?newsletter=thanks`, { status: 303 });
}
