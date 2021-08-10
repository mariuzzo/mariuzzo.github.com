import * as React from 'react'
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby'

export const Link: React.FC<GatsbyLinkProps<any>> = (props) => {
  const { children, to, activeClassName, partiallyActive, ...more } = props
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...(more as any)}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...more}>
      {children}
    </a>
  )
}
