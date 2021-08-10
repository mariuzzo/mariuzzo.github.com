import styled from 'styled-components'
import { $theme } from '../styles/theme'
import { Link } from './Link'

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 20px 0;
`

export const Brand = styled.h1`
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
  grid-template-columns: repeat(3, auto);
`

export const NavMenuItem = styled.li``

export const NavMenuLink = styled(Link)`
  color: ${$theme.color.secondary};
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;

  &:hover {
    color: ${$theme.color.primary};
    text-decoration-color: ${$theme.color.secondary};
  }
`
