# Story: Remove Duplicate Navbar Component

**Story ID:** STORY-TD-001
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 1 - Quick Wins
**Priority:** High
**Status:** Ready for Sprint Planning

---

## Story Summary

Remove the duplicate `pages/Navbar.tsx` file that violates DRY principle. The component exists in both `pages/` and `components/` directories, creating maintenance burden and confusion.

**GitHub Issue:** [#1](https://github.com/hugocapitelli/site-ex-mia/issues/1)

---

## Acceptance Criteria

- [ ] Verify `pages/Navbar.tsx` exists and is identical to `components/Navbar.tsx`
- [ ] Delete the duplicate file from `pages/` directory
- [ ] Search codebase to ensure no imports reference `pages/Navbar`
- [ ] Run `npm run lint` with no errors
- [ ] Run `npm run build` successfully
- [ ] Commit changes with clear message
- [ ] No broken functionality in navigation

---

## Definition of Done

- [x] Story accepted by team
- [ ] Code reviewed and approved
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Changes committed to main branch
- [ ] Documentation updated (if needed)

---

## Technical Details

### Current State
```
src/
├── pages/
│   └── Navbar.tsx       ← DUPLICATE (to be deleted)
└── components/
    └── Navbar.tsx       ← Keep this one
```

### Expected Outcome
```
src/
└── components/
    └── Navbar.tsx       ← Single source of truth
```

### Files to Check
1. `src/pages/Navbar.tsx` - Delete this
2. `src/components/Navbar.tsx` - Verify it's the correct version
3. Search for imports from `pages/Navbar` - Should find zero

---

## Effort Estimate

**Estimated Time:** 5 minutes
**Actual Time:** ___ minutes

---

## Testing Checklist

- [ ] Run: `grep -r "pages/Navbar" src/` (should return 0 results)
- [ ] Run: `npm run lint` (should pass)
- [ ] Run: `npm run build` (should succeed)
- [ ] Manually test: Navigation still works correctly
- [ ] Verify: No console errors on page load

---

## Implementation Notes

### Step 1: Verify Files Are Identical
```bash
diff src/pages/Navbar.tsx src/components/Navbar.tsx
# Should show no differences
```

### Step 2: Check for Imports
```bash
grep -r "from.*pages/Navbar" src/
grep -r "from.*pages/Navbar" src/
# Should find nothing
```

### Step 3: Delete Duplicate
```bash
rm src/pages/Navbar.tsx
```

### Step 4: Verify Build
```bash
npm run lint
npm run build
```

### Step 5: Commit
```bash
git add -A
git commit -m "chore: remove duplicate Navbar component from pages/ directory"
```

---

## Risk Assessment

**Risk Level:** Minimal
**Mitigation:** Verify no imports before deletion

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-1](../TECHNICAL_DEBT.md#td-1-duplicate-navbar-component)

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Ready for Sprint Planning

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
