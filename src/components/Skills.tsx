import { skillCategories } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="cat skills.json"
          title="Skills & Technologies"
          description="Tools and technologies I work with regularly."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="glow-card rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-3 flex items-center gap-2">
                <group.icon size={20} className="text-accent" />
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item}
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
