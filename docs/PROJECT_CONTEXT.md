# Portfolio project context

Last updated: 2026-09-29

This file is the handoff document for future development sessions. Read it before changing the site.

## Project overview

This is Tohe²d Akhtar's static portfolio and research blog. It intentionally uses HTML, CSS, and vanilla JavaScript in the browser. Markdown is compiled to static HTML at build time with a small Node.js script; there is no frontend framework, CMS, or client-side Markdown renderer.

Repository: `toheedakhtar/takhtar`

Current working branch: `v3`

Public site: `https://toheedakhtar.github.io/takhtar/`

## Design direction

- Light mode is the first-visit default; dark mode is available and persisted in `localStorage`.
- The accent is dark viridian (`#245c4e`).
- Body copy uses Inter. Identity, monogram, section headings, and article headings use IBM Plex Mono.
- The public display name is **Tohe²d Akhtar**. Use semantic superscript in visible HTML: `Tohe<sup>2</sup>d`. Use `Tohe²d` in plain-text metadata and page titles. Use “Tohe squared d” in accessibility labels.
- Keep real filenames, account handles, URLs, and resume paths unchanged even when they contain `Toheed`.
- The main layout is capped at `1080px`; reading content is capped at `680px`.
- About, Research, Contact, and Blog remain visible in the sticky top navigation on desktop and mobile.
- Mobile gutters are approximately `18px`. Headings should remain restrained rather than poster-sized.
- The site has an optional “brainrot” mode with alternate About copy and small annotations. Preserve the normal mode as a professional presentation.
- Respect `prefers-reduced-motion`, keyboard focus, semantic HTML, and mobile layouts.

## File structure

```text
.
├── index.html                 # Main portfolio shell and navigation
├── manifest.json              # PWA metadata
├── package.json               # Blog build commands and dependencies
├── content/
│   └── posts/                 # Author-edited Markdown source files
├── templates/
│   └── post.html              # Shared template for generated local articles
├── scripts/
│   └── build-blog.mjs         # Markdown/front-matter compiler
├── posts/                     # Generated local articles (currently empty)
├── css/
│   ├── portfolio.css          # Main layout, themes, responsive styles
│   ├── post.css               # Generated article typography/layout
│   └── styles.css             # Legacy page styling
├── js/
│   ├── index.js               # Portfolio sections, navigation, theme/brainrot state
│   ├── blog-posts.js          # Generated blog index; do not edit directly
│   ├── post.js                # Theme behavior on article pages
│   └── serviceworker.js       # Image caching
├── assets/                    # Resume PDFs, LaTeX source, and icons
└── docs/
    └── PROJECT_CONTEXT.md     # This handoff document
```

## Portfolio architecture

`index.html` provides the persistent header, sidebar, navigation, and `#content` container. `js/index.js` renders four hash-addressed views into that container:

1. `#about`
2. `#research`
3. `#contact`
4. `#blog`

`renderSection()` updates the content, active navigation state, section counter, animation class, and document title. When changing sections, keep the `views` map and `sections` array synchronized with the HTML navigation.

The theme is stored under the `theme` key in `localStorage`. Brainrot mode is stored under `brainrot` and causes `showAbout()` to render alternate copy.

## Blog architecture

Markdown files in `content/posts/` contain simple colon-separated front matter. Run:

```bash
npm install
npm run build
```

The build reads every `.md` file, sorts posts newest-first, generates local article pages in `posts/`, and recreates `js/blog-posts.js` for the homepage listing.

Commit both the Markdown source and generated outputs. Never edit `js/blog-posts.js` or generated hyphenated article HTML directly.

### Local post

```md
---
title: Post title
description: One-sentence summary.
date: 2026-09-29
label: research · interpretability
---

Write the article in Markdown here.
```

### External/cross-posted entry

```md
---
title: Post title
description: One-sentence summary.
date: 2026-09-29
label: research · interpretability
source: LessWrong
external_url: https://www.lesswrong.com/posts/example
---
```

An external entry appears in the Writing section and opens the original source in a new tab. It does not generate a local article page.

### Full local mirror

To publish the full Markdown locally while identifying another publication as the original, omit `external_url`, add the article body, and set:

```md
canonical_url: https://original-publication.example/post
```

The generated page will receive a canonical link.

## Existing posts

- `content/posts/small-language-models-hallucinate.md`: external LessWrong entry published on 2026-01-24. It links to the original article and does not create a local page.

## Resume and research details

- Current website CV link: `assets/ToheedAkhtar_Resume_9_26_MLR_pb.pdf`.
- Resume LaTeX source: `assets/ToheedAkhtar_Resume_8_26_MLR.tex`.
- Research experience appears above projects in the resume.
- The uncertainty-circuits repository is `https://github.com/toheedakhtar/uncertainty-circuits`.
- The draft paper is titled “Is Factual Correctness Represented in LLMs? A Cross-Dataset Probing Study.”
- Research links and factual claims should be preserved unless the user supplies updated information.

## Development rules

- Prefer DRY and KISS. Shared article markup belongs in `templates/post.html`; compilation belongs in `scripts/build-blog.mjs`.
- Keep browser output static and dependency-light. `marked` is currently the only development dependency.
- Do not introduce a frontend framework without an explicit request.
- After blog changes, run `npm run build`.
- Validate JavaScript with `node --check` and whitespace with `git diff --check`.
- Preserve the legacy `posts/ml_resources.html` unless the user explicitly asks to remove or redirect it.
- Do not rename resume files or social handles just to match the stylized display name.

## Datewise change log

### 2026-09-16

- Redesigned the portfolio as a responsive research-notebook-style site with dark viridian accents.
- Added light/dark theme controls and brainrot mode; light mode became the default.
- Added responsive navigation, hash routing, keyboard-focus handling, reduced-motion support, and mobile refinements.
- Updated the resume link to `ToheedAkhtar_Resume_9_26_MLR_pb.pdf`.
- Created branch `v3`, committed the redesign as `e7f3631`, pushed it, and opened pull request #9.

### 2026-09-29

- Added a Markdown-to-static-HTML blog pipeline using `marked`.
- Added shared article templates, article CSS, article theme behavior, and generated homepage blog metadata.
- Migrated the ML resources article into `content/posts/ml-resources.md`.
- Added a fifth `Blog`/`Writing` section to the portfolio.
- Narrowed the overall layout and reading measure; reduced heading sizes and improved mobile padding.
- Replaced decorative heading fonts with IBM Plex Mono while retaining Inter for body copy.
- Changed the displayed first name from `Toheed` to `Tohe²d`, without changing URLs, filenames, or account handles.
- Added support for external posts through `source` and `external_url` front matter.
- Added support for canonical URLs on full local mirrors.
- Added the LessWrong article “Small Language Models Hallucinate Knowing Something's Off” as an external entry dated 2026-01-24.
- Removed the ML resources roadmap source, generated article, and legacy article; rebuilt `js/blog-posts.js` to remove its listing.
- Removed the Projects section and moved About, Research, Contact, and Blog into an always-visible sticky top bar.
- Added this project context document.

## Current Git state at this handoff

The blog system, typography updates, stylized name, cross-post support, and this document are local changes on `v3` after commit `e7f3631`. They were not committed or pushed when this document was created. Check `git status` before beginning new work.
