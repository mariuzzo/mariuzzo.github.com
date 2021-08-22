import * as React from 'react'

import { Link } from '../components/Link'
import { SEO } from '../components/SEO'
import { Heading2, PageTitle, TextBlock } from '../components/Typography'
import { MainLayout } from '../layouts/MainLayout'

export const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <SEO title="About" description="Who is Rubens Mariuzzo?" />
      <PageTitle>About Mariuzzo</PageTitle>
      <TextBlock>
        <p>
          Hey there! I'm <strong>Rubens Mariuzzo</strong>, a software developer,
          husband and volunteer.
        </p>
        <p>
          I was born in <em>Lausanne, Switzerland</em> in 1986. Since 1998 I
          have been living in <em>Santo Domingo</em> where I started to
          volunteer as a <a href="https://jw.org/">Jehovah's Witness</a> and got
          a bachelor degree on electronics at{' '}
          <a href="https://ipl.edu.do/">IPL</a>.
        </p>
        <p>
          I'm currently working at <a href="https://x-team.com/">X-Team</a> as a
          full stack web developer{' '}
          <a href="https://x-team.com/case-studies/">
            helping leading companies to succeed
          </a>
          . <strong>However, I have taken a pause to focus on my health</strong>
          . I write about my journey fighting a cancer on a{' '}
          <Link to="/lymphoma">dedicated blog</Link>.
        </p>
        <p>
          When I'm not working, I am coding... Yes, this is a true hobby of
          mine.{' '}
          <a href="https://github.com/rmariuzzo?tab=repositories">
            I have created around 76 open source projects
          </a>
          . Apart from that, I enjoy playing video games, visiting family and
          friends.
        </p>
        <Heading2>Notable programming skills</Heading2>
        <p>
          That's a concise list of my main skills and a few worth to mention
          because I have used them professionally for more than two years.
        </p>
        <ul>
          <li>
            <strong>JavaScript</strong> since 2006. Now using NodeJS, React and
            Redux.
          </li>
          <li>
            <strong>TypeScript</strong> since 2019.
          </li>
          <li>
            <em>PHP</em> (2010, 2019-2021).
          </li>
          <li>
            <em>Java</em> (2008-2011, 2013, 2015-2016).
          </li>
          <li>
            <em>C#</em> (2011-2013).
          </li>
        </ul>
        <p>
          Using JS/TS I create web frontend, backend web API, CLI packages and
          cross-platform desktops apps.
        </p>
        <Heading2>I love languages!</Heading2>
        <p>
          <strong>My mother tongue is Swiss French</strong>. I can also speak{' '}
          <strong>Spanish</strong>, <strong>English</strong>,{' '}
          <strong>Haitian Creole</strong> and I'm learning{' '}
          <strong>Italian</strong>.
        </p>
      </TextBlock>
    </MainLayout>
  )
}

export default AboutPage
