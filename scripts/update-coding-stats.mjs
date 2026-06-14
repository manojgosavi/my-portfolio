#!/usr/bin/env node
// Fetches daily GitHub contribution count and LeetCode solved-problem count,
// then appends a snapshot to public/data/coding-stats.json (keeping the
// last 90 days). Run daily via .github/workflows/coding-stats.yml.

import { readFile, writeFile } from 'node:fs/promises'

const GITHUB_USERNAME = 'manojgosavi'
const LEETCODE_USERNAME = 'manojgosavi'
const STATS_FILE = new URL('../public/data/coding-stats.json', import.meta.url)
const HISTORY_LIMIT = 90

async function fetchGithubContributions() {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.warn('GITHUB_TOKEN not set, skipping GitHub contributions')
    return null
  }

  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
  })

  if (!res.ok) {
    console.warn(`GitHub API request failed: ${res.status}`)
    return null
  }

  const json = await res.json()
  const days = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks
    .flatMap((week) => week.contributionDays)

  if (!days?.length) return null

  const today = days[days.length - 1]
  return { date: today.date, githubContributions: today.contributionCount }
}

async function fetchLeetcodeSolved() {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
  if (!res.ok) {
    console.warn(`LeetCode API request failed: ${res.status}`)
    return null
  }
  const json = await res.json()
  if (typeof json.totalSolved !== 'number') return null
  return { leetcodeSolved: json.totalSolved }
}

async function main() {
  const [githubStats, leetcodeStats] = await Promise.all([
    fetchGithubContributions(),
    fetchLeetcodeSolved(),
  ])

  if (!githubStats && !leetcodeStats) {
    console.warn('No stats fetched, leaving coding-stats.json unchanged')
    return
  }

  const date = githubStats?.date ?? new Date().toISOString().slice(0, 10)
  const raw = await readFile(STATS_FILE, 'utf-8')
  const data = JSON.parse(raw)

  const entry = {
    date,
    githubContributions: githubStats?.githubContributions ?? null,
    leetcodeSolved: leetcodeStats?.leetcodeSolved ?? null,
  }

  const history = data.history.filter((item) => item.date !== date)
  history.push(entry)
  history.sort((a, b) => a.date.localeCompare(b.date))

  data.history = history.slice(-HISTORY_LIMIT)
  data.lastUpdated = new Date().toISOString()

  await writeFile(STATS_FILE, `${JSON.stringify(data, null, 2)}\n`)
  console.log('Updated coding-stats.json with', entry)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
