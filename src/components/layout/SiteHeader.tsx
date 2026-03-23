"use client";

import { useHeaderScrolled } from "@/hooks/useHeaderScrolled";
import type { NavItem, SiteSettings } from "@/lib/cms/types";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

/** Premium ease-out curve (similar to many enterprise marketing sites) */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function MegaMenuIcon({ index }: { index: number }) {
  const v = index % 4;
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c2744] text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10"
      aria-hidden
    >
      {v === 0 ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v15.512A7.98 7.98 0 016 21c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v15.512A7.98 7.98 0 0118 21a8.25 8.25 0 01-8-8.25V6.042z" />
        </svg>
      ) : v === 1 ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ) : v === 2 ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )}
    </span>
  );
}

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

  const intro =
    item.megaMenuIntro ??
    `Explore ${item.label.toLowerCase()}—clear paths to what you need next.`;

  return (
    <div
      id={panelId}
      role="region"
      aria-hidden={!open}
      aria-label={`${item.label} menu`}
      className="absolute left-1/2 top-full z-40 mt-4 w-[min(94vw,720px)] -translate-x-1/2"
    >
      <div
        className={[
          "origin-top rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_24px_80px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl will-change-[opacity,transform]",
          "motion-reduce:transition-none",
          "transition-[opacity,transform] duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0",
        ].join(" ")}
        style={{
          transitionTimingFunction: EASE,
        }}
      >
        <div className="flex flex-col gap-0 sm:flex-row">
          <div className="border-slate-100 sm:w-[min(100%,240px)] sm:border-r sm:py-8 sm:pl-6 sm:pr-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{intro}</p>
          </div>
          <div className="flex-1 p-4 sm:p-6 sm:pl-6">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {item.children.map((child, i) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="group flex gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-px hover:border-slate-200/80 hover:bg-slate-50/90 hover:shadow-md motion-reduce:hover:translate-y-0"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <MegaMenuIcon index={i} />
                  <span className="min-w-0">
                    <span className="block font-semibold text-[#0c2744] transition-colors duration-200 group-hover:text-[#0a4d6e]">
                      {child.label}
                    </span>
                    {child.description ? (
                      <span className="mt-0.5 block text-sm text-slate-500">{child.description}</span>
                    ) : null}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
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
    closeTimer.current = setTimeout(() => setOpenMega(null), 220);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? "border-slate-200/80 bg-white/90 text-ink shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl"
          : "border-white/15 bg-[rgba(6,22,42,0.45)] text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-4 px-[4vw] py-3.5">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-bold sm:text-base">
          <span
            className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_6px_rgba(23,193,236,0.15)]"
            aria-hidden
          />
          <span className="max-w-[200px] leading-tight sm:max-w-none">{settings.siteName}</span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className={
              scrolled
                ? "flex items-center gap-0.5 rounded-full border border-slate-200/90 bg-white/95 px-2 py-1.5 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
                : "flex items-center gap-0.5 rounded-full border border-white/20 bg-white/10 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md"
            }
          >
            <nav className="flex items-center gap-1" aria-label="Primary">
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
                      className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        openMega === item.label
                          ? scrolled
                            ? "bg-slate-100 text-ink"
                            : "bg-white/20 text-white"
                          : scrolled
                            ? "text-ink/85 hover:bg-slate-50/90 hover:text-ink"
                            : "text-white/90 hover:bg-white/10"
                      }`}
                      aria-expanded={openMega === item.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMega((v) => (v === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out ${
                          openMega === item.label ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
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
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? "text-ink/85 hover:bg-slate-50/90 hover:text-ink"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {settings.signUpCta ? (
            <Link
              href={settings.signUpCta.href}
              className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-ink shadow-glass transition-[filter,transform] duration-200 ease-out hover:brightness-[1.03] hover:shadow-md active:scale-[0.98] motion-reduce:transition-none"
            >
              {settings.signUpCta.label}
            </Link>
          ) : null}
        </div>

        <button
          type="button"
          className={`rounded-lg border px-3 py-2 text-sm font-medium lg:hidden ${
            scrolled ? "border-slate-200 text-ink" : "border-white/50 text-white"
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
