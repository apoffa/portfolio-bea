/* Portfolio — Beatrice Perrone
   Interazioni leggere: nav, reveal al scroll, anno corrente */

(function () {
  "use strict";

  // --- nav: stato al scroll ---
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // --- reveal on scroll ---
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // --- anno corrente nel footer ---
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // --- riduzione del movimento: mostra subito tutto ---
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();