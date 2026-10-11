(function () {
  "use strict";

  var CLOSE_ANIM_MS = 620; // keep in sync with .deck-card.is-closing's animation-duration
  var cards = document.querySelectorAll(
    ".deck-contact, .deck-playlist, .deck-blog, .deck-portfolio",
  );

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

  function openCard(card) {
    if (activeCard === card) return;
    closeActive();

    // re-opening a card that's still mid-close: drop the stale closing
    // state so it doesn't linger and remove .is-active again later
    if (closingCard === card) {
      clearTimeout(closingTimer);
      finishClosing(card);
    }

    card.classList.add("is-active");
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
      inner.style.setProperty("--mx", Math.max(-1, Math.min(1, mx)).toFixed(3));
      inner.style.setProperty("--my", Math.max(-1, Math.min(1, my)).toFixed(3));
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
