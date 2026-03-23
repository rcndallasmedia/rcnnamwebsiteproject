# RCN North America — Next.js site

Production-oriented Next.js (App Router) scaffold with **CMS-shaped content models**, **Zod validation**, and reusable UI sections inspired by modern enterprise marketing sites.

## Stack

- **Next.js 15** + **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- **Zod** for validating CMS payloads (`src/lib/cms/schemas.ts`)

## Key folders

| Path | Purpose |
|------|---------|
| `src/lib/cms/types.ts` | TypeScript interfaces mirroring CMS documents |
| `src/lib/cms/schemas.ts` | Zod schemas (use on webhook/API ingest) |
| `src/content/home.ts` | Seed/fallback `HomePageDocument` |
| `src/lib/content/getHomePage.ts` | Server loader — swap for Sanity/Contentful fetch |
| `src/components/**` | Reusable sections (`Hero`, `MinistryTabs`, `SermonCarousel`, `LocationsMap`, `Footer`, …) |

## Components

- **`Hero`** — full-bleed hero, glass panel, quick links
- **`MinistryTabs`** — accessible tab experience with CMS-driven tabs
- **`SermonCarousel`** — horizontal rail + arrows + keyboard support
- **`LocationsMap`** — abstract map with CMS-driven coordinates
- **`Footer`** — newsletter band + link columns + optional chat FAB

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish to GitHub Pages

This app uses **static export** (`output: 'export'`) so it can be hosted on GitHub Pages (no Node server). A workflow is included.

### One-time setup

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
3. (Optional) **Settings → Secrets and variables → Actions → Variables:** add `NEWSLETTER_FORM_ACTION` with your Formspree/Basin/etc. form URL so the footer newsletter works on static hosting. If omitted, the form shows a demo message and can still be wired later.

### Deploy

- Push to `main` or `master`, or run the workflow manually (**Actions → Deploy to GitHub Pages → Run workflow**).
- The site appears at:
  - **Project repo** (most cases): `https://<user>.github.io/<repo>/`
  - **User site** (repo name exactly `<user>.github.io`): `https://<user>.github.io/`

The workflow sets `BASE_PATH` and `NEXT_PUBLIC_SITE_URL` automatically for those two cases.

### Local static build (sanity check)

```bash
# Same as CI for a project repo named "my-repo":
BASE_PATH=/my-repo NEXT_PUBLIC_SITE_URL=https://YOUR_USER.github.io/my-repo npm run build:static
```

Output is in `out/`. For a user/org `*.github.io` repo, omit `BASE_PATH`:

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR_USER.github.io npm run build:static
```

**Notes**

- `public/.nojekyll` disables Jekyll so GitHub Pages serves the `_next` assets folder.
- API routes are **not** deployed on Pages. With `STATIC_EXPORT=true`, the footer uses `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` or a client-side fallback (see `NewsletterSubscribe.tsx`).
- Normal `npm run build` / `npm run dev` still work without `STATIC_EXPORT` (includes `/api/newsletter`).

## CMS integration

1. Fetch your homepage document from the CMS.
2. `parseHomePageDocument(json)` in `src/lib/cms/index.ts` to validate at the edge/build.
3. Map fields to the same shape as `HomePageDocument` in `src/lib/cms/types.ts`.

## Legacy static demo

The original single-file demo lives in `legacy-static/` for reference.
