# Homepage — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `Main.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `Main.dc.html`;
some browsers block the scripts over file://.

Note: `vendor/react-dom.js` was intentionally not vendored here (it's
pure runtime, not a design value, and standalone-preview isn't needed
for the implementation work). To preview `Main.dc.html` live, drop the
official `react-dom@18.3.1` UMD production build into `vendor/`.

The production implementation is `../index.html` — plain static HTML/CSS,
no build step, no React. This folder is kept only so the design values
(colors, spacing, shadows) can be referenced again later.
