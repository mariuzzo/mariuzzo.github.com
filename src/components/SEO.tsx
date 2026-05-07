import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  title: string
  description?: string
  lang?: string
  image?: {
    src: string
    height: number
    width: number
  }
  breadcrumbs?: Array<{
    name: string
    url?: string
  }>
  noIndex?: boolean
}

export const SEO: React.FC<SEOProps> = ({
  description = '',
  lang = 'en',
  image = {
    src: '/images/icon.png',
    height: 1040,
    width: 1040
  },
  title,
  breadcrumbs = [],
  noIndex = false
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image?.src
    ? `${site.siteMetadata.siteUrl}${image.src}`
    : null

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords.join(',')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage ? (
        <>
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:width" content={String(image.width)} />
          <meta property="og:image:height" content={String(image.height)} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {noIndex && <meta name="robots" content="noindex" />}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, i) => {
              const item: Record<string, unknown> = {
                '@type': 'ListItem',
                position: i + 1,
                name: crumb.name
              }
              if (crumb.url) {
                item.item = `${site.siteMetadata.siteUrl}${crumb.url}`
              }
              return item
            })
          })}
        </script>
      )}
    </>
  )
}
