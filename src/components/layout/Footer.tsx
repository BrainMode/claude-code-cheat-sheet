'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-terminal-border py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-terminal-gray font-mono">
        <p className="flex items-center gap-1">
          <span className="text-terminal-green">$</span>
          <span>echo &apos;{t('builtWith')}&apos;</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xs">{t('sources')}</span>
          <a
            href="https://docs.anthropic.com/en/docs/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-terminal-green hover:text-terminal-green-bright transition-colors underline underline-offset-2"
          >
            Anthropic Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
