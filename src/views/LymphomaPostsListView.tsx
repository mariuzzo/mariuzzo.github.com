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
  }>
}

export const LymphomaPostsListView: React.FC<LymphomaPostsListViewProps> = ({
  posts,
  ...more
}) => {
  return (
    <MainLayout {...more}>
      <S.Title>
        Recent posts about
        <br />
        my Hodgkin's Lymphoma
      </S.Title>
      <S.PostCardList>
        {posts.map((post) => (
          <S.PostCardListItem key={post.id}>
            <S.PostCard to={post.slug}>
              <S.PostCardTitle>{post.title}</S.PostCardTitle>
              <S.PostCardMeta>
                <S.PostCardDateDistance title={formatRFC7231(post.date)}>
                  {daysAgo(post.date)}
                </S.PostCardDateDistance>
              </S.PostCardMeta>
            </S.PostCard>
          </S.PostCardListItem>
        ))}
      </S.PostCardList>
    </MainLayout>
  )
}
