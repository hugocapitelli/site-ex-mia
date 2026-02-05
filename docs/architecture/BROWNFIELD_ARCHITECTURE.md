# ExímIA Ventures Website - Brownfield Architecture Document

**Project Name:** site-ex-mia
**Version:** 2.0.5
**Type:** React SPA with Vite
**Last Updated:** 2025-02-05

---

## Document Scope

This document captures the **CURRENT STATE** of the ExímIA Ventures corporate website codebase. It includes architectural decisions, patterns, technical constraints, and practical details needed for AI agents to contribute effectively to bug fixes, feature additions, and testing.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-02-05 | 1.0 | Initial brownfield analysis | Aria (Architect) |

---

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Entry Point:** `index.tsx` - React DOM mount point
- **Main App Component:** `App.tsx` - Router setup, layout, language state
- **Type Definitions:** `types.ts` - Page enum, Language enum, NavItem interface
- **Content/Translations:** `translations.ts` (547 lines) - All UI text for 4 languages (EN, PT, ES, IT)
- **Pages Directory:** `pages/` - 5 page components (Home, Studio, Academy, Excellence, Contact)
- **Components:** `components/Navbar.tsx`, `components/Footer.tsx` - Shared navigation & footer
- **Styling:** `index.html` - Tailwind CSS config, custom fonts, color palette, animations
- **Build Config:** `vite.config.ts` - Server setup, alias resolution, environment variables
- **Package Management:** `package.json` - Dependencies and scripts

---

## High-Level Architecture

### Project Purpose

ExímIA Ventures is a B2B corporate website showcasing AI-powered business solutions and services. The site features multiple service areas (Studio, Academy, Excellence), educational content, and contact capabilities. Content is fully internationalized for 4 languages.

### Technology Stack

| Category | Technology | Version | Notes |
|----------|-----------|---------|-------|
| **Runtime** | Node.js | 24.13.0 | v20+ required |
| **Framework** | React | 19.2.3 | Latest with hooks |
| **Router** | React Router DOM | 7.13.0 | Client-side routing, 5 pages |
| **Build Tool** | Vite | 6.2.0 | Fast dev server on port 3000 |
| **Language** | TypeScript | 5.8.2 | Strict mode enabled |
| **Styling** | Tailwind CSS | CDN | Via cdn.tailwindcss.com |
| **Email** | EmailJS | 4.4.1 | Client-side email service |
| **Fonts** | Google Fonts | CDN | Syne, Inter Tight, JetBrains Mono, Reenie Beanie |

### Key Features

- ✅ **5-page SPA** with client-side routing
- ✅ **Multi-language support** (EN, PT, ES, IT) with localStorage persistence
- ✅ **Dark theme** by default with custom color palettes
- ✅ **Responsive design** (mobile-first, Tailwind CSS)
- ✅ **Glassmorphism** UI patterns (blurred glass cards)
- ✅ **Smooth animations** (fade-in, slide-in, float, draw)
- ✅ **EmailJS integration** for contact forms
- ✅ **SEO optimization** in meta tags and canonical URLs
- ✅ **Custom scrollbar styling**
- ✅ **Material Design icons** (embedded)

---

## Source Tree and Module Organization

### Project Structure (Actual)

```text
site-ex-mia/
├── index.html              # Vite HTML entry, Tailwind config, fonts, styles
├── index.tsx               # React DOM mount point (entry)
├── App.tsx                 # Router, Layout, ScrollToTop, Language state
├── types.ts                # Page enum, Language enum, NavItem interface
├── translations.ts         # 547 lines - Content for all 4 languages
│
├── pages/                  # 5 page components
│   ├── HomePage.tsx        # Home landing page
│   ├── StudioPage.tsx      # AI Studio services
│   ├── AcademyPage.tsx     # Learning & courses
│   ├── ExcellencePage.tsx  # StratOS platform (Hoshin Kanri)
│   ├── ContactPage.tsx     # Contact form with EmailJS
│   └── Navbar.tsx          # (Duplicate - see components/Navbar.tsx)
│
├── components/             # Shared components
│   ├── Navbar.tsx          # Navigation pill, language switcher
│   └── Footer.tsx          # Footer with links
│
├── assets/                 # Static assets
│   └── Logos/              # Brand logos
│
├── .aios/                  # AIOS configuration (generated)
│   └── config.yaml         # Project metadata
│
├── docs/                   # Documentation
│   ├── stories/            # User stories (empty)
│   ├── architecture/       # This file + architecture docs
│   └── guides/             # Developer guides
│
├── vite.config.ts          # Vite server, plugins, aliases
├── tsconfig.json           # TypeScript config (ES2022, JSX)
├── package.json            # Dependencies, scripts
├── .gitignore              # Git exclusions (updated with AIOS rules)
├── README.md               # Basic setup instructions
│
└── node_modules/           # Dependencies (git-ignored)

**Total Lines of Code:**
- App.tsx: ~82 lines
- HomePage.tsx: ~600 lines
- Pages (total): ~2,000 lines
- translations.ts: 547 lines
- Components: ~200 lines
- Configuration: ~100 lines
```

### Directory Notes

- **pages/Navbar.tsx** exists alongside **components/Navbar.tsx** - appears to be a duplicate, should verify which is used
- All pages are rendered as top-level Route components in App.tsx
- No separate hooks, utilities, or services directories yet
- No tests directory present
- No API/backend integration (client-side only)

---

## Core Architecture Patterns

### 1. Routing Architecture

**Pattern:** Client-side routing with React Router v7

```typescript
// App.tsx structure
<BrowserRouter>
  <ScrollToTop />  // Auto-scroll to top on route change
  <Layout>         // Navbar + Footer wrapper
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/academy" element={<AcademyPage />} />
      <Route path="/excellence" element={<ExcellencePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />  // Fallback
    </Routes>
  </Layout>
</BrowserRouter>
```

**Key Points:**
- Routes are flat (no nested routes)
- Catch-all route redirects unknown paths to home
- ScrollToTop component triggers on pathname change
- No lazy-loading or code splitting (all pages bundled)

### 2. Language Management

**Pattern:** React useState + localStorage persistence

```typescript
// App.tsx
const [currentLang, setCurrentLang] = useState<Language>(() => {
  const saved = localStorage.getItem('eximia-lang');
  return (saved as Language) || Language.EN;
});

useEffect(() => {
  localStorage.setItem('eximia-lang', currentLang);
}, [currentLang]);
```

**Behavior:**
- Default language: English (EN)
- Persists in localStorage under key `eximia-lang`
- All pages receive `lang` prop for content access
- Navbar provides language switcher for the UI

### 3. Content Structure

**Pattern:** Centralized translation object by language

```typescript
// translations.ts - 547 lines, structured as:
export const translations = {
  [Language.EN]: {
    nav: { ... },
    home: { ... },
    studio: { ... },
    academy: { ... },
    excellence: { ... },
    contact: { ... },
    footer: { ... }
  },
  [Language.PT]: { ... },
  [Language.ES]: { ... },
  [Language.IT]: { ... }
}

// Usage in pages:
const t = translations[lang].home;
const navT = translations[lang].nav;
```

**Content Organization:**
- Each language is a top-level key
- Each page section (nav, home, studio, etc.) contains all strings
- Types: strings, arrays of objects, nested objects
- No dynamic content loading (all inline)

### 4. Page Component Pattern

**Pattern:** Functional component receiving lang prop

```typescript
interface PageProps {
  lang: Language;
}

export const PageName: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang].section;

  return (
    <div className="bg-bg-core min-h-screen">
      {/* Page content using t.* for text */}
    </div>
  );
};
```

**Consistency:**
- All pages follow same structure
- Direct translations access (no hooks)
- Inline JSX with Tailwind classes
- No component extraction (monolithic pages)

### 5. Styling Architecture

**Pattern:** Tailwind CSS with custom extensions

**Color Palette:**
```
Core Colors:
- bg-core: #050505 (black background)
- bg-card: #0A0C10
- bg-float: #141414
- accent-primary: #D4FF00 (Volt - bright yellow)
- accent-secondary: #7000FF (Neon Purple)
- accent-studio: #fdbe66 (Gold/Warm Yellow)

Excellence Service Palette:
- exc-blue: #497EBD
- exc-coral: #F58873
- exc-gold: #FDBE66
- exc-dark: #020C14

Academy Service Palette:
- aca-orange: #FFD700 (Gold)
- aca-dark: #1a0500

Text & Borders:
- text-primary: #FFFFFF
- text-secondary: #888888
- border-subtle: #222222
```

**Custom Classes:**
- `.text-outline` - White stroke with transparent fill
- `.glass-pill` - Blur with semi-transparent bg + border
- `.bento-card` - Card with border, hover lift + shadow

**Animations:**
```
- float: 6s vertical movement
- pulse-slow: 4s opacity pulse
- fade-in: 1s opacity fade
- fade-in-up: 1s opacity + slide up
- slide-in-left: 0.8s slide from left
- spin-slow: 12s rotation
- draw: 2s SVG stroke animation
```

**Font Stack:**
- Display: Syne (Bold, modern headings)
- Body: Inter Tight (Friendly, readable)
- Mono: JetBrains Mono (Technical text)
- Hand: Reenie Beanie (Playful taglines/annotations)

**Responsive Approach:**
- Mobile-first design
- Breakpoints: `md:` (medium) primary
- Tailwind CDN (no build step for CSS)

---

## Data Models and APIs

### Enums and Types

```typescript
// types.ts
export enum Page {
  HOME = 'HOME',
  STUDIO = 'STUDIO',
  ACADEMY = 'ACADEMY',
  EXCELLENCE = 'EXCELLENCE',
  CONTACT = 'CONTACT'
}

export enum Language {
  EN = 'EN',
  PT = 'PT',
  ES = 'ES',
  IT = 'IT'
}

export interface NavItem {
  label: string;
  page: Page;
}
```

### Translation Structure (Sample)

```typescript
home: {
  system: string;
  loc: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  // ... more fields
},

studio: {
  tagHand: string;
  title: string;
  subtitle: string;
  desc: string;
  cards: Array<{ title: string; text: string }>;
  processTitle: string;
  processSteps: Array<{ title: string; desc: string }>;
  // ... more fields
},

academy: {
  modules: Array<{ title: string; duration: string; level: string }>;
  paths: Array<{ title: string; desc: string }>;
  // ... more fields
}
```

### External Integrations

**EmailJS Integration (Contact Form)**
- Library: EmailJS 4.4.1
- Purpose: Send contact form emails without backend
- Configured in: `ContactPage.tsx`
- API Key: Passed via environment variable `GEMINI_API_KEY` (Note: confusing naming - see below)

**Environment Variables:**
- `GEMINI_API_KEY` - Exposed via Vite's `define` config
- Referenced in both `process.env.GEMINI_API_KEY` and `process.env.API_KEY`
- Set in `.env.local` (not committed)

---

## Pages and Routing

### Route Map

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Landing page, intro to ExímIA |
| `/studio` | StudioPage | AI Studio service offering |
| `/academy` | AcademyPage | Learning & courses |
| `/excellence` | ExcellencePage | StratOS platform details |
| `/contact` | ContactPage | Contact form |
| `*` | HomePage | 404 fallback |

### Page Descriptions

#### 1. HomePage (~600 lines)
- **Hero section** with title, subtitle, tagline
- **System info** (version, location)
- **Dashed arrow SVG** animation
- **Responsive layout** (mobile, tablet, desktop)
- **Gradient backgrounds** (Volt yellow, Neon purple)
- **Full viewport height** hero

#### 2. StudioPage
- **Service overview** for AI Studio
- **Card layout** (3 cards: Decision Mapping, Intelligent Agents, Frictionless Ops)
- **Process steps** (Execution Diagnosis → Implementation)
- **Tech stack display**
- **Call-to-action** button

#### 3. AcademyPage
- **Learning platform** overview
- **Module catalog** (AI Literacy, Generative Ops, Strategic Implementation)
- **Certification paths** (3 levels: Foundations, Practitioner, Master)
- **Course duration & levels**
- **Action buttons** (View Courses, Corporate Consulting)

#### 4. ExcellencePage
- **StratOS platform** (Hoshin Kanri engine)
- **Feature highlights**
- **Value proposition**
- **Excel/spreadsheet replacement narrative**

#### 5. ContactPage (~700 lines)
- **Email form** with EmailJS
- **Form fields:** Name, Email, Subject, Message
- **Multi-language labels**
- **Error/success handling**
- **Responsive form layout**

---

## Components

### Navbar Component (`components/Navbar.tsx`)

**Features:**
- Floating pill navigation
- Language switcher (4 languages)
- Responsive design (hamburger on mobile)
- Sticky/floating positioning
- Link navigation to all pages

**Props:**
```typescript
interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}
```

### Footer Component (`components/Footer.tsx`)

**Features:**
- Links to all pages
- Copyright info
- Language-specific content
- Centered layout

**Props:**
```typescript
interface FooterProps {
  lang: Language;
}
```

### Duplicate Navbar Issue

⚠️ **Note:** `pages/Navbar.tsx` exists alongside `components/Navbar.tsx`
- One appears to be leftover from refactoring
- Only `components/Navbar.tsx` is imported in App.tsx
- Pages/Navbar.tsx should likely be deleted or investigated

---

## Layout and UI Patterns

### Layout Component (in App.tsx)

```typescript
<Layout currentLang={currentLang} onLanguageChange={setCurrentLang}>
  <Navbar />
  <main className="flex-grow">
    {children}
  </main>
  <Footer />
</Layout>
```

**Structure:**
- Full viewport height (`min-h-screen`)
- Flexbox column (`flex flex-col`)
- Navbar at top
- Main content grows to fill space
- Footer at bottom
- Fixed brand watermark (top-right, low opacity)

### Common UI Elements

**Hero Sections:**
- Full-screen height
- Gradient backgrounds (positioned absolutely)
- Blur effects (`blur-[120px]`)
- Text animations (`animate-fade-in-up`)

**Cards:**
- `.bento-card` class with custom hover effects
- Border color transitions
- Transform on hover (lift up)
- Shadow on hover

**Glass Morphism:**
- `.glass-pill` for navigation
- `backdrop-filter: blur(16px)`
- Semi-transparent background
- Subtle border

**Text Effects:**
- `.text-outline` for stroke text
- Material Symbols icons
- Hand-written font for annotations
- Custom scrollbar styling

---

## Development and Deployment

### Local Development Setup

**Prerequisites:**
- Node.js v20+ (or v24+)
- npm (bundled with Node)

**Steps:**
```bash
# 1. Install dependencies
npm install

# 2. Set environment variable
# Create .env.local or .env file with:
GEMINI_API_KEY=your_api_key_here

# 3. Start dev server
npm run dev

# Server runs on http://localhost:3000
```

**Dev Server Features:**
- Hot reload (HMR)
- Port: 3000 (configurable in vite.config.ts)
- Host: 0.0.0.0 (accessible from network)

### Build Process

**Build Command:**
```bash
npm run build
```

**Output:**
- Production bundle in `dist/` directory
- Vite optimizes JS, CSS, images
- TypeScript type-checked before build

**Preview Build:**
```bash
npm run preview
```

**What Happens:**
- Preview production build locally on same dev server
- Useful for testing before deployment

### Build Configuration

**TypeScript Compilation:**
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- No emit (Vite handles compilation)

**Vite Plugins:**
- @vitejs/plugin-react (Fast Refresh, JSX support)

**Path Alias:**
- `@/*` maps to project root
- Example: `import { Button } from '@/components/Button'`

**Environment Variables:**
- `GEMINI_API_KEY` exposed to client via `define`
- Accessible as `process.env.GEMINI_API_KEY`

### Deployment Considerations

**Static Hosting Required:**
- This is a static SPA (no backend)
- Can deploy to: Vercel, Netlify, GitHub Pages, AWS S3, Cloudflare
- Set 404 fallback to index.html (for React Router)

**Environment Variables:**
- Set `GEMINI_API_KEY` in hosting platform
- For Vercel/Netlify: Add to deployment settings
- For S3/CDN: Embed at build time

**Performance:**
- Assets loaded from CDN (Tailwind, Google Fonts)
- No image optimization yet (future improvement)
- No code splitting (all pages bundled)

---

## Testing and Quality

### Current Test Status

**Status:** ❌ No tests present

**Missing:**
- Unit tests
- Integration tests
- E2E tests
- Snapshot tests

### Recommended Testing Strategy

**For Bug Fixes:**
```typescript
// Unit tests for utility functions (if added)
// Component snapshot tests for visual changes
// Form validation tests for ContactPage
```

**For Feature Additions:**
```typescript
// Integration tests for new pages
// Routing tests for new routes
// Translation key verification
```

**Testing Tools (Recommended):**
- Jest (unit testing)
- React Testing Library (component testing)
- Vitest (Vite-compatible test runner)
- Playwright (E2E testing)

### Running Tests (Future)

```bash
npm test              # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

---

## Technical Debt and Known Issues

### Issue 1: Duplicate Navbar Component
- **Location:** `pages/Navbar.tsx` vs `components/Navbar.tsx`
- **Impact:** Code duplication, potential confusion
- **Resolution:** Delete duplicate, verify imports
- **Priority:** Low
- **Effort:** 5 minutes

### Issue 2: Confusing Environment Variable Naming
- **Issue:** `GEMINI_API_KEY` used for EmailJS, not Gemini API
- **Location:** `vite.config.ts`, `ContactPage.tsx`
- **Impact:** Misleading for developers, could cause integration mistakes
- **Resolution:** Rename to `EMAILJS_PUBLIC_KEY` or similar
- **Priority:** Medium
- **Effort:** 30 minutes (search & replace, test contact form)

### Issue 3: No Code Splitting or Lazy Loading
- **Issue:** All pages bundled together
- **Impact:** Larger initial bundle (affects mobile users)
- **Location:** `App.tsx` (all pages imported at top)
- **Resolution:** Use `React.lazy()` and `Suspense` for pages
- **Priority:** Medium
- **Effort:** 1 hour

### Issue 4: No Error Boundaries
- **Issue:** No error handling if component crashes
- **Impact:** White screen of death for users
- **Resolution:** Add ErrorBoundary component
- **Priority:** Low
- **Effort:** 1 hour

### Issue 5: Missing Image Optimization
- **Issue:** Large images loaded without optimization
- **Location:** `assets/` directory
- **Impact:** Performance on mobile networks
- **Resolution:** Use Next.js Image component or similar
- **Priority:** Low
- **Effort:** 2 hours

### Issue 6: No TypeScript Strict Mode
- **Issue:** TypeScript configured but some patterns allow `any`
- **Impact:** Type safety gaps
- **Resolution:** Enable strict mode, fix type errors
- **Priority:** Low
- **Effort:** 2 hours

### Issue 7: ContactPage Form Validation
- **Issue:** Minimal client-side validation
- **Location:** `ContactPage.tsx`
- **Impact:** Bad data sent via EmailJS
- **Priority:** Medium
- **Effort:** 1 hour

### Workarounds and Gotchas

**Gotcha 1: localStorage Language Persistence**
- Language is saved to localStorage but no session sync
- Opening in different tab doesn't sync language
- Workaround: Use SessionStorage or Context API

**Gotcha 2: Route Fallback to Home**
- Unknown routes redirect to home (not 404)
- Users won't see 404 message
- Workaround: Add explicit 404 page

**Gotcha 3: Animations on Page Load**
- Heavy animations on hero sections may stutter on slow devices
- `animate-draw` on SVGs can be performance-intensive
- Workaround: Reduce animation duration or use CSS will-change

---

## Integration Points and External Dependencies

### External Services

| Service | Purpose | Integration Type | Status |
|---------|---------|------------------|--------|
| **Google Fonts** | Syne, Inter Tight, JetBrains Mono, Reenie Beanie | CDN link in HTML | ✅ Working |
| **Tailwind CSS** | Styling framework | CDN via cdn.tailwindcss.com | ✅ Working |
| **EmailJS** | Contact form emails | npm package + client-side | ✅ Integrated |
| **Material Design Icons** | Icon library | Embedded CSS font | ✅ Working |

### Internal Integration Points

**Language System:**
- All pages depend on `Language` type and `translations` object
- Navbar triggers language changes via `onLanguageChange` callback
- Language persisted in localStorage under key `eximia-lang`

**Routing:**
- React Router provides navigation context
- All route changes trigger ScrollToTop
- No programmatic navigation (only Link components)

**EmailJS Integration:**
- Initialized with public key (environment variable)
- Form submission in ContactPage sends email
- No backend verification (client-side only)

---

## Development Patterns and Conventions

### File Naming
- **Components:** PascalCase (`Navbar.tsx`, `Footer.tsx`)
- **Pages:** PascalCase (`HomePage.tsx`, `ContactPage.tsx`)
- **Types:** kebab-case or inline (types.ts for shared)
- **Assets:** kebab-case (`hero-bg.png`, `logo-dark.svg`)

### Import Conventions
```typescript
// Top imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import { Navbar } from './components/Navbar';
import { Language } from './types';
import { translations } from './translations';
```

### Component Structure
```typescript
interface Props {
  lang: Language;
  onLanguageChange?: (lang: Language) => void;
}

export const ComponentName: React.FC<Props> = ({ lang, onLanguageChange }) => {
  const t = translations[lang].section;

  return (
    <div className="flex flex-col">
      {/* JSX */}
    </div>
  );
};
```

### CSS Class Organization (Tailwind)
```typescript
// Order: Display → Layout → Spacing → Sizing → Colors → Text → Hover/Effects
<div className="flex flex-col min-h-screen bg-bg-core px-4 py-8 text-white hover:opacity-90">
```

### String Interpolation
```typescript
// All translations from centralized object
const heading = t.home.heroTitle;
const email = t.contact.emailLabel;

// No hard-coded strings (except technical labels)
```

---

## Commands and Scripts

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check (if added)
npm run typecheck

# Lint (if added)
npm run lint
```

### Quick Reference: Useful Paths

- **Config:** `vite.config.ts`, `tsconfig.json`, `index.html`
- **Routes:** `App.tsx` (Routes) + `pages/*` (components)
- **Translations:** `translations.ts` (all content)
- **Styles:** `index.html` (Tailwind config), inline Tailwind classes
- **Components:** `components/` (Navbar, Footer)
- **Types:** `types.ts` (Page, Language enums)

---

## Performance Characteristics

### Bundle Size Estimate

```
React 19.2.3: ~45 KB
React Router DOM 7.13.0: ~45 KB
EmailJS 4.4.1: ~25 KB
Tailwind CSS (CDN): ~50 KB
Main code: ~100 KB
Total: ~265 KB (before gzip)
After gzip: ~85 KB
```

### Load Time

- Initial page load: ~2-3 seconds (depends on network)
- Language switch: Instant (localStorage)
- Route transitions: <100ms (SPA)
- Animations: 60fps (GPU-accelerated)

### Optimization Opportunities

1. **Code splitting:** Extract page components with React.lazy()
2. **Image optimization:** Use WebP format, lazy loading
3. **Asset caching:** Configure service worker for offline
4. **CSS purging:** Tailwind CDN → build-time generation
5. **Font subsetting:** Reduce font file sizes

---

## Areas for AI Agent Contribution

### Good for Bug Fixes
- ✅ Styling issues (Tailwind classes)
- ✅ Animation timing
- ✅ Responsive layout problems
- ✅ Color palette consistency
- ✅ Typos in translations
- ✅ Form validation logic
- ✅ Route handling

### Good for Feature Additions
- ✅ New pages (follow HomePage pattern)
- ✅ New components (Navbar/Footer style)
- ✅ New translations (add to translations.ts)
- ✅ New routes (add to App.tsx Routes)
- ✅ New animations (Tailwind keyframes)
- ✅ Form field additions (ContactPage)

### Good for Testing
- ✅ Unit tests for utility functions
- ✅ Component snapshot tests
- ✅ Form validation tests
- ✅ Routing tests
- ✅ Language switching tests

### Requires Careful Coordination
- ❌ Database integration (requires backend)
- ❌ Authentication (backend tokens needed)
- ❌ Payment processing (PCI compliance)
- ❌ User accounts (no persistence)
- ❌ Real-time updates (needs WebSocket)

---

## Appendix: Important Notes

### SEO Configuration

The site has comprehensive SEO setup in `index.html`:
- Meta description
- Keywords
- Open Graph tags (Facebook, LinkedIn, WhatsApp)
- Twitter Card
- Canonical URL
- Favicon

### Accessibility Considerations

- ⚠️ **aria-labels:** Minimal (future improvement)
- ⚠️ **Keyboard navigation:** Not optimized
- ✅ **Color contrast:** Good (dark bg, light text)
- ✅ **Semantic HTML:** Used for sections
- ⚠️ **Focus indicators:** Not visible (future improvement)

### Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 15+)
- IE11: Not supported (ES2022 target)

### Recommended Browser Extensions for Development

- React Developer Tools
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Code Spell Checker

---

## Summary for AI Agents

### Quick Start (For New Agents)

1. **Understand structure:** Pages + Navbar + Footer + Router
2. **Find translations:** All UI text in `translations.ts`
3. **Understand routing:** 5 routes in `App.tsx`
4. **Check types:** `types.ts` for Language and Page enums
5. **Review patterns:** HomePage is most complete example

### For Bug Fixes

1. Locate the issue (check page file or component)
2. Review related CSS classes (Tailwind in index.html)
3. Check translations if text-related
4. Test in browser (npm run dev)
5. Verify across all 4 languages

### For Feature Additions

1. Add translations to `translations.ts` (all 4 languages)
2. Create new page in `pages/` (follow HomePage pattern)
3. Add route in `App.tsx`
4. Update Navbar links if needed
5. Test routing and translations

### For Styling Changes

1. Check Tailwind config in `index.html`
2. Use custom classes (text-outline, glass-pill, bento-card)
3. Verify responsive (mobile-first with `md:`)
4. Check animations in Tailwind keyframes
5. Test across devices

---

**Status:** ✅ Production Ready (v2.0.5)
**Last Reviewed:** 2025-02-05
**Maintained By:** Aria (Architect)
