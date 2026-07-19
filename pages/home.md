---
layout: base
title_en: "Home"
title_ur: "مرکزی صفحہ"
description_en: "Kitabomori – read,  write.transform"
description_ur: "کتابومری – پڑھیں۔ لکھیں۔ تبدیلی لائیں"
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
    <p class="home-tagline">پڑھیں۔ لکھیں۔ تبدیلی لائیں۔</p>
    <p>
      شینا زبان میں "کتاب" کا مطلب ہے کتاب، اور "موری" کا مطلب ہے گفتگو۔ ہم انہیں یکجا کرتے ہیں تاکہ کچھ بڑا تخلیق کیا جا سکے: ایک ایسا پلیٹ فارم جہاں پڑھنا اور لکھنا سماجی تبدیلی کی قوت بن جائیں۔
    </p>
    <p>
      کتابومری ایک رضاکارانہ تعلیمی اور معاشرتی اشاعتی پلیٹ فارم ہے جو طلباء، اساتذہ، محققین اور عام قارئین کے لیے ہے۔ ہم ایسے مضامین شائع کرتے ہیں جو روایتی سوچ کو چیلنج کرتے ہیں، ایسے جائزے جو خیالات پر سوال اٹھاتے ہیں، تخلیقی تحریر جو دل کو چھوتی اور سوچنے پر مجبور کرتی ہے، خطوط جو دلوں اور ذہنوں کو جوڑتے ہیں، ایک تدریسی ڈائری جو جماعتوں کی حقیقت کو بیان کرتی ہے، اور تقریبات جو برادری کو مضبوط بناتی ہیں۔
    </p>
    <p>
      ہمارا ماننا ہے کہ فکر انگیز گفتگو سمجھ بوجھ کو جنم دیتی ہے، اور سمجھ بوجھ عمل کی راہ ہموار کرتی ہے۔ اگر آپ بھی اسی سوچ کے حامل ہیں تو ہم آپ کو ہمارا مواد پڑھنے اور اپنی تحریر شامل کرنے کی دعوت دیتے ہیں۔ ہماری <span class="highlight"><a href="{{ site.baseurl }}/ur/guidelines/">ہدایات</a></span> پڑھیں اور <span class="highlight"><a href="{{ site.baseurl }}/ur/submission/">اپنی تحریر جمع کروائیں</a></span> تاکہ ہم مل کر تنقیدی فکر کا کلچر، ایک گفتگو کے ذریعے، تعمیر کر سکیں۔
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
    <p>
      Kitabomori is a volunteer-driven educational and society-related publishing space for students, teachers, researchers, and the general public. We publish articles that challenge the status quo, reviews that interrogate ideas, creative writing that moves and provokes, letters that connect hearts and minds, a teaching diary that documents the reality of classrooms, and events that build community.
    </p>
    <p>
      We believe that thoughtful discussion leads to understanding, and understanding leads to action. If you share that belief, we invite you to explore our content—and to contribute your own. Read our <span class="highlight"><a href="{{ site.baseurl }}/en/guidelines/">submission guidelines</a></span> and <span class="highlight"><a href="{{ site.baseurl }}/en/submission/">send us your work</a></span> to help us build a culture of critical thought, one conversation at a time.
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