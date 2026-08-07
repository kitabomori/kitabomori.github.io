# Images used inside posts and pages

Put images you want to embed *in the body* of a post or page here (as
opposed to `assets/img/og-default.png`, which is only the fallback
social-share image).

## Suggested layout

Give each post its own subfolder, named after the post's slug, so files
from different posts never collide:

```
assets/img/posts/
  practicum-5-lesson-plan-2/
    classroom.jpg
    handout.png
  voices-on-reading-review/
    cover.jpg
```

## Using an image in a post

Inside the post's Markdown body, use the `post-image` include instead of
a raw `<img>` tag — it gives you consistent styling (border, spacing,
caption, lazy-loading) for free and matches the rest of the site:

```liquid
{% include post-image.html
   src="/assets/img/posts/practicum-5-lesson-plan-2/classroom.jpg"
   alt="Students working in small groups during the lesson"
   caption="Grade 7 students during the group activity" %}
```

- `src` — always start with `/assets/img/posts/...`
- `alt` — required; describe the image for screen readers and SEO
- `caption` — optional, shown as a small line under the image
- `width` — optional, e.g. `width="480px"`, to cap the size of a small image

Supported formats: `.jpg`, `.png`, `.webp`, `.gif`. Keep files under a
few hundred KB where possible — GitHub Pages has no automatic image
compression, so large files slow the page down as-is.
