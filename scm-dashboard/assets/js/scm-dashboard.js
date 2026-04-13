/* ============================================================
   SCM Intelligence Dashboard — Portfolio JS
   Scroll nav, intersection reveals, SQL snippet typing effect
   ============================================================ */

(function () {
  'use strict';

  // ── Inject animation styles ─────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--green); }
    .reveal {
      opacity: 0; transform: translateY(16px);
      transition: opacity 0.45s ease, transform 0.45s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.07s; }
    .reveal-d2 { transition-delay: 0.14s; }
    .reveal-d3 { transition-delay: 0.21s; }
  `;
  document.head.appendChild(style);

  // ── Active nav ──────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  // ── Intersection observer ───────────────────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });

  [
    '.oc-card', '.st-card', '.sql-card', '.af-card',
    '.lc', '.pl-item', '.role-card', '.schema-group', '.tp-kpi'
  ].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 3 === 1) el.classList.add('reveal-d1');
      if (i % 3 === 2) el.classList.add('reveal-d2');
      io.observe(el);
    });
  });

  // ── Tech panel KPI counter ──────────────────────────────
  const kpiObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const val = e.target.querySelector('.tp-kval');
      if (!val) return;

      const raw = val.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw);
      const suffix = val.textContent.replace(/[0-9]/g, '');
      if (!target) return;

      const dur = 900;
      const t0 = performance.now();
      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        val.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      kpiObs.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.tp-kpi').forEach(k => kpiObs.observe(k));

  // ── SQL snippet cursor blink ────────────────────────────
  const snippetObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.borderLeftColor = 'var(--green)';
      e.target.style.animation = 'none';
      snippetObs.unobserve(e.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.sql-snippet').forEach(s => snippetObs.observe(s));

  // ── Smooth scroll ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
