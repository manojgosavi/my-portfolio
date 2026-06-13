import { type FormEvent, useState } from 'react'
import { FORMSPREE_ENDPOINT } from '../data'
import SectionHeading from './SectionHeading'
import TerminalWindow from './TerminalWindow'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          command="./send-message.sh"
          title="Get In Touch"
          description="Have a question or want to work together? Send me a message."
        />

        <TerminalWindow title="manoj@portfolio:~/contact">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm font-medium text-accent">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-red-500">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </TerminalWindow>
      </div>
    </section>
  )
}
