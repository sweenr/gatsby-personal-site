import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/projector.jpg'
import pic02 from '../assets/images/keyboard.jpg'
import pic03 from '../assets/images/typewriter.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout showContact={true}>
        <Helmet
          title="Richard Sween's Website"
          meta={[
            {
              name: 'description',
              content: 'Personal website for Richard Sween',
            },
            {
              name: 'keywords',
              content: 'Richard Sween, Sween, developer, ux, software, web dev',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talks</h3>
                <p>Presentations and Talks</p>
              </header>
              <Link to="/talks" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Projects</h3>
                <p>Stuff I've Done</p>
              </header>
              <Link to="/projects" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Blog</h3>
                <p>Blah, blah, blah - some stuff I wrote about</p>
              </header>
              <Link to="/blog" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>About Me</h3>
                <p>Who am I?</p>
              </header>
              <Link to="/about" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Get in Touch</h2>
              </header>
              <p>Find me at the sites below, or feel free to drop me a note!</p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
