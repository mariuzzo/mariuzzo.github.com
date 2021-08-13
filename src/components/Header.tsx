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
            <Link to="/">Home</Link>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <Link to="/cancer">Cancer</Link>
          </S.NavMenuItem>
        </S.NavMenu>
      </S.Nav>
    </S.Container>
  )
}
