import type { NavItem } from './types';

export const NAVIGATION: NavItem[] = [
  {
    titleKey: 'nav.gettingStarted',
    href: '/getting-started',
    icon: 'Rocket',
  },
  {
    titleKey: 'nav.cliReference',
    href: '/cli-reference',
    icon: 'Terminal',
  },
  {
    titleKey: 'nav.configuration',
    href: '/configuration',
    icon: 'Settings',
  },
  {
    titleKey: 'nav.advanced',
    href: '/advanced',
    icon: 'Layers',
  },
  {
    titleKey: 'nav.bestPractices',
    href: '/best-practices',
    icon: 'Lightbulb',
  },
  {
    titleKey: 'nav.reference',
    href: '/reference',
    icon: 'BookOpen',
  },
];

export const LOCALES = ['de', 'en'] as const;
export const DEFAULT_LOCALE = 'de';

export const DIFFICULTY_COLORS = {
  beginner: {
    bg: 'bg-terminal-green/10',
    border: 'border-terminal-green/30',
    text: 'text-terminal-green',
  },
  intermediate: {
    bg: 'bg-terminal-amber/10',
    border: 'border-terminal-amber/30',
    text: 'text-terminal-amber',
  },
  advanced: {
    bg: 'bg-terminal-red/10',
    border: 'border-terminal-red/30',
    text: 'text-terminal-red',
  },
} as const;

export const CATEGORY_LABELS: Record<string, { de: string; en: string }> = {
  setup: { de: 'Setup', en: 'Setup' },
  commands: { de: 'Befehle', en: 'Commands' },
  flags: { de: 'Flags', en: 'Flags' },
  'slash-commands': { de: 'Slash Commands', en: 'Slash Commands' },
  'keyboard-shortcuts': { de: 'Tastenkuerzel', en: 'Keyboard Shortcuts' },
  'output-formats': { de: 'Ausgabeformate', en: 'Output Formats' },
  'claude-md': { de: 'CLAUDE.md', en: 'CLAUDE.md' },
  settings: { de: 'Einstellungen', en: 'Settings' },
  'env-vars': { de: 'Umgebungsvariablen', en: 'Environment Variables' },
  permissions: { de: 'Berechtigungen', en: 'Permissions' },
  agents: { de: 'Agenten', en: 'Agents' },
  mcp: { de: 'MCP', en: 'MCP' },
  hooks: { de: 'Hooks', en: 'Hooks' },
  skills: { de: 'Skills & Plugins', en: 'Skills & Plugins' },
  'plan-mode': { de: 'Plan Mode', en: 'Plan Mode' },
  headless: { de: 'Headless / CI', en: 'Headless / CI' },
  'best-practices': { de: 'Best Practices', en: 'Best Practices' },
  hackathon: { de: 'Hackathon', en: 'Hackathon' },
  sdk: { de: 'Agent SDK', en: 'Agent SDK' },
  security: { de: 'Sicherheit', en: 'Security' },
  reference: { de: 'Referenz', en: 'Reference' },
  community: { de: 'Community', en: 'Community' },
};
