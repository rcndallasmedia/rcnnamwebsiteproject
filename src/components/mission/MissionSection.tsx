import type { MissionBlock } from "@/lib/cms/types";
import Image from "next/image";
import { MetricCounter } from "@/components/mission/MetricCounter";
import { Reveal } from "@/components/ui/Reveal";

export function MissionSection({ mission }: { mission: MissionBlock }) {
  const gallery = mission.gallery ?? [];

  return (
    <section id="mission" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid max-w-[1140px] items-start gap-12 px-[4vw] lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:min-h-[420px]">
            {gallery[0] ? (
              <div className="relative col-span-2 row-span-2 min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[280px]">
                <Image
                  src={gallery[0].url}
                  alt={gallery[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
            {gallery.slice(1, 5).map((img) => (
              <div
                key={img.url}
                className="relative min-h-[120px] overflow-hidden rounded-2xl sm:min-h-[132px]"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{mission.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {mission.title}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">{mission.body}</p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted">
              {mission.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {mission.stats.map((s) => (
              <Reveal key={s.id}>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lift">
                  <h3 className="text-sm font-semibold text-ink">{s.label}</h3>
                  <MetricCounter value={s.value} suffix={s.suffix ?? "+"} />
                  <p className="text-sm text-muted">{s.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
