import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:richard@richardsween.com">
              richard@richardsween.com
            </a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-twitter"></span>
            <h3>Twitter</h3>
            <a href="https://twitter.com/_RichardSween">@_RichardSween</a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-github"></span>
            <h3>GitHub</h3>
            <a href="https://github.com/sweenr">sweenr</a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-linkedin"></span>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/richard-sween/">
              Richard Sween
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
