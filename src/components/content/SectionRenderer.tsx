import React from 'react';
import { CommandCard } from './CommandCard';
import type { CheatSheetSection, Locale } from '@/lib/types';

interface SectionRendererProps {
  section: CheatSheetSection;
  locale: Locale;
}

export function SectionRenderer({ section, locale }: SectionRendererProps) {
  const title = section.title[locale] || section.title.en;
  const description = section.description
    ? section.description[locale] || section.description.en
    : null;

  return (
    <section id={section.id} className="scroll-mt-20">
      {/* Section heading with anchor */}
      <div className="mb-6">
        <a
          href={`#${section.id}`}
          className="group inline-flex items-center gap-2"
        >
          <h2 className="text-xl font-mono font-bold text-terminal-green text-glow">
            <span className="text-terminal-gray/50 mr-1">#</span>
            {title}
          </h2>
          <span className="text-terminal-gray/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
            #
          </span>
        </a>
        {description && (
          <p className="mt-2 text-sm text-terminal-gray leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Entry cards */}
      <div className="space-y-3">
        {section.entries.map((entry) => (
          <CommandCard key={entry.id} entry={entry} locale={locale} />
        ))}
      </div>
    </section>
  );
}
