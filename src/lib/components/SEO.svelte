<script lang="ts">
  import { site } from '$lib/site'

  type Breadcrumb = { name: string; url?: string }
  type Image = { src: string; width: number; height: number }

  let {
    title,
    description = '',
    image = { src: '/images/icon.png', width: 1040, height: 1040 },
    breadcrumbs = [],
    noIndex = false
  }: {
    title: string
    description?: string
    image?: Image
    breadcrumbs?: Breadcrumb[]
    noIndex?: boolean
  } = $props()

  const metaDescription = $derived(description || site.description)
  const metaImage = $derived(image?.src ? `${site.siteUrl}${image.src}` : null)

  const breadcrumbJsonLd = $derived(
    breadcrumbs.length > 0
      ? JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, i) => {
            const item: Record<string, unknown> = {
              '@type': 'ListItem',
              position: i + 1,
              name: crumb.name
            }
            if (crumb.url) {
              item.item = `${site.siteUrl}${crumb.url}`
            }
            return item
          })
        })
      : null
  )
</script>

<svelte:head>
  <title>{title} | {site.title}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={site.keywords.join(',')} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="website" />
  <meta name="twitter:creator" content={site.author} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={metaDescription} />
  {#if metaImage}
    <meta property="og:image" content={metaImage} />
    <meta property="og:image:width" content={String(image.width)} />
    <meta property="og:image:height" content={String(image.height)} />
    <meta name="twitter:card" content="summary_large_image" />
  {:else}
    <meta name="twitter:card" content="summary" />
  {/if}
  {#if noIndex}
    <meta name="robots" content="noindex" />
  {/if}
  {#if breadcrumbJsonLd}
    {@html `<script type="application/ld+json">${breadcrumbJsonLd}<\/script>`}
  {/if}
</svelte:head>
