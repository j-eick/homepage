> **Superseded (2026-10-20):** the desktop scene now follows the Claude
> Design export in `page_v2/` (see DESIGN.md, "Desktop scene v2", and
> `css/desktop.css`). This file records the earlier screenshot-based pass.

# Scene spec (desktop, dark theme)

The reference is a 1440 × 1080 screenshot mock (2026-10-20). Positions are
read from it in CSS px at that size; they are targets, not measurements of
the build. Use the names in the first column when asking for a change.

## Stage

| Element | Reading of the mock |
|---|---|
| Background | `assets/images/…office-space…jpg`, a blurred warm office (window light from the centre, plant left, desks right), covering the viewport, darkened with a warm brown veil so white type reads on it |
| Header: brand | "# idea - plan - build - evaluate", white, x 40 / y 52; the orange underline cycles as before |
| Header: nav | "Blog", "Kontakt", white |
| Header: theme toggle | white disc, ~48 px, dark glyph |
| Footer | "© 2026 · Joschka Eickhoff", light, near the bottom edge |

## Copy (left column)

| Element | Reading |
|---|---|
| Name | "Joschka / Eickhoff", white, very bold, tight, x 315–675 / y 150–310 |
| Subtitle | "Konzipieren, Bauen, Repeat", light grey, y ≈ 366 |
| Icon row | removed (desktop) |
| Hashtags | 5 dark pills, fully rounded, orange "#", white word, soft orange glow; rows 2 / 2 / 1: landingpages, entwicklung · koordination, ai-driven · multi-agent; from y ≈ 428; mirrored on the plate |

## Glass plate

Same trapezoid as before (rotateX 60°, perspective 1250 px): far edge y ≈ 505,
near edge y ≈ 840. Clear grey glass, bright rim, a warm light spot in the
middle (from the window behind).

## Cards (dark slate, orange label, white value)

| Card (code name) | Label / value | Row | Lift (tilt) | Turn | Mock box |
|---|---|---|---|---|---|
| work | AKTUELLE BESCHÄFTIGUNG / Technical Operations (2 lines) | back, left | standing | ≈ 0° | x 625–883 / y 465–625 |
| portfolio | PORTFOLIO / Projekte → | back, right | standing | ≈ 0° | x 903–1152 / y 462–622, **orange**, black value |
| network (was blog) | NETZWERK / LinkedIn →, LinkedIn badge top right | front, left | standing | ≈ 0° | x 440–748 / y 628–810 |
| contact | BIO / Kontaktdaten | front, middle | standing | ≈ 0° | x 767–1066 / y 628–812 |
| playlist | PLAYLIST / Alarm on Drugs, equalizer, Spotify dot, player keys (prev, play in orange, pause) | front, right | **flat** | ≈ +22° | x 1035–1328 / y 637–828, over the corner |

## Correction to the mock (applied)

The playlist card lies flat on the plate; the Bio card stands up from it. Where
the two overlap, **Bio must cover Playlist**, not the other way round:
playlist sits below contact in the stacking order.

## Built values (code)

Deck inner box coordinates (`--own-top` / `--own-left`), lift (`--tilt`, the
far edge raised from the plate's 60°), turn (`--deck-rot`), stacking:

| Card | top / left | tilt | turn | z |
|---|---|---|---|---|
| work | 330 / 566 | 40° | −2° | 1 |
| portfolio | 330 / 836 | 40° | 1° | 2 |
| network | 500 / 430 | 34° | −1° | 3 |
| playlist | 522 / 978 | 0° (flat) | 22° | 4 |
| contact | 500 / 728 | 34° | 1° | 5 |

All cards at `--card-scale: 0.95`. Geometry and content hold in both themes;
the photo, the slate/orange palette and the glowing pills are the dark theme.
