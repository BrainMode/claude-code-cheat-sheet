'use client';

import React, { useState } from 'react';
import { ChevronRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { CopyButton } from '@/components/code/CopyButton';
import type { CheatSheetEntry, Locale, Difficulty } from '@/lib/types';

interface CommandCardProps {
  entry: CheatSheetEntry;
  locale: Locale;
  className?: string;
}

const difficultyLabels: Record<Difficulty, Record<Locale, string>> = {
  beginner: { de: 'Anfaenger', en: 'Beginner' },
  intermediate: { de: 'Fortgeschritten', en: 'Intermediate' },
  advanced: { de: 'Experte', en: 'Advanced' },
};

const difficultyVariants: Record<Difficulty, 'green' | 'amber' | 'red'> = {
  beginner: 'green',
  intermediate: 'amber',
  advanced: 'red',
};

export function CommandCard({ entry, locale, className = '' }: CommandCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const title = entry.title[locale] || entry.title.en;
  const description = entry.description[locale] || entry.description.en;
  const tip = entry.tip ? (entry.tip[locale] || entry.tip.en) : null;
  const hasTipOrCode = !!tip || !!entry.code;

  return (
    <div
      className={`border border-terminal-border rounded-lg p-4 bg-terminal-bg-card transition-all duration-200 hover:border-terminal-green/30 hover:shadow-glow-green ${className}`}
      id={entry.id}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-mono font-bold text-terminal-white">
              {title}
            </h4>
            {entry.isNew && (
              <Badge variant="purple" size="sm">
                NEW
              </Badge>
            )}
            <Badge variant={difficultyVariants[entry.difficulty]} size="sm">
              {difficultyLabels[entry.difficulty][locale]}
            </Badge>
          </div>
        </div>
      </div>

      {/* Command */}
      {entry.command && (
        <div className="flex items-center gap-2 mb-2 group">
          <code className="flex-1 min-w-0 text-sm font-mono text-terminal-green bg-terminal-bg/50 rounded px-2 py-1 truncate">
            {entry.command}
          </code>
          <CopyButton text={entry.command} size="sm" />
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-terminal-gray mb-3 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      {entry.tags.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap mb-2">
          <Tag size={10} className="text-terminal-gray/50 flex-shrink-0" />
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-terminal-gray/70 bg-terminal-bg-elevated rounded px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Expandable section for tip and code */}
      {hasTipOrCode && (
        <>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-mono text-terminal-gray hover:text-terminal-green transition-colors duration-200 mt-1"
          >
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.15 }}
            >
              <ChevronRight size={12} />
            </motion.span>
            {isExpanded
              ? locale === 'de'
                ? 'Weniger anzeigen'
                : 'Show less'
              : locale === 'de'
                ? 'Mehr anzeigen'
                : 'Show more'}
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-terminal-border space-y-3">
                  {/* Tip */}
                  {tip && (
                    <div className="text-sm">
                      <span className="text-terminal-amber font-mono font-bold text-xs">
                        TIP:{' '}
                      </span>
                      <span className="text-terminal-gray">{tip}</span>
                    </div>
                  )}

                  {/* Code example */}
                  {entry.code && (
                    <div className="rounded-lg bg-terminal-bg border border-terminal-border overflow-hidden">
                      {entry.code.title && (
                        <div className="px-3 py-1.5 border-b border-terminal-border bg-terminal-bg-elevated">
                          <span className="text-xs font-mono text-terminal-gray">
                            {entry.code.title[locale] || entry.code.title.en}
                          </span>
                        </div>
                      )}
                      <div className="relative group">
                        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <CopyButton text={entry.code.code} size="sm" />
                        </div>
                        <pre className="p-3 text-sm font-mono text-terminal-white overflow-x-auto">
                          <code>{entry.code.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
