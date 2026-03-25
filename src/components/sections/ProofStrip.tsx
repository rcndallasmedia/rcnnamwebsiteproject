import type { ProofStripBlock } from "@/lib/cms/types";
import { Reveal } from "@/components/ui/Reveal";

export function ProofStrip({ block }: { block: ProofStripBlock }) {
  return (
    <section className="border-y border-slate-200/70 bg-surface">
      <div className="section-inner grid gap-5 py-12 sm:grid-cols-2 sm:gap-6 md:py-14 lg:grid-cols-4">
        {block.items.map((item) => (
          <Reveal key={item.id}>
            <div className="rounded-2xl border border-slate-100/90 bg-gradient-to-br from-surface-muted/90 to-white p-6 shadow-lift">
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink tabular-nums">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
