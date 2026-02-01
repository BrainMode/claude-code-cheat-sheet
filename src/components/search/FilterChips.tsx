'use client';

import React, { useCallback } from 'react';

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterChipsProps {
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

export function FilterChips({
  options,
  selected,
  onChange,
  className = '',
}: FilterChipsProps) {
  const isAllSelected = selected.length === 0;

  const handleAllClick = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const handleChipClick = useCallback(
    (value: string) => {
      if (selected.includes(value)) {
        const next = selected.filter((v) => v !== value);
        onChange(next);
      } else {
        onChange([...selected, value]);
      }
    },
    [selected, onChange]
  );

  return (
    <div
      className={`flex items-center gap-2 flex-wrap ${className}`}
      role="group"
      aria-label="Filters"
    >
      {/* "All" chip */}
      <button
        type="button"
        onClick={handleAllClick}
        className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-mono transition-all duration-200 ${
          isAllSelected
            ? 'bg-terminal-green/15 border-terminal-green/50 text-terminal-green'
            : 'border-terminal-border text-terminal-gray hover:border-terminal-green/30'
        }`}
      >
        All
      </button>

      {/* Option chips */}
      {options.map((option) => {
        const isActive = selected.includes(option.value);

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChipClick(option.value)}
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-mono transition-all duration-200 ${
              isActive
                ? 'bg-terminal-green/15 border-terminal-green/50 text-terminal-green'
                : 'border-terminal-border text-terminal-gray hover:border-terminal-green/30'
            }`}
          >
            {option.label}
            {option.count !== undefined && (
              <span
                className={`ml-0.5 ${
                  isActive ? 'text-terminal-green/70' : 'text-terminal-gray/50'
                }`}
              >
                ({option.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
