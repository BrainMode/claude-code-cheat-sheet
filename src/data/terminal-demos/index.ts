import type { TerminalDemo } from '@/lib/types';

export const terminalDemos: TerminalDemo[] = [
  // ================================================================
  // Demo 1: Installation
  // ================================================================
  {
    id: 'demo-installation',
    title: {
      de: 'Installation & Erster Start',
      en: 'Installation & First Run',
    },
    cwd: '~',
    commands: [
      {
        command: 'npm install -g @anthropic-ai/claude-code',
        output: [
          'added 1 package in 12s',
          '',
          '1 package is looking for funding',
          '  run `npm fund` for details',
        ],
        outputStyle: ['success', 'default', 'muted', 'muted'],
        typingSpeed: 40,
        processingDelay: 2000,
      },
      {
        command: 'claude --version',
        output: ['1.0.33'],
        outputStyle: ['info'],
        typingSpeed: 50,
        processingDelay: 500,
      },
      {
        command: 'claude',
        output: [
          'Welcome to Claude Code v1.0.33',
          '',
          'To get started, please authenticate.',
          'Opening browser for authentication...',
          '',
          '✓ Authentication successful!',
          '',
          'Tip: Run /init to set up CLAUDE.md for your project.',
          '',
          '> ',
        ],
        outputStyle: ['info', 'default', 'default', 'muted', 'default', 'success', 'default', 'info', 'default', 'default'],
        typingSpeed: 40,
        processingDelay: 3000,
      },
    ],
  },

  // ================================================================
  // Demo 2: Basic Usage
  // ================================================================
  {
    id: 'demo-basic-usage',
    title: {
      de: 'Grundlegende Nutzung',
      en: 'Basic Usage',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: 'claude "explain the project structure"',
        output: [
          '',
          'I\'ll analyze the project structure for you.',
          '',
          '> Reading package.json, tsconfig.json...',
          '> Scanning src/ directory...',
          '',
          'This is a Next.js 15 project with TypeScript using the App Router.',
          '',
          'Key directories:',
          '  src/app/       - App Router pages and layouts',
          '  src/components/ - Reusable React components',
          '  src/lib/       - Utility functions and types',
          '  src/data/      - Content data files',
          '',
          'The project uses Tailwind CSS for styling and has',
          '23 components across 8 feature modules.',
        ],
        outputStyle: [
          'default', 'info', 'default', 'muted', 'muted', 'default',
          'default', 'default', 'default', 'default', 'default',
          'default', 'default', 'default', 'default',
        ],
        typingSpeed: 35,
        processingDelay: 2500,
      },
      {
        command: '/compact',
        output: [
          '✓ Context compacted: 12,450 → 3,200 tokens (74% reduction)',
        ],
        outputStyle: ['success'],
        processingDelay: 1500,
      },
      {
        command: '/clear',
        output: [
          '✓ Context cleared. Starting fresh.',
        ],
        outputStyle: ['success'],
        processingDelay: 500,
      },
    ],
  },

  // ================================================================
  // Demo 3: Headless / CI
  // ================================================================
  {
    id: 'demo-headless-ci',
    title: {
      de: 'Headless-Modus & CI/CD',
      en: 'Headless Mode & CI/CD',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: 'claude -p "list all TODO comments in the codebase" --output-format json',
        output: [
          '{',
          '  "result": "Found 7 TODO comments:\\n1. src/app/page.tsx:12 ...",',
          '  "cost_usd": 0.0043,',
          '  "session_id": "abc-123-def",',
          '  "num_turns": 2',
          '}',
        ],
        outputStyle: ['default', 'default', 'info', 'muted', 'muted', 'default'],
        typingSpeed: 40,
        processingDelay: 3000,
      },
      {
        command: 'git diff HEAD~1 | claude -p "review changes for bugs" --max-turns 5',
        output: [
          '',
          'Code Review Summary:',
          '',
          '⚠ Warning: Potential null reference in src/utils/parser.ts:42',
          '  The parseDate() function does not handle empty strings.',
          '',
          '✓ No other issues found in the 3 changed files.',
          '',
          'Recommendation: Add a null check before calling new Date().',
        ],
        outputStyle: [
          'default', 'info', 'default', 'warning', 'warning',
          'default', 'success', 'default', 'default',
        ],
        typingSpeed: 35,
        processingDelay: 4000,
      },
    ],
  },

  // ================================================================
  // Demo 4: MCP Management
  // ================================================================
  {
    id: 'demo-mcp-management',
    title: {
      de: 'MCP-Server verwalten',
      en: 'MCP Server Management',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: 'claude mcp add github -- npx -y @modelcontextprotocol/server-github',
        output: [
          '✓ Added MCP server "github" (scope: local)',
          '  Transport: stdio',
          '  Command: npx -y @modelcontextprotocol/server-github',
        ],
        outputStyle: ['success', 'muted', 'muted'],
        typingSpeed: 35,
        processingDelay: 2000,
      },
      {
        command: 'claude mcp add sentry -- npx -y @modelcontextprotocol/server-sentry',
        output: [
          '✓ Added MCP server "sentry" (scope: local)',
          '  Transport: stdio',
          '  Command: npx -y @modelcontextprotocol/server-sentry',
        ],
        outputStyle: ['success', 'muted', 'muted'],
        typingSpeed: 35,
        processingDelay: 2000,
      },
      {
        command: 'claude mcp list',
        output: [
          'Configured MCP Servers:',
          '',
          '  Name      Transport  Scope    Status',
          '  ────────  ─────────  ───────  ──────',
          '  github    stdio      local    ✓ Ready',
          '  sentry    stdio      local    ✓ Ready',
          '',
          '2 server(s) configured.',
        ],
        outputStyle: [
          'info', 'default', 'muted', 'muted',
          'success', 'success', 'default', 'muted',
        ],
        typingSpeed: 40,
        processingDelay: 1000,
      },
    ],
  },

  // ================================================================
  // Demo 5: Agents
  // ================================================================
  {
    id: 'demo-agents',
    title: {
      de: 'Agenten verwenden',
      en: 'Using Agents',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: '/agents',
        output: [
          'Available Agents:',
          '',
          '  Built-in:',
          '    Explore          Read-only codebase exploration',
          '    Plan             Create execution plans',
          '    General-purpose  Full access to all tools',
          '    Bash             Shell command specialist',
          '',
          '  Custom (.claude/agents/):',
          '    security-reviewer  Reviews code for vulnerabilities',
          '    api-designer       Designs REST/GraphQL APIs',
          '',
          '7 agent(s) available.',
        ],
        outputStyle: [
          'info', 'default', 'muted', 'default', 'default',
          'default', 'default', 'default', 'muted', 'default',
          'default', 'default', 'muted',
        ],
        processingDelay: 1000,
      },
      {
        command: 'explore the authentication module and explain the flow',
        output: [
          '',
          '⟡ Spawning Explore agent...',
          '',
          '> Reading src/auth/index.ts...',
          '> Reading src/auth/middleware.ts...',
          '> Reading src/auth/providers/*.ts...',
          '',
          'Authentication Flow:',
          '1. User hits /api/auth/login → middleware validates input',
          '2. Provider strategy pattern (Google, GitHub, email)',
          '3. JWT token issued → stored in httpOnly cookie',
          '4. Middleware on protected routes validates token',
          '',
          '⟡ Explore agent finished (read-only, no changes made)',
        ],
        outputStyle: [
          'default', 'info', 'default', 'muted', 'muted', 'muted',
          'default', 'default', 'default', 'default', 'default',
          'default', 'default', 'success',
        ],
        typingSpeed: 30,
        processingDelay: 3500,
      },
    ],
  },

  // ================================================================
  // Demo 6: Permissions & Plan Mode
  // ================================================================
  {
    id: 'demo-permissions',
    title: {
      de: 'Berechtigungen & Plan-Modus',
      en: 'Permissions & Plan Mode',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: '[Shift+Tab pressed]',
        output: [
          '✓ Switched to Plan mode (read-only)',
          '  Claude can read and analyze but cannot modify files.',
        ],
        outputStyle: ['success', 'muted'],
        processingDelay: 300,
      },
      {
        command: 'analyze the database schema for optimization opportunities',
        output: [
          '',
          '> Reading prisma/schema.prisma...',
          '> Analyzing 14 models, 8 relations...',
          '',
          'Optimization Plan:',
          '',
          '1. Add index on User.email (frequent lookups)',
          '2. Add composite index on Order(userId, createdAt)',
          '3. Consider denormalizing OrderItem.productName',
          '4. Missing cascade delete on Comment → Post relation',
          '',
          'Note: Running in Plan mode. Switch to Normal mode to apply changes.',
        ],
        outputStyle: [
          'default', 'muted', 'muted', 'default', 'info',
          'default', 'default', 'default', 'default', 'default',
          'default', 'warning',
        ],
        typingSpeed: 30,
        processingDelay: 3000,
      },
      {
        command: '[Shift+Tab pressed]',
        output: [
          '✓ Switched to Normal mode (read & write)',
        ],
        outputStyle: ['success'],
        processingDelay: 300,
      },
      {
        command: '/permissions',
        output: [
          'Current Permission Mode: default',
          '',
          'Allowed (auto-approve):',
          '  Read, Glob, Grep',
          '  Bash(git *)',
          '  Bash(npm test *)',
          '',
          'Denied (always block):',
          '  Bash(rm -rf *)',
          '',
          'Other actions: Ask for permission',
        ],
        outputStyle: [
          'info', 'default', 'muted', 'success', 'success',
          'success', 'default', 'muted', 'error', 'default', 'default',
        ],
        processingDelay: 800,
      },
    ],
  },

  // ================================================================
  // Demo 7: Hooks
  // ================================================================
  {
    id: 'demo-hooks',
    title: {
      de: 'Hooks konfigurieren',
      en: 'Configuring Hooks',
    },
    cwd: '~/my-project',
    commands: [
      {
        command: '/hooks',
        output: [
          'Configured Hooks:',
          '',
          '  Event              Type     Description',
          '  ─────────────────  ───────  ──────────────────────────',
          '  PreToolUse         command  Validate tool calls',
          '  SessionStart       prompt   Load team greeting',
          '  Stop               agent    Summarize session',
          '  PostToolUseFailure command  Log failures to file',
          '',
          '4 hook(s) configured across 4 events.',
          '',
          'Tip: Hooks are defined in .claude/settings.json',
        ],
        outputStyle: [
          'info', 'default', 'muted', 'muted',
          'default', 'default', 'default', 'default',
          'default', 'muted', 'default', 'muted',
        ],
        processingDelay: 800,
      },
      {
        command: 'add a new file src/test.ts',
        output: [
          '',
          '⟡ Hook PreToolUse triggered...',
          '  Running: bash scripts/validate-tool-use.sh',
          '  ✓ Hook passed (exit code 0)',
          '',
          '⟡ Creating file src/test.ts...',
          '',
          'Created src/test.ts with basic TypeScript boilerplate.',
        ],
        outputStyle: [
          'default', 'info', 'muted', 'success',
          'default', 'info', 'default', 'success',
        ],
        typingSpeed: 35,
        processingDelay: 2000,
      },
    ],
  },

  // ================================================================
  // Demo 8: Hackathon Setup (everything-claude-code)
  // ================================================================
  {
    id: 'demo-hackathon-setup',
    title: {
      de: 'Hackathon-Setup mit everything-claude-code',
      en: 'Hackathon Setup with everything-claude-code',
    },
    cwd: '~/hackathon-project',
    commands: [
      {
        command: 'claude',
        output: [
          'Welcome to Claude Code v1.0.33',
          '',
          '> ',
        ],
        outputStyle: ['info', 'default', 'default'],
        typingSpeed: 50,
        processingDelay: 1500,
      },
      {
        command: '/plugins install github.com/anthropics/everything-claude-code',
        output: [
          'Installing plugin from github.com/anthropics/everything-claude-code...',
          '',
          '  Downloading repository...',
          '  ✓ 15 agents installed',
          '  ✓ 32 skills installed',
          '  ✓ 22 slash commands registered',
          '  ✓ 3 MCP server configs added',
          '',
          '✓ Plugin "everything-claude-code" installed successfully!',
          '',
          'New commands available: /deploy, /test, /review, /benchmark, ...',
          'New agents: code-reviewer, security-auditor, performance-optimizer, ...',
          '',
          'Tip: Run /help to see all new commands.',
        ],
        outputStyle: [
          'muted', 'default', 'muted', 'success', 'success',
          'success', 'success', 'default', 'success', 'default',
          'info', 'info', 'default', 'muted',
        ],
        typingSpeed: 30,
        processingDelay: 5000,
      },
      {
        command: '/init',
        output: [
          'Analyzing project structure...',
          '',
          '> Detected: TypeScript, React, Next.js',
          '> Found: package.json, tsconfig.json, next.config.ts',
          '',
          '✓ Created CLAUDE.md with project-specific instructions.',
          '',
          'Your CLAUDE.md includes:',
          '  - Tech stack: Next.js 15, TypeScript, Tailwind CSS',
          '  - Build command: npm run build',
          '  - Test command: npm test',
          '  - Coding conventions detected from existing code',
        ],
        outputStyle: [
          'muted', 'default', 'muted', 'muted', 'default',
          'success', 'default', 'default', 'default', 'default',
          'default', 'default',
        ],
        typingSpeed: 35,
        processingDelay: 3000,
      },
    ],
  },
];
