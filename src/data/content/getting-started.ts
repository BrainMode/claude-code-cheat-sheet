import type { CheatSheetPage } from '@/lib/types';

const gettingStarted: CheatSheetPage = {
  id: 'getting-started',
  title: {
    de: 'Erste Schritte',
    en: 'Getting Started',
  },
  description: {
    de: 'Installation, Authentifizierung und grundlegende Nutzung von Claude Code.',
    en: 'Installation, authentication, and basic usage of Claude Code.',
  },
  icon: 'Rocket',
  sections: [
    // ================================================================
    // Installation
    // ================================================================
    {
      id: 'installation',
      title: {
        de: 'Installation',
        en: 'Installation',
      },
      description: {
        de: 'Claude Code installieren und einrichten.',
        en: 'Install and set up Claude Code.',
      },
      entries: [
        {
          id: 'install-npm',
          title: {
            de: 'Installation via npm',
            en: 'Install via npm',
          },
          description: {
            de: 'Claude Code global mit npm installieren. Erfordert Node.js 18 oder neuer.',
            en: 'Install Claude Code globally using npm. Requires Node.js 18 or newer.',
          },
          command: 'npm install -g @anthropic-ai/claude-code',
          category: 'setup',
          difficulty: 'beginner',
          tags: ['install', 'npm', 'setup'],
          tip: {
            de: 'Stelle sicher, dass Node.js >= 18 installiert ist. Pruefe mit: node --version',
            en: 'Make sure Node.js >= 18 is installed. Check with: node --version',
          },
        },
        {
          id: 'node-requirement',
          title: {
            de: 'Node.js-Anforderung',
            en: 'Node.js Requirement',
          },
          description: {
            de: 'Claude Code benoetigt Node.js Version 18 oder hoeher. Aeltere Versionen werden nicht unterstuetzt.',
            en: 'Claude Code requires Node.js version 18 or higher. Older versions are not supported.',
          },
          command: 'node --version',
          category: 'setup',
          difficulty: 'beginner',
          tags: ['node', 'requirements', 'version'],
        },
        {
          id: 'auth-claude-login',
          title: {
            de: 'Authentifizierung via Claude.ai',
            en: 'Authentication via Claude.ai',
          },
          description: {
            de: 'Melde dich beim ersten Start von Claude Code ueber deinen Browser bei Claude.ai an. Das ist die einfachste Methode.',
            en: 'Sign in through your browser at Claude.ai on the first launch of Claude Code. This is the simplest method.',
          },
          command: 'claude',
          category: 'setup',
          difficulty: 'beginner',
          tags: ['auth', 'login', 'claude.ai'],
          tip: {
            de: 'Ein Browserfenster oeffnet sich automatisch zur Authentifizierung.',
            en: 'A browser window opens automatically for authentication.',
          },
        },
        {
          id: 'auth-api-key',
          title: {
            de: 'Authentifizierung via API-Key',
            en: 'Authentication via API Key',
          },
          description: {
            de: 'Alternativ kannst du einen Anthropic-API-Key als Umgebungsvariable setzen. Nuetzlich fuer CI/CD und Headless-Umgebungen.',
            en: 'Alternatively, set an Anthropic API key as an environment variable. Useful for CI/CD and headless environments.',
          },
          command: 'export ANTHROPIC_API_KEY=sk-ant-...',
          category: 'setup',
          difficulty: 'beginner',
          tags: ['auth', 'api-key', 'env', 'ci-cd'],
          tip: {
            de: 'Fuege den Export in deine .bashrc oder .zshrc ein, um ihn dauerhaft zu machen.',
            en: 'Add the export to your .bashrc or .zshrc to make it permanent.',
          },
        },
      ],
    },

    // ================================================================
    // Basic Usage
    // ================================================================
    {
      id: 'basic-usage',
      title: {
        de: 'Grundlegende Nutzung',
        en: 'Basic Usage',
      },
      description: {
        de: 'Die wichtigsten Wege, Claude Code zu starten und zu verwenden.',
        en: 'The most important ways to start and use Claude Code.',
      },
      entries: [
        {
          id: 'interactive-mode',
          title: {
            de: 'Interaktiver Modus',
            en: 'Interactive Mode',
          },
          description: {
            de: 'Starte Claude Code im interaktiven REPL-Modus. Du kannst fortlaufend Fragen stellen und Aufgaben erteilen.',
            en: 'Start Claude Code in interactive REPL mode. You can continuously ask questions and assign tasks.',
          },
          command: 'claude',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['interactive', 'repl', 'start'],
        },
        {
          id: 'inline-prompt',
          title: {
            de: 'Direkte Anfrage',
            en: 'Inline Prompt',
          },
          description: {
            de: 'Starte Claude Code mit einer direkten Anfrage. Oeffnet den interaktiven Modus mit der initialen Nachricht.',
            en: 'Start Claude Code with a direct prompt. Opens interactive mode with the initial message.',
          },
          command: 'claude "explain this project"',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['prompt', 'inline', 'query'],
        },
        {
          id: 'headless-mode',
          title: {
            de: 'Headless-Modus (Print)',
            en: 'Headless Mode (Print)',
          },
          description: {
            de: 'Fuehre Claude Code ohne interaktive Oberflaeche aus. Die Antwort wird direkt auf stdout ausgegeben. Ideal fuer Skripte und CI/CD.',
            en: 'Run Claude Code without an interactive interface. The response is printed directly to stdout. Ideal for scripts and CI/CD.',
          },
          command: 'claude -p "query"',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['headless', 'print', 'ci-cd', 'scripting'],
          tip: {
            de: 'Im Headless-Modus wird keine Session gespeichert, es sei denn du verwendest --output-format.',
            en: 'In headless mode, no session is saved unless you use --output-format.',
          },
        },
        {
          id: 'piping-input',
          title: {
            de: 'Eingabe per Pipe',
            en: 'Piping Input',
          },
          description: {
            de: 'Leite Dateien oder Befehlsausgaben per Pipe an Claude Code weiter. Kombiniere mit -p fuer nicht-interaktive Verarbeitung.',
            en: 'Pipe files or command output into Claude Code. Combine with -p for non-interactive processing.',
          },
          command: 'cat file.ts | claude -p "review this code"',
          category: 'commands',
          difficulty: 'intermediate',
          tags: ['pipe', 'stdin', 'input', 'scripting'],
          tip: {
            de: 'Du kannst auch komplexere Pipes verwenden: git diff | claude -p "review changes"',
            en: 'You can also use more complex pipes: git diff | claude -p "review changes"',
          },
        },
      ],
    },

    // ================================================================
    // Sessions
    // ================================================================
    {
      id: 'sessions',
      title: {
        de: 'Sessions',
        en: 'Sessions',
      },
      description: {
        de: 'Sessions verwalten, fortsetzen und wiederherstellen.',
        en: 'Manage, continue, and resume sessions.',
      },
      entries: [
        {
          id: 'continue-session',
          title: {
            de: 'Session fortsetzen',
            en: 'Continue Session',
          },
          description: {
            de: 'Setze die letzte Konversation in diesem Verzeichnis fort. Claude erinnert sich an den vorherigen Kontext.',
            en: 'Continue the last conversation in this directory. Claude remembers the previous context.',
          },
          command: 'claude -c',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['session', 'continue', 'context'],
          tip: {
            de: 'Besonders nuetzlich, wenn du nach einer Pause an derselben Aufgabe weiterarbeiten willst.',
            en: 'Especially useful when you want to continue working on the same task after a break.',
          },
        },
        {
          id: 'resume-session',
          title: {
            de: 'Bestimmte Session fortsetzen',
            en: 'Resume Specific Session',
          },
          description: {
            de: 'Setze eine bestimmte Session ueber ihre ID fort. Zeigt eine Auswahliste, wenn keine ID angegeben wird.',
            en: 'Resume a specific session by its ID. Shows a selection list when no ID is provided.',
          },
          command: 'claude -r <session-id>',
          category: 'commands',
          difficulty: 'intermediate',
          tags: ['session', 'resume', 'history'],
        },
        {
          id: 'session-persistence',
          title: {
            de: 'Session-Persistenz',
            en: 'Session Persistence',
          },
          description: {
            de: 'Sessions werden standardmaessig automatisch gespeichert. Im Headless-Modus kann die Persistenz mit --no-session-persistence deaktiviert werden.',
            en: 'Sessions are saved automatically by default. In headless mode, persistence can be disabled with --no-session-persistence.',
          },
          command: 'claude -p "query" --no-session-persistence',
          category: 'commands',
          difficulty: 'intermediate',
          tags: ['session', 'persistence', 'headless'],
        },
      ],
    },
  ],
};

export default gettingStarted;
