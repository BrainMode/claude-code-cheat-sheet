'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  showControls?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  showControls = false,
  className = '',
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initialOpen = new Set<string>();
    items.forEach((item) => {
      if (item.defaultOpen) {
        initialOpen.add(item.id);
      }
    });
    return initialOpen;
  });

  const toggleItem = useCallback(
    (id: string) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  const expandAll = useCallback(() => {
    setOpenIds(new Set(items.map((item) => item.id)));
  }, [items]);

  const collapseAll = useCallback(() => {
    setOpenIds(new Set());
  }, []);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Expand/Collapse controls */}
      {showControls && (
        <div className="flex items-center gap-3 mb-3">
          <button
            type="button"
            onClick={expandAll}
            className="text-xs font-mono text-terminal-gray hover:text-terminal-green transition-colors duration-200"
          >
            [+ Expand All]
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs font-mono text-terminal-gray hover:text-terminal-green transition-colors duration-200"
          >
            [- Collapse All]
          </button>
        </div>
      )}

      {/* Accordion items */}
      {items.map((item) => {
        const isOpen = openIds.has(item.id);

        return (
          <div
            key={item.id}
            className="border border-terminal-border rounded-lg overflow-hidden"
          >
            {/* Header button */}
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-center gap-2 px-4 py-3 text-left font-mono text-sm transition-colors duration-200 ${
                isOpen
                  ? 'bg-terminal-bg-elevated text-terminal-green'
                  : 'bg-terminal-bg-card text-terminal-white hover:bg-terminal-bg-elevated'
              }`}
              aria-expanded={isOpen}
            >
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-terminal-green"
              >
                <ChevronRight size={14} />
              </motion.span>
              <span className="truncate">{item.title}</span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 border-t border-terminal-border bg-terminal-bg-card">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
