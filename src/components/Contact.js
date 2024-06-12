import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const formAction =
    'https://ntfamacl9j.execute-api.us-east-2.amazonaws.com/prod/contact'

  const [success, setSuccess] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    if (!data.dayOfWeek) {
      fetch(formAction, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
    //change to successfully submitted message
    setSuccess(true)
  }

  return (
    <section id="contact">
      <div className="inner">
        <section>
          {success ? (
            <p>Thanks for contacting me, I'll be in touch as soon as I can.</p>
          ) : (
            <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className="form-error">Name is a required field</p>
                )}
              </div>
              <div className="field half second">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  {...register('email', {
                    required: true,
                    pattern:
                      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  })}
                />
                {errors.email?.type === 'required' && (
                  <p className="form-error">
                    Email address is a required field
                  </p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="form-error">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <div className="field half third">
                <label htmlFor="dayOfWeek">Day of Week</label>
                <input type="text" name="dayOfWeek" id="dayOfWeek" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <p className="form-error">This is a required field</p>
                )}
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          )}
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
}

export default Contact
