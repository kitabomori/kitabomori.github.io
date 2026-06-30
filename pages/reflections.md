---
layout: page
title_en: "Reflections"
title_ur: "عکاسی"
description_en: "Personal observations and reflections on reading, education, and the research journey."
description_ur: "مطالعے، تعلیم، اور تحقیقی سفر پر ذاتی مشاہدات اور عکاسی۔"
permalink: /reflections/
---

<div class="card-grid">
  {% assign sorted_reflections = site.reflections | sort: "date" | reverse %}
  {% for item in sorted_reflections %}
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
