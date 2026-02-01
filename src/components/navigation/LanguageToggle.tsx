'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'de' | 'en') => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center rounded border border-terminal-border overflow-hidden">
      <button
        onClick={() => switchLocale('de')}
        className={`text-xs px-2 py-1 font-mono transition-colors ${
          locale === 'de'
            ? 'bg-terminal-green/15 text-terminal-green border-r border-terminal-green/50'
            : 'text-terminal-gray hover:text-terminal-white border-r border-terminal-border'
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`text-xs px-2 py-1 font-mono transition-colors ${
          locale === 'en'
            ? 'bg-terminal-green/15 text-terminal-green'
            : 'text-terminal-gray hover:text-terminal-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
