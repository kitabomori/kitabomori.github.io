/* ============================================================
   toc.js – builds a "On this page" jump-link list for long posts.
   Only appears when a post has 3 or more h3/h4 section headings
   (lesson plans typically have 5-8: Objectives, Materials,
   Procedure, Assessment...). Assigns headings index-based ids
   (language-agnostic — works the same for English and Urdu
   headings) rather than slugifying heading text.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('.post-body');
  var mount = document.getElementById('post-toc');
  if (!body || !mount) return;

  var headings = body.querySelectorAll('h3, h4');
  if (headings.length < 3) return;

  var isUrdu = document.documentElement.getAttribute('lang') === 'ur';
  var label = isUrdu ? 'اس صفحے میں' : 'On this page';

  var nav = document.createElement('nav');
  nav.className = 'post-toc';
  nav.setAttribute('aria-label', label);

  var heading = document.createElement('p');
  heading.className = 'post-toc-label';
  heading.textContent = label;
  nav.appendChild(heading);

  var list = document.createElement('ol');
  list.className = 'post-toc-list';

  headings.forEach(function (h, i) {
    var id = 'toc-section-' + (i + 1);
    h.id = id;
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
  });

  nav.appendChild(list);
  mount.appendChild(nav);
  mount.classList.add('post-toc-ready');
});
