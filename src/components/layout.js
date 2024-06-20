import React, { useEffect, useState } from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

const Layout = (props) => {
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

  const { children, showContact } = props

  return (
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
  )
}

export default Layout
