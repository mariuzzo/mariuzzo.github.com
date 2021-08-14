import * as React from 'react'

import * as S from './Header.styles'
import { Link } from './Link'

export const Header = () => {
  return (
    <S.Container>
      <S.Brand to="/">
        <S.BrandFirstLetter>M</S.BrandFirstLetter>ariuzzo
      </S.Brand>
      <S.Nav>
        <S.NavMenu>
          <S.NavMenuItem>
            <S.NavMenuLink to="/">Home</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="/cancer">Cancer</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="/about">About</S.NavMenuLink>
          </S.NavMenuItem>
        </S.NavMenu>
      </S.Nav>
    </S.Container>
  )
}
