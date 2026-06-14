import { useEffect, useState } from 'react'

interface ActivityEntry {
  date: string
  type: 'project' | 'learning' | 'leetcode' | string
  message: string
}

const TYPE_LABELS: Record<string, string> = {
  project: 'project',
  learning: 'learning',
  leetcode: 'leetcode',
}

export default function ActivityLog() {
  const [entries, setEntries] = useState<ActivityEntry[] | null>(null)

  useEffect(() => {
    fetch('/data/activity-log.json')
      .then((res) => res.json())
      .then((data: ActivityEntry[]) => {
        const sorted = [...data].sort((a, b) => b.date.localeCompare(a.date))
        setEntries(sorted)
      })
      .catch(() => setEntries([]))
  }, [])

  if (!entries) {
    return <p className="text-slate-500 dark:text-slate-400">Loading activity log...</p>
  }

  if (entries.length === 0) {
    return <p className="text-slate-500 dark:text-slate-400">No activity logged yet.</p>
  }

  return (
    <div className="space-y-3">
      {entries.map((entry, i) => (
        <div key={`${entry.date}-${i}`} className="flex gap-3">
          <span className="shrink-0 text-slate-400 dark:text-slate-500">{entry.date}</span>
          <span className="shrink-0 text-accent">[{TYPE_LABELS[entry.type] ?? entry.type}]</span>
          <span className="text-slate-700 dark:text-slate-300">{entry.message}</span>
        </div>
      ))}
    </div>
  )
}
