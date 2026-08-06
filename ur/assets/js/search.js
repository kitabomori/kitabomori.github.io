/* ============================================================
   search.js – Client-side search for Kitabomori.
   Fetches search_index.json and filters by language + query.
   SITE_LANG and SITE_BASEURL are set inline in search.md.

   Matches against title AND description (search_index.json now
   includes description_en/description_ur) so a query only findable
   in a post's dek still surfaces it, not just exact title matches.
   Input is debounced so filtering runs after typing pauses instead
   of on every keystroke.
   ============================================================ */

(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var index = null;
  var debounceTimer = null;
  var DEBOUNCE_MS = 150;

  // Fetch the search index once
  fetch(SITE_BASEURL + '/' + SITE_LANG + '/search_index.json')
    .then(function (r) { return r.json(); })
    .then(function (data) { index = data; })
    .catch(function () {
      results.innerHTML = '<p>Search index could not be loaded.</p>';
    });

  function runSearch() {
    var query = input.value.trim().toLowerCase();
    if (!index || query.length < 2) {
      results.innerHTML = '';
      return;
    }
    var filtered = index.filter(function (item) {
      var title = SITE_LANG === 'ur' ? item.title_ur : item.title_en;
      var description = SITE_LANG === 'ur' ? item.description_ur : item.description_en;
      var titleMatch = title && title.toLowerCase().indexOf(query) !== -1;
      var descriptionMatch = description && description.toLowerCase().indexOf(query) !== -1;
      return titleMatch || descriptionMatch;
    });

    if (filtered.length === 0) {
      results.innerHTML = '<p>' + (SITE_LANG === 'ur' ? 'کوئی نتیجہ نہیں ملا۔' : 'No results found.') + '</p>';
      return;
    }

    var html = filtered.map(function (item) {
      var title = SITE_LANG === 'ur' ? item.title_ur : item.title_en;
      var type  = SITE_LANG === 'ur' ? item.type_ur  : item.type_en;
      var url   = SITE_LANG === 'ur' ? item.url_ur   : item.url_en;
      return '<div class="search-result"><a href="' + url + '"><strong>' +
             type + '</strong> – ' + title + '</a></div>';
    }).join('');

    results.innerHTML = html;
  }

  // Listen for input, debounced
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runSearch, DEBOUNCE_MS);
  });
})();
