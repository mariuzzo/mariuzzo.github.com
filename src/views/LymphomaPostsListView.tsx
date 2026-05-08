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
    occurrence: number
  }>
}

export const LymphomaPostsListView: React.FC<LymphomaPostsListViewProps> = ({
  posts,
  ...more
}) => {
  const postsByOccurrence = posts.reduce<Map<number, typeof posts>>(
    (acc, post) => {
      const group = acc.get(post.occurrence) ?? []
      group.push(post)
      acc.set(post.occurrence, group)
      return acc
    },
    new Map()
  )
  const occurrences = Array.from(postsByOccurrence.keys()).sort((a, b) => b - a)

  return (
    <MainLayout {...more}>
      <S.Title>
        Recent posts about
        <br />
        my Hodgkin's Lymphoma
      </S.Title>
      {occurrences.map((occurrence) => (
        <React.Fragment key={occurrence}>
          <S.OccurrenceDivider>Occurrence {occurrence}</S.OccurrenceDivider>
          <S.PostCardList>
            {(postsByOccurrence.get(occurrence) ?? []).map((post) => (
              <S.PostCardListItem key={post.id}>
                <S.PostCard to={post.slug}>
                  <S.PostCardTitle>{post.title}</S.PostCardTitle>
                  <S.PostCardMeta>
                    <S.PostCardDateDistance title={formatRFC7231(post.date)}>
                      {daysAgo(post.date)}
                    </S.PostCardDateDistance>
                    <S.PostCardOccurrenceBadge>
                      Occurrence {post.occurrence}
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
