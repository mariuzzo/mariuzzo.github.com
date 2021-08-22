import * as React from 'react'

import { Link } from '../components/Link'
import { SEO } from '../components/SEO'
import { TextBlock } from '../components/Typography'
import { MainLayout } from '../layouts/MainLayout'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <SEO title="Home" />
      <TextBlock>
        <code>
          <pre>
            // TODO: Complete website...
            <br />
            // I'm currently fighting a cancer again. This is the second time.
            <br />
            // I created a blog about it, which I'm migrating{' '}
            <Link to="/lymphoma">here</Link>.
          </pre>
        </code>
      </TextBlock>
    </MainLayout>
  )
}

export default IndexPage
