# Contributing to Balance Diet Pune

Thank you for contributing to **Balance Diet Pune**! To maintain clean code quality, security, and developer productivity, please adhere to the guidelines below.

---

## 🌳 Branching Strategy

We follow the standard feature-branch workflow based on `main`:

| Branch Prefix | Usage | Example |
| :--- | :--- | :--- |
| `feat/` | New features or UI components | `feat/bmi-calculator`, `feat/appointment-modal` |
| `fix/` | Bug fixes and patches | `fix/header-mobile-nav`, `fix/form-validation` |
| `docs/` | Documentation changes | `docs/update-architecture-guide` |
| `chore/` | Tooling, dependencies, or config | `chore/upgrade-tailwind`, `chore/lint-rules` |
| `refactor/` | Code refactoring without feature change | `refactor/nutrition-card-component` |

---

## 📝 Commit Message Conventions

We enforce [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

### Examples:
- `feat(calculator): add daily calorie deficit calculator`
- `fix(auth): prevent session timeout race condition`
- `style(landing): update hero section padding for mobile`
- `docs(readme): update environment variable setup instructions`

---

## 💻 Coding Standards & Conventions

### 1. React 19 & Next.js 16 (App Router)
- **Server Components by Default**: Never add `'use client'` unless the component directly uses React hooks (`useState`, `useEffect`, etc.), browser window events, or user interactive listeners.
- **Colocation**: Keep component styles, types, and helper functions close to the components that use them.
- **Semantic HTML**: Always use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) for accessibility (a11y) and SEO.

### 2. TypeScript
- Strict mode is enabled. **Do not use `any`**.
- Explicitly define interfaces or type aliases for all component props, API payloads, and database models.
- Prefer `type` for unions/primitives, `interface` for extensible object structures.

### 3. Tailwind CSS v4
- Use utility classes directly in JSX.
- Avoid inline styles (`style={{ ... }}`) unless dynamic positioning or CSS variables are strictly required.
- Maintain responsive variants: `sm:`, `md:`, `lg:`, `xl:`.

### 4. Security & Environment
- Never hardcode API keys, secrets, or passwords in code.
- Always validate incoming user input with schema validation (e.g. Zod) before handling or storing.

---

## 🚀 Pull Request Checklist

Before submitting a Pull Request (PR), ensure you have verified:

- [ ] Ran `npm run lint` with 0 errors or warnings.
- [ ] Ran `npm run build` and verified the build succeeds without TypeScript errors.
- [ ] Tested responsive behavior on mobile and desktop viewports.
- [ ] Documented any new environment variables in `.env.example`.
- [ ] Avoided committing sensitive files, `.env.local`, or large binaries.
- [ ] Clear, descriptive PR description outlining the changes and motivation.

