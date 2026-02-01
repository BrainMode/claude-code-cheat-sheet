import type { CheatSheetPage } from '@/lib/types';

const advancedFeatures: CheatSheetPage = {
  id: 'advanced',
  title: {
    de: 'Erweiterte Funktionen',
    en: 'Advanced Features',
  },
  description: {
    de: 'Subagenten, MCP, Hooks, Skills, Plan-Modus und Headless-Betrieb.',
    en: 'Subagents, MCP, Hooks, Skills, Plan Mode, and Headless operation.',
  },
  icon: 'Layers',
  sections: [
    // ================================================================
    // Subagents
    // ================================================================
    {
      id: 'subagents',
      title: {
        de: 'Subagenten',
        en: 'Subagents',
      },
      description: {
        de: 'Claude Code kann spezialisierte Subagenten fuer verschiedene Aufgaben einsetzen.',
        en: 'Claude Code can use specialized subagents for different tasks.',
      },
      entries: [
        {
          id: 'agent-explore',
          title: {
            de: 'Explore-Agent (eingebaut)',
            en: 'Explore Agent (Built-in)',
          },
          description: {
            de: 'Schreibgeschuetzter Agent zur Codebase-Erkundung. Kann lesen und suchen, aber nichts aendern. Ideal fuer Recherche.',
            en: 'Read-only agent for codebase exploration. Can read and search but not modify anything. Ideal for research.',
          },
          category: 'agents',
          difficulty: 'intermediate',
          tags: ['agent', 'explore', 'read-only', 'search'],
          tip: {
            de: 'Claude spawnt automatisch Explore-Agenten, wenn nur Lesezugriff benoetigt wird.',
            en: 'Claude automatically spawns Explore agents when only read access is needed.',
          },
        },
        {
          id: 'agent-plan',
          title: {
            de: 'Plan-Agent (eingebaut)',
            en: 'Plan Agent (Built-in)',
          },
          description: {
            de: 'Erstellt detaillierte Ausfuehrungsplaene basierend auf der Codebase-Analyse.',
            en: 'Creates detailed execution plans based on codebase analysis.',
          },
          category: 'agents',
          difficulty: 'intermediate',
          tags: ['agent', 'plan', 'strategy'],
        },
        {
          id: 'agent-general',
          title: {
            de: 'Allzweck-Agent (eingebaut)',
            en: 'General-Purpose Agent (Built-in)',
          },
          description: {
            de: 'Agent mit vollem Zugriff auf alle Standard-Tools. Wird fuer komplexe, zusammenhaengende Aufgaben verwendet.',
            en: 'Agent with full access to all standard tools. Used for complex, interconnected tasks.',
          },
          category: 'agents',
          difficulty: 'intermediate',
          tags: ['agent', 'general', 'full-access'],
        },
        {
          id: 'agent-bash',
          title: {
            de: 'Bash-Agent (eingebaut)',
            en: 'Bash Agent (Built-in)',
          },
          description: {
            de: 'Spezialisierter Agent fuer Shell-Befehle und Systeminteraktionen.',
            en: 'Specialized agent for shell commands and system interactions.',
          },
          category: 'agents',
          difficulty: 'intermediate',
          tags: ['agent', 'bash', 'shell', 'system'],
        },
        {
          id: 'agent-custom',
          title: {
            de: 'Benutzerdefinierte Agenten',
            en: 'Custom Agents',
          },
          description: {
            de: 'Erstelle eigene Agenten im .claude/agents/-Verzeichnis als Markdown-Dateien mit YAML-Frontmatter.',
            en: 'Create custom agents in the .claude/agents/ directory as Markdown files with YAML frontmatter.',
          },
          category: 'agents',
          difficulty: 'advanced',
          tags: ['agent', 'custom', 'yaml', 'frontmatter'],
          code: {
            code: '---\nname: security-reviewer\ndescription: Reviews code for security vulnerabilities\ntools:\n  - Read\n  - Glob\n  - Grep\n  - Bash(npm audit *)\nmodel: claude-sonnet-4-20250514\npermissionMode: plan\n---\n\n# Security Reviewer Agent\n\nYou are a security code reviewer. Analyze code for:\n- SQL injection vulnerabilities\n- XSS attack vectors\n- Authentication/authorization flaws\n- Sensitive data exposure\n- Dependency vulnerabilities\n\nAlways provide severity ratings (critical/high/medium/low).',
            language: 'markdown',
            title: {
              de: 'Beispiel: Security-Review-Agent',
              en: 'Example: Security Review Agent',
            },
          },
          isNew: true,
        },
        {
          id: 'agent-flag',
          title: {
            de: '--agents Flag',
            en: '--agents Flag',
          },
          description: {
            de: 'Lade benutzerdefinierte Agenten aus einem bestimmten Verzeichnis. Standard ist .claude/agents/.',
            en: 'Load custom agents from a specific directory. Default is .claude/agents/.',
          },
          command: 'claude --agents /path/to/agents/',
          category: 'agents',
          difficulty: 'advanced',
          tags: ['agents', 'flag', 'directory', 'custom'],
        },
      ],
    },

    // ================================================================
    // MCP (Model Context Protocol)
    // ================================================================
    {
      id: 'mcp',
      title: {
        de: 'MCP (Model Context Protocol)',
        en: 'MCP (Model Context Protocol)',
      },
      description: {
        de: 'Erweitere Claude Code mit externen Tools und Datenquellen ueber das Model Context Protocol.',
        en: 'Extend Claude Code with external tools and data sources via the Model Context Protocol.',
      },
      entries: [
        {
          id: 'mcp-transports',
          title: {
            de: 'MCP-Transportprotokolle',
            en: 'MCP Transport Protocols',
          },
          description: {
            de: 'MCP unterstuetzt verschiedene Transportprotokolle. HTTP (Streamable HTTP) wird empfohlen, SSE ist veraltet, stdio fuer lokale Prozesse.',
            en: 'MCP supports various transport protocols. HTTP (Streamable HTTP) is recommended, SSE is deprecated, stdio for local processes.',
          },
          category: 'mcp',
          difficulty: 'intermediate',
          tags: ['mcp', 'transport', 'http', 'sse', 'stdio'],
          code: {
            code: '# HTTP transport (recommended)\nclaude mcp add --transport http my-server https://api.example.com/mcp\n\n# SSE transport (deprecated)\nclaude mcp add --transport sse my-server https://api.example.com/sse\n\n# stdio transport (local process)\nclaude mcp add my-local-server -- npx my-mcp-server',
            language: 'bash',
            title: {
              de: 'Transportprotokolle',
              en: 'Transport Protocols',
            },
          },
        },
        {
          id: 'mcp-add',
          title: {
            de: 'MCP-Server hinzufuegen',
            en: 'Add MCP Server',
          },
          description: {
            de: 'Fuege einen neuen MCP-Server zu deiner Konfiguration hinzu.',
            en: 'Add a new MCP server to your configuration.',
          },
          command: 'claude mcp add <name> -- <command> [args...]',
          category: 'mcp',
          difficulty: 'intermediate',
          tags: ['mcp', 'add', 'server', 'install'],
        },
        {
          id: 'mcp-scopes',
          title: {
            de: 'MCP-Server Scopes',
            en: 'MCP Server Scopes',
          },
          description: {
            de: 'MCP-Server koennen auf verschiedenen Ebenen konfiguriert werden: local (nur du), project (Team), user (global).',
            en: 'MCP servers can be configured at different levels: local (only you), project (team), user (global).',
          },
          category: 'mcp',
          difficulty: 'intermediate',
          tags: ['mcp', 'scope', 'local', 'project', 'user'],
          code: {
            code: '# Local scope (gitignored, only you)\nclaude mcp add --scope local my-server -- npx my-server\n\n# Project scope (shared via .claude/settings.json)\nclaude mcp add --scope project my-server -- npx my-server\n\n# User scope (global, in ~/.claude/settings.json)\nclaude mcp add --scope user my-server -- npx my-server',
            language: 'bash',
            title: {
              de: 'MCP-Scopes',
              en: 'MCP Scopes',
            },
          },
        },
        {
          id: 'mcp-oauth',
          title: {
            de: 'MCP OAuth-Authentifizierung',
            en: 'MCP OAuth Authentication',
          },
          description: {
            de: 'Fuer MCP-Server, die OAuth benoetigen, nutze /mcp in der interaktiven Session zur Authentifizierung.',
            en: 'For MCP servers that require OAuth, use /mcp in the interactive session for authentication.',
          },
          command: '/mcp',
          category: 'mcp',
          difficulty: 'advanced',
          tags: ['mcp', 'oauth', 'auth', 'login'],
        },
        {
          id: 'mcp-github',
          title: {
            de: 'GitHub MCP-Server',
            en: 'GitHub MCP Server',
          },
          description: {
            de: 'Der offizielle GitHub MCP-Server bietet Zugriff auf Repositories, Issues, PRs und mehr.',
            en: 'The official GitHub MCP server provides access to repositories, issues, PRs, and more.',
          },
          command: 'claude mcp add github -- npx -y @modelcontextprotocol/server-github',
          category: 'mcp',
          difficulty: 'intermediate',
          tags: ['mcp', 'github', 'git', 'popular'],
          tip: {
            de: 'Setze GITHUB_PERSONAL_ACCESS_TOKEN als Umgebungsvariable.',
            en: 'Set GITHUB_PERSONAL_ACCESS_TOKEN as an environment variable.',
          },
        },
        {
          id: 'mcp-popular',
          title: {
            de: 'Beliebte MCP-Server',
            en: 'Popular MCP Servers',
          },
          description: {
            de: 'Uebersicht beliebter MCP-Server: Sentry (Fehlerverfolgung), Notion (Wissensmanagement), PostgreSQL (Datenbankzugriff).',
            en: 'Overview of popular MCP servers: Sentry (error tracking), Notion (knowledge management), PostgreSQL (database access).',
          },
          category: 'mcp',
          difficulty: 'intermediate',
          tags: ['mcp', 'sentry', 'notion', 'postgresql', 'popular'],
          code: {
            code: '# Sentry - Error tracking\nclaude mcp add sentry -- npx -y @modelcontextprotocol/server-sentry\n\n# Notion - Knowledge management\nclaude mcp add notion -- npx -y @modelcontextprotocol/server-notion\n\n# PostgreSQL - Database access\nclaude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres $DATABASE_URL',
            language: 'bash',
            title: {
              de: 'Beliebte MCP-Server installieren',
              en: 'Install Popular MCP Servers',
            },
          },
        },
      ],
    },

    // ================================================================
    // Hooks
    // ================================================================
    {
      id: 'hooks',
      title: {
        de: 'Hooks',
        en: 'Hooks',
      },
      description: {
        de: 'Hooks ermoeglich es, automatisch Code bei bestimmten Ereignissen in Claude Code auszufuehren.',
        en: 'Hooks allow automatic code execution on specific events in Claude Code.',
      },
      entries: [
        {
          id: 'hooks-overview',
          title: {
            de: 'Hook-Events (12 Ereignisse)',
            en: 'Hook Events (12 Events)',
          },
          description: {
            de: 'Claude Code unterstuetzt 12 verschiedene Hook-Ereignisse, die den gesamten Lebenszyklus einer Session abdecken.',
            en: 'Claude Code supports 12 different hook events covering the entire lifecycle of a session.',
          },
          category: 'hooks',
          difficulty: 'advanced',
          tags: ['hooks', 'events', 'lifecycle'],
          code: {
            code: '// All 12 hook events:\n// Session lifecycle:\n//   SessionStart       - Session begins\n//   SessionEnd         - Session ends\n//\n// User interaction:\n//   UserPromptSubmit   - User sends a prompt\n//\n// Tool lifecycle:\n//   PreToolUse         - Before a tool executes\n//   PermissionRequest  - When tool needs permission\n//   PostToolUse        - After tool completes\n//   PostToolUseFailure - After tool fails\n//\n// Agent lifecycle:\n//   SubagentStart      - Subagent spawns\n//   SubagentStop       - Subagent finishes\n//\n// Other:\n//   Notification       - Notification event\n//   Stop               - Claude stops responding\n//   PreCompact         - Before context compaction',
            language: 'typescript',
            title: {
              de: 'Alle 12 Hook-Events',
              en: 'All 12 Hook Events',
            },
          },
        },
        {
          id: 'hooks-types',
          title: {
            de: 'Hook-Typen',
            en: 'Hook Types',
          },
          description: {
            de: 'Es gibt drei Hook-Typen: command (Shell-Befehl), prompt (Claude-Prompt injizieren), agent (Claude als Hook-Ausfuehrer).',
            en: 'There are three hook types: command (shell command), prompt (inject Claude prompt), agent (Claude as hook executor).',
          },
          category: 'hooks',
          difficulty: 'advanced',
          tags: ['hooks', 'types', 'command', 'prompt', 'agent'],
          code: {
            code: '// In .claude/settings.json:\n{\n  "hooks": {\n    "PreToolUse": [\n      {\n        "type": "command",\n        "command": "python3 validate_tool.py"\n      }\n    ],\n    "SessionStart": [\n      {\n        "type": "prompt",\n        "prompt": "Always greet the user in German first."\n      }\n    ],\n    "Stop": [\n      {\n        "type": "agent",\n        "prompt": "Summarize what was accomplished."\n      }\n    ]\n  }\n}',
            language: 'json',
            title: {
              de: 'Die drei Hook-Typen',
              en: 'The Three Hook Types',
            },
          },
        },
        {
          id: 'hooks-exit-codes',
          title: {
            de: 'Hook Exit Codes',
            en: 'Hook Exit Codes',
          },
          description: {
            de: 'Hook-Exit-Codes steuern das Verhalten: 0 = Erfolg (fortfahren), 2 = Blockieren (Aktion verhindern), andere = Fehler.',
            en: 'Hook exit codes control behavior: 0 = success (continue), 2 = block (prevent action), other = error.',
          },
          category: 'hooks',
          difficulty: 'advanced',
          tags: ['hooks', 'exit-codes', 'block', 'validation'],
          code: {
            code: '#!/bin/bash\n# Example: Block deletion commands\n# Hook type: command, Event: PreToolUse\n\nTOOL_NAME="$CLAUDE_TOOL_NAME"\nTOOL_INPUT="$CLAUDE_TOOL_INPUT"\n\nif [[ "$TOOL_NAME" == "Bash" ]] && echo "$TOOL_INPUT" | grep -q "rm -rf"; then\n  echo "BLOCKED: Destructive rm -rf command detected"\n  exit 2  # Exit code 2 = block the action\nfi\n\nexit 0  # Exit code 0 = allow the action',
            language: 'bash',
            title: {
              de: 'Beispiel: Destruktive Befehle blockieren',
              en: 'Example: Block Destructive Commands',
            },
          },
          tip: {
            de: 'Exit Code 2 ist besonders nuetzlich fuer Validierungs-Hooks bei PreToolUse.',
            en: 'Exit code 2 is especially useful for validation hooks on PreToolUse.',
          },
        },
        {
          id: 'hooks-command',
          title: {
            de: '/hooks - Hooks verwalten',
            en: '/hooks - Manage Hooks',
          },
          description: {
            de: 'Der /hooks Slash-Befehl zeigt alle konfigurierten Hooks und ermoeglicht interaktive Verwaltung.',
            en: 'The /hooks slash command shows all configured hooks and enables interactive management.',
          },
          command: '/hooks',
          category: 'hooks',
          difficulty: 'advanced',
          tags: ['hooks', 'manage', 'slash-command'],
          isNew: true,
        },
      ],
    },

    // ================================================================
    // Skills & Plugins
    // ================================================================
    {
      id: 'skills-plugins',
      title: {
        de: 'Skills & Plugins',
        en: 'Skills & Plugins',
      },
      description: {
        de: 'Erweitere Claude Code mit Skills und Plugins fuer spezialisierte Funktionalitaet.',
        en: 'Extend Claude Code with Skills and Plugins for specialized functionality.',
      },
      entries: [
        {
          id: 'skill-format',
          title: {
            de: 'SKILL.md Format',
            en: 'SKILL.md Format',
          },
          description: {
            de: 'Skills werden als Markdown-Dateien mit YAML-Frontmatter definiert und in .claude/skills/ gespeichert.',
            en: 'Skills are defined as Markdown files with YAML frontmatter and stored in .claude/skills/.',
          },
          category: 'skills',
          difficulty: 'advanced',
          tags: ['skills', 'format', 'markdown', 'frontmatter'],
          code: {
            code: '---\nname: deploy\ndescription: Deploy the application to production\ncommand: /deploy\ntools:\n  - Bash\n---\n\n# Deploy Skill\n\nWhen the user runs /deploy:\n1. Run the test suite: `npm test`\n2. Build the project: `npm run build`\n3. Deploy to production: `npm run deploy`\n4. Verify the deployment is healthy',
            language: 'markdown',
            title: {
              de: 'Beispiel SKILL.md',
              en: 'Example SKILL.md',
            },
          },
        },
        {
          id: 'skill-locations',
          title: {
            de: 'Skill-Speicherorte',
            en: 'Skill Locations',
          },
          description: {
            de: 'Skills koennen in .claude/skills/ im Projektverzeichnis oder in ~/.claude/skills/ global abgelegt werden.',
            en: 'Skills can be placed in .claude/skills/ in the project directory or globally in ~/.claude/skills/.',
          },
          category: 'skills',
          difficulty: 'advanced',
          tags: ['skills', 'location', 'directory', 'path'],
        },
        {
          id: 'plugin-format',
          title: {
            de: 'Plugin-Format (plugin.json)',
            en: 'Plugin Format (plugin.json)',
          },
          description: {
            de: 'Plugins sind Pakete, die Skills, Agenten und MCP-Server buendeln. Definiert durch plugin.json.',
            en: 'Plugins are packages that bundle skills, agents, and MCP servers. Defined by plugin.json.',
          },
          category: 'skills',
          difficulty: 'advanced',
          tags: ['plugins', 'json', 'package', 'bundle'],
          isNew: true,
        },
        {
          id: 'plugin-install',
          title: {
            de: '/plugins - Plugins installieren',
            en: '/plugins - Install Plugins',
          },
          description: {
            de: 'Installiere Plugins aus Repositories oder lokalen Verzeichnissen.',
            en: 'Install plugins from repositories or local directories.',
          },
          command: '/plugins install <repo-url>',
          category: 'skills',
          difficulty: 'advanced',
          tags: ['plugins', 'install', 'repository'],
          isNew: true,
        },
      ],
    },

    // ================================================================
    // Plan Mode
    // ================================================================
    {
      id: 'plan-mode',
      title: {
        de: 'Plan-Modus',
        en: 'Plan Mode',
      },
      description: {
        de: 'Im Plan-Modus kann Claude nur lesen und analysieren, aber keine Aenderungen vornehmen.',
        en: 'In Plan mode, Claude can only read and analyze but cannot make changes.',
      },
      entries: [
        {
          id: 'plan-activate-flag',
          title: {
            de: 'Plan-Modus via Flag',
            en: 'Plan Mode via Flag',
          },
          description: {
            de: 'Starte Claude Code direkt im Plan-Modus mit dem --permission-mode Flag.',
            en: 'Start Claude Code directly in Plan mode with the --permission-mode flag.',
          },
          command: 'claude --permission-mode plan',
          category: 'plan-mode',
          difficulty: 'intermediate',
          tags: ['plan', 'flag', 'read-only', 'safe'],
        },
        {
          id: 'plan-shift-tab',
          title: {
            de: 'Plan-Modus mit Shift+Tab',
            en: 'Plan Mode with Shift+Tab',
          },
          description: {
            de: 'Wechsle waehrend einer Session mit Shift+Tab zwischen Plan-Modus und normalem Modus.',
            en: 'Toggle between Plan mode and normal mode during a session with Shift+Tab.',
          },
          command: 'Shift+Tab',
          category: 'plan-mode',
          difficulty: 'intermediate',
          tags: ['plan', 'toggle', 'shift-tab', 'keyboard'],
        },
        {
          id: 'plan-slash',
          title: {
            de: '/plan Slash-Befehl',
            en: '/plan Slash Command',
          },
          description: {
            de: 'Wechsle mit dem /plan-Befehl in den Plan-Modus.',
            en: 'Switch to Plan mode with the /plan command.',
          },
          command: '/plan',
          category: 'plan-mode',
          difficulty: 'intermediate',
          tags: ['plan', 'slash', 'command'],
        },
        {
          id: 'plan-exploration',
          title: {
            de: 'Sichere Codebase-Exploration',
            en: 'Safe Codebase Exploration',
          },
          description: {
            de: 'Nutze den Plan-Modus zum sicheren Erkunden unbekannter Codebases. Claude kann lesen, suchen und analysieren, ohne etwas zu aendern.',
            en: 'Use Plan mode for safe exploration of unfamiliar codebases. Claude can read, search, and analyze without changing anything.',
          },
          category: 'plan-mode',
          difficulty: 'intermediate',
          tags: ['plan', 'explore', 'safe', 'analysis'],
          tip: {
            de: 'Starte immer im Plan-Modus, wenn du eine neue Codebase zum ersten Mal untersuchst.',
            en: 'Always start in Plan mode when examining a new codebase for the first time.',
          },
        },
      ],
    },

    // ================================================================
    // Headless Mode
    // ================================================================
    {
      id: 'headless-mode',
      title: {
        de: 'Headless-Modus',
        en: 'Headless Mode',
      },
      description: {
        de: 'Claude Code ohne interaktive Oberflaeche nutzen - ideal fuer Skripte, CI/CD und Automatisierung.',
        en: 'Use Claude Code without an interactive interface - ideal for scripts, CI/CD, and automation.',
      },
      entries: [
        {
          id: 'headless-basic',
          title: {
            de: 'Grundlegende Headless-Nutzung',
            en: 'Basic Headless Usage',
          },
          description: {
            de: 'Der -p Flag startet Claude im Headless-Modus. Die Antwort wird auf stdout ausgegeben.',
            en: 'The -p flag starts Claude in headless mode. The response is printed to stdout.',
          },
          command: 'claude -p "explain this project structure"',
          category: 'headless',
          difficulty: 'beginner',
          tags: ['headless', 'print', 'basic'],
        },
        {
          id: 'headless-json',
          title: {
            de: 'JSON-Ausgabe im Headless-Modus',
            en: 'JSON Output in Headless Mode',
          },
          description: {
            de: 'Kombiniere -p mit --output-format json fuer maschinenlesbare Ausgabe.',
            en: 'Combine -p with --output-format json for machine-readable output.',
          },
          command: 'claude -p "query" --output-format json',
          category: 'headless',
          difficulty: 'intermediate',
          tags: ['headless', 'json', 'machine-readable'],
        },
        {
          id: 'headless-piping',
          title: {
            de: 'Piping im Headless-Modus',
            en: 'Piping in Headless Mode',
          },
          description: {
            de: 'Leite Daten per Pipe an Claude weiter und verarbeite die Ausgabe programmatisch.',
            en: 'Pipe data to Claude and process the output programmatically.',
          },
          category: 'headless',
          difficulty: 'intermediate',
          tags: ['headless', 'pipe', 'stdin', 'stdout'],
          code: {
            code: '# Review git changes\ngit diff | claude -p "review these changes for bugs"\n\n# Analyze a file\ncat src/app.ts | claude -p "find security issues"\n\n# Chain with other tools\nclaude -p "generate a UUID" | pbcopy',
            language: 'bash',
            title: {
              de: 'Piping-Beispiele',
              en: 'Piping Examples',
            },
          },
        },
        {
          id: 'headless-ci-cd',
          title: {
            de: 'CI/CD-Integration',
            en: 'CI/CD Integration',
          },
          description: {
            de: 'Nutze Claude Code in CI/CD-Pipelines mit Headless-Modus, festem Budget und automatischen Berechtigungen.',
            en: 'Use Claude Code in CI/CD pipelines with headless mode, fixed budget, and automatic permissions.',
          },
          category: 'headless',
          difficulty: 'advanced',
          tags: ['headless', 'ci-cd', 'automation', 'pipeline'],
          code: {
            code: '# GitHub Actions example\n- name: Code Review with Claude\n  run: |\n    git diff ${{ github.event.before }} HEAD | \\\n      claude -p "Review these changes" \\\n        --output-format json \\\n        --max-turns 5 \\\n        --max-budget-usd 1.00 \\\n        --permission-mode dontAsk \\\n        --allowedTools "Read,Glob,Grep"\n  env:\n    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}',
            language: 'yaml',
            title: {
              de: 'GitHub Actions Beispiel',
              en: 'GitHub Actions Example',
            },
          },
        },
        {
          id: 'headless-max-turns',
          title: {
            de: 'Runden begrenzen',
            en: 'Limit Turns',
          },
          description: {
            de: 'Begrenze die maximale Anzahl von Agenten-Runden im Headless-Modus, um unkontrollierte Ausfuehrung zu verhindern.',
            en: 'Limit the maximum number of agent turns in headless mode to prevent runaway execution.',
          },
          command: 'claude -p "query" --max-turns 5',
          category: 'headless',
          difficulty: 'intermediate',
          tags: ['headless', 'turns', 'limit', 'safety'],
        },
        {
          id: 'headless-no-persistence',
          title: {
            de: 'Session-Persistenz deaktivieren',
            en: 'Disable Session Persistence',
          },
          description: {
            de: 'Deaktiviere die Session-Speicherung fuer einmalige Ausfuehrungen.',
            en: 'Disable session storage for one-off executions.',
          },
          command: 'claude -p "query" --no-session-persistence',
          category: 'headless',
          difficulty: 'intermediate',
          tags: ['headless', 'session', 'persistence', 'disable'],
        },
      ],
    },
  ],
};

export default advancedFeatures;
