import { Download } from 'lucide-react'
import { profile, socialLinks } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import TerminalWindow from './TerminalWindow'

const SCRIPT = [
  '$ whoami',
  `> ${profile.name} — ${profile.title}`,
  '$ cat tagline.txt',
  `> ${profile.tagline}`,
  '$ ./connect.sh --open',
]

export default function About() {
  const { lines, currentLine, done } = useTypewriter(SCRIPT, 22, 300)

  return (
    <section id="about" className="scroll-mt-16 px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          {profile.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Hi, I'm {profile.name}.
        </h1>

        <TerminalWindow title="manoj@portfolio:~" className="mt-8 w-full">
          <div className="min-h-[9.5rem]">
            {lines.map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith('$')
                    ? 'text-slate-900 dark:text-white'
                    : 'text-accent'
                }
              >
                {line}
              </p>
            ))}
            <p
              className={
                currentLine.startsWith('$')
                  ? 'text-slate-900 dark:text-white'
                  : 'text-accent'
              }
            >
              {currentLine}
              <span className="cursor-blink">{done ? '█' : ''}</span>
              {!done && <span className="cursor-blink">▌</span>}
            </p>
          </div>
        </TerminalWindow>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="rounded-md border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent dark:hover:text-accent"
          >
            View My Experience
          </a>
          <a
            href="/Manoj_Gosavi_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent dark:hover:text-accent"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
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
