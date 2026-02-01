'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
  reset: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  startDelay = 0,
  enabled = true,
  onComplete,
}: UseTypewriterProps): UseTypewriterReturn {
  const { prefersReducedMotion } = useReducedMotion();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const charIndexRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const delayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  const reset = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (delayTimeoutRef.current !== null) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
    charIndexRef.current = 0;
    lastTimestampRef.current = 0;
    setDisplayText('');
    setIsTyping(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!enabled) {
      reset();
      return;
    }

    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsTyping(false);
      setIsComplete(true);
      onCompleteRef.current?.();
      return;
    }

    const startTyping = () => {
      setIsTyping(true);
      charIndexRef.current = 0;
      lastTimestampRef.current = 0;

      const tick = (timestamp: number) => {
        if (lastTimestampRef.current === 0) {
          lastTimestampRef.current = timestamp;
        }

        const elapsed = timestamp - lastTimestampRef.current;

        if (elapsed >= speed) {
          charIndexRef.current += 1;
          lastTimestampRef.current = timestamp;

          if (charIndexRef.current >= text.length) {
            setDisplayText(text);
            setIsTyping(false);
            setIsComplete(true);
            onCompleteRef.current?.();
            return;
          }

          setDisplayText(text.slice(0, charIndexRef.current));
        }

        animationFrameRef.current = requestAnimationFrame(tick);
      };

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    if (startDelay > 0) {
      delayTimeoutRef.current = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (delayTimeoutRef.current !== null) {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = null;
      }
    };
  }, [text, speed, startDelay, enabled, prefersReducedMotion, reset]);

  return { displayText, isTyping, isComplete, reset };
}
