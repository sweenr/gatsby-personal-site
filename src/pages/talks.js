import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Talks = props => (
  <Layout>
    <Helmet>
      <title>Talks</title>
      <meta name="description" content="Talks by Richard Sween" />
    </Helmet>

    <BannerLanding
      heading="Talks"
      subheading={<p>Presentations and talks I've given</p>}
    />

    <div id="main">
      <section id="two" className="spotlights">
        {props.data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <section>
              {node.frontmatter.featuredImage ? (
                <GatsbyImage
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt={node.frontmatter.featuredImageAlt}
                />
              ) : (
                ''
              )}
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{node.frontmatter.title}</h3>
                  </header>
                  <p>{node.excerpt}</p>
                  <p className="tags">Tags: {node.frontmatter.tags?.join()}</p>
                  <ul className="actions">
                    <li>
                      {node.frontmatter.actionButtonUrl === 'slug' ? (
                        <Link
                          to={`/talks${node.fields.slug}`}
                          className="button"
                        >
                          {node.frontmatter.actionButtonText}
                        </Link>
                      ) : (
                        <a
                          href={node.frontmatter.actionButtonUrl}
                          className="button"
                        >
                          {node.frontmatter.actionButtonText}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )
        })}
      </section>
    </div>
  </Layout>
)

export default Talks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//talks//" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
            featuredImageAlt
            actionButtonText
            actionButtonUrl
            tags
          }
        }
      }
    }
  }
`
