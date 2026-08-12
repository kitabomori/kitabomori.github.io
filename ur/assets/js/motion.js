/* ============================================================
   motion.js – calm, literary motion for Kitabomori.
   No animation library: plain IntersectionObserver + CSS classes.
   One job: fade/slide content up into view as the reader scrolls
   to it (cards, paragraphs, blockquotes).
   Respects prefers-reduced-motion: reveals show immediately.

   (The reading-progress bar at the top of post pages is handled
   entirely by reading-progress.js against the .reading-progress-track
   / .reading-progress-fill markup in post.html — it used to also be
   built here a second time, which put two independently-computed
   progress bars on screen at once and made the top of every post
   page flicker/vibrate as they fought each other on scroll. Don't
   re-add a second implementation here.)
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Scroll reveals ----
     Cards and blockquotes get the fade/slide-up treatment. Plain <p>
     elements inside .post-body / .page-content are intentionally left
     out: on the site's longer pieces (essays, lesson plans, diary
     entries) revealing almost every paragraph individually meant a
     reader steadily scrolling through the text kept re-triggering a
     fade on nearly every line, which read as flicker rather than the
     intended calm, restrained motion. Blockquotes (pull quotes, used
     sparingly) still get the effect since they're occasional accents,
     not the running body text. */
  var revealTargets = document.querySelectorAll(
    ".content-card, .section-card, " +
    ".post-body > blockquote, .page-content > blockquote"
  );

  if (revealTargets.length) {
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach(function (el) {
        el.classList.add("reveal-visible");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
      );
      revealTargets.forEach(function (el) { io.observe(el); });
    }
  }
})();
