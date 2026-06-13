import { type FormEvent, useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="section__heading">
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together? Send me a message.</p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
          {submitted && (
            <p className="contact__success">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  )
}
