import type { CtaBandBlock } from "@/lib/cms/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({ block }: { block: CtaBandBlock }) {
  return (
    <section className="border-t border-slate-200/60 bg-surface py-section md:py-section-lg">
      <div className="section-inner">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[22px] border border-slate-200/90 bg-gradient-to-br from-surface to-surface-muted/30 p-8 shadow-float md:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{block.eyebrow}</p>
              <h2 className="font-display mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{block.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">{block.body}</p>
            </div>
            <ButtonLink link={block.cta} variant="primary" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
