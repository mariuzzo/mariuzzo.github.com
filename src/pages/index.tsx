import * as React from 'react'

import { Link } from '../components/Link'
import { TextBlock } from '../components/Typography'
import { MainLayout } from '../layouts/MainLayout'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <TextBlock>
        <code>
          <pre>
            // TODO: Complete website...
            <br />
            // I'm currently fighting a cancer again. This is the second time.
            <br />
            // I created a blog about it, which I'm migrating{' '}
            <Link to="/cancer">here</Link>.
          </pre>
        </code>
      </TextBlock>
    </MainLayout>
  )
}

export default IndexPage
