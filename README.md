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
| Teal | `#009F93` | Header, footer, nav, buttons, headings, links |
| White | `#FFFFFF` | Page backgrounds, cards, light mode |
| Ticker text | `#aab52d` | Homepage scrolling ticker text |

No other accent colours are used anywhere on the site.

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
