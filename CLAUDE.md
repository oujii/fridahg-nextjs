# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Important:** This project uses Next.js 16 with React 19 — APIs and conventions differ from older versions. Check `node_modules/next/dist/docs/` when in doubt.

## Commands

```bash
npm run dev       # Dev server on http://localhost:3000
npm run build     # Production build (also type-checks)
npm run lint      # ESLint
npm run start     # Serve production build
```

No test suite exists yet.

## Architecture

This is a static Next.js 16 (App Router) rebuild of fridahg.com, migrated from Wix. All pages are statically generated at build time — no server-side data fetching.

**Data layer** — `lib/data.ts` is the single source of truth. It exports:
- `products` — 17 shop products with slugs, prices, image URLs, descriptions
- `projects` — 9 portfolio projects with slugs, images, content text
- `portfolioItems` — 12 ordered entries for the homepage grid (image + slug), extracted from the original Wix site
- `getProduct(slug)` / `getProject(slug)` — lookup helpers

All content is hardcoded here. To add/edit products or projects, edit `lib/data.ts` directly.

**Routing**
- `/` → homepage portfolio grid (`app/page.tsx`)
- `/about` → static about + education page
- `/shop` → product listing grid
- `/shop/[slug]` → product detail with image switcher and quantity (client component: `components/ProductDetail.tsx`)
- `/[project]` → catch-all for portfolio project pages (athens-rhythm-hop, owe90, kryptogam, etc.)
- `/printing-methods`, `/store-policy` → static text pages

**Client/server split** — `app/shop/[slug]/page.tsx` is a server component that handles `generateStaticParams` and `generateMetadata`, then renders `components/ProductDetail.tsx` (a `"use client"` component for the interactive quantity picker). This pattern exists because Next.js 16 disallows `generateStaticParams` in client components.

**Images** — All images are served from `static.wixstatic.com` (the original Wix CDN). This works until Frida cancels her Wix subscription, at which point images should be downloaded to `public/` and URLs updated in `lib/data.ts`. The CDN domains are whitelisted in `next.config.ts`.

**Styling** — Tailwind CSS v4 with Helvetica Neue font stack. White background throughout; no gray wrappers around images.

## Planned future work
- Stripe integration for the shop (currently "Add to Cart" shows a mailto alert)
- Sanity CMS for content editing
- Self-host images in `public/` once Wix subscription is cancelled
- DNS migration away from Wix nameservers (`ns4/ns5.wixdns.net`)
