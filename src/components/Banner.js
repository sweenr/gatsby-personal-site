import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "code2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
    }
  `)
  const code = data.code.childImageSharp.fluid.src
  return (
    <section
      id="banner"
      className="major"
      style={{ backgroundImage: `url(${code})` }}
    >
      <div className="inner">
        <header className="major">
          <h1>Hi, my name is Richard</h1>
        </header>
        <div className="content">
          <p>
            I'm a web and app developer based in Jackson, MS. <br />
            I'm passionate about user experience and helping people do things
            better.
          </p>
          {/* <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul> */}
        </div>
      </div>
    </section>
  )
}

export default Banner
