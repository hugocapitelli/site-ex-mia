# Story: Add Error Boundaries for Crash Resilience

**Story ID:** STORY-TD-004
**Epic:** EPIC-TD-001 (Technical Debt Remediation)
**Phase:** Phase 3 - Sprint 2
**Priority:** Medium
**Status:** Ready for Sprint Planning

---

## Story Summary

Implement React Error Boundaries to catch component rendering errors and prevent white screen of death. Currently if any component crashes, the entire application becomes unresponsive.

**GitHub Issue:** [#4](https://github.com/hugocapitelli/site-ex-mia/issues/4)

---

## Acceptance Criteria

- [ ] Create `ErrorBoundary` class component in `src/components/ErrorBoundary.tsx`
- [ ] Implement `getDerivedStateFromError()` lifecycle method
- [ ] Implement `componentDidCatch()` for error logging
- [ ] Wrap major page sections with error boundary in `App.tsx`
- [ ] Error logging works in development mode
- [ ] Graceful error display in production mode
- [ ] Error boundary testing passes (simulate component crash)
- [ ] No console errors from uncaught exceptions
- [ ] Users see helpful error message instead of blank page
- [ ] Application remains usable after error occurs

---

## Definition of Done

- [x] Story accepted by team
- [ ] ErrorBoundary component created and tested
- [ ] Error boundaries wrapped around all major sections
- [ ] Error logging configured
- [ ] Manual crash testing completed
- [ ] Code reviewed and approved
- [ ] Build succeeds
- [ ] Changes committed to main branch

---

## Technical Details

### Current State (No Error Boundary)
```
App crashes
    ↓
Component throws error
    ↓
React can't render
    ↓
White screen of death 💀
```

### Expected State (With Error Boundary)
```
App crashes
    ↓
Component throws error
    ↓
ErrorBoundary catches it
    ↓
Display fallback UI ✅
    ↓
User sees error message, app stays usable
```

### What Error Boundaries Catch
✅ Rendering errors
✅ Lifecycle method errors
✅ Constructor errors
❌ Event handler errors (use try-catch)
❌ Async code errors (use try-catch)
❌ Server-side rendering

### What Error Boundaries Don't Catch
- Event handler errors → Use try-catch
- Async code (setTimeout, promises) → Use try-catch
- Server-side rendering → Handle separately
- Error boundary itself crashes → Parent boundary catches it

---

## Effort Estimate

**Estimated Time:** 1 hour
**Actual Time:** ___ minutes

**Breakdown:**
- Create ErrorBoundary component: 15 minutes
- Implement dev/prod error handling: 15 minutes
- Wrap components: 10 minutes
- Test & verify: 20 minutes

---

## Implementation Guide

### Step 1: Create ErrorBoundary Component

```typescript
// src/components/ErrorBoundary.tsx
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error);
      console.error('Error info:', errorInfo);
    }

    // In production, you could send to error tracking service
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-8">
            <div className="max-w-md text-center">
              <h1 className="text-4xl font-bold text-red-500 mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry for the inconvenience. The application encountered an unexpected error.
              </p>

              {process.env.NODE_ENV === 'development' && (
                <details className="mb-6 text-left bg-gray-800 p-4 rounded text-xs text-gray-400">
                  <summary className="cursor-pointer font-bold mb-2">
                    Error Details (Dev Only)
                  </summary>
                  <pre className="overflow-auto">
                    {this.state.error?.toString()}
                  </pre>
                </details>
              )}

              <button
                onClick={() => window.location.reload()}
                className="bg-accent-primary text-black px-6 py-3 rounded font-bold hover:opacity-90 transition"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

### Step 2: Wrap Components in App.tsx

```typescript
// src/App.tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />

      <ErrorBoundary>
        {/* Page content */}
        {currentPage === Page.HOME && <HomePage />}
        {currentPage === Page.STUDIO && <StudioPage />}
        {currentPage === Page.ACADEMY && <AcademyPage />}
        {currentPage === Page.EXCELLENCE && <ExcellencePage />}
        {currentPage === Page.CONTACT && <ContactPage />}
      </ErrorBoundary>

      <Footer />
    </ErrorBoundary>
  );
}
```

### Step 3: Optional - Error Tracking Service

```typescript
// Production example: send errors to service
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service (Sentry, etc.)
    fetch('/api/logs/error', {
      method: 'POST',
      body: JSON.stringify({
        error: error.toString(),
        componentStack: errorInfo.componentStack,
        timestamp: new Date(),
      }),
    }).catch(console.error);
  }
}
```

---

## Testing Checklist

### Unit Testing
- [ ] ErrorBoundary catches errors correctly
- [ ] Fallback UI displays on error
- [ ] Error details show in development
- [ ] Error details hidden in production

### Manual Testing - Trigger Error
```typescript
// Temporarily modify a component to throw error:

function HomePage() {
  if (true) throw new Error('Test error');  // Remove after testing
  return <div>Home</div>;
}
```

Then:
- [ ] Load page
- [ ] Verify ErrorBoundary catches error
- [ ] Verify error message displays
- [ ] Click "Refresh Page" button → works correctly
- [ ] Revert test code

### Integration Testing
- [ ] Navigate through all pages without triggering errors
- [ ] No console warnings or errors
- [ ] Error boundary logs correctly
- [ ] Application recovers after error

### Edge Cases
- [ ] ErrorBoundary itself crashes? (Parent boundary catches it)
- [ ] Multiple error boundaries nested? (Works correctly)
- [ ] Error in event handler? (Not caught - expected)
- [ ] Async error? (Not caught - expected)

---

## Error Display (UX)

### Development Mode
Shows:
- Full error message
- Stack trace
- Component stack
- Detailed debugging info

### Production Mode
Shows:
- User-friendly error message
- "Refresh Page" button
- No technical details
- Reassuring tone

---

## Deployment Considerations

- Error boundaries are transparent in normal operation
- Zero performance impact when no errors occur
- Minimal performance impact on error (one render)
- No changes to existing component APIs
- Backward compatible

---

## Advanced Options

### Option 1: Multiple Boundaries (Recommended)
```typescript
<ErrorBoundary name="main">
  <Navbar />
  <ErrorBoundary name="page-content">
    {/* Page */}
  </ErrorBoundary>
  <Footer />
</ErrorBoundary>
```
**Benefit:** Navbar/Footer stay functional even if page crashes

### Option 2: Single Root Boundary
```typescript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```
**Benefit:** Simpler, catches all errors

**Recommendation:** Multiple boundaries for production robustness

---

## Monitoring & Analytics

### Optional: Error Metrics
```typescript
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // Track error metrics
  const errorEvent = {
    type: 'component_error',
    message: error.message,
    component: errorInfo.componentStack,
    timestamp: new Date(),
  };

  // Send to analytics
  // analytics.track(errorEvent);
}
```

---

## Documentation & Team Communication

After this story, document:
- Where error boundaries are placed
- How they work in dev vs production
- How developers can test with error boundaries
- Error handling best practices for team

---

## Related Issues

- Epic: [EPIC-TD-001](./EPIC-TECHNICAL-DEBT-REMEDIATION.md)
- Technical Debt: [TD-4](../TECHNICAL_DEBT.md#td-4-no-error-boundaries)
- React Docs: [Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

## Sign-Off

**Created by:** Morgan (PM)
**Date:** 2025-02-05
**Status:** Ready for Sprint Planning

---

*Derived from Technical Debt Assessment (QA-validated: 92/100)*
