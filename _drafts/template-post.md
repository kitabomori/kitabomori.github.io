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
                                            # embedded YouTube player is shown on the page instead of a link.
                                            # Leave blank to show no player (or fall back to youtube_en/youtube_ur).
pull_quote_en: ""                          # Optional: pin the exact pull-quote sentence shown on the page
pull_quote_ur: ""                          # (English/Urdu). Leave both blank and the site will automatically
                                            # pick the strongest sentence from the post itself; set these once
                                            # you've read the auto-picked one and want to override it.
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
