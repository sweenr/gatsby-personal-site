import React from 'react'

const BannerLanding = props => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{props.heading}</h1>
      </header>
      <div className="content">{props.subheading}</div>
    </div>
  </section>
)

export default BannerLanding
