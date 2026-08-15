/* ============================================================
   search.js – Client-side search for Kitabomori.
   Fetches search_index.json and filters by language + query.
   SITE_LANG and SITE_BASEURL are set inline in search.md.

   Matches against title, description, AND full post content, so a
   query only findable in a post's body still surfaces it. Each
   result shows the post title first, followed by a snippet of the
   matching text with the query highlighted. Items whose type is
   "Call" / "دعوت" (calls for submissions) are excluded from results.
   Input is debounced so filtering runs after typing pauses instead
   of on every keystroke.
   ============================================================ */

(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var index = null;
  var debounceTimer = null;
  var DEBOUNCE_MS = 150;
  var SNIPPET_RADIUS = 90; // characters of context on each side of the match

  var EXCLUDED_TYPES = { 'Call': true, 'دعوت': true };

  // Same accent palette already used for card-grid / section-card top
  // strips elsewhere on the site (see main.css), keyed by the
  // language-independent type_en so results stay color-consistent
  // regardless of which language build is running.
  var TYPE_ACCENTS = {
    'Article':        '#C79A3E',
    'Review':         '#D9754A',
    'Letter':         '#5A63C7',
    'Teaching Diary': '#7A6A4F',
    'Event':          '#B8A521',
    'Short Story':    '#C77FA0',
    'Poetry':         '#A25FC7',
    'Dialogue':       '#3EAF8C',
    'Satire':         '#C7883E',
    'Nonfiction':     '#5FA35F',
    'Reflection':     '#B08E6E'
  };
  var DEFAULT_ACCENT = '#009F93';

  // Fetch the search index once
  fetch(SITE_BASEURL + '/' + SITE_LANG + '/search_index.json')
    .then(function (r) { return r.json(); })
    .then(function (data) { index = data; })
    .catch(function () {
      results.innerHTML = '<p>Search index could not be loaded.</p>';
    });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Wrap every occurrence of `query` in `text` with <mark>, HTML-escaping
  // the rest. Used for titles, where we want the whole string (no
  // truncation), unlike the snippet excerpt below.
  function highlightAll(text, query) {
    var escaped = escapeHtml(text);
    if (!query) return escaped;
    var re = new RegExp('(' + escapeRegExp(escapeHtml(query)) + ')', 'ig');
    return escaped.replace(re, '<mark>$1</mark>');
  }

  // Build an HTML snippet of `text` centered on the first occurrence of
  // `query`, with the match wrapped in <mark>. Returns '' if no match.
  function buildSnippet(text, query) {
    if (!text) return '';
    var lower = text.toLowerCase();
    var idx = lower.indexOf(query);
    if (idx === -1) return '';

    var start = Math.max(0, idx - SNIPPET_RADIUS);
    var end = Math.min(text.length, idx + query.length + SNIPPET_RADIUS);
    var snippet = text.slice(start, end);

    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet = snippet + '…';

    var escaped = escapeHtml(snippet);
    var re = new RegExp('(' + escapeRegExp(escapeHtml(query)) + ')', 'ig');
    return escaped.replace(re, '<mark>$1</mark>');
  }

  function runSearch() {
    var query = input.value.trim().toLowerCase();
    if (!index || query.length < 2) {
      results.innerHTML = '';
      return;
    }

    var matches = [];
    for (var i = 0; i < index.length; i++) {
      var item = index[i];
      var type = SITE_LANG === 'ur' ? item.type_ur : item.type_en;

      // Never surface "Call for submissions" style announcements.
      if (EXCLUDED_TYPES[type]) continue;

      var title = SITE_LANG === 'ur' ? item.title_ur : item.title_en;
      var description = SITE_LANG === 'ur' ? item.description_ur : item.description_en;
      var content = item.content;

      var titleMatch = title && title.toLowerCase().indexOf(query) !== -1;
      var descriptionMatch = description && description.toLowerCase().indexOf(query) !== -1;
      var contentMatch = content && content.toLowerCase().indexOf(query) !== -1;

      if (!titleMatch && !descriptionMatch && !contentMatch) continue;

      // Prefer a snippet drawn from the post's own text; fall back to
      // the description if the query only appears there.
      var snippet = contentMatch ? buildSnippet(content, query) : '';
      if (!snippet && descriptionMatch) snippet = buildSnippet(description, query);

      matches.push({ item: item, type: type, title: title, snippet: snippet, accent: TYPE_ACCENTS[item.type_en] || DEFAULT_ACCENT });
    }

    if (matches.length === 0) {
      results.innerHTML = '<p>' + (SITE_LANG === 'ur' ? 'کوئی نتیجہ نہیں ملا۔' : 'No results found.') + '</p>';
      return;
    }

    var html = matches.map(function (m) {
      var url = SITE_LANG === 'ur' ? m.item.url_ur : m.item.url_en;
      var titleHtml = highlightAll(m.title, query);
      var typeHtml = escapeHtml(m.type);

      var block = '<div class="search-result" style="--accent:' + m.accent + ';">' +
        '<a href="' + url + '">' +
          '<span class="search-result-type">' + typeHtml + '</span>' +
          '<h3 class="search-result-title">' + titleHtml + '</h3>' +
        '</a>';

      if (m.snippet) {
        block += '<p class="search-result-snippet">' + m.snippet + '</p>';
      }

      block += '</div>';
      return block;
    }).join('');

    results.innerHTML = html;
  }

  // Listen for input, debounced
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runSearch, DEBOUNCE_MS);
  });
})();
