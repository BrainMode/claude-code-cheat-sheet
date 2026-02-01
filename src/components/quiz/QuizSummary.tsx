'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import type { Locale } from '@/lib/types';

interface QuizSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  locale: Locale;
  onRestart: () => void;
}

export function QuizSummary({
  totalQuestions,
  correctAnswers,
  locale,
  onRestart,
}: QuizSummaryProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) {
      return locale === 'de' ? 'Perfekt!' : 'Perfect!';
    }
    if (percentage >= 80) {
      return locale === 'de' ? 'Sehr gut!' : 'Great job!';
    }
    if (percentage >= 60) {
      return locale === 'de' ? 'Gut gemacht!' : 'Good work!';
    }
    return locale === 'de' ? 'Weiter ueben!' : 'Keep practicing!';
  };

  const restartLabel = locale === 'de' ? 'Nochmal versuchen' : 'Try again';
  const completeLabel = locale === 'de' ? 'Quiz abgeschlossen!' : 'Quiz complete!';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Terminal-style header */}
      <div className="font-mono text-sm text-terminal-green">
        $ echo &apos;{completeLabel}&apos;
      </div>

      {/* Score display */}
      <div className="text-center space-y-2">
        <div className="text-6xl font-mono font-bold text-terminal-green text-glow">
          {correctAnswers}/{totalQuestions}
        </div>
        <div className="text-lg text-terminal-gray font-mono">
          {getMessage()}
        </div>
      </div>

      {/* Percentage bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-mono text-terminal-gray">
          <span>0%</span>
          <span className="text-terminal-green">{percentage}%</span>
          <span>100%</span>
        </div>
        <div className="h-2 bg-terminal-border rounded-full overflow-hidden">
          <div
            className="h-full bg-terminal-green rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Restart button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-terminal-border bg-terminal-bg-card text-terminal-gray hover:text-terminal-green hover:border-terminal-green/30 transition-all duration-200 font-mono text-sm"
        >
          <RotateCcw size={14} />
          {restartLabel}
        </button>
      </div>
    </div>
  );
}
