interface SectionHeadingProps {
  command: string
  title: string
  description?: string
}

export default function SectionHeading({ command, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="mb-2 text-sm text-accent">
        <span className="text-slate-400 dark:text-slate-500">$ </span>
        {command}
      </p>
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && (
        <p className="mt-3 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  )
}
