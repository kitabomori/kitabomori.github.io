---
layout: base
title_en: "Home"
title_ur: "مرکزی صفحہ"
description_en: "Kitabomori – Promoting reading and writing culture"
description_ur: "کتابومری – پڑھنے اور لکھنے کے کلچر کو فروغ دینا"
permalink: /
---

<!-- News ticker – Home page only -->
{% include ticker.html %}

<div class="page-container">

  {% if site.lang == 'ur' %}

  <section class="home-welcome">
    <div class="page-decor page-decor-hero decor-open-book-pen" aria-hidden="true">
      <svg class="decor-svg"><use href="#icon-open-book-pen"></use></svg>
    </div>
    <h1 class="home-heading">کتابومری میں خوش آمدید</h1>
    <p class="home-tagline">تنقیدی مطالعے اور تحریر کے کلچر کو فروغ دیتے ہوئے معاشرے میں تبدیلی لانا۔</p>
    <p>
      شینا زبان میں "کتاب" کا مطلب ہے کتاب، اور "موری" کا مطلب ہے گفتگو۔ اسی لیے یہ پہل مطالعے اور تحریر کو فروغ دیتی ہے اور تعلیم، ثقافت، زبان اور انسانی تجربے سے جڑی ہر بات پر گفتگو کو جنم دیتی ہے۔ اس کا مقصد سمجھ بوجھ کے لیے فکر انگیز مکالمے کی حوصلہ افزائی کرنا ہے۔ یہاں آپ کو مضامین، جائزے، تخلیقی تحریر اور خطوط ملیں گے۔
    </p>
    <p>
      کتابومری ایک رضاکارانہ تعلیمی اشاعتی پلیٹ فارم ہے جو محققین، طلباء، اساتذہ، پالیسی سازوں اور عام قارئین کے لیے بنایا گیا ہے۔ اگر آپ اپنی تحریر شیئر کرنا چاہتے ہیں تو ہماری <span class="highlight"><a href="{{ site.baseurl }}/ur/guidelines/">ہدایات</a></span> پڑھیں اور <span class="highlight"><a href="{{ site.baseurl }}/ur/submission/">تحریر جمع کروائیں</a></span>۔
    </p>
  </section>

  <div class="section-divider" aria-hidden="true"><span class="divider-line"></span><svg class="divider-icon"><use href="#icon-quill"></use></svg><span class="divider-line"></span></div>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card section-card-articles">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-papers"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/articles/">مضامین</a></h2>
        <p>تجربے اور تحقیق پر مبنی رائے جس میں عملی تجاویز شامل ہیں۔</p>
      </div>

      <div class="section-card section-card-reviews">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-book-star"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/reviews/">جائزے</a></h2>
        <p>تعلیم، خواندگی اور تحقیق سے متعلق کتابوں کے تنقیدی جائزے۔</p>
      </div>

      <div class="section-card section-card-creative">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-pen-nib"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/creative-writing/">تخلیقی تحریر</a></h2>
        <p>مختصر کہانیاں، شاعری، عکاسی، مکالمے، طنزیہ تحریر، اور نان فکشن۔</p>
      </div>

      <div class="section-card section-card-letters">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-letter"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/letters/">خطوط</a></h2>
        <p>اساتذہ، طلباء اور محققین کی طرف سے ذاتی خطوط۔</p>
      </div>

      <div class="section-card section-card-diary">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-journal"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/diary/">تدریسی ڈائری</a></h2>
        <p>تدریسی نوٹس، اسائنمنٹس، حکمتِ عملیوں اور تعلیمی وسائل کا مجموعہ۔</p>
      </div>

      <div class="section-card section-card-events">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-calendar-book"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/events/">تقریبات</a></h2>
        <p>ریڈنگ سرکل، ورکشاپس اور کتابومری کی دیگر تقریبات۔</p>
      </div>

    </div>
  </section>

  {% else %}

  <section class="home-welcome">
    <div class="page-decor page-decor-hero decor-open-book-pen" aria-hidden="true">
      <svg class="decor-svg"><use href="#icon-open-book-pen"></use></svg>
    </div>
    <h1 class="home-heading">Welcome to Kitabomori</h1>
    <p class="home-tagline">Read. Write. Transform</p>
    <p>
In Shina, kitab means "book" and mori means "conversation." We bring them together to create something bigger: a platform where reading and writing become forces for social change.
    </p>
Kitabomori is a volunteer-driven educational publishing space for researchers, students, teachers, policymakers, and the public. We publish articles that challenge the status quo, reviews that interrogate ideas, creative writing that moves and provokes, letters that connect hearts and minds, a teaching diary that documents the reality of classrooms, and events that build community.
    <p>
 We believe that thoughtful discussion leads to understanding, and understanding leads to action. If you share that belief, we invite you to explore our content—and to contribute your own. Read our  <span class="highlight"><a href="{{ site.baseurl }}/en/guidelines/">submission guidelines</a></span> and<span class="highlight"><a href="{{ site.baseurl }}/en/submission/">send us your  your work and help us build a culture of critical thought, one conversation at a time.
</a></span>.
    </p>
  </section>

  <div class="section-divider" aria-hidden="true"><span class="divider-line"></span><svg class="divider-icon"><use href="#icon-quill"></use></svg><span class="divider-line"></span></div>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card section-card-articles">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-papers"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/articles/">Articles</a></h2>
        <p>Opinion grounded in experience and research, with actionable recommendations.</p>
      </div>

      <div class="section-card section-card-reviews">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-book-star"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/reviews/">Reviews</a></h2>
        <p>Critical reviews of books on education, literacy, and research.</p>
      </div>

      <div class="section-card section-card-creative">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-pen-nib"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/creative-writing/">Creative Writing</a></h2>
        <p>Short Stories, Poetry, Reflection, Dialogues, Satire, and Nonfiction.</p>
      </div>

      <div class="section-card section-card-letters">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-letter"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/letters/">Letters</a></h2>
        <p>Personal letters from teachers, students, and researchers.</p>
      </div>

      <div class="section-card section-card-diary">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-journal"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/diary/">Teaching Diary</a></h2>
        <p>Teaching notes, assignments, strategies, and educational resources.</p>
      </div>

      <div class="section-card section-card-events">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-calendar-book"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/events/">Events</a></h2>
        <p>Reading circles, workshops, and other Kitabomori events.</p>
      </div>

    </div>
  </section>

  {% endif %}

</div>
