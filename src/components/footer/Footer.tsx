import type { NewsletterBlock, SiteFooter } from "@/lib/cms/types";
import Link from "next/link";
import { ChatFab } from "@/components/footer/ChatFab";
import { NewsletterSubscribe } from "@/components/footer/NewsletterSubscribe";

const staticExport = process.env.STATIC_EXPORT === "true";
const newsletterFormAction = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION?.trim() || undefined;

const socialGlyph: Record<string, string> = {
  facebook: "f",
  x: "𝕏",
  youtube: "▶",
  instagram: "◎",
  tiktok: "♪",
  linkedin: "in",
};

export function Footer({
  footer,
  newsletter,
}: {
  footer: SiteFooter;
  newsletter: NewsletterBlock;
}) {
  return (
    <footer className="mt-10">
      <div
        id="contact"
        className="scroll-mt-24 bg-gradient-to-r from-navy-800 to-[#0b2541] py-14 text-slate-50"
      >
        <div className="mx-auto flex max-w-[1140px] flex-col gap-6 px-[4vw] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{newsletter.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">{newsletter.description}</p>
          </div>
          <NewsletterSubscribe
            newsletter={newsletter}
            mode={staticExport ? "static" : "api"}
            externalFormAction={newsletterFormAction}
          />
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-10 px-[4vw] lg:flex-row lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">{footer.tagline}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Unified navigation, resource hubs, and conversion paths modeled after modern enterprise
              experiences—without losing warmth and clarity.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-wide text-muted">{col.heading}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-ink/80 hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.platform + s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-ink transition hover:border-primary/50 hover:text-primary"
                  aria-label={s.label}
                >
                  {socialGlyph[s.platform] ?? "•"}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted">
              {footer.legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {footer.showChatWidget ? <ChatFab /> : null}
    </footer>
  );
}
