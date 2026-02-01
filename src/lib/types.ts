// ============================================================
// Core Content Types
// ============================================================

export interface Translation {
  de: string;
  en: string;
}

export type Locale = 'de' | 'en';

// ============================================================
// Cheat Sheet Content
// ============================================================

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type ContentCategory =
  | 'setup'
  | 'commands'
  | 'flags'
  | 'slash-commands'
  | 'keyboard-shortcuts'
  | 'output-formats'
  | 'claude-md'
  | 'settings'
  | 'env-vars'
  | 'permissions'
  | 'agents'
  | 'mcp'
  | 'hooks'
  | 'skills'
  | 'plan-mode'
  | 'headless'
  | 'best-practices'
  | 'hackathon'
  | 'sdk'
  | 'security'
  | 'reference'
  | 'community';

export interface CodeExample {
  code: string;
  language: string;
  title?: Translation;
  highlightLines?: number[];
}

export interface CheatSheetEntry {
  id: string;
  title: Translation;
  description: Translation;
  command?: string;
  code?: CodeExample;
  category: ContentCategory;
  difficulty: Difficulty;
  tags: string[];
  tip?: Translation;
  related?: string[];
  isNew?: boolean;
}

export interface CheatSheetSection {
  id: string;
  title: Translation;
  description?: Translation;
  entries: CheatSheetEntry[];
}

export interface CheatSheetPage {
  id: string;
  title: Translation;
  description: Translation;
  icon: string;
  sections: CheatSheetSection[];
}

// ============================================================
// Terminal Demo Types
// ============================================================

export interface TerminalCommand {
  command: string;
  output: string[];
  outputStyle?: ('default' | 'success' | 'error' | 'warning' | 'info' | 'muted')[];
  delayBefore?: number;
  typingSpeed?: number;
  processingDelay?: number;
}

export interface TerminalDemo {
  id: string;
  title: Translation;
  cwd?: string;
  commands: TerminalCommand[];
}

// ============================================================
// Quiz Types
// ============================================================

export interface QuizOption {
  id: string;
  text: Translation;
}

export interface QuizQuestion {
  id: string;
  question: Translation;
  options: QuizOption[];
  correctOptionId: string;
  explanation: Translation;
  difficulty: Difficulty;
  codeSnippet?: CodeExample;
}

export interface QuizConfig {
  id: string;
  title: Translation;
  description: Translation;
  questions: QuizQuestion[];
}

// ============================================================
// Navigation Types
// ============================================================

export interface NavItem {
  titleKey: string;
  href: string;
  icon: string;
  children?: NavItem[];
}

// ============================================================
// Search Types
// ============================================================

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  command?: string;
  category: ContentCategory;
  tags: string[];
  section: string;
  href: string;
  locale: Locale;
}
