import type { CtaBandBlock } from "@/lib/cms/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({ block }: { block: CtaBandBlock }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1140px] px-[4vw]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[22px] border border-slate-200 bg-white p-8 shadow-lift lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{block.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{block.title}</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">{block.body}</p>
            </div>
            <ButtonLink link={block.cta} variant="primary" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
