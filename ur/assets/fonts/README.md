# Fonts

This site uses exactly two typefaces:

- **Literata** — every English word. Loaded from Google Fonts (see `_includes/head.html`), no local file needed.
- **Jameel Noori Nastaliq** — every Urdu word. This is a freeware desktop font, not available on Google Fonts, so it must be self-hosted here.

## To finish setup

Drop your licensed copy of the font file(s) in this folder using these exact names (referenced by `_includes/head.html`):

- `JameelNooriNastaliq.woff2` (preferred — smaller, modern browsers)
- `JameelNooriNastaliq.ttf` (fallback for older browsers)

Until these files are added, Urdu text across the site will silently fall back to the browser's default serif instead of Nastaliq.
