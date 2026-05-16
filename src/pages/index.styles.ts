import styled from 'styled-components'

import { Link } from '../components/Link'
import { $theme } from '../styles/theme'
import { theme } from '../theme'

export const Hero = styled.div`
  text-align: center;
  padding: 3rem 0 4rem;
`

export const Greeting = styled.h1`
  font-size: ${$theme.fontSize.l2}rem;
  font-weight: ${$theme.fontWeight.black};
  color: ${$theme.color.copy};
  line-height: 1;
  margin: 0 0 0.75rem;

  ${theme.breakpoints.up('lg')} {
    font-size: ${$theme.fontSize.l1}rem;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-bottom: 4rem;

  ${theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border: ${$theme.color.secondary} solid 2px;
  border-radius: 4px;
  padding: 2rem;
  text-decoration: none;
  color: ${$theme.color.copy};
  transition: ${$theme.transition.default};

  &:hover {
    border-color: ${$theme.color.primary};
    background-color: ${$theme.color.primary}0a;
  }
`

export const CardIcon = styled.div`
  font-family: 'Source Code Pro', Consolas, Monaco, monospace;
  font-size: 1.75rem;
  color: ${$theme.color.primary};
  margin-bottom: 1.25rem;
  line-height: 1;
`

export const CardTitle = styled.h2`
  font-size: ${$theme.fontSize.l2}rem;
  font-weight: ${$theme.fontWeight.black};
  line-height: 1;
  margin: 0 0 0.75rem;
`

export const CardDescription = styled.p`
  font-size: ${$theme.fontSize.copy1}rem;
  color: ${$theme.color.copyLight};
  margin: 0;
  flex-grow: 1;
`

export const CardCTA = styled.span`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: ${$theme.fontSize.copy2}rem;
  color: ${$theme.color.primary};
  font-weight: ${$theme.fontWeight.semiBold};
`
