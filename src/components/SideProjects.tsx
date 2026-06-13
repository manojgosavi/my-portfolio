import { ExternalLink } from 'lucide-react'
import { sideProjects } from '../data'
import { GithubIcon } from './icons'
import SectionHeading from './SectionHeading'

export default function SideProjects() {
  return (
    <section id="side-projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="git log --oneline ./side-projects"
          title="Side Projects"
          description="Things I'm building outside of work — exploring data engineering, backend systems, and machine learning."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((project) => (
            <div
              key={project.title}
              className="glow-card flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-accent dark:text-slate-400"
                  >
                    Code <GithubIcon size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
