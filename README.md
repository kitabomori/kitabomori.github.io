# Kitabomori – کتابومری

**Promoting a culture of critical reading and writing to transform society**
تنقیدی مطالعے اور تحریر کے کلچر کو فروغ دیتے ہوئے معاشرے میں تبدیلی لانا

A bilingual (English/Urdu) educational publishing website built with Jekyll, Tailwind CSS, and vanilla JavaScript. Deployed to GitHub Pages at:

**https://kitabomori.github.io/**

---

## Table of Contents

1. [What this site is](#what-this-site-is)
2. [First-time setup](#first-time-setup)
3. [How to add new content](#how-to-add-new-content)
4. [Testing locally](#testing-locally)
5. [Deploying](#deploying)
6. [Colour reference](#colour-reference)
7. [Adding social links and Google Form](#adding-social-links-and-google-form)
8. [File structure overview](#file-structure-overview)

---

## What this site is

Kitabomori publishes twelve types of content:

| Type | Folder | Purpose |
|------|--------|---------|
| Articles | `_collections/_articles/` | Experience-grounded opinion with recommendations |
| Reviews | `_collections/_reviews/` | Critical reviews of education-related books |
| Letters | `_collections/_letters/` | Personal letters from educators and students |
| Teaching Diary | `_collections/_diary/` | Teaching notes, assignments, strategies, lesson ideas, reflections, and resources |
| Short Stories | `_collections/_short_stories/` | Short fiction, under the Creative Writing menu |
| Poetry | `_collections/_poetry/` | Poems, under the Creative Writing menu |
| Reflection | `_collections/_reflections/` | Short personal observations, under the Creative Writing menu |
| Dialogues | `_collections/_dialogues/` | Conversations, real or imagined, under the Creative Writing menu |
| Satire | `_collections/_satire/` | Wit and exaggeration turned toward education and society, under the Creative Writing menu |
| Nonfiction | `_collections/_nonfiction/` | Narrative essays grounded in real experience, under the Creative Writing menu |
| Events | `_collections/_events/` | Reading circles, workshops, and other events |
| Calls | `_collections/_calls/` | Announcements and calls for submissions (not shown in nav/ticker) |

Short Stories, Poetry, Reflection, Dialogues, Satire, and Nonfiction sit together under a **Creative Writing** dropdown in the main navigation.

---

## First-time setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Ruby 3.2+](https://www.ruby-lang.org/)
- [Node.js 20+](https://nodejs.org/)

### Clone and install

```bash
git clone https://github.com/kitabomori/kitabomori.github.io.git
cd kitabomori.github.io
gem install jekyll bundler
bundle install
npm install
```

---

## How to add new content

You do not need to know code to add content. Follow these steps:

### Step 1 – Copy the template

Copy `_drafts/template-post.md` into the correct folder. For example, to add a new poem:

```
_collections/_poetry/my-poem-title.md
```

Use only lowercase letters, numbers, and hyphens in the filename (no spaces).

### Step 2 – Edit the front matter

Open the file and fill in the values at the top:

```yaml
---
layout: post
title_en: "Your English Title"
title_ur: "آپ کا اردو عنوان"
date: 2026-07-01
author_en: ""
author_ur: ""
bio_en: ""
bio_ur: ""
description_en: "A one-sentence summary in English."
description_ur: "ایک جملے میں اردو خلاصہ۔"
---
```

`author_en`/`author_ur` and `bio_en`/`bio_ur` are optional. If left blank, the byline falls back to just the date, and no bio block is shown — the layout stays intact either way.

### Step 3 – Write your content

Below the front matter, write your content using this pattern:

```liquid
{% if site.lang == 'ur' %}

اردو متن یہاں لکھیں۔

{% else %}

Write your English content here.

{% endif %}
```

If you only have English content, you can write it without the Liquid tags — just put it directly in the file. The Urdu build will display it as well until a translation is added.

Post titles are centred and body paragraphs are automatically justified (right-aligned reading direction for Urdu) — no extra styling is needed.

### Step 4 – Save and push

If using the GitHub website:
1. Go to your repository at `https://github.com/kitabomori/kitabomori.github.io`
2. Navigate to the correct folder (e.g. `_collections/_letters/`)
3. Click **Add file → Create new file**
4. Paste your content
5. Click **Commit changes**

If using VS Code or the terminal:
```bash
git add .
git commit -m "Add new letter: my-letter-title"
git push
```

The site will rebuild automatically within 2–3 minutes. New posts automatically appear in their category listing page, the homepage ticker, and search — no manual index updates are needed.

---

## Testing locally

To preview the site on your computer before pushing:

```bash
# Build CSS first
npm run build:css:dev

# Serve the English version
bundle exec jekyll serve --config _config_shared.yml,_config_en.yml

# In a second terminal, serve the Urdu version on a different port
bundle exec jekyll serve --config _config_shared.yml,_config_ur.yml --port 4001
```

Open `http://localhost:4000` for English, `http://localhost:4001` for Urdu.

---

## Deploying

Deployment is automatic. Every time you push to the `main` branch, GitHub Actions will:

1. Build the Tailwind CSS
2. Build both language versions of the site
3. Deploy to the `gh-pages` branch

You do not need to do anything else.

**First deployment:** Go to your repository Settings → Pages → Source, and select `gh-pages` branch, root folder. Save. The site will be live at `https://kitabomori.github.io/`.

---

## Colour reference

| Colour | Hex | Used for |
|--------|-----|---------|
| Teal | `#009F93` | Header, footer, nav, buttons, brand default, links |
| White | `#FFFFFF` | Page backgrounds, cards, light mode |
| Ticker text | `#aab52d` | Homepage scrolling ticker text |

**Section accent colours** — each collection has its own accent, used for post titles, side-rail ornaments, pull-quotes, and card hover glow (`--accent` custom property, set via `[data-section="…"]` in `main.css`):

| Section | Hex | Notes |
|---------|-----|-------|
| Articles | `#C79A3E` | amber / gold |
| Reviews | `#4C7EA6` | steel blue |
| Creative Writing | `#C77FA0` | dusty pink |
| Letters | `#6E9B5E` | sage green |
| Teaching Diary | `#009F93` | teal (site default) |
| Events | `#D9714A` | coral |

Homepage section cards (`.section-card-*` in `main.css`) use a second, separate accent set for the same six sections — this was already the case before this round of changes and is left as-is.

**Lesson Plan posts now get the same section-accent colouring** (title, rail ornaments) as every other Teaching Diary post — teal, since they're part of the "diary" accent group. There is no carve-out for them in `_layouts/post.html` any more. (They do, however, never show a YouTube embed/link — see the next section.)

---

## Aesthetic pass (design notes for future edits)

A round of visual changes was made to address readability/visibility feedback: side-margin decoration, title typography, and colour hierarchy. Summary, so future edits don't fight these:

- **Display font added:** `Fraunces` (Google Font) is now loaded on English pages alongside `Literata`, and used *only* for headings/titles — site title, post title, page title, home hero heading, section-card headings, card titles. Body copy stays `Literata`. Urdu pages are untouched (still `Noto Nastaliq Urdu` throughout, via the existing `html:not([dir="rtl"])` scoping pattern already used elsewhere in `main.css`). Configured in `tailwind.config.js` (`fontFamily.display`) and loaded in `_includes/head.html`.
- **Post titles now use the section accent colour** instead of a fixed teal (`.post-title` in `main.css`), also bumped from `text-2xl` to `text-3xl`/`text-4xl`. This required adding `data-section="{{ accent_group }}"` to the `<article>` tag in `_layouts/post.html` for non–Lesson-Plan posts, so `var(--accent)` is available to the title. Page titles (`.page-title`) and the home hero heading (`.home-heading`) got the same font/size treatment but keep the fixed teal — they aren't tied to one section.
- **Side rails (`.post-side`) now appear from 1024px instead of 1200px** — the old breakpoint hid them from most 13"–15" laptop screens entirely. A narrower rail variant (shorter line, smaller icons) applies from 1024–1279px so it never crowds the reading column; the original spacing/size returns at 1280px+.
- **Each rail now shows two icons**, not one: the existing lamp plus a new small `icon-leaf` symbol (added to `_includes/icons-sprite.svg`, same stroke-based line-art style as the rest of the set) further down the line, plus a very faint radial colour wash behind the whole rail in the section's accent. All in `.post-ornament*` rules in `main.css`.
- **Homepage hero now has a large, very low-opacity watermark** of the existing book/pen logo mark behind the welcome text (`.home-watermark`), added once per language block in `pages/home.md`. Purely decorative (`aria-hidden`), doesn't affect layout or reading flow.
- **Sepia mode's body text softened** from pure `#000000` to a warm dark ink `#241C10`, matching the "no stark black/white" principle already used for light/dark mode in the same `:root` block.
- **The "Classic Paper Frame" post-body treatment** (aged-paper texture, folded corner, per-section paper tints in `.post-body*` rules) was reviewed and left untouched — it already does what a "frame the reading column" change would have asked for, in more detail than a from-scratch version would.

If you add a new collection/section in future, remember to give it an entry in **both** accent tables above (`[data-section="…"]` for post pages, `.section-card-*`/`.content-card-*` for cards) or it'll silently fall back to teal.

---

## Merged card redesign (design notes for future edits)

A second round of changes merged the post header into the body card and reworked the date/title/YouTube placement, across **every** post type — articles, reviews, letters, events, and all three Teaching Diary formats (lesson plans, reflections, reflective reports). New posts you add going forward automatically follow all of this — nothing extra needs to be set in front matter. Summary, so future edits don't fight these:

- **Title merged into the body card.** The breadcrumb, decor icon, YouTube embed/link, and title now live *inside* the same tinted, bordered `.post-body` card as the body copy (in `_layouts/post.html`), instead of sitting above it as plain unstyled header text. This applies uniformly, including Lesson Plans — see the accent-colour note above.
- **The posting date now appears exactly once**, at the very end of the post (`.post-meta-bottom`, already existed). It used to also show at the top of the card and, for Teaching Diary posts specifically, a second time again inline at the very start of the body content (a leftover hardcoded `<div style="text-align:right...">` line baked into 81 of the `_collections/_diary/*.md` files). Both of those extra copies were removed. If you're writing a new Teaching Diary post from the template, do **not** add a manual date line at the top of your content — the front-matter `date:` field is all that's needed, and it will show up automatically at the bottom.
- **Post title size reduced** from `text-3xl`/`text-4xl` back down to `text-2xl`/`text-3xl` (`.post-title` in `main.css`) — the larger size from the previous aesthetic pass read as too big once the title moved inside the merged card.
- **YouTube embed/link moved above the title**, and is horizontally centred (`.post-video-embed` / `.post-audio-link` in `main.css`, reordered in `_layouts/post.html`). It used to sit below the title/divider.
- **Lesson Plan posts never show a YouTube embed or link, at all** — regardless of what `youtube_id`/`youtube_en`/`youtube_ur` are set to in that post's front matter. This is enforced by an `{% unless post_format == "lesson-plan" %}` guard around the whole YouTube block in `_layouts/post.html`. Don't remove that guard when editing. (You can still fill in those front-matter fields on a lesson plan file if you want — they're just ignored — but there's no need to.)

---

## Adding social links and Google Form

### Social media

Social links live in `_includes/footer.html` and already point to the live Kitabomori accounts (Facebook, Instagram, X, YouTube). To update any of them, open `_includes/footer.html` and edit the relevant `href` in Row 3.

### Google Form (Submission page)

The submission Google Form link lives in `pages/submission.md` (the CTA button). That's the only place someone can reach it directly — the footer only links to the Submission *page*, not the form itself, so visitors always read the submission instructions first.

To change the form URL, replace `https://forms.gle/a3AosqLwLdP7q9Co7` in `pages/submission.md`.

---

## File structure overview

```
kitabomori.github.io/
├── .github/workflows/deploy.yml   ← GitHub Actions: builds and deploys
├── _config_shared.yml             ← Collections and settings shared by both languages
├── _config_en.yml                 ← English-specific config (lang, font, direction)
├── _config_ur.yml                 ← Urdu-specific config (lang, font, direction RTL)
├── _data/navigation.yml           ← All nav links, incl. Creative Writing dropdown children
├── _includes/                     ← Reusable HTML fragments
│   ├── head.html                  ← <head> block (fonts, CSS, metadata)
│   ├── header.html                ← Top navigation bar + dropdown
│   ├── footer.html                ← Footer (social links, submission, guidelines, email)
│   └── ticker.html                ← Scrolling news ticker (Home only)
├── _layouts/                      ← Page templates
│   ├── base.html                  ← Root layout (html, head, body)
│   ├── page.html                  ← For standard pages
│   └── post.html                  ← For collection items (incl. author bio block)
├── _collections/                  ← All published content lives here
│   ├── _articles/
│   ├── _reviews/
│   ├── _letters/                  ← Sample: letter-to-teacher.md
│   ├── _diary/                    ← Teaching Diary entries
│   ├── _short_stories/            ← Creative Writing
│   ├── _poetry/                   ← Creative Writing
│   ├── _reflections/              ← Creative Writing
│   ├── _dialogues/                ← Creative Writing
│   ├── _satire/                   ← Creative Writing
│   ├── _nonfiction/               ← Creative Writing
│   ├── _events/
│   └── _calls/
├── pages/                         ← Static pages
│   ├── home.md
│   ├── guidelines.md
│   ├── submission.md
│   ├── reviews.md
│   ├── book-reviews-redirect.md   ← Redirects old /book-reviews/ URL to /reviews/
│   ├── creative-writing.md        ← Creative Writing landing page
│   ├── short-stories.md
│   ├── poetry.md
│   ├── reflection.md
│   ├── dialogues.md
│   ├── satire.md
│   ├── nonfiction.md
│   ├── events.md
│   ├── articles.md
│   ├── letters.md
│   ├── diary.md
│   ├── search.md
│   └── privacy.md
├── _drafts/
│   └── template-post.md           ← Copy this to create new content
├── assets/
│   ├── css/main.css               ← Tailwind input (edit for style changes)
│   └── js/
│       ├── theme.js               ← Dark mode logic
│       └── search.js              ← Client-side search
├── search_index.json              ← Auto-generated search index (all collections)
├── index.html                     ← Language-detect redirect
├── 404.html                       ← Bilingual 404 page
├── tailwind.config.js             ← Tailwind configuration + brand colours
├── postcss.config.js
├── package.json
├── Gemfile
└── README.md
```

---

## Contact

kitabomori@gmail.com
