import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>About - Richard Sween</title>
      <meta name="description" content="About Richard Sween" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Me</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            Since late 2016, I have been working as a software engineer at{' '}
            <a
              href="https://kopismobile.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kopis Mobile
            </a>
            , a small company building apps and hardware for the military and
            first responders. In my time there, I have worked on everything from
            Linux scripting and C through front-end web development.
          </p>
          <p>
            Previously, I worked on software developement at the{' '}
            <a
              href="http://cavs.msstate.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Center for Advanced Vehicular Systems
            </a>{' '}
            in the Human Factors group. My role was developing software tools to
            assist researchers at the Center, including a few projects in VR
            using Unity and the HTC Vive. I also spend a few summers working at
            the{' '}
            <a
              href="http://www.nrlssc.navy.mil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naval Research Lab
            </a>{' '}
            at Stennis Space Center, mostly doing Java development.
          </p>
          <p>
            I received my Master's degree in Computer Science in December 2012,
            from Mississippi State, with a focus on Software Engineering. I did
            my undergraduate work in Computer Science and Software Engineering,
            obtaining dual Bachelor's degrees from Mississippi State in May,
            2011.
          </p>
          <p>
            In my free time, I like to play video games and travel with my
            beautiful wife,{' '}
            <a
              href="http://kaylasween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kayla
            </a>
            . I also enjoy learning new things and working on side projects,
            like{' '}
            <a
              href="http://richardsween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              developing
            </a>{' '}
            <a
              href="http://sweentobe.richardsween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              web
            </a>{' '}
            <a
              href="http://gpsvolume.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sites
            </a>{' '}
            or{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.richardsween.gpsvolume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android apps
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
