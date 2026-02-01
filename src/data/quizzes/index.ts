import type { QuizConfig } from '@/lib/types';

export const quizzes: QuizConfig[] = [
  // ================================================================
  // Quiz 1: Getting Started
  // ================================================================
  {
    id: 'quiz-getting-started',
    title: {
      de: 'Erste Schritte Quiz',
      en: 'Getting Started Quiz',
    },
    description: {
      de: 'Teste dein Wissen ueber Installation, Authentifizierung und grundlegende Nutzung.',
      en: 'Test your knowledge about installation, authentication, and basic usage.',
    },
    questions: [
      {
        id: 'gs-q1',
        question: {
          de: 'Wie installierst du Claude Code global?',
          en: 'How do you install Claude Code globally?',
        },
        options: [
          { id: 'a', text: { de: 'pip install claude-code', en: 'pip install claude-code' } },
          { id: 'b', text: { de: 'npm install -g @anthropic-ai/claude-code', en: 'npm install -g @anthropic-ai/claude-code' } },
          { id: 'c', text: { de: 'brew install claude-code', en: 'brew install claude-code' } },
          { id: 'd', text: { de: 'cargo install claude-code', en: 'cargo install claude-code' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'Claude Code wird als npm-Paket installiert mit: npm install -g @anthropic-ai/claude-code. Es erfordert Node.js 18+.',
          en: 'Claude Code is installed as an npm package with: npm install -g @anthropic-ai/claude-code. It requires Node.js 18+.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'gs-q2',
        question: {
          de: 'Welches Flag startet Claude Code im Headless-Modus?',
          en: 'Which flag starts Claude Code in headless mode?',
        },
        options: [
          { id: 'a', text: { de: '-h (headless)', en: '-h (headless)' } },
          { id: 'b', text: { de: '-s (silent)', en: '-s (silent)' } },
          { id: 'c', text: { de: '-p (print)', en: '-p (print)' } },
          { id: 'd', text: { de: '-q (quiet)', en: '-q (quiet)' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Das -p (oder --print) Flag startet Claude Code im Headless-Modus. Die Antwort wird direkt auf stdout ausgegeben.',
          en: 'The -p (or --print) flag starts Claude Code in headless mode. The response is printed directly to stdout.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'gs-q3',
        question: {
          de: 'Wie setzt du die letzte Session in Claude Code fort?',
          en: 'How do you continue the last session in Claude Code?',
        },
        options: [
          { id: 'a', text: { de: 'claude --last', en: 'claude --last' } },
          { id: 'b', text: { de: 'claude -r', en: 'claude -r' } },
          { id: 'c', text: { de: 'claude -c', en: 'claude -c' } },
          { id: 'd', text: { de: 'claude --session last', en: 'claude --session last' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'claude -c (oder --continue) setzt die letzte Konversation im aktuellen Verzeichnis fort. -r ist fuer das Fortsetzen einer bestimmten Session per ID.',
          en: 'claude -c (or --continue) continues the last conversation in the current directory. -r is for resuming a specific session by ID.',
        },
        difficulty: 'beginner',
      },
    ],
  },

  // ================================================================
  // Quiz 2: CLI Reference
  // ================================================================
  {
    id: 'quiz-cli-reference',
    title: {
      de: 'CLI-Referenz Quiz',
      en: 'CLI Reference Quiz',
    },
    description: {
      de: 'Teste dein Wissen ueber Befehle, Flags und Shortcuts.',
      en: 'Test your knowledge about commands, flags, and shortcuts.',
    },
    questions: [
      {
        id: 'cli-q1',
        question: {
          de: 'Was macht der /compact-Befehl?',
          en: 'What does the /compact command do?',
        },
        options: [
          { id: 'a', text: { de: 'Loescht den gesamten Kontext', en: 'Clears the entire context' } },
          { id: 'b', text: { de: 'Komprimiert den Kontext, um Tokens zu sparen', en: 'Compresses the context to save tokens' } },
          { id: 'c', text: { de: 'Minimiert das Terminalfenster', en: 'Minimizes the terminal window' } },
          { id: 'd', text: { de: 'Kompiliert den aktuellen Code', en: 'Compiles the current code' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: '/compact komprimiert den aktuellen Konversationskontext, um Tokens zu sparen, ohne den Verlauf komplett zu verlieren. /clear loescht ihn komplett.',
          en: '/compact compresses the current conversation context to save tokens without losing the history entirely. /clear clears it completely.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'cli-q2',
        question: {
          de: 'Was bewirkt Shift+Tab im interaktiven Modus?',
          en: 'What does Shift+Tab do in interactive mode?',
        },
        options: [
          { id: 'a', text: { de: 'Auto-Vervollstaendigung', en: 'Auto-completion' } },
          { id: 'b', text: { de: 'Wechsel zwischen Plan- und Normal-Modus', en: 'Toggle between Plan and Normal mode' } },
          { id: 'c', text: { de: 'Rueckgaengig machen', en: 'Undo last action' } },
          { id: 'd', text: { de: 'Tab-Einrueckung entfernen', en: 'Remove tab indentation' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'Shift+Tab wechselt zwischen dem Plan-Modus (nur lesen) und dem normalen Modus (lesen und schreiben). Essentiell fuer sichere Codebase-Exploration.',
          en: 'Shift+Tab toggles between Plan mode (read-only) and Normal mode (read and write). Essential for safe codebase exploration.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'cli-q3',
        question: {
          de: 'Was bedeutet das !-Prefix in Claude Code?',
          en: 'What does the ! prefix mean in Claude Code?',
        },
        options: [
          { id: 'a', text: { de: 'Kommentar', en: 'Comment' } },
          { id: 'b', text: { de: 'Negation eines Befehls', en: 'Negation of a command' } },
          { id: 'c', text: { de: 'Bash-Befehl direkt ausfuehren', en: 'Execute a bash command directly' } },
          { id: 'd', text: { de: 'Wichtige Nachricht markieren', en: 'Mark important message' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Das !-Prefix fuehrt einen Bash-Befehl direkt aus dem Claude Code-Prompt aus, z.B. !git status. Du verlaeÃsst dabei nicht die Session.',
          en: 'The ! prefix executes a bash command directly from the Claude Code prompt, e.g., !git status. You do not leave the session.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'cli-q4',
        question: {
          de: 'Was ist der Unterschied zwischen --system-prompt und --append-system-prompt?',
          en: 'What is the difference between --system-prompt and --append-system-prompt?',
        },
        options: [
          { id: 'a', text: { de: 'Kein Unterschied, beide sind Aliase', en: 'No difference, both are aliases' } },
          { id: 'b', text: { de: '--system-prompt ersetzt CLAUDE.md, --append-system-prompt ergaenzt es', en: '--system-prompt replaces CLAUDE.md, --append-system-prompt adds to it' } },
          { id: 'c', text: { de: '--system-prompt ist fuer User, --append fuer Admins', en: '--system-prompt is for users, --append is for admins' } },
          { id: 'd', text: { de: '--append-system-prompt wird nach der Antwort angehaengt', en: '--append-system-prompt is appended after the response' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: '--system-prompt ersetzt den CLAUDE.md-Inhalt komplett, waehrend --append-system-prompt den CLAUDE.md-Inhalt beibehaelt und den zusaetzlichen Prompt anhaengt.',
          en: '--system-prompt completely replaces CLAUDE.md content, while --append-system-prompt keeps CLAUDE.md content and appends the additional prompt.',
        },
        difficulty: 'advanced',
      },
    ],
  },

  // ================================================================
  // Quiz 3: Configuration
  // ================================================================
  {
    id: 'quiz-configuration',
    title: {
      de: 'Konfigurations-Quiz',
      en: 'Configuration Quiz',
    },
    description: {
      de: 'Teste dein Wissen ueber CLAUDE.md, Einstellungen und Umgebungsvariablen.',
      en: 'Test your knowledge about CLAUDE.md, settings, and environment variables.',
    },
    questions: [
      {
        id: 'cfg-q1',
        question: {
          de: 'Was ist der Hauptzweck von CLAUDE.md?',
          en: 'What is the main purpose of CLAUDE.md?',
        },
        options: [
          { id: 'a', text: { de: 'Projekt-Dokumentation fuer Entwickler', en: 'Project documentation for developers' } },
          { id: 'b', text: { de: 'Persistentes Gedaechtnis mit Projekt-Konventionen fuer Claude', en: 'Persistent memory with project conventions for Claude' } },
          { id: 'c', text: { de: 'Changelog fuer Claude Code Updates', en: 'Changelog for Claude Code updates' } },
          { id: 'd', text: { de: 'Konfigurationsdatei fuer den Editor', en: 'Configuration file for the editor' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'CLAUDE.md dient als persistentes Gedaechtnis fuer Claude Code. Es speichert Projekt-Konventionen, Regeln, Tech-Stack und Anweisungen, die Claude bei jeder Session liest.',
          en: 'CLAUDE.md serves as persistent memory for Claude Code. It stores project conventions, rules, tech stack, and instructions that Claude reads in every session.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'cfg-q2',
        question: {
          de: 'Welche CLAUDE.md-Datei hat die hoechste Prioritaet?',
          en: 'Which CLAUDE.md file has the highest priority?',
        },
        options: [
          { id: 'a', text: { de: 'Projekt-Root (./CLAUDE.md)', en: 'Project root (./CLAUDE.md)' } },
          { id: 'b', text: { de: 'User Home (~/.claude/CLAUDE.md)', en: 'User home (~/.claude/CLAUDE.md)' } },
          { id: 'c', text: { de: 'Managed (~/.claude/managed/CLAUDE.md)', en: 'Managed (~/.claude/managed/CLAUDE.md)' } },
          { id: 'd', text: { de: 'Local (./CLAUDE.local.md)', en: 'Local (./CLAUDE.local.md)' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Die Managed-Datei (~/.claude/managed/CLAUDE.md) hat die hoechste Prioritaet. Sie wird von Enterprise-Admins verwaltet und kann nicht lokal ueberschrieben werden.',
          en: 'The managed file (~/.claude/managed/CLAUDE.md) has the highest priority. It is managed by enterprise admins and cannot be overridden locally.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'cfg-q3',
        question: {
          de: 'Wie definierst du pfad-spezifische Regeln in CLAUDE.md?',
          en: 'How do you define path-specific rules in CLAUDE.md?',
        },
        options: [
          { id: 'a', text: { de: 'Mit # Path: src/api/ Kommentaren', en: 'With # Path: src/api/ comments' } },
          { id: 'b', text: { de: 'Mit YAML-Frontmatter und globs-Feld in separaten Markdown-Dateien', en: 'With YAML frontmatter and globs field in separate Markdown files' } },
          { id: 'c', text: { de: 'Mit [path=src/api] Abschnitten', en: 'With [path=src/api] sections' } },
          { id: 'd', text: { de: 'Pfad-spezifische Regeln werden nicht unterstuetzt', en: 'Path-specific rules are not supported' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'Pfad-spezifische Regeln werden in separaten Markdown-Dateien mit YAML-Frontmatter definiert. Das globs-Feld bestimmt, fuer welche Pfade die Regeln gelten.',
          en: 'Path-specific rules are defined in separate Markdown files with YAML frontmatter. The globs field determines which paths the rules apply to.',
        },
        difficulty: 'advanced',
      },
    ],
  },

  // ================================================================
  // Quiz 4: Advanced Features
  // ================================================================
  {
    id: 'quiz-advanced',
    title: {
      de: 'Erweiterte Funktionen Quiz',
      en: 'Advanced Features Quiz',
    },
    description: {
      de: 'Teste dein Wissen ueber Agenten, MCP, Hooks und Plan-Modus.',
      en: 'Test your knowledge about agents, MCP, hooks, and plan mode.',
    },
    questions: [
      {
        id: 'adv-q1',
        question: {
          de: 'Welcher eingebaute Agent ist schreibgeschuetzt (read-only)?',
          en: 'Which built-in agent is read-only?',
        },
        options: [
          { id: 'a', text: { de: 'Bash-Agent', en: 'Bash Agent' } },
          { id: 'b', text: { de: 'General-Purpose-Agent', en: 'General-Purpose Agent' } },
          { id: 'c', text: { de: 'Explore-Agent', en: 'Explore Agent' } },
          { id: 'd', text: { de: 'Plan-Agent', en: 'Plan Agent' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Der Explore-Agent ist schreibgeschuetzt. Er kann die Codebase lesen und durchsuchen, aber keine Dateien aendern oder Befehle ausfuehren.',
          en: 'The Explore agent is read-only. It can read and search the codebase but cannot modify files or execute commands.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'adv-q2',
        question: {
          de: 'Welches MCP-Transportprotokoll empfiehlt Anthropic?',
          en: 'Which MCP transport protocol does Anthropic recommend?',
        },
        options: [
          { id: 'a', text: { de: 'SSE (Server-Sent Events)', en: 'SSE (Server-Sent Events)' } },
          { id: 'b', text: { de: 'WebSocket', en: 'WebSocket' } },
          { id: 'c', text: { de: 'HTTP (Streamable HTTP)', en: 'HTTP (Streamable HTTP)' } },
          { id: 'd', text: { de: 'gRPC', en: 'gRPC' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Anthropic empfiehlt HTTP (Streamable HTTP) als MCP-Transport. SSE gilt als veraltet (deprecated). stdio wird fuer lokale Prozesse verwendet.',
          en: 'Anthropic recommends HTTP (Streamable HTTP) as MCP transport. SSE is considered deprecated. stdio is used for local processes.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'adv-q3',
        question: {
          de: 'Was bedeutet Exit Code 2 bei einem Hook?',
          en: 'What does exit code 2 mean for a hook?',
        },
        options: [
          { id: 'a', text: { de: 'Erfolg - Aktion fortsetzen', en: 'Success - continue action' } },
          { id: 'b', text: { de: 'Fehler - Hook ist fehlgeschlagen', en: 'Error - hook failed' } },
          { id: 'c', text: { de: 'Blockieren - Aktion verhindern', en: 'Block - prevent action' } },
          { id: 'd', text: { de: 'Neustart - Hook erneut ausfuehren', en: 'Restart - run hook again' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Exit Code 2 bei einem Hook bedeutet "Blockieren". Die anstehende Aktion wird verhindert. Exit Code 0 bedeutet Erfolg (fortfahren), andere Codes sind Fehler.',
          en: 'Exit code 2 for a hook means "Block". The pending action is prevented. Exit code 0 means success (continue), other codes are errors.',
        },
        difficulty: 'advanced',
      },
    ],
  },

  // ================================================================
  // Quiz 5: Best Practices
  // ================================================================
  {
    id: 'quiz-best-practices',
    title: {
      de: 'Best Practices Quiz',
      en: 'Best Practices Quiz',
    },
    description: {
      de: 'Teste dein Wissen ueber empfohlene Vorgehensweisen und Sicherheit.',
      en: 'Test your knowledge about recommended approaches and security.',
    },
    questions: [
      {
        id: 'bp-q1',
        question: {
          de: 'Fuer wie viel Prozent der Aufgaben empfiehlt Anthropic den "think hard:"-Modus?',
          en: 'For what percentage of tasks does Anthropic recommend "think hard:" mode?',
        },
        options: [
          { id: 'a', text: { de: '80% - fuer die meisten Aufgaben', en: '80% - for most tasks' } },
          { id: 'b', text: { de: '50% - fuer die Haelfte', en: '50% - for half' } },
          { id: 'c', text: { de: '15% - fuer maessig komplexe Aufgaben', en: '15% - for moderately complex tasks' } },
          { id: 'd', text: { de: '5% - nur fuer die komplexesten Aufgaben', en: '5% - only for the most complex tasks' } },
        ],
        correctOptionId: 'd',
        explanation: {
          de: 'Anthropic empfiehlt "think hard:" oder "ultrathink" nur fuer die komplexesten 5% der Aufgaben. Standard-Modus deckt 80% ab, "think:" die mittleren 15%.',
          en: 'Anthropic recommends "think hard:" or "ultrathink" only for the most complex 5% of tasks. Standard mode covers 80%, "think:" the middle 15%.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'bp-q2',
        question: {
          de: 'Warum sollte man nicht alle MCP-Server gleichzeitig aktivieren?',
          en: 'Why should you not enable all MCP servers at once?',
        },
        options: [
          { id: 'a', text: { de: 'Es gibt ein Limit von 3 MCP-Servern', en: 'There is a limit of 3 MCP servers' } },
          { id: 'b', text: { de: 'Es verursacht Sicherheitsprobleme', en: 'It causes security issues' } },
          { id: 'c', text: { de: 'Zu viele MCPs verlangsamen Claude und verbrauchen uebermassig Tokens', en: 'Too many MCPs slow down Claude and consume excessive tokens' } },
          { id: 'd', text: { de: 'MCP-Server koennen nur einzeln gestartet werden', en: 'MCP servers can only be started individually' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Zu viele aktive MCP-Server verlangsamen Claude, weil jeder Server Tool-Beschreibungen liefert, die Tokens verbrauchen und den Kontext aufblaechen.',
          en: 'Too many active MCP servers slow down Claude because each server provides tool descriptions that consume tokens and bloat the context.',
        },
        difficulty: 'intermediate',
      },
      {
        id: 'bp-q3',
        question: {
          de: 'Was ist der Zweck des everything-claude-code Repositories?',
          en: 'What is the purpose of the everything-claude-code repository?',
        },
        options: [
          { id: 'a', text: { de: 'Offizieller Claude Code Quellcode', en: 'Official Claude Code source code' } },
          { id: 'b', text: { de: 'Plugin-Sammlung mit Agenten, Skills und Befehlen', en: 'Plugin collection with agents, skills, and commands' } },
          { id: 'c', text: { de: 'Testdaten fuer Claude Code', en: 'Test data for Claude Code' } },
          { id: 'd', text: { de: 'Dokumentationsgenerator', en: 'Documentation generator' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'everything-claude-code ist ein Plugin-Repository mit 15+ Agenten, 30+ Skills und 20+ Befehlen. Es gewann den Anthropic x Forum Ventures Hackathon.',
          en: 'everything-claude-code is a plugin repository with 15+ agents, 30+ skills, and 20+ commands. It won the Anthropic x Forum Ventures hackathon.',
        },
        difficulty: 'intermediate',
      },
    ],
  },

  // ================================================================
  // Quiz 6: Reference & General Knowledge
  // ================================================================
  {
    id: 'quiz-reference',
    title: {
      de: 'Allgemeinwissen Quiz',
      en: 'General Knowledge Quiz',
    },
    description: {
      de: 'Teste dein allgemeines Wissen ueber Claude Code.',
      en: 'Test your general knowledge about Claude Code.',
    },
    questions: [
      {
        id: 'ref-q1',
        question: {
          de: 'Welche Node.js-Version wird mindestens fuer Claude Code benoetigt?',
          en: 'What is the minimum Node.js version required for Claude Code?',
        },
        options: [
          { id: 'a', text: { de: 'Node.js 14', en: 'Node.js 14' } },
          { id: 'b', text: { de: 'Node.js 16', en: 'Node.js 16' } },
          { id: 'c', text: { de: 'Node.js 18', en: 'Node.js 18' } },
          { id: 'd', text: { de: 'Node.js 20', en: 'Node.js 20' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Claude Code erfordert mindestens Node.js 18. Aeltere Versionen werden nicht unterstuetzt.',
          en: 'Claude Code requires at least Node.js 18. Older versions are not supported.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'ref-q2',
        question: {
          de: 'Wo findest du die offizielle Claude Code Dokumentation?',
          en: 'Where can you find the official Claude Code documentation?',
        },
        options: [
          { id: 'a', text: { de: 'docs.anthropic.com', en: 'docs.anthropic.com' } },
          { id: 'b', text: { de: 'code.claude.com', en: 'code.claude.com' } },
          { id: 'c', text: { de: 'claude.dev/docs', en: 'claude.dev/docs' } },
          { id: 'd', text: { de: 'github.com/anthropic/claude-code', en: 'github.com/anthropic/claude-code' } },
        ],
        correctOptionId: 'b',
        explanation: {
          de: 'Die offizielle Claude Code Dokumentation befindet sich auf code.claude.com. Sie ist immer aktuell und enthält alle Features.',
          en: 'The official Claude Code documentation is at code.claude.com. It is always up to date and covers all features.',
        },
        difficulty: 'beginner',
      },
      {
        id: 'ref-q3',
        question: {
          de: 'Wie viele Hook-Events unterstuetzt Claude Code?',
          en: 'How many hook events does Claude Code support?',
        },
        options: [
          { id: 'a', text: { de: '5 Events', en: '5 events' } },
          { id: 'b', text: { de: '8 Events', en: '8 events' } },
          { id: 'c', text: { de: '12 Events', en: '12 events' } },
          { id: 'd', text: { de: '20 Events', en: '20 events' } },
        ],
        correctOptionId: 'c',
        explanation: {
          de: 'Claude Code unterstuetzt 12 Hook-Events: SessionStart, SessionEnd, UserPromptSubmit, PreToolUse, PermissionRequest, PostToolUse, PostToolUseFailure, Notification, SubagentStart, SubagentStop, Stop und PreCompact.',
          en: 'Claude Code supports 12 hook events: SessionStart, SessionEnd, UserPromptSubmit, PreToolUse, PermissionRequest, PostToolUse, PostToolUseFailure, Notification, SubagentStart, SubagentStop, Stop, and PreCompact.',
        },
        difficulty: 'advanced',
      },
    ],
  },
];
