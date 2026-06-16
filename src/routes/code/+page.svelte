<script lang="ts">
  import { formatRFC7231, parseISO } from 'date-fns'
  import SEO from '$lib/components/SEO.svelte'
  import { daysAgo } from '$lib/date'
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()
</script>

<SEO title="Code" description="Recent posts about code." />

<h1 class="page-title">Old posts about<br />code</h1>
<ol class="post-card-list">
  {#each data.posts as post (post.id)}
    {@const date = parseISO(post.date)}
    <li>
      <a class="post-card" href={post.slug}>
        <h3 class="post-card-title">{post.title}</h3>
        <div class="post-card-meta">
          <span class="post-card-date" title={formatRFC7231(date)}>
            {daysAgo(date)}
          </span>
        </div>
      </a>
    </li>
  {/each}
</ol>

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

  .post-card-date {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-copy2);
  }
</style>
