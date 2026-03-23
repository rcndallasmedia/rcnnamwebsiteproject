import type { HomePageDocument } from "@/lib/cms/types";

/**
 * Seed / fallback home document. In production, load the same shape from your CMS
 * and run through `parseHomePageDocument` in `getHomePage()`.
 */
export const homePageData: HomePageDocument = {
  _id: "home-en",
  _type: "home_page",
  slug: "/",
  seo: {
    title: "Remnant Christian Network North America",
    description:
      "Restoring the apostolic mandate through worship, teaching, and community across North America.",
  },
  settings: {
    siteName: "Remnant Christian Network North America",
    primaryNav: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Events", href: "/events" },
      {
        label: "Resources",
        href: "/resources",
        children: [
          {
            label: "Sermon library",
            href: "/resources/sermons",
            description: "Series, topics, and speakers",
          },
          {
            label: "Livestream",
            href: "/livestream",
            description: "Join services online",
          },
          {
            label: "Photo gallery",
            href: "/resources/gallery",
            description: "Moments from our gatherings",
          },
          {
            label: "Prayer & testimonies",
            href: "/connect",
            description: "Share requests and stories",
          },
        ],
      },
      { label: "Partnership", href: "/partnership" },
      { label: "Give", href: "/give" },
      { label: "Contact", href: "/contact" },
    ],
    signUpCta: { label: "Sign Up", href: "/signup" },
  },
  hero: {
    _type: "hero",
    eyebrow: "Welcome to RCN North America",
    title: "Restoring the Apostolic Mandate",
    subtitle:
      "A unified experience for worship, discipleship, outreach, and community impact across North America.",
    backgroundImage: {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80",
      alt: "Congregation with hands raised in worship",
    },
    primaryCta: { label: "Watch Livestream", href: "/livestream" },
    secondaryCta: { label: "Explore Mission", href: "#mission" },
    quickLinks: [
      { label: "Sermons", href: "#sermons" },
      { label: "Give", href: "/give" },
      { label: "New Here", href: "/new-here" },
      { label: "Locations", href: "#locations" },
    ],
  },
  sections: [
    {
      _type: "proof_strip",
      items: [
        { id: "1", value: "50+", label: "North American touchpoints" },
        { id: "2", value: "24/7", label: "Prayer & digital engagement" },
        { id: "3", value: "100%", label: "Scripture-centered teaching" },
        { id: "4", value: "1 mission", label: "Apostolic restoration" },
      ],
    },
  ],
  mission: {
    _type: "mission",
    eyebrow: "About us",
    title: "Our Mission",
    body:
      "We are committed to rejuvenating and restoring the apostolic order—raising disciples, strengthening families, and serving cities with excellence.",
    bullets: [
      "Intentional discipleship pathways",
      "Scripture-centered teaching",
      "Operational excellence in ministry service",
    ],
    stats: [
      {
        id: "s1",
        label: "Weekly Impact",
        value: 26,
        description: "Active ministry expressions",
      },
      {
        id: "s2",
        label: "North American Reach",
        value: 42,
        description: "States and provinces engaged",
      },
      {
        id: "s3",
        label: "Community Touchpoints",
        value: 150,
        description: "Annual outreach activations",
      },
      {
        id: "s4",
        label: "Leadership Network",
        value: 300,
        description: "Leaders and volunteers in service",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80",
        alt: "Community fellowship",
      },
      {
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        alt: "Prayer gathering",
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
        alt: "Worship service",
      },
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
        alt: "Small group discussion",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
        alt: "Community meal",
      },
    ],
  },
  ministries: {
    _type: "ministry_tabs",
    eyebrow: "Ministry Experience",
    title: "Organized like a modern platform",
    intro:
      "Each ministry lane is easy to discover—similar to enterprise product hubs—with clear CTAs and focused storytelling.",
    tabs: [
      {
        id: "worship",
        label: "Worship",
        title: "Worship & Prayer",
        description:
          "Centralized schedules, livestream access, and devotion resources aligned to weekly rhythms.",
        cta: { label: "View schedule", href: "/events" },
      },
      {
        id: "teaching",
        label: "Teaching",
        title: "Sermons & Teaching Library",
        description:
          "Topic-based filtering, series archives, and guided tracks for every stage of maturity.",
        cta: { label: "Browse sermons", href: "/resources/sermons" },
      },
      {
        id: "outreach",
        label: "Outreach",
        title: "Community Outreach",
        description:
          "Campaign pages, volunteer sign-up, and testimony capture connected to your CRM or inbox.",
        cta: { label: "Serve with us", href: "/serve" },
      },
      {
        id: "care",
        label: "Care",
        title: "Pastoral Care",
        description:
          "Prayer requests, counseling touchpoints, and follow-up workflows with accountable teams.",
        cta: { label: "Request care", href: "/care" },
      },
    ],
  },
  sermons: {
    _type: "sermon_carousel",
    eyebrow: "Recent Sermons",
    title: "Teaching that equips the saints",
    subtitle: "Swipe or use arrows to explore featured messages.",
    items: [
      {
        id: "sermon-1",
        title: "The Rebirth of Apostolic Christianity",
        speaker: "Apostle Arome Osayi",
        date: "2025-02-09",
        href: "/sermons/rebirth-apostolic-christianity",
        duration: "58 min",
        thumbnail: {
          url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
          alt: "Speaker teaching",
        },
      },
      {
        id: "sermon-2",
        title: "Faith in Action",
        speaker: "RCN Teaching Team",
        date: "2025-02-02",
        href: "/sermons/faith-in-action",
        duration: "49 min",
        thumbnail: {
          url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
          alt: "Bible study",
        },
      },
      {
        id: "sermon-3",
        title: "Living by the Spirit",
        speaker: "RCN Teaching Team",
        date: "2025-01-26",
        href: "/sermons/living-by-the-spirit",
        duration: "52 min",
        thumbnail: {
          url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80",
          alt: "Congregation worship",
        },
      },
      {
        id: "sermon-4",
        title: "The Principles of Headship",
        speaker: "RCN Teaching Team",
        date: "2025-01-19",
        href: "/sermons/principles-of-headship",
        duration: "61 min",
        thumbnail: {
          url: "https://images.unsplash.com/photo-1544427920-c49ccfd8553e?auto=format&fit=crop&w=800&q=80",
          alt: "Teaching moment",
        },
      },
    ],
  },
  locations: {
    _type: "locations_map",
    eyebrow: "Locations",
    title: "RCN North America Locations",
    description: "Find a hub near you. Dots are illustrative—swap for a real map provider in production.",
    points: [
      { id: "p1", label: "Toronto", region: "CA", xPercent: 52, yPercent: 28, href: "/locations/toronto" },
      { id: "p2", label: "Chicago", region: "US", xPercent: 42, yPercent: 38, href: "/locations/chicago" },
      { id: "p3", label: "Houston", region: "US", xPercent: 36, yPercent: 58, href: "/locations/houston" },
      { id: "p4", label: "Atlanta", region: "US", xPercent: 48, yPercent: 52, href: "/locations/atlanta" },
      { id: "p5", label: "Los Angeles", region: "US", xPercent: 18, yPercent: 48, href: "/locations/los-angeles" },
      { id: "p6", label: "New York", region: "US", xPercent: 58, yPercent: 36, href: "/locations/new-york" },
    ],
  },
  leadership: {
    _type: "leadership_carousel",
    title: "Leadership Team",
    leaders: [
      {
        id: "l1",
        name: "Apostle Arome Osayi",
        role: "Vision & Apostolic Oversight",
        href: "/leadership/arome-osayi",
        image: {
          url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
          alt: "Apostle Arome Osayi",
        },
      },
      {
        id: "l2",
        name: "Pastor Jane Doe",
        role: "Executive Director",
        href: "/leadership/jane-doe",
        image: {
          url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
          alt: "Pastor Jane Doe",
        },
      },
      {
        id: "l3",
        name: "Pastor John Smith",
        role: "Regional Overseer",
        href: "/leadership/john-smith",
        image: {
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
          alt: "Pastor John Smith",
        },
      },
      {
        id: "l4",
        name: "Min. Sarah Lee",
        role: "Worship & Creative",
        href: "/leadership/sarah-lee",
        image: {
          url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
          alt: "Minister Sarah Lee",
        },
      },
    ],
  },
  partnership: {
    _type: "cta_band",
    eyebrow: "Partnership",
    title: "Build with us",
    body:
      "Partner through giving, volunteering, and city initiatives. Transparent impact reporting can plug in here.",
    cta: { label: "Give now", href: "/give" },
  },
  newsletter: {
    _type: "newsletter",
    title: "Sign up for RCN newsletters",
    description: "Weekly highlights, events, and teaching drops—no spam.",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    actionKey: "newsletter_default",
  },
  footer: {
    tagline: "Remnant Christian Network North America",
    columns: [
      {
        heading: "Ministry",
        links: [
          { label: "About", href: "/about" },
          { label: "Events", href: "/events" },
          { label: "Sermons", href: "/resources/sermons" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "Prayer", href: "/prayer" },
          { label: "Testimonies", href: "/testimonies" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Partner",
        links: [
          { label: "Give", href: "/give" },
          { label: "Partnership", href: "/partnership" },
        ],
      },
    ],
    social: [
      { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
      { platform: "x", href: "https://x.com", label: "X" },
      { platform: "youtube", href: "https://youtube.com", label: "YouTube" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "tiktok", href: "https://tiktok.com", label: "TikTok" },
    ],
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    showChatWidget: true,
  },
};
