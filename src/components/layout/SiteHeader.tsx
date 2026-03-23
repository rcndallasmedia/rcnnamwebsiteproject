"use client";

import { useHeaderScrolled } from "@/hooks/useHeaderScrolled";
import type { NavItem, SiteSettings } from "@/lib/cms/types";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

function MegaDropdown({
  item,
  open,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onClose: () => void;
}) {
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!item.children?.length) return null;

  return (
    <div
      id={panelId}
      role="region"
      aria-label={`${item.label} menu`}
      className={`absolute left-1/2 top-full z-40 mt-3 w-[min(92vw,640px)] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-card backdrop-blur-xl transition-all duration-200 ${
        open
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="group rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-primary/40 hover:bg-white hover:shadow-lift"
          >
            <p className="font-semibold text-ink group-hover:text-primary">{child.label}</p>
            {child.description ? (
              <p className="mt-1 text-sm text-muted">{child.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const scrolled = useHeaderScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 text-ink shadow-card backdrop-blur-xl"
          : "border-white/15 bg-[rgba(6,22,42,0.45)] text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-4 px-[4vw] py-4">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-bold sm:text-base">
          <span
            className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_6px_rgba(23,193,236,0.15)]"
            aria-hidden
          />
          <span className="max-w-[200px] leading-tight sm:max-w-none">{settings.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {settings.primaryNav.map((item) =>
            item.children?.length ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  clearClose();
                  setOpenMega(item.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-medium transition hover:text-primary ${
                    scrolled ? "text-ink/80" : "text-white/90"
                  }`}
                  aria-expanded={openMega === item.label}
                  onClick={() =>
                    setOpenMega((v) => (v === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <span className="text-xs" aria-hidden>
                    ▾
                  </span>
                </button>
                <MegaDropdown
                  item={item}
                  open={openMega === item.label}
                  onClose={() => setOpenMega(null)}
                />
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-primary ${
                  scrolled ? "text-ink/80" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          {settings.signUpCta ? (
            <Link
              href={settings.signUpCta.href}
              className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-ink shadow-glass transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {settings.signUpCta.label}
            </Link>
          ) : null}
        </nav>

        <button
          type="button"
          className={`rounded-lg border px-3 py-2 text-sm font-medium lg:hidden ${
            scrolled
              ? "border-slate-200 text-ink"
              : "border-white/50 text-white"
          }`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 px-[4vw] pb-4 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        } ${scrolled ? "border-slate-200 bg-white text-ink" : "bg-[rgba(6,22,42,0.92)] text-white"}`}
      >
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 py-3">
          {settings.primaryNav.map((item) => (
            <div key={item.label}>
              {item.children?.length ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {item.label}
                  </p>
                  <div className="mt-2 flex flex-col gap-2 pl-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="text-sm font-medium hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          {settings.signUpCta ? (
            <Link
              href={settings.signUpCta.href}
              className="mt-2 inline-flex w-fit rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {settings.signUpCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
