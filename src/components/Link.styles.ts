import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { $theme } from '../styles/theme'

type LinkProps = {
  variant?: 'inline' | 'block'
}

export const linkInlineStyles = css`
  color: ${$theme.color.link};
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;

  &:hover {
    text-decoration: none;
  }
`

const linkBlockStyles = css`
  display: inline-block;
  text-decoration: none;
  background-color: ${$theme.color.primary}dd;
  padding: 1em 1.5em;
  color: ${$theme.color.background};
  border-radius: 0.2em;
  font-size: 1.2rem;
  transition: ${$theme.transition.default};

  &:hover,
  &:focus {
    background-color: ${$theme.color.primary}ff;
  }

  &:active {
    transition: none;
    background-color: ${$theme.color.primary}dd;
  }
`

export const linkStyles = css<LinkProps>`
  ${(props) => props.variant === 'inline' && linkInlineStyles}
  ${(props) => props.variant === 'block' && linkBlockStyles}
`

export const ExternalLink = styled.a`
  ${linkStyles};
`

ExternalLink.defaultProps = {
  variant: 'inline'
}

export const InternalLink = styled(GatsbyLink)`
  ${linkStyles};
`

InternalLink.defaultProps = {
  variant: 'inline'
}
