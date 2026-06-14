import { Database } from 'lucide-react'
import { codingProfiles, sqlLeaderboard } from '../data'
import { useDarkMode } from '../hooks/useDarkMode'
import ActivityLog from './ActivityLog'
import CodingTrend from './CodingTrend'
import SectionHeading from './SectionHeading'
import TerminalWindow from './TerminalWindow'

export default function CodingActivity() {
  const { isDark } = useDarkMode()
  const githubTheme = isDark ? 'dark' : 'default'
  const leetcodeTheme = isDark ? 'dark' : 'light'

  return (
    <section id="activity" className="scroll-mt-16 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="curl -s api/coding-activity | jq"
          title="Coding Activity"
          description="Live stats from where I practice and contribute."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <TerminalWindow title="github-contributions.svg" className="lg:col-span-2">
            <img
              src={`https://ghchart.rshah.org/22c55e/${codingProfiles.github}`}
              alt={`${codingProfiles.github}'s GitHub contribution graph`}
              className="w-full"
              loading="lazy"
            />
          </TerminalWindow>

          <TerminalWindow title="github-stats.svg">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${codingProfiles.github}&show_icons=true&hide_border=true&theme=${githubTheme}&bg_color=00000000`}
              alt={`${codingProfiles.github}'s GitHub stats`}
              className="w-full"
              loading="lazy"
            />
          </TerminalWindow>

          <TerminalWindow title="leetcode-stats.svg">
            <img
              src={`https://leetcard.jacoblin.cool/${codingProfiles.leetcode}?theme=${leetcodeTheme}&font=JetBrains%20Mono&ext=heatmap&border=false`}
              alt={`${codingProfiles.leetcode}'s LeetCode stats`}
              className="w-full"
              loading="lazy"
            />
          </TerminalWindow>

          <TerminalWindow title="sql-leaderboard.json" className="lg:col-span-2">
            <a
              href={sqlLeaderboard.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-600 transition-colors hover:text-accent dark:text-slate-400"
            >
              <Database size={20} className="text-accent" />
              <span>
                {sqlLeaderboard.platform} leaderboard —{' '}
                <span className="text-accent">{sqlLeaderboard.status}</span>
              </span>
            </a>
          </TerminalWindow>

          <TerminalWindow title="contributions-trend.sh" className="lg:col-span-2">
            <CodingTrend />
          </TerminalWindow>

          <TerminalWindow title="activity.log" className="lg:col-span-2">
            <ActivityLog />
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}
