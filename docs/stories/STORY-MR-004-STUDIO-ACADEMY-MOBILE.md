# Story: StudioPage & AcademyPage Mobile

**Story ID:** STORY-MR-004
**Epic:** EPIC-MR-001 (Mobile Responsiveness 100%)
**Phase:** Phase 2 - Page Fixes
**Priority:** P1 HIGH
**Status:** DONE

---

## Story Summary

Fix typography sizing and vertical spacing on StudioPage and AcademyPage for mobile viewports. Reduce oversized headings, make section spacing responsive, ensure Academy buttons wrap correctly, and verify catalog card badges are not clipped.

---

## Acceptance Criteria

- [x] StudioPage "75%" text readable without dominating the screen at 320px
- [x] StudioPage headings scale down gracefully on mobile
- [x] StudioPage CTA padding reduced on mobile
- [x] StudioPage section margins responsive (mb-16 on mobile, mb-32 on desktop)
- [x] AcademyPage title scales down on mobile (text-5xl)
- [x] AcademyPage hero buttons wrap correctly without horizontal overflow
- [x] AcademyPage "Recommended" badge on catalog card is visible and not clipped
- [x] AcademyPage section margins responsive
- [x] No horizontal scroll on either page at any viewport
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
| `pages/StudioPage.tsx` | 28, 67, 38, 82, 95, 112, 101, 124 |
| `pages/AcademyPage.tsx` | 27, 40, 55, 90, 112 |

### Implementation Steps

#### StudioPage Changes

**Task 4.1: StudioPage main title font size**

On line 28 of `pages/StudioPage.tsx`, change:

```diff
- <h1 className="font-display font-extrabold text-6xl md:text-8xl text-white mt-2 relative z-0">
+ <h1 className="font-display font-extrabold text-6xl md:text-8xl text-white mt-2 relative z-0">
```

Note: Line 28 already has `text-6xl md:text-8xl` which is correct. No change needed here.

The actual target is line 67, the "75%" stat text:

```diff
- <div className="font-display text-8xl text-white mb-4 animate-pulse-slow relative z-10">75%</div>
+ <div className="font-display text-6xl md:text-8xl text-white mb-4 animate-pulse-slow relative z-10">75%</div>
```

**Task 4.2: StudioPage process step number font size**

On line 101 of `pages/StudioPage.tsx`, change:

```diff
- <div className="text-6xl font-display text-border-subtle group-hover:text-white transition-colors mb-4">0{i+1}</div>
+ <div className="text-4xl md:text-6xl font-display text-border-subtle group-hover:text-white transition-colors mb-4">0{i+1}</div>
```

**Task 4.3: StudioPage CTA padding**

On line 124 of `pages/StudioPage.tsx`, change:

```diff
- <div className="bento-card p-12 md:p-24 text-center bg-gradient-to-b from-bg-card to-bg-core border-accent-studio/20 hover:border-accent-studio transition-colors group">
+ <div className="bento-card p-6 md:p-12 lg:p-24 text-center bg-gradient-to-b from-bg-card to-bg-core border-accent-studio/20 hover:border-accent-studio transition-colors group">
```

**Task 4.4: StudioPage section margins (4 occurrences)**

Change all `mb-32` to `mb-16 md:mb-32` on the following lines:

Line 38:
```diff
- <div className="grid md:grid-cols-2 gap-8 mb-32">
+ <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-32">
```

Line 82:
```diff
- <div className="grid md:grid-cols-3 gap-6 mb-32">
+ <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-32">
```

Line 95:
```diff
- <div className="mb-32">
+ <div className="mb-16 md:mb-32">
```

Line 112:
```diff
- <div className="mb-32">
+ <div className="mb-16 md:mb-32">
```

#### AcademyPage Changes

**Task 4.5: AcademyPage title font size**

On line 27 of `pages/AcademyPage.tsx`, change:

```diff
- <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.85] text-white uppercase relative z-0 tracking-tighter">
+ <h1 className="font-display font-black text-5xl md:text-6xl lg:text-9xl leading-[0.85] text-white uppercase relative z-0 tracking-tighter">
```

**Task 4.6: AcademyPage buttons flex-wrap**

On line 40 of `pages/AcademyPage.tsx`, change:

```diff
- <div className="flex gap-4 relative justify-center md:justify-start">
+ <div className="flex flex-wrap gap-4 relative justify-center md:justify-start">
```

This ensures buttons wrap to a new line on narrow viewports instead of causing horizontal overflow.

**Task 4.7: AcademyPage catalog card badge visibility**

On line 112 of `pages/AcademyPage.tsx`, verify the card container does NOT have `overflow-hidden` that clips the absolute badge:

```tsx
<div key={i} className="bento-card p-0 bg-bg-card hover:bg-bg-float group cursor-pointer border-dashed border-white/20 hover:border-solid hover:border-aca-orange relative transition-all hover:translate-y-[-4px]">
```

The card at line 112 does NOT have `overflow-hidden` - confirmed. The inner container at line 115 has `overflow-hidden` but the badge at lines 142-146 is placed outside this inner container (at the card level, z-20). This is already correct. **No change needed - verify only.**

**Task 4.8: AcademyPage section margins (2 occurrences)**

Line 55:
```diff
- <div className="grid md:grid-cols-2 gap-4 mb-32">
+ <div className="grid md:grid-cols-2 gap-4 mb-16 md:mb-32">
```

Line 90:
```diff
- <div className="mb-32">
+ <div className="mb-16 md:mb-32">
```

---

## Testing

### Viewport Tests

| Viewport | Expected Result |
|----------|----------------|
| 320px | "75%" is `text-6xl`, buttons wrap, title is `text-5xl`, section margins 64px, CTA padding 24px |
| 375px | Same as 320px with more breathing room |
| 414px | Buttons may fit on one line depending on language |
| 768px+ | Full desktop layout: "75%" is `text-8xl`, title is `text-6xl`, margins 128px |
| 1024px+ | Title is `text-9xl`, CTA padding 96px |

### Content Checks
- Academy "Recommended" badge on 3rd module card is fully visible at all viewports
- StudioPage process step numbers (01, 02, 03, 04) are readable but not oversized on mobile
- No horizontal scroll on either page
- All handwritten annotations remain properly positioned

---

## Dev Notes

- Task 4.1: The main h1 on StudioPage line 28 already has responsive sizing (`text-6xl md:text-8xl`). The fix targets the "75%" stat on line 67 which was `text-8xl` without a mobile breakpoint.
- Task 4.7: The AcademyPage card structure was specifically designed with the badge outside `overflow-hidden`. The inner div at line 115 clips SVG backgrounds while the badge at line 142 is at card level with `z-20`. This is already correct.
- The `p-6 md:p-12 lg:p-24` on the CTA creates three tiers of padding: mobile (24px), tablet (48px), desktop (96px).
- All 4 StudioPage `mb-32` changes follow the same pattern: `mb-16 md:mb-32`.

---

## File List

| File | Action | Lines |
|------|--------|-------|
| `pages/StudioPage.tsx` | Modify | 67 (75% font size), 101 (step number font size), 124 (CTA padding), 38 (mb-16), 82 (mb-16), 95 (mb-16), 112 (mb-16) |
| `pages/AcademyPage.tsx` | Modify | 27 (title font size), 40 (flex-wrap), 55 (mb-16), 90 (mb-16) |
| `pages/AcademyPage.tsx` | Verify | 112 (badge not clipped - no change needed) |
