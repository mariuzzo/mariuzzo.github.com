import * as React from 'react'
import { formatRFC7231 } from 'date-fns'

import * as S from './PostLayout.styles'
import { MainLayout } from './MainLayout'

type PostLayoutProps = {
  title: string
  date: Date
  category: string
  contents: any
  previousSlug: string
  nextSlug: string
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  date,
  category,
  contents,
  previousSlug,
  nextSlug,
  ...more
}) => {
  return (
    <MainLayout {...more}>
      <S.Container>
        <S.PostCategory>{category}</S.PostCategory>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDate>{formatRFC7231(date)}</S.PostDate>
        <S.PostContents dangerouslySetInnerHTML={{ __html: contents }} />
        <S.PostFooter>
          {previousSlug && (
            <S.PreviousPostLink to={previousSlug}>
              <span>←</span>
              Previous
            </S.PreviousPostLink>
          )}
          {nextSlug && (
            <S.NextPostLink to={nextSlug}>
              Next
              <span>→</span>
            </S.NextPostLink>
          )}
        </S.PostFooter>
      </S.Container>
    </MainLayout>
  )
}
