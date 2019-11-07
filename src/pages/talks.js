import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import process from '../assets/images/softwareprocess.png'

const Talks = props => (
  <Layout>
    <Helmet>
      <title>Talks - Richard Sween</title>
      <meta name="description" content="Talks by Richard Sween" />
    </Helmet>

    <BannerLanding
      heading="Talks"
      subheading={<p>Presentations and talks I've given</p>}
    />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img src={process} alt="Screenshot from the Escape Room Timer" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Kopis Mobile Software Process</h3>
              </header>
              <p>
                A talk I gave to the Jackson Web & Application Developers July
                2019 meetup.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://kopismobile.com/presentations/jawad-software-process/"
                    className="button"
                  >
                    View presentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Talks
