import * as React from 'react'

import { MainLayout } from '../layouts/MainLayout'
import { PageTitle, TextBlock } from '../components/Typography'
import { InternalLink } from '../components/Link.styles'
import { SEO } from '../components/SEO'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <SEO
        title="Page not found"
        description="Sorry we couldn’t find what you were looking for."
      />
      <PageTitle>Page not found</PageTitle>
      <TextBlock>
        <p>Sorry we couldn’t find what you were looking for.</p>
        <p>
          <InternalLink to="/">Go home</InternalLink>.
        </p>
      </TextBlock>
    </MainLayout>
  )
}

export default NotFoundPage
