# takhtar

A simple portfolio you can clone and edit, built using HTML, CSS and Vanilla JS

Here the preview-
https://toheedakhtar.github.io/takhtar/

## Writing a blog post

1. Add a Markdown file to `content/posts/` with this front matter:

   ```md
   ---
   title: Post title
   description: One-sentence summary.
   date: 2026-09-29
   label: research notes · interpretability
   ---
   ```

2. Write the post below the front matter using standard Markdown.
3. Run `npm install` once, then run `npm run build` after adding or editing posts.
4. Commit both the Markdown source and generated files in `posts/` and `js/blog-posts.js`.

The build script creates standalone static HTML pages and updates the portfolio's blog listing automatically.

### Linking an external post

To list a LessWrong, Substack, or other externally published article without duplicating it, add `source` and `external_url` to its front matter. The body can remain empty:

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

External entries link directly to the original publication. For a full local mirror, omit `external_url`, include the Markdown body, and add `canonical_url` pointing to the original article.
