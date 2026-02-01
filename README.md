# Claude Code Cheat Sheet

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy](https://github.com/BrainMode/claude-code-cheat-sheet/actions/workflows/deploy.yml/badge.svg)](https://github.com/BrainMode/claude-code-cheat-sheet/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)

An interactive, bilingual (German/English) reference website for **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — Anthropic's agentic coding tool for the terminal.

**[Live Demo](https://BrainMode.github.io/claude-code-cheat-sheet)**

## Features

- **Terminal Simulator** — Interactive typing demos showing real Claude Code workflows
- **Fuzzy Search** — `Ctrl+K` / `Cmd+K` global search across all commands, flags, and shortcuts
- **Quizzes** — Test your knowledge with multiple-choice questions per section
- **Bilingual** — Full German and English content with instant language toggle
- **Copy to Clipboard** — One-click copy on every code block and command
- **Expandable Cards** — Detailed command references with difficulty badges, tags, and examples
- **Terminal Theme** — Dark hacker-style UI with green glow effects

## Content

| Section | Entries | Topics |
|---------|---------|--------|
| Getting Started | 8 | Installation, Authentication, Basic Usage, Sessions |
| CLI Reference | 60+ | Core Commands, Flags, Slash Commands, Keyboard Shortcuts, Output Formats |
| Configuration | 21 | CLAUDE.md, Settings Files, Environment Variables, Permission Modes |
| Advanced | 30+ | Subagents, MCP, Hooks, Skills, Plan Mode, Headless/CI Mode |
| Best Practices | 18 | Anthropic Tips, Hackathon Setups, Agent SDK, Security |
| Reference | 10 | Quick Reference Cards, Community Resources |

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework (Static Export) |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety (strict) |
| [Tailwind CSS](https://tailwindcss.com/) | Styling (custom terminal theme) |
| [next-intl](https://next-intl.dev/) | Internationalization (DE/EN) |
| [Shiki](https://shiki.matsu.io/) | Syntax Highlighting (server-side) |
| [Fuse.js](https://www.fusejs.io/) | Fuzzy Search |
| [cmdk](https://cmdk.paco.me/) | Command Palette (Ctrl+K) |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide](https://lucide.dev/) | Icons |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/BrainMode/claude-code-cheat-sheet.git
cd claude-code-cheat-sheet

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Static files are exported to `out/`.

## Project Structure

```
src/
├── app/[locale]/          # Pages (6 sections + homepage)
├── components/
│   ├── code/              # CodeBlock, CopyButton
│   ├── content/           # CommandCard, Accordion, SectionRenderer
│   ├── layout/            # Header, Sidebar, Footer, MobileMenu
│   ├── navigation/        # LanguageToggle, Breadcrumbs
│   ├── quiz/              # Quiz, QuizQuestion, QuizSummary
│   ├── search/            # SearchDialog (Cmd+K)
│   ├── terminal/          # Terminal simulator
│   └── ui/                # Badge, Kbd, GlowText
├── data/                  # Content data (DE+EN), quizzes, terminal demos
├── hooks/                 # useClipboard, useTypewriter, useScrollSpy, ...
├── i18n/                  # Routing, request config, navigation
├── lib/                   # Types, constants, search config, content loader
└── messages/              # UI translations (de.json, en.json)
```

## Deployment

This project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

To deploy manually or to another platform, run `npm run build` and serve the `out/` directory.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

[MIT](LICENSE) - Denny Weber
