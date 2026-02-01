import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { SearchDialog } from '@/components/search/SearchDialog';
import { getAllPageSlugs, getCheatSheetPage, buildSearchIndex } from '@/lib/content';
import type { Locale, CheatSheetPage } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  // Build global search index
  const slugs = getAllPageSlugs();
  const allPages: CheatSheetPage[] = [];
  for (const slug of slugs) {
    const p = await getCheatSheetPage(slug);
    if (p) allPages.push(p);
  }
  const searchItems = buildSearchIndex(allPages, locale as Locale);

  return (
    <div lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <SearchDialog items={searchItems} locale={locale as Locale} hideTrigger />
        <div className="flex pt-14 min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-64 min-w-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </NextIntlClientProvider>
    </div>
  );
}
