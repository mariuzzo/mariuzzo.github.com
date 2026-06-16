import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypePrism from 'rehype-prism-plus'
import rehypeStringify from 'rehype-stringify'

export type PostMeta = {
  id: string
  title: string
  /** ISO 8601 date string. */
  date: string
  slug: string
  category: string
  chapter?: number
}

export type Post = PostMeta & {
  html: string
}

// Markdown → HTML pipeline. `rehype-prism-plus` reproduces the Prism syntax
// highlighting previously provided by `gatsby-remark-prismjs` (paired with the
// Okaidia theme imported in app.css). `rehype-raw` preserves inline HTML in
// posts, matching gatsby-transformer-remark's default behaviour.
const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypePrism, { ignoreMissing: true })
  .use(rehypeStringify, { allowDangerousHtml: true })

type RawEntry = {
  frontmatter: Record<string, unknown>
  body: string
}

const files = import.meta.glob('/src/markdown/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

const entries: RawEntry[] = Object.values(files).map((content) => {
  const parsed = matter(content)
  return { frontmatter: parsed.data, body: parsed.content }
})

function toMeta(entry: RawEntry): PostMeta {
  const fm = entry.frontmatter
  const slug = String(fm.slug)
  return {
    id: slug,
    title: String(fm.title),
    date: new Date(fm.date as string).toISOString(),
    slug,
    category: slug.split('/')[1] ?? '',
    chapter: typeof fm.chapter === 'number' ? fm.chapter : undefined
  }
}

function byDateDesc(a: PostMeta, b: PostMeta): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

/** All posts in a category, most recent first. */
export function listPosts(category: string): PostMeta[] {
  return entries
    .map(toMeta)
    .filter((post) => post.category === category)
    .sort(byDateDesc)
}

/** Resolve a single post (with rendered HTML) plus its in-category neighbours. */
export async function getPost(slug: string): Promise<{
  post: Post
  previousSlug?: string
  nextSlug?: string
} | null> {
  const entry = entries.find((e) => String(e.frontmatter.slug) === slug)
  if (!entry) {
    return null
  }

  const meta = toMeta(entry)
  const html = String(await processor.process(entry.body))

  // Neighbours are computed within the same category, ordered oldest → newest
  // (matching the previous Gatsby template logic).
  const inCategory = entries
    .map(toMeta)
    .filter((post) => post.category === meta.category)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((post) => post.slug)

  const index = inCategory.indexOf(slug)

  return {
    post: { ...meta, html },
    previousSlug: inCategory[index - 1],
    nextSlug: inCategory[index + 1]
  }
}
