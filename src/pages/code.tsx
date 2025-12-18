import { graphql } from 'gatsby'
import * as React from 'react'
import { parseISO } from 'date-fns'

import { CodePostsListView } from '../views/CodePostsListView'
import { SEO } from '../components/SEO'

type CodePageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            date: string
            slug: string
            title: string
          }
        }
      }>
    }
  }
}

const CodePage: React.FC<CodePageProps> = ({ data, ...more }) => {
  const posts = data.allMarkdownRemark.edges.map((e) => ({
    id: e.node.id,
    title: e.node.frontmatter.title,
    date: parseISO(e.node.frontmatter.date),
    slug: e.node.frontmatter.slug
  }))

  return (
    <>
      <SEO title="Code" description="Recent posts about code." />
      <CodePostsListView {...more} posts={posts} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/^/code//" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`

export default CodePage
