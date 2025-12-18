import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: Array<{
    name?: string
    content?: string
    property?: string
  }>
  image?: {
    src: string
    height: number
    width: number
  }
  pathname?: string
  breadcrumbs?: Array<{
    name: string
    url?: string
  }>
  noIndex?: boolean
}

export const SEO: React.FC<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  image = {
    src: '/images/icon.png',
    height: 1040,
    width: 1040
  },
  title,
  pathname,
  breadcrumbs = [],
  noIndex = false
}) => {
  const { site } = useStaticQuery(
    graphql`
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
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage =
    image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical
              }
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(',')
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: metaImage
                },
                {
                  property: 'og:image:width',
                  content: image.width
                },
                {
                  property: 'og:image:height',
                  content: image.height
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image'
                }
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary'
                }
              ]
        )
        .concat(
          noIndex
            ? [
                {
                  name: 'robots',
                  content: 'noindex'
                }
              ]
            : []
        )
        .concat(meta as any)}
      script={
        breadcrumbs.length > 0
          ? [
              {
                type: 'application/ld+json',
                innerHTML: `
                  {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [${JSON.stringify(
                      breadcrumbs.map((crumb, i) => {
                        const item: any = {
                          '@type': 'ListItem',
                          position: i + 1,
                          name: crumb.name
                        }
                        if (crumb.url) {
                          item.item = `${site.siteMetadata.siteUrl}${crumb.url}`
                        }
                        return item
                      })
                    )}]
                  }
                `
              }
            ]
          : undefined
      }
    />
  )
}
