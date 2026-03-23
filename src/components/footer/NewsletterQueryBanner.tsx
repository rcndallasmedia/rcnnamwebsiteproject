"use client";

import { useSearchParams } from "next/navigation";

export function NewsletterQueryBanner() {
  const searchParams = useSearchParams();
  const newsletter = searchParams.get("newsletter");

  if (newsletter === "thanks") {
    return (
      <div
        role="status"
        className="border-b border-emerald-200 bg-emerald-50 px-[4vw] py-3 text-center text-sm font-medium text-emerald-900"
      >
        Thanks — you&apos;re on the list. Check your inbox to confirm.
      </div>
    );
  }

  if (newsletter === "invalid") {
    return (
      <div
        role="alert"
        className="border-b border-amber-200 bg-amber-50 px-[4vw] py-3 text-center text-sm font-medium text-amber-950"
      >
        Please enter a valid email address.
      </div>
    );
  }

  return null;
}
