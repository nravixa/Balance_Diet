# Changelog

All notable changes to the **Balance Diet Pune** web platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Interactive BMI and Daily Calorie Target calculator.
- Diet consultation booking form with WhatsApp & email notifications.
- Diet plan showcase (Weight Loss, PCOS/PCOD, Diabetes Management, Athletic Performance).
- Client transformation testimonials and case studies.
- Local SEO and structured data (Schema.org / JSON-LD for MedicalBusiness/Dietitian).

---

## [0.1.0] - 2026-11-09

### Added
- **Core Documentation**:
  - `README.md`: Project overview, features, getting started guide, and tech stack details.
  - `CONTRIBUTING.md`: Branching strategy, conventional commit conventions, and PR checklist.
  - `ARCHITECTURE.md`: High-level system architecture, folder conventions, and server vs client component rules.
  - `CHANGELOG.md`: Standardized release notes.
- **Security Hardening**:
  - `SECURITY.md`: Vulnerability reporting process, response SLA, and contributor security guidelines.
  - `.env.example`: Secure template for environment variables with sensitive keys excluded.
  - `.gitignore`: Hardened to prevent accidental commits of `.pem`, `.key`, `.cert`, `.env*.local`, while preserving `.env.example`.
  - `next.config.ts`: Configured comprehensive HTTP security headers (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
  - `public/robots.txt`: Search crawler indexing rules protecting `/api/`, `/_next/`, and administrative routes.
- **AI Token Optimization & Rules**:
  - `.cursorrules`: Strict token economy rules, concise responses, and Next.js 16/React 19 conventions.
  - `.cursorignore` & `.aiignore`: Excludes heavy lockfiles (`package-lock.json`), `.next/`, node_modules, and media assets to save 90%+ tokens during AI indexing.
  - `.github/copilot-instructions.md`: Instructions for GitHub Copilot in VS Code.
  - `AI_CONTEXT.md`: High-density single-page architecture reference for AI agents.
  - `AGENTS.md`: Updated with project agent guidelines while preserving Next.js internal directives.
- **Base Project Setup**:
  - Initialized with Next.js 16.4.5, React 19.3.0, and Tailwind CSS v4.

