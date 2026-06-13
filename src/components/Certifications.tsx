import { Award } from 'lucide-react'
import { certifications } from '../data'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="cat certifications.txt"
          title="Certifications"
          description="Professional certifications across cloud and data platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glow-card flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <Award size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{cert.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
