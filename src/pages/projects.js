import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>Projects</title>
      <meta name="description" content="Projects by Richard Sween" />
    </Helmet>

    <BannerLanding
      heading="Projects"
      subheading={<p>Stuff I've worked on for fun and profit.</p>}
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Projects Overview</h2>
          </header>
          <p>
            I've worked on a number of projects to solve problems for myself or
            other people. The projects below show the breadth of things I've
            done, from building an interface in an embedded device to web sites
            and Android apps. This web site has even been a project of mine,
            learning new skills like{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> for React-based
            static site generation and{' '}
            <a href="https://aws.amazon.com/amplify/">AWS Amplify</a> for super
            simple deployment and hosting.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        {props.data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <section key={node.fields.slug}>
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
                          to={`/projects${node.fields.slug}`}
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

export default Projects

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
        fileAbsolutePath: { regex: "//projects//" }
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
