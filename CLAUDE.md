# Rebel Alliance Website

## What
A v1 teaser/landing site for [Rebel Alliance](https://hbillings.github.io/rebel-alliance-11ty-site/), a global pro bono civic tech movement led by Tamara Billings. The site's purpose is to give Tamara a URL she can share with government partners, potential volunteers, and supporters.

## For Whom
Tamara and the Rebel Alliance core team. xian is coordinating the website launch effort.

## Why
Tamara gets weekly requests from people wanting to learn more, but has no website to point them to. Government officials (e.g., UAE) are asking. This is blocking the organization's growth.

## Tech Stack
- **Generator:** Eleventy (11ty) v3
- **Templates:** Nunjucks (.njk)
- **CSS:** Vanilla CSS with custom properties (no preprocessor)
- **Fonts:** Signika Negative (Google Fonts, light weight)
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Newsletter:** Google Apps Script webhook (email → Google Sheet)
- **Repo:** github.com/hbillings/rebel-alliance-11ty-site

## Build Commands
- `npm install` — install dependencies
- `npm start` — dev server with live reload
- `npm run build` — production build
- `npm run build-ghpages` — build with /rebel-alliance-11ty-site/ pathPrefix

## Design Conventions
- **Background:** #242424
- **Text:** white
- **Accent colors:** Teal dull (#2ACDDA), Teal bright (#00F6FE), Citron (#E7F33B), Magenta (#C100F3)
- **Font:** Signika Negative, light weight, fluid typography via clamp()
- **Layout:** Mobile-first, responsive breakpoints at 480px, 580px, 768px, 1024px
- **Buttons:** Citron background, uppercase, 4rem border-radius, 2px white border

## Constraints
- Keep it simple — this is a v1 teaser, not a full site
- Mobile-first (shared at conferences)
- Zero or near-zero JavaScript
- Must work on GitHub Pages

## Session Logs
See `docs/logs/` for per-session records.
