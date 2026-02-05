# Story: Fix Confusing Environment Variable Naming

**Story ID:** STORY-TD-002
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 1 - Quick Wins
**Priority:** High
**Status:** Ready for Sprint Planning

---

## Story Summary

Rename `GEMINI_API_KEY` to `EMAILJS_API_KEY` throughout the codebase. The current variable name is misleading - it's used for EmailJS, not Gemini, causing developer confusion during setup and maintenance.

**GitHub Issue:** [#2](https://github.com/hugocapitelli/site-ex-mia/issues/2)

---

## Acceptance Criteria

- [ ] Rename `GEMINI_API_KEY` to `EMAILJS_API_KEY` in `vite.config.ts`
- [ ] Update reference in `src/pages/ContactPage.tsx`
- [ ] Update `.env.example` with correct variable name
- [ ] Update documentation mentioning the variable
- [ ] Run `npm run build` successfully
- [ ] Test contact form submission works with renamed variable
- [ ] No broken environment variable references

---

## Definition of Done

- [x] Story accepted by team
- [ ] Code reviewed and approved
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Contact form tested and working
- [ ] Changes committed to main branch
- [ ] Documentation updated

---

## Technical Details

### Current State
```javascript
// vite.config.ts
GEMINI_API_KEY: process.env.GEMINI_API_KEY  // ❌ Misleading name

// ContactPage.tsx
const apiKey = process.env.GEMINI_API_KEY;  // ❌ Used for EmailJS
```

### Expected Outcome
```javascript
// vite.config.ts
EMAILJS_API_KEY: process.env.EMAILJS_API_KEY  // ✓ Clear purpose

// ContactPage.tsx
const apiKey = process.env.EMAILJS_API_KEY;   // ✓ Accurate name
```

### Files to Update
1. `vite.config.ts` - Update variable name
2. `src/pages/ContactPage.tsx` - Update import/usage
3. `.env.example` - Update documentation
4. `docs/` - Update any references in documentation

---

## Effort Estimate

**Estimated Time:** 30 minutes
**Actual Time:** ___ minutes

---

## Testing Checklist

- [ ] Search codebase for `GEMINI_API_KEY` references (should find 0 after rename)
- [ ] Run: `npm run build` (should succeed)
- [ ] Manually test: Contact form loads without errors
- [ ] Manually test: Contact form submission works
- [ ] Verify: Email is received after form submission
- [ ] Check browser console: No errors related to environment variables

---

## Implementation Notes

### Step 1: Update vite.config.ts
```typescript
// Find this:
GEMINI_API_KEY: process.env.GEMINI_API_KEY

// Change to:
EMAILJS_API_KEY: process.env.EMAILJS_API_KEY
```

### Step 2: Update ContactPage.tsx
```typescript
// Find this:
const apiKey = process.env.GEMINI_API_KEY;

// Change to:
const apiKey = process.env.EMAILJS_API_KEY;
```

### Step 3: Update .env.example
```bash
# Find this:
GEMINI_API_KEY=your_emailjs_key_here

# Change to:
EMAILJS_API_KEY=your_emailjs_key_here
```

### Step 4: Search for other references
```bash
grep -r "GEMINI_API_KEY" src/ docs/
# Should find 0 results after updates
```

### Step 5: Test
```bash
npm run build
# Manually test contact form in browser
```

### Step 6: Commit
```bash
git add -A
git commit -m "fix: rename GEMINI_API_KEY to EMAILJS_API_KEY for clarity"
```

---

## Risk Assessment

**Risk Level:** Low
**Breaking Changes:** Yes (developers must update local .env)
**Mitigation:** Update .env.example and document in release notes

---

## Developer Setup Impact

After this change, developers will need to:
1. Update their local `.env.local` file
2. Change `GEMINI_API_KEY` → `EMAILJS_API_KEY`
3. Restart development server

This should be documented clearly.

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-2](../TECHNICAL_DEBT.md#td-2-confusing-environment-variable)

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Ready for Sprint Planning

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
