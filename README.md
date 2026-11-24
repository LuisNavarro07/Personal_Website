# Luis Navarro — Personal Website

Source for [luisenavarro.com](https://luisenavarro.com), built with [Hugo](https://gohugo.io/) and the [Hugo Blox](https://hugoblox.com/) Academic CV theme (`blox-tailwind` module). Every push to `main` is built and deployed by **Netlify** (configured in `netlify.toml`), which serves luisenavarro.com. Do not delete `netlify.toml`.

## Where things live

| Section | Folder | Notes |
|---|---|---|
| Homepage | `content/_index.md` | Bio, About Me, Publications, Working Papers, Teaching, Talks, News |
| Profile (bio, education, work, awards) | `content/authors/admin/_index.md` | Feeds the homepage and the Experience page |
| Research | `content/publication/<paper>/index.md` | One folder per paper; PDFs and slides go in the same folder |
| Teaching | `content/teaching/<course>/index.md` | One folder per course; syllabus in `docs/`, slides in `slides/` |
| Talks | `content/event/<talk>/index.md` | |
| Data | `content/data/<dataset>/index.md` | |
| CV | `static/uploads/cv_len.pdf` | Single copy; linked from the CV page and the homepage button |
| Menu | `config/_default/menus.yaml` | |
| Site settings / SEO | `config/_default/params.yaml`, `config/_default/hugo.yaml` | |

## Research entries

Each paper sets `publication_types`, which decides where it appears:

- `article-journal`, `chapter`, `report` → **Publications**
- `article` → **Working Papers** (use `publication:` for the status, e.g. "Under review", "Conditionally accepted, JPBAFM")

`weight` controls the order within Working Papers (lower = higher on the page). Publications are sorted by date.

## Adding files

- Put only the **current** PDF of a paper or slide deck in its folder. Link the paper with `url_pdf: '/publication/<folder>/<file>.pdf'` (full site path; a bare filename breaks on list pages). `url_slides:`, `url_preprint:` and `links:` accept a bare filename from the same folder. Replace the file instead of adding `_new`/`_v2` copies.
- `.pptx`, `.key` and `.DS_Store` files are ignored by `.gitignore`; export slides to PDF before committing.

## Local preview

Requires Hugo extended 0.126.3 and Go.

```bash
hugo server
```
