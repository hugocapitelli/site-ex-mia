# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ExímIA Ventures corporate website - a React + TypeScript SPA built with Vite. Multi-language support (EN, PT, ES, IT) with a dark, tech-forward visual design.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture

**Single-page application with client-side routing:**
- `App.tsx` - Main component with state-based page routing (`currentPage`) and language state (`currentLang`)
- `index.tsx` - React entry point mounting to `#root`

**Pages** (`pages/`):
- `HomePage.tsx`, `StudioPage.tsx`, `AcademyPage.tsx`, `ExcellencePage.tsx`, `ContactPage.tsx`
- Each page receives `lang: Language` prop and uses `translations[lang]` for content
- Pages with navigation receive `onNavigate: (page: Page) => void`

**Components** (`components/`):
- `Navbar.tsx` - Floating pill navigation with language switcher
- `Footer.tsx` - Site footer with navigation links

**Core Files:**
- `types.ts` - `Page` and `Language` enums, `NavItem` interface
- `translations.ts` - All UI text organized by language, then by page section

## Styling

Tailwind CSS via CDN with custom configuration in `index.html`:
- Custom colors: `bg-core`, `accent-primary` (#D4FF00), `accent-studio`, `exc-*` (Excellence palette), `aca-*` (Academy palette)
- Custom fonts: Syne (display), Inter Tight (body), JetBrains Mono (mono), Reenie Beanie (hand)
- Custom animations: `float`, `pulse-slow`, `fade-in`, `fade-in-up`, `spin-slow`, `draw`

## Key Patterns

**Adding translations:** Update `translations.ts` with new keys for all four languages (EN, PT, ES, IT), then use via `translations[lang].section.key`

**Navigation:** Use the `Page` enum and call `onNavigate(Page.PAGENAME)` - avoid direct route manipulation

**Path alias:** `@/*` maps to project root (configured in `tsconfig.json` and `vite.config.ts`)

## Environment

Requires `GEMINI_API_KEY` in `.env.local` (referenced in README, exposed as `process.env.GEMINI_API_KEY` via Vite)
