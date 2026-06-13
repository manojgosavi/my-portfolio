import { professionalHighlights } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="ls ./work-projects"
          title="Professional Highlights"
          description="A selection of data engineering initiatives I've led and delivered at work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionalHighlights.map((item) => (
            <div
              key={item.title}
              className="glow-card flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
