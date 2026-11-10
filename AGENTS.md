<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Project Agent Guidelines: Balance Diet Pune

## Token Optimization Rules
- **Direct & Concise**: Avoid preambles, greetings, or conversational filler. State the resolution or code changes directly.
- **Targeted Diffs**: Emit targeted diffs or minimal code snippets instead of rewriting whole files.
- **Ignore Token Heavy Artifacts**: Never read `package-lock.json`, `.next/`, or binary/image assets. Use `package.json` for dependencies and `AI_CONTEXT.md` for project structure.

## Architecture & Code Standards
- **App Router**: Use `src/app/` for routes, layouts, and API routes.
- **Server Components First**: Default to RSC. Add `'use client'` only for interactive state, event listeners, or client hooks.
- **Tailwind CSS v4**: Use utility classes with `@theme` support. No obsolete CSS preprocessors.
- **TypeScript Strict**: Enforce strict types, explicit props, and zero `any`.
- **Security**: Never expose private keys or environment variables. All user inputs must be validated on the server.
- **No AI Slop Badges / Eyebrows**: NEVER add decorative rounded capsule/pill badges above section headings (e.g. `[✨ text • text]`, `[🛡️ text • text]`, or uppercase eyebrow labels like `BODY METRICS`). Use clean, bold editorial headings only.

