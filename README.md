# Luis Navarro — Personal Website

Source for [luisenavarro.com](https://luisenavarro.com). Built with [Hugo](https://gohugo.io/) (0.126.3, extended) and a small custom theme that lives entirely in this repo — no external theme modules. **Netlify** builds and serves the site from `main` (see `netlify.toml`; do not delete it). Every pull request gets a Netlify preview link.

## Where things live

| What | Where |
|---|---|
| Name, role, photo, email, social links, positions, education, awards | `data/profile.yaml` |
| Homepage About text and News items | `content/_index.md` |
| Papers (one folder each, PDFs inside) | `content/publication/<paper>/index.md` |
| Courses (one folder each, syllabus and slides inside) | `content/teaching/<course>/index.md` |
| Talks | `content/event/<talk>/index.md` |
| Data | `content/data/<dataset>/index.md` |
| CV PDF | `static/uploads/cv_len.pdf` |
| Menu and site settings | `hugo.yaml` |
| Page templates | `layouts/` |
| Styles / scripts | `assets/css/main.css`, `assets/js/site.js` |
| Fonts (Public Sans, Newsreader; OFL) | `static/fonts/` |

## Papers

- `publication_types: ["article"]` → **Working papers** (ordered by `weight`); anything else (`article-journal`, `chapter`, `report`) → **Publications** (newest first).
- Links: `url_pdf`, `url_preprint`, `url_slides` (a bare file name in the paper folder is fine), `url_code`, `url_video`, `doi`, and `links:` (name + url).
- Optional citation fields used for BibTeX and Google Scholar: `journal`, `volume`, `number`, `pages`, `booktitle`, `publisher`.

## PDFs

Every PDF on the site opens in an on-site viewer (`/view/?file=…`) with a Download button. In page text, a normal Markdown link to a PDF is upgraded automatically; for a button pair use `{{< pdf file="syllabus.pdf" label="syllabus" >}}`.

## Contact form

The homepage form uses Netlify Forms. Submissions appear in Netlify under **Forms**; email notifications are set there.

## Local preview

```bash
hugo server
```
