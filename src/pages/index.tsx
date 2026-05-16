import * as React from 'react'

import { SEO } from '../components/SEO'
import { MainLayout } from '../layouts/MainLayout'
import * as S from './index.styles'

export const Head = () => <SEO title="Home" />

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <S.Hero>
        <S.Greeting>Hi, I'm Rubens</S.Greeting>
      </S.Hero>
      <S.CardGrid>
        <S.Card to="/code">
          <S.CardIcon>{'{ }'}</S.CardIcon>
          <S.CardTitle>Code</S.CardTitle>
          <S.CardDescription>I build things.</S.CardDescription>
          <S.CardCTA>See my work →</S.CardCTA>
        </S.Card>
        <S.Card to="/lymphoma">
          <S.CardIcon>♥</S.CardIcon>
          <S.CardTitle>Lymphoma</S.CardTitle>
          <S.CardDescription>I fight things.</S.CardDescription>
          <S.CardCTA>Read my journey →</S.CardCTA>
        </S.Card>
      </S.CardGrid>
    </MainLayout>
  )
}

export default IndexPage
