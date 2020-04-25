import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const HomeIndex = props => {
  const projector = props.data.projector.childImageSharp.fluid.src
  const keyboard = props.data.keyboard.childImageSharp.fluid.src
  const typewriter = props.data.typewriter.childImageSharp.fluid.src
  const pic04 = props.data.pic04.childImageSharp.fluid.src
  return (
    <Layout showContact={true}>
      <Helmet
        title="Home"
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
          <article style={{ backgroundImage: `url(${projector})` }}>
            <header className="major">
              <h3>Talks</h3>
              <p>Presentations and Talks</p>
            </header>
            <Link to="/talks" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${keyboard})` }}>
            <header className="major">
              <h3>Projects</h3>
              <p>Stuff I've Done</p>
            </header>
            <Link to="/projects" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${typewriter})` }}>
            <header className="major">
              <h3>Blog</h3>
              <p>Stuff I've written about</p>
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

export default HomeIndex

export const pageQuery = graphql`
  query {
    projector: file(relativePath: { eq: "projector.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }
    keyboard: file(relativePath: { eq: "keyboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          src
        }
      }
    }
    typewriter: file(relativePath: { eq: "typewriter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          src
        }
      }
    }
    pic04: file(relativePath: { eq: "pic04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }
  }
`
