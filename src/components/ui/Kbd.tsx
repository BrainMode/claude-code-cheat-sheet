import React from 'react';

interface KbdProps {
  children: string;
}

export function Kbd({ children }: KbdProps) {
  return (
    <kbd className="inline-flex items-center justify-center bg-terminal-bg-elevated border border-terminal-border rounded px-1.5 py-0.5 text-xs font-mono text-terminal-gray leading-none">
      {children}
    </kbd>
  );
}
