import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Seo } from '../components/Seo'

const Blog = (props) => (
  <Layout>
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
                <p>Estimated reading time: {node.timeToRead} minutes</p>
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
      sort: { frontmatter: { date: DESC } }
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
          timeToRead
        }
      }
    }
  }
`

export const Head = () => (
  <Seo title="Blog" description={`Richard Sween's Blog`} />
)
