# GitHub Copilot Instructions - Balance Diet Pune

## Token Efficiency Rules
1. Respond with precise, minimal code explanations. Omit chit-chat and boilerplates.
2. When suggesting code updates, provide only the changed blocks or concise diffs.
3. Do not parse or scan lockfiles (`package-lock.json`), `.next/`, or image assets.

## Project Framework & Conventions
- **Framework**: Next.js 16+ App Router (`src/app/`).
- **React**: React 19. All components are React Server Components (RSC) unless marked with `'use client'`.
- **CSS**: Tailwind CSS 4 with Turbopack loaders.
- **TypeScript**: Strict type-checking enabled. No `any` types.
- **Routing**: File-based routing (`src/app/**/page.tsx`, `layout.tsx`, `route.ts`).
- **Application Scope**: Health, diet consultations, nutrition plans, BMI/calorie calculators, appointment booking for Balance Diet Pune.

