/* Portfolio · Beatrice Perrone
   Interazioni: lingua IT/EN, nav, reveal, anno, touch flip */

(function () {
  "use strict";

  var I18N = window.I18N || {};

  // ---- lingua ----
  function storedLang() {
    try {
      return localStorage.getItem("lang") === "en" ? "en" : "it";
    } catch (e) {
      return "it";
    }
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "it";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = I18N[key];
      if (entry && entry[lang] != null) el.textContent = entry[lang];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var entry = I18N[key];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  // ---- nav: stato al scroll ----
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

  // ---- reveal on scroll ----
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

  // ---- anno corrente ----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- riduzione movimento ----
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- touch: anteprima flip appoggiando il dito ----
  document.querySelectorAll(".tile").forEach(function (tile) {
    var startX = 0;
    var startY = 0;

    function off() {
      tile.classList.remove("flipped");
    }

    tile.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "touch") return;
      startX = e.clientX;
      startY = e.clientY;
      tile.classList.add("flipped");
    });

    tile.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "touch" || !tile.classList.contains("flipped")) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (Math.sqrt(dx * dx + dy * dy) > 12) off();
    });

    tile.addEventListener("pointerup", off);
    tile.addEventListener("pointercancel", off);
    tile.addEventListener("pointerleave", off);
  });

  // applica la lingua salvata (default italiano)
  applyLang(storedLang());
})();