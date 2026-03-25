import type { NewsletterBlock, SiteFooter } from "@/lib/cms/types";
import Link from "next/link";
import { ChatFabDynamic } from "@/components/footer/ChatFabDynamic";
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
    <footer className="mt-10 border-t border-slate-200/80">
      <div
        id="contact"
        className="scroll-mt-24 bg-gradient-to-br from-navy-800 via-[#0c2844] to-[#071a2e] py-section text-slate-50"
      >
        <div className="section-inner flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {newsletter.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {newsletter.description}
            </p>
          </div>
          <NewsletterSubscribe
            newsletter={newsletter}
            mode={staticExport ? "static" : "api"}
            externalFormAction={newsletterFormAction}
          />
        </div>
      </div>

      <div className="bg-surface-muted/80 py-section">
        <div className="section-inner flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-sm shrink-0">
            <p className="font-display text-base font-bold text-ink">{footer.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Clear paths to worship, teaching, locations, and community—built for consistency and
              ease as we grow together.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-ink/85 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-6 border-t border-slate-200/90 pt-8 lg:border-t-0 lg:pt-0 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.platform + s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-xs font-bold text-ink shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={s.label}
                >
                  {socialGlyph[s.platform] ?? "•"}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
              {footer.legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {footer.showChatWidget ? <ChatFabDynamic /> : null}
    </footer>
  );
}
