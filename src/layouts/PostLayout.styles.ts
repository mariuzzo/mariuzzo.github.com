import styled, { css } from 'styled-components'

import { PageTitle, TextBlock } from '../components/Typography'
import { Link } from '../components/Link'
import { $theme } from '../styles/theme'
import { theme } from '../theme'

export const Container = styled.div``

export const PostCategory = styled.div`
  display: block;
  color: ${$theme.color.secondary};
  text-align: center;
  margin: 1rem 0;
  font-size: ${$theme.fontSize.l3}rem;
  font-weight: ${$theme.fontWeight.light};

  ${theme.breakpoints.up('lg')} {
    font-size: ${$theme.fontSize.l2}rem;
    margin: 2rem 0;
  }

  ${theme.breakpoints.up('xl')} {
    margin: 3rem 0;
  }
`

export const PostTitle = styled(PageTitle)``

export const PostDate = styled.small`
  display: block;
  text-align: center;
  color: ${$theme.color.copyLight};
`

export const PostContents = styled(TextBlock).attrs({
  as: 'article'
})``

export const PostFooter = styled.footer`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  margin-top: 2rem;
  font-size: ${$theme.fontSize.copy1}rem;
`

const previousAndNextLinkStyles = css`
  text-decoration: none;
  font-weight: ${$theme.fontWeight.black};
  color: ${$theme.color.primary};

  &:hover > span {
    opacity: 1;
  }

  > span {
    transition: ${$theme.transition.default};
    background-color: ${$theme.color.primary};
    color: ${$theme.color.background};
    display: inline-block;
    padding: 0.5em;
    border-radius: 1px;
    opacity: 0.5;
  }
`

export const PreviousPostLink = styled(Link)`
  ${previousAndNextLinkStyles};
  grid-column: 1;

  > span {
    margin-right: 0.3em;
  }
`

export const NextPostLink = styled(Link)`
  ${previousAndNextLinkStyles};
  grid-column: 3;

  > span {
    margin-left: 0.3em;
  }
`
