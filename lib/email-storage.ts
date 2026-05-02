'use client';

export interface Subscriber {
  email: string;
  variant: 'A' | 'B';
  timestamp: string;
  source: string;
}

export function saveSubscriber(email: string, variant: 'A' | 'B'): void {
  const subscribers: Subscriber[] = JSON.parse(
    localStorage.getItem('brasilclear_subscribers') || '[]'
  );

  subscribers.push({
    email,
    variant,
    timestamp: new Date().toISOString(),
    source: window.location.href,
  });

  localStorage.setItem('brasilclear_subscribers', JSON.stringify(subscribers));
}

export function getSubscribers(): Subscriber[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('brasilclear_subscribers') || '[]');
}

export function exportSubscribersCSV(): string {
  const subscribers = getSubscribers();
  if (subscribers.length === 0) return '';

  const headers = ['Email', 'Variant', 'Timestamp', 'Source'];
  const rows = subscribers.map(s => [s.email, s.variant, s.timestamp, s.source]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}
