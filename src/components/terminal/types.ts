export type { TerminalCommand, TerminalDemo } from '@/lib/types';
import type { TerminalDemo, Locale } from '@/lib/types';

export interface TerminalProps {
  demo: TerminalDemo;
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  className?: string;
  locale: Locale;
}
