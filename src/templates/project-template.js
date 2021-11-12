import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
              <small>{frontmatter.date}</small>
            </header>
            <GatsbyImage
              image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={frontmatter.featuredImageAlt}
              style={{ marginBottom: '30px' }}
            />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        featuredImageAlt
      }
    }
  }
`
