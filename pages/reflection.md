---
layout: page
title_en: "Reflection"
title_ur: "عکاسی"
description_en: "Personal, thoughtful pieces of reflection on reading, education, and everyday life."
description_ur: "مطالعے، تعلیم اور روزمرہ زندگی پر ذاتی اور فکر انگیز عکاسی۔"
permalink: /creative-writing/reflection/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">مطالعے، تعلیم اور روزمرہ زندگی پر ذاتی اور فکر انگیز عکاسی۔</p>
{% else %}
<p class="collection-intro">Personal, thoughtful pieces of reflection on reading, education, and everyday life.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.reflections | sort: "date" | reverse %}
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
