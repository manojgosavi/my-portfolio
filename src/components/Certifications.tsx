import { Award } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Professional certifications across cloud and data platforms.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
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
