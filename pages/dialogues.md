---
layout: page
title_en: "Dialogues"
title_ur: "مکالمے"
description_en: "Conversations, real or imagined, that dramatize a question worth sitting with."
description_ur: "حقیقی یا تخیلاتی مکالمے جو کسی اہم سوال کو ڈرامائی انداز میں پیش کرتے ہیں۔"
permalink: /creative-writing/dialogues/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">حقیقی یا تخیلاتی مکالمے جو کسی اہم سوال کو ڈرامائی انداز میں پیش کرتے ہیں۔</p>
{% else %}
<p class="collection-intro">Conversations, real or imagined, that dramatize a question worth sitting with.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.dialogues | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{% include localized-date.html date=item.date %}</p>
    <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
