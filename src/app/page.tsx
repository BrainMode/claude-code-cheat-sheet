'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const locale = browserLang.startsWith('de') ? 'de' : 'en';
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-terminal-bg">
      <div className="text-terminal-green font-mono text-lg">
        <span className="animate-typing-cursor">Loading...</span>
      </div>
    </div>
  );
}
