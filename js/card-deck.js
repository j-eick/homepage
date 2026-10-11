(function () {
  "use strict";

  var CLOSE_TIMEOUT_MS = 20000;
  var cards = document.querySelectorAll(
    ".deck-contact, .deck-playlist, .deck-blog, .deck-portfolio",
  );

  var activeCard = null;
  var closeTimer = null;

  function closeActive() {
    if (!activeCard) return;
    activeCard.classList.remove("is-active");
    activeCard = null;
    clearTimeout(closeTimer);
    closeTimer = null;
  }

  function openCard(card) {
    if (activeCard === card) return;
    closeActive();
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
