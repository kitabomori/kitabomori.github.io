/* ============================================================
   pwa-register.js
   Registers the service worker (enables offline reading) and wires
   up an optional "Install app" button if one exists on the page
   (id="install-app-button" — the header doesn't include one by
   default, so this quietly does nothing unless you add one).
   ============================================================ */
(function () {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").catch(function (err) {
        // Non-fatal: site still works fully online without the SW.
        console.warn("Kitabomori: service worker registration failed", err);
      });
    });
  }

  // Capture the browser's install prompt so we can trigger it from our
  // own UI (Chrome/Edge on Android and desktop). Safe no-op on browsers
  // that don't support it, including iOS Safari, which uses its own
  // native "Add to Home Screen" flow instead.
  var deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;

    var button = document.getElementById("install-app-button");
    if (button) {
      button.hidden = false;
      button.addEventListener("click", function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () {
          deferredPrompt = null;
          button.hidden = true;
        });
      });
    }
  });

  window.addEventListener("appinstalled", function () {
    var button = document.getElementById("install-app-button");
    if (button) button.hidden = true;
    deferredPrompt = null;
  });
})();
