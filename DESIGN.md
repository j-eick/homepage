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
    fontSize: "clamp(2.9rem, 6vw, 4.75rem)"
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
  panel: "20px"
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
  contact-panel:
    backgroundColor: "{colors.paper-blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "36px 32px"
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

### Neutral
- **Blue Paper** (#eef3f8): the page ground in the light theme.
- **White Card** (#ffffff) and **Sunk Card** (#d7e0ef): card surfaces and the base card under the deck.
- **Harbor Ink** (#0f2340), **Slate Ink** (#46577a), **Dusk Label** (#4f6587), **Dusk Hint** (#5a6f92): text from strong to quiet; both muted tones hold at least 4.5:1 on paper and white.
- **Night Board** (#0b1322), **Night Card** (#131d33), **Night Ink** (#e6edfb): the dark theme.

### Named Rules
**The One Blue Rule.** Signal Blue is the only accent. New objects get colour from it or from the neutrals, never from a second hue.
**The Quiet Ground Rule.** The ground stays paper or night in both themes; colour lives on the objects.

## Typography

**Display Font:** Space Grotesk (self-hosted, with system fallbacks)
**Body Font:** Inter (self-hosted)

**Character:** A grotesque with some attitude for the name and titles, a neutral workhorse for reading. The same pairing on every screen size.

### Hierarchy
- **Display** (700, clamp(2.9rem, 6vw, 4.75rem); on mobile clamp(2.7rem, 15vw, 3.7rem), 0.98): the name, in two lines.
- **Role** (500–600, 0.42em of display, 1.15): "Technical Operations" one tier below the name.
- **Headline** (600, 1.4rem): the contact heading.
- **Body** (400, 1.05rem, 1.65; intro capped at 480px): intro copy and descriptions.
- **Label** (500, 0.7rem, 0.08em, uppercase): deck card captions.

### Named Rules
**The Two Tiers Rule.** The name is the one large thing; the role sits a full step below it.

## Layout

From 900px: a 1280px container. The hero is a two-column grid, copy left and the card fan right, with the copy allowed to run under the fan's empty lower-left corner. The fan's layout box is its scaled size, so the copy is centred against it (scale 0.7 at 900px, 1 from 1150px). Below the hero, a single 880px column holds the contact panel.

Mobile (below 900px): one column with 26px gutters. The hero is a stack of three equal cards (white, 19px radius, soft shadow), centred on both axes in the free height between header and footer. The front card carries the name (80% of the narrow-desktop size: clamp(2.16rem, 12vw, 2.96rem)), role, intro, four 56px icon buttons in one centred row (names stay as accessible labels) and a hairline, set apart from the buttons and the chips by generous space, above a row of hashtag chips. The other two cards (Blog, Spotify) sit behind it, staggered 32px and 62px lower and tilted ±3°, so each shows its name in its lower corner; hovering any visible part of such a card brightens that card from its slightly dimmed resting tone to full surface and tightens and deepens its shadow (`0 12px 18px`) and slides it 6px further out of the stack (no outline), clicking anywhere on its visible part (or activating its name by keyboard) pulls that card out of the stack, 46px further out along its tilt (0.24s, easing out), then lays it on top with a slower spring (0.62s) while the old front card slides back into the slot the chosen card left (the tilt and spring are the deck's own). The two cards behind slide out once on load, Spotify first after 0.9s, then Blog after 1.15s, so the front card is seen alone first (not under reduced motion). The deck and the contact panel are not shown, and there is no menu. The copyright sits on the viewport's bottom edge on short pages.

## Elevation & Depth

Depth is physical: things lie on a surface and cast soft, offset shadows. No glows and no hard offset shadows.

### Shadow Vocabulary
- **Deck rest** (`box-shadow: 0 14px 32px rgba(15, 35, 64, 0.14)`, stepping up to `0 28px 54px` .24 for the top card): the fan reads as a stack.
- **Deck hover** (`0 14px 28px rgba(15, 35, 64, 0.22)` plus an accent outline): marks a card without lifting it.

### Named Rules
**The Resting Weight Rule.** Hover marks an object with an outline and a deeper shadow; it never raises it above its neighbours. Only the click pulls a card out.

## Shapes

Soft, not pill-shaped: 10–12px buttons and chips, 19px deck cards, 20px for the contact panel. The deck fans by up to 13° and cards overlap; nothing else is rotated.

## Components

### Buttons
- **Shape:** 12px radius, 13px 22px padding, 0.9rem at weight 600 (primary) or 500.
- **Primary:** Harbor Ink fill, white text; hover deepens to Deep Signal and never turns the text blue.
- **Secondary / Ghost:** white fill with a hairline border, or transparent with a quieter border and muted text.
- **Mobile:** below 900px the hero links are 56px square icon buttons (LinkedIn mark; the letters CV in the display face for the CV; Spotify mark; a page with text lines and a pen for Blog; 26px glyphs) with 16px corners; the text label is visually hidden and stays as `aria-label`. Blog appears here only on mobile; on desktop it is in the header.
- **Hashtag chips (mobile):** 10px radius, hairline border, muted text at 0.85rem, in a centred wrapping list under the buttons. Placeholder topics until real interests exist; each gets an `href` to its blog articles later. Without `href` they are inert.
- **Pending links:** a link whose URL is not supplied yet has no `href`, keeps its look, shows a default cursor and `aria-disabled="true"`.

### Deck card (desktop)
- A real button covering the whole card, with a separate close button as its sibling.
- **Hover / Focus:** accent outline and a deeper shadow; focus uses the same outline via `:focus-visible`.
- **Active:** the card pulls out to the blog card's position along one spring curve (0.56s) and returns in 0.32s.

### Stack card (mobile)
- **Shape:** the same 19px card as on desktop. The front card is the hero; the other two hold a single action each ("Zum Blog", "Auf Spotify öffnen"; inert placeholders until URLs exist).
- **Tab:** the card's name with a 16px glyph, 0.8rem at weight 600 in Dusk Label, sticking out in the card's lower corner (left card bottom-left, right card bottom-right); Ink on hover and focus.
- **States:** hover or focus brightens the card, sharpens its shadow and slides it 6px further out; contents of a card behind are hidden and inert.

### Contact panel
- A wide rounded panel in a light accent wash with a 1px accent edge, centred heading, short line and three white chips.

### Navigation
- **Header:** brand left; from 900px Blog and Kontakt text links and the theme switch right, below 900px the brand and the theme switch only.
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
