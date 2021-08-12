import styled from 'styled-components'
import { $theme } from '../styles/theme'

export const Container = styled.footer`
  margin: 4rem 0 2rem 0;
  text-align: center;
`

export const BrandInitial = styled.span`
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  background-color: ${$theme.color.copy};
  color: ${$theme.color.background};
  text-align: center;
  border-radius: 1px;
  opacity: 0.5;
`
