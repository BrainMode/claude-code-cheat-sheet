'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TerminalHeader } from './TerminalHeader';
import type { TerminalProps } from './types';
import type { TerminalCommand } from '@/lib/types';

type Phase =
  | 'idle'
  | 'delayBefore'
  | 'typing'
  | 'processing'
  | 'output'
  | 'complete';

interface RenderedLine {
  type: 'prompt' | 'output';
  text: string;
  style?: string;
}

const OUTPUT_STYLE_CLASSES: Record<string, string> = {
  default: 'text-terminal-gray',
  success: 'text-terminal-green',
  error: 'text-terminal-red',
  warning: 'text-terminal-amber',
  info: 'text-terminal-cyan',
  muted: 'text-terminal-gray/50',
};

export function Terminal({
  demo,
  autoPlay = true,
  loop = false,
  showControls = true,
  className = '',
  locale,
}: TerminalProps) {
  const { prefersReducedMotion } = useReducedMotion();
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [typedText, setTypedText] = useState('');
  const [outputLineIndex, setOutputLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFinished, setIsFinished] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef(0);
  const charIndexRef = useRef(0);

  const title = demo.title[locale] || demo.title.en;
  const cwd = demo.cwd || '~/project';

  const clearTimers = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, typedText]);

  // Show all content immediately if reduced motion is preferred
  useEffect(() => {
    if (prefersReducedMotion) {
      const allLines: RenderedLine[] = [];
      for (const cmd of demo.commands) {
        allLines.push({
          type: 'prompt',
          text: cmd.command,
        });
        cmd.output.forEach((line, i) => {
          const style = cmd.outputStyle?.[i] || 'default';
          allLines.push({
            type: 'output',
            text: line,
            style,
          });
        });
      }
      setLines(allLines);
      setPhase('complete');
      setIsFinished(true);
      setIsPlaying(false);
    }
  }, [prefersReducedMotion, demo.commands]);

  // Main state machine
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!isPlaying) return;
    if (phase === 'complete') return;

    const commands = demo.commands;
    if (currentCommandIndex >= commands.length) {
      setPhase('complete');
      setIsFinished(true);
      setIsPlaying(false);

      if (loop) {
        timerRef.current = setTimeout(() => {
          clearTimers();
          setLines([]);
          setTypedText('');
          setCurrentCommandIndex(0);
          setOutputLineIndex(0);
          setPhase('idle');
          setIsFinished(false);
          setIsPlaying(true);
          charIndexRef.current = 0;
          lastTimestampRef.current = 0;
        }, 2000);
      }
      return;
    }

    const cmd: TerminalCommand = commands[currentCommandIndex];

    if (phase === 'idle') {
      const delay = cmd.delayBefore ?? 500;
      timerRef.current = setTimeout(() => {
        setPhase('typing');
        charIndexRef.current = 0;
        lastTimestampRef.current = 0;
        setTypedText('');
      }, delay);
      setPhase('delayBefore');
      return;
    }

    if (phase === 'typing') {
      const speed = cmd.typingSpeed ?? 40;

      const tick = (timestamp: number) => {
        if (lastTimestampRef.current === 0) {
          lastTimestampRef.current = timestamp;
        }

        const elapsed = timestamp - lastTimestampRef.current;

        if (elapsed >= speed) {
          charIndexRef.current += 1;
          lastTimestampRef.current = timestamp;

          if (charIndexRef.current >= cmd.command.length) {
            setTypedText(cmd.command);
            // Command typing complete - commit the prompt line
            setLines((prev) => [
              ...prev,
              { type: 'prompt', text: cmd.command },
            ]);
            setTypedText('');

            const processingDelay = cmd.processingDelay ?? 800;
            timerRef.current = setTimeout(() => {
              setOutputLineIndex(0);
              setPhase('output');
            }, processingDelay);
            return;
          }

          setTypedText(cmd.command.slice(0, charIndexRef.current));
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    if (phase === 'output') {
      if (cmd.output.length === 0 || outputLineIndex >= cmd.output.length) {
        // Move to next command
        setCurrentCommandIndex((prev) => prev + 1);
        setPhase('idle');
        return;
      }

      timerRef.current = setTimeout(() => {
        const style = cmd.outputStyle?.[outputLineIndex] || 'default';
        setLines((prev) => [
          ...prev,
          {
            type: 'output',
            text: cmd.output[outputLineIndex],
            style,
          },
        ]);
        setOutputLineIndex((prev) => prev + 1);
      }, 100);
      return;
    }

    return () => clearTimers();
  }, [
    phase,
    currentCommandIndex,
    outputLineIndex,
    isPlaying,
    prefersReducedMotion,
    demo.commands,
    loop,
    clearTimers,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const handleRestart = useCallback(() => {
    clearTimers();
    setLines([]);
    setTypedText('');
    setCurrentCommandIndex(0);
    setOutputLineIndex(0);
    setPhase('idle');
    setIsFinished(false);
    setIsPlaying(true);
    charIndexRef.current = 0;
    lastTimestampRef.current = 0;
  }, [clearTimers]);

  const handlePlayPause = useCallback(() => {
    if (isFinished) {
      handleRestart();
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  }, [isFinished, handleRestart]);

  const promptPrefix = (
    <span>
      <span className="text-terminal-cyan">{cwd}</span>
      <span className="text-terminal-white"> $ </span>
    </span>
  );

  return (
    <div
      className={`rounded-lg bg-terminal-bg-card border border-terminal-border overflow-hidden ${className}`}
    >
      <TerminalHeader title={title} />

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-4 min-h-[200px] max-h-[400px] overflow-y-auto font-mono text-sm leading-relaxed"
      >
        {/* Rendered history lines */}
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap break-all">
            {line.type === 'prompt' ? (
              <div>
                {promptPrefix}
                <span className="text-terminal-white">{line.text}</span>
              </div>
            ) : (
              <div className={OUTPUT_STYLE_CLASSES[line.style || 'default']}>
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {phase === 'typing' && (
          <div className="whitespace-pre-wrap break-all">
            {promptPrefix}
            <span className="text-terminal-white">{typedText}</span>
            <span className="animate-typing-cursor text-terminal-green">_</span>
          </div>
        )}

        {/* Waiting prompt (delayBefore or idle before first command) */}
        {(phase === 'delayBefore') && (
          <div className="whitespace-pre-wrap break-all">
            {promptPrefix}
            <span className="animate-typing-cursor text-terminal-green">_</span>
          </div>
        )}

        {/* Processing indicator */}
        {phase === 'processing' && (
          <div className="whitespace-pre-wrap break-all">
            {promptPrefix}
            <span className="text-terminal-gray">...</span>
          </div>
        )}

        {/* Final prompt when complete */}
        {phase === 'complete' && !prefersReducedMotion && (
          <div className="whitespace-pre-wrap break-all">
            {promptPrefix}
            <span className="animate-typing-cursor text-terminal-green">_</span>
          </div>
        )}
      </div>

      {/* Controls bar */}
      {showControls && (
        <div className="flex items-center gap-2 px-4 py-2 border-t border-terminal-border bg-terminal-bg-elevated">
          <button
            type="button"
            onClick={handlePlayPause}
            className="inline-flex items-center justify-center p-1.5 rounded text-terminal-gray hover:text-terminal-green transition-colors duration-200"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center justify-center p-1.5 rounded text-terminal-gray hover:text-terminal-green transition-colors duration-200"
            aria-label="Restart"
          >
            <RotateCcw size={14} />
          </button>
          <span className="ml-auto text-xs text-terminal-gray">
            {currentCommandIndex >= demo.commands.length
              ? demo.commands.length
              : currentCommandIndex + (phase !== 'idle' && phase !== 'delayBefore' ? 1 : 0)}
            /{demo.commands.length}
          </span>
        </div>
      )}
    </div>
  );
}
