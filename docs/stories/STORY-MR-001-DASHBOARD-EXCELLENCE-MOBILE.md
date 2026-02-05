# Story: Dashboard Excellence Mobile

**Story ID:** STORY-MR-001
**Epic:** EPIC-MR-001 (Mobile Responsiveness 100%)
**Phase:** Phase 1 - Critical Fixes
**Priority:** P0 CRITICAL
**Status:** DONE

---

## Story Summary

Restructure the ExcellencePage dashboard (StratOS) to provide a readable mobile layout by hiding the complex desktop dashboard on small screens and rendering a simplified mobile-only view with stacked KPI cards, while also fixing horizontal overflow caused by the decorative gear SVG.

---

## Acceptance Criteria

- [x] Dashboard readable at 320px viewport width
- [x] Zero horizontal scroll at any viewport width
- [x] KPI labels use `text-exc-text` in mobile block (contrast ratio >= 4.5:1 AA compliant)
- [x] Desktop dashboard layout remains completely unchanged
- [x] Gear SVG no longer causes overflow on any viewport
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
| `pages/ExcellencePage.tsx` | 14, 17, 46-195 |

### Implementation Steps

**Task 1.1: Hide desktop dashboard on mobile**

Wrap the existing dashboard block (lines 46-195) inside a `hidden md:block` container:

```tsx
{/* Desktop Dashboard - hidden on mobile */}
<div className="hidden md:block">
  {/* existing dashboard code from line 46-195 stays here unchanged */}
</div>
```

**Task 1.2: Create mobile-only KPI block**

Immediately after the `hidden md:block` wrapper, add a new `md:hidden` block with 3 KPIs stacked vertically as cards:

```tsx
{/* Mobile Dashboard - simplified KPIs */}
<div className="md:hidden mb-24">
  <div className="flex flex-col gap-4">
    {/* KPI 1: OEE */}
    <div className="bento-card p-6 bg-bg-card border-white/5">
      <h4 className="text-exc-text text-xs font-mono uppercase mb-2">Global OEE</h4>
      <div className="flex items-end justify-between">
        <div className="text-3xl text-white font-display font-bold">87.4%</div>
        <div className="text-green-400 text-xs flex items-center">
          <span className="material-symbols-outlined text-sm">trending_up</span> +2.4%
        </div>
      </div>
    </div>

    {/* KPI 2: Hoshin Goals */}
    <div className="bento-card p-6 bg-bg-card border-white/5">
      <h4 className="text-exc-text text-xs font-mono uppercase mb-2">Hoshin Goals</h4>
      <div className="flex items-end justify-between">
        <div className="text-3xl text-white font-display font-bold">12/15</div>
        <div className="text-xs text-exc-text">On Track</div>
      </div>
    </div>

    {/* KPI 3: Value Leakage */}
    <div className="bento-card p-6 bg-bg-card border-white/5">
      <h4 className="text-exc-text text-xs font-mono uppercase mb-2">Value Leakage</h4>
      <div className="flex items-end justify-between">
        <div className="text-3xl text-white font-display font-bold">$0</div>
        <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Optimal</div>
      </div>
    </div>

    {/* Simplified Active Agents */}
    <div className="bento-card p-6 bg-bg-card border-white/5">
      <h4 className="text-exc-text text-sm font-bold mb-4">Active Agents</h4>
      <div className="flex flex-col gap-3">
        {['GembaWalker_v2', 'Predictive_Maint', 'Quality_Guard'].map((agent, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <div className="flex-1">
              <div className="text-xs text-white font-mono">{agent}</div>
              <div className="text-[10px] text-exc-text">Uptime: 99.{9 - i}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
```

**Task 1.3: Mobile KPI labels use `text-exc-text` (NOT `text-exc-muted`)**

In the mobile block above, all label elements use `text-exc-text` instead of `text-exc-muted`. This fixes contrast:
- `text-exc-muted` (#5A7B94) on `bg-bg-card` (#0A0C10) = ~4.38:1 (FAILS AA for small text)
- `text-exc-text` (#CDD5DA) on `bg-bg-card` (#0A0C10) = ~13.71:1 (PASSES AA)

The 7 labels + 1 uptime text that need `text-exc-text` are already written as such in the mobile block above.

**Task 1.4: Include simplified "Active Agents" list**

Already included in Task 1.2 above - 3 agents with status indicator and uptime percentage.

**Task 1.5: Chart and sidebar hidden in mobile**

The chart (lines 126-173) and sidebar (lines 68-77) are contained within the `hidden md:block` wrapper from Task 1.1 and are therefore not rendered on mobile.

**Task 1.6: Add `overflow-hidden` to container parent**

On line 14, change the `max-w-[1400px]` container div:

```diff
- <div className="max-w-[1400px] mx-auto relative">
+ <div className="max-w-[1400px] mx-auto relative overflow-hidden">
```

**Task 1.7: Fix gear SVG positioning**

On line 17, change the absolute-positioned gear div:

```diff
- <div className="absolute top-0 right-[-10%] opacity-10 pointer-events-none z-0">
+ <div className="absolute top-0 right-0 opacity-10 pointer-events-none z-0">
```

This works because the parent now has `overflow-hidden`, so the gear will be clipped at the container edge rather than causing horizontal scroll.

---

## Testing

### Viewport Tests

| Viewport | Expected Result |
|----------|----------------|
| 320px | 3 KPI cards stacked, Active Agents list visible, no horizontal scroll, no desktop dashboard |
| 375px | Same as 320px, slightly more breathing room |
| 414px | Same as 375px |
| 768px+ | Full desktop dashboard visible, mobile block hidden |

### Visual Regression
- Desktop dashboard at 1440px should look exactly the same as before
- No changes to desktop KPI styling or chart rendering

---

## Dev Notes

- Extract KPI data to a `const` array to avoid JSX duplication between desktop and mobile blocks. Example:
  ```tsx
  const kpiData = [
    { label: 'Global OEE', value: '87.4%', trend: '+2.4%', trendColor: 'text-green-400' },
    { label: 'Hoshin Goals', value: '12/15', tag: 'On Track' },
    { label: 'Value Leakage', value: '$0', badge: 'Optimal' },
  ];
  ```
- The 7 labels + 1 uptime text that need `text-exc-text` in the mobile block:
  1. "Global OEE" label
  2. "Hoshin Goals" label
  3. "On Track" tag
  4. "Value Leakage" label
  5. "Last incident: 42 days ago" (not shown in mobile, acceptable)
  6. "Active Agents" heading
  7. Agent uptime texts (x3)
- Desktop dashboard remains completely unchanged - no class modifications to existing dashboard code
- The `overflow-hidden` on line 14 container only clips the decorative gear; all content stays within bounds

---

## File List

| File | Action | Lines |
|------|--------|-------|
| `pages/ExcellencePage.tsx` | Modify | 14 (add overflow-hidden), 17 (fix right position), 46-195 (wrap in hidden md:block), after 195 (add mobile block) |
