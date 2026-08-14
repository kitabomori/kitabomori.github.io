---
layout: base
title_en: "Home"
title_ur: "مرکزی صفحہ"
description_en: "Kitabomori – read and write to act"
description_ur: "کتابومری – پڑھو، لکھو، قدم اٹھاؤ۔"
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
    <h1 class="home-heading">کتابومری </h1>
    <p class="home-tagline">پڑھو، لکھو، قدم اٹھاؤ۔ </p>
    <p>
 شِنا زبان میں „کتاب“ کے معنی کتاب اور „موری“ کے معنی گفتگو کے ہیں۔ ہم نے ان دونوں تصورات کو یکجا کرکے ایک ایسی جگہ بنانے کی کوشش کی ہے جہاں پڑھنے اور لکھنے کے ذریعے معاشرے میں مثبت تبدیلی کی راہ ہموار ہو۔
    </p>
    <p>
 کتاب موری رضاکاروں کے زیرِ انتظام چلنے والا ایک پلیٹ فارم ہے، جو طلبہ، اساتذہ، محققین اور ہر اُس شخص کے لیے ہے جو سیکھنے اور اپنے خیالات دوسروں کے ساتھ بانٹنے کا شوق رکھتا ہے۔ یہاں ہم مختلف موضوعات اور اصناف پر مبنی تحریریں شائع کرتے ہیں، جن میں مضامین، کتابوں پر تبصرے، تخلیقی تحریریں، خطوط، تدریسی تجربات اور بہت کچھ شامل ہے۔ ہم ایک ایسی فضا قائم کرنا چاہتے ہیں جہاں لوگ اپنے خیالات کا اظہار کر سکیں، سوال اٹھا سکیں اور ایک دوسرے سے سیکھ سکیں۔ ہمارا ماننا ہے کہ پڑھنے اور لکھنے کے ذریعے ہونے والی بامعنی گفتگو ہمیں مختلف خیالات اور نقطۂ ہائے نظر کو بہتر طور پر سمجھنے میں مدد دیتی ہے، اور یہی سمجھ بوجھ معاشرے میں مثبت عملی تبدیلی کا باعث بن سکتی ہے۔
    </p>
  </p> 
اگر آپ بھی اس خیال سے اتفاق کرتے ہیں تو ہم آپ کو دعوت دیتے ہیں کہ ہماری تحریریں پڑھیں اور اپنی تحریریں بھی ہمارے ساتھ شیئر کریں۔ تحریریں بھیجنے کےلیے ہماری <span class="highlight"><a href="{{ site.baseurl }}/ur/guidelines/">ہدایات</a></span> پڑھیں اور <span class="highlight"><a href="{{ site.baseurl }}/ur/submission/">اپنی تحریر جمع کروائیں</a></span> تاکہ ہم مل کر ایسی کمیونٹی تشکیل دیں جہاں سیکھنے، سوچنے اور بامعنی گفتگو کو اہمیت حاصل ہو۔ 
    <p>
    </p>
  </section>

  <div class="section-divider" aria-hidden="true"><span class="divider-line"></span><svg class="divider-icon"><use href="#icon-quill"></use></svg><span class="divider-line"></span></div>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card section-card-articles">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-papers"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/articles/">مضامین</a></h2>
        <p>تجربے اور تحقیق پر مبنی رائے ۔</p>
      </div>

      <div class="section-card section-card-reviews">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-book-star"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/reviews/">جائزے</a></h2>
        <p>تعلیم، خواندگی، اور ادب کی کتابوں پر تنقیدی تبصرے۔</p>
      </div>

      <div class="section-card section-card-creative">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-pen-nib"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/creative-writing/">تخلیقی تحریر</a></h2>
        <p>مختصر کہانیوں، شاعری، تأملات، مکالموں، طنز و مزاح، اور نثری ادب کے ذریعے زندگی کا کھوج۔</p>
      </div>

      <div class="section-card section-card-letters">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-letter"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/letters/">خطوط</a></h2>
        <p>خطوط جو ناممکن گفتگوؤں کو لفظ دیتے ہیں۔</p>
      </div>

      <div class="section-card section-card-diary">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-journal"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/ur/diary/">تدریسی ڈائری</a></h2>
        <p>تعلیم و تدریس کو تقویت دینے والا مواد۔</p>
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
    <h1 class="home-heading">Kitabomori</h1>
    <p class="home-tagline">Read and write to act</p>
    <p>
      In Shina, 'kitab' means 'book', and 'mori' means 'conversation'. We bring these two ideas together to create a space where reading and writing can foster positive change in society.
    </p>
Kitabomori is a volunteer-run platform for students, teachers, researchers, and everyone who enjoys learning and sharing ideas. We publish a variety of work, including articles, book reviews, creative writing, letters, teaching experiences, and much more. We want to create a space where people can share their thoughts, ask questions, and learn from each other. We believe that good conversations, in the form of reading and writing, help us understand different ideas, and that understanding can lead to positive action.
    </p>
    <p>
     If you believe in this too, we invite you to read our work and share your own. Please read our <span class="highlight"><a href="{{ site.baseurl }}/en/guidelines/">submission guidelines</a></span> and <span class="highlight"><a href="{{ site.baseurl }}/en/submission/">send us your work.</a></span> Together, we can build a community that values learning, thinking, and meaningful conversations.
    </p>
  </section>

  <div class="section-divider" aria-hidden="true"><span class="divider-line"></span><svg class="divider-icon"><use href="#icon-quill"></use></svg><span class="divider-line"></span></div>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card section-card-articles">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-papers"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/articles/">Articles</a></h2>
        <p>Opinion grounded in experience and research.</p>
      </div>

      <div class="section-card section-card-reviews">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-book-star"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/reviews/">Reviews</a></h2>
        <p>Critical reviews of books on education, literacy, and literature.</p>
      </div>

      <div class="section-card section-card-creative">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-pen-nib"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/creative-writing/">Creative Writing</a></h2>
        <p> Exploring life through Short Stories, Poetry, Reflection, Dialogues, Satire, and Nonfiction.</p>
      </div>

      <div class="section-card section-card-letters">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-letter"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/letters/">Letters</a></h2>
        <p>Letters that imagine impossible conversations.</p>
      </div>

      <div class="section-card section-card-diary">
        <div class="card-icon" aria-hidden="true"><svg class="decor-svg-sm"><use href="#icon-journal"></use></svg></div>
        <h2><a href="{{ site.baseurl }}/en/diary/">Teaching Diary</a></h2>
        <p>Resources that enrich teaching and learning.</p>
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
