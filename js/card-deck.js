(function () {
  "use strict";

  // Desktop scene: the cards stand in a real 3D rig (css/desktop.css), so an
  // open card cannot simply be moved within it. Opening lifts a copy of the
  // card into a layer above the page and grows it from the card's place on
  // screen to the middle of the viewport (a FLIP animation); the card in the
  // scene waits invisibly until the copy has flown back.

  var OPEN_MS = 560;
  var CLOSE_MS = 480;
  var EASE_OPEN = "cubic-bezier(0.3, 1.18, 0.4, 1)"; // soft spring, as before
  var EASE_CLOSE = "cubic-bezier(0.22, 0.61, 0.24, 1)"; // quick release, soft landing

  var cards = document.querySelectorAll(".card-deck .deck-card");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  var layer = null;
  var open = null; // { card, copy, trigger }

  function getLayer() {
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "deck-modal-layer";
      document.body.appendChild(layer);
    }
    return layer;
  }

  // the transform that puts `to` (the copy at rest) onto `from` (the card
  // as the scene shows it): its screen box, centred and scaled to fit
  function flip(from, to) {
    var dx = from.left + from.width / 2 - (to.left + to.width / 2);
    var dy = from.top + from.height / 2 - (to.top + to.height / 2);
    var sx = from.width / to.width;
    var sy = from.height / to.height;
    return (
      "translate(" + dx + "px, " + dy + "px) scale(" + sx + ", " + sy + ")"
    );
  }

  function openCard(card) {
    if (open && open.card === card) return;
    if (open) closeCard(true);

    var trigger = card.querySelector(".deck-trigger");
    var from = card.getBoundingClientRect();

    var copy = card.cloneNode(true);
    copy.classList.add("is-modal");
    copy.setAttribute("role", "dialog");
    copy.setAttribute("aria-modal", "false");
    copy.setAttribute(
      "aria-label",
      (card.querySelector(".deck-value") || {}).textContent || "Karte"
    );
    // the copy's trigger is no longer a button that opens anything
    var copyTrigger = copy.querySelector(".deck-trigger");
    copyTrigger.removeAttribute("aria-expanded");
    copyTrigger.setAttribute("tabindex", "-1");
    // the size variables come from the card's own class (--w / --h)
    getLayer().appendChild(copy);

    card.classList.add("is-lifted");
    trigger.setAttribute("aria-expanded", "true");
    open = { card: card, copy: copy, trigger: trigger };

    var to = copy.getBoundingClientRect();
    if (!reduce.matches) {
      copy.animate(
        [
          { transform: flip(from, to), opacity: 0.6 },
          { transform: "none", opacity: 1 }
        ],
        { duration: OPEN_MS, easing: EASE_OPEN }
      );
    }

    var close = copy.querySelector(".deck-close");
    if (close) {
      close.addEventListener("click", function (event) {
        event.stopPropagation();
        closeCard();
      });
      close.focus({ preventScroll: true });
    }
  }

  // instant: drop the copy at once (another card is opening)
  function closeCard(instant) {
    if (!open) return;
    var o = open;
    open = null;
    o.trigger.setAttribute("aria-expanded", "false");

    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      o.copy.remove();
      o.card.classList.remove("is-lifted");
    }
    var hadFocus = o.copy.contains(document.activeElement);

    if (instant || reduce.matches) {
      done();
    } else {
      var to = o.copy.getBoundingClientRect();
      // the card is hidden but laid out: its box is where the copy lands
      var home = o.card.getBoundingClientRect();
      var anim = o.copy.animate(
        [
          { transform: "none", opacity: 1 },
          { transform: flip(home, to), opacity: 0.6 }
        ],
        { duration: CLOSE_MS, easing: EASE_CLOSE, fill: "forwards" }
      );
      anim.onfinish = done;
      // in case the animation never reports back (a hidden tab, say)
      setTimeout(done, CLOSE_MS + 80);
    }
    if (hadFocus) o.trigger.focus({ preventScroll: true });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      // the player's keys work on their own
      if (event.target.closest(".deck-player")) return;
      openCard(card);
    });
  });

  document.addEventListener("click", function (event) {
    if (!open) return;
    if (open.copy.contains(event.target)) return;
    if (open.card.contains(event.target)) return;
    closeCard();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeCard();
  });

  window.addEventListener("resize", function () {
    if (open) closeCard(true);
  });

  // the playlist card's player: play and pause switch the equalizer on and
  // off; "back" starts it again. Decorative, no audio.
  var player = document.querySelector(".card-deck .deck-player");
  if (player) {
    var eq = player.querySelector(".eq");
    var play = player.querySelector('[data-player="play"]');
    var pause = player.querySelector('[data-player="pause"]');
    var setPlaying = function (on) {
      eq.classList.toggle("on", on);
      play.classList.toggle("on", on);
      pause.classList.toggle("on", !on);
      play.setAttribute("aria-pressed", String(on));
      pause.setAttribute("aria-pressed", String(!on));
    };
    player.addEventListener("click", function (event) {
      var key = event.target.closest("[data-player]");
      if (!key) return;
      setPlaying(key.getAttribute("data-player") !== "pause");
    });
  }
})();
