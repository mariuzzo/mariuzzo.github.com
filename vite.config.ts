import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, type Plugin } from 'vite'

// Posts are loaded server-side via `import.meta.glob`, so editing a markdown
// file only invalidates the SSR module graph. Force the browser to reload.
function reloadOnMarkdownChange(): Plugin {
  return {
    name: 'reload-on-markdown-change',
    hotUpdate({ file }) {
      if (this.environment.name === 'client' && file.endsWith('.md')) {
        this.environment.hot.send({ type: 'full-reload' })
        return []
      }
    }
  }
}

export default defineConfig({
  plugins: [
    reloadOnMarkdownChange(),
    sveltekit({
      preprocess: vitePreprocess(),
      // GitHub Pages serves static files only, so everything is prerendered.
      // `404.html` is the fallback GitHub Pages uses for unknown routes.
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: '404.html',
        precompress: false,
        strict: true
      }),
      prerender: {
        // Old posts contain a few dead links (e.g. /about/contact). Warn rather
        // than fail the build, preserving the original content untouched.
        handleHttpError: 'warn',
        handleMissingId: 'warn'
      }
    })
  ]
})
