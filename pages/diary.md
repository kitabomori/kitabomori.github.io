---
layout: page
title_en: "Teaching Diary"
title_ur: "تدریسی ڈائری"
description_en: "A collection of teaching notes, assignments, practical strategies, lesson ideas, reflections, and educational resources gathered throughout my four-year teacher education journey."
description_ur: "میرے چار سالہ اساتذہ تربیتی سفر کے دوران جمع کیے گئے تدریسی نوٹس، اسائنمنٹس، عملی حکمتِ عملیوں، سبق کے خیالات، عکاسیوں اور تعلیمی وسائل کا مجموعہ۔"
permalink: /diary/
---

<p class="collection-intro">
  {% if site.lang == 'ur' %}
    میرے چار سالہ اساتذہ تربیتی سفر کے دوران جمع کیے گئے تدریسی نوٹس، اسائنمنٹس، عملی حکمتِ عملیوں، سبق کے خیالات، عکاسیوں اور تعلیمی وسائل کا مجموعہ۔
  {% else %}
    This is a collection of teaching notes, assignments, practical strategies, lesson ideas, reflections, and educational resources gathered throughout my four-year teacher education journey.
  {% endif %}
</p>

<div class="card-grid card-grid-diary">
  {% assign sorted_items = site.diary | sort: "date" | reverse %}
  {% for item in sorted_items %}
  {% assign item_format = "" %}
  {% if item.url contains "reflective-report" %}
    {% assign item_format = "reflective-report" %}
  {% elsif item.url contains "lesson-plan" %}
    {% assign item_format = "lesson-plan" %}
  {% elsif item.url contains "reflection" %}
    {% assign item_format = "reflection" %}
  {% endif %}
  <div class="content-card{% if item_format != "" %} content-card-{{ item_format }}{% endif %}">
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
