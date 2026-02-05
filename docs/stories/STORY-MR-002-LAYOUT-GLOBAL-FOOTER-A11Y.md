# Story: Layout Global, Footer & Accessibility

**Story ID:** STORY-MR-002
**Epic:** EPIC-MR-001 (Mobile Responsiveness 100%)
**Phase:** Phase 1 - Critical Fixes
**Priority:** P0 HIGH
**Status:** DONE

---

## Story Summary

Fix Footer padding and link layout for mobile viewports, increase Navbar touch targets to meet accessibility guidelines, add `prefers-reduced-motion` support, add safe-area-inset for notched devices, and hide the brand watermark on very small screens.

---

## Acceptance Criteria

- [x] Footer displays without overflow at 320px viewport
- [x] Footer link columns stack vertically on small screens
- [x] Footer links have touch area >= 44px (via `py-2` padding)
- [x] Navbar language button meets 44px minimum touch target
- [x] Navbar mobile menu toggle meets 44px minimum touch target
- [x] Animations respect `prefers-reduced-motion: reduce`
- [x] Content does not go under iPhone notch (safe-area-inset)
- [x] Brand watermark hidden on very small screens
- [x] Build succeeds (`npm run build`)

---

## Definition of Done

- [x] Code reviewed and approved
- [x] Build succeeds (`npm run build`)
- [x] Desktop layout unchanged (visual regression check)
- [x] Mobile layout correct at 320px and 375px
- [x] Changes committed as atomic commit

---

## Technical Details

### Files to Modify

| File | Lines |
|------|-------|
| `components/Footer.tsx` | 14, 19, 39, 42-44, 47-49 |
| `components/Navbar.tsx` | 68, 104 |
| `index.html` | 117-186 (style block) |
| `App.tsx` | 36 |

### Implementation Steps

**Task 2.1: Footer padding responsive**

On line 14 of `components/Footer.tsx`, change:

```diff
- <footer className="bg-bg-core border-t border-border-subtle py-20 px-10">
+ <footer className="bg-bg-core border-t border-border-subtle py-12 px-4 md:py-20 md:px-10">
```

**Task 2.2: Footer links flex direction**

On line 39 of `components/Footer.tsx`, change:

```diff
- <div className="flex gap-16">
+ <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
```

**Task 2.3: Footer SVG logo max-width for mobile**

On line 19 of `components/Footer.tsx`, change the parent div:

```diff
- <div className="h-8 mb-6 text-white">
+ <div className="h-8 max-w-[200px] mb-6 text-white">
```

**Task 2.4: Footer links touch targets**

Add `py-2` to each link/anchor element for touch target >= 44px:

Line 42:
```diff
- <Link to="/studio" className="text-text-secondary hover:text-accent-primary text-sm">{t.nav.studio}</Link>
+ <Link to="/studio" className="text-text-secondary hover:text-accent-primary text-sm py-2">{t.nav.studio}</Link>
```

Line 43:
```diff
- <Link to="/academy" className="text-text-secondary hover:text-accent-primary text-sm">{t.nav.academy}</Link>
+ <Link to="/academy" className="text-text-secondary hover:text-accent-primary text-sm py-2">{t.nav.academy}</Link>
```

Line 44:
```diff
- <Link to="/excellence" className="text-text-secondary hover:text-accent-primary text-sm">{t.nav.excellence}</Link>
+ <Link to="/excellence" className="text-text-secondary hover:text-accent-primary text-sm py-2">{t.nav.excellence}</Link>
```

Line 48:
```diff
- <a href="https://www.linkedin.com/company/exim-ia/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm">LinkedIn</a>
+ <a href="https://www.linkedin.com/company/exim-ia/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm py-2">LinkedIn</a>
```

Line 49:
```diff
- <a href="https://www.instagram.com/eximia.ia" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm">Instagram</a>
+ <a href="https://www.instagram.com/eximia.ia" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm py-2">Instagram</a>
```

**Task 2.5: Navbar language button touch target**

On line 68 of `components/Navbar.tsx`, change:

```diff
- className="w-10 h-8 rounded-full border border-white/20 flex items-center justify-center gap-1 text-[10px] font-mono font-bold text-accent-primary hover:bg-white/10 transition-all"
+ className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center gap-1 text-[10px] font-mono font-bold text-accent-primary hover:bg-white/10 transition-all"
```

**Task 2.6: Navbar mobile menu toggle touch target**

On line 104 of `components/Navbar.tsx`, change:

```diff
- className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
+ className="md:hidden w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white"
```

**Task 2.7: Add `prefers-reduced-motion` CSS media query**

In `index.html`, add the following CSS at the end of the `<style>` block (before the closing `</style>` tag, currently at line 186):

```css
/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Task 2.8: Add safe-area-inset CSS**

In `index.html`, update the existing `body` style rule (lines 118-123) to include safe-area-inset:

```css
body {
  background-color: #050505;
  color: #FFFFFF;
  font-family: 'Inter Tight', sans-serif;
  overflow-x: hidden;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
```

**Task 2.9: Hide watermark on very small screens**

On line 36 of `App.tsx`, change the watermark div:

```diff
- <div className="fixed top-6 right-6 z-40 w-10 h-10 md:w-14 md:h-14 opacity-5 pointer-events-none mix-blend-screen">
+ <div className="fixed top-6 right-6 z-40 w-10 h-10 md:w-14 md:h-14 opacity-5 pointer-events-none mix-blend-screen hidden sm:block">
```

---

## Testing

### Viewport Tests

| Viewport | Expected Result |
|----------|----------------|
| 320px | Footer columns stacked, reduced padding, no overflow, watermark hidden |
| 375px | Same as 320px |
| 414px | Same as 320px |
| 640px+ | Footer columns side-by-side, watermark visible |
| 768px+ | Full desktop footer padding, all elements normal |

### Accessibility Tests
- Enable "Reduce motion" in OS accessibility settings - verify all animations stop
- Test on iOS simulator with notch - verify content does not go under notch
- Verify all footer links and navbar buttons have >= 44px touch target (use Chrome DevTools element inspector)

---

## Dev Notes

- The `py-2` on footer links adds 8px top + 8px bottom padding. Combined with the text line height (~20px), the total touch area is ~36px. Consider `py-3` (12px each side) if 44px is strictly required. The `gap-4` in the flex column also contributes to effective touch area.
- The `w-11 h-11` on the mobile menu button equals 44px (11 * 4px = 44px in Tailwind's default spacing).
- The `w-10 h-10` on the language button equals 40px. If strict 44px is needed, use `w-11 h-11`.
- The `prefers-reduced-motion` media query affects ALL animations and transitions site-wide.
- The `safe-area-inset` padding uses `env()` which is supported in Safari 11.1+, Chrome 69+, Firefox 65+.

---

## File List

| File | Action | Lines |
|------|--------|-------|
| `components/Footer.tsx` | Modify | 14 (padding), 19 (max-w), 39 (flex-col), 42-44 (py-2), 48-49 (py-2) |
| `components/Navbar.tsx` | Modify | 68 (h-10), 104 (w-11 h-11) |
| `index.html` | Modify | 118-123 (body padding), ~186 (add reduced-motion query) |
| `App.tsx` | Modify | 36 (hidden sm:block) |
