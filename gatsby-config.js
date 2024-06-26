module.exports = {
  siteMetadata: {
    title: "Richard Sween's Website",
    author: 'Richard Sween',
    description: 'The personal web site of Richard Sween, built with Gatsby',
    siteUrl: 'https://richardsween.dev',
    twitterUsername: `@_richardsween`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-166870183-1',
      },
    },
    {
      resolve: `gatsby-plugin-firstparty`,
      options: {
        sourceUrl: 'fp.richardsween.dev',
        writeKey: 'jG3EnrwJk5Ri6wgq',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talks`,
        path: `${__dirname}/content/talks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Richard Sween's Website",
        short_name: "Richard's site",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://richardsween.dev`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-web-monetization`,
    //   options: {
    //     paymentPointer: `$ilp.uphold.com/Rdy2U4eKDMb3`,
    //   },
    // },
    // TODO: fix this so it works with GA, had problems finding the script below
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     appendScript: require.resolve(`src/offline-ga.js`),
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }, 
                  filter: { frontmatter: { draft: { eq: false} }, fileAbsolutePath: { regex: "/.+\/blogs\/.+/"} }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        categories: tags
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `Richard Sween's Blog`,
            author: 'Richard Sween',
            description:
              'Personal blog of Richard Sween talking about tech and other things that interest me',
          },
        ],
      },
    },
  ],
}
