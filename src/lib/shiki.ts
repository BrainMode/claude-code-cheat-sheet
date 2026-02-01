import { type Highlighter, createHighlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['bash', 'typescript', 'javascript', 'json', 'yaml', 'markdown', 'python', 'text'],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang: string = 'bash'
): Promise<string> {
  const highlighter = await getHighlighter();
  const validLangs = ['bash', 'typescript', 'javascript', 'json', 'yaml', 'markdown', 'python', 'text'];
  const safeLang = validLangs.includes(lang) ? lang : 'text';

  return highlighter.codeToHtml(code, {
    lang: safeLang,
    theme: 'github-dark',
  });
}
