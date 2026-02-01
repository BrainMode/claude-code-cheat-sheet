import React from 'react';
import { highlightCode } from '@/lib/shiki';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export async function CodeBlock({
  code,
  language = 'bash',
  title,
  showLineNumbers = false,
  className = '',
}: CodeBlockProps) {
  let highlightedHtml: string | null = null;

  try {
    highlightedHtml = await highlightCode(code, language);
  } catch {
    // Fall back to plain text rendering
  }

  return (
    <div
      className={`rounded-lg bg-terminal-bg-card border border-terminal-border overflow-hidden ${className}`}
    >
      {/* Terminal header with colored dots */}
      <div className="flex items-center gap-2 px-4 py-2 bg-terminal-bg-elevated border-b border-terminal-border">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-terminal-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-terminal-amber" />
          <span className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
        </div>
        {title && (
          <span className="ml-2 text-xs text-terminal-gray font-mono truncate">
            {title}
          </span>
        )}
      </div>

      {/* Code content area */}
      <div className="relative group">
        {/* Copy button - positioned top-right */}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton text={code} size="sm" />
        </div>

        {highlightedHtml ? (
          <div
            className={`overflow-x-auto p-4 text-sm font-mono [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!bg-transparent ${
              showLineNumbers ? '[&_.line]:before:content-[counter(line)] [&_.line]:before:counter-increment-[line] [&_.line]:before:mr-4 [&_.line]:before:text-terminal-gray/50 [&_.line]:before:text-right [&_.line]:before:inline-block [&_.line]:before:w-4 [&_pre]:counter-reset-[line]' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre
            className={`overflow-x-auto p-4 text-sm font-mono text-terminal-white ${
              showLineNumbers ? 'pl-12' : ''
            }`}
          >
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
