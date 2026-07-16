// Cora Environmental — site interactions

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close nav when a link is clicked (on mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Services dropdown submenu
  var submenus = document.querySelectorAll('.has-submenu');
  submenus.forEach(function (item) {
    var btn = item.querySelector('.submenu-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Close any open dropdown when clicking outside or pressing Escape
  document.addEventListener('click', function (e) {
    submenus.forEach(function (item) {
      if (item.classList.contains('open') && !item.contains(e.target)) {
        item.classList.remove('open');
        var b = item.querySelector('.submenu-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    submenus.forEach(function (item) {
      item.classList.remove('open');
      var b = item.querySelector('.submenu-toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form (client-side only — no backend wired up)
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        note.style.color = '#b23a3a';
        note.textContent = 'Please fill in your name, email, and a brief message.';
        return;
      }

      // Simulated success (no backend here — replace with real endpoint in production)
      note.style.color = '';
      note.textContent = 'Thanks! Your message has been received. Redirecting...';
      form.reset();
      window.location.href = form.getAttribute('data-thanks-url') || '/thanks/';
    });
  }
})();
