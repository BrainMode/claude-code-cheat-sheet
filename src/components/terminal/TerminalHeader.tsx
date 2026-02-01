import React from 'react';

interface TerminalHeaderProps {
  title?: string;
}

export function TerminalHeader({ title }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-terminal-bg-elevated border-b border-terminal-border">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-red" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
      </div>
      {title && (
        <span className="ml-2 text-xs text-terminal-gray font-mono truncate">
          {title}
        </span>
      )}
    </div>
  );
}
