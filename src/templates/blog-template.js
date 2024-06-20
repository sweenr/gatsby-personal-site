import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import { Seo } from '../components/Seo'

/* <Helmet
        meta={[

        
            property: `og:image`,
            content:
              siteMetadata.siteUrl +
              getSrc(frontmatter.featuredImage.childImageSharp.gatsbyImageData),
          },
          {
            name: `og:image:alt`,
            content: frontmatter.featuredImageAlt,
          },

          {
            name: `twitter:image`,
            content:
              siteMetadata.siteUrl +
              getSrc(frontmatter.featuredImage.childImageSharp.gatsbyImageData),
          },
          {
            name: `twitter:image:alt`,
            content: frontmatter.featuredImageAlt,
          },
        ]}
      >
        <title>{frontmatter.title}</title>
      </Helmet> */

function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
              <small>{frontmatter.date}</small>
            </header>
            {frontmatter.featuredImage ? (
              <GatsbyImage
                image={
                  frontmatter.featuredImage.childImageSharp.gatsbyImageData
                }
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
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
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

export const Head = ({ data, location }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Seo
      title={frontmatter.title}
      description={frontmatter.description}
      image={getSrc(frontmatter.featuredImage.childImageSharp.gatsbyImageData)}
      imageAlt={frontmatter.featuredImageAlt}
      pathname={location.pathname}
    >
      <meta name="og:type" content={'article'} />
    </Seo>
  )
}
