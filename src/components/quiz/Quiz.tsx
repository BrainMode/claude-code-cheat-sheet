'use client';

import React, { useState, useCallback } from 'react';
import type { QuizConfig, Locale } from '@/lib/types';
import { QuizQuestion } from './QuizQuestion';
import { QuizSummary } from './QuizSummary';

interface QuizProps {
  config: QuizConfig;
  locale: Locale;
  className?: string;
}

export function Quiz({ config, locale, className = '' }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = config.questions.length;

  const handleAnswer = useCallback(
    (optionId: string) => {
      const newAnswers = [...answers, optionId];
      setAnswers(newAnswers);

      if (currentQuestionIndex + 1 >= totalQuestions) {
        // Quiz complete after a short delay for the last question feedback
        setTimeout(() => {
          setIsComplete(true);
        }, 500);
      } else {
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
        }, 500);
      }
    },
    [answers, currentQuestionIndex, totalQuestions]
  );

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsComplete(false);
  }, []);

  const correctAnswers = answers.reduce((count, answer, index) => {
    const question = config.questions[index];
    return count + (question && answer === question.correctOptionId ? 1 : 0);
  }, 0);

  const progress = isComplete
    ? 100
    : (currentQuestionIndex / totalQuestions) * 100;

  const title = config.title[locale] || config.title.en;
  const description = config.description[locale] || config.description.en;

  return (
    <div
      className={`rounded-lg border border-terminal-border bg-terminal-bg-card overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-terminal-border bg-terminal-bg-elevated">
        <h3 className="text-sm font-mono text-terminal-green font-bold">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-terminal-gray mt-0.5">{description}</p>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-terminal-border">
        <div
          className="h-full bg-terminal-green transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {isComplete ? (
          <QuizSummary
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            locale={locale}
            onRestart={handleRestart}
          />
        ) : (
          <QuizQuestion
            key={config.questions[currentQuestionIndex].id}
            question={config.questions[currentQuestionIndex]}
            locale={locale}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}
