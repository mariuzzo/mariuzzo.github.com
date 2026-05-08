import * as React from 'react'
import { graphql } from 'gatsby'
import { parseISO } from 'date-fns'

import { PostLayout } from '../layouts/PostLayout'
import { getBlogNameById } from '../utils/blog'
import { SEO } from '../components/SEO'

type TemplateProps = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        slug: string
        title: string
        occurrence: number | null
      }
    }
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            slug: string
          }
        }
      }>
    }
  }
}

export const Head: React.FC<TemplateProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const categoryId = frontmatter.slug.split('/')[1]
  return (
    <SEO
      title={frontmatter.title}
      breadcrumbs={[
        { name: getBlogNameById(categoryId), url: `/${categoryId}` },
        { name: frontmatter.title }
      ]}
      image={{
        src: `/images/og${frontmatter.slug}.png`,
        width: 1200,
        height: 630
      }}
    />
  )
}

const Template: React.FC<TemplateProps> = ({ data, ...more }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const categoryId = frontmatter.slug.split('/')[1]

  const slugs = allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter.slug)
    .filter((slug) => slug.split('/')[1] === categoryId)
  const previousSlug = slugs[slugs.indexOf(frontmatter.slug) - 1]
  const nextSlug = slugs[slugs.indexOf(frontmatter.slug) + 1]

  return (
    <PostLayout
      {...more}
      title={frontmatter.title}
      date={parseISO(frontmatter.date)}
      category={getBlogNameById(categoryId)}
      occurrence={frontmatter.occurrence ?? undefined}
      contents={html}
      previousSlug={previousSlug}
      nextSlug={nextSlug}
    />
  )
}

export default Template

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        occurrence
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`
