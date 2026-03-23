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

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-[4vw] py-24 text-center text-white">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-soft">
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="mx-auto max-w-[900px] text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
        </Reveal>
        {hero.subtitle ? (
          <Reveal>
            <p className="mx-auto mt-5 max-w-[640px] text-pretty text-base text-slate-200/90 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink link={hero.primaryCta} variant="primary" />
            {hero.secondaryCta ? (
              <ButtonLink link={hero.secondaryCta} variant="ghost" />
            ) : null}
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 max-w-[920px] rounded-3xl border border-white/25 bg-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-10">
            <p className="text-sm font-medium text-slate-100/90">
              Join us live, explore teaching, and connect with a location near you.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto -mt-10 mb-6 w-full max-w-[1140px] px-[4vw]">
        <Reveal>
          <div className="grid gap-3 rounded-2xl border border-white/25 bg-white/10 p-3 shadow-glass backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {hero.quickLinks.map((q) => (
              <Link
                key={q.href + q.label}
                href={q.href}
                className="rounded-xl border border-white/15 bg-gradient-to-b from-[rgba(22,46,74,0.55)] to-[rgba(16,33,54,0.45)] px-4 py-4 text-center text-sm font-semibold text-slate-50 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
