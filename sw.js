/* ============================================================
   sw.js – Kitabomori service worker
   Lives at the domain root so its default scope ("/") covers both
   the /en/ and /ur/ builds, not just its own folder.

   Strategy:
   - App shell (CSS/JS/icons/offline page) is precached on install,
     so the site always has something to render instantly.
   - HTML pages: network-first. Try the network so readers always get
     the latest version of an article; if that fails (offline), fall
     back to a cached copy of that exact page if we have one, and
     finally to the generic offline.html page.
   - Static assets (css/js/images/icons, same-origin only): cache-first,
     since these rarely change and don't need a network round-trip
     every time.
   - Anything cross-origin (YouTube embeds, Google Fonts, analytics,
     etc.) is left completely alone — the service worker does not
     intercept those requests at all. This preserves normal YouTube
     embedded playback and view counting.
   ============================================================ */

const CACHE_VERSION = "kitabomori-v1";
const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/assets/css/main.css",
  "/assets/js/theme.js",
  "/assets/js/motion.js",
  "/assets/js/search.js",
  "/assets/favicon.svg",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // addAll fails all-or-nothing on a single 404, so add individually
      // and don't let one missing file block installation.
      return Promise.all(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch(() => {
            /* ignore missing optional precache entries */
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle same-origin GET requests. Everything else (YouTube
  // iframe, Google Fonts, cross-origin API calls, POST requests, etc.)
  // passes straight through to the network untouched.
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  const isNavigation =
    request.mode === "navigate" ||
    (request.method === "GET" &&
      request.headers.get("accept") &&
      request.headers.get("accept").includes("text/html"));

  if (isNavigation) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match("/offline.html");
        })
    );
    return;
  }

  // Static assets: cache-first, refresh the cache in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
