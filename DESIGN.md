---
name: Joschka Eickhoff — Homepage
description: A personal homepage for Technical Operations: blue paper, one signal blue, a fanned card deck from 900px and a centred hero below it.
colors:
  ink: "#0f2340"
  ink-soft: "#46577a"
  muted: "#4f6587"
  muted-soft: "#5a6f92"
  paper-blue: "#eef3f8"
  surface: "#ffffff"
  surface-sunk: "#d7e0ef"
  signal-blue: "#2f5fd6"
  signal-blue-deep: "#16306e"
  night: "#0b1322"
  night-surface: "#131d33"
  night-ink: "#e6edfb"
  night-accent: "#7da2ff"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.32rem, 4.8vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-mobile:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 15vw, 3.7rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  chip: "10px"
  button: "12px"
  deck: "19px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-deep}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  deck-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.deck}"
    padding: "20px"
---

# Design System: Joschka Eickhoff — Homepage

## Overview

**Creative North Star: "The Pinned Board"**

One person's working surface: things placed where they can be picked up. On a wide screen the surface is blue paper and the contents are a fanned deck of cards that pull out toward you. Below 900px the same page runs in one column with a centred hero and the deck is not shown. The two share everything: paper, type, one accent, both themes.

The tone is direct and quiet. Colour is rare: one signal blue on a cool, low-chroma ground, and the portfolio card as the single saturated object.

**Key Characteristics:**
- One composition logic, two forms: a fan from 900px up; below it the hero is itself a small stack of cards you can bring forward.
- The phone is the desktop page narrowed, not a second look: same fonts, colours, buttons and panel.
- Tokens-only theming: blue paper by day, a night board by night.
- Motion is spring-like and rare: the card pull-out on desktop, nothing animates on mobile.

## Colors

A cool, low-chroma ground with one signal blue.

### Primary
- **Signal Blue** (#2f5fd6): the accent. Role word in the title, focus ring, hover on links, portfolio card start.
- **Deep Signal** (#16306e): the end of the portfolio gradient and the primary button's hover fill.
- **Night Signal** (#7da2ff): the accent in the dark theme.

### Secondary (mobile artifacts only)
- **Warm Amber** (#e8832a, dark #ffa557): the dot on the card that lies on top, the lit underline of the brand's words, the `#` of the hashtags, the Blog glyph and tile, and a soft glow in the page's lower-left corner.
- **Spotify Green** (#17a348, dark #3ddc84): the Spotify mark on the link, the tab and the card tile.

### Neutral
- **Blue Paper** (#eef3f8): the page ground in the light theme.
- **White Card** (#ffffff) and **Sunk Card** (#d7e0ef): card surfaces.
- **Harbor Ink** (#0f2340), **Slate Ink** (#46577a), **Dusk Label** (#4f6587), **Dusk Hint** (#5a6f92): text from strong to quiet; both muted tones hold at least 4.5:1 on paper and white.
- **Night Board** (#0b1322), **Night Card** (#131d33), **Night Ink** (#e6edfb): the dark theme.

### Named Rules
**The One Blue Rule.** Signal Blue is the only accent for surfaces, fills and text. A warm amber (#e8832a; #ffa557 in dark) and the Spotify green (#17a348; #3ddc84 in dark) exist only for small marks, glyphs and washes (the hashtag `#`, the icon glyphs of the CV, Spotify and Blog buttons, the mobile card artifacts); they never fill a button or carry text.
**The Quiet Ground Rule.** The ground stays paper or night in both themes; colour lives on the objects.

## Typography

**Display Font:** Space Grotesk (self-hosted, with system fallbacks)
**Body Font:** Inter (self-hosted)

**Character:** A grotesque with some attitude for the name and titles, a neutral workhorse for reading. The same pairing on every screen size.

### Hierarchy
- **Display** (700, clamp(2.9rem, 6vw, 4.75rem); on mobile clamp(2.7rem, 15vw, 3.7rem), 0.98): the name, in two lines.
- **Role** (500–600, 0.525em of display, 1.15): "Technical Operations" one tier below the name.
- **Headline** (600, 1.4rem): the contact heading.
- **Body** (400, 1.05rem, 1.65; intro capped at 480px): intro copy and descriptions.
- **Label** (500, 0.7rem, 0.08em, uppercase): deck card captions.

### Named Rules
**The Two Tiers Rule.** The name is the one large thing; the role sits a full step below it.

## Layout

From 900px: the page is a column (header, hero, footer on the bottom edge) and the hero fills the free height, centring one group on both axes: the copy on the left and the card fan on the right, the visible group (the copy's left edge to the lowest card's right edge) centred in the viewport, so the gap to the left edge and the gap to the right edge are equal. The fan's layout box is its scaled size (0.91 at 900px, 1 from 1150px), 36px from the copy's column. The copy carries four bare icons (LinkedIn, CV, Spotify, Blog; no fill or border, 44px hit area) and, directly under them with no hairline, the hashtag chips (left-aligned, wrapping within the intro's width). There is no contact panel.

Mobile (below 900px): one column with 26px gutters. The hero is a stack of four equal cards (white, 19px radius, soft shadow), centred on both axes in the free height between header and footer. The front card carries the name (80% of the narrow-desktop size: clamp(2.16rem, 12vw, 2.96rem)), role, intro, the LinkedIn icon button (name stays as accessible label) and a hairline, set apart from the buttons and the chips by generous space, above a row of hashtag chips. The other three cards sit behind it in three slots, staggered 32px, 62px and 92px lower (Spotify right and tilted 3°, CV in the middle and flat, Blog left and tilted -3°), so each shows its name in its lower corner (Spotify right, CV and Blog left); hovering any visible part of such a card brightens that card from its slightly dimmed resting tone to full surface and tightens and deepens its shadow (`0 12px 18px`) and slides it 6px further out of the stack (no outline), clicking anywhere on its visible part (or activating its name by keyboard) pulls that card out of the stack, 46px further out along its tilt (0.24s, easing out), then lays it on top with a slower spring (0.62s) while the old front card slides back into the slot the chosen card left (the tilt and spring are the deck's own). The three cards behind slide out once on load, Spotify first after 0.9s, then CV after 1.15s, then Blog after 1.4s, so the front card is seen alone first (not under reduced motion). The deck is not shown, and there is no menu. The copyright sits on the viewport's bottom edge on short pages.

## Elevation & Depth

Depth is physical: things lie on a surface and cast soft, offset shadows. No glows and no hard offset shadows.

### Shadow Vocabulary
- **Deck rest** (`0 3px 0 0` slab edge, `0 7px 9px -5px` at .22, a 1px white inner top edge; hover `0 10px 12px -6px` at .3): close shadows only. The cards lie on the glass; they do not float above it.
- **Deck hover** (`0 18px 28px rgba(15, 35, 64, 0.42)`, with a brighter surface and a 4px/6px slide along the cascade; no outline): marks a card without raising it above its neighbours.

### Glass plate (desktop)

The hero group (copy and fan) stands on one pane of glass that lies on the floor in perspective: from above it is a trapezoid (`perspective(1250px) rotateX(60deg)`), its far edge behind the lower part of the group, its near edge just below the cards. It has a bright rim, a slab edge along the near side and a soft shadow on the floor, and a band of light slides across it opposite to the pointer (`--mx`, set on `.hero` by `card-deck.js`). It is two pseudo-elements of `.hero`, grid items spanning both columns at the group's bottom, so it follows the group at every width; on narrow windows `.page` clips what runs past the viewport. Only the pane is 3D: the cards and type stay flat and keep their z-index logic. The copy and the fan are mirrored on it (`-webkit-box-reflect`, Blink and WebKit; Firefox shows none): the icons and tags of the copy only: the cards are not mirrored, because three rows fill the plate down to its front edge and a mirror image would land beyond the glass. It is the real element mirrored, so drift, pointer depth and hover follow; while a card is open (`.hero.has-open`) the fan's reflection is off (`initial`; Blink does not accept `none`). The light lies on the pane, beneath type and fan, so it never washes out text. Tokens `--glass-*` have dark values. Not on mobile.

### Named Rules
**The Resting Weight Rule.** Hover marks an object by brightening it, sharpening its shadow and sliding it a few pixels along its stack; it never raises it above its neighbours. Only the click pulls a card out.

## Shapes

Soft, not pill-shaped: 10–12px buttons and chips, 19px deck cards,. The desktop deck is a cascade tilted from -4° to +4° in steps of 2°; on mobile the stacked cards tilt ±3°. Nothing else is rotated.

## Components

### Buttons
- **Shape:** 12px radius, 13px 22px padding, 0.9rem at weight 600 (primary) or 500.
- **Primary:** Harbor Ink fill, white text; hover deepens to Deep Signal and never turns the text blue.
- **Secondary / Ghost:** white fill with a hairline border, or transparent with a quieter border and muted text.
- **Mobile:** below 900px the one hero link left on the card is a 56px square icon button (the LinkedIn mark, 26px) with 16px corners; its text label is visually hidden and stays as `aria-label`. On desktop the four links are bare 28px glyphs without a button around them (LinkedIn in ink, CV in Signal Blue, Spotify green, Blog warm), in one row, with a 44px hit area and a 2px lift on hover; on mobile CV, Spotify and Blog are cards.
- **Hashtag chips:** 10px radius, hairline border, muted text at 0.85rem, in a wrapping list under the buttons (centred on mobile, left-aligned on desktop, never wider than the intro). Placeholder topics until real interests exist; each gets an `href` to its blog articles later. Without `href` they are inert.
- **Pending links:** a link whose URL is not supplied yet has no `href`, keeps its look, shows a default cursor and `aria-disabled="true"`.

### Deck card (desktop)
- A real button covering the whole card, with a separate close button as its sibling.
- **Layering:** the five cards stand on the right side of the glass plate in two rows, drawn at 85% of the 270×174 base size (`--card-scale`; the open card still grows to 1.5x of the full size). In front, nearest the plate's front edge, Blog and Bio side by side, the left one reaching over part of the reflection of the round icons, and Playlist at the right edge, lying flat (no tilt) and pushed out so that it hangs over the plate's corner. Behind them, set back on the plate, Aktuelle Beschäftigung and Portfolio, each turned about 20° clockwise in the plane of the plate (`--deck-rot` 16° and 18°). Each card lies with its front edge on the plate and its far edge raised, as if resting on something. Three turns, the last listed one applied first: the far edge stands up by `--tilt` about the card's own bottom edge (`--lift`), the card turns in the plane it lies in (`--deck-rot`), and the result takes the plate's inclination (`--plane`, 60deg), so a yawed card lifts about its own edge. The tilt is 30deg for the two at the back, 20deg for Blog, 25deg for Bio and 0 for Playlist, seen through the plate's perspective (`perspective: 1250px` on the fan's inner box, vanishing point at the plate's centre). The front row stacks above the back row; within a row the right card is on top. The three front cards are turned -2° to +2°; each card has a thin slab edge (`0 3px 0`) and a short contact shadow. The positions keep each card's name clear of the card in front of it. The four standing cards (not the flat Playlist card) have a faint mirror image under their front edge (`-webkit-box-reflect`, drawn with the card, so it takes its yaw, lift and the plate's perspective); an open card drops it. A strictly physical mirror of a card raised 20-35deg, seen at the plate's 30deg elevation, would be almost edge-on, so this is the readable version of it.
- **Idle drift:** none. The cards lie on a plate; they do not hover. (The `deck-float` keyframes remain defined but are unused.)
- **Pointer depth:** none on the cards. They do not follow the pointer; only the band of light on the glass plate does (`--mx`).
- **Resting and hover:** cards beneath rest a touch dimmer (92% surface, 8% paper). There is no hover effect: they lie still under the pointer. Keyboard focus keeps a visible ring and brightens the card to full surface (Portfolio brightens its gradient) with a crisper shadow.
- **Active:** the card opens as a modal: it grows to 1.5x, straightens to 0deg and moves to the centre of the viewport along one spring curve (0.56s); its type grows only 1.2x. It stops drifting and ignores hover and pointer depth, and its shadow is the soft one (the stack's are harder). It returns in a calm 0.62s glide (quick release, long soft landing, no overshoot) and slips beneath the cards above it about two thirds of the way home. "Aktuelle Beschäftigung" (value "Technical Operations") is the top card, Portfolio the second; the Bio card (formerly Kontakt) is the last before the base.

### Mobile artifacts
Small marks on the same design, purely decorative and CSS only: a dot in every card's top-right corner (Warm Amber on the card that lies on top, a grey on the cards underneath, fading as a card is laid on top), and the brand `#idea - plan - build` whose three words are underlined in warm amber one after another (2.5s apart, 7.5s loop; not under reduced motion). The LinkedIn link is Signal Blue instead of ink on mobile.

### Stack card (mobile)
- **Shape:** the same 19px card as on desktop. The front card is the hero; the other three hold a single action each ("Zum Blog", "Lebenslauf (PDF)", "Auf Spotify öffnen"; inert placeholders until the destinations exist). Their glyph tiles take Warm Amber (Blog), Signal Blue (CV) and Spotify Green.
- **Tab:** the card's name with a 16px glyph, 0.8rem at weight 600 in Dusk Label, sticking out in the card's lower corner (right card bottom-right; middle and left cards bottom-left); Ink on hover and focus.
- **Focus:** the card container takes script focus after a swap without drawing a ring; the name's button keeps its Signal Blue ring for keyboard users.
- **States:** hover or focus brightens the card, sharpens its shadow and slides it 6px further out; contents of a card behind are hidden and inert.

### Navigation
- **Header:** brand left; from 900px Blog and Kontakt (both placeholders until their destinations exist) and the theme switch right, below 900px the brand and the theme switch only.
- **Theme switch:** a 36px circle in the header, showing the theme it switches to.

## Do's and Don'ts

### Do:
- **Do** keep colour on the objects and the ground quiet in both themes.
- **Do** build mobile from the desktop's own tokens; a phone layout is the same page narrowed.
- **Do** use the display face for the name and titles only and Inter for everything read.
- **Do** keep every interactive object a real button or link with a visible `:focus-visible` outline.
- **Do** self-host fonts; no third-party font requests.

### Don't:
- **Don't** add a second accent next to Signal Blue.
- **Don't** lift a desktop card on hover; marking is not pulling out. (Mobile cards behind slide 6px further out on hover.)
- **Don't** colour the cards of the mobile stack; they stay white (a touch dimmer behind), with Signal Blue only on the icon tile.
- **Don't** use hard offset shadows or glows for depth.
