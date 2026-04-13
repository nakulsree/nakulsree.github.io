/* ============================================================
   EV Charging Intelligence — Portfolio JS
   Scroll nav, intersection animations, utilization bars
   ============================================================ */

(function () {
  'use strict';

  // ── Inject animation styles ──────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--orange); }

    .reveal {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .reveal.in-view {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-delay-1 { transition-delay: 0.08s; }
    .reveal-delay-2 { transition-delay: 0.16s; }
    .reveal-delay-3 { transition-delay: 0.24s; }
    .reveal-delay-4 { transition-delay: 0.32s; }
  `;
  document.head.appendChild(style);

  // ── Active nav on scroll ─────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // ── Intersection observer for scroll reveals ─────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  // Tag cards and blocks for reveal
  const revealSelectors = [
    '.ds-card', '.kpi', '.module-card', '.math-card',
    '.finding-card', '.lc', '.ctx-card', '.fe-chip',
    '.model-block', '.results-col', '.section-intro'
  ];
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 4 === 1) el.classList.add('reveal-delay-1');
      if (i % 4 === 2) el.classList.add('reveal-delay-2');
      if (i % 4 === 3) el.classList.add('reveal-delay-3');
      io.observe(el);
    });
  });

  // ── KPI counter animation ─────────────────────────────────
  function animateKPI(el) {
    const raw = el.textContent.replace(/[^0-9.]/g, '');
    const target = parseFloat(raw);
    if (!target) return;

    const prefix = el.textContent.startsWith('$') ? '$' : '';
    const suffix = el.textContent.endsWith('K') ? 'K' : '';
    const isFloat = target < 10;
    const dur = 1000;
    const t0 = performance.now();

    function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      const v = target * (1 - Math.pow(1 - p, 3));
      el.textContent = prefix + (isFloat ? v.toFixed(2) : Math.round(v).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const kpiObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateKPI(e.target.querySelector('.kpi-val') || e.target);
        kpiObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.kpi').forEach(k => kpiObs.observe(k));

  // ── Animate utilization bars on entry ───────────────────
  const barIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.uv-bar').forEach((bar, i) => {
          const h = bar.style.getPropertyValue('--h');
          bar.style.setProperty('--h', '0%');
          setTimeout(() => { bar.style.setProperty('--h', h); }, i * 120);
        });
        barIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.util-visual').forEach(v => barIO.observe(v));

  // ── Smooth scroll ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
