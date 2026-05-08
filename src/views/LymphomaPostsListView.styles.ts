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

export const PostCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const PostCardDateDistance = styled.span`
  font-weight: ${$theme.fontWeight.light};
  font-size: ${$theme.fontSize.copy2}rem;
`

export const OccurrenceDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0 0.5rem;
  font-size: ${$theme.fontSize.copy2}rem;
  font-weight: ${$theme.fontWeight.semiBold};
  color: ${$theme.color.copyLight};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-top: 1px solid ${$theme.color.secondary};
  }
`

export const PostCardOccurrenceBadge = styled.span`
  margin-left: auto;
  font-size: ${$theme.fontSize.copy2}rem;
  font-weight: ${$theme.fontWeight.semiBold};
  color: ${$theme.color.primary};
  background-color: ${$theme.color.secondary}33;
  border: 1px solid ${$theme.color.secondary};
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
  line-height: 1.4;
`
