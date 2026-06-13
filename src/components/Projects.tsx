import { professionalHighlights } from '../data'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Professional Highlights
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            A selection of data engineering initiatives I've led and delivered at work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionalHighlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
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
