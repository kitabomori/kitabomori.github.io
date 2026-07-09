/* ============================================================
   theme.js – Three-way reading theme for Kitabomori:
   Light -> Sepia -> Dark, cycled by the header button.
   Runs before paint (called from <head>) to prevent a flash of
   the wrong theme. Uses localStorage to persist preference.
   ============================================================ */

var THEME_ORDER = ['light', 'sepia', 'dark'];
var THEME_LABELS = {
  en: { light: 'Light', sepia: 'Sepia', dark: 'Dark' },
  ur: { light: 'روشن',  sepia: 'سیپیا', dark: 'تاریک' }
};

function applyTheme(mode) {
  var html = document.documentElement;
  html.classList.remove('dark', 'sepia');
  if (mode === 'dark')  html.classList.add('dark');
  if (mode === 'sepia') html.classList.add('sepia');
  localStorage.setItem('ew-theme', mode);
  updateThemeLabel(mode);
}

function updateThemeLabel(mode) {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  var lang = document.documentElement.getAttribute('lang') || 'en';
  var set = THEME_LABELS[lang] || THEME_LABELS.en;
  btn.textContent = set[mode] || set.light;
}

/* toggleDark() – called by the button in header.html.
   Name kept for backwards compatibility with the existing
   onclick="toggleDark()" markup; it now cycles three states. */
function toggleDark() {
  var current = localStorage.getItem('ew-theme') || 'light';
  var idx = THEME_ORDER.indexOf(current);
  if (idx === -1) idx = 0;
  var next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
  applyTheme(next);
}

(function () {
  var stored = localStorage.getItem('ew-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var mode = stored || (prefersDark ? 'dark' : 'light');
  var html = document.documentElement;
  if (mode === 'dark')  html.classList.add('dark');
  if (mode === 'sepia') html.classList.add('sepia');
  // Don't call updateThemeLabel yet: header.html hasn't rendered
  // this early (theme.js runs from <head>). It syncs the label
  // itself on DOMContentLoaded.
})();
