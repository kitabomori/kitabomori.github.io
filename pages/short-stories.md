---
layout: page
title_en: "Short Stories"
title_ur: "مختصر کہانیاں"
description_en: "Short fiction and imaginative storytelling from the Kitabomori community."
description_ur: "کتابومری کمیونٹی کی جانب سے مختصر کہانیاں اور تخیلاتی افسانے۔"
permalink: /creative-writing/short-stories/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">تخیل پر مبنی مختصر کہانیاں اور افسانے۔</p>
{% else %}
<p class="collection-intro">Short fiction and imaginative storytelling.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.short_stories | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{{ item.date | date: "%d %B %Y" }}</p>
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
