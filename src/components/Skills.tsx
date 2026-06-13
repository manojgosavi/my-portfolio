import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Tools and technologies I work with regularly.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-accent dark:border-slate-800 dark:bg-slate-900"
            >
              <skill.icon size={20} className="text-accent" />
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
