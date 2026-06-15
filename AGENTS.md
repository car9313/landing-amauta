# Amauta Landing — AGENTS.md

## Commands
```bash
pnpm dev       # dev server
pnpm build     # production build
pnpm start     # start production server
pnpm lint      # eslint . (no config file found — may fail or use defaults)
```

## Architecture
- **Single-page App**: Only `app/page.tsx` — all content is sections via `components/cards/*`. No routing beyond anchor links (`#hero`, `#cta`, etc.)
- **Path alias**: `@/*` maps to repo root `./*` (not `./src/*`)
- **Component structure**: `components/hero/`, `components/cards/`, `components/layout/`, `components/shared/`, `components/ui/` (shadcn registry)
- **Custom hooks**: `use-parallax`, `use-scroll-reveal`, `use-mobile`, `use-toast` in `hooks/`

## Framework & Tooling Quirks
- **Tailwind v4**: Uses `@import 'tailwindcss'` and `@theme inline {}` syntax — NOT v3 `@tailwind` directives
- **Custom brand tokens**: CSS custom properties `--amauta-blue`, `--amauta-orange`, etc. defined in `app/globals.css` and exposed as Tailwind theme colors (`bg-amauta-blue`, `text-amauta-orange`, etc.)
- **next.config.mjs**: `typescript.ignoreBuildErrors: true`, `images.unoptimized: true` — TS errors don't block build; no image optimization
- **Two CSS files**: `app/globals.css` (active, has brand tokens & custom animations) and `styles/globals.css` (stale shadcn default — do not use)
- **ThemeProvider** from `next-themes` is defined in `components/theme-provider.tsx` but **not used** in the root layout
- **CSS import declaration**: `app/globals.d.ts` provides `declare module '*.css' {}` — needed because Next.js 16 types only declare CSS *modules* (`*.module.css`), not bare side-effect CSS imports. Delete this file if upstream types fix this.
- **No tests, no CI/CD, no pre-commit hooks, no env files**

## Conventions
- Interactive / animated sections use `"use client"` directive
- Static content stays as server components (default in App Router)
- shadcn/ui style: "new-york", RSC enabled, icon library: lucide-react
- Animations use CSS `@keyframes` defined in `app/globals.css` — no Framer Motion
- All text content is in Spanish
