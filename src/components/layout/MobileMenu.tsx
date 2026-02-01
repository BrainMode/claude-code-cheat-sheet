'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Terminal, Rocket, Settings, Layers, Lightbulb, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { NAVIGATION } from '@/lib/constants';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  Rocket,
  Settings,
  Layers,
  Lightbulb,
  BookOpen,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-terminal-bg/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.nav
            className="relative w-72 h-full bg-terminal-bg border-r border-terminal-border flex flex-col"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-terminal-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-terminal-green" />
                <span className="text-sm font-mono font-bold text-terminal-green text-glow">
                  Claude Code
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-terminal-gray hover:text-terminal-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <ul className="flex-1 py-4 space-y-1 overflow-y-auto">
              {NAVIGATION.map((item) => {
                const Icon = ICON_MAP[item.icon];
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const tKey = item.titleKey.replace('nav.', '');

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-5 py-3 text-base font-mono transition-colors ${
                        isActive
                          ? 'border-l-2 border-terminal-green bg-terminal-green/10 text-terminal-green'
                          : 'border-l-2 border-transparent text-terminal-gray hover:text-terminal-green hover:bg-terminal-bg-elevated'
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 shrink-0 ${
                            isActive ? 'text-terminal-green' : ''
                          }`}
                        />
                      )}
                      <span>{t(tKey)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language toggle at bottom */}
            <div className="px-5 py-4 border-t border-terminal-border">
              <LanguageToggle />
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
