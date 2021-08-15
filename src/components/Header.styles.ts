import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { $theme } from '../styles/theme'

import { Link } from './Link'

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 2rem;
  align-items: center;
  margin: 1rem 0 2rem 0;

  ${up('tablet')} {
    margin: 2rem 0;
  }
`

export const Brand = styled.div`
  grid-row: 1;
  grid-column: 1 / 3;
  display: grid;
  justify-content: center;

  ${up('tablet')} {
    grid-column: 1 / 1;
  }
`

export const BrandLink = styled(Link)`
  color: ${$theme.color.copy};
  text-decoration: none;
  font-weight: ${$theme.fontWeight.black};
  font-size: ${$theme.fontSize.l2}rem;
  line-height: 1.25em;
  margin: 0;

  > span {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    margin-right: 0.05em;
    background-color: ${$theme.color.copy};
    color: ${$theme.color.background};
    text-align: center;
    border-radius: 1px;
  }
`

export const Nav = styled.nav`
  grid-row: 2;
  grid-column: 1 / 3;
  display: grid;
  justify-content: center;

  ${up('tablet')} {
    grid-row: 1;
    grid-column: 2;
    justify-content: end;
  }
`

export const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  column-gap: 2em;
  grid-template-columns: repeat(3, auto);

  ${up('tablet')} {
    grid-template-columns: repeat(4, auto);
  }
`

export const NavMenuItem = styled.li`
  &:first-child {
    display: none;

    ${up('tablet')} {
      display: block;
    }
  }
`

export const NavMenuLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`
