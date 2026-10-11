(function () {
  "use strict";

  // The mobile hero is a stack of three cards. Two of them stick out behind
  // the front card with their name. Activating a name pulls that card out of
  // the stack, downward, then lays it on top while the old front card
  // slides back into the slot the chosen card left.
  var stack = document.querySelector("[data-stack]");
  if (!stack) return;
  var cards = Array.prototype.slice.call(stack.querySelectorAll(".stack-card"));
  var reduce = matchMedia("(prefers-reduced-motion: reduce)");
  var busy = false;

  function front() {
    return cards.filter(function (c) {
      return c.dataset.role === "front";
    })[0];
  }

  function render() {
    cards.forEach(function (card) {
      var isFront = card.dataset.role === "front";
      Array.prototype.forEach.call(card.children, function (child) {
        // the tab is the only reachable part of a card behind; the contents of
        // the front card are the only reachable contents
        if (child.classList.contains("stack-tab")) child.inert = isFront;
        else child.inert = !isFront;
      });
    });
  }

  function settle(card, slotRole) {
    var current = front();
    current.dataset.role = slotRole;
    card.dataset.role = "front";
    stack.removeAttribute("data-intro");
    render();
    // the tab that had focus is now inert; land on the card that came forward
    card.tabIndex = -1;
    card.focus({ preventScroll: true });
  }

  function bring(card) {
    var current = front();
    var slot = card.dataset.role;
    if (!card || card === current || busy) return;

    if (reduce.matches || !card.animate) {
      settle(card, slot);
      return;
    }
    busy = true;
    // a click during the load animation ends it, so the poses read below are
    // the cards' real slots
    stack.removeAttribute("data-intro");

    // start poses are read from the live layout, so they always match what
    // is on screen
    var fromCard = getComputedStyle(card).transform;
    var fromFront = getComputedStyle(current).transform;
    var side = slot === "left" ? -1 : 1;
    // the pull is measured from the card's own slot: 46px further out
    var start = new DOMMatrix(fromCard);
    var pulled =
      "translate(" +
      (start.m41 + side * 14) +
      "px, " +
      (start.m42 + 46) +
      "px) rotate(" +
      side * 4.5 +
      "deg)";
    var shadow = getComputedStyle(document.documentElement)
      .getPropertyValue("--shadow")
      .trim();

    card.style.transition = "none";
    current.style.transition = "none";

    // 1. pull the card out of the stack, downward and slightly outward
    var pull = card.animate(
      [
        { transform: fromCard },
        { transform: pulled },
      ],
      { duration: 240, easing: "cubic-bezier(0.25, 0.8, 0.3, 1)", fill: "forwards" },
    );
    // the front card gives a little, as if the stack were being loosened
    var give = current.animate(
      [{ transform: fromFront }, { transform: "translateY(5px) scale(0.99)" }],
      { duration: 240, easing: "cubic-bezier(0.25, 0.8, 0.3, 1)", fill: "forwards" },
    );

    pull.onfinish = function () {
      // 2. the card is clear of the stack: now it goes on top (z-order
      // switches with the roles) and the old front card drops into the slot
      pull.cancel();
      give.cancel();
      settle(card, slot);
      var toCard = getComputedStyle(card).transform;
      var toFront = getComputedStyle(current).transform;

      var lay = card.animate(
        [
          {
            transform: pulled + " scale(1.02)",
            boxShadow: "0 30px 40px rgba(" + shadow + ", 0.28)",
          },
          { transform: toCard },
        ],
        { duration: 620, easing: "cubic-bezier(0.3, 1.2, 0.4, 1)" },
      );
      var sink = current.animate(
        [{ transform: "translateY(5px) scale(0.99)" }, { transform: toFront }],
        { duration: 620, easing: "cubic-bezier(0.3, 1.1, 0.4, 1)" },
      );
      var done = 0;
      function end() {
        if (++done < 2) return;
        card.style.transition = "";
        current.style.transition = "";
        busy = false;
      }
      lay.onfinish = end;
      sink.onfinish = end;
    };
  }

  // the whole visible part of a card behind is the target, not just its
  // name; the name's button is the keyboard route and bubbles to the card
  stack.addEventListener("click", function (event) {
    var card = event.target.closest(".stack-card");
    if (!card || card.dataset.role === "front") return;
    bring(card);
  });

  render();
})();
