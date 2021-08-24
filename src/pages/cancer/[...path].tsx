import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import { MainLayout } from '../../layouts/MainLayout'
import { InlineCenter, PageTitle } from '../../components/Typography'
import { InternalLink } from '../../components/Link.styles'
import NotFoundPage from '../404'
import { SEO } from '../../components/SEO'

type CancerCatchAllPageDataProps = {
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

const CancerCatchAllPage: React.FC<PageProps<CancerCatchAllPageDataProps>> = (
  props
) => {
  const post = props.data.allMarkdownRemark.edges.find(
    (e) => e.node.frontmatter.slug.split('/').pop() === props.path
  )

  const slug = post?.node.frontmatter.slug

  if (!slug) {
    return <NotFoundPage />
  }

  return (
    <MainLayout>
      <SEO title="This page have been moved" noIndex />
      <PageTitle>This page have been moved</PageTitle>
      <InlineCenter>
        <InternalLink variant="block" to={slug}>
          Go to new location
        </InternalLink>
      </InlineCenter>
    </MainLayout>
  )
}

export default CancerCatchAllPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
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
