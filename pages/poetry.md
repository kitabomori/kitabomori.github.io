---
layout: page
title_en: "Poetry"
title_ur: "شاعری"
description_en: "Verse that gives shape to feeling and observation."
description_ur: "احساسات اور مشاہدات کو نظم کی زبان میں بیان کرنے کی کوشش۔"
permalink: /creative-writing/poetry/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">احساسات اور مشاہدات کو نظم کی زبان میں بیان کرنے کی کوشش۔</p>
{% else %}
<p class="collection-intro">Verse that gives shape to feeling and observation.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.poetry | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{% include localized-date.html date=item.date %}</p>
    <p class="card-excerpt">
      {% if site.lang == 'ur' %}
        {{ item.description_ur }}
      {% else %}
        {{ item.description_en }}
      {% endif %}
    </p>
    <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
