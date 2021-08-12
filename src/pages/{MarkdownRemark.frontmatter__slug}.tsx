import * as React from 'react'
import { graphql } from 'gatsby'
import { parseISO } from 'date-fns'

import { PostLayout } from '../layouts/PostLayout'

type TemplateProps = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        slug: string
        title: string
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

const Template: React.FC<TemplateProps> = ({ data, ...more }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const slugs = allMarkdownRemark.edges.map(
    (edge) => edge.node.frontmatter.slug
  )
  const previousSlug = slugs[slugs.indexOf(frontmatter.slug) - 1]
  const nextSlug = slugs[slugs.indexOf(frontmatter.slug) + 1]

  return (
    <PostLayout
      {...more}
      title={frontmatter.title}
      date={parseISO(frontmatter.date)}
      category="Cancer"
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
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
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
