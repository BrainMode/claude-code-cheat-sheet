import type { CheatSheetPage } from '@/lib/types';

const configuration: CheatSheetPage = {
  id: 'configuration',
  title: {
    de: 'Konfiguration',
    en: 'Configuration',
  },
  description: {
    de: 'CLAUDE.md, Einstellungsdateien, Umgebungsvariablen und Berechtigungsmodi.',
    en: 'CLAUDE.md, settings files, environment variables, and permission modes.',
  },
  icon: 'Settings',
  sections: [
    // ================================================================
    // CLAUDE.md Memory
    // ================================================================
    {
      id: 'claude-md',
      title: {
        de: 'CLAUDE.md - Projekt-Gedaechtnis',
        en: 'CLAUDE.md - Project Memory',
      },
      description: {
        de: 'CLAUDE.md ist das persistente Gedaechtnis von Claude Code. Es speichert Projekt-Konventionen, Regeln und Kontext.',
        en: 'CLAUDE.md is Claude Code\'s persistent memory. It stores project conventions, rules, and context.',
      },
      entries: [
        {
          id: 'claude-md-hierarchy',
          title: {
            de: 'CLAUDE.md Hierarchie',
            en: 'CLAUDE.md Hierarchy',
          },
          description: {
            de: 'CLAUDE.md-Dateien werden in einer bestimmten Reihenfolge geladen. Hoeher priorisierte Dateien ueberschreiben niedrigere.',
            en: 'CLAUDE.md files are loaded in a specific order. Higher priority files override lower ones.',
          },
          category: 'claude-md',
          difficulty: 'intermediate',
          tags: ['claude.md', 'hierarchy', 'priority', 'precedence'],
          code: {
            code: '# CLAUDE.md Hierarchy (highest to lowest priority):\n# 1. Managed (enterprise) - ~/.claude/managed/CLAUDE.md\n# 2. Project root         - ./CLAUDE.md\n# 3. User home            - ~/.claude/CLAUDE.md\n# 4. Local (gitignored)   - ./CLAUDE.local.md',
            language: 'bash',
            title: {
              de: 'Prioritaetsreihenfolge',
              en: 'Priority Order',
            },
          },
          tip: {
            de: 'Managed-Dateien haben die hoechste Prioritaet und koennen nicht lokal ueberschrieben werden.',
            en: 'Managed files have the highest priority and cannot be overridden locally.',
          },
        },
        {
          id: 'claude-md-import',
          title: {
            de: 'Dateien importieren mit @path',
            en: 'Import Files with @path',
          },
          description: {
            de: 'Importiere andere Markdown-Dateien in CLAUDE.md mit der @path-Syntax. Pfade sind relativ zur CLAUDE.md.',
            en: 'Import other Markdown files into CLAUDE.md with the @path syntax. Paths are relative to the CLAUDE.md.',
          },
          category: 'claude-md',
          difficulty: 'intermediate',
          tags: ['claude.md', 'import', 'include', 'reference'],
          code: {
            code: '# In your CLAUDE.md:\n@docs/coding-standards.md\n@.claude/rules/security.md\n@team-conventions.md',
            language: 'markdown',
            title: {
              de: 'Import-Syntax',
              en: 'Import Syntax',
            },
          },
        },
        {
          id: 'claude-md-path-specific',
          title: {
            de: 'Pfad-spezifische Regeln',
            en: 'Path-Specific Rules',
          },
          description: {
            de: 'Definiere Regeln, die nur fuer bestimmte Dateipfade gelten, mittels YAML-Frontmatter in separaten Markdown-Dateien.',
            en: 'Define rules that only apply to specific file paths using YAML frontmatter in separate Markdown files.',
          },
          category: 'claude-md',
          difficulty: 'advanced',
          tags: ['claude.md', 'path', 'rules', 'frontmatter', 'yaml'],
          code: {
            code: '---\nglobs:\n  - "src/api/**/*.ts"\n  - "src/routes/**/*.ts"\n---\n\n# API Rules\n- Always validate request parameters with zod\n- Return standardized error responses\n- Add OpenAPI JSDoc comments to all endpoints',
            language: 'markdown',
            title: {
              de: 'Pfad-spezifische Regel mit YAML-Frontmatter',
              en: 'Path-Specific Rule with YAML Frontmatter',
            },
          },
        },
        {
          id: 'claude-md-init',
          title: {
            de: 'CLAUDE.md mit /init erstellen',
            en: 'Create CLAUDE.md with /init',
          },
          description: {
            de: 'Der /init-Befehl analysiert dein Projekt und erstellt automatisch eine sinnvolle CLAUDE.md.',
            en: 'The /init command analyzes your project and automatically creates a sensible CLAUDE.md.',
          },
          command: '/init',
          category: 'claude-md',
          difficulty: 'beginner',
          tags: ['init', 'claude.md', 'generate', 'bootstrap'],
          tip: {
            de: 'Claude analysiert dein Projekt (Sprache, Framework, Struktur) und generiert passende Anweisungen.',
            en: 'Claude analyzes your project (language, framework, structure) and generates appropriate instructions.',
          },
        },
        {
          id: 'claude-md-best-practices',
          title: {
            de: 'CLAUDE.md Best Practices',
            en: 'CLAUDE.md Best Practices',
          },
          description: {
            de: 'Empfehlungen fuer effektive CLAUDE.md-Dateien: Sei spezifisch, nutze Beispiele, definiere Konventionen klar.',
            en: 'Recommendations for effective CLAUDE.md files: Be specific, use examples, define conventions clearly.',
          },
          category: 'claude-md',
          difficulty: 'intermediate',
          tags: ['claude.md', 'tips', 'best-practices'],
          code: {
            code: '# Project: My App\n\n## Tech Stack\n- Next.js 15 with App Router\n- TypeScript strict mode\n- Tailwind CSS\n- Prisma ORM with PostgreSQL\n\n## Conventions\n- Use functional components with arrow functions\n- All API routes must validate input with zod\n- Prefer server components by default\n- Test files: *.test.ts next to source files\n\n## Common Commands\n- `npm run dev` - Start dev server\n- `npm run test` - Run tests\n- `npm run lint` - Lint code',
            language: 'markdown',
            title: {
              de: 'Beispiel einer guten CLAUDE.md',
              en: 'Example of a Good CLAUDE.md',
            },
          },
        },
      ],
    },

    // ================================================================
    // Settings Files
    // ================================================================
    {
      id: 'settings-files',
      title: {
        de: 'Einstellungsdateien',
        en: 'Settings Files',
      },
      description: {
        de: 'Claude Code verwendet JSON-Einstellungsdateien an verschiedenen Orten mit unterschiedlicher Prioritaet.',
        en: 'Claude Code uses JSON settings files at various locations with different priorities.',
      },
      entries: [
        {
          id: 'settings-locations',
          title: {
            de: 'Einstellungsorte und Prioritaet',
            en: 'Settings Locations and Precedence',
          },
          description: {
            de: 'Einstellungsdateien werden in einer bestimmten Reihenfolge geladen. Hoehere Prioritaet ueberschreibt niedrigere.',
            en: 'Settings files are loaded in a specific order. Higher priority overrides lower.',
          },
          category: 'settings',
          difficulty: 'intermediate',
          tags: ['settings', 'locations', 'precedence', 'priority'],
          code: {
            code: '# Settings precedence (highest to lowest):\n# 1. Managed (enterprise)  ~/.claude/managed/settings.json\n# 2. User settings         ~/.claude/settings.json\n# 3. Project settings      .claude/settings.json\n# 4. Local (gitignored)    .claude/settings.local.json',
            language: 'bash',
            title: {
              de: 'Prioritaetsreihenfolge der Einstellungen',
              en: 'Settings Precedence Order',
            },
          },
        },
        {
          id: 'settings-key-fields',
          title: {
            de: 'Wichtige Einstellungsfelder',
            en: 'Key Settings Fields',
          },
          description: {
            de: 'Die wichtigsten Felder in den Einstellungsdateien fuer die Konfiguration von Claude Code.',
            en: 'The most important fields in settings files for configuring Claude Code.',
          },
          category: 'settings',
          difficulty: 'intermediate',
          tags: ['settings', 'json', 'fields', 'config'],
          code: {
            code: '{\n  "permissions": {\n    "allow": [\n      "Bash(git *)",\n      "Bash(npm test)",\n      "Read",\n      "Edit"\n    ],\n    "deny": [\n      "Bash(rm -rf *)",\n      "Bash(curl *)",\n      "WebFetch"\n    ]\n  },\n  "env": {\n    "ANTHROPIC_MODEL": "claude-sonnet-4-20250514",\n    "BASH_DEFAULT_TIMEOUT_MS": "60000"\n  }\n}',
            language: 'json',
            title: {
              de: 'Beispiel settings.json',
              en: 'Example settings.json',
            },
          },
        },
        {
          id: 'settings-local',
          title: {
            de: 'Lokale Einstellungen (.local)',
            en: 'Local Settings (.local)',
          },
          description: {
            de: 'Dateien mit .local werden automatisch von Git ignoriert. Ideal fuer persoenliche Einstellungen, die nicht geteilt werden sollen.',
            en: 'Files with .local are automatically gitignored. Ideal for personal settings that should not be shared.',
          },
          category: 'settings',
          difficulty: 'intermediate',
          tags: ['settings', 'local', 'gitignore', 'personal'],
          tip: {
            de: 'Nutze .claude/settings.local.json fuer API-Keys und persoenliche Praeferenzen.',
            en: 'Use .claude/settings.local.json for API keys and personal preferences.',
          },
        },
      ],
    },

    // ================================================================
    // Environment Variables
    // ================================================================
    {
      id: 'env-vars',
      title: {
        de: 'Umgebungsvariablen',
        en: 'Environment Variables',
      },
      description: {
        de: 'Umgebungsvariablen zur Konfiguration von Claude Code.',
        en: 'Environment variables for configuring Claude Code.',
      },
      entries: [
        {
          id: 'env-api-key',
          title: {
            de: 'ANTHROPIC_API_KEY',
            en: 'ANTHROPIC_API_KEY',
          },
          description: {
            de: 'Setzt den Anthropic-API-Schluessel fuer die Authentifizierung. Notwendig fuer Headless-Nutzung und CI/CD.',
            en: 'Sets the Anthropic API key for authentication. Required for headless usage and CI/CD.',
          },
          command: 'export ANTHROPIC_API_KEY=sk-ant-...',
          category: 'env-vars',
          difficulty: 'beginner',
          tags: ['env', 'api-key', 'auth'],
        },
        {
          id: 'env-model',
          title: {
            de: 'ANTHROPIC_MODEL',
            en: 'ANTHROPIC_MODEL',
          },
          description: {
            de: 'Setzt das Standard-Modell fuer Claude Code. Kann durch --model ueberschrieben werden.',
            en: 'Sets the default model for Claude Code. Can be overridden by --model.',
          },
          command: 'export ANTHROPIC_MODEL=claude-sonnet-4-20250514',
          category: 'env-vars',
          difficulty: 'intermediate',
          tags: ['env', 'model', 'default'],
        },
        {
          id: 'env-bash-timeout',
          title: {
            de: 'BASH_DEFAULT_TIMEOUT_MS',
            en: 'BASH_DEFAULT_TIMEOUT_MS',
          },
          description: {
            de: 'Maximale Ausfuehrungszeit fuer Bash-Befehle in Millisekunden. Standard: 120000 (2 Minuten).',
            en: 'Maximum execution time for bash commands in milliseconds. Default: 120000 (2 minutes).',
          },
          command: 'export BASH_DEFAULT_TIMEOUT_MS=300000',
          category: 'env-vars',
          difficulty: 'intermediate',
          tags: ['env', 'timeout', 'bash'],
        },
        {
          id: 'env-disable-telemetry',
          title: {
            de: 'DISABLE_TELEMETRY',
            en: 'DISABLE_TELEMETRY',
          },
          description: {
            de: 'Deaktiviert die Telemetrie-Datenerfassung von Claude Code.',
            en: 'Disables telemetry data collection by Claude Code.',
          },
          command: 'export DISABLE_TELEMETRY=1',
          category: 'env-vars',
          difficulty: 'intermediate',
          tags: ['env', 'telemetry', 'privacy'],
        },
        {
          id: 'env-mcp-timeout',
          title: {
            de: 'MCP_TIMEOUT',
            en: 'MCP_TIMEOUT',
          },
          description: {
            de: 'Timeout fuer MCP-Server-Anfragen in Millisekunden.',
            en: 'Timeout for MCP server requests in milliseconds.',
          },
          command: 'export MCP_TIMEOUT=30000',
          category: 'env-vars',
          difficulty: 'advanced',
          tags: ['env', 'mcp', 'timeout'],
        },
        {
          id: 'env-max-mcp-output',
          title: {
            de: 'MAX_MCP_OUTPUT_TOKENS',
            en: 'MAX_MCP_OUTPUT_TOKENS',
          },
          description: {
            de: 'Maximale Anzahl von Tokens in MCP-Server-Antworten.',
            en: 'Maximum number of tokens in MCP server responses.',
          },
          command: 'export MAX_MCP_OUTPUT_TOKENS=50000',
          category: 'env-vars',
          difficulty: 'advanced',
          tags: ['env', 'mcp', 'tokens', 'limit'],
        },
        {
          id: 'env-max-output-tokens',
          title: {
            de: 'CLAUDE_CODE_MAX_OUTPUT_TOKENS',
            en: 'CLAUDE_CODE_MAX_OUTPUT_TOKENS',
          },
          description: {
            de: 'Maximale Anzahl der Ausgabe-Tokens pro Antwort von Claude Code.',
            en: 'Maximum number of output tokens per Claude Code response.',
          },
          command: 'export CLAUDE_CODE_MAX_OUTPUT_TOKENS=16000',
          category: 'env-vars',
          difficulty: 'advanced',
          tags: ['env', 'tokens', 'output', 'limit'],
        },
      ],
    },

    // ================================================================
    // Permission Modes
    // ================================================================
    {
      id: 'permission-modes',
      title: {
        de: 'Berechtigungsmodi',
        en: 'Permission Modes',
      },
      description: {
        de: 'Claude Code bietet verschiedene Berechtigungsmodi fuer unterschiedliche Sicherheitsniveaus.',
        en: 'Claude Code offers different permission modes for varying security levels.',
      },
      entries: [
        {
          id: 'perm-default',
          title: {
            de: 'Default-Modus',
            en: 'Default Mode',
          },
          description: {
            de: 'Fragt vor jeder potentiell aendernden Aktion nach Erlaubnis. Empfohlen fuer die meisten Anwendungsfaelle.',
            en: 'Asks for permission before every potentially modifying action. Recommended for most use cases.',
          },
          command: 'claude --permission-mode default',
          category: 'permissions',
          difficulty: 'beginner',
          tags: ['permissions', 'default', 'interactive'],
        },
        {
          id: 'perm-accept-edits',
          title: {
            de: 'AcceptEdits-Modus',
            en: 'AcceptEdits Mode',
          },
          description: {
            de: 'Erlaubt automatisch Datei-Bearbeitungen, fragt aber bei anderen Aktionen (z.B. Bash-Befehle) nach.',
            en: 'Automatically allows file edits but asks for permission on other actions (e.g., bash commands).',
          },
          command: 'claude --permission-mode acceptEdits',
          category: 'permissions',
          difficulty: 'intermediate',
          tags: ['permissions', 'accept', 'edits', 'auto'],
        },
        {
          id: 'perm-plan',
          title: {
            de: 'Plan-Modus',
            en: 'Plan Mode',
          },
          description: {
            de: 'Nur-Lese-Modus. Claude kann lesen und analysieren, aber keine Dateien aendern oder Befehle ausfuehren.',
            en: 'Read-only mode. Claude can read and analyze but cannot modify files or execute commands.',
          },
          command: 'claude --permission-mode plan',
          category: 'permissions',
          difficulty: 'intermediate',
          tags: ['permissions', 'plan', 'read-only', 'safe'],
          tip: {
            de: 'Nutze Shift+Tab, um schnell zwischen Plan und Normal zu wechseln.',
            en: 'Use Shift+Tab to quickly switch between Plan and Normal mode.',
          },
        },
        {
          id: 'perm-dont-ask',
          title: {
            de: 'DontAsk-Modus',
            en: 'DontAsk Mode',
          },
          description: {
            de: 'Fuehrt alle erlaubten Aktionen ohne Nachfrage aus. Verweigert alle nicht explizit erlaubten Aktionen.',
            en: 'Executes all allowed actions without asking. Denies all actions not explicitly allowed.',
          },
          command: 'claude --permission-mode dontAsk',
          category: 'permissions',
          difficulty: 'advanced',
          tags: ['permissions', 'auto', 'ci-cd', 'headless'],
          tip: {
            de: 'Ideal fuer CI/CD-Pipelines in Kombination mit allowedTools.',
            en: 'Ideal for CI/CD pipelines in combination with allowedTools.',
          },
        },
        {
          id: 'perm-bypass',
          title: {
            de: 'BypassPermissions-Modus',
            en: 'BypassPermissions Mode',
          },
          description: {
            de: 'Umgeht alle Berechtigungspruefungen. Nur fuer vertrauenswuerdige Umgebungen. Erfordert explizite Aktivierung.',
            en: 'Bypasses all permission checks. Only for trusted environments. Requires explicit activation.',
          },
          command: 'claude --permission-mode bypassPermissions',
          category: 'permissions',
          difficulty: 'advanced',
          tags: ['permissions', 'bypass', 'dangerous', 'trusted'],
          tip: {
            de: 'WARNUNG: Nur in isolierten/sandboxed Umgebungen verwenden!',
            en: 'WARNING: Only use in isolated/sandboxed environments!',
          },
        },
        {
          id: 'perm-allow-deny',
          title: {
            de: 'Allow/Deny Regeln',
            en: 'Allow/Deny Rules',
          },
          description: {
            de: 'Definiere granulare Regeln, welche Tools Claude ohne Nachfrage nutzen darf und welche blockiert werden.',
            en: 'Define granular rules for which tools Claude may use without asking and which are blocked.',
          },
          category: 'permissions',
          difficulty: 'advanced',
          tags: ['permissions', 'rules', 'allow', 'deny', 'tools'],
          code: {
            code: '// In .claude/settings.json:\n{\n  "permissions": {\n    "allow": [\n      "Read",\n      "Edit",\n      "Bash(git *)",\n      "Bash(npm test *)",\n      "Bash(npx tsc --noEmit)",\n      "mcp__github__*"\n    ],\n    "deny": [\n      "Bash(rm -rf *)",\n      "Bash(curl *)",\n      "Bash(wget *)",\n      "WebFetch"\n    ]\n  }\n}',
            language: 'json',
            title: {
              de: 'Beispiel Allow/Deny-Konfiguration',
              en: 'Example Allow/Deny Configuration',
            },
          },
        },
      ],
    },
  ],
};

export default configuration;
