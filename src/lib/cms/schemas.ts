import { z } from "zod";

/** Zod mirrors of CMS types — use when fetching from API/webhook to validate payloads */

export const cmsImageSchema = z.object({
  url: z.string().url(),
  alt: z.string().min(1),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const cmsLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const heroBlockSchema = z.object({
  _type: z.literal("hero"),
  eyebrow: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  backgroundImage: cmsImageSchema.optional(),
  primaryCta: cmsLinkSchema,
  secondaryCta: cmsLinkSchema.optional(),
  quickLinks: z.array(cmsLinkSchema),
});

export const statBlockSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number(),
  suffix: z.string().optional(),
  description: z.string(),
});

export const missionBlockSchema = z.object({
  _type: z.literal("mission"),
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()),
  stats: z.array(statBlockSchema),
  gallery: z.array(cmsImageSchema).optional(),
});

export const ministryTabSchema = z.object({
  id: z.string(),
  label: z.string(),
  title: z.string(),
  description: z.string(),
  cta: cmsLinkSchema.optional(),
});

export const ministryTabsBlockSchema = z.object({
  _type: z.literal("ministry_tabs"),
  eyebrow: z.string(),
  title: z.string(),
  intro: z.string().optional(),
  tabs: z.array(ministryTabSchema).min(1),
});

export const sermonCardSchema = z.object({
  id: z.string(),
  title: z.string(),
  speaker: z.string().optional(),
  date: z.string().optional(),
  thumbnail: cmsImageSchema.optional(),
  href: z.string(),
  duration: z.string().optional(),
});

export const sermonCarouselBlockSchema = z.object({
  _type: z.literal("sermon_carousel"),
  eyebrow: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  items: z.array(sermonCardSchema),
});

export const mapPointSchema = z.object({
  id: z.string(),
  label: z.string(),
  region: z.string().optional(),
  xPercent: z.number().min(0).max(100),
  yPercent: z.number().min(0).max(100),
  href: z.string().optional(),
});

export const locationsMapBlockSchema = z.object({
  _type: z.literal("locations_map"),
  eyebrow: z.string(),
  title: z.string(),
  description: z.string().optional(),
  points: z.array(mapPointSchema),
});

export const leaderSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  image: cmsImageSchema.optional(),
  href: z.string().optional(),
});

export const leadershipCarouselBlockSchema = z.object({
  _type: z.literal("leadership_carousel"),
  title: z.string(),
  leaders: z.array(leaderSchema),
});

export const ctaBandBlockSchema = z.object({
  _type: z.literal("cta_band"),
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  cta: cmsLinkSchema,
});

export const newsletterBlockSchema = z.object({
  _type: z.literal("newsletter"),
  title: z.string(),
  description: z.string(),
  placeholder: z.string().optional(),
  submitLabel: z.string().optional(),
  actionKey: z.string().optional(),
});

export const footerColumnSchema = z.object({
  heading: z.string(),
  links: z.array(cmsLinkSchema),
});

export const socialLinkSchema = z.object({
  platform: z.enum([
    "facebook",
    "x",
    "youtube",
    "instagram",
    "tiktok",
    "linkedin",
  ]),
  href: z.string().url(),
  label: z.string(),
});

export const siteFooterSchema = z.object({
  tagline: z.string().optional(),
  columns: z.array(footerColumnSchema),
  social: z.array(socialLinkSchema),
  legalLinks: z.array(cmsLinkSchema),
  showChatWidget: z.boolean().optional(),
});

export const megaMenuItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  description: z.string().optional(),
});

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  children: z.array(megaMenuItemSchema).optional(),
});

export const siteSettingsSchema = z.object({
  siteName: z.string(),
  logo: cmsImageSchema.optional(),
  primaryNav: z.array(navItemSchema),
  signUpCta: cmsLinkSchema.optional(),
});

export const seoMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: cmsImageSchema.optional(),
});

export const proofStatSchema = z.object({
  id: z.string(),
  value: z.string(),
  label: z.string(),
});

export const proofStripBlockSchema = z.object({
  _type: z.literal("proof_strip"),
  items: z.array(proofStatSchema),
});

export const homePageDocumentSchema = z.object({
  _id: z.string(),
  _type: z.literal("home_page"),
  slug: z.string(),
  seo: seoMetaSchema,
  settings: siteSettingsSchema,
  hero: heroBlockSchema,
  sections: z
    .array(
      z.discriminatedUnion("_type", [
        proofStripBlockSchema,
        z.object({
          _type: z.literal("spacer"),
          height: z.enum(["sm", "md"]).optional(),
        }),
      ])
    )
    .optional(),
  mission: missionBlockSchema,
  ministries: ministryTabsBlockSchema,
  sermons: sermonCarouselBlockSchema,
  locations: locationsMapBlockSchema,
  leadership: leadershipCarouselBlockSchema.optional(),
  partnership: ctaBandBlockSchema,
  newsletter: newsletterBlockSchema,
  footer: siteFooterSchema,
});

export type HomePageDocumentParsed = z.infer<typeof homePageDocumentSchema>;
