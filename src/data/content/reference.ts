import type { CheatSheetPage } from '@/lib/types';

const reference: CheatSheetPage = {
  id: 'reference',
  title: {
    de: 'Referenz',
    en: 'Reference',
  },
  description: {
    de: 'Kurzreferenz und Community-Ressourcen fuer Claude Code.',
    en: 'Quick reference and community resources for Claude Code.',
  },
  icon: 'BookOpen',
  sections: [
    // ================================================================
    // Quick Reference
    // ================================================================
    {
      id: 'quick-reference',
      title: {
        de: 'Kurzreferenz',
        en: 'Quick Reference',
      },
      description: {
        de: 'Die wichtigsten Befehle und Shortcuts auf einen Blick.',
        en: 'The most important commands and shortcuts at a glance.',
      },
      entries: [
        {
          id: 'ref-start-commands',
          title: {
            de: 'Start-Befehle',
            en: 'Start Commands',
          },
          description: {
            de: 'Die drei wichtigsten Wege, Claude Code zu starten: interaktiv, mit Prompt, oder headless.',
            en: 'The three most important ways to start Claude Code: interactive, with prompt, or headless.',
          },
          category: 'reference',
          difficulty: 'beginner',
          tags: ['reference', 'start', 'commands', 'quick'],
          code: {
            code: 'claude                  # Interactive REPL\nclaude "query"          # Interactive with initial prompt\nclaude -p "query"       # Headless (print to stdout)\nclaude -c               # Continue last session\nclaude -r               # Resume specific session',
            language: 'bash',
            title: {
              de: 'Start-Befehle Uebersicht',
              en: 'Start Commands Overview',
            },
          },
        },
        {
          id: 'ref-essential-slash',
          title: {
            de: 'Wichtigste Slash-Befehle',
            en: 'Essential Slash Commands',
          },
          description: {
            de: 'Die meistgenutzten Slash-Befehle fuer den taeglichen Gebrauch.',
            en: 'The most used slash commands for daily use.',
          },
          category: 'reference',
          difficulty: 'beginner',
          tags: ['reference', 'slash', 'essential'],
          code: {
            code: '/clear            # Clear context (new task)\n/compact           # Compress context (save tokens)\n/init              # Create CLAUDE.md\n/model             # Switch model\n/cost              # Show token costs\n/plan              # Enter plan mode\n/memory            # Edit CLAUDE.md\n/help              # Show all commands',
            language: 'bash',
            title: {
              de: 'Slash-Befehle Uebersicht',
              en: 'Slash Commands Overview',
            },
          },
        },
        {
          id: 'ref-essential-shortcuts',
          title: {
            de: 'Wichtigste Tastenkuerzel',
            en: 'Essential Keyboard Shortcuts',
          },
          description: {
            de: 'Die wichtigsten Tastenkuerzel fuer schnelles Arbeiten.',
            en: 'The most important keyboard shortcuts for fast work.',
          },
          category: 'reference',
          difficulty: 'beginner',
          tags: ['reference', 'keyboard', 'shortcuts', 'essential'],
          code: {
            code: 'Ctrl+C       # Cancel/abort\nCtrl+D       # Exit session\nShift+Tab    # Toggle plan/normal mode\nShift+Enter  # Multiline input\nTab          # Extended thinking\n!command     # Run bash command\n@file        # Reference a file\n/            # Slash command',
            language: 'bash',
            title: {
              de: 'Tastenkuerzel Uebersicht',
              en: 'Keyboard Shortcuts Overview',
            },
          },
        },
        {
          id: 'ref-essential-flags',
          title: {
            de: 'Wichtigste Flags',
            en: 'Essential Flags',
          },
          description: {
            de: 'Die am haeufigsten verwendeten Kommandozeilen-Flags.',
            en: 'The most commonly used command-line flags.',
          },
          category: 'reference',
          difficulty: 'beginner',
          tags: ['reference', 'flags', 'essential'],
          code: {
            code: '--model <name>           # Select model\n--output-format <fmt>    # text/json/stream-json\n--max-turns <n>          # Limit agent turns\n--max-budget-usd <n>     # Cost limit\n--permission-mode <m>    # Permission level\n--system-prompt <text>   # Override system prompt\n--allowedTools <list>    # Whitelist tools\n--verbose                # Debug output',
            language: 'bash',
            title: {
              de: 'Flags Uebersicht',
              en: 'Flags Overview',
            },
          },
        },
        {
          id: 'ref-permission-modes',
          title: {
            de: 'Berechtigungsmodi Uebersicht',
            en: 'Permission Modes Overview',
          },
          description: {
            de: 'Alle fuenf Berechtigungsmodi auf einen Blick.',
            en: 'All five permission modes at a glance.',
          },
          category: 'reference',
          difficulty: 'intermediate',
          tags: ['reference', 'permissions', 'modes'],
          code: {
            code: 'default           # Ask before modifying actions\nacceptEdits       # Auto-allow file edits, ask for rest\nplan              # Read-only mode\ndontAsk           # Auto-allow whitelisted, deny rest\nbypassPermissions # Skip all checks (dangerous!)',
            language: 'bash',
            title: {
              de: 'Berechtigungsmodi',
              en: 'Permission Modes',
            },
          },
        },
        {
          id: 'ref-env-vars',
          title: {
            de: 'Umgebungsvariablen Uebersicht',
            en: 'Environment Variables Overview',
          },
          description: {
            de: 'Die wichtigsten Umgebungsvariablen fuer Claude Code.',
            en: 'The most important environment variables for Claude Code.',
          },
          category: 'reference',
          difficulty: 'intermediate',
          tags: ['reference', 'env', 'variables'],
          code: {
            code: 'ANTHROPIC_API_KEY           # API authentication\nANTHROPIC_MODEL             # Default model\nBASH_DEFAULT_TIMEOUT_MS     # Bash timeout (ms)\nDISABLE_TELEMETRY           # Disable telemetry\nMCP_TIMEOUT                 # MCP server timeout\nMAX_MCP_OUTPUT_TOKENS       # MCP output limit\nCLAUDE_CODE_MAX_OUTPUT_TOKENS # Response token limit',
            language: 'bash',
            title: {
              de: 'Umgebungsvariablen',
              en: 'Environment Variables',
            },
          },
        },
      ],
    },

    // ================================================================
    // Community Resources
    // ================================================================
    {
      id: 'community-resources',
      title: {
        de: 'Community & Ressourcen',
        en: 'Community & Resources',
      },
      description: {
        de: 'Nuetzliche Links, Community-Projekte und offizielle Dokumentation.',
        en: 'Useful links, community projects, and official documentation.',
      },
      entries: [
        {
          id: 'res-official-docs',
          title: {
            de: 'Offizielle Dokumentation',
            en: 'Official Documentation',
          },
          description: {
            de: 'Die offizielle Claude Code Dokumentation auf code.claude.com ist die primaere Anlaufstelle fuer alle Features.',
            en: 'The official Claude Code documentation at code.claude.com is the primary resource for all features.',
          },
          category: 'community',
          difficulty: 'beginner',
          tags: ['docs', 'official', 'documentation', 'anthropic'],
          tip: {
            de: 'code.claude.com - Immer aktuell und vollstaendig.',
            en: 'code.claude.com - Always up to date and complete.',
          },
        },
        {
          id: 'res-everything-claude-code',
          title: {
            de: 'everything-claude-code',
            en: 'everything-claude-code',
          },
          description: {
            de: 'Umfangreiches Plugin-Repository von Affaan Mustafa mit Agenten, Skills und Befehlen. Hackathon-Gewinner.',
            en: 'Comprehensive plugin repository by Affaan Mustafa with agents, skills, and commands. Hackathon winner.',
          },
          category: 'community',
          difficulty: 'intermediate',
          tags: ['community', 'plugin', 'everything', 'hackathon'],
          tip: {
            de: 'github.com/anthropics/everything-claude-code',
            en: 'github.com/anthropics/everything-claude-code',
          },
        },
        {
          id: 'res-awesome-claude-code',
          title: {
            de: 'awesome-claude-code',
            en: 'awesome-claude-code',
          },
          description: {
            de: 'Kuratierte Liste von Claude Code Ressourcen, Tools, Plugins und Tutorials aus der Community.',
            en: 'Curated list of Claude Code resources, tools, plugins, and tutorials from the community.',
          },
          category: 'community',
          difficulty: 'beginner',
          tags: ['community', 'awesome', 'resources', 'curated'],
          tip: {
            de: 'github.com/anthropics/awesome-claude-code',
            en: 'github.com/anthropics/awesome-claude-code',
          },
        },
        {
          id: 'res-tips-repo',
          title: {
            de: 'Claude Code Tips Repository',
            en: 'Claude Code Tips Repository',
          },
          description: {
            de: 'Sammlung von praktischen Tipps und Tricks fuer die effektive Nutzung von Claude Code.',
            en: 'Collection of practical tips and tricks for effective use of Claude Code.',
          },
          category: 'community',
          difficulty: 'beginner',
          tags: ['community', 'tips', 'tricks', 'repository'],
        },
        {
          id: 'res-blog-posts',
          title: {
            de: 'Offizielle Blog-Posts',
            en: 'Official Blog Posts',
          },
          description: {
            de: 'Anthropics Blog enthaelt ausfuehrliche Artikel ueber neue Features, Best Practices und Anwendungsfaelle.',
            en: 'Anthropic\'s blog contains detailed articles about new features, best practices, and use cases.',
          },
          category: 'community',
          difficulty: 'beginner',
          tags: ['blog', 'official', 'anthropic', 'articles'],
          tip: {
            de: 'anthropic.com/blog - Regelmaessig nach Updates schauen.',
            en: 'anthropic.com/blog - Check regularly for updates.',
          },
        },
        {
          id: 'res-discord',
          title: {
            de: 'Community Discord',
            en: 'Community Discord',
          },
          description: {
            de: 'Die Anthropic Community auf Discord ist ein guter Ort fuer Fragen, Diskussionen und den Austausch mit anderen Claude Code Nutzern.',
            en: 'The Anthropic community on Discord is a great place for questions, discussions, and connecting with other Claude Code users.',
          },
          category: 'community',
          difficulty: 'beginner',
          tags: ['community', 'discord', 'chat', 'support'],
        },
      ],
    },
  ],
};

export default reference;
