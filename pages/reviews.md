---
layout: page
title_en: "Reviews"
title_ur: "جائزے"
description_en: "Critical reviews of books on education, literacy, and research."
description_ur: "تعلیم، خواندگی اور تحقیق سے متعلق کتابوں کے تنقیدی جائزے۔"
permalink: /reviews/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">تعلیم، خواندگی اور تحقیق سے متعلق کتابوں کے تنقیدی جائزے۔</p>
{% else %}
<p class="collection-intro">Critical reviews of books on education, literacy, and research.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.reviews | sort: "date" | reverse %}
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
