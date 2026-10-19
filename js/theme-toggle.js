(function () {
  "use strict";

  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  var COLORS = { light: "#eef3f8", dark: "#0b1322" };

  function stored() {
    try {
      var t = localStorage.getItem("theme");
      return t === "light" || t === "dark" ? t : null;
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    root.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(theme === "dark"));
    // a manual choice overrides the per-scheme pair from the markup
    metas.forEach(function (m) {
      m.removeAttribute("media");
      m.setAttribute("content", COLORS[theme]);
    });
  }

  apply(root.dataset.theme === "dark" ? "dark" : "light");

  button.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  // without a stored choice, keep following the system live
  matchMedia("(prefers-color-scheme: dark)").addEventListener(
    "change",
    function (e) {
      if (!stored()) apply(e.matches ? "dark" : "light");
    }
  );
})();
