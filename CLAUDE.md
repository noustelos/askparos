# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

**AskParos.ai** — a static landing site for a Paros AI travel concierge, prepared as
a **scripted demo + domain-acquisition showcase** (same positioning as AskMykonos and
AskSingapore). Part of the "ASK AI Travel Network" (sibling: AskSantorini.ai — live).

There is **no build step and no framework**: plain HTML, one CSS file, one JS file.
Deployed as static files on **Cloudflare Pages** (`Build command: empty`,
`Output directory: /`). Do not introduce a bundler, package.json, or npm scripts
unless explicitly asked.

## ⚠️ Deploy: push to main = INSTANT LIVE

The Pages project is git-connected to `main`
(github.com/noustelos/askparos). **Every push to main deploys straight
to askparos.ai** — no preview step. Work on a branch, verify locally, and only
merge/push when Nikos asks. For rollback, revert/reset to the previous main commit
and push.

`styles.css`/`script.js` are edge- and browser-cached for 24h (`_headers`), so the
HTML references them with a `?v=` query — **bump that version whenever you change
either file**, or live visitors keep the stale asset for up to a day. Current
version: `?v=paros3`.

## Files that matter

- [index.html](index.html) — the whole landing page (acquisition banner, hero +
  chat card + Naousa harbor SVG, questions, how-it-works, tours, concierge,
  ASK-network panel, acquisition strip, footer, cookie banner, modals).
- [styles.css](styles.css) — the single stylesheet, shared by ALL pages.
- [script.js](script.js) — all interactivity, served un-minified (no script.min.js).
- [faq.html](faq.html) / [faq-el.html](faq-el.html) — bilingual FAQ (two static files,
  cross-linked with `hreflang`; they do NOT load script.js).
- [privacy-policy.html](privacy-policy.html) — legal page, **English only**, no JS.
- [404.html](404.html) — not-found fallback.
- [knowledge/](knowledge/) — 11 Markdown files (beaches, villages, antiparos,
  transport, food, sunsets, tours, safety, concierge, partners, partner-rules).
  Raw material behind the scripted answers. **Not loaded by the frontend.**
- [assets/brand/ask-paros-logo.svg](assets/brand/ask-paros-logo.svg) — logo (line-art
  sailboat); favicon and OG image match the palette.
- [_headers](_headers) — Cloudflare Pages security headers (CSP, HSTS, cache).
- [robots.txt](robots.txt) / [sitemap.xml](sitemap.xml) — keep sitemap in sync with pages.

## Design system — "Paros Midday" (styles.css)

Bright Aegean day: sand, turquoise water, sage. Calm and Cycladic — never neon.
Tokens in `:root`:

- Canvas: `--salt #f8f5ec` (page), cards `--card #ffffff`, wells `--card-deep #f2f5ee`.
- Deep Aegean ink: `--deep #14505f` (headings + contrast surfaces), body `--ink
  #3d5a63`, `--muted #74878d`.
- Sage luxury: `--sage #7c9473`, `--sage-deep #5c7355` — hairlines, chips, badges,
  borders (the role gold plays on Mykonos).
- **Electric accent: turquoise `--tide #0e8ca1` — CTAs ONLY.** Deliberately rare
  (nav CTA, primary buttons, acquisition banners, one H1 ornament dot, one
  sage→turquoise gradient on the answer preview, the chat status dot + LIVE DEMO
  badge as the demo signal). Do not spread it further.
- `--sun #f2c14e` appears only in the hero scene, logo and tiny sparkles.
- Type: Literata (serif, headings + italic accents) + Commissioner (sans). Both
  support Greek; loaded from Google Fonts with preconnect.
- Signature: **Naousa harbor line-art** — inline SVG in the hero (`.hero-scene`):
  sun, gulls, Venetian kastro ruin, caique with mast, turquoise water lines.
  Sun glints via static CSS gradients. Hidden ≤980px.
  The chat card is `align-self: start` + fixed `margin-top: 215px` so its top is
  deterministic — a vertically centered card would swallow the harbor scene when
  it grows (longer greeting, short viewports). Don't re-center it; growth goes
  downward. Mobile resets the margin.
- **Performance floor: 2017 MacBook Air.** No `backdrop-filter`, no `filter: blur`,
  static gradients only. Chat animations are opacity-only. Keep it that way.
- Chat bubble semantics: bot = seafoam surface `#eef4f0`, user = deep Aegean ink
  `--deep` with sand-white text.
- Breakpoint: mobile/desktop switch at **≤980px**.

## Contact & cross-site rules (non-negotiable)

- **Every contact point is info@asksantorini.ai** — the only working address in the
  network. **No `@askparos.ai` or `@askmykonos.ai` address may appear anywhere**
  (grep-verify zero before shipping).
- Acquisition messaging: top pill banner + pre-footer strip, both mailto
  info@asksantorini.ai, subject "AskParos.ai Domain Acquisition".
- Instagram links → https://www.instagram.com/asksantoriniai/ (the network account).
- Sanctioned cross-site references, and ONLY these: the acquisition mailto, the
  network panel links (asksantorini LIVE / asksingapore DEMO / askmykonos DEMO /
  askparos "Demo — this site" unlinked), the chat card's scripted-demo attribution
  linking asksantorini.ai, and the Instagram links.
- **Zero shared infra**: never wire this site to the AskSantorini Worker or any
  backend. `workerUrl` stays the `PASTE_…` placeholder; the scripted engine lives in
  the `!isWorkerConfigured` branch of `sendMessage`, so a real backend simply
  replaces that branch when/if it comes.

## Privacy & cookies (demo-appropriate, shipped)

- Privacy is an **honest demo note**, not GDPR boilerplate (no data collection /
  scripted in-browser chat / local-only preferences / Cloudflare hosting / contact).
  Same message in privacy-policy.html (EN) and the index privacy modal (bilingual).
- **Cookie banner is informational only** — one "Got it"/«Κατάλαβα» button stores
  `dismissed` in localStorage (`askParosCookiePreference`). No Accept/Necessary split
  unless real analytics ever arrive.
- llms.txt describes a **demo/showcase**, not a live AI guide — keep it honest.
- Any legal-ish wording change (privacy, terms, cookie text) is **Nikos' call** —
  propose, don't ship.

## Chat: SCRIPTED ISLAND DEMO (no backend)

Client-side only — no API, no keys, no fetch in the demo path, no voice.

- **`ISLAND_SCRIPT {en, el}`** in script.js: greeting + 8 chip answers + 8
  card-prefill answers + fallback + emergency (18 keys × 2 languages).
  **Nameless persona**: EN = warm, breezy island voice; EL = clean professional
  concierge. TRUTH OVER DRAMA: places only — no venue/business names, no prices,
  no discount codes; paid experiences flagged as paid; "confirm with the provider"
  for schedules/conditions.
- **Matching**: normalize (lowercase, NFD accent-strip, trailing punctuation,
  whitespace) → exact match against 32 strings (16 known questions × 2 languages:
  chip texts in `translations.*.questions` + `ISLAND_QUESTIONS`, which must mirror
  the `data-chat-prefill-*` attributes in index.html **character-for-character**).
- **Emergency guardrail**: unknown text passes an EN+EL emergency-keyword scan →
  drop-the-act reply (112 / 166 / 100 / 108). Known questions bypass the scan via
  the exact-match shortcut (they're our own safe texts).
- **Delivery**: chips/cards prefill the input and auto-send (300ms) → typing dots
  (800ms) → word-by-word reveal (45ms/word, opacity-only spans, `textContent` —
  never innerHTML with user input). `isIslandReplying` guard disables input during
  a reply. **Reduced motion: reveal stays ON (it's the demo concept), dots and
  smooth scrolls OFF.**
- **Honest signals**: LIVE DEMO badge («Ζωντανό demo»), scripted-demo attribution
  line, honest placeholder ("Tap a suggested question below" / «Επιλέξτε μια
  ερώτηση παρακάτω»), status dot in `--tide` (demo signal, not "online" green).
- Two prefill questions (windsurf, carRental) have **no card** — reachable only by
  typing their exact question (inherited Mykonos quirk).

## i18n (script.js)

- Two dictionaries in `translations` (`en`, `el`). `data-i18n="key"` sets textContent,
  `data-i18n-attr="attr:key,..."` sets attributes.
- `setLanguage()` also updates `<html lang>`, title, meta description, OG/Twitter
  metas, og:locale, the toggle, question cards, active preview and chat placeholder;
  persists to localStorage; optionally rewrites `?lang=`.
- Language state: `?lang=en|el` → `localStorage.preferredLanguage` → `en`.
- When you **remove** a `data-i18n` element, remove its orphaned keys from **both**
  dictionaries; when you add one, add both languages.
- Runtime copy comes from the dictionaries and overrides the static HTML — rendered
  text may differ from index.html source.

## Previewing changes (headless Chrome)

No dev server needed; `python3 -m http.server 8787` or open files directly. Screenshots:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --hide-scrollbars --window-size=1440,3000 --screenshot=/tmp/out.png "file://$PWD/index.html"
```

Gotchas:
- `.hero` is `min-height: calc(100vh - …)` → for full-page shots inject
  `.hero{min-height:auto !important}` into a temp copy **inside the repo dir**
  (a copy in /tmp can't reach the relative styles.css).
- Headless layout viewport ≈ `window-size` + ~60px; mobile breakpoint is `≤980px`;
  the full mobile page is ~7000px tall.

## Conventions & workflow

- Bilingual EN/EL everywhere user-facing (known exception: privacy-policy.html is
  English-only). Bilingual parity check before shipping any user-facing change.
- English pages link only the English FAQ; faq-el keeps Greek links.
- Reference files as clickable links, e.g. [styles.css](styles.css).
- Commit/push only when asked (see deploy warning above). Commit messages end with:
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`
