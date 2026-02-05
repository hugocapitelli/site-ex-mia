# Story: Implement Code Splitting with Lazy Loading

**Story ID:** STORY-TD-003
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 2 - Sprint 1
**Priority:** High
**Status:** Ready for Sprint Planning

---

## Story Summary

Implement dynamic imports and React lazy loading for page components to reduce initial bundle size by 40-50%. Currently all 5 pages are statically imported at the top level of `App.tsx`, resulting in a large initial bundle.

**GitHub Issue:** [#4](https://github.com/hugocapitelli/site-ex-mia/issues/4)

**Performance Impact:** Bundle size reduction of 40-50%, faster initial page load

---

## Acceptance Criteria

- [ ] Convert `HomePage` to lazy-loaded component
- [ ] Convert `StudioPage` to lazy-loaded component
- [ ] Convert `AcademyPage` to lazy-loaded component
- [ ] Convert `ExcellencePage` to lazy-loaded component
- [ ] Convert `ContactPage` to lazy-loaded component
- [ ] Keep `Navbar` and `Footer` in main bundle (always shown)
- [ ] Add Suspense boundary with loading state
- [ ] Bundle size reduction verified (should be 40-50%)
- [ ] Page navigation works smoothly with no visual glitches
- [ ] No console errors during page transitions
- [ ] Loading state appears briefly during page load
- [ ] Performance metrics improved (confirmed via build analysis)

---

## Definition of Done

- [x] Story accepted by team
- [ ] Code reviewed and approved
- [ ] Bundle analysis confirms 40-50% reduction
- [ ] Manual testing of all page navigation
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Changes committed to main branch

---

## Technical Details

### Current Implementation (Static Import)
```typescript
// App.tsx - BAD: All pages loaded upfront
import HomePage from '@/pages/HomePage';
import StudioPage from '@/pages/StudioPage';
import AcademyPage from '@/pages/AcademyPage';
import ExcellencePage from '@/pages/ExcellencePage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <div>
      {currentPage === Page.HOME && <HomePage />}
      {currentPage === Page.STUDIO && <StudioPage />}
      // ... etc
    </div>
  );
}
```

### Expected Implementation (Lazy Loading)
```typescript
// App.tsx - GOOD: Pages loaded on demand
import { Suspense, lazy } from 'react';
import HomePage from '@/pages/HomePage';  // Keep critical page
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Lazy load other pages
const StudioPage = lazy(() => import('@/pages/StudioPage'));
const AcademyPage = lazy(() => import('@/pages/AcademyPage'));
const ExcellencePage = lazy(() => import('@/pages/ExcellencePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function LoadingFallback() {
  return <div className="p-8 text-center">Loading...</div>;
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        {currentPage === Page.HOME && <HomePage />}
        {currentPage === Page.STUDIO && <StudioPage />}
        {currentPage === Page.ACADEMY && <AcademyPage />}
        {currentPage === Page.EXCELLENCE && <ExcellencePage />}
        {currentPage === Page.CONTACT && <ContactPage />}
      </Suspense>
      <Footer />
    </div>
  );
}
```

### Components to Lazy Load
1. `StudioPage` - High complexity, ~50KB
2. `AcademyPage` - High complexity, ~50KB
3. `ExcellencePage` - Medium complexity, ~30KB
4. `ContactPage` - Medium complexity, ~25KB

### Components to Keep in Main Bundle
- `HomePage` - Entry point, should load immediately
- `Navbar` - Always visible, critical
- `Footer` - Always visible, critical

---

## Effort Estimate

**Estimated Time:** 1 hour (may be 1-1.5 hours)
**Note:** Includes implementation, testing, and bundle verification
**Actual Time:** ___ minutes

---

## Testing Checklist

### Bundle Analysis
- [ ] Run: `npm run build`
- [ ] Check dist folder for chunk files (should see multiple .js files)
- [ ] Measure bundle size before and after
- [ ] Document size reduction percentage
- [ ] Verify reduction is 40-50% as expected

### Functional Testing
- [ ] Navigate from Home → Studio (chunk loads)
- [ ] Navigate from Studio → Academy (different chunk loads)
- [ ] Navigate from Academy → Excellence (different chunk loads)
- [ ] Navigate from Excellence → Contact (different chunk loads)
- [ ] Navigate back to Home (no loading delay)
- [ ] Open developer console: No errors during transitions
- [ ] Network tab: Verify chunks load on demand (not all at once)

### Performance Testing
- [ ] Initial page load is faster
- [ ] Page transitions show brief loading state
- [ ] No jank or visual glitches during transition
- [ ] Lighthouse score improved for performance

### Accessibility Testing
- [ ] Loading state is announced to screen readers
- [ ] Page transitions don't break keyboard navigation
- [ ] Focus management works correctly after page load

---

## Code Changes Checklist

### Files to Modify
- [ ] `src/App.tsx` - Add lazy imports and Suspense

### Files to Create
- [ ] `src/components/LoadingFallback.tsx` (optional, for better UX)

### Files to Check (No Changes Expected)
- [ ] `src/pages/HomePage.tsx`
- [ ] `src/pages/StudioPage.tsx`
- [ ] `src/pages/AcademyPage.tsx`
- [ ] `src/pages/ExcellencePage.tsx`
- [ ] `src/pages/ContactPage.tsx`

---

## Implementation Steps

### Step 1: Update App.tsx
```bash
# Modify src/App.tsx with lazy imports and Suspense
```

### Step 2: Create Loading Fallback (Optional)
```typescript
// src/components/LoadingFallback.tsx
export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-accent-primary mb-4 mx-auto" />
        <p>Loading...</p>
      </div>
    </div>
  );
}
```

### Step 3: Verify Build
```bash
npm run build
# Check for chunk files in dist/
```

### Step 4: Measure Bundle
```bash
# Analyze chunk sizes
ls -lh dist/*.js

# Compare to baseline
# Document results
```

### Step 5: Test Locally
```bash
npm run preview
# Test all page navigation
```

### Step 6: Commit
```bash
git add -A
git commit -m "perf: implement code splitting with lazy loading for pages

- Use React.lazy() + Suspense for page components
- Load StudioPage, AcademyPage, ExcellencePage, ContactPage on demand
- Keep HomePage, Navbar, Footer in main bundle
- Expected bundle size reduction: 40-50%
- Improves initial page load performance"
```

---

## Performance Expectations

**Before Code Splitting:**
- Single main bundle: ~500KB (estimated)
- Initial load: All code loaded upfront

**After Code Splitting:**
- Main bundle: ~250-300KB (reduced by 40-50%)
- Page chunks: ~50-80KB each (loaded on demand)
- Initial load time: Significantly faster
- Page transition: Brief loading state

---

## Potential Issues & Solutions

| Issue | Likelihood | Solution |
|-------|-----------|----------|
| Loading state flicker | Medium | Use fade transition, set min display time |
| Memory growth | Low | Suspense handles cleanup automatically |
| Old browsers fail | Low | Add fallback, transpile correctly |
| State lost on navigation | Low | Already handled by useState + routing |

---

## Browser Support

- ✅ Chrome/Edge (modern versions)
- ✅ Firefox (modern versions)
- ✅ Safari (iOS 13+)
- ✅ All modern browsers with React 18+

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-3](../TECHNICAL_DEBT.md#td-3-no-code-splitting)
- GitHub Issue: Build warning about chunk size

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Ready for Sprint Planning

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
*Note: Effort estimate may be slightly optimistic - allocate 1-1.5h with buffer*
