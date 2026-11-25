# Managing luisenavarro.com

You are the manager of Luis Navarro's academic website. Luis is an Assistant Professor of Public Budgeting and Financial Management at the Evans School, University of Washington. Keep the site accurate, working, and up to date. Read this whole file before changing anything.

## Hosting (verified November 2026 — do not re-guess)

- **Netlify serves luisenavarro.com.** It builds from `main` using `netlify.toml`. **Never delete or break `netlify.toml`.** (In Nov 2026 it was removed by mistake and the live site silently stayed stale.)
- Netlify Forms handles the homepage contact form; form detection is enabled in Netlify.
- There is no GitHub Pages deploy anymore. Netlify production deploys do **not** post commit statuses to GitHub; only PR previews do (`netlify/luisnavarro/deploy-preview`). To confirm a production deploy, check the live site.
- Hugo **0.126.3 extended**, pinned in `netlify.toml`. The theme is custom and lives in this repo (`layouts/`, `assets/`). There are no Hugo modules, no Go, and no Node build step.

## Workflow for every change

1. Branch from `main`.
2. Build locally: `hugo --gc -d /tmp/public` must show no errors.
3. Check links. Every internal `href`/`src`, and every `/view/?file=` target, must exist in `/tmp/public`.
4. For visual changes, take screenshots at desktop (1280px) and mobile (390px) widths and look at them.
5. Open a PR. Wait for the Netlify deploy preview status to be `success` (it is `https://deploy-preview-<N>--luisnavarro.netlify.app`).
6. Merge only when Luis has approved the kind of change. Routine content updates he asked for are fine to merge.
7. About 2–3 minutes after merging, verify the **live** site. Web fetch tools cache pages for about 15 minutes, so add a query string such as `?v=<sha>`.
8. Commit as `Luis Navarro <lunavarr@uw.edu>`.

## Where things live

| What | Where |
|---|---|
| Name, title, photo, email, social links, positions, education, awards, skills | `data/profile.yaml` |
| Homepage About text + "In the news" items | `content/_index.md` |
| Papers | `content/publication/<slug>/index.md` (PDFs in the same folder) |
| Courses | `content/teaching/<course>/index.md` (slides in `slides/`, syllabus in the course folder) |
| Talks / Data | `content/event/<slug>/`, `content/data/<slug>/` |
| CV | `content/cv/cv_len.pdf` (Luis replaces this file to update the CV). The old URL `/uploads/cv_len.pdf` redirects here. |
| Menu, site description | `hugo.yaml` |
| Redirects for moved files | `netlify.toml` |

## Content rules

- **Luis's CV (`content/cv/cv_len.pdf`) is the source of truth** for paper titles, co-authors, and statuses. When it changes, sync the research pages to it and point out any differences rather than guessing.
- Luis's name in author lists is exactly `Luis Navarro`; the theme bolds it (`params.me` in `hugo.yaml`).
- **Papers**
  - `publication_types: ["article"]` → Working papers, ordered by `weight` (most advanced first: conditional acceptance → R&R → under review → working paper).
  - Anything else (`article-journal`, `chapter`, `report`) → Publications, newest first.
  - Status goes in `publication:`, e.g. `"Revise and resubmit, *Journal Name*"`.
  - Link fields: `url_pdf`, `url_preprint`, `url_slides` (bare filenames in the paper folder are fine), `url_code` (GitHub repo), `doi`, and `links:` for SSRN, journal pages, etc.
  - Citation fields for BibTeX and Google Scholar: `journal`, `volume`, `number`, `pages`, `booktitle`, `publisher`.
- When a paper PDF is replaced under a new filename, delete the old file and add a 301 redirect in `netlify.toml` so shared links keep working.
- **"In the news" is press coverage only**: articles where Luis appears or his work is covered. Do not add publication or job announcements there.
- **Course pages** contain: description, objectives, the `{{< pdf file="…" label="syllabus" >}}` shortcode, and a numbered "Topics and slides" list whose topic names link to `slides/*.pdf`. They contain no dated schedules, assessments, or textbook lists (Luis's preference). The syllabus shortcode renders nothing until the file exists, so missing uploads never show broken links.
- Every same-site PDF link inside page text automatically opens in the on-site viewer (`/view/`) with a download link beside it (`assets/js/site.js`).
- Luis's GitHub repos: `SRF_CDO_Credit_Ratings`, `Airbnb_TaxEnforcement`, `mlf_volatility`, `cashresliquiditymx`, `food_donations_covid`, `county_fiscal_structure_handbook_chapter`, `cares_act_counties_debt`, `StateI_Income_Tax`, and `V506`. `CRF` is private; never link it.
- Do not publish Zoom links, TA emails, or other private course logistics.
- Keep `.pptx`, `.key`, and old drafts out of the repo; only current PDFs belong here.

## Design

- **UW brand colors only** (washington.edu/brand/brand-elements/colors). Tokens live at the top of `assets/css/main.css`.
- **Banner (both themes): Husky Purple `#32006e`**, with a Husky Gold `#b7a57a` rule and photo offset. Banner links use Husky Gold web `#e8e3d3`.
- **Light theme** (default): white background, black text, **Spirit Purple `#4b2e83`** links and buttons.
- **Dark theme**: dark background `#15121c`, white text, **Spirit Gold `#ffc700`** links; buttons are Spirit Gold with black text.
- Never put Spirit Gold on white (the brand guide forbids it). Keep every text/background pair at WCAG AA or better.
- The header toggle (moon/sun) switches themes. The choice is saved in the browser, and until a visitor chooses, the site follows their system setting. A script in `layouts/partials/head.html` applies the theme before the page paints.
- Fonts: self-hosted Newsreader for headings and Public Sans for text.
- The purple banner is the only bold element; everything else stays quiet and left-aligned.
- Avoid: all-caps labels, middle-dot separators, card grids, decorative animation.

## Open items (as of 2026-11-24)

- Syllabus PDFs not yet uploaded:
  - `content/teaching/pubpol322/PUBPOL322_Syllabus_Autumn2026.pdf`
  - `content/teaching/pubpol522/PUBPOL522_Syllabus_Autumn2026.pdf`
  - `content/teaching/pubpol528/PUBPOL528_Syllabus_Spring2026.pdf`
- The old GitHub Pages copy (luisnavarro07.github.io/Personal_Website) should be unpublished in GitHub Settings → Pages. Luis must do this; the API is blocked for this session.
- The Flypaper and Airbnb tax-enforcement abstracts are truncated (SSRN could not be read in full); ask Luis for the full text.
