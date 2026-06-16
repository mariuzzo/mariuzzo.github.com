<script lang="ts">
  import SEO from '$lib/components/SEO.svelte'
  import PostDate from '$lib/components/PostDate.svelte'
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()

  const post = $derived(data.post)
</script>

<SEO
  title={post.title}
  breadcrumbs={[
    { name: data.categoryName, url: `/${post.category}` },
    { name: post.title }
  ]}
  image={{ src: `/images/og${post.slug}.png`, width: 1200, height: 630 }}
  publishedTime={post.date}
/>

<div class="post-category">{data.categoryName}</div>
<h1 class="page-title">{post.title}</h1>
{#if post.chapter != null}
  <div class="post-occurrence">
    <span class="post-occurrence-badge">Chapter {post.chapter}</span>
  </div>
{/if}
<small class="post-date"><PostDate date={post.date} /></small>
<article class="prose">
  {@html post.html}
</article>
<footer class="post-footer">
  {#if data.previousSlug}
    <a class="post-nav post-nav--prev" href={data.previousSlug}>
      <span>←</span>Previous
    </a>
  {/if}
  {#if data.nextSlug}
    <a class="post-nav post-nav--next" href={data.nextSlug}>
      Next<span>→</span>
    </a>
  {/if}
</footer>

<style>
  .post-category {
    display: block;
    color: var(--color-secondary);
    text-align: center;
    margin: 1rem 0;
    font-size: var(--font-size-l3);
    font-weight: var(--font-weight-light);
  }

  .post-occurrence {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .post-occurrence-badge {
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

  .post-date {
    display: block;
    text-align: center;
    color: var(--color-copy-light);
  }

  .post-footer {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    margin-top: 2rem;
    font-size: var(--font-size-copy1);
  }

  .post-nav {
    text-decoration: none;
    font-weight: var(--font-weight-black);
    color: var(--color-primary);
  }

  .post-nav--prev {
    grid-column: 1;
  }

  .post-nav--next {
    grid-column: 3;
  }

  .post-nav:hover > span {
    opacity: 1;
  }

  .post-nav > span {
    transition: var(--transition-default);
    background-color: var(--color-primary);
    color: var(--color-background);
    display: inline-block;
    padding: 0.5em;
    border-radius: 1px;
    opacity: 0.5;
  }

  .post-nav--prev > span {
    margin-right: 0.3em;
  }

  .post-nav--next > span {
    margin-left: 0.3em;
  }

  @media (min-width: 992px) {
    .post-category {
      font-size: var(--font-size-l2);
      margin: 2rem 0;
    }
  }

  @media (min-width: 1200px) {
    .post-category {
      margin: 3rem 0;
    }
  }
</style>
