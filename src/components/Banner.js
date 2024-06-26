import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "code2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const code = getSrc(data.code.childImageSharp.gatsbyImageData)
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
            I'm an engineering leader based in Jackson, MS. <br />
            I'm passionate about user experience and helping people grow.
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
