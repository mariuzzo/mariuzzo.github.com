import { graphql } from 'gatsby'
import * as React from 'react'
import { formatRFC7231, parseISO } from 'date-fns'

import * as S from './cancer.styles'

import { MainLayout } from '../layouts/MainLayout'
import { daysAgo } from '../utils/date'

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
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges.map((e) => e.node)
  console.log(posts)
  return (
    <MainLayout {...more}>
      <S.Title>Recent posts about my cancer</S.Title>
      <S.PostCardList>
        {posts.map((post) => (
          <S.PostCardListItem key={post.id}>
            <S.PostCard to={post.frontmatter.slug}>
              <S.PostCardTitle>{post.frontmatter.title}</S.PostCardTitle>
              <S.PostCardMeta>
                <S.PostCardDateDistance
                  title={formatRFC7231(parseISO(post.frontmatter.date))}
                >
                  {daysAgo(parseISO(post.frontmatter.date))}
                </S.PostCardDateDistance>
              </S.PostCardMeta>
            </S.PostCard>
          </S.PostCardListItem>
        ))}
      </S.PostCardList>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
