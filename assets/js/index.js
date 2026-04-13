/* ============================================================
   Portfolio Index — JS
   Nav scroll, card reveal animations, smooth scroll
   ============================================================ */

(function () {
  'use strict';

  // ── Inject transition styles ─────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--text); }

    .card-reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .card-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .card-reveal.d1 { transition-delay: 0.10s; }
    .card-reveal.d2 { transition-delay: 0.20s; }
    .card-reveal.d3 { transition-delay: 0.30s; }
    .card-reveal.d4 { transition-delay: 0.40s; }
  `;
  document.head.appendChild(style);

  // ── Nav active section highlight ─────────────────────────
  const sections = document.querySelectorAll('section[id], .hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < 100) current = s.id || '';
    });
    navLinks.forEach(a => {
      const href = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', href === current);
    });
  }, { passive: true });

  // ── Intersection observer for card reveals ────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  // Apply to project cards with stagger
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.classList.add('card-reveal');
    const delayClass = ['', 'd1', 'd2', 'd3', 'd4'][i % 5];
    if (delayClass) card.classList.add(delayClass);
    io.observe(card);
  });

  // Apply to foundations card and about section items
  ['.foundations-card', '.skills-panel', '.about-left'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('card-reveal');
      io.observe(el);
    });
  });

  // ── Hero highlight counter animation ─────────────────────
  const heroObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const val = e.target.querySelector('.hh-val');
      if (!val) return;

      const raw = val.textContent.replace(/[^0-9.%]/g, '');
      const target = parseFloat(raw);
      if (!target || isNaN(target)) return;

      const hasPct = val.textContent.includes('%');
      const dur = 1000;
      const t0 = performance.now();

      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        val.textContent = (target < 10 ? v.toFixed(1) : Math.round(v))
          + (hasPct ? '%' : '');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      heroObs.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.hh-item').forEach(el => heroObs.observe(el));

  // ── Smooth scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Subtle parallax on hero background glows ─────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const g1 = document.querySelector('.g1');
        const g2 = document.querySelector('.g2');
        if (g1) g1.style.transform = `translateY(${y * 0.12}px)`;
        if (g2) g2.style.transform = `translateY(${-y * 0.08}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

})();
