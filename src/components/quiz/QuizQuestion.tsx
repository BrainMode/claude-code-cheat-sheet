'use client';

import React, { useState } from 'react';
import type { QuizQuestion as QuizQuestionType, Locale } from '@/lib/types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  locale: Locale;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
}

const OPTION_PREFIXES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function QuizQuestion({
  question,
  locale,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const hasAnswered = selectedId !== null;
  const isCorrect = selectedId === question.correctOptionId;

  const handleSelect = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedId(optionId);
    // Delay callback to allow user to see feedback
    setTimeout(() => {
      onAnswer(optionId);
    }, 1500);
  };

  const questionText = question.question[locale] || question.question.en;
  const explanationText = question.explanation[locale] || question.explanation.en;

  return (
    <div className="space-y-4">
      {/* Question prompt */}
      <div className="font-mono">
        <span className="text-terminal-green font-bold">
          [Q{questionNumber}/{totalQuestions}]
        </span>
        <span className="text-terminal-green"> &gt; </span>
        <span className="text-terminal-white">{questionText}</span>
      </div>

      {/* Code snippet if present */}
      {question.codeSnippet && (
        <div className="rounded-lg bg-terminal-bg border border-terminal-border p-3 overflow-x-auto">
          <pre className="text-sm font-mono text-terminal-white">
            <code>{question.codeSnippet.code}</code>
          </pre>
        </div>
      )}

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((option, index) => {
          const optionText = option.text[locale] || option.text.en;
          const isThisCorrect = option.id === question.correctOptionId;
          const isThisSelected = option.id === selectedId;

          let borderClass = 'border-terminal-border';
          let bgClass = 'bg-terminal-bg-card';

          if (hasAnswered) {
            if (isThisCorrect) {
              borderClass = 'border-terminal-green';
              bgClass = 'bg-terminal-green/10';
            } else if (isThisSelected && !isThisCorrect) {
              borderClass = 'border-terminal-red';
              bgClass = 'bg-terminal-red/10';
            }
          }

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              disabled={hasAnswered}
              className={`w-full text-left rounded-lg border p-3 font-mono text-sm transition-all duration-200 ${borderClass} ${bgClass} ${
                hasAnswered
                  ? 'cursor-default'
                  : 'hover:border-terminal-green/30 hover:bg-terminal-bg-elevated cursor-pointer'
              }`}
            >
              <span className="text-terminal-green font-bold mr-2">
                [{OPTION_PREFIXES[index]}]
              </span>
              <span className={`${
                hasAnswered && isThisCorrect
                  ? 'text-terminal-green'
                  : hasAnswered && isThisSelected && !isThisCorrect
                    ? 'text-terminal-red'
                    : 'text-terminal-white'
              }`}>
                {optionText}
              </span>
              {hasAnswered && isThisCorrect && (
                <span className="ml-2 text-terminal-green text-xs">
                  &#10003;
                </span>
              )}
              {hasAnswered && isThisSelected && !isThisCorrect && (
                <span className="ml-2 text-terminal-red text-xs">
                  &#10007;
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback / Explanation */}
      {hasAnswered && (
        <div
          className={`rounded-lg border p-3 animate-fade-in ${
            isCorrect
              ? 'border-terminal-green/50 bg-terminal-green/5'
              : 'border-terminal-red/50 bg-terminal-red/5'
          }`}
        >
          <div className="font-mono text-sm mb-1">
            {isCorrect ? (
              <span className="text-terminal-green font-bold">
                $ echo &quot;Correct!&quot;
              </span>
            ) : (
              <span className="text-terminal-red font-bold">
                $ echo &quot;Incorrect&quot;
              </span>
            )}
          </div>
          <p className="text-terminal-gray text-sm">{explanationText}</p>
        </div>
      )}
    </div>
  );
}
