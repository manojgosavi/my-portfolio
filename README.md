# my-portfolio

Source for [manojgosavi.github.io](https://manojgosavi.github.io). Plain static HTML, with no framework and no build step.

```
site/
  index.html            home page
  notes/index.html      list of notes
  notes/_template.html  copy this to start a new note (not published)
  favicon.svg, og-image.png, Manoj_Gosavi_Resume.pdf
scripts/
  generate-og-image.mjs regenerates site/og-image.png (the link-preview card)
```

**Preview locally:** `npm run preview`, then open http://localhost:8000. You can also open `site/index.html` directly.

**Deploy:** push to `main`. `.github/workflows/deploy.yml` mirrors `site/` into the `manojgosavi.github.io` repo, deleting files that no longer exist here. It needs the `PAGES_DEPLOY_TOKEN` secret.

**Add a note:**
1. Copy `site/notes/_template.html` to `site/notes/<slug>.html` and fill it in.
2. Add a row to `site/notes/index.html`.
3. For the first note, uncomment the Notes section in `site/index.html`.

**Update the preview card:** edit `scripts/generate-og-image.mjs`, then `npm install && npm run og`.
