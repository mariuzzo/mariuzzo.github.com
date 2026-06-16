<script lang="ts">
  import '../app.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let { children } = $props()
</script>

<div class="container">
  <Header />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 100%;
    max-width: 800px;
    margin: auto;
    padding: 0 1rem;
  }

  @media (min-width: 992px) {
    .container {
      padding: 0 2rem;
    }
  }
</style>
