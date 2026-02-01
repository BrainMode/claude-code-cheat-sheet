import type { CheatSheetPage } from '@/lib/types';

const cliReference: CheatSheetPage = {
  id: 'cli-reference',
  title: {
    de: 'CLI-Referenz',
    en: 'CLI Reference',
  },
  description: {
    de: 'Vollstaendige Referenz aller Befehle, Flags, Slash-Commands und Tastenkuerzel.',
    en: 'Complete reference of all commands, flags, slash commands, and keyboard shortcuts.',
  },
  icon: 'Terminal',
  sections: [
    // ================================================================
    // Core Commands
    // ================================================================
    {
      id: 'core-commands',
      title: {
        de: 'Kernbefehle',
        en: 'Core Commands',
      },
      description: {
        de: 'Die grundlegenden Befehle zum Starten und Steuern von Claude Code.',
        en: 'The fundamental commands for starting and controlling Claude Code.',
      },
      entries: [
        {
          id: 'cmd-claude',
          title: {
            de: 'Interaktiven Modus starten',
            en: 'Start Interactive Mode',
          },
          description: {
            de: 'Startet den interaktiven REPL-Modus von Claude Code.',
            en: 'Starts the interactive REPL mode of Claude Code.',
          },
          command: 'claude',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['interactive', 'start', 'repl'],
        },
        {
          id: 'cmd-claude-query',
          title: {
            de: 'Mit initialer Anfrage starten',
            en: 'Start with Initial Query',
          },
          description: {
            de: 'Startet Claude Code im interaktiven Modus mit einer initialen Nachricht.',
            en: 'Starts Claude Code in interactive mode with an initial message.',
          },
          command: 'claude "query"',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['prompt', 'query', 'inline'],
        },
        {
          id: 'cmd-claude-print',
          title: {
            de: 'Headless/Print-Modus',
            en: 'Headless/Print Mode',
          },
          description: {
            de: 'Fuehrt die Anfrage aus und gibt das Ergebnis direkt auf stdout aus. Keine interaktive Session.',
            en: 'Executes the query and prints the result directly to stdout. No interactive session.',
          },
          command: 'claude -p "query"',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['headless', 'print', 'stdout', 'scripting'],
        },
        {
          id: 'cmd-claude-continue',
          title: {
            de: 'Letzte Session fortsetzen',
            en: 'Continue Last Session',
          },
          description: {
            de: 'Setzt die letzte Konversation im aktuellen Verzeichnis fort.',
            en: 'Continues the last conversation in the current directory.',
          },
          command: 'claude -c',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['session', 'continue'],
          related: ['cmd-claude-resume'],
        },
        {
          id: 'cmd-claude-resume',
          title: {
            de: 'Session wiederherstellen',
            en: 'Resume Session',
          },
          description: {
            de: 'Stellt eine bestimmte Session ueber ihre ID wieder her. Ohne ID wird eine Auswahlliste angezeigt.',
            en: 'Resumes a specific session by its ID. Without an ID, a selection list is shown.',
          },
          command: 'claude -r [session-id]',
          category: 'commands',
          difficulty: 'intermediate',
          tags: ['session', 'resume', 'history'],
          related: ['cmd-claude-continue'],
        },
        {
          id: 'cmd-claude-update',
          title: {
            de: 'Claude Code aktualisieren',
            en: 'Update Claude Code',
          },
          description: {
            de: 'Aktualisiert Claude Code auf die neueste Version.',
            en: 'Updates Claude Code to the latest version.',
          },
          command: 'claude update',
          category: 'commands',
          difficulty: 'beginner',
          tags: ['update', 'upgrade', 'version'],
        },
        {
          id: 'cmd-claude-mcp',
          title: {
            de: 'MCP-Server verwalten',
            en: 'Manage MCP Servers',
          },
          description: {
            de: 'Verwalte Model Context Protocol-Server. Unterkommandos: add, remove, list.',
            en: 'Manage Model Context Protocol servers. Subcommands: add, remove, list.',
          },
          command: 'claude mcp [add|remove|list]',
          category: 'commands',
          difficulty: 'intermediate',
          tags: ['mcp', 'server', 'tools'],
          related: ['cmd-claude-mcp-serve'],
        },
        {
          id: 'cmd-claude-mcp-serve',
          title: {
            de: 'Als MCP-Server starten',
            en: 'Start as MCP Server',
          },
          description: {
            de: 'Startet Claude Code selbst als MCP-Server, damit andere Clients ihn als Tool nutzen koennen.',
            en: 'Starts Claude Code itself as an MCP server so other clients can use it as a tool.',
          },
          command: 'claude mcp serve',
          category: 'commands',
          difficulty: 'advanced',
          tags: ['mcp', 'server', 'serve'],
          isNew: true,
        },
      ],
    },

    // ================================================================
    // Essential Flags
    // ================================================================
    {
      id: 'essential-flags',
      title: {
        de: 'Wichtige Flags',
        en: 'Essential Flags',
      },
      description: {
        de: 'Kommandozeilen-Flags zur Steuerung des Verhaltens von Claude Code.',
        en: 'Command-line flags to control Claude Code behavior.',
      },
      entries: [
        {
          id: 'flag-model',
          title: {
            de: 'Modell waehlen',
            en: 'Select Model',
          },
          description: {
            de: 'Waehle ein bestimmtes Modell fuer die Session. Ueberschreibt ANTHROPIC_MODEL.',
            en: 'Select a specific model for the session. Overrides ANTHROPIC_MODEL.',
          },
          command: 'claude --model claude-sonnet-4-20250514',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['model', 'sonnet', 'opus', 'haiku'],
        },
        {
          id: 'flag-print',
          title: {
            de: 'Print-Modus (-p / --print)',
            en: 'Print Mode (-p / --print)',
          },
          description: {
            de: 'Nicht-interaktiver Modus. Gibt die Antwort auf stdout aus und beendet sich.',
            en: 'Non-interactive mode. Prints the response to stdout and exits.',
          },
          command: 'claude -p "query"',
          category: 'flags',
          difficulty: 'beginner',
          tags: ['print', 'headless', 'non-interactive'],
        },
        {
          id: 'flag-continue',
          title: {
            de: 'Fortsetzen (-c / --continue)',
            en: 'Continue (-c / --continue)',
          },
          description: {
            de: 'Setzt die letzte Session im aktuellen Verzeichnis fort.',
            en: 'Continues the last session in the current directory.',
          },
          command: 'claude -c',
          category: 'flags',
          difficulty: 'beginner',
          tags: ['continue', 'session'],
        },
        {
          id: 'flag-resume',
          title: {
            de: 'Wiederherstellen (-r / --resume)',
            en: 'Resume (-r / --resume)',
          },
          description: {
            de: 'Stellt eine bestimmte Session ueber die Session-ID wieder her.',
            en: 'Resumes a specific session by session ID.',
          },
          command: 'claude -r <session-id>',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['resume', 'session', 'id'],
        },
        {
          id: 'flag-output-format',
          title: {
            de: 'Ausgabeformat',
            en: 'Output Format',
          },
          description: {
            de: 'Bestimmt das Ausgabeformat im Print-Modus: text, json oder stream-json.',
            en: 'Determines the output format in print mode: text, json, or stream-json.',
          },
          command: 'claude -p "query" --output-format json',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['output', 'format', 'json', 'text'],
          related: ['output-text', 'output-json', 'output-stream-json'],
        },
        {
          id: 'flag-verbose',
          title: {
            de: 'Ausfuehrliche Ausgabe',
            en: 'Verbose Output',
          },
          description: {
            de: 'Aktiviert detaillierte Ausgaben und Debugging-Informationen.',
            en: 'Enables detailed output and debugging information.',
          },
          command: 'claude --verbose',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['verbose', 'debug', 'logging'],
        },
        {
          id: 'flag-max-turns',
          title: {
            de: 'Maximale Runden',
            en: 'Maximum Turns',
          },
          description: {
            de: 'Begrenzt die Anzahl der Agenten-Runden im nicht-interaktiven Modus. Nuetzlich um Endlosschleifen zu vermeiden.',
            en: 'Limits the number of agent turns in non-interactive mode. Useful to prevent infinite loops.',
          },
          command: 'claude -p "query" --max-turns 10',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['turns', 'limit', 'loops', 'safety'],
        },
        {
          id: 'flag-max-budget',
          title: {
            de: 'Budget-Limit (USD)',
            en: 'Budget Limit (USD)',
          },
          description: {
            de: 'Setzt ein maximales Kostenbudget in US-Dollar fuer eine Session. Claude stoppt, wenn das Limit erreicht ist.',
            en: 'Sets a maximum cost budget in US dollars for a session. Claude stops when the limit is reached.',
          },
          command: 'claude -p "query" --max-budget-usd 5.00',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['budget', 'cost', 'limit', 'usd'],
          isNew: true,
        },
        {
          id: 'flag-system-prompt',
          title: {
            de: 'System-Prompt setzen',
            en: 'Set System Prompt',
          },
          description: {
            de: 'Setzt einen System-Prompt, der CLAUDE.md-Inhalte ersetzt. Nur im Print-Modus (-p) verfuegbar.',
            en: 'Sets a system prompt that replaces CLAUDE.md content. Only available in print mode (-p).',
          },
          command: 'claude -p "query" --system-prompt "You are a code reviewer"',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['system', 'prompt', 'override'],
          tip: {
            de: 'Verwende --append-system-prompt, wenn du den CLAUDE.md-Inhalt beibehalten willst.',
            en: 'Use --append-system-prompt if you want to keep the CLAUDE.md content.',
          },
        },
        {
          id: 'flag-append-system-prompt',
          title: {
            de: 'System-Prompt ergaenzen',
            en: 'Append System Prompt',
          },
          description: {
            de: 'Ergaenzt einen zusaetzlichen System-Prompt ohne den CLAUDE.md-Inhalt zu ersetzen.',
            en: 'Appends an additional system prompt without replacing CLAUDE.md content.',
          },
          command: 'claude -p "query" --append-system-prompt "Focus on security"',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['system', 'prompt', 'append'],
        },
        {
          id: 'flag-permission-mode',
          title: {
            de: 'Berechtigungsmodus',
            en: 'Permission Mode',
          },
          description: {
            de: 'Setzt den Berechtigungsmodus: default, acceptEdits, plan, dontAsk oder bypassPermissions.',
            en: 'Sets the permission mode: default, acceptEdits, plan, dontAsk, or bypassPermissions.',
          },
          command: 'claude --permission-mode plan',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['permissions', 'mode', 'safety'],
          related: ['perm-default', 'perm-accept-edits', 'perm-plan', 'perm-dont-ask', 'perm-bypass'],
        },
        {
          id: 'flag-allowed-tools',
          title: {
            de: 'Erlaubte Tools',
            en: 'Allowed Tools',
          },
          description: {
            de: 'Definiert eine Whitelist von Tools, die Claude ohne Nachfrage verwenden darf.',
            en: 'Defines a whitelist of tools that Claude may use without asking.',
          },
          command: 'claude --allowedTools "Edit,Read,Bash(git *)"',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['tools', 'whitelist', 'allow'],
          related: ['flag-disallowed-tools'],
        },
        {
          id: 'flag-disallowed-tools',
          title: {
            de: 'Verbotene Tools',
            en: 'Disallowed Tools',
          },
          description: {
            de: 'Definiert eine Blacklist von Tools, die Claude nicht verwenden darf.',
            en: 'Defines a blacklist of tools that Claude must not use.',
          },
          command: 'claude --disallowedTools "Bash(rm *)"',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['tools', 'blacklist', 'deny'],
          related: ['flag-allowed-tools'],
        },
        {
          id: 'flag-tools',
          title: {
            de: 'Verfuegbare Tools anzeigen',
            en: 'Show Available Tools',
          },
          description: {
            de: 'Zeigt eine Liste aller verfuegbaren Tools und MCP-Server an.',
            en: 'Shows a list of all available tools and MCP servers.',
          },
          command: 'claude --tools',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['tools', 'list', 'info'],
        },
        {
          id: 'flag-mcp-config',
          title: {
            de: 'MCP-Konfigurationsdatei',
            en: 'MCP Configuration File',
          },
          description: {
            de: 'Gibt eine JSON-Datei mit MCP-Server-Konfigurationen an.',
            en: 'Specifies a JSON file with MCP server configurations.',
          },
          command: 'claude --mcp-config mcp-servers.json',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['mcp', 'config', 'json'],
        },
        {
          id: 'flag-agents',
          title: {
            de: 'Agenten-Verzeichnis',
            en: 'Agents Directory',
          },
          description: {
            de: 'Gibt ein Verzeichnis mit benutzerdefinierten Agenten-Definitionen an.',
            en: 'Specifies a directory with custom agent definitions.',
          },
          command: 'claude --agents .claude/agents/',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['agents', 'custom', 'directory'],
          isNew: true,
        },
        {
          id: 'flag-chrome',
          title: {
            de: 'Chrome-Integration',
            en: 'Chrome Integration',
          },
          description: {
            de: 'Aktiviert die Chrome-Browser-Integration fuer Claude Code.',
            en: 'Enables Chrome browser integration for Claude Code.',
          },
          command: 'claude --chrome',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['chrome', 'browser', 'integration'],
          isNew: true,
        },
        {
          id: 'flag-remote',
          title: {
            de: 'Remote-Verbindung',
            en: 'Remote Connection',
          },
          description: {
            de: 'Verbindet sich mit einer Remote-Instanz von Claude Code.',
            en: 'Connects to a remote instance of Claude Code.',
          },
          command: 'claude --remote',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['remote', 'ssh', 'connection'],
          isNew: true,
        },
        {
          id: 'flag-add-dir',
          title: {
            de: 'Zusaetzliches Verzeichnis',
            en: 'Additional Directory',
          },
          description: {
            de: 'Fuegt ein zusaetzliches Verzeichnis zum Arbeitskontext von Claude hinzu.',
            en: 'Adds an additional directory to Claude\'s working context.',
          },
          command: 'claude --add-dir /path/to/other/project',
          category: 'flags',
          difficulty: 'intermediate',
          tags: ['directory', 'context', 'multi-repo'],
        },
        {
          id: 'flag-json-schema',
          title: {
            de: 'JSON-Schema fuer Ausgabe',
            en: 'JSON Schema for Output',
          },
          description: {
            de: 'Erzwingt strukturierte JSON-Ausgabe gemaess einem JSON-Schema. Benoetigt --output-format json.',
            en: 'Enforces structured JSON output according to a JSON schema. Requires --output-format json.',
          },
          command: 'claude -p "query" --output-format json --json-schema \'{"type":"object","properties":{"result":{"type":"string"}}}\'',
          category: 'flags',
          difficulty: 'advanced',
          tags: ['json', 'schema', 'structured', 'output'],
          isNew: true,
        },
      ],
    },

    // ================================================================
    // Slash Commands
    // ================================================================
    {
      id: 'slash-commands',
      title: {
        de: 'Slash-Befehle',
        en: 'Slash Commands',
      },
      description: {
        de: 'Befehle, die innerhalb einer interaktiven Claude Code-Session verfuegbar sind.',
        en: 'Commands available within an interactive Claude Code session.',
      },
      entries: [
        {
          id: 'slash-clear',
          title: {
            de: '/clear - Kontext loeschen',
            en: '/clear - Clear Context',
          },
          description: {
            de: 'Loescht den gesamten Konversationskontext und startet frisch. Spart Tokens bei neuen Aufgaben.',
            en: 'Clears the entire conversation context and starts fresh. Saves tokens on new tasks.',
          },
          command: '/clear',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['clear', 'context', 'reset'],
          tip: {
            de: 'Nutze /clear oft, wenn du zwischen verschiedenen Aufgaben wechselst.',
            en: 'Use /clear often when switching between different tasks.',
          },
        },
        {
          id: 'slash-compact',
          title: {
            de: '/compact - Kontext komprimieren',
            en: '/compact - Compact Context',
          },
          description: {
            de: 'Komprimiert den aktuellen Kontext, um Tokens zu sparen, ohne den gesamten Verlauf zu verlieren.',
            en: 'Compresses the current context to save tokens without losing the entire history.',
          },
          command: '/compact [instructions]',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['compact', 'tokens', 'compress'],
          tip: {
            de: 'Du kannst optionale Anweisungen mitgeben, worauf beim Komprimieren geachtet werden soll.',
            en: 'You can provide optional instructions on what to focus on when compacting.',
          },
        },
        {
          id: 'slash-model',
          title: {
            de: '/model - Modell wechseln',
            en: '/model - Switch Model',
          },
          description: {
            de: 'Wechsle das Modell waehrend einer laufenden Session.',
            en: 'Switch the model during a running session.',
          },
          command: '/model [model-name]',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['model', 'switch', 'change'],
        },
        {
          id: 'slash-config',
          title: {
            de: '/config - Konfiguration',
            en: '/config - Configuration',
          },
          description: {
            de: 'Zeigt oder aendert die aktuelle Konfiguration von Claude Code.',
            en: 'Shows or changes the current Claude Code configuration.',
          },
          command: '/config',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['config', 'settings', 'preferences'],
        },
        {
          id: 'slash-doctor',
          title: {
            de: '/doctor - Diagnose',
            en: '/doctor - Diagnostics',
          },
          description: {
            de: 'Fuehrt Diagnosetests durch und zeigt den Status von Claude Code an.',
            en: 'Runs diagnostic tests and shows the status of Claude Code.',
          },
          command: '/doctor',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['doctor', 'debug', 'diagnostics', 'health'],
        },
        {
          id: 'slash-mcp',
          title: {
            de: '/mcp - MCP-Server verwalten',
            en: '/mcp - Manage MCP Servers',
          },
          description: {
            de: 'Zeigt konfigurierte MCP-Server an und ermoeglicht die Verwaltung. Auch fuer OAuth-Authentifizierung.',
            en: 'Shows configured MCP servers and enables management. Also used for OAuth authentication.',
          },
          command: '/mcp',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['mcp', 'servers', 'manage'],
        },
        {
          id: 'slash-agents',
          title: {
            de: '/agents - Agenten anzeigen',
            en: '/agents - Show Agents',
          },
          description: {
            de: 'Zeigt alle verfuegbaren Agenten (eingebaute und benutzerdefinierte) an.',
            en: 'Shows all available agents (built-in and custom).',
          },
          command: '/agents',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['agents', 'list', 'subagents'],
          isNew: true,
        },
        {
          id: 'slash-init',
          title: {
            de: '/init - CLAUDE.md erstellen',
            en: '/init - Create CLAUDE.md',
          },
          description: {
            de: 'Erstellt eine initiale CLAUDE.md-Datei mit Projekt-spezifischen Anweisungen.',
            en: 'Creates an initial CLAUDE.md file with project-specific instructions.',
          },
          command: '/init',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['init', 'claude.md', 'setup'],
          tip: {
            de: 'Fuehre /init in jedem neuen Projekt aus, um Claude ueber Projektkonventionen zu informieren.',
            en: 'Run /init in every new project to inform Claude about project conventions.',
          },
        },
        {
          id: 'slash-plan',
          title: {
            de: '/plan - Planungsmodus',
            en: '/plan - Plan Mode',
          },
          description: {
            de: 'Wechselt in den Planungsmodus, in dem Claude nur liest und plant, ohne Aenderungen vorzunehmen.',
            en: 'Switches to plan mode where Claude only reads and plans without making changes.',
          },
          command: '/plan',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['plan', 'read-only', 'explore'],
        },
        {
          id: 'slash-cost',
          title: {
            de: '/cost - Kosten anzeigen',
            en: '/cost - Show Costs',
          },
          description: {
            de: 'Zeigt die aktuellen Token-Kosten fuer die laufende Session an.',
            en: 'Shows the current token costs for the running session.',
          },
          command: '/cost',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['cost', 'tokens', 'usage', 'billing'],
        },
        {
          id: 'slash-memory',
          title: {
            de: '/memory - Gedaechtnis bearbeiten',
            en: '/memory - Edit Memory',
          },
          description: {
            de: 'Oeffnet die CLAUDE.md-Datei zur Bearbeitung des persistenten Projekt-Gedaechtnisses.',
            en: 'Opens the CLAUDE.md file for editing the persistent project memory.',
          },
          command: '/memory',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['memory', 'claude.md', 'edit'],
        },
        {
          id: 'slash-hooks',
          title: {
            de: '/hooks - Hooks verwalten',
            en: '/hooks - Manage Hooks',
          },
          description: {
            de: 'Zeigt konfigurierte Hooks an und ermoeglicht deren Verwaltung.',
            en: 'Shows configured hooks and enables their management.',
          },
          command: '/hooks',
          category: 'slash-commands',
          difficulty: 'advanced',
          tags: ['hooks', 'events', 'automation'],
          isNew: true,
        },
        {
          id: 'slash-permissions',
          title: {
            de: '/permissions - Berechtigungen',
            en: '/permissions - Permissions',
          },
          description: {
            de: 'Zeigt und verwaltet die aktuellen Berechtigungseinstellungen.',
            en: 'Shows and manages the current permission settings.',
          },
          command: '/permissions',
          category: 'slash-commands',
          difficulty: 'intermediate',
          tags: ['permissions', 'security', 'access'],
        },
        {
          id: 'slash-plugins',
          title: {
            de: '/plugins - Plugins verwalten',
            en: '/plugins - Manage Plugins',
          },
          description: {
            de: 'Installiere und verwalte Plugins fuer erweiterte Funktionalitaet.',
            en: 'Install and manage plugins for extended functionality.',
          },
          command: '/plugins',
          category: 'slash-commands',
          difficulty: 'advanced',
          tags: ['plugins', 'extensions', 'install'],
          isNew: true,
        },
        {
          id: 'slash-help',
          title: {
            de: '/help - Hilfe anzeigen',
            en: '/help - Show Help',
          },
          description: {
            de: 'Zeigt eine Uebersicht aller verfuegbaren Slash-Befehle.',
            en: 'Shows an overview of all available slash commands.',
          },
          command: '/help',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['help', 'commands', 'overview'],
        },
        {
          id: 'slash-exit',
          title: {
            de: '/exit - Session beenden',
            en: '/exit - End Session',
          },
          description: {
            de: 'Beendet die aktuelle Claude Code-Session.',
            en: 'Ends the current Claude Code session.',
          },
          command: '/exit',
          category: 'slash-commands',
          difficulty: 'beginner',
          tags: ['exit', 'quit', 'end'],
        },
      ],
    },

    // ================================================================
    // Keyboard Shortcuts
    // ================================================================
    {
      id: 'keyboard-shortcuts',
      title: {
        de: 'Tastenkuerzel',
        en: 'Keyboard Shortcuts',
      },
      description: {
        de: 'Tastenkuerzel fuer den interaktiven Modus von Claude Code.',
        en: 'Keyboard shortcuts for Claude Code\'s interactive mode.',
      },
      entries: [
        {
          id: 'key-ctrl-c',
          title: {
            de: 'Ctrl+C - Abbrechen',
            en: 'Ctrl+C - Cancel',
          },
          description: {
            de: 'Bricht die aktuelle Antwort-Generierung ab oder leert die Eingabezeile.',
            en: 'Cancels the current response generation or clears the input line.',
          },
          command: 'Ctrl+C',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['cancel', 'abort', 'interrupt'],
        },
        {
          id: 'key-ctrl-d',
          title: {
            de: 'Ctrl+D - Session beenden',
            en: 'Ctrl+D - End Session',
          },
          description: {
            de: 'Beendet die aktuelle Claude Code-Session (wie /exit).',
            en: 'Ends the current Claude Code session (like /exit).',
          },
          command: 'Ctrl+D',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['exit', 'quit', 'eof'],
        },
        {
          id: 'key-ctrl-l',
          title: {
            de: 'Ctrl+L - Bildschirm loeschen',
            en: 'Ctrl+L - Clear Screen',
          },
          description: {
            de: 'Loescht die Terminalanzeige (nicht den Konversationskontext).',
            en: 'Clears the terminal display (not the conversation context).',
          },
          command: 'Ctrl+L',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['clear', 'screen', 'display'],
        },
        {
          id: 'key-ctrl-b',
          title: {
            de: 'Ctrl+B - Markdown-Browser',
            en: 'Ctrl+B - Markdown Browser',
          },
          description: {
            de: 'Oeffnet die letzte Antwort im System-Browser als formatiertes Markdown.',
            en: 'Opens the last response in the system browser as formatted Markdown.',
          },
          command: 'Ctrl+B',
          category: 'keyboard-shortcuts',
          difficulty: 'intermediate',
          tags: ['browser', 'markdown', 'preview'],
        },
        {
          id: 'key-shift-tab',
          title: {
            de: 'Shift+Tab - Modus wechseln',
            en: 'Shift+Tab - Toggle Mode',
          },
          description: {
            de: 'Wechselt zwischen Plan-Modus (nur lesen) und Normal-Modus (lesen und schreiben). Essentiell fuer sichere Exploration.',
            en: 'Toggles between Plan mode (read-only) and Normal mode (read and write). Essential for safe exploration.',
          },
          command: 'Shift+Tab',
          category: 'keyboard-shortcuts',
          difficulty: 'intermediate',
          tags: ['plan', 'mode', 'toggle', 'safety'],
          tip: {
            de: 'Nutze Plan-Modus zum Erkunden, dann wechsle zum Ausfuehren von Aenderungen.',
            en: 'Use Plan mode to explore, then switch to execute changes.',
          },
        },
        {
          id: 'key-tab',
          title: {
            de: 'Tab - Extended Thinking',
            en: 'Tab - Extended Thinking',
          },
          description: {
            de: 'Aktiviert Extended Thinking fuer tiefere Analyse bei komplexen Aufgaben.',
            en: 'Activates Extended Thinking for deeper analysis on complex tasks.',
          },
          command: 'Tab',
          category: 'keyboard-shortcuts',
          difficulty: 'intermediate',
          tags: ['thinking', 'extended', 'analysis'],
        },
        {
          id: 'key-shift-enter',
          title: {
            de: 'Shift+Enter - Mehrzeilige Eingabe',
            en: 'Shift+Enter - Multiline Input',
          },
          description: {
            de: 'Fuegt einen Zeilenumbruch in die Eingabe ein, anstatt die Nachricht abzusenden.',
            en: 'Inserts a line break in the input instead of sending the message.',
          },
          command: 'Shift+Enter',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['multiline', 'newline', 'input'],
        },
        {
          id: 'key-exclamation',
          title: {
            de: '! - Bash-Befehl',
            en: '! - Bash Command',
          },
          description: {
            de: 'Fuehre einen Bash-Befehl direkt aus dem Claude Code-Prompt aus, ohne die Session zu verlassen.',
            en: 'Execute a bash command directly from the Claude Code prompt without leaving the session.',
          },
          command: '!git status',
          category: 'keyboard-shortcuts',
          difficulty: 'intermediate',
          tags: ['bash', 'shell', 'execute'],
          tip: {
            de: 'Nützlich, um schnell den Dateistatus zu prüfen: !git diff --stat',
            en: 'Useful for quickly checking file status: !git diff --stat',
          },
        },
        {
          id: 'key-at-sign',
          title: {
            de: '@ - Dateireferenz',
            en: '@ - File Reference',
          },
          description: {
            de: 'Referenziere eine Datei direkt in deiner Nachricht, um Claude den Dateiinhalt zu geben.',
            en: 'Reference a file directly in your message to give Claude the file content.',
          },
          command: '@filename.ts',
          category: 'keyboard-shortcuts',
          difficulty: 'intermediate',
          tags: ['file', 'reference', 'context'],
        },
        {
          id: 'key-slash',
          title: {
            de: '/ - Slash-Befehl',
            en: '/ - Slash Command',
          },
          description: {
            de: 'Leitet einen Slash-Befehl ein. Tab-Vervollstaendigung verfuegbar.',
            en: 'Initiates a slash command. Tab completion available.',
          },
          command: '/',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['slash', 'command', 'autocomplete'],
        },
        {
          id: 'key-arrow-up',
          title: {
            de: 'Pfeil hoch - Verlauf',
            en: 'Arrow Up - History',
          },
          description: {
            de: 'Navigiert durch vorherige Eingaben in der Session.',
            en: 'Navigates through previous inputs in the session.',
          },
          command: 'Arrow Up/Down',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['history', 'navigate', 'previous'],
        },
        {
          id: 'key-esc',
          title: {
            de: 'Esc - Eingabe abbrechen',
            en: 'Esc - Cancel Input',
          },
          description: {
            de: 'Bricht die aktuelle Eingabe ab und leert das Eingabefeld.',
            en: 'Cancels the current input and clears the input field.',
          },
          command: 'Esc',
          category: 'keyboard-shortcuts',
          difficulty: 'beginner',
          tags: ['escape', 'cancel', 'clear'],
        },
      ],
    },

    // ================================================================
    // Output Formats
    // ================================================================
    {
      id: 'output-formats',
      title: {
        de: 'Ausgabeformate',
        en: 'Output Formats',
      },
      description: {
        de: 'Verschiedene Ausgabeformate fuer den Headless/Print-Modus.',
        en: 'Various output formats for headless/print mode.',
      },
      entries: [
        {
          id: 'output-text',
          title: {
            de: 'Text-Format (Standard)',
            en: 'Text Format (Default)',
          },
          description: {
            de: 'Gibt die Antwort als reinen Text aus. Standardformat im Print-Modus.',
            en: 'Outputs the response as plain text. Default format in print mode.',
          },
          command: 'claude -p "query" --output-format text',
          category: 'output-formats',
          difficulty: 'beginner',
          tags: ['output', 'text', 'plain'],
        },
        {
          id: 'output-json',
          title: {
            de: 'JSON-Format',
            en: 'JSON Format',
          },
          description: {
            de: 'Gibt die Antwort als strukturiertes JSON-Objekt aus. Ideal fuer programmatische Weiterverarbeitung.',
            en: 'Outputs the response as a structured JSON object. Ideal for programmatic processing.',
          },
          command: 'claude -p "query" --output-format json',
          category: 'output-formats',
          difficulty: 'intermediate',
          tags: ['output', 'json', 'structured'],
          code: {
            code: '// JSON output includes:\n// - result: the response text\n// - cost_usd: session cost\n// - session_id: for resuming\n// - num_turns: agent turns used',
            language: 'typescript',
            title: {
              de: 'JSON-Ausgabestruktur',
              en: 'JSON Output Structure',
            },
          },
        },
        {
          id: 'output-stream-json',
          title: {
            de: 'Stream-JSON-Format',
            en: 'Stream JSON Format',
          },
          description: {
            de: 'Gibt JSON-Objekte zeilenweise als Stream aus. Jede Zeile ist ein eigenes JSON-Objekt (JSONL).',
            en: 'Outputs JSON objects line by line as a stream. Each line is a separate JSON object (JSONL).',
          },
          command: 'claude -p "query" --output-format stream-json',
          category: 'output-formats',
          difficulty: 'advanced',
          tags: ['output', 'stream', 'json', 'jsonl'],
        },
        {
          id: 'output-json-schema',
          title: {
            de: 'Strukturierte Ausgabe mit JSON-Schema',
            en: 'Structured Output with JSON Schema',
          },
          description: {
            de: 'Erzwingt, dass die Ausgabe einem bestimmten JSON-Schema entspricht. Ideal fuer typsichere Integrationen.',
            en: 'Enforces that the output conforms to a specific JSON schema. Ideal for type-safe integrations.',
          },
          command: 'claude -p "list 3 colors" --output-format json --json-schema \'{"type":"object","properties":{"colors":{"type":"array","items":{"type":"string"}}}}\'',
          category: 'output-formats',
          difficulty: 'advanced',
          tags: ['output', 'json', 'schema', 'structured'],
          isNew: true,
        },
      ],
    },
  ],
};

export default cliReference;
