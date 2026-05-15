import * as React from 'react'
import { formatRFC7231 } from 'date-fns'

import { MainLayout } from '../layouts/MainLayout'
import { daysAgo } from '../utils/date'

import * as S from './LymphomaPostsListView.styles'

type LymphomaPostsListViewProps = {
  posts: Array<{
    id: string
    title: string
    date: Date
    slug: string
    chapter: number
  }>
}

export const LymphomaPostsListView: React.FC<LymphomaPostsListViewProps> = ({
  posts,
  ...more
}) => {
  const postsByChapter = posts.reduce<Map<number, typeof posts>>(
    (acc, post) => {
      const group = acc.get(post.chapter) ?? []
      group.push(post)
      acc.set(post.chapter, group)
      return acc
    },
    new Map()
  )
  const chapters = Array.from(postsByChapter.keys()).sort((a, b) => b - a)

  return (
    <MainLayout {...more}>
      <S.Title>
        Recent posts about
        <br />
        my Hodgkin's Lymphoma
      </S.Title>
      {chapters.map((chapter) => (
        <React.Fragment key={chapter}>
          <S.OccurrenceDivider>Chapter {chapter}</S.OccurrenceDivider>
          <S.PostCardList>
            {(postsByChapter.get(chapter) ?? []).map((post) => (
              <S.PostCardListItem key={post.id}>
                <S.PostCard to={post.slug}>
                  <S.PostCardTitle>{post.title}</S.PostCardTitle>
                  <S.PostCardMeta>
                    <S.PostCardDateDistance title={formatRFC7231(post.date)}>
                      {daysAgo(post.date)}
                    </S.PostCardDateDistance>
                    <S.PostCardOccurrenceBadge>
                      Chapter {post.chapter}
                    </S.PostCardOccurrenceBadge>
                  </S.PostCardMeta>
                </S.PostCard>
              </S.PostCardListItem>
            ))}
          </S.PostCardList>
        </React.Fragment>
      ))}
    </MainLayout>
  )
}
