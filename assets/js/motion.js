/* ============================================================
   motion.js – calm, literary motion for Kitabomori.
   No animation library: plain IntersectionObserver + CSS classes.
   Two jobs:
   1. Fade/slide content up into view as the reader scrolls to it
      (cards, paragraphs, blockquotes).
   2. Draw a thin reading-progress bar at the top while reading
      a post.
   Respects prefers-reduced-motion: reveals show immediately and
   the progress bar is skipped entirely.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Scroll reveals ---- */
  var revealTargets = document.querySelectorAll(
    ".content-card, .section-card, " +
    ".post-body > p, .post-body > blockquote, " +
    ".page-content > p, .page-content > blockquote"
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

  /* ---- 2. Reading progress bar (post pages only) ---- */
  if (!reduceMotion) {
    var postBody = document.querySelector(".post-body");
    if (postBody) {
      var bar = document.createElement("div");
      bar.className = "reading-progress";
      document.body.appendChild(bar);

      var updateProgress = function () {
        var rect = postBody.getBoundingClientRect();
        var docTop = rect.top + window.scrollY;
        var span = postBody.offsetHeight - window.innerHeight * 0.5;
        var scrolled = window.scrollY - docTop + window.innerHeight * 0.5;
        var pct = span > 0 ? Math.min(Math.max(scrolled / span, 0), 1) : 0;
        bar.style.width = (pct * 100) + "%";
      };

      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
      updateProgress();
    }
  }
})();
