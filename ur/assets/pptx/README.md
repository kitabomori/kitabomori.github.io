# PowerPoint files embedded in posts

Drop `.pptx` files here that you want readers to view directly on the
page (with slide navigation), not just download.

## Using a PPTX in a post

Inside the post's Markdown body:

```liquid
{% include pptx-embed.html
   src="/assets/pptx/reading-workshop-slides.pptx"
   title="Reading Workshop – Slide Deck" %}
```

This renders the deck in an interactive viewer (Microsoft's free Office
Online Viewer) plus a "Download the presentation" link underneath as a
fallback. It works because GitHub Pages serves the file at a real
public URL the viewer can fetch — no conversion to PDF or images
needed.

**Note:** the live preview only works once the site is deployed to
kitabomori.github.io (the viewer can't reach a file on localhost), so
you won't see slides render when previewing locally — check it on the
live site after pushing. The download link works everywhere.

Keep files reasonably sized (a few MB, not tens of MB) so the page
doesn't feel slow to load.
