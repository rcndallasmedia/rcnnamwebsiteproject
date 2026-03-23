import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LeadershipCarousel } from "@/components/leadership/LeadershipCarousel";
import { LocationsMap } from "@/components/locations/LocationsMap";
import { MissionSection } from "@/components/mission/MissionSection";
import { MinistryTabs } from "@/components/ministry/MinistryTabs";
import { SermonCarousel } from "@/components/sermons/SermonCarousel";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { getHomePage } from "@/lib/content/getHomePage";
import { NewsletterQueryBanner } from "@/components/footer/NewsletterQueryBanner";
import type { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function Home() {
  const data = await getHomePage();

  return (
    <>
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-card"
      >
        Skip to content
      </a>
      <SiteHeader settings={data.settings} />
      <Suspense fallback={null}>
        <NewsletterQueryBanner />
      </Suspense>
      <main>
        <Hero hero={data.hero} />
        {data.sections?.map((section, index) => {
          if (section._type === "proof_strip") {
            return <ProofStrip key={`${section._type}-${index}`} block={section} />;
          }
          if (section._type === "spacer") {
            const h = section.height === "md" ? "h-16" : "h-10";
            return <div key={`spacer-${index}`} className={h} aria-hidden />;
          }
          return null;
        })}
        <MissionSection mission={data.mission} />
        <MinistryTabs block={data.ministries} />
        <SermonCarousel block={data.sermons} />
        <LocationsMap block={data.locations} />
        {data.leadership ? <LeadershipCarousel block={data.leadership} /> : null}
        <CtaBand block={data.partnership} />
      </main>
      <Footer footer={data.footer} newsletter={data.newsletter} />
    </>
  );
}
