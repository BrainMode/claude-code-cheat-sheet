import { setRequestLocale } from 'next-intl/server';
import { getCheatSheetPage } from '@/lib/content';
import { SectionRenderer } from '@/components/content/SectionRenderer';
import { Quiz } from '@/components/quiz/Quiz';
import { Terminal } from '@/components/terminal/Terminal';
import { quizzes } from '@/data/quizzes';
import { terminalDemos } from '@/data/terminal-demos';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function BestPracticesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getCheatSheetPage('best-practices');
  if (!page) return null;

  const quiz = quizzes.find((q) => q.id === 'quiz-best-practices');
  const hackathonDemo = terminalDemos.find((d) => d.id === 'demo-hackathon-setup');

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold font-mono text-terminal-green text-glow mb-2">
          {page.title[locale as Locale]}
        </h1>
        <p className="text-terminal-gray text-lg">
          {page.description[locale as Locale]}
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="rounded-lg border border-terminal-border bg-terminal-bg-card p-4">
        <h2 className="text-sm font-mono font-bold text-terminal-gray mb-3 uppercase tracking-wider">
          {locale === 'de' ? 'Auf dieser Seite' : 'On this page'}
        </h2>
        <ul className="space-y-1.5">
          {page.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 text-sm font-mono text-terminal-gray hover:text-terminal-green transition-colors duration-200"
              >
                <span className="text-terminal-green/40">#</span>
                {section.title[locale as Locale]}
                <span className="text-terminal-gray/40 text-xs">
                  ({section.entries.length})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections with hackathon demo */}
      {page.sections.map((section) => (
        <div key={section.id} className="space-y-8">
          <SectionRenderer section={section} locale={locale as Locale} />

          {/* Hackathon setup demo after the hackathon section */}
          {section.id === 'hackathon' && hackathonDemo && (
            <div className="ml-0 sm:ml-4">
              <h3 className="text-base font-mono font-bold text-terminal-amber mb-3">
                <span className="text-terminal-gray/50 mr-1">&gt;</span>
                {hackathonDemo.title[locale as Locale]}
              </h3>
              <Terminal
                demo={hackathonDemo}
                autoPlay={false}
                loop={false}
                showControls={true}
                locale={locale as Locale}
              />
            </div>
          )}
        </div>
      ))}

      {/* Quiz */}
      {quiz && (
        <div className="mt-16 pt-8 border-t border-terminal-border">
          <Quiz config={quiz} locale={locale as Locale} />
        </div>
      )}
    </div>
  );
}
