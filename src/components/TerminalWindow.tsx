import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({
  title = 'manoj@portfolio:~',
  children,
  className = '',
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-800/50">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{title}</span>
      </div>
      <div className="p-6 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
