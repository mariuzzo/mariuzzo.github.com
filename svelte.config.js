import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
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
  }
}

export default config
