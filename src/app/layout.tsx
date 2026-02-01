import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Claude Code Cheat Sheet',
  description: 'Interactive, bilingual (DE/EN) cheat sheet for Claude Code — Anthropic\'s agentic coding tool. Terminal-themed reference with fuzzy search, quizzes, and live demos.',
  keywords: ['claude code', 'cheat sheet', 'cli reference', 'anthropic', 'agentic coding', 'terminal', 'commands', 'flags', 'shortcuts'],
  authors: [{ name: 'Denny Weber' }],
  openGraph: {
    title: 'Claude Code Cheat Sheet',
    description: 'Interactive reference for Claude Code — all commands, flags, shortcuts & best practices.',
    type: 'website',
    locale: 'en',
    alternateLocale: 'de',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code Cheat Sheet',
    description: 'Interactive reference for Claude Code — all commands, flags, shortcuts & best practices.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${jetbrainsMono.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
