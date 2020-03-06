import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import sweentobe from '../assets/images/sweentobe.png'
import gpsvolume from '../assets/images/gpsvolume.png'
import parallelcoords from '../assets/images/parallelcoords.png'
import enterlocked from '../assets/images/enterlocked.png'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>Projects - Richard Sween</title>
      <meta name="description" content="Projects by Richard Sween" />
    </Helmet>

    <BannerLanding
      heading="Projects"
      subheading={<p>Stuff I've worked on for fun and profit.</p>}
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Projects Overview</h2>
          </header>
          <p>
            I've worked on a number of projects to solve problems for myself or
            other people. The projects below show the breadth of things I've
            done, from building an interface in an embedded device to web sites
            and Android apps. This web site has even been a project of mine,
            learning new skills like{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> for React-based
            static site generation and{' '}
            <a href="https://aws.amazon.com/amplify/">AWS Amplify</a> for super
            simple deployment and hosting.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img src={enterlocked} alt="Screenshot from the Escape Room Timer" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Esacpe Room Timer</h3>
              </header>
              <p>
                Kayla and I built a timer display for a local escape room. The
                device, built using Python Flask running on a Raspberry Pi 3,
                showed the remaining time and other info for the players in the
                room, designed to look like a old dial TV. It used a web backend
                built with Vue for the game master to control the display.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/enterlocked" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <img src={sweentobe} alt="Screenshot of the Sween Wedding website" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Wedding Web Site</h3>
              </header>
              <p>
                For our wedding in 2016, my wife, Kayla, and I built our own
                responsive wedding website. We created an RSVP form that used
                cookies to track whether a user had filled out the form before.
                Visitors could view travel info and learn about the schedule and
                wedding party.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="http://sweentobe.richardsween.com"
                    className="button"
                  >
                    View site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <img src={gpsvolume} alt="Icon for the GPS Volume Android app" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>GPS Volume Android App</h3>
              </header>
              <p>
                GPS Volume is an Android app that mimics the speed-controlled
                volume found in many newer cars. This app uses the GPS reported
                speed of your phone to set the media volume to a customizable
                level. Android app written in Java and using the Android SDK.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.richardsween.gpsvolumefree"
                    className="button"
                  >
                    View on Google Play
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <img
            src={parallelcoords}
            alt="Visualization of Atlantic hurricane data using parallel coordinates"
          />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Hurricane Visualization</h3>
              </header>
              <p>
                A parallel coordinates display of Atlantic hurricane season data
                from 1851-2011. A parallel coordinates display is useful for
                showing high-dimension data. Written using d3.js and jQuery,
                along with standard HTML and CSS.
              </p>
              <ul className="actions">
                <li>
                  <a href={'/hurricanes.html'} className="button">
                    View Site
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

export default Projects