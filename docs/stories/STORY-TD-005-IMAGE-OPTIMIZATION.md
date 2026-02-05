# Story: Implement Image Optimization with WebP and Lazy Loading

**Story ID:** STORY-TD-005
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 4 - Q2 2025 (DEFERRED)
**Priority:** Low
**Status:** Deferred - Ready for Q2 Planning

---

## Story Summary

Implement image optimization infrastructure with WebP format support and lazy loading. This story is **deferred** until more images are added to the project, as current implementation has minimal images and would constitute premature optimization.

**GitHub Issue:** [#6](https://github.com/hugocapitelli/site-ex-mia/issues/6)

**Trigger Condition:** Implement when adding 3+ new images to the project

---

## Acceptance Criteria

- [ ] WebP conversion integrated in build process
- [ ] Image component created with srcset support
- [ ] Lazy loading implemented with Intersection Observer
- [ ] Fallback for non-WebP browsers (JPEG/PNG)
- [ ] Responsive image sizing configured
- [ ] Performance metrics verified
- [ ] Bundle size impact measured
- [ ] Documentation updated for developers

---

## Definition of Done

- [x] Story marked as deferred
- [ ] Ready for Q2 2025 sprint planning
- [ ] Trigger condition defined clearly
- [ ] Implementation path documented
- [ ] Team understands deferment rationale

---

## Why This Is Deferred

### Current State
- **Few images in project** (~2-3 images)
- **Minimal performance impact** from optimization
- **Development cost** would exceed benefit
- **No user complaints** about image performance

### YAGNI Principle
"You Aren't Gonna Need It" - avoid building features that aren't needed yet.

### Better Timing
- Wait until project has image-heavy pages
- Optimize when there's real performance need
- Bundle optimization then with other image work

---

## Technical Details

### What This Story Covers

#### 1. WebP Conversion
Convert images to WebP format for better compression:
- JPEG → WebP (30-50% smaller)
- PNG → WebP (25-35% smaller)
- Build-time conversion pipeline

#### 2. Responsive Images
Use srcset for responsive sizing:
```html
<img
  src="image-large.webp"
  srcset="image-small.webp 320w, image-medium.webp 800w, image-large.webp 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Description"
/>
```

#### 3. Lazy Loading
Defer image loading until needed:
```typescript
<img loading="lazy" src="..." />
// Or custom with Intersection Observer
```

#### 4. Fallbacks
Support non-WebP browsers:
```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="..." />
</picture>
```

---

## Implementation Approach

### Option A: Native HTML Features (Simple)
- Use `loading="lazy"` attribute (built-in lazy loading)
- Use `<picture>` element for WebP fallbacks
- Build-time conversion with sharp or similar
- Effort: ~2 hours
- Recommendation: ✅ Start here

### Option B: Image Component Library
- Use `next/image` or `astro:image` (if upgrading frameworks)
- Automatic optimization
- Built-in lazy loading
- Effort: ~2-3 hours (framework-dependent)

### Option C: Custom Image Component
- Build wrapper component with Intersection Observer
- Custom lazy loading logic
- Full control
- Effort: ~3-4 hours
- Recommendation: ❌ Over-engineered for current needs

**Recommendation:** Option A for simplicity

---

## Effort Estimate

**Estimated Time:** 2 hours
**Actual Time:** ___ minutes (when implemented)

**Breakdown:**
- Build pipeline setup (WebP conversion): 30 minutes
- Image component wrapper: 30 minutes
- Lazy loading implementation: 20 minutes
- Testing & optimization: 30 minutes

---

## Implementation Checklist (For Q2)

When trigger condition is met (3+ new images added):

### Setup Phase
- [ ] Install image conversion tool (sharp, imagemin, etc.)
- [ ] Configure build process for WebP conversion
- [ ] Create image directory structure
- [ ] Set up image optimization pipeline

### Component Phase
- [ ] Create `Image.tsx` component
- [ ] Implement srcset generation
- [ ] Add lazy loading support
- [ ] Add WebP + fallback support

### Testing Phase
- [ ] Verify WebP images created correctly
- [ ] Test lazy loading in browser
- [ ] Test fallbacks in older browsers
- [ ] Measure performance improvements
- [ ] Verify no missing images

### Documentation Phase
- [ ] Document image format requirements
- [ ] Document Image component usage
- [ ] Add examples to component library
- [ ] Update build process docs

---

## Performance Expectations (Q2 Implementation)

### Before Optimization
- Individual image sizes: ~200-500KB each
- Load all images upfront
- Total image load time: Significant

### After Optimization
- WebP images: 50-70% smaller
- Lazy loading: Images load on scroll
- Total image load time: ~50% reduction
- Page load time: Notably faster

**Realistic Expectations:**
- Initial page load: 2-3x faster
- Scroll performance: Smooth (lazy loading)
- Mobile performance: Significant improvement

---

## Tools & Libraries (Reference)

### Build-Time Conversion
- [sharp](https://sharp.pixelplumbing.com/) - Image processing
- [imagemin](https://github.com/imagemin/imagemin) - Image optimization
- [gulp-webp](https://github.com/sindresorhus/gulp-webp) - WebP converter

### Lazy Loading
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - Native browser API
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) - React library
- [lozad](https://www.npmjs.com/package/lozad) - Lightweight library

### Image Components
- [next/image](https://nextjs.org/docs/api-reference/next/image) - Next.js (if upgrading)
- [astro:image](https://docs.astro.build/en/guides/images/) - Astro (if upgrading)

---

## Browser Support

### WebP Support
- ✅ Chrome 23+
- ✅ Firefox 65+
- ✅ Safari 16+
- ✅ Edge 18+
- ⚠️ IE 11 (needs fallback)

### Lazy Loading Support
- ✅ Chrome 76+
- ✅ Firefox 75+
- ✅ Safari 15.1+
- ✅ Edge 79+
- ⚠️ IE 11 (polyfill needed)

### Strategy
Use `<picture>` + WebP for format support
Use native `loading="lazy"` with polyfill fallback

---

## Risk Assessment

**Risk Level:** Low
**Performance Impact:** Positive (improves performance)
**Breaking Changes:** None (transparent optimization)

**Considerations:**
- Build process changes (add conversion step)
- Developer workflow changes (new image format)
- Browser compatibility (plan for fallbacks)

---

## Dependencies & Prerequisites

### Before Starting (Q2)
- [ ] 3+ new images added to project
- [ ] Image directory structure planned
- [ ] Build tool configured
- [ ] Image optimization library selected

### Technical Requirements
- [ ] Build process supports new conversion tool
- [ ] Team familiar with WebP format
- [ ] Testing strategy for image optimization

---

## Deferment Review Trigger

This story should be revisited when:
- ✅ Project adds 3+ new images
- ✅ Performance testing shows image optimization needed
- ✅ User feedback indicates slow image loading
- ✅ Team capacity available in Q2

---

## Quality Checklist (For Q2)

When implementing:
- [ ] CodeRabbit review of image component
- [ ] Performance benchmarks measured
- [ ] Cross-browser testing completed
- [ ] Mobile performance verified
- [ ] Documentation complete

---

## Team Communication (Q2)

Before Q2 implementation, communicate:
- Image format requirements (PNG, JPEG → will become WebP)
- New Image component usage
- Build process changes
- Performance improvements expected

---

## Alternatives Considered

### Option 1: Don't Optimize
❌ **Con:** Eventually becomes necessary as project grows
✅ **Pro:** No work needed now

### Option 2: Optimize Now
❌ **Con:** Wasted effort on few images (YAGNI)
✅ **Pro:** Infrastructure ready

### Option 3: Defer Until Needed (Chosen)
✅ **Pro:** Optimize when there's real benefit
✅ **Pro:** Better ROI on development effort
✅ **Pro:** Builds on real data about image needs

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-5](../TECHNICAL_DEBT.md#td-5-missing-image-optimization)
- GitHub Issue: [#6](https://github.com/hugocapitelli/site-ex-mia/issues/6)

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Deferred - Ready for Q2 2025 Planning

**Deferment Rationale:** Premature optimization not needed until more images are added. Optimizing 2-3 images doesn't justify infrastructure cost. Revisit when trigger condition is met.

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
*Marked for deferred execution in Q2 2025*
