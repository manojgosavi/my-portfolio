import { Resvg } from '@resvg/resvg-js'
import { writeFileSync } from 'fs'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0f172a"/>

  <!-- Grid lines for depth -->
  <line x1="0" y1="210" x2="1200" y2="210" stroke="#1e293b" stroke-width="1"/>
  <line x1="0" y1="420" x2="1200" y2="420" stroke="#1e293b" stroke-width="1"/>
  <line x1="400" y1="0" x2="400" y2="630" stroke="#1e293b" stroke-width="1"/>
  <line x1="800" y1="0" x2="800" y2="630" stroke="#1e293b" stroke-width="1"/>

  <!-- Green accent bar -->
  <rect x="80" y="180" width="6" height="120" rx="3" fill="#22c55e"/>

  <!-- MG badge -->
  <rect x="80" y="80" width="72" height="72" rx="14" fill="#22c55e"/>
  <text x="116" y="130" font-family="monospace" font-weight="700" font-size="30" fill="#0f172a" text-anchor="middle">MG</text>

  <!-- Name -->
  <text x="100" y="228" font-family="monospace" font-weight="700" font-size="56" fill="#f8fafc">Manoj Gosavi</text>

  <!-- Title -->
  <text x="100" y="284" font-family="monospace" font-size="28" fill="#22c55e">Senior Data Engineer</text>

  <!-- Divider -->
  <line x1="80" y1="316" x2="560" y2="316" stroke="#334155" stroke-width="1"/>

  <!-- Skills -->
  <text x="100" y="358" font-family="monospace" font-size="20" fill="#94a3b8">Python · PySpark · AWS · Azure · Snowflake</text>
  <text x="100" y="392" font-family="monospace" font-size="20" fill="#94a3b8">Databricks · Kafka · Airflow · 8+ years exp.</text>

  <!-- URL -->
  <text x="100" y="510" font-family="monospace" font-size="22" fill="#475569">manojgosavi.github.io</text>

  <!-- Terminal decoration -->
  <rect x="760" y="140" width="360" height="300" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <rect x="760" y="140" width="360" height="36" rx="12" fill="#334155"/>
  <rect x="760" y="164" width="360" height="12" fill="#334155"/>
  <circle cx="790" cy="158" r="6" fill="#ef4444"/>
  <circle cx="812" cy="158" r="6" fill="#eab308"/>
  <circle cx="834" cy="158" r="6" fill="#22c55e"/>
  <text x="780" y="212" font-family="monospace" font-size="15" fill="#22c55e">$ whoami</text>
  <text x="780" y="238" font-family="monospace" font-size="15" fill="#94a3b8">&gt; Manoj Gosavi</text>
  <text x="780" y="270" font-family="monospace" font-size="15" fill="#22c55e">$ cat role.txt</text>
  <text x="780" y="296" font-family="monospace" font-size="15" fill="#94a3b8">&gt; Senior Data Engineer</text>
  <text x="780" y="328" font-family="monospace" font-size="15" fill="#22c55e">$ ./connect.sh</text>
  <text x="780" y="354" font-family="monospace" font-size="15" fill="#94a3b8">&gt; Let's build something</text>
  <text x="780" y="380" font-family="monospace" font-size="15" fill="#94a3b8">&gt; great together &#x2588;</text>
</svg>
`

const resvg = new Resvg(svg, { font: { loadSystemFonts: true } })
const png = resvg.render().asPng()
writeFileSync('public/og-image.png', png)
console.log('og-image.png generated successfully')
