"use client";

import type { MinistryTabsBlock } from "@/lib/cms/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";

export function MinistryTabs({ block }: { block: MinistryTabsBlock }) {
  const [activeId, setActiveId] = useState(block.tabs[0]?.id ?? "");

  const active = block.tabs.find((t) => t.id === activeId) ?? block.tabs[0];

  return (
    <section id="ministries" className="scroll-mt-24 border-y border-sky-100/80 bg-gradient-to-b from-sky-50/80 via-white to-slate-50 py-20">
      <div className="mx-auto max-w-[1140px] px-[4vw]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{block.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {block.title}
            </h2>
            {block.intro ? <p className="mt-4 text-muted leading-relaxed">{block.intro}</p> : null}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {block.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  tab.id === activeId
                    ? "border-sky-300 bg-sky-100 text-ink"
                    : "border-slate-200 bg-white text-muted hover:border-sky-200"
                }`}
                aria-pressed={tab.id === activeId}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {active ? (
          <Reveal>
            <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-lift">
              <h3 className="text-xl font-bold text-ink">{active.title}</h3>
              <p className="mt-3 max-w-3xl text-muted leading-relaxed">{active.description}</p>
              {active.cta ? (
                <div className="mt-6">
                  <ButtonLink link={active.cta} variant="ghostDark" />
                </div>
              ) : null}
            </article>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
