# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily Joschka Eickhoff's network and community: colleagues, friends, and readers of the blog who want to know who he is, what he is working on, and how to reach him. Recruiters and potential clients may also visit, but the page is a personal meeting point first, not a job application.

## Product Purpose

A personal homepage for Joschka Eickhoff, Technical Operations. It presents who he is and what he does, links to his writing (blog), projects, playlist, LinkedIn and CV, and gives a way to get in touch. Success: a visitor from his network leaves with a clear picture of both his professional role and his personality, and takes one next step (read, listen, get in touch).

## Positioning

Two things carry equal weight and belong together: the professional bridge (holds technology, product and operations together, coordinates teams and builds the supporting tools himself) and the personal side (blog, playlist, the card deck). A neighboring portfolio would not truthfully claim both from the same person.

## Operating Context

Statically hosted site, deployed via Netlify on push to `origin/main`. Content is added by the owner over time; the repository currently holds placeholder links and TODO markers for content that has not been supplied yet.

## Capabilities and Constraints

- Plain static HTML/CSS/JS (`index.html`, `css/styles.css`, `js/card-deck.js`); no build step and no framework. Stays that way.
- Currently German only. The site is intended to offer German and English; the English version and language switch are not built yet.
- The hero card deck (contact, playlist, blog, portfolio cards) is a binding, continuing element: it stays and is developed further. Interaction today: subtle hover, click pulls a card out to the blog card's position, close via outside click, Escape, or timeout; keyboard operable.
- Sections today: one hero (copy, links, card deck on desktop or a card stack on mobile) and the footer. The Fokus, Projekte and Kontakt sections were removed by the owner; there is currently no E-Mail address on the page.
- Open product facts (not yet supplied; do not invent): the owner's real interests and hobbies (the mobile hashtags are placeholders derived from the playlist, apps, blog and role), LinkedIn URL, CV PDF, Spotify profile and playlist URLs, blog URL, real contact details for the contact card, project URL for "Alarm on Drugs", second project.

## Brand Commitments

Name and role: Joschka Eickhoff, Technical Operations. Voice is first-person, plain and direct (German today). Project known so far: "Alarm on Drugs" (mobile app, Expo / React Native); it has no section on the page at the moment. Playlist is called "Alarm on Drugs" on the deck.

## Evidence on Hand

Hero copy in `index.html` (the Fokus descriptions were removed with their section). One project name (Alarm on Drugs). No testimonials, case studies, press or metrics exist; none may be fabricated.

## Product Principles

1. Professional role and personal side are equals; neither is reduced to a footnote of the other.
2. Content is real or marked as open; never invent links, contact details, projects, or claims.
3. Stay static and light; every addition must work without a build step.
4. The card deck is the signature interaction and keeps evolving, but remains keyboard- and touch-operable.
5. Bilingual by intent: new copy is written so German and English can sit side by side.

## Accessibility & Inclusion

No specific standard stated. Existing deck is keyboard operable (Enter/Space, Escape); keep that and respect reduced-motion preferences for the animated deck.
