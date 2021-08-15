import * as React from 'react'

import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Brand>
        <S.BrandLink to="/">
          <span>M</span>ariuzzo
        </S.BrandLink>
      </S.Brand>
      <S.Nav>
        <S.NavMenu>
          <S.NavMenuItem>
            <S.NavMenuLink to="/">Home</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="/code">Code</S.NavMenuLink>
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
