import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { $theme } from '../styles/theme'

import { linkStyles } from './Link.styles'

export const Heading1 = styled.h1`
  font-weight: ${$theme.fontWeight.black};
  font-size: ${$theme.fontSize.l1}rem;
  line-height: 1;
  margin: 1em 0;
`

export const Heading2 = styled.h2`
  font-weight: ${$theme.fontWeight.black};
  font-size: ${$theme.fontSize.l2}rem;
  line-height: 1;
  margin: 1em 0;
`

export const PageTitle = styled.h1`
  color: ${$theme.color.copy};
  text-align: center;
  font-size: ${$theme.fontSize.l2}rem;
  font-weight: ${$theme.fontWeight.black};
  line-height: 1em;
  margin: 0.2em 0;

  ${up('tablet')} {
    font-size: ${$theme.fontSize.l1}rem;
    line-height: 1.5em;
  }
`

export const TextBlock = styled.div`
  color: ${$theme.color.copy};
  font-size: ${$theme.fontSize.copy1}rem;
  font-weight: ${$theme.fontWeight.regular};
  line-height: 1.5;

  img {
    display: inline-block;
    max-width: 100%;
    width: 100%;
  }

  a {
    ${linkStyles};
  }

  p {
    margin: 1.5em 0;
  }

  strong {
    font-weight: ${$theme.fontWeight.black};
  }

  pre {
    border-radius: 0.2em;
  }

  code {
    font-family: 'Source Code Pro', Consolas, Monaco, 'Andale Mono',
      'Ubuntu Mono', monospace;
    font-size: 0.85em;
  }

  *:not(pre) > code {
    border-radius: 0.2em;
    padding: 0.1em 0.5em;
    background-color: #27282288;
  }

  blockquote {
    font-style: italic;
    margin: 1em;
    padding: 0 1em;
    border-left: ${$theme.color.copyLight} solid 2px;
  }
`
