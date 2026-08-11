---
layout: page
title_en: "Nonfiction"
title_ur: "نان فکشن"
description_en: "Essays and narrative nonfiction grounded in real experience, research, and observation."
description_ur: "حقیقی تجربے، تحقیق اور مشاہدے پر مبنی مضامین اور بیانیہ نان فکشن۔"
permalink: /creative-writing/nonfiction/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">حقیقی تجربے، تحقیق اور مشاہدے پر مبنی مضامین اور بیانیہ نان فکشن۔</p>
{% else %}
<p class="collection-intro">Essays and narrative nonfiction grounded in real experience, research, and observation.</p>
{% endif %}

<div class="card-grid card-grid-nonfiction">
  {% assign sorted_items = site.nonfiction | sort: "date" | reverse %}
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
