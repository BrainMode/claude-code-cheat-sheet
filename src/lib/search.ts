import Fuse, { type IFuseOptions } from 'fuse.js';
import type { SearchableItem } from './types';

const fuseOptions: IFuseOptions<SearchableItem> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'command', weight: 0.3 },
    { name: 'description', weight: 0.2 },
    { name: 'tags', weight: 0.1 },
  ],
  threshold: 0.3,
  includeMatches: true,
  minMatchCharLength: 2,
};

export function createSearchIndex(items: SearchableItem[]): Fuse<SearchableItem> {
  return new Fuse(items, fuseOptions);
}

export function searchItems(
  fuse: Fuse<SearchableItem>,
  query: string,
  category?: string
): SearchableItem[] {
  if (!query.trim()) {
    return [];
  }

  const results = fuse.search(query);
  let items = results.map((r) => r.item);

  if (category) {
    items = items.filter((item) => item.category === category);
  }

  return items;
}
