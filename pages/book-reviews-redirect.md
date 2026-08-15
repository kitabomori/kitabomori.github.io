---
layout: none
title_en: "Reviews has moved"
title_ur: "جائزے منتقل ہو گئے ہیں"
permalink: /book-reviews/
---
<!DOCTYPE html>
<html lang="{{ site.lang | default: 'en' }}">
<head>
  <meta charset="UTF-8">
  <title>{% if site.lang == 'ur' %}جائزے منتقل ہو گئے ہیں{% else %}Reviews has moved{% endif %}</title>
  <meta http-equiv="refresh" content="0; url={{ site.baseurl }}/{{ site.lang }}/reviews/">
  <link rel="canonical" href="{{ site.baseurl }}/{{ site.lang }}/reviews/">
</head>
<body>
  <p>
    {% if site.lang == 'ur' %}
      یہ صفحہ منتقل ہو گیا ہے۔ اگر خودکار طور پر منتقل نہ ہوں تو <a href="{{ site.baseurl }}/{{ site.lang }}/reviews/">یہاں کلک کریں</a>۔
    {% else %}
      This page has moved. If you are not redirected automatically, <a href="{{ site.baseurl }}/{{ site.lang }}/reviews/">click here</a>.
    {% endif %}
  </p>
</body>
</html>
