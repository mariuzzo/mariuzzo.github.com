import styled from 'styled-components'

import { $theme } from '../styles/theme'
import { Link } from './Link'

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 2rem 0;
`

export const Brand = styled(Link)`
  color: ${$theme.color.copy};
  text-decoration: none;
  font-weight: ${$theme.fontWeight.black};
  font-size: ${$theme.fontSize.l2.rem}rem;
  line-height: 1.25em;
  grid-column: 1;
  margin: 0;
`

export const BrandFirstLetter = styled.span`
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.05em;
  background-color: ${$theme.color.copy};
  color: ${$theme.color.background};
  text-align: center;
  border-radius: 1px;
`

export const Nav = styled.nav`
  grid-column: 2;
  display: grid;
  justify-content: end;
`

export const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  column-gap: 2em;
  grid-template-columns: repeat(2, auto);
`

export const NavMenuItem = styled.li``
