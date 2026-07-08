---
layout: page
title_en: "Satire"
title_ur: "طنزیہ تحریر"
description_en: "Wit and exaggeration turned toward education and society."
description_ur: "تعلیم اور معاشرے پر طنز و مزاح اور مبالغہ آرائی پر مبنی تحریریں۔"
permalink: /creative-writing/satire/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">تعلیم اور معاشرے پر طنز و مزاح اور مبالغہ آرائی پر مبنی تحریریں۔</p>
{% else %}
<p class="collection-intro">Wit and exaggeration turned toward education and society.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.satire | sort: "date" | reverse %}
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
