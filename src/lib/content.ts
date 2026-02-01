import type { CheatSheetPage, Locale, SearchableItem } from './types';

const contentModules: Record<string, () => Promise<{ default: CheatSheetPage }>> = {
  'getting-started': () => import('@/data/content/getting-started'),
  'cli-reference': () => import('@/data/content/cli-reference'),
  configuration: () => import('@/data/content/configuration'),
  advanced: () => import('@/data/content/advanced-features'),
  'best-practices': () => import('@/data/content/best-practices'),
  reference: () => import('@/data/content/reference'),
};

export async function getCheatSheetPage(slug: string): Promise<CheatSheetPage | null> {
  const loader = contentModules[slug];
  if (!loader) return null;

  const module = await loader();
  return module.default;
}

export function getAllPageSlugs(): string[] {
  return Object.keys(contentModules);
}

export function buildSearchIndex(
  pages: CheatSheetPage[],
  locale: Locale
): SearchableItem[] {
  const items: SearchableItem[] = [];

  for (const page of pages) {
    for (const section of page.sections) {
      for (const entry of section.entries) {
        items.push({
          id: entry.id,
          title: entry.title[locale],
          description: entry.description[locale],
          command: entry.command,
          category: entry.category,
          tags: entry.tags,
          section: section.title[locale],
          href: `/${locale}/${page.id}#${entry.id}`,
          locale,
        });
      }
    }
  }

  return items;
}
