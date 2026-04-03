import fs from 'fs';
import path from 'path';

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  targetKeyword: string;
  searchVolume?: number;
  keywordDifficulty?: number;
}

export interface ParsedArticle {
  frontmatter: ArticleFrontmatter;
  content: string;
  htmlContent: string;
}

/** Parse frontmatter block from MDX file */
function parseFrontmatter(raw: string): { frontmatter: ArticleFrontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return {
      frontmatter: {
        title: '',
        description: '',
        date: '',
        author: '',
        category: '',
        tags: [],
        targetKeyword: '',
      },
      body: raw,
    };
  }

  const yamlBlock = match[1];
  const body = match[2];

  const fm: Partial<ArticleFrontmatter> = {};

  // Parse simple string values
  const titleMatch = yamlBlock.match(/^title:\s*"(.*?)"\s*$/m);
  if (titleMatch) fm.title = titleMatch[1];

  const descMatch = yamlBlock.match(/^description:\s*"(.*?)"\s*$/m);
  if (descMatch) fm.description = descMatch[1];

  const dateMatch = yamlBlock.match(/^date:\s*"(.*?)"\s*$/m);
  if (dateMatch) fm.date = dateMatch[1];

  const authorMatch = yamlBlock.match(/^author:\s*"(.*?)"\s*$/m);
  if (authorMatch) fm.author = authorMatch[1];

  const categoryMatch = yamlBlock.match(/^category:\s*"(.*?)"\s*$/m);
  if (categoryMatch) fm.category = categoryMatch[1];

  const kwMatch = yamlBlock.match(/^targetKeyword:\s*"(.*?)"\s*$/m);
  if (kwMatch) fm.targetKeyword = kwMatch[1];

  const svMatch = yamlBlock.match(/^searchVolume:\s*(\d+)/m);
  if (svMatch) fm.searchVolume = parseInt(svMatch[1]);

  const kdMatch = yamlBlock.match(/^keywordDifficulty:\s*(\d+)/m);
  if (kdMatch) fm.keywordDifficulty = parseInt(kdMatch[1]);

  // Parse tags array
  const tagsMatch = yamlBlock.match(/^tags:\s*\[(.*?)\]\s*$/m);
  if (tagsMatch) {
    fm.tags = tagsMatch[1]
      .split(',')
      .map((t) => t.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  } else {
    fm.tags = [];
  }

  return {
    frontmatter: fm as ArticleFrontmatter,
    body,
  };
}

/** Convert markdown to HTML (simple subset: headings, paragraphs, bold, lists, tables, links) */
export function markdownToHtml(md: string): string {
  let html = md;

  // Escape any existing HTML (basic)
  // We skip full escaping to preserve intentional HTML-like content

  // Remove the H1 title (it's rendered separately)
  html = html.replace(/^# .+\n/, '');

  // Convert tables
  html = html.replace(/((?:\|[^\n]*\|\n)+)/g, (tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter(Boolean);
    if (rows.length < 2) return tableBlock;

    const headerCells = rows[0]
      .split('|')
      .filter((c) => c.trim())
      .map(
        (c) =>
          `<th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">${c.trim()}</th>`
      )
      .join('');

    const bodyRows = rows
      .slice(2)
      .map((row) => {
        const cells = row
          .split('|')
          .filter((c) => c.trim())
          .map(
            (c) =>
              `<td class="px-4 py-3 text-sm text-gray-700 border border-gray-200">${c.trim()}</td>`
          )
          .join('');
        return `<tr class="even:bg-gray-50">${cells}</tr>`;
      })
      .join('');

    return `<div class="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm"><table class="w-full border-collapse"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
  });

  // H4
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="text-lg font-bold text-gray-900 mt-8 mb-3">$1</h4>'
  );
  // H3
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-xl font-bold text-gray-900 mt-10 mb-4">$1</h3>'
  );
  // H2
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">$1</h2>'
  );

  // Code blocks
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```\w*\n?/, '').replace(/```$/, '');
    return `<pre class="bg-gray-900 text-green-400 rounded-xl p-6 overflow-x-auto my-6 text-sm"><code>${code}</code></pre>`;
  });

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
  );

  // Unordered lists
  html = html.replace(/((?:^- .+\n?)+)/gm, (block) => {
    const items = block
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => line.replace(/^- /, '').trim())
      .map((item) => {
        // Process bold within list items
        item = item.replace(
          /\*\*([^*]+)\*\*/g,
          '<strong class="font-semibold text-gray-900">$1</strong>'
        );
        return `<li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span>${item}</span></li>`;
      })
      .join('');
    return `<ul class="space-y-2 my-6 reveal">${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
    let counter = 0;
    const items = block
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => line.replace(/^\d+\. /, '').trim())
      .map((item) => {
        counter++;
        item = item.replace(
          /\*\*([^*]+)\*\*/g,
          '<strong class="font-semibold text-gray-900">$1</strong>'
        );
        return `<li class="flex items-start gap-3"><span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">${counter}</span><span>${item}</span></li>`;
      })
      .join('');
    return `<ol class="space-y-3 my-6 reveal">${items}</ol>`;
  });

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-4 border-primary/40 pl-4 py-2 my-6 text-gray-600 italic">$1</blockquote>'
  );

  // Bold and italic
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong class="font-bold italic">$1</strong>');
  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-gray-900">$1</strong>'
  );
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:underline font-medium">$1</a>'
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-10 border-gray-200" />');

  // Paragraphs (blank-line-separated)
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      block = block.trim();
      if (!block) return '';
      // Skip if already an HTML block
      if (
        block.startsWith('<h') ||
        block.startsWith('<ul') ||
        block.startsWith('<ol') ||
        block.startsWith('<div') ||
        block.startsWith('<pre') ||
        block.startsWith('<blockquote') ||
        block.startsWith('<hr')
      ) {
        return block;
      }
      // Inline elements wrapped in paragraph
      block = block.replace(/\n/g, ' ');
      return `<p class="text-gray-700 leading-relaxed mb-4 reveal">${block}</p>`;
    })
    .filter(Boolean)
    .join('\n');

  return html;
}

/** Read and parse an MDX article file */
export function getArticle(slug: string): ParsedArticle | null {
  const filePath = path.join(process.cwd(), 'src/content/articles', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(raw);
  const htmlContent = markdownToHtml(body);

  return { frontmatter, content: body, htmlContent };
}

/** Get all available MDX article slugs */
export function getAllArticleSlugs(): string[] {
  const dir = path.join(process.cwd(), 'src/content/articles');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
