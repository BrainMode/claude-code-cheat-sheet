import type { CheatSheetPage } from '@/lib/types';

const bestPractices: CheatSheetPage = {
  id: 'best-practices',
  title: {
    de: 'Best Practices',
    en: 'Best Practices',
  },
  description: {
    de: 'Bewaehrte Vorgehensweisen, Hackathon-Tipps, SDK-Nutzung und Sicherheit.',
    en: 'Proven approaches, hackathon tips, SDK usage, and security.',
  },
  icon: 'Lightbulb',
  sections: [
    // ================================================================
    // Anthropic Best Practices
    // ================================================================
    {
      id: 'anthropic-best-practices',
      title: {
        de: 'Anthropic Best Practices',
        en: 'Anthropic Best Practices',
      },
      description: {
        de: 'Offizielle Empfehlungen von Anthropic fuer die effektive Nutzung von Claude Code.',
        en: 'Official recommendations from Anthropic for effective use of Claude Code.',
      },
      entries: [
        {
          id: 'bp-context-management',
          title: {
            de: 'Kontext-Management',
            en: 'Context Management',
          },
          description: {
            de: 'Verwende /clear oft beim Wechsel zwischen Aufgaben und /compact um den Kontext zu komprimieren, wenn er zu gross wird.',
            en: 'Use /clear often when switching between tasks and /compact to compress context when it grows too large.',
          },
          category: 'best-practices',
          difficulty: 'beginner',
          tags: ['context', 'clear', 'compact', 'tokens'],
          tip: {
            de: 'Faustregel: /clear bei neuer Aufgabe, /compact wenn die Session zu langsam wird.',
            en: 'Rule of thumb: /clear for new tasks, /compact when the session gets too slow.',
          },
        },
        {
          id: 'bp-think-modes',
          title: {
            de: 'Think-Modi richtig einsetzen',
            en: 'Using Think Modes Correctly',
          },
          description: {
            de: 'Anthropic empfiehlt: Standard-Modus fuer 80% der Aufgaben, "think:" Prefix fuer 15%, "think hard:" oder "ultrathink" fuer die komplexesten 5%.',
            en: 'Anthropic recommends: Standard mode for 80% of tasks, "think:" prefix for 15%, "think hard:" or "ultrathink" for the most complex 5%.',
          },
          category: 'best-practices',
          difficulty: 'intermediate',
          tags: ['thinking', 'extended', 'ultrathink', 'performance'],
          code: {
            code: '# Standard mode (80% of tasks)\nclaude "add a loading spinner to the button"\n\n# Extended thinking (15% - moderate complexity)\nclaude "think: refactor this module to use the strategy pattern"\n\n# Deep thinking (5% - highest complexity)\nclaude "think hard: design a migration from REST to GraphQL"\nclaude "ultrathink: architect a distributed event system"',
            language: 'bash',
            title: {
              de: 'Think-Modi Verteilung',
              en: 'Think Modes Distribution',
            },
          },
        },
        {
          id: 'bp-multi-session',
          title: {
            de: 'Multi-Session-Workflows',
            en: 'Multi-Session Workflows',
          },
          description: {
            de: 'Fuer grosse Aenderungen: Plane in einer Session, fuehre in einer neuen aus. Nutze CLAUDE.md als Gedaechtnis zwischen Sessions.',
            en: 'For large changes: Plan in one session, execute in a new one. Use CLAUDE.md as memory between sessions.',
          },
          category: 'best-practices',
          difficulty: 'intermediate',
          tags: ['workflow', 'multi-session', 'planning'],
          tip: {
            de: 'Erstelle einen Plan, speichere ihn in CLAUDE.md, dann starte eine frische Session zur Umsetzung.',
            en: 'Create a plan, save it in CLAUDE.md, then start a fresh session for implementation.',
          },
        },
        {
          id: 'bp-prompt-tips',
          title: {
            de: 'Prompt-Tipps',
            en: 'Prompt Tips',
          },
          description: {
            de: 'Sei spezifisch, gib Kontext, nutze @Datei-Referenzen, und verwende ! fuer schnelle Bash-Befehle.',
            en: 'Be specific, provide context, use @file references, and use ! for quick bash commands.',
          },
          category: 'best-practices',
          difficulty: 'beginner',
          tags: ['prompts', 'tips', 'efficiency', 'communication'],
          code: {
            code: '# Bad: vague prompt\nclaude "fix the bug"\n\n# Good: specific prompt with context\nclaude "fix the TypeError in @src/utils/parser.ts line 42 - \\\n  the parseDate function receives null when the API \\\n  returns an empty date field"\n\n# Use @ for file references\nclaude "refactor @src/api/routes.ts to match the pattern in @src/api/users.ts"\n\n# Use ! for quick bash commands without leaving Claude\n# > !git status\n# > !npm test',
            language: 'bash',
            title: {
              de: 'Prompt Best Practices',
              en: 'Prompt Best Practices',
            },
          },
        },
        {
          id: 'bp-file-references',
          title: {
            de: '@-Dateireferenzen nutzen',
            en: 'Use @File References',
          },
          description: {
            de: 'Referenziere Dateien mit @pfad, um Claude direkt den relevanten Code zu zeigen. Spart Tokens und verbessert die Antwortqualitaet.',
            en: 'Reference files with @path to show Claude the relevant code directly. Saves tokens and improves response quality.',
          },
          command: '@src/components/Button.tsx',
          category: 'best-practices',
          difficulty: 'beginner',
          tags: ['files', 'reference', 'context', 'at-sign'],
        },
        {
          id: 'bp-bash-shortcut',
          title: {
            de: '!-Bash-Shortcuts',
            en: '! Bash Shortcuts',
          },
          description: {
            de: 'Fuehre schnelle Bash-Befehle mit ! aus, ohne Claude zu verlassen. Nützlich fuer git status, Tests, etc.',
            en: 'Execute quick bash commands with ! without leaving Claude. Useful for git status, tests, etc.',
          },
          command: '!git diff --stat',
          category: 'best-practices',
          difficulty: 'beginner',
          tags: ['bash', 'shortcut', 'quick', 'command'],
        },
      ],
    },

    // ================================================================
    // Hackathon Winner
    // ================================================================
    {
      id: 'hackathon-winner',
      title: {
        de: 'Hackathon-Gewinner: everything-claude-code',
        en: 'Hackathon Winner: everything-claude-code',
      },
      description: {
        de: 'Erweiterungen und Tipps vom Gewinner des Anthropic x Forum Ventures Hackathons.',
        en: 'Extensions and tips from the winner of the Anthropic x Forum Ventures hackathon.',
      },
      entries: [
        {
          id: 'hack-overview',
          title: {
            de: 'everything-claude-code Uebersicht',
            en: 'everything-claude-code Overview',
          },
          description: {
            de: 'Von Affaan Mustafa entwickeltes Plugin-Repository, das den Anthropic x Forum Ventures Hackathon gewann. Enthielt alle Tools, die zum Bau von zenith.chat in 8 Stunden benutzt wurden.',
            en: 'Plugin repository developed by Affaan Mustafa that won the Anthropic x Forum Ventures hackathon. Contains all tools used to build zenith.chat in 8 hours.',
          },
          category: 'hackathon',
          difficulty: 'intermediate',
          tags: ['hackathon', 'everything-claude-code', 'plugin', 'zenith'],
          tip: {
            de: 'GitHub: github.com/anthropics/everything-claude-code',
            en: 'GitHub: github.com/anthropics/everything-claude-code',
          },
        },
        {
          id: 'hack-install',
          title: {
            de: 'Installation via /plugins',
            en: 'Installation via /plugins',
          },
          description: {
            de: 'Installiere everything-claude-code als Plugin mit dem /plugins-Befehl.',
            en: 'Install everything-claude-code as a plugin using the /plugins command.',
          },
          command: '/plugins install github.com/anthropics/everything-claude-code',
          category: 'hackathon',
          difficulty: 'intermediate',
          tags: ['hackathon', 'install', 'plugins'],
          isNew: true,
        },
        {
          id: 'hack-components',
          title: {
            de: 'Enthaltene Komponenten',
            en: 'Included Components',
          },
          description: {
            de: 'Das Paket enthaelt 15+ Agenten, 30+ Skills und 20+ Befehle fuer verschiedene Entwicklungsszenarien.',
            en: 'The package includes 15+ agents, 30+ skills, and 20+ commands for various development scenarios.',
          },
          category: 'hackathon',
          difficulty: 'intermediate',
          tags: ['hackathon', 'agents', 'skills', 'commands'],
          code: {
            code: '# After installation, you get access to:\n# 15+ specialized agents:\n#   - code-reviewer, security-auditor, performance-optimizer\n#   - api-designer, test-writer, documentation-writer\n#   - and more...\n#\n# 30+ skills:\n#   - /deploy, /test, /lint, /benchmark\n#   - /review, /refactor, /document\n#   - and more...\n#\n# 20+ slash commands for common workflows',
            language: 'bash',
            title: {
              de: 'Enthaltene Komponenten',
              en: 'Included Components',
            },
          },
        },
        {
          id: 'hack-mcp-warning',
          title: {
            de: 'Warnung: Zu viele MCPs',
            en: 'Warning: Too Many MCPs',
          },
          description: {
            de: 'Aktiviere nicht alle MCP-Server gleichzeitig! Zu viele MCPs verlangsamen Claude und verbrauchen uebermassig Tokens fuer Tool-Beschreibungen.',
            en: 'Do not enable all MCP servers at once! Too many MCPs slow down Claude and consume excessive tokens for tool descriptions.',
          },
          category: 'hackathon',
          difficulty: 'intermediate',
          tags: ['mcp', 'warning', 'performance', 'tokens'],
          tip: {
            de: 'Aktiviere nur die MCP-Server, die du fuer die aktuelle Aufgabe brauchst.',
            en: 'Only activate the MCP servers you need for the current task.',
          },
        },
      ],
    },

    // ================================================================
    // Agent SDK
    // ================================================================
    {
      id: 'agent-sdk',
      title: {
        de: 'Agent SDK',
        en: 'Agent SDK',
      },
      description: {
        de: 'Programmatische Nutzung von Claude Code ueber Python und TypeScript SDKs.',
        en: 'Programmatic use of Claude Code via Python and TypeScript SDKs.',
      },
      entries: [
        {
          id: 'sdk-python',
          title: {
            de: 'Python SDK (anthropic)',
            en: 'Python SDK (anthropic)',
          },
          description: {
            de: 'Nutze das offizielle anthropic Python-Paket, um Claude Code programmatisch in Python-Anwendungen einzubinden.',
            en: 'Use the official anthropic Python package to programmatically integrate Claude Code in Python applications.',
          },
          category: 'sdk',
          difficulty: 'advanced',
          tags: ['sdk', 'python', 'api', 'programmatic'],
          code: {
            code: 'import anthropic\n\nclient = anthropic.Anthropic()\n\n# Use Claude Code as a tool\nresponse = client.messages.create(\n    model="claude-sonnet-4-20250514",\n    max_tokens=4096,\n    messages=[\n        {"role": "user", "content": "Review this code for bugs"}\n    ]\n)',
            language: 'python',
            title: {
              de: 'Python SDK Beispiel',
              en: 'Python SDK Example',
            },
          },
        },
        {
          id: 'sdk-typescript',
          title: {
            de: 'TypeScript SDK (@anthropic-ai/claude-code)',
            en: 'TypeScript SDK (@anthropic-ai/claude-code)',
          },
          description: {
            de: 'Das TypeScript SDK ermoeglicht es, Claude Code programmatisch als Unterprozess zu starten und zu steuern.',
            en: 'The TypeScript SDK allows programmatically launching and controlling Claude Code as a subprocess.',
          },
          category: 'sdk',
          difficulty: 'advanced',
          tags: ['sdk', 'typescript', 'node', 'programmatic'],
          code: {
            code: 'import { ClaudeCode } from "@anthropic-ai/claude-code";\n\nconst claude = new ClaudeCode();\n\n// Run a query programmatically\nconst result = await claude.run({\n  prompt: "Analyze the project structure",\n  outputFormat: "json",\n  maxTurns: 5,\n  permissionMode: "plan",\n});\n\nconsole.log(result);',
            language: 'typescript',
            title: {
              de: 'TypeScript SDK Beispiel',
              en: 'TypeScript SDK Example',
            },
          },
        },
        {
          id: 'sdk-built-in-tools',
          title: {
            de: 'Eingebaute Tools im SDK',
            en: 'Built-in Tools in SDK',
          },
          description: {
            de: 'Das SDK bietet Zugriff auf die gleichen Tools wie Claude Code: Read, Edit, Bash, Glob, Grep, WebFetch und mehr.',
            en: 'The SDK provides access to the same tools as Claude Code: Read, Edit, Bash, Glob, Grep, WebFetch, and more.',
          },
          category: 'sdk',
          difficulty: 'advanced',
          tags: ['sdk', 'tools', 'built-in', 'api'],
        },
      ],
    },

    // ================================================================
    // Security
    // ================================================================
    {
      id: 'security',
      title: {
        de: 'Sicherheit',
        en: 'Security',
      },
      description: {
        de: 'Sicherheitskonfiguration und Isolation fuer Claude Code.',
        en: 'Security configuration and isolation for Claude Code.',
      },
      entries: [
        {
          id: 'sec-sandbox',
          title: {
            de: 'Sandbox-Konfiguration',
            en: 'Sandbox Configuration',
          },
          description: {
            de: 'Claude Code kann in einer Sandbox laufen, die Dateisystem- und Netzwerkzugriff einschraenkt.',
            en: 'Claude Code can run in a sandbox that restricts file system and network access.',
          },
          category: 'security',
          difficulty: 'advanced',
          tags: ['security', 'sandbox', 'isolation'],
        },
        {
          id: 'sec-filesystem',
          title: {
            de: 'Dateisystem-Isolation',
            en: 'Filesystem Isolation',
          },
          description: {
            de: 'Beschraenke den Dateisystemzugriff von Claude auf bestimmte Verzeichnisse. Standardmaessig arbeitet Claude nur im Projektverzeichnis.',
            en: 'Restrict Claude\'s file system access to specific directories. By default, Claude only works in the project directory.',
          },
          category: 'security',
          difficulty: 'advanced',
          tags: ['security', 'filesystem', 'isolation', 'directories'],
        },
        {
          id: 'sec-network',
          title: {
            de: 'Netzwerk-Isolation (allowedDomains)',
            en: 'Network Isolation (allowedDomains)',
          },
          description: {
            de: 'Beschraenke die Netzwerkzugriffe von Claude auf bestimmte Domains mit der allowedDomains-Einstellung.',
            en: 'Restrict Claude\'s network access to specific domains with the allowedDomains setting.',
          },
          category: 'security',
          difficulty: 'advanced',
          tags: ['security', 'network', 'domains', 'isolation'],
          code: {
            code: '// In .claude/settings.json:\n{\n  "network": {\n    "allowedDomains": [\n      "api.github.com",\n      "registry.npmjs.org",\n      "api.anthropic.com"\n    ]\n  }\n}',
            language: 'json',
            title: {
              de: 'Netzwerk-Beschraenkung',
              en: 'Network Restriction',
            },
          },
        },
        {
          id: 'sec-auto-allow-bash',
          title: {
            de: 'autoAllowBashIfSandboxed',
            en: 'autoAllowBashIfSandboxed',
          },
          description: {
            de: 'Erlaube automatisch Bash-Befehle, wenn Claude in einer Sandbox laeuft. Reduziert Berechtigungsabfragen in sicheren Umgebungen.',
            en: 'Automatically allow bash commands when Claude is running in a sandbox. Reduces permission prompts in safe environments.',
          },
          category: 'security',
          difficulty: 'advanced',
          tags: ['security', 'sandbox', 'bash', 'auto-allow'],
        },
        {
          id: 'sec-hook-validation',
          title: {
            de: 'Hook-basierte Validierung',
            en: 'Hook-Based Validation',
          },
          description: {
            de: 'Nutze PreToolUse-Hooks, um Befehle vor der Ausfuehrung zu validieren und gefaehrliche Aktionen zu blockieren.',
            en: 'Use PreToolUse hooks to validate commands before execution and block dangerous actions.',
          },
          category: 'security',
          difficulty: 'advanced',
          tags: ['security', 'hooks', 'validation', 'pretooluse'],
          code: {
            code: '// In .claude/settings.json:\n{\n  "hooks": {\n    "PreToolUse": [\n      {\n        "type": "command",\n        "command": "bash scripts/validate-tool-use.sh",\n        "description": "Validates tool calls before execution"\n      }\n    ]\n  }\n}',
            language: 'json',
            title: {
              de: 'Validierungs-Hook',
              en: 'Validation Hook',
            },
          },
          related: ['hooks-exit-codes'],
        },
      ],
    },
  ],
};

export default bestPractices;
