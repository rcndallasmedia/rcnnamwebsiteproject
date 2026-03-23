"use client";

import type { NewsletterBlock } from "@/lib/cms/types";
import { useRouter } from "next/navigation";

type Props = {
  newsletter: NewsletterBlock;
  /** Set at build time: API route (Node) vs static hosting */
  mode: "api" | "static";
  /** For static mode: full URL (Formspree, Basin, etc.) */
  externalFormAction?: string;
};

export function NewsletterSubscribe({ newsletter, mode, externalFormAction }: Props) {
  const router = useRouter();

  if (mode === "api") {
    return (
      <form
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
        action="/api/newsletter"
        method="post"
      >
        <label htmlFor="footer-email" className="sr-only">
          Email
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={newsletter.placeholder ?? "Enter your email"}
          className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <input type="hidden" name="actionKey" value={newsletter.actionKey ?? ""} />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-ink shadow-glass transition hover:brightness-105"
        >
          {newsletter.submitLabel ?? "Subscribe"}
        </button>
      </form>
    );
  }

  if (externalFormAction) {
    return (
      <form
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
        action={externalFormAction}
        method="post"
      >
        <label htmlFor="footer-email-ext" className="sr-only">
          Email
        </label>
        <input
          id="footer-email-ext"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={newsletter.placeholder ?? "Enter your email"}
          className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-ink shadow-glass transition hover:brightness-105"
        >
          {newsletter.submitLabel ?? "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const email = fd.get("email");
        if (!email || typeof email !== "string" || !email.includes("@")) {
          router.replace("?newsletter=invalid", { scroll: false });
          return;
        }
        router.replace("?newsletter=thanks", { scroll: false });
      }}
    >
      <label htmlFor="footer-email-static" className="sr-only">
        Email
      </label>
      <input
        id="footer-email-static"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={newsletter.placeholder ?? "Enter your email"}
        className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-ink shadow-glass transition hover:brightness-105"
      >
        {newsletter.submitLabel ?? "Subscribe"}
      </button>
      <p className="w-full text-xs text-slate-400 sm:order-last">
        Static demo: connect{" "}
        <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_NEWSLETTER_FORM_ACTION</code> for
        real signups (Formspree, Basin, etc.).
      </p>
    </form>
  );
}
