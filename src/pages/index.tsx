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
        <pre className="language-javascript">
          <code className="language-javascript">
            // TODO: Complete website...
            <br />
            // I'm currently fighting a cancer again. This is the second time.
            <br />
            // I created a blog about it, which I'm migrating{' '}
            <Link to="/lymphoma">here</Link>.
          </code>
        </pre>
      </TextBlock>
    </MainLayout>
  )
}

export default IndexPage
