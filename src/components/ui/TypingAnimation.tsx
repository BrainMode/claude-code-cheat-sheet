'use client';

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({
  text,
  speed,
  className = '',
  onComplete,
}: TypingAnimationProps) {
  const { displayText, isTyping, isComplete } = useTypewriter({
    text,
    speed,
    onComplete,
  });

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {!isComplete && (
        <span className="animate-typing-cursor text-terminal-green">_</span>
      )}
      {isComplete && isTyping === false && null}
    </span>
  );
}
