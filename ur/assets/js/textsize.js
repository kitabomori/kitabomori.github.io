/* ============================================================
   textsize.js – Three-step reading text size for Kitabomori:
   Default -> Large -> Larger, cycled by the "Aa" header button.
   Mirrors theme.js: runs before paint (from <head>) to avoid a
   flash of the wrong size, persists via localStorage.
   ============================================================ */

var TEXTSIZE_ORDER = ['normal', 'lg', 'xl'];
var TEXTSIZE_CLASS = { normal: '', lg: 'text-size-lg', xl: 'text-size-xl' };

function applyTextSize(mode) {
  var html = document.documentElement;
  html.classList.remove('text-size-lg', 'text-size-xl');
  var cls = TEXTSIZE_CLASS[mode];
  if (cls) html.classList.add(cls);
  localStorage.setItem('ew-textsize', mode);
}

/* toggleTextSize() – called by the "Aa" button in header.html. */
function toggleTextSize() {
  var current = localStorage.getItem('ew-textsize') || 'normal';
  var idx = TEXTSIZE_ORDER.indexOf(current);
  if (idx === -1) idx = 0;
  var next = TEXTSIZE_ORDER[(idx + 1) % TEXTSIZE_ORDER.length];
  applyTextSize(next);
}

(function () {
  var stored = localStorage.getItem('ew-textsize') || 'normal';
  var cls = TEXTSIZE_CLASS[stored];
  if (cls) document.documentElement.classList.add(cls);
})();
