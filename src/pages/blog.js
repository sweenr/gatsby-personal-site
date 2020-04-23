import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Blog = props => (
  <Layout>
    <Helmet>
      <title>Blog - Richard Sween</title>
      <meta name="description" content="Richard Sween's Blog" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Blog</h1>
          </header>
          {props.data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div className="blog-listing">
                <a href={`/blog${node.fields.slug}`}>
                  <h2>{node.frontmatter.title}</h2>
                  <small>{node.frontmatter.date}</small>
                </a>
                <div className="tags">
                  Tags:
                  {node.frontmatter.tags?.join()}
                </div>
                <p>{node.excerpt}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export default Blog

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
        fileAbsolutePath: { regex: "//blogs//" }
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
            tags
          }
        }
      }
    }
  }
`
