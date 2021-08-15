import { graphql } from 'gatsby'
import * as React from 'react'
import { parseISO } from 'date-fns'

import { CancerPostsListView } from '../views/CancerPostsListView'

type CancerPageProps = {
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

const CancerPage: React.FC<CancerPageProps> = ({ data, ...more }) => {
  const posts = data.allMarkdownRemark.edges.map((e) => ({
    id: e.node.id,
    title: e.node.frontmatter.title,
    date: parseISO(e.node.frontmatter.date),
    slug: e.node.frontmatter.slug
  }))

  return <CancerPostsListView {...more} posts={posts} />
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/^/cancer//" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
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

export default CancerPage
