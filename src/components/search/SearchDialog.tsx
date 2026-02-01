'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Command } from 'cmdk';
import { Search, X } from 'lucide-react';
import { createSearchIndex, searchItems } from '@/lib/search';
import type { SearchableItem, Locale } from '@/lib/types';

interface SearchDialogProps {
  items: SearchableItem[];
  locale: Locale;
  hideTrigger?: boolean;
}

export function SearchDialog({ items, locale, hideTrigger = false }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => createSearchIndex(items), [items]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchItems(fuse, query);
  }, [fuse, query]);

  // Group results by section
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchableItem[]> = {};
    results.forEach((item) => {
      if (!groups[item.section]) {
        groups[item.section] = [];
      }
      groups[item.section].push(item);
    });
    return groups;
  }, [results]);

  // Keyboard shortcut to open dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    const handleOpenSearch = () => setOpen(true);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('open-search', handleOpenSearch);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('open-search', handleOpenSearch);
    };
  }, [open]);

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      // Short delay to ensure the dialog is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [open]);

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery('');

      // Scroll to element if it's an anchor
      if (href.startsWith('#')) {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate if it's a full path
        window.location.href = href;
      }
    },
    []
  );

  const placeholderText =
    locale === 'de'
      ? 'Befehle durchsuchen...'
      : 'Search commands...';

  const noResultsText =
    locale === 'de'
      ? 'Keine Ergebnisse gefunden.'
      : 'No results found.';

  const hintText =
    locale === 'de'
      ? 'Tippen um zu suchen'
      : 'Type to search';

  if (!open) {
    if (hideTrigger) return null;
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-terminal-border bg-terminal-bg-card text-sm text-terminal-gray hover:border-terminal-green/30 hover:text-terminal-green transition-all duration-200 font-mono"
      >
        <Search size={14} />
        <span className="hidden sm:inline">{placeholderText}</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 ml-2 text-xs bg-terminal-bg-elevated border border-terminal-border rounded px-1.5 py-0.5">
          <span className="text-[10px]">&#8984;</span>K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Dialog */}
      <div className="fixed inset-x-0 top-[15%] mx-auto max-w-2xl px-4">
        <Command
          className="rounded-xl border border-terminal-border bg-terminal-bg-card shadow-2xl overflow-hidden"
          shouldFilter={false}
        >
          {/* Input area */}
          <div className="flex items-center gap-3 px-4 border-b border-terminal-border">
            <Search size={16} className="text-terminal-gray flex-shrink-0" />
            <Command.Input
              ref={inputRef}
              value={query}
              onValueChange={setQuery}
              placeholder={placeholderText}
              className="flex-1 h-12 bg-transparent text-terminal-white placeholder:text-terminal-gray font-mono text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-terminal-gray hover:text-terminal-white transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>

          {/* Results */}
          <Command.List className="max-h-80 overflow-y-auto p-2">
            {query.trim() === '' && (
              <div className="px-4 py-8 text-center text-sm text-terminal-gray font-mono">
                {hintText}
              </div>
            )}

            {query.trim() !== '' && results.length === 0 && (
              <Command.Empty className="px-4 py-8 text-center text-sm text-terminal-gray font-mono">
                {noResultsText}
              </Command.Empty>
            )}

            {Object.entries(groupedResults).map(([section, sectionItems]) => (
              <Command.Group
                key={section}
                heading={section}
                className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-terminal-gray/50 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
              >
                {sectionItems.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={item.id}
                    onSelect={() => handleSelect(item.href)}
                    className="flex flex-col gap-0.5 px-3 py-2 rounded-lg cursor-pointer text-sm font-mono transition-colors duration-150 data-[selected=true]:bg-terminal-bg-elevated data-[selected=true]:text-terminal-white hover:bg-terminal-bg-elevated"
                  >
                    <div className="flex items-center gap-2">
                      {item.command && (
                        <span className="text-terminal-green truncate">
                          {item.command}
                        </span>
                      )}
                      <span className="text-terminal-white truncate">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs text-terminal-gray/70 truncate">
                      {item.description}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>

          {/* Footer hints */}
          {results.length > 0 && (
            <div className="flex items-center gap-4 px-4 py-2 border-t border-terminal-border text-xs text-terminal-gray/50 font-mono">
              <span className="flex items-center gap-1">
                <kbd className="bg-terminal-bg-elevated border border-terminal-border rounded px-1 py-0.5 text-[10px]">
                  &#8593;&#8595;
                </kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="bg-terminal-bg-elevated border border-terminal-border rounded px-1 py-0.5 text-[10px]">
                  &#9166;
                </kbd>
                select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="bg-terminal-bg-elevated border border-terminal-border rounded px-1 py-0.5 text-[10px]">
                  esc
                </kbd>
                close
              </span>
            </div>
          )}
        </Command>
      </div>
    </div>
  );
}
