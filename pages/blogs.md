---
layout: page
title_en: "Blogs"
title_ur: "بلاگز"
description_en: "Analytical, argument-driven writing on education and society."
description_ur: "تعلیم اور معاشرے پر مبنی تجزیاتی اور دلیل پر مبنی تحریریں۔"
permalink: /blogs/
---

<div class="card-grid">
  {% assign sorted_items = site.blogs | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{{ item.date | date: "%d %B %Y" }}</p>
    <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
