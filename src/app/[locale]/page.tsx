import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Terminal as TerminalIcon, Search, HelpCircle, Globe, ArrowRight, Rocket, Settings, Layers, Lightbulb, BookOpen } from 'lucide-react';
import { GlowText } from '@/components/ui/GlowText';
import { Terminal } from '@/components/terminal/Terminal';
import { terminalDemos } from '@/data/terminal-demos';
import { NAVIGATION } from '@/lib/constants';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

const NAV_ICONS: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={18} />,
  Terminal: <TerminalIcon size={18} />,
  Settings: <Settings size={18} />,
  Layers: <Layers size={18} />,
  Lightbulb: <Lightbulb size={18} />,
  BookOpen: <BookOpen size={18} />,
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  const installationDemo = terminalDemos.find((d) => d.id === 'demo-installation');

  return (
    <div className="space-y-16">
      {/* ============================================ */}
      {/* Hero Section */}
      {/* ============================================ */}
      <section className="relative pt-8 pb-4">
        {/* Decorative grid background */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,255,65,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="text-center space-y-6">
          {/* Terminal-style prompt prefix */}
          <p className="font-mono text-sm text-terminal-gray">
            <span className="text-terminal-cyan">~</span>
            <span className="text-terminal-white"> $ </span>
            <span className="text-terminal-green">claude</span>
            <span className="text-terminal-gray"> --help</span>
          </p>

          {/* Main title */}
          <GlowText
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight"
          >
            {t('heroTitle')}
          </GlowText>

          {/* Subtitle */}
          <p className="text-xl text-terminal-amber font-mono">
            {t('heroSubtitle')}
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-terminal-gray leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href={`/${locale}/getting-started`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-terminal-green/10 border border-terminal-green/30 text-terminal-green font-mono text-sm hover:bg-terminal-green/20 hover:border-terminal-green/50 transition-all duration-200 group"
            >
              {t('heroCta')}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>

        {/* Terminal Demo */}
        {installationDemo && (
          <div className="mt-12 max-w-2xl mx-auto">
            <Terminal
              demo={installationDemo}
              autoPlay={true}
              loop={false}
              showControls={true}
              locale={locale as Locale}
            />
          </div>
        )}
      </section>

      {/* ============================================ */}
      {/* Features Grid */}
      {/* ============================================ */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Terminal Demos */}
          <div className="rounded-lg border border-terminal-border bg-terminal-bg-card p-5 hover:border-terminal-green/30 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-terminal-green/10 text-terminal-green">
                <TerminalIcon size={20} />
              </div>
              <h3 className="font-mono font-bold text-terminal-white text-sm">
                {t('features.terminal')}
              </h3>
            </div>
            <p className="text-sm text-terminal-gray leading-relaxed">
              {t('features.terminalDesc')}
            </p>
          </div>

          {/* Quick Search */}
          <div className="rounded-lg border border-terminal-border bg-terminal-bg-card p-5 hover:border-terminal-green/30 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-terminal-cyan/10 text-terminal-cyan">
                <Search size={20} />
              </div>
              <h3 className="font-mono font-bold text-terminal-white text-sm">
                {t('features.search')}
              </h3>
            </div>
            <p className="text-sm text-terminal-gray leading-relaxed">
              {t('features.searchDesc')}
            </p>
          </div>

          {/* Quizzes */}
          <div className="rounded-lg border border-terminal-border bg-terminal-bg-card p-5 hover:border-terminal-green/30 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-terminal-amber/10 text-terminal-amber">
                <HelpCircle size={20} />
              </div>
              <h3 className="font-mono font-bold text-terminal-white text-sm">
                {t('features.quiz')}
              </h3>
            </div>
            <p className="text-sm text-terminal-gray leading-relaxed">
              {t('features.quizDesc')}
            </p>
          </div>

          {/* Bilingual */}
          <div className="rounded-lg border border-terminal-border bg-terminal-bg-card p-5 hover:border-terminal-green/30 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-terminal-purple/10 text-terminal-purple">
                <Globe size={20} />
              </div>
              <h3 className="font-mono font-bold text-terminal-white text-sm">
                {t('features.bilingual')}
              </h3>
            </div>
            <p className="text-sm text-terminal-gray leading-relaxed">
              {t('features.bilingualDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Section Navigation Cards */}
      {/* ============================================ */}
      <section>
        <h2 className="text-xl font-mono font-bold text-terminal-green text-glow mb-6">
          <span className="text-terminal-gray/50 mr-1">#</span>
          {locale === 'de' ? 'Kapitel' : 'Sections'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="group flex items-center gap-3 rounded-lg border border-terminal-border bg-terminal-bg-card p-4 hover:border-terminal-green/30 hover:bg-terminal-bg-elevated transition-all duration-200"
            >
              <div className="flex-shrink-0 text-terminal-gray group-hover:text-terminal-green transition-colors duration-200">
                {NAV_ICONS[item.icon] || <TerminalIcon size={18} />}
              </div>
              <span className="font-mono text-sm text-terminal-white group-hover:text-terminal-green transition-colors duration-200">
                {tNav(item.titleKey.replace('nav.', ''))}
              </span>
              <ArrowRight
                size={14}
                className="ml-auto text-terminal-gray/30 group-hover:text-terminal-green/50 group-hover:translate-x-0.5 transition-all duration-200"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* Quick Start Commands */}
      {/* ============================================ */}
      <section>
        <h2 className="text-xl font-mono font-bold text-terminal-green text-glow mb-6">
          <span className="text-terminal-gray/50 mr-1">#</span>
          {locale === 'de' ? 'Schnellstart' : 'Quick Start'}
        </h2>

        <div className="rounded-lg border border-terminal-border bg-terminal-bg-card overflow-hidden">
          <div className="divide-y divide-terminal-border">
            {[
              {
                cmd: 'npm install -g @anthropic-ai/claude-code',
                label: { de: 'Installation', en: 'Installation' },
              },
              {
                cmd: 'claude',
                label: { de: 'Starten', en: 'Start' },
              },
              {
                cmd: 'claude "explain this project"',
                label: { de: 'Einzeiler', en: 'One-liner' },
              },
              {
                cmd: 'claude -c',
                label: { de: 'Session fortsetzen', en: 'Continue session' },
              },
              {
                cmd: 'claude -p "find bugs" --output-format json',
                label: { de: 'Headless-Modus', en: 'Headless mode' },
              },
              {
                cmd: '/init',
                label: { de: 'CLAUDE.md erstellen', en: 'Create CLAUDE.md' },
              },
            ].map((item) => (
              <div
                key={item.cmd}
                className="flex items-center gap-4 px-4 py-3 hover:bg-terminal-bg-elevated transition-colors duration-200"
              >
                <code className="flex-1 font-mono text-sm text-terminal-green truncate">
                  {item.cmd}
                </code>
                <span className="flex-shrink-0 text-xs text-terminal-gray font-mono">
                  {item.label[locale as Locale]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
