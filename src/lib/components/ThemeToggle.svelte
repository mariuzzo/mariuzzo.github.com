<script lang="ts">
  type Theme = 'light' | 'dark'

  let theme = $state<Theme>('light')

  $effect(() => {
    const attr = document.documentElement.getAttribute('data-theme')
    theme = attr === 'dark' ? 'dark' : 'light'

    // Follow the system preference live, as long as the user hasn't
    // explicitly toggled (localStorage has no stored preference).
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return
      theme = event.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      applyMetaThemeColor(theme)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  })

  function applyMetaThemeColor(next: Theme) {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#19191d' : '#f9f8f8')
  }

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    applyMetaThemeColor(theme)
  }
</script>

<button
  class="theme-toggle"
  onclick={toggle}
  type="button"
  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if theme === 'dark'}
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: grid;
    place-items: center;
    width: 2em;
    height: 2em;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: none;
    color: var(--color-copy);
    font-size: var(--font-size-copy2);
    cursor: pointer;
    transition: var(--transition-default);
  }

  .theme-toggle:hover {
    color: var(--color-primary);
  }
</style>
