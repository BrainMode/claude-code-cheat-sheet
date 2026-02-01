'use client';

import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import { NAVIGATION } from '@/lib/constants';
import {
  Terminal,
  Rocket,
  Settings,
  Layers,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  Rocket,
  Settings,
  Layers,
  Lightbulb,
  BookOpen,
};

export function Sidebar() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] bg-terminal-bg border-r border-terminal-border overflow-y-auto">
      <nav className="py-4" aria-label="Main navigation">
        <ul className="space-y-0.5">
          {NAVIGATION.map((item) => {
            const Icon = ICON_MAP[item.icon];
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            // Extract the translation key (e.g. "nav.gettingStarted" -> "gettingStarted")
            const tKey = item.titleKey.replace('nav.', '');

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-mono transition-colors ${
                    isActive
                      ? 'border-l-2 border-terminal-green bg-terminal-green/10 text-terminal-green'
                      : 'border-l-2 border-transparent text-terminal-gray hover:text-terminal-green hover:bg-terminal-bg-elevated'
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-terminal-green' : ''
                      }`}
                    />
                  )}
                  <span className="truncate">{t(tKey)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
