import { useEffect, useState } from 'react'

interface StatsEntry {
  date: string
  githubContributions: number | null
  leetcodeSolved: number | null
}

interface CodingStats {
  lastUpdated: string | null
  history: StatsEntry[]
}

export default function CodingTrend() {
  const [stats, setStats] = useState<CodingStats | null>(null)

  useEffect(() => {
    fetch('/data/coding-stats.json')
      .then((res) => res.json())
      .then((data: CodingStats) => setStats(data))
      .catch(() => setStats({ lastUpdated: null, history: [] }))
  }, [])

  if (!stats) {
    return <p className="text-slate-500 dark:text-slate-400">Loading trend...</p>
  }

  const days = stats.history.slice(-14)

  if (days.length === 0) {
    return (
      <p className="text-slate-500 dark:text-slate-400">
        No history yet — the daily GitHub Action will start populating this chart soon.
      </p>
    )
  }

  const max = Math.max(...days.map((d) => d.githubContributions ?? 0), 1)

  return (
    <div>
      <div className="flex h-24 items-end gap-1.5">
        {days.map((day) => (
          <div
            key={day.date}
            className="flex-1 rounded-t bg-accent/70 transition-colors hover:bg-accent"
            style={{ height: `${((day.githubContributions ?? 0) / max) * 100}%` }}
            title={`${day.date}: ${day.githubContributions ?? 0} contributions`}
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Last {days.length} days of GitHub contributions
        {stats.lastUpdated && ` · updated ${new Date(stats.lastUpdated).toLocaleDateString()}`}
      </p>
    </div>
  )
}
