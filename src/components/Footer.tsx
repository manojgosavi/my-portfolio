import { socialLinks } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 px-6 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>
          <span className="text-accent">$</span> echo "&copy; {year} Manoj Gosavi"
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="transition-colors hover:text-accent"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
