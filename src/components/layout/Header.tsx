'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Terminal, Search, Menu } from 'lucide-react';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Link } from '@/i18n/navigation';

export function Header() {
  const t = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-terminal-bg-secondary border-b border-terminal-border">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group"
          >
            <Terminal className="w-5 h-5 text-terminal-green" />
            <span className="text-sm font-mono font-bold text-terminal-green text-glow group-hover:text-terminal-green-bright transition-colors">
              Claude Code
            </span>
          </Link>

          {/* Center: Search trigger */}
          <button
            id="search-trigger"
            onClick={() => document.dispatchEvent(new CustomEvent('open-search'))}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded border border-terminal-border bg-terminal-bg hover:border-terminal-green/50 hover:bg-terminal-bg-elevated transition-colors text-terminal-gray hover:text-terminal-white max-w-xs w-64"
          >
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span className="text-xs font-mono truncate">
              {t('search')}...
            </span>
            <kbd className="ml-auto hidden md:inline-flex items-center gap-0.5 text-[10px] font-mono text-terminal-gray bg-terminal-bg-elevated border border-terminal-border rounded px-1.5 py-0.5 shrink-0">
              Ctrl+K
            </kbd>
          </button>

          {/* Right: Language toggle + mobile menu button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-terminal-gray hover:text-terminal-green transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
