# Story: HomePage Mobile

**Story ID:** STORY-MR-003
**Epic:** EPIC-MR-001 (Mobile Responsiveness 100%)
**Phase:** Phase 2 - Page Fixes
**Priority:** P1 HIGH
**Status:** DONE

---

## Story Summary

Fix HomePage layout issues on mobile viewports: make the hero header stack vertically, adjust the methodology grid to single-column on small screens, reduce excessive vertical spacing, and lower minimum heights on bento cards for smaller screens.

---

## Acceptance Criteria

- [x] Hero header stacks vertically on mobile (flex-col) and side-by-side on desktop
- [x] Methodology grid displays 1 column at < 640px
- [x] No excessive vertical spacing on mobile (max 64px vertical gap)
- [x] Excellence bento card has reduced min-height on mobile
- [x] Studio bento card has reduced min-height on mobile
- [x] CTA section has reduced vertical padding on mobile
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
| `pages/HomePage.tsx` | 23, 119, 239, 330, 343 |

### Implementation Steps

**Task 3.1: Hero header flex direction**

On line 23 of `pages/HomePage.tsx`, change:

```diff
- <div className="flex justify-between items-end border-b border-border-subtle pb-6 mb-8 animate-fade-in-up">
+ <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end border-b border-border-subtle pb-6 mb-8 animate-fade-in-up">
```

This makes the header elements (system info, tagline, version) stack vertically on mobile and align horizontally on desktop.

**Task 3.2: Methodology grid single-column on mobile**

On line 330 of `pages/HomePage.tsx`, change:

```diff
- <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
+ <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
```

At < 640px (mobile), the 6 methodology steps will stack in a single column instead of cramming into 2 columns.

**Task 3.3: Excellence bento card min-height**

On line 239 of `pages/HomePage.tsx`, change the Excellence bento card:

```diff
- className="bento-card md:col-span-3 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[360px] hover:border-exc-blue/50"
+ className="bento-card md:col-span-3 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[280px] md:min-h-[360px] hover:border-exc-blue/50"
```

**Task 3.4: CTA section vertical padding**

On line 343 of `pages/HomePage.tsx`, change:

```diff
- <section className="py-32 px-4 text-center bg-bg-core">
+ <section className="py-16 md:py-32 px-4 text-center bg-bg-core">
```

This reduces the CTA section from 128px to 64px vertical padding on mobile.

**Task 3.5: Studio bento card min-height**

On line 119 of `pages/HomePage.tsx`, change the Studio bento card:

```diff
- className="bento-card md:col-span-2 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[400px] hover:border-accent-studio/50"
+ className="bento-card md:col-span-2 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[300px] md:min-h-[400px] hover:border-accent-studio/50"
```

---

## Testing

### Viewport Tests

| Viewport | Expected Result |
|----------|----------------|
| 320px | Hero header stacked (system info, then version below), methodology 1-col, CTA padding 64px, bento cards shorter |
| 375px | Same as 320px with slightly more horizontal space |
| 414px | Same as 375px |
| 640px+ | Methodology switches to 2 columns |
| 768px+ | Full desktop layout: hero side-by-side, methodology 3 cols, bento cards full height |
| 1024px+ | Methodology 6 columns |

### Content Checks
- Verify the handwritten tagline in hero (`hidden md:block` on line 29) is still hidden on mobile (already the case)
- Verify CTA button and handwritten annotation still display correctly
- No horizontal scroll at any viewport

---

## Dev Notes

- The hero header `items-end` alignment is only applied at `md:` breakpoint to keep the stacked layout clean on mobile
- The methodology grid `grid-cols-1` at mobile ensures each step card gets full width, improving readability of the step descriptions
- The `min-h-[300px]` and `min-h-[280px]` mobile values were chosen to keep cards proportional while avoiding excessive empty space on small screens
- The `gap-4` added to the hero header flex provides spacing between stacked elements on mobile

---

## File List

| File | Action | Lines |
|------|--------|-------|
| `pages/HomePage.tsx` | Modify | 23 (hero flex-col), 119 (studio min-h), 239 (excellence min-h), 330 (grid-cols-1), 343 (py-16) |
