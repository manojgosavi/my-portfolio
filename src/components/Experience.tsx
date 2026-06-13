import { experiences, profile } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          command="cat experience.log"
          title="Experience"
          description={profile.summary}
        />

        <div className="flex flex-col gap-8">
          {experiences.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="glow-card rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.role} &middot; {job.company}
                </h3>
                <span className="text-sm font-medium text-accent">{job.period}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
