import React from 'react';

type GlowTextElement = 'span' | 'h1' | 'h2' | 'h3' | 'p';

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  as?: GlowTextElement;
}

export function GlowText({ children, className = '', as: Tag = 'span' }: GlowTextProps) {
  return (
    <Tag className={`text-terminal-green text-glow ${className}`}>
      {children}
    </Tag>
  );
}
