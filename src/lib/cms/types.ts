/**
 * CMS-ready document models for RCN North America.
 * Map these 1:1 to Sanity / Contentful / Strapi / Payload field schemas.
 */

export interface CmsImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CmsLink {
  label: string;
  href: string;
  /** If true, add rel="noopener noreferrer" and target="_blank" */
  external?: boolean;
}

export interface HeroBlock {
  _type: "hero";
  eyebrow: string;
  title: string;
  subtitle?: string;
  backgroundImage?: CmsImage;
  primaryCta: CmsLink;
  secondaryCta?: CmsLink;
  quickLinks: CmsLink[];
}

export interface StatBlock {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface MissionBlock {
  _type: "mission";
  eyebrow: string;
  title: string;
  /** Rich text: store Portable Text in CMS; resolve to HTML/markdown at build time */
  body: string;
  bullets: string[];
  stats: StatBlock[];
  /** Optional collage / gallery left column */
  gallery?: CmsImage[];
}

export interface MinistryTab {
  id: string;
  label: string;
  title: string;
  description: string;
  cta?: CmsLink;
}

export interface MinistryTabsBlock {
  _type: "ministry_tabs";
  eyebrow: string;
  title: string;
  intro?: string;
  tabs: MinistryTab[];
}

export interface SermonCard {
  id: string;
  title: string;
  speaker?: string;
  /** ISO 8601 date string */
  date?: string;
  thumbnail?: CmsImage;
  href: string;
  duration?: string;
}

export interface SermonCarouselBlock {
  _type: "sermon_carousel";
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: SermonCard[];
}

export interface MapPoint {
  id: string;
  label: string;
  region?: string;
  /** Percent positions for the abstract map illustration */
  xPercent: number;
  yPercent: number;
  href?: string;
}

export interface LocationsMapBlock {
  _type: "locations_map";
  eyebrow: string;
  title: string;
  description?: string;
  points: MapPoint[];
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  image?: CmsImage;
  href?: string;
}

export interface LeadershipCarouselBlock {
  _type: "leadership_carousel";
  title: string;
  leaders: Leader[];
}

export interface CtaBandBlock {
  _type: "cta_band";
  eyebrow: string;
  title: string;
  body: string;
  cta: CmsLink;
}

export interface NewsletterBlock {
  _type: "newsletter";
  title: string;
  description: string;
  placeholder?: string;
  submitLabel?: string;
  /** CMS key; map to env URL in API route */
  actionKey?: string;
}

export interface FooterColumn {
  heading: string;
  links: CmsLink[];
}

export type SocialPlatform =
  | "facebook"
  | "x"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface SiteFooter {
  tagline?: string;
  columns: FooterColumn[];
  social: SocialLink[];
  legalLinks: CmsLink[];
  showChatWidget?: boolean;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: MegaMenuItem[];
  /** Left-column copy in the mega menu (Medidata-style intro block) */
  megaMenuIntro?: string;
}

export interface SiteSettings {
  siteName: string;
  logo?: CmsImage;
  primaryNav: NavItem[];
  signUpCta?: CmsLink;
}

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: CmsImage;
}

/** Proof strip / stats row (enterprise homepage pattern) */
export interface ProofStat {
  id: string;
  value: string;
  label: string;
}

export interface ProofStripBlock {
  _type: "proof_strip";
  items: ProofStat[];
}

export type HomeSectionBlock =
  | ProofStripBlock
  | { _type: "spacer"; height?: "sm" | "md" };

export interface HomePageDocument {
  _id: string;
  _type: "home_page";
  slug: string;
  seo: SeoMeta;
  settings: SiteSettings;
  hero: HeroBlock;
  /** Optional sections between hero and mission */
  sections?: HomeSectionBlock[];
  mission: MissionBlock;
  ministries: MinistryTabsBlock;
  sermons: SermonCarouselBlock;
  locations: LocationsMapBlock;
  leadership?: LeadershipCarouselBlock;
  partnership: CtaBandBlock;
  newsletter: NewsletterBlock;
  footer: SiteFooter;
}
