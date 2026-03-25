"use client";

import type { MinistryTabsBlock } from "@/lib/cms/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { useCallback, useId, useState, type KeyboardEvent } from "react";

export function MinistryTabs({ block }: { block: MinistryTabsBlock }) {
  const [activeId, setActiveId] = useState(block.tabs[0]?.id ?? "");
  const tabListId = useId();

  const active = block.tabs.find((t) => t.id === activeId) ?? block.tabs[0];
  const activeIndex = Math.max(
    0,
    block.tabs.findIndex((t) => t.id === activeId)
  );

  const onTabKeyDown = useCallback(
    (e: KeyboardEvent, index: number) => {
      if (!block.tabs.length) return;
      const last = block.tabs.length - 1;
      let next = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = index >= last ? 0 : index + 1;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = index <= 0 ? last : index - 1;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = last;
      } else {
        return;
      }
      const tab = block.tabs[next];
      if (tab) setActiveId(tab.id);
      const el = document.getElementById(`${tabListId}-tab-${next}`);
      el?.focus();
    },
    [block.tabs, tabListId]
  );

  return (
    <section
      id="ministries"
      className="scroll-mt-24 border-y border-sky-200/35 bg-gradient-to-b from-surface-tinted/40 via-surface to-surface-muted/50 section-y"
    >
      <div className="section-inner">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{block.eyebrow}</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {block.title}
            </h2>
            {block.intro ? <p className="mt-4 leading-relaxed text-muted">{block.intro}</p> : null}
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label={block.title}
          >
            {block.tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`${tabListId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={tab.id === activeId}
                aria-controls={`${tabListId}-panel`}
                tabIndex={tab.id === activeId ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  tab.id === activeId
                    ? "border-sky-400/80 bg-sky-100/95 text-ink shadow-sm"
                    : "border-slate-200/90 bg-surface text-muted hover:border-sky-200 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {active ? (
          <Reveal>
            <article
              id={`${tabListId}-panel`}
              role="tabpanel"
              aria-labelledby={`${tabListId}-tab-${activeIndex}`}
              className="mt-6 rounded-2xl border border-slate-200/90 bg-surface p-8 shadow-lift md:p-10"
            >
              <h3 className="font-display text-xl font-bold text-ink">{active.title}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{active.description}</p>
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
