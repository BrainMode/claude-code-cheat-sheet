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

export default async function GettingStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getCheatSheetPage('getting-started');
  if (!page) return null;

  const quiz = quizzes.find((q) => q.id === 'quiz-getting-started');
  const installationDemo = terminalDemos.find((d) => d.id === 'demo-installation');

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

      {/* Terminal Demo: Installation */}
      {installationDemo && (
        <div>
          <h2 className="text-lg font-mono font-bold text-terminal-amber mb-4">
            <span className="text-terminal-gray/50 mr-1">&gt;</span>
            {installationDemo.title[locale as Locale]}
          </h2>
          <Terminal
            demo={installationDemo}
            autoPlay={false}
            loop={false}
            showControls={true}
            locale={locale as Locale}
          />
        </div>
      )}

      {/* Sections */}
      {page.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          locale={locale as Locale}
        />
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
