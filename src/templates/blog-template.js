import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'

function BlogTemplate({ data }) {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  const { siteMetadata } = site
  return (
    <Layout>
      <Helmet
        meta={[
          {
            name: `description`,
            content: frontmatter.description || siteMetadata.description,
          },
          {
            property: `og:title`,
            content: frontmatter.title || siteMetadata.title,
          },
          {
            property: `og:description`,
            content: frontmatter.description || siteMetadata.description,
          },
          {
            property: `og:image`,
            content:
              siteMetadata.siteUrl +
              frontmatter.featuredImage.childImageSharp.fluid.src,
          },
          {
            name: `og:image:alt`,
            content: frontmatter.featuredImageAlt,
          },
          {
            property: `og:type`,
            content: `article`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: frontmatter.author || siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: frontmatter.title || siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: frontmatter.description || siteMetadata.description,
          },
          {
            name: `twitter:image`,
            content:
              siteMetadata.siteUrl +
              frontmatter.featuredImage.childImageSharp.fluid.src,
          },
          {
            name: `twitter:image:alt`,
            content: frontmatter.featuredImageAlt,
          },
        ]}
      >
        <title>{frontmatter.title}</title>
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
              <small>{frontmatter.date}</small>
            </header>
            {frontmatter.featuredImage ? (
              <Img
                fluid={frontmatter.featuredImage.childImageSharp.fluid}
                alt={frontmatter.featuredImageAlt}
                style={{ marginBottom: '30px' }}
              />
            ) : (
              ''
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImageAlt
      }
    }
  }
`
