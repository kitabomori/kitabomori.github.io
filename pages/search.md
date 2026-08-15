---
layout: page
title_en: "Search"
title_ur: "تلاش"
description_en: "Search all Kitabomori content."
description_ur: "کتابومری کے تمام مواد میں تلاش کریں۔"
permalink: /search/
---

{% if site.lang == 'ur' %}
<p>کتابومری کے تمام مواد میں تلاش کریں۔</p>
<label for="search-input" class="sr-only">تلاش</label>
<input type="text" id="search-input" placeholder="یہاں لکھیں…" aria-label="تلاش"
       style="width:100%; padding:10px; font-size:1rem; border:1px solid #009F93; border-radius:4px; margin-bottom:20px; direction:rtl;">
{% else %}
<p>Search all articles, letters, reviews, and reflections on Kitabomori.</p>
<label for="search-input" class="sr-only">Search</label>
<input type="text" id="search-input" placeholder="Type to search…" aria-label="Search"
       style="width:100%; padding:10px; font-size:1rem; border:1px solid #009F93; border-radius:4px; margin-bottom:20px;">
{% endif %}

<div id="search-results"></div>

<script>
  // Pass current language to search.js
  var SITE_LANG = '{{ site.lang }}';
  var SITE_BASEURL = '{{ site.baseurl }}';
</script>
<script src="{{ site.baseurl }}/assets/js/search.js"></script>
