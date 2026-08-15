---
layout: post
# -------------------------------------------------------
# INSTRUCTIONS: Copy this file into the correct folder:
#   Articles:            _collections/_articles/your-post-name.md
#   Letters:             _collections/_letters/your-post-name.md
#   Teaching Diary:      _collections/_diary/your-post-name.md
#   Reviews:             _collections/_reviews/your-post-name.md
#   Reflections:         _collections/_reflections/your-post-name.md
#   Calls:               _collections/_calls/your-post-name.md
#   Fiction & Stories:   _collections/_fiction_stories/your-post-name.md
#   Poetry:              _collections/_poetry/your-post-name.md
#   Events:              _collections/_events/your-post-name.md
#
# Rename the file (no spaces – use hyphens).
# Then fill in the values below and write your content.
# -------------------------------------------------------

title_en: "Your English Title Here"       # Replace with your English title
title_ur: "یہاں اردو عنوان لکھیں"          # Replace with your Urdu title
date: 2026-01-01                           # Replace with today's date: YYYY-MM-DD
                                            # This is the ONLY place the date needs to be set. It shows once,
                                            # automatically, at the very end of the post — do not also type a
                                            # date at the top of your content below.
author_en: ""                              # Optional: author name (English)
author_ur: ""                              # Optional: author name (Urdu)
bio_en: ""                                 # Optional: 2-4 line author bio (English). Leave blank to hide.
bio_ur: ""                                 # Optional: 2-4 line author bio (Urdu). Leave blank to hide.
description_en: "A short English summary of this piece (1–2 sentences)."
description_ur: "اس تحریر کا مختصر اردو خلاصہ (ایک یا دو جملے)۔"
youtube_en: "https://www.youtube.com/channel/UCKPb3SXn6wcDjMbobIFKxbg"  # Fallback link, only used if youtube_id is left blank
youtube_ur: "https://www.youtube.com/channel/UCKPb3SXn6wcDjMbobIFKxbg"  # Fallback link, only used if youtube_id is left blank
youtube_id: ""                             # Preferred: just the YouTube video ID (e.g. "dQw4w9WgXcQ" from
                                            # https://www.youtube.com/watch?v=dQw4w9WgXcQ). When set, an
                                            # embedded YouTube player is shown, centred, ABOVE the title.
                                            # Leave blank to show no player (or fall back to youtube_en/youtube_ur).
                                            # NOTE: if this file is a Teaching Diary Lesson Plan (filename
                                            # contains "lesson-plan"), all three youtube_* fields above are
                                            # ignored — Lesson Plan posts never show a YouTube embed or link,
                                            # by design. No need to fill these in for a lesson plan.
pull_quote_en: ""                          # Optional: pin the exact pull-quote sentence shown on the page
pull_quote_ur: ""                          # (English/Urdu). Leave both blank and the site will automatically
                                            # pick the strongest sentence from the post itself; set these once
                                            # you've read the auto-picked one and want to override it.
# available_en: false                      # Uncomment ONLY if this post has NO English content at all (body
                                            # is written entirely in Urdu). Hides the body on the English build
                                            # and shows a "not available in English, switch to Urdu" note under
                                            # the title instead. Leave commented out/omitted for normal posts.
# available_ur: false                      # Uncomment ONLY if this post has NO Urdu content at all (body is
                                            # written entirely in English, with no Urdu translation). Hides the
                                            # body on the Urdu build and shows a "not available in Urdu, switch
                                            # to English" note under the title instead. Leave commented out/
                                            # omitted for normal posts — and for any post where the body mixes
                                            # in a little Urdu (e.g. one glossed word) but is still readable
                                            # as English throughout, don't set this; it's only for posts with
                                            # NO usable English content.
                                            #
                                            # Never set both available_en: false and available_ur: false on the
                                            # same post — the post would then be invisible on both builds.
---

{% if site.lang == 'ur' %}

یہاں اردو متن لکھیں۔

اپنے پیراگراف کو ایک خالی سطر سے الگ کریں۔

{% else %}

Write your English content here.

Separate paragraphs with a blank line.

{% endif %}

{% comment %}
  -------------------------------------------------------
  OPTIONAL: pictures, a PowerPoint deck, or a chart/graph.
  Delete whichever of these three blocks you don't need —
  they're here purely as copy-paste examples. Full docs live
  in assets/img/posts/README.md and assets/pptx/README.md.
  -------------------------------------------------------

  1) A PICTURE — put the file in assets/img/posts/your-post-slug/
     first, then:

  {% include post-image.html
     src="/assets/img/posts/your-post-slug/photo.jpg"
     alt="Describe the image for screen readers — required"
     caption="Optional caption shown under the image" %}

  2) A POWERPOINT deck — put the .pptx in assets/pptx/ first,
     then:

  {% include pptx-embed.html
     src="/assets/pptx/your-deck.pptx"
     title="Your Deck Title" %}

  Note: the slide preview only renders once the site is live
  on kitabomori.github.io — it won't show on localhost. No
  front matter flag is needed for this one.

  DIARY SEQUENCE NAV — if this post is part of a curated diary
  sequence (e.g. Lesson Plan 2 -> Lesson Plan 3), link to the
  neighbouring post(s) with seq_prev_*/seq_next_* fields up in
  the front matter (above, next to `date:`) — NOT with HTML in
  the body. The layout renders these as a Previous/Next row on
  one line, and — importantly — it renders them regardless of
  available_en/available_ur, so the nav still works even on a
  post whose own text only exists in one language:

  seq_prev_url: "/diary/PREV-SLUG/"
  seq_prev_title: "PREV TITLE"
  seq_next_url: "/diary/NEXT-SLUG/"
  seq_next_title: "NEXT TITLE"

  Drop whichever pair you don't need (first post in a sequence
  has no seq_prev_*, last has no seq_next_*). If the neighbouring
  post's title should read differently in English vs Urdu, add
  seq_prev_title_en/seq_prev_title_ur (and the _next_ equivalents)
  instead of the plain seq_prev_title/seq_next_title — the layout
  prefers the language-specific one when present.

  This is separate from the automatic Older/Newer nav that
  already appears at the bottom of every post — this one is for
  the curated within-sequence order, not date order.

  3) A CHART/GRAPH — first add `has_chart: true` up in this
     post's front matter (above, next to `date:`), then paste
     something like this where you want the chart to appear:

  <div class="post-chart"><canvas id="my-chart-1"></canvas></div>
  <script>
  new Chart(document.getElementById('my-chart-1'), {
    type: 'bar',
    data: {
      labels: ['Label A', 'Label B', 'Label C'],
      datasets: [{ label: 'What this measures', data: [10, 20, 30] }]
    }
  });
  </script>
{% endcomment %}
