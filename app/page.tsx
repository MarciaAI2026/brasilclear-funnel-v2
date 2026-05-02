'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dianetica_1');
  }, [router]);

  return <div className="min-h-screen bg-gray-900" />;
}