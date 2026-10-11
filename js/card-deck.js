(function () {
  "use strict";

  var CLOSE_ANIM_MS = 620; // keep in sync with .deck-card.is-closing's animation-duration
  var cards = document.querySelectorAll(
    ".deck-work, .deck-contact, .deck-playlist, .deck-blog, .deck-portfolio",
  );

  var heroEl = document.querySelector(".hero");
  var activeCard = null;
  var closingCard = null;
  var closingTimer = null;

  // drops .is-closing once its animation has finished playing
  function finishClosing(card) {
    card.classList.remove("is-closing");
    if (closingCard === card) {
      closingCard = null;
      closingTimer = null;
    }
    // the stack is whole again: its reflection comes back
    if (!activeCard && heroEl) heroEl.classList.remove("has-open");
  }

  function closeActive() {
    if (!activeCard) return;
    var card = activeCard;
    activeCard = null;

    var trigger = card.querySelector(".deck-trigger");
    trigger.setAttribute("aria-expanded", "false");
    // the close button disappears with .is-active; hand focus back to the
    // card's trigger so keyboard users don't land on <body>
    if (card.contains(document.activeElement)) trigger.focus();

    // only one card closes at a time; if another was already mid-close,
    // let it land on its final (stack) position before this one starts
    if (closingCard && closingCard !== card) {
      clearTimeout(closingTimer);
      finishClosing(closingCard);
    }

    // swapping the classes in the same tick hands off from is-active's
    // animation to is-closing's without any jump — is-closing's 0% is
    // exactly is-active's held 100% state
    card.classList.remove("is-active");
    card.classList.add("is-closing");
    closingCard = card;
    closingTimer = setTimeout(function () {
      finishClosing(card);
    }, CLOSE_ANIM_MS);
  }

  var deckInner = document.querySelector(".card-deck-inner");

  // The card opens as a modal: it grows to 1.5x and moves to the centre of the
  // viewport. The CSS can't know where the card sits on screen, so the
  // translation is worked out here, in the card's own (unscaled) pixels.
  // The centre is taken from the card's laid-out place in the fan, so the
  // idle drift and the hover slide don't skew it.
  function placeModal(card) {
    if (!deckInner) return;
    var cs = getComputedStyle(card);
    var ownTop = parseFloat(cs.getPropertyValue("--own-top")) || 0;
    var ownLeft = parseFloat(cs.getPropertyValue("--own-left")) || 0;
    // the open card is as tall as its text needs (never below its resting
    // height): lay the trigger out at its natural height, with the text
    // showing, for a moment and read it back
    var trigger = card.querySelector(".deck-trigger");
    var text = card.querySelector(".deck-text");
    var restH = card.offsetHeight;
    if (text) text.style.display = "block";
    trigger.style.bottom = "auto";
    var openH = Math.max(restH, trigger.offsetHeight);
    trigger.style.bottom = "";
    if (text) text.style.display = "";
    card.style.setProperty("--open-h", openH + "px");

    var box = deckInner.getBoundingClientRect();
    var scale = box.width / deckInner.offsetWidth || 1;
    var cx = box.left + (ownLeft + card.offsetWidth / 2) * scale;
    var cy = box.top + (ownTop + openH / 2) * scale;
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    card.style.setProperty("--modal-x", ((vw / 2 - cx) / scale).toFixed(2) + "px");
    card.style.setProperty("--modal-y", ((vh / 2 - cy) / scale).toFixed(2) + "px");
  }

  function openCard(card) {
    if (activeCard === card) return;
    closeActive();

    // the active card stops drifting; start the move from wherever the drift
    // had put it, so it doesn't jump when the animation is dropped
    var cs = getComputedStyle(card);
    card.style.setProperty(
      "--from-x",
      (parseFloat(cs.left) - (parseFloat(cs.getPropertyValue("--own-left")) || 0)).toFixed(2) + "px",
    );
    card.style.setProperty(
      "--from-y",
      (parseFloat(cs.top) - (parseFloat(cs.getPropertyValue("--own-top")) || 0)).toFixed(2) + "px",
    );
    placeModal(card);

    // re-opening a card that's still mid-close: drop the stale closing
    // state so it doesn't linger and remove .is-active again later
    if (closingCard === card) {
      clearTimeout(closingTimer);
      finishClosing(card);
    }

    card.classList.add("is-active");
    if (heroEl) heroEl.classList.add("has-open");
    card.querySelector(".deck-trigger").setAttribute("aria-expanded", "true");
    activeCard = card;
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      if (event.target.closest(".deck-close")) {
        closeActive();
        return;
      }
      openCard(card);
    });
  });

  document.addEventListener("click", function (event) {
    if (activeCard && !activeCard.contains(event.target)) {
      closeActive();
    }
  });

  window.addEventListener("resize", function () {
    if (activeCard) placeModal(activeCard);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeActive();
  });

  // Pointer depth: while the mouse moves over the hero, the fan follows it
  // a little (CSS turns --mx/--my into a few pixels and a fraction of a degree,
  // more for the top cards). Mouse only, and not under reduced motion.
  var hero = document.querySelector(".hero");
  var inner = document.querySelector(".card-deck-inner");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (hero && inner) {
    var frame = 0;
    var point = null;

    function apply() {
      frame = 0;
      var box = hero.getBoundingClientRect();
      var mx = point ? (point.x - (box.left + box.width / 2)) / (box.width / 2) : 0;
      var my = point ? (point.y - (box.top + box.height / 2)) / (box.height / 2) : 0;
      // on the hero, so the fan (inherits) and the glass plate's light share it
      hero.style.setProperty("--mx", Math.max(-1, Math.min(1, mx)).toFixed(3));
      hero.style.setProperty("--my", Math.max(-1, Math.min(1, my)).toFixed(3));
    }

    function queue() {
      if (!frame) frame = requestAnimationFrame(apply);
    }

    hero.addEventListener("pointermove", function (event) {
      if (event.pointerType !== "mouse" || reduce.matches) return;
      point = { x: event.clientX, y: event.clientY };
      queue();
    });
    hero.addEventListener("pointerleave", function () {
      point = null;
      queue();
    });
  }
})();
