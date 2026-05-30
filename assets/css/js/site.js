/* Mohammad Rezaei — site behavior */
(function () {
  "use strict";

  /* ---- Theme ---- */
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  function toggleTheme() {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  }
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  /* ---- Year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Copy email ---- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var val = btn.getAttribute("data-copy");
      var done = function () {
        var prev = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(function () { btn.textContent = prev; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(done).catch(done);
      } else { done(); }
    });
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          setTimeout(function () { el.classList.add("is-in"); }, (i % 4) * 80);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- Project filters (Work page) ---- */
  var fbtns = document.querySelectorAll("[data-filter]");
  var pcards = document.querySelectorAll("[data-project-tags]");
  if (fbtns.length && pcards.length) {
    fbtns.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");
        fbtns.forEach(function (b) { b.classList.remove("is-active"); });
        button.classList.add("is-active");
        pcards.forEach(function (card) {
          var tags = (card.getAttribute("data-project-tags") || "").split(" ");
          var show = filter === "all" || tags.indexOf(filter) !== -1;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Animated EEG / signal waveform in hero ---- */
  var canvas = document.querySelector(".signal");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, t = 0, raf;

    function accentColor() {
      var c = getComputedStyle(root).getPropertyValue("--accent").trim();
      return c || "#c8f255";
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // pseudo-ERP: a few summed gaussian-modulated sinusoids that drift
    function amp(x, phase) {
      var cx = w * (0.5 + 0.32 * Math.sin(phase * 0.6));
      var env = Math.exp(-Math.pow((x - cx) / (w * 0.16), 2));
      var fast = Math.sin(x * 0.045 + phase * 2.4);
      var slow = Math.sin(x * 0.012 - phase * 1.1);
      return env * fast * 0.7 + slow * 0.28;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      var col = accentColor();
      var mid = h * 0.6;
      // layered traces
      for (var layer = 0; layer < 2; layer++) {
        ctx.beginPath();
        var ph = t + layer * 1.7;
        for (var x = 0; x <= w; x += 3) {
          var yv = mid + amp(x, ph) * (h * 0.34) * (layer ? 0.5 : 1);
          if (x === 0) ctx.moveTo(x, yv); else ctx.lineTo(x, yv);
        }
        ctx.globalAlpha = layer ? 0.28 : 0.9;
        ctx.lineWidth = layer ? 1 : 1.7;
        ctx.strokeStyle = col;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      t += 0.018;
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw();
    } else {
      // static single frame
      draw(); cancelAnimationFrame(raf);
    }
  }
})();
