import type { LocationsMapBlock, MapPoint } from "@/lib/cms/types";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

function MapDot({ point }: { point: MapPoint }) {
  const wrapStyle = {
    left: `${point.xPercent}%`,
    top: `${point.yPercent}%`,
  } as const;

  const dot = (
    <span
      className="block h-2.5 w-2.5 rounded-full bg-[#6de6ff] shadow-[0_0_0_8px_rgba(109,230,255,0.12),0_0_20px_rgba(109,230,255,0.65)] animate-pulse-dot"
      title={point.label}
    />
  );

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={wrapStyle}
    >
      {point.href ? (
        <Link
          href={point.href}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center"
          aria-label={point.label}
        >
          {dot}
        </Link>
      ) : (
        dot
      )}
    </div>
  );
}

export function LocationsMap({ block }: { block: LocationsMapBlock }) {
  return (
    <section id="locations" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-[1140px] px-[4vw]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{block.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {block.title}
            </h2>
            {block.description ? (
              <p className="mt-3 text-muted leading-relaxed">{block.description}</p>
            ) : null}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-10 h-[340px] overflow-hidden rounded-[22px] border border-sky-200/60 bg-gradient-to-b from-navy-700 to-[#0a1b31] shadow-card">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(28,199,243,0.14) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,255,255,0.06),transparent_55%)]" />

            <div className="relative h-full w-full">
              {block.points.map((p) => (
                <MapDot key={p.id} point={p} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
