import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby'

import * as S from './Link.styles'

export const Link: React.FC<GatsbyLinkProps<any>> = (props) => {
  const { children, to, activeClassName, partiallyActive, ...more } = props
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <S.InternalLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...(more as any)}
      >
        {children}
      </S.InternalLink>
    )
  }

  return (
    <S.ExternalLink href={to} {...(more as any)}>
      {children}
    </S.ExternalLink>
  )
}
