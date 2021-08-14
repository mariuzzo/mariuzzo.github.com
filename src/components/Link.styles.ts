import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { $theme } from '../styles/theme'

export const linkStyles = css`
  color: ${$theme.color.link};
  font-weight: ${$theme.fontWeight.semiBold};
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;

  &:hover {
    text-decoration: none;
  }
`

export const ExternalLink = styled.a`
  ${linkStyles};
`

export const InternalLink = styled(GatsbyLink)`
  ${linkStyles};
`
