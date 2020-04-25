import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

const Layout = props => {
  const [loading, setLoading] = useState('is-loading')
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { children, showContact } = props

  const { title, description, author } = site.siteMetadata
  const lang = `en`

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${title}`}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
      <div
        className={`body ${loading} ${isMenuVisible ? 'is-menu-visible' : ''}`}
      >
        <div id="wrapper">
          <Header onToggleMenu={handleToggleMenu} />
          {children}
          {showContact ? <Contact /> : ''}
          <Footer />
        </div>
        <Menu onToggleMenu={handleToggleMenu} />
      </div>
    </>
  )
}

export default Layout
