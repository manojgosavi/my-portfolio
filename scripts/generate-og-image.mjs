// Generates site/og-image.png — the preview card shown when the site link is shared.
// Run with: npm run og
import { Resvg } from '@resvg/resvg-js'
import { writeFileSync } from 'fs'

const sans = 'Inter, Helvetica Neue, Helvetica, Arial, sans-serif'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0f1115"/>

  <text x="96" y="250" font-family="${sans}" font-weight="600" font-size="68" fill="#ffffff">Manoj Gosavi</text>
  <text x="96" y="312" font-family="${sans}" font-size="32" fill="#8a8f98">Data &amp; ML platform engineer</text>

  <line x1="96" y1="360" x2="216" y2="360" stroke="#555555" stroke-width="2"/>

  <text x="96" y="420" font-family="${sans}" font-size="26" fill="#d6d6d6">Building the data infrastructure machine learning depends on.</text>

  <text x="96" y="540" font-family="${sans}" font-size="22" fill="#6b7078">manojgosavi.github.io</text>
</svg>
`

const resvg = new Resvg(svg, { font: { loadSystemFonts: true } })
writeFileSync('site/og-image.png', resvg.render().asPng())
console.log('site/og-image.png generated')
