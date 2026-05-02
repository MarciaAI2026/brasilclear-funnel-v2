'use client';

export type Variant = 'A' | 'B';

export function getVariant(): Variant {
  if (typeof window === 'undefined') return 'A';

  // Check URL param first (for testing)
  const urlParams = new URLSearchParams(window.location.search);
  const forced = urlParams.get('variant');
  if (forced === 'A' || forced === 'B') return forced;

  // Check localStorage for sticky assignment
  const stored = localStorage.getItem('brasilclear_variant');
  if (stored === 'A' || stored === 'B') return stored;

  // Random assignment (50/50)
  const variant: Variant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem('brasilclear_variant', variant);
  return variant;
}

export function trackEvent(event: string, variant: Variant, data?: Record<string, any>) {
  const payload = {
    event,
    variant,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...data
  };

  // Store in localStorage for analytics
  const events = JSON.parse(localStorage.getItem('brasilclear_events') || '[]');
  events.push(payload);
  localStorage.setItem('brasilclear_events', JSON.stringify(events));

  // Also log to console for debugging
  console.log('[Analytics]', payload);

  // Here you could also send to Google Analytics, Mixpanel, etc.
}

export function getAnalytics() {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('brasilclear_events') || '[]');
}
