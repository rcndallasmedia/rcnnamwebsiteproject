import Link from "next/link";
import type { CmsLink } from "@/lib/cms/types";

type Variant = "primary" | "ghost" | "ghostDark";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-ink shadow-card transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  ghostDark:
    "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
};

export function ButtonLink({
  link,
  variant = "primary",
  className = "",
}: {
  link: CmsLink;
  variant?: Variant;
  className?: string;
}) {
  const cls = `${styles[variant]} ${className}`.trim();

  if (link.external) {
    return (
      <a
        href={link.href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  );
}
