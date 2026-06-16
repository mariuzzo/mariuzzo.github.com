<script lang="ts">
  import SEO from '$lib/components/SEO.svelte'
</script>

<SEO title="Home" />

<div class="hero">
  <h1 class="greeting">Hi, I'm Rubens</h1>
</div>
<div class="card-grid">
  <a class="card" href="/code">
    <div class="card-icon">{'{ }'}</div>
    <h2 class="card-title">Code</h2>
    <p class="card-description">I build things.</p>
    <span class="card-cta">See my work →</span>
  </a>
  <a class="card" href="/lymphoma">
    <div class="card-icon">♥</div>
    <h2 class="card-title">Lymphoma</h2>
    <p class="card-description">I fight things.</p>
    <span class="card-cta">Read my journey →</span>
  </a>
</div>

<style>
  .hero {
    text-align: center;
    padding: 3rem 0 4rem;
  }

  .greeting {
    font-size: var(--font-size-l2);
    font-weight: var(--font-weight-black);
    color: var(--color-copy);
    line-height: 1;
    margin: 0 0 0.75rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 4rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: var(--color-secondary) solid 2px;
    border-radius: 4px;
    padding: 2rem;
    text-decoration: none;
    color: var(--color-copy);
    transition: var(--transition-default);
  }

  .card:hover {
    border-color: var(--color-primary);
    background-color: color-mix(in srgb, var(--color-primary) 4%, transparent);
  }

  .card-icon {
    font-family: 'Source Code Pro', Consolas, Monaco, monospace;
    font-size: 1.75rem;
    color: var(--color-primary);
    margin-bottom: 1.25rem;
    line-height: 1;
  }

  .card-title {
    font-size: var(--font-size-l2);
    font-weight: var(--font-weight-black);
    line-height: 1;
    margin: 0 0 0.75rem;
  }

  .card-description {
    font-size: var(--font-size-copy1);
    color: var(--color-copy-light);
    margin: 0;
    flex-grow: 1;
  }

  .card-cta {
    display: inline-block;
    margin-top: 1.5rem;
    font-size: var(--font-size-copy2);
    color: var(--color-primary);
    font-weight: var(--font-weight-semi-bold);
  }

  @media (min-width: 768px) {
    .card-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .greeting {
      font-size: var(--font-size-l1);
    }
  }
</style>
