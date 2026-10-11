---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: mobile view (index.html, below 900px)

Mode: Experience. Scope: the viewport below 900px; from 900px up (fan, hero grid, tokens) is unchanged and untouched.
Audience and job: network and community on a phone; learn who Joschka is (professional bridge and personal side as equals) and take one next step (read, listen, get in touch).
Pinned by the user: the card deck is shown only from 900px; below it there is no deck, no menu bubble and no bottom bar. The hero is centred; its four links (LinkedIn, Lebenslauf as the letters CV, Spotify, Blog) are icon buttons in one row; the copyright sits on the viewport's bottom edge. The hero is a stack of four cards (Home, Blog, CV, Spotify): the two behind show their name in a lower corner, brighten and deepen their shadow on hover and replace the front card with a spring animation on click; the name at 80%, and placeholder hashtags under the buttons (mobile only, later linked to blog articles). The contact box is not shown on mobile; the "Aktuell bei der Arbeit" line is removed everywhere.
Artifacts (branch mobile-artifacts): the base design is unchanged; on mobile only, small technical and warm marks were added (card dot, lit brand words, warm glow, Spotify green and amber glyphs, blue LinkedIn link).
Card dot (branch mobile-artifacts): every card has a dot in its top-right corner, warm on the card on top and grey on the cards beneath. No title block, tick scale or corner marks on any card.
Constraints: German copy as is, no invented claims or links, static HTML/CSS/JS, self-hosted fonts, light and dark theme via the existing tokens. The Fokus and Projekte sections were removed on all screens at the user's request.
Unresolved: real URLs for LinkedIn, CV, Spotify and Blog; their buttons are inert until then. Mobile has no route to Kontakt or Projekte while there is no menu.

## Direction contract

THESIS: The phone shows the desktop page narrowed: one paper, one accent, one type pairing, a centred hero. Nothing floats; nothing else is invented for mobile.
OWN-WORLD: Blue paper (#eef3f8) or night board in both themes, Space Grotesk name over Inter body, Signal Blue as the only accent, white and ink icon buttons with 16px corners.
STORY: Visitor sees the name and role first, reads one line of intent, then reaches LinkedIn, the CV, Spotify and the blog from one row of icons.
FIRST VIEWPORT: Slim header (brand left, theme toggle right). A centred hero card with three more cards behind it whose names (Spotify, CV, Blog) show along their lower edge: name at ~2.96rem in two lines, role one tier below, intro, the LinkedIn icon button, a hairline and hashtag chips, centred in the free height. The copyright on the bottom edge.
FORM: Idea · Plan · Build board was built first and withdrawn at the user's request (too colourful, too far from desktop); the standing form is the desktop page narrowed; seed key fa82a9af.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
