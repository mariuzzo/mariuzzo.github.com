import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { $theme } from '../styles/theme'

const linkStyles = css`
  color: ${$theme.color.link};
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
`

export const ExternalLink = styled.a`
  ${linkStyles};
`

export const InternalLink = styled(GatsbyLink)`
  ${linkStyles};
`
