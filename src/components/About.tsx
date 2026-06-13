import { socialLinks } from '../data'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Software Developer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Hi, I'm Manoj Gosavi.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          I build clean, reliable software with interests in AI, Machine Learning, Data
          Engineering, and Full Stack Development.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="rounded-md border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent dark:hover:text-accent"
          >
            View My Work
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
