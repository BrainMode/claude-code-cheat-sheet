'use client';

import { useEffect } from 'react';

interface UseKeyboardShortcutOptions {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  handler: (e: KeyboardEvent) => void;
  enabled?: boolean;
  ignoreInputs?: boolean;
}

export function useKeyboardShortcut({
  key,
  ctrl = false,
  meta = false,
  shift = false,
  handler,
  enabled = true,
  ignoreInputs = true,
}: UseKeyboardShortcutOptions): void {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (ignoreInputs) {
        const target = e.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
          return;
        }
        if (target.isContentEditable) {
          return;
        }
      }

      // For ctrl/meta: treat them as interchangeable (Ctrl on Windows/Linux = Cmd on Mac)
      const needsModifier = ctrl || meta;
      const hasModifier = e.ctrlKey || e.metaKey;
      const modifierMatch = needsModifier ? hasModifier : !hasModifier;
      const shiftMatch = shift ? e.shiftKey : !e.shiftKey;

      if (
        e.key.toLowerCase() === key.toLowerCase() &&
        modifierMatch &&
        shiftMatch
      ) {
        handler(e);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [key, ctrl, meta, shift, handler, enabled, ignoreInputs]);
}
