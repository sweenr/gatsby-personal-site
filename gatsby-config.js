module.exports = {
  siteMetadata: {
    title: "Richard Sween\'s Website",
    author: "Richard Sween",
    description: "The personal web site of Richard Sween, built with Gatsby"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Richard Sween\'s Website',
        short_name: 'Richard\'s site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
