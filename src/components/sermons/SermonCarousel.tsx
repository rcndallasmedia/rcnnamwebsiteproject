"use client";

import type { SermonCarouselBlock } from "@/lib/cms/types";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

export function SermonCarousel({ block }: { block: SermonCarouselBlock }) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 520) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  return (
    <section id="sermons" className="scroll-mt-24 bg-gradient-to-b from-navy-800 to-[#0b2541] py-20 text-slate-50">
      <div className="mx-auto max-w-[1140px] px-[4vw]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-soft">
              {block.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{block.title}</h2>
            {block.subtitle ? (
              <p className="mt-2 max-w-xl text-sm text-slate-300">{block.subtitle}</p>
            ) : null}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Previous sermons"
              onClick={() => scrollByDir(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Next sermons"
              onClick={() => scrollByDir(1)}
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Sermon carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollByDir(1);
            if (e.key === "ArrowLeft") scrollByDir(-1);
          }}
        >
          {block.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative min-w-[min(100%,280px)] max-w-[320px] flex-[0_0_85%] snap-start overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#163f67] via-[#103357] to-[#0f2a46] shadow-glass sm:flex-[0_0_45%] lg:flex-[0_0_32%]"
            >
              {item.thumbnail ? (
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.thumbnail.url}
                    alt={item.thumbnail.alt}
                    fill
                    className="object-cover opacity-90 transition group-hover:scale-[1.03] group-hover:opacity-100"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a32]/90 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl backdrop-blur-md">
                    ▶
                  </span>
                </div>
              ) : null}
              <div className="space-y-1 p-5">
                <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-white">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300">
                  {item.speaker ? <span>{item.speaker}</span> : null}
                  {item.duration ? <span>{item.duration}</span> : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
