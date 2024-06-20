import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Seo } from '../components/Seo'

const Talks = (props) => (
  <Layout>
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
                  objectFit="contain"
                />
              ) : (
                ''
              )}
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{node.frontmatter.title}</h3>
                  </header>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                  <p className="tags">
                    Tags: {node.frontmatter.tags?.join(', ')}
                  </p>
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
                          target="_blank"
                          rel="noopener noreferrer"
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
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: { regex: "//talks//" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          html
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

export const Head = () => (
  <Seo title="Talks" description={'Talks by Richard Sween'} />
)
