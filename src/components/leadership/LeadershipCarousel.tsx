"use client";

import type { LeadershipCarouselBlock } from "@/lib/cms/types";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

export function LeadershipCarousel({ block }: { block: LeadershipCarouselBlock }) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.75 * dir, behavior: "smooth" });
  }, []);

  return (
    <section
      id="leadership"
      className="scroll-mt-24 border-t border-slate-200/60 bg-surface-muted/40 py-section md:py-section-lg"
    >
      <div className="section-inner">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{block.title}</h2>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-ink shadow-sm transition hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Previous leaders"
              onClick={() => scrollByDir(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-ink shadow-sm transition hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Next leaders"
              onClick={() => scrollByDir(1)}
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto touch-pan-x pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Leadership carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollByDir(1);
            if (e.key === "ArrowLeft") scrollByDir(-1);
          }}
        >
          {block.leaders.map((leader) => {
            const body = (
              <>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lift">
                  {leader.image ? (
                    <Image
                      src={leader.image.url}
                      alt={leader.image.alt}
                      fill
                      className="object-cover grayscale transition duration-300 ease-out hover:grayscale-0 motion-reduce:transition-none motion-reduce:grayscale-0"
                      sizes="220px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">
                      Photo
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-sm font-bold text-ink">{leader.name}</h3>
                <p className="text-xs text-muted">{leader.role}</p>
              </>
            );

            return leader.href ? (
              <Link
                key={leader.id}
                href={leader.href}
                className="block w-[220px] flex-none snap-start"
              >
                {body}
              </Link>
            ) : (
              <div key={leader.id} className="w-[220px] flex-none snap-start">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
