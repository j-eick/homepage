(function () {
  "use strict";

  var CLOSE_TIMEOUT_MS = 20000;
  var CLOSE_ANIM_MS = 320; // keep in sync with .deck-card.is-closing's animation-duration
  var cards = document.querySelectorAll(
    ".deck-contact, .deck-playlist, .deck-blog, .deck-portfolio",
  );

  var activeCard = null;
  var closeTimer = null;
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
    clearTimeout(closeTimer);
    closeTimer = null;

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
    activeCard = card;
    closeTimer = setTimeout(closeActive, CLOSE_TIMEOUT_MS);
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

  // role="button" divs don't get native Enter/Space -> click handling.
  // Only synthesize a click when the card itself is focused — the nested
  // .deck-close is a real <button> and already handles Enter/Space on its
  // own, so this must not also fire for it (that would both close via the
  // button's native click AND reopen via a synthesized click on the card).
  cards.forEach(function (card) {
    card.addEventListener("keydown", function (event) {
      if (event.target !== card) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
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
})();
