/* ============================================================
   reading-progress.js – fills the strip at the top of post pages
   as the reader scrolls through the post body. Percentage is based
   on scroll position within the whole document (simple and robust
   across post lengths), clamped to 0–100.
   ============================================================ */
(function () {
  var fill = document.getElementById('reading-progress-fill');
  if (!fill) return;

  var ticking = false;

  function update() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    fill.style.width = pct + '%';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
