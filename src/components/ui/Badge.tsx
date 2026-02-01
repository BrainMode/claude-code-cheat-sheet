import React from 'react';

type BadgeVariant = 'green' | 'amber' | 'red' | 'gray' | 'purple';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  size?: BadgeSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  green: 'bg-terminal-green/10 text-terminal-green border-terminal-green/30',
  amber: 'bg-terminal-amber/10 text-terminal-amber border-terminal-amber/30',
  red: 'bg-terminal-red/10 text-terminal-red border-terminal-red/30',
  gray: 'bg-terminal-gray/10 text-terminal-gray border-terminal-gray/30',
  purple: 'bg-terminal-purple/10 text-terminal-purple border-terminal-purple/30',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
};

export function Badge({ children, variant, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}
