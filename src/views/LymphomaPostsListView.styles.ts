import styled from 'styled-components'

import { Link } from '../components/Link'
import { PageTitle } from '../components/Typography'
import { $theme } from '../styles/theme'

export const Title = styled(PageTitle)`
  color: ${$theme.color.copy};
`

export const PostCardList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1rem;
`

export const PostCardListItem = styled.li``

export const PostCard = styled(Link)`
  display: block;
  border: ${$theme.color.secondary} solid 2px;
  padding: 1rem;
  border-radius: 2px;
  text-decoration: none;
  transition: ${$theme.transition.default};
  color: ${$theme.color.copy};

  &:hover {
    border-color: ${$theme.color.primary};
    background-color: ${$theme.color.primary}0A;
  }
`

export const PostCardTitle = styled.h3`
  font-size: ${$theme.fontSize.l3}rem;
  margin: 0 0 1rem 0;
  line-height: 1;
`

export const PostCardMeta = styled.div``

export const PostCardDateDistance = styled.span`
  font-weight: ${$theme.fontWeight.light};
  font-size: ${$theme.fontSize.copy2}rem;
`
