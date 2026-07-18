---
layout: page
title_en: "Letters"
title_ur: "خطوط"
description_en: "Personal letters from teachers, students, and researchers."
description_ur: "اساتذہ، طلباء اور محققین کی طرف سے ذاتی خطوط۔"
permalink: /letters/
---

<div class="card-grid card-grid-letters">
  {% assign sorted_items = site.letters | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{% include localized-date.html date=item.date %}</p>
    {% assign item_desc = item.description_en %}
    {% if site.lang == 'ur' %}{% assign item_desc = item.description_ur %}{% endif %}
    {% if item_desc and item_desc != "" %}
    <p class="card-excerpt">{{ item_desc }}</p>
    {% endif %}
    <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
