<script lang="ts">
  import { formatRFC7231, parseISO } from 'date-fns'
  import SEO from '$lib/components/SEO.svelte'
  import { daysAgo } from '$lib/date'
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()

  // Group posts by chapter, then list chapters newest-first.
  const postsByChapter = $derived.by(() => {
    const groups = new Map<number, PageData['posts']>()
    for (const post of data.posts) {
      const chapter = post.chapter ?? 0
      const group = groups.get(chapter) ?? []
      group.push(post)
      groups.set(chapter, group)
    }
    return groups
  })

  const chapters = $derived(
    Array.from(postsByChapter.keys()).sort((a, b) => b - a)
  )
</script>

<SEO title="Lymphoma" description="Recent posts about Lymphoma" />

<h1 class="page-title">My ongoing journey with lymphoma</h1>

{#each chapters as chapter (chapter)}
  <div class="occurrence-divider">Chapter {chapter}</div>
  <ol class="post-card-list">
    {#each postsByChapter.get(chapter) ?? [] as post (post.id)}
      {@const date = parseISO(post.date)}
      <li>
        <a class="post-card" href={post.slug}>
          <h3 class="post-card-title">{post.title}</h3>
          <div class="post-card-meta">
            <span class="post-card-date" title={formatRFC7231(date)}>
              {daysAgo(date)}
            </span>
            <span class="post-card-badge">Chapter {post.chapter}</span>
          </div>
        </a>
      </li>
    {/each}
  </ol>
{/each}

<style>
  .post-card-list {
    list-style-type: none;
    padding: 0;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 1rem;
  }

  .post-card {
    display: block;
    border: var(--color-secondary) solid 2px;
    padding: 1rem;
    border-radius: 2px;
    text-decoration: none;
    transition: var(--transition-default);
    color: var(--color-copy);
  }

  .post-card:hover {
    border-color: var(--color-primary);
    background-color: color-mix(in srgb, var(--color-primary) 4%, transparent);
  }

  .post-card-title {
    font-size: var(--font-size-l3);
    margin: 0 0 1rem 0;
    line-height: 1;
  }

  .post-card-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .post-card-date {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-copy2);
  }

  .occurrence-divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 2rem 0 0.5rem;
    font-size: var(--font-size-copy2);
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-copy-light);
  }

  .occurrence-divider::before,
  .occurrence-divider::after {
    content: '';
    flex: 1;
    border-top: 1px solid var(--color-secondary);
  }

  .post-card-badge {
    margin-left: auto;
    font-size: var(--font-size-copy2);
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-primary);
    background-color: color-mix(
      in srgb,
      var(--color-secondary) 20%,
      transparent
    );
    border: 1px solid var(--color-secondary);
    border-radius: 999px;
    padding: 0.1rem 0.6rem;
    line-height: 1.4;
  }
</style>
