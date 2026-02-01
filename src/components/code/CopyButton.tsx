'use client';

import React from 'react';
import { Clipboard, Check } from 'lucide-react';
import { useClipboard } from '@/hooks/useClipboard';

type CopyButtonSize = 'sm' | 'md';

interface CopyButtonProps {
  text: string;
  size?: CopyButtonSize;
  className?: string;
}

const sizeMap: Record<CopyButtonSize, number> = {
  sm: 14,
  md: 16,
};

const paddingMap: Record<CopyButtonSize, string> = {
  sm: 'p-1',
  md: 'p-1.5',
};

export function CopyButton({ text, size = 'sm', className = '' }: CopyButtonProps) {
  const { copy, copied } = useClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className={`relative inline-flex items-center justify-center rounded text-terminal-gray hover:text-terminal-green transition-colors duration-200 ${paddingMap[size]} ${className}`}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      title={copied ? 'Copied!' : 'Copy'}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          copied ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Clipboard size={sizeMap[size]} />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Check size={sizeMap[size]} className="text-terminal-green" />
      </span>
      {/* Invisible element to maintain size */}
      <span className="invisible">
        <Clipboard size={sizeMap[size]} />
      </span>
    </button>
  );
}
