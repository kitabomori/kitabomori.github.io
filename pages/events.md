---
layout: page
title_en: "Events"
title_ur: "تقریبات"
description_en: "Reading circles, workshops, and other Kitabomori events."
description_ur: "ریڈنگ سرکل، ورکشاپس اور کتابومری کی دیگر تقریبات۔"
permalink: /events/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">کتابومری کی آنے والی اور گزشتہ تقریبات، ریڈنگ سرکل اور ورکشاپس۔</p>
{% else %}
<p class="collection-intro">Upcoming and past Kitabomori events, reading circles, and workshops.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.events | sort: "date" | reverse %}
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
