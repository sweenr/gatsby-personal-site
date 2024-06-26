import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { getSrc } from 'gatsby-plugin-image'
import { Seo } from '../components/Seo'

const HomeIndex = (props) => {
  const projector = getSrc(props.data.projector.childImageSharp.gatsbyImageData)
  const keyboard = getSrc(props.data.keyboard.childImageSharp.gatsbyImageData)
  const typewriter = getSrc(
    props.data.typewriter.childImageSharp.gatsbyImageData
  )
  const pic04 = getSrc(props.data.pic04.childImageSharp.gatsbyImageData)
  return (
    <Layout showContact={true}>
      <Banner />

      <div id="main">
        <section id="zero">
          <div className="inner">
            <header className="major">
              <h2>Who am I?</h2>
            </header>
            <p>
              Learn more about some of the things I've done or written below.
            </p>
          </div>
        </section>
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    keyboard: file(relativePath: { eq: "keyboard.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    typewriter: file(relativePath: { eq: "typewriter.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pic04: file(relativePath: { eq: "pic04.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export const Head = () => (
  <Seo title="Home" description={'Personal website for Richard Sween'}>
    <meta
      name="keywords"
      content="Richard Sween, Sween, developer, ux, software, web dev"
    />
  </Seo>
)
