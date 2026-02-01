import { setRequestLocale } from 'next-intl/server';
import { getCheatSheetPage } from '@/lib/content';
import { SectionRenderer } from '@/components/content/SectionRenderer';
import { Quiz } from '@/components/quiz/Quiz';
import { quizzes } from '@/data/quizzes';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function ReferencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getCheatSheetPage('reference');
  if (!page) return null;

  const quiz = quizzes.find((q) => q.id === 'quiz-reference');

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
