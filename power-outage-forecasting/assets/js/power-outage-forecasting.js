/* ============================================================
   Power Outage Forecasting — Portfolio JS
   Minimal: scroll-based nav highlighting + intersection
   animations only. No dependencies.
   ============================================================ */

(function () {
  'use strict';

  // ── Active nav link on scroll ──────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < 120) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Intersection Observer for section entrance ─────────────
  const observerOpts = { threshold: 0.08 };

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOpts);

  document.querySelectorAll(
    '.section, .stage-card, .impact-card, .learn-card, .insight-item, .stat-card'
  ).forEach(el => {
    el.classList.add('observe');
    sectionObserver.observe(el);
  });

  // ── Animate feature bars on entry ─────────────────────────
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.fi-bar').forEach((bar, i) => {
          bar.style.animationDelay = `${i * 0.12}s`;
          bar.style.animationPlayState = 'running';
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fi-panel').forEach(panel => {
    panel.querySelectorAll('.fi-bar').forEach(bar => {
      bar.style.animationPlayState = 'paused';
    });
    barObserver.observe(panel);
  });

  // ── Stat card counter animation ────────────────────────────
  function animateCounter(el) {
    const raw = el.getAttribute('data-target') || el.textContent.replace(/[^0-9.]/g, '');
    const target = parseFloat(raw);
    if (isNaN(target)) return;

    const suffix = el.querySelector('.stat-pct') ? '%' : '';
    const isFloat = target < 10;
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const display = isFloat
        ? current.toFixed(3)
        : Math.round(current).toLocaleString();

      // Only overwrite the text node, preserve child elements
      const valNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
      if (valNode) valNode.textContent = display;

      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = entry.target.querySelector('.stat-val');
        if (val) animateCounter(val);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-card').forEach(card => {
    counterObserver.observe(card);
  });

  // ── Smooth scroll for nav ──────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Nav highlight style injection ─────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--accent); }

    .observe {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .observe.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

})();
