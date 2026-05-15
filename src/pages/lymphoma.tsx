import { graphql } from 'gatsby'
import * as React from 'react'
import { parseISO } from 'date-fns'

import { LymphomaPostsListView } from '../views/LymphomaPostsListView'
import { SEO } from '../components/SEO'

type LymphomaPageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            date: string
            slug: string
            title: string
            chapter: number
          }
        }
      }>
    }
  }
}

export const Head = () => (
  <SEO title="Lymphoma" description="Recent posts about Lymphoma" />
)

const LymphomaPage: React.FC<LymphomaPageProps> = ({ data, ...more }) => {
  const posts = data.allMarkdownRemark.edges.map((e) => ({
    id: e.node.id,
    title: e.node.frontmatter.title,
    date: parseISO(e.node.frontmatter.date),
    slug: e.node.frontmatter.slug,
    chapter: e.node.frontmatter.chapter
  }))

  return <LymphomaPostsListView {...more} posts={posts} />
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/^/lymphoma//" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
            chapter
          }
        }
      }
    }
  }
`

export default LymphomaPage
