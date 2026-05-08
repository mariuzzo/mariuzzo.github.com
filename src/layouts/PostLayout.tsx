import * as React from 'react'
import { formatRFC7231 } from 'date-fns'

import * as S from './PostLayout.styles'
import { MainLayout } from './MainLayout'

type PostLayoutProps = {
  title: string
  date: Date
  category: string
  occurrence?: number
  contents: any
  previousSlug: string
  nextSlug: string
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  date,
  category,
  occurrence,
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
        {occurrence != null && (
          <S.PostOccurrence>
            <S.PostOccurrenceBadge>
              Occurrence {occurrence}
            </S.PostOccurrenceBadge>
          </S.PostOccurrence>
        )}
        <S.PostDate>{formatRFC7231(date)}</S.PostDate>
        <S.TranslateBar>
          <S.TranslateLink
            href={`https://translate.google.com/translate?hl=es&sl=auto&u=${typeof window !== 'undefined' ? window.location.href : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Traducir
          </S.TranslateLink>
          <S.TranslateLink
            href={`https://translate.google.com/translate?hl=ht&sl=auto&u=${typeof window !== 'undefined' ? window.location.href : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tradwi
          </S.TranslateLink>
          <S.TranslateLink
            href={`https://translate.google.com/translate?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Translate
          </S.TranslateLink>
        </S.TranslateBar>
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
