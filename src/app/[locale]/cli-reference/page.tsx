import { setRequestLocale } from 'next-intl/server';
import { getCheatSheetPage, getAllPageSlugs, buildSearchIndex } from '@/lib/content';
import { SectionRenderer } from '@/components/content/SectionRenderer';
import { SearchDialog } from '@/components/search/SearchDialog';
import { Quiz } from '@/components/quiz/Quiz';
import { quizzes } from '@/data/quizzes';
import type { Locale, CheatSheetPage } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function CliReferencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getCheatSheetPage('cli-reference');
  if (!page) return null;

  const quiz = quizzes.find((q) => q.id === 'quiz-cli-reference');

  // Build search index from all pages for the SearchDialog
  const slugs = getAllPageSlugs();
  const allPages: CheatSheetPage[] = [];
  for (const slug of slugs) {
    const p = await getCheatSheetPage(slug);
    if (p) allPages.push(p);
  }
  const searchItems = buildSearchIndex(allPages, locale as Locale);

  return (
    <div className="space-y-12">
      {/* Page Header with Search */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold font-mono text-terminal-green text-glow">
            {page.title[locale as Locale]}
          </h1>
          <SearchDialog items={searchItems} locale={locale as Locale} />
        </div>
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
