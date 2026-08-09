# Fonts

This site uses exactly two typefaces:

- **Literata** — every English word. Loaded from Google Fonts (see `_includes/head.html`).
- **Jameel Noori Nastaliq** — every Urdu word. Loaded via `@font-face` in `_includes/head.html`, served from OnlineWebFonts' CDN (`db.onlinewebfonts.com`), licensed CC BY 4.0. Attribution is included both as a code comment in `head.html` and as a visible credit line in the site footer (`_includes/footer.html`), as required by the license.

This works out of the box — no font file needs to be added to this folder for the site to work.

## Optional: self-hosting instead of the CDN

The CDN link is reliable and free, but if you'd rather not depend on a third party (e.g. for offline builds, stricter uptime guarantees, or your own licensed copy of the font), you can switch to self-hosting:

1. Obtain a copy of Jameel Noori Nastaliq you're licensed to redistribute, in `.woff2` and/or `.ttf` format.
2. Place the file(s) here as `JameelNooriNastaliq.woff2` (and/or `.ttf`).
3. In `_includes/head.html`, replace the `@font-face` `src` URLs (currently pointing at `db.onlinewebfonts.com`) with local paths, e.g.:
   ```css
   src: url('{{ site.baseurl }}/assets/fonts/JameelNooriNastaliq.woff2') format('woff2'),
        url('{{ site.baseurl }}/assets/fonts/JameelNooriNastaliq.ttf') format('truetype');
   ```
4. You can then remove the OnlineWebFonts credit comment/footer line, since attribution is only required while using their hosted files.
