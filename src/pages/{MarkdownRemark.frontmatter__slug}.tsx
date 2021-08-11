import * as React from 'react'
import { graphql } from 'gatsby'
import { PostLayout } from '../layouts/PostLayout'

export default function Template({ data }) {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const slugs = allMarkdownRemark.edges.map(
    (edge) => edge.node.frontmatter.slug
  )
  const previousSlug = slugs[slugs.indexOf(frontmatter.slug) - 1]
  const nextSlug = slugs[slugs.indexOf(frontmatter.slug) + 1]

  console.log(data)
  return (
    <PostLayout
      title={frontmatter.title}
      date={frontmatter.date}
      category="Cancer"
      contents={html}
      previousSlug={previousSlug}
      nextSlug={nextSlug}
    />
  )
}

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
