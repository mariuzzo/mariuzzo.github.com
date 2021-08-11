import * as React from 'react'
import { Link } from '../components/Link'
import { MainLayout } from '../layouts/MainLayout'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <p>
        <code>{'// TODO: Complete website...'}</code>
      </p>
      <p>I'm currently fighting a cancer again. This is the second time.</p>
      <p>
        I <u title="gothodgkin.tumblr.com">created a blog</u> about it, which
        I'm migrating <Link to="/cancer/2021-07-21">here</Link>.
      </p>
    </MainLayout>
  )
}

export default IndexPage
