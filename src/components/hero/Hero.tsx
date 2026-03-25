import type { HeroBlock } from "@/lib/cms/types";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Hero({ hero }: { hero: HeroBlock }) {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden">
      {hero.backgroundImage ? (
        <Image
          src={hero.backgroundImage.url}
          alt={hero.backgroundImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(7,18,33,0.72)] via-[rgba(8,33,56,0.55)] to-[rgba(10,23,40,0.92)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(75,167,255,0.22),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(23,193,236,0.15),transparent_42%)]" />

      <div className="section-inner relative z-10 py-section text-center text-white md:py-section-lg">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-soft">
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display mx-auto max-w-[900px] text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {hero.title}
          </h1>
        </Reveal>
        {hero.subtitle ? (
          <Reveal>
            <p className="mx-auto mt-6 max-w-[640px] text-pretty text-base leading-relaxed text-slate-200/92 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ButtonLink link={hero.primaryCta} variant="primary" />
            {hero.secondaryCta ? (
              <ButtonLink link={hero.secondaryCta} variant="ghost" />
            ) : null}
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-14 max-w-[920px] rounded-3xl border border-white/20 bg-white/[0.08] p-8 shadow-float backdrop-blur-2xl sm:p-10">
            <p className="text-sm font-medium leading-relaxed text-slate-100/95 sm:text-[0.9375rem]">
              Join us live, explore teaching, and connect with a location near you.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="section-inner relative z-10 -mt-8 mb-8 md:-mt-10 md:mb-10">
        <Reveal>
          <div className="grid gap-3 rounded-2xl border border-white/20 bg-white/[0.07] p-3 shadow-glass backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {hero.quickLinks.map((q) => (
              <Link
                key={q.href + q.label}
                href={q.href}
                className="focus-ring rounded-xl border border-white/15 bg-gradient-to-b from-[rgba(22,46,74,0.55)] to-[rgba(16,33,54,0.45)] px-4 py-4 text-center text-sm font-semibold text-slate-50 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
