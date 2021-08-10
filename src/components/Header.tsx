import * as React from 'react'
import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Brand>
        <S.BrandFirstLetter>M</S.BrandFirstLetter>ariuzzo
      </S.Brand>
      <S.Nav>
        <S.NavMenu>
          <S.NavMenuItem>
            <S.NavMenuLink to="/">Home</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="https://github.com/rmariuzzo" target="_blank">
              GitHub
            </S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="https://twitter.com/rmariuzzo" target="_blank">
              Twitter
            </S.NavMenuLink>
          </S.NavMenuItem>
        </S.NavMenu>
      </S.Nav>
    </S.Container>
  )
}
