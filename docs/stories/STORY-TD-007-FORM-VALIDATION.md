# Story: Implement Form Validation

**Story ID:** STORY-TD-007
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 2 - Sprint 1
**Priority:** High
**Status:** Ready for Sprint Planning

---

## Story Summary

Add comprehensive validation to the contact form to prevent invalid data submission and improve user experience. Currently the form accepts any input and submits to EmailJS without validation.

**GitHub Issue:** [#3](https://github.com/hugocapitelli/site-ex-mia/issues/3)

---

## Acceptance Criteria

- [ ] Name field validation (required, alphanumeric + spaces only)
- [ ] Email field validation (RFC 5322 compliant format)
- [ ] Subject field validation (required, 5-100 characters)
- [ ] Message field validation (required, 10-500 characters)
- [ ] Phone field validation (optional, numeric format if provided)
- [ ] Submit button disabled until form is completely valid
- [ ] Inline error messages display for each invalid field
- [ ] Success confirmation displays after successful submission
- [ ] Form clears after successful submission
- [ ] Validation works on both blur and submit
- [ ] Accessible error messages for screen readers

---

## Definition of Done

- [x] Story accepted by team
- [ ] Code reviewed and approved
- [ ] Unit tests written for validation logic
- [ ] Manual testing completed
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Changes committed to main branch

---

## Technical Details

### Validation Rules

| Field | Required | Format | Min | Max | Error Message |
|-------|----------|--------|-----|-----|---------------|
| Name | Yes | Alphanumeric + spaces | 2 | 50 | "Name required, letters and spaces only" |
| Email | Yes | RFC 5322 | — | — | "Valid email required" |
| Subject | Yes | Text | 5 | 100 | "Subject required (5-100 characters)" |
| Message | Yes | Text | 10 | 500 | "Message required (10-500 characters)" |
| Phone | No | Numeric | 10 | 15 | "Phone must be numeric (if provided)" |

### Current State
```typescript
// ContactPage.tsx - No validation currently
const handleSubmit = async (e) => {
  e.preventDefault();
  // Sends directly to EmailJS without checks
  await emailjs.send(...);
};
```

### Expected Outcome
```typescript
// ContactPage.tsx - With validation
const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate all fields
  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    setValidationErrors(errors);
    return;
  }

  // Send to EmailJS
  await emailjs.send(...);
  setSuccess(true);
  resetForm();
};
```

---

## Effort Estimate

**Estimated Time:** 1 hour
**Actual Time:** ___ minutes

---

## Implementation Approach

### Option A: Simple Validation (Recommended for MVP)
- Use built-in HTML5 validation attributes
- Add JavaScript validation layer for custom rules
- Display errors inline below each field
- ~45 minutes of work

### Option B: Validation Library
- Implement with `react-hook-form` or similar
- More robust, better performance
- Slightly longer setup (~1 hour)
- More maintainable long-term

**Recommendation:** Option A for speed, Option B for quality

---

## Testing Checklist

### Manual Testing
- [ ] Load contact form
- [ ] Try submitting with empty fields → Errors display
- [ ] Try submitting with invalid email → Error shows
- [ ] Try submitting with name too short → Error shows
- [ ] Try submitting with message too short → Error shows
- [ ] Fill all fields correctly → Submit button enabled
- [ ] Submit with valid data → Email received, success message shown
- [ ] Form clears after success
- [ ] Can submit again after success

### Validation Edge Cases
- [ ] Name with numbers (should fail)
- [ ] Name with special characters (should fail)
- [ ] Email without @ symbol (should fail)
- [ ] Email with multiple @ symbols (should fail)
- [ ] Subject with exactly 5 characters (should pass)
- [ ] Subject with exactly 100 characters (should pass)
- [ ] Message with exactly 10 characters (should pass)
- [ ] Message with exactly 500 characters (should pass)

---

## Code Example (Template)

```typescript
// Validation utilities
const validateForm = (data: FormData) => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
    errors.name = "Name must contain only letters and spaces";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Valid email is required";
  }

  // Subject validation
  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  } else if (data.subject.length < 5 || data.subject.length > 100) {
    errors.subject = "Subject must be 5-100 characters";
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.length < 10 || data.message.length > 500) {
    errors.message = "Message must be 10-500 characters";
  }

  // Phone validation (optional)
  if (data.phone && !/^\d{10,15}$/.test(data.phone)) {
    errors.phone = "Phone must be 10-15 digits";
  }

  return errors;
};
```

---

## UX Considerations

- Error messages appear inline, not blocking
- Submit button shows disabled state when form invalid
- Success message appears prominently after submission
- Color coding: Red for errors, Green for success
- Form is keyboard accessible
- Error messages are read by screen readers

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-7](../TECHNICAL_DEBT.md#td-7-form-validation)

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Ready for Sprint Planning

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
