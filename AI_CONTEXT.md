# AI Context: BALANCE DIET Pune (Token-Optimized)

> Quick-reference context file for AI agents & LLMs to eliminate exploratory file reads and minimize token consumption.

## 1. Project Overview
- **Name**: BALANCE DIET (Pune)
- **Domain**: Local fresh healthy diet bowl seller & meal delivery service based in Pune, India.
- **Agency**: Designed & Developed by NRAVIXA (`https://nravixa.vercel.app`).
- **Core Functionality**:
  - Signature diet bowl menu with macronutrient breakdowns (Kcal, Protein, Carbs, Fats).
  - WhatsApp 1-click ordering to `+91 9637173122`.
  - Lead information & doorstep delivery booking form (Pune areas: Kothrud, Baner, Wakad, Viman Nagar, Hinjewadi, FC Road, etc.).
  - Daily & monthly meal subscriptions (Workweek 6-Day & Monthly 24-Day).
  - Pune central kitchen delivery radius & Google Maps integration.
  - Indian BMI & health metrics calculator.
  - Social proof: Instagram (`@balance.diet.pune`), Facebook, Google presence.

## 2. Color Palette (From GlowUp Aesthetic Palette)
- **Turquoise**: `#447F98` (RGB: 68, 127, 152) — Primary Brand Accent
- **Slate Blue**: `#629BB5` (RGB: 98, 155, 182) — Secondary / Hover State
- **Platinum**: `#DADEE1` (RGB: 218, 222, 227) — Base Foreground Text & Borders
- **Glacier**: `#B9D8E1` (RGB: 185, 219, 225) — Ambient Glow & Subtle Highlights
- **Ice Blue**: `#D6EBF3` (RGB: 214, 235, 243) — Header Text Glow & Pill Borders
- **Canvas Base**: `#080F15` / `#0D1720` — Atmospheric Luxury Dark Canvas

## 3. Tech Stack
- **Framework**: Next.js 16.4.5 (App Router, Turbopack, Partial Prefetching)
- **Styling**: Tailwind CSS v4 with custom `@theme`
- **Typography**: Playfair Display (Serif display headlines) + Geist (Sans-serif body)
- **Animation / Smooth Scroll**: Lenis smooth scroll provider + Lucide React icons
- **Runtime / Language**: React 19.3.0, TypeScript 5 Strict Mode

## 4. Key Directory Layout
```text
src/
├── app/
│   ├── globals.css          # Theme tokens (Turquoise/Glacier/Canvas) & Lenis styles
│   ├── layout.tsx           # Playfair Display, JSON-LD Schema.org, SmoothScroll wrapper
│   ├── page.tsx             # Main landing experience
│   └── sitemap.ts           # Dynamic XML sitemap
├── components/
│   ├── bowls/               # BowlCatalog.tsx, SubscriptionTiers.tsx
│   ├── calculators/         # BmiCalculator.tsx
│   ├── forms/               # OrderLeadForm.tsx
│   ├── layout/              # Navbar.tsx, Footer.tsx (with NRAVIXA presence)
│   ├── map/                 # DeliveryMapSection.tsx
│   ├── providers/           # SmoothScroll.tsx (Lenis)
│   ├── social/              # SocialProofSection.tsx
│   └── ui/                  # FaqAccordion.tsx
├── lib/
│   └── constants.ts         # Brand config, phone 9637173122, bowls catalog, social links
└── types/
    └── index.ts             # Strict TypeScript domain interfaces
```
