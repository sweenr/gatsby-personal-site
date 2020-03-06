import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
          <p>Coming soon!</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Blog
