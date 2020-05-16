/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              draft
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.frontmatter.draft || prcess.env.NODE_ENV === 'development') {
      if (node.fileAbsolutePath.includes('/blogs/')) {
        createPage({
          path: `/blog${node.fields.slug}`,
          component: path.resolve(`src/templates/blog-template.js`),
          context: { slug: node.fields.slug },
        })
      } else if (node.fileAbsolutePath.includes('/talks/')) {
        createPage({
          path: `/talks${node.fields.slug}`,
          component: path.resolve(`src/templates/talk-template.js`),
          context: { slug: node.fields.slug },
        })
      } else if (node.fileAbsolutePath.includes('/projects/')) {
        createPage({
          path: `/projects${node.fields.slug}`,
          component: path.resolve(`src/templates/project-template.js`),
          context: { slug: node.fields.slug },
        })
      }
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
