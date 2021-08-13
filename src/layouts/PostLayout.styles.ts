import styled, { css } from 'styled-components'
import { Link } from '../components/Link'
import { $theme } from '../styles/theme'

export const Container = styled.div``

export const PostCategory = styled.div`
  display: block;
  color: ${$theme.color.secondary};
  text-align: center;
  margin: 3rem 0;
  font-size: ${$theme.fontSize.l2.rem}rem;
  font-weight: ${$theme.fontWeight.light};
`

export const PostTitle = styled.h1`
  color: ${$theme.color.link};
  text-align: center;
  font-size: ${$theme.fontSize.l1.rem}rem;
  font-weight: ${$theme.fontWeight.black};
  line-height: 1.5em;
  margin: 0;
`

export const PostDate = styled.small`
  display: block;
  text-align: center;
  color: ${$theme.color.copyLight};
`

export const PostContents = styled.article`
  color: ${$theme.color.copy};
  margin: 3rem 0;
  font-size: ${$theme.fontSize.copy1.rem}rem;
  font-weight: ${$theme.fontWeight.regular};
  line-height: 1.5;

  img {
    display: inline-block;
    max-width: 100%;
    width: 100%;
  }

  a {
    color: ${$theme.color.primary};
    font-weight: ${$theme.fontWeight.semiBold};
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin: 1.5em 0;
  }

  strong {
    font-weight: ${$theme.fontWeight.black};
  }
`

export const PostFooter = styled.footer`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  margin-top: 2rem;
  font-size: ${$theme.fontSize.copy1.rem}rem;
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
