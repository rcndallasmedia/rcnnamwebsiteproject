import type { ProofStripBlock } from "@/lib/cms/types";
import { Reveal } from "@/components/ui/Reveal";

export function ProofStrip({ block }: { block: ProofStripBlock }) {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-[1140px] gap-6 px-[4vw] py-10 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item) => (
          <Reveal key={item.id}>
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 shadow-lift">
              <p className="text-3xl font-extrabold tracking-tight text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
