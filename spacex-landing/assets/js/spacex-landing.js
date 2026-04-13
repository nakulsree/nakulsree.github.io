/* ============================================================
   SpaceX Falcon 9 Landing Prediction — Portfolio JS
   Stars generator, scroll nav, intersection reveals, counters
   ============================================================ */

(function () {
  'use strict';

  // ── Star field ──────────────────────────────────────────
  const starsEl = document.getElementById('stars');
  if (starsEl) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 140; i++) {
      const s = document.createElement('div');
      const size = Math.random() * 2.2 + 0.4;
      const opacity = Math.random() * 0.6 + 0.2;
      s.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px; height: ${size}px;
        border-radius: 50%;
        background: rgba(${Math.random() > 0.7 ? '199,125,255' : '99,73,255'},${opacity});
        animation: twinkle ${2 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite alternate;
      `;
      frag.appendChild(s);
    }
    starsEl.appendChild(frag);
  }

  // ── Inject styles ───────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      from { opacity: 0.15; transform: scale(0.8); }
      to   { opacity: 0.9;  transform: scale(1.1); }
    }
    .nav-links a.active { color: var(--violet); }
    .reveal {
      opacity: 0; transform: translateY(16px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.08s; }
    .reveal-d2 { transition-delay: 0.16s; }
    .reveal-d3 { transition-delay: 0.24s; }
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

  // ── Intersection reveals ────────────────────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });

  ['.biz-card', '.ps-step', '.eda-card', '.lc', '.mc', '.ml-setup-item', '.ml-insight']
    .forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 3 === 1) el.classList.add('reveal-d1');
        if (i % 3 === 2) el.classList.add('reveal-d2');
        io.observe(el);
      });
    });

  // ── Hero metric counters ────────────────────────────────
  const kpiObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const val = e.target.querySelector('.hm-val');
      if (!val) return;

      const raw = val.textContent.replace(/[^0-9.]/g, '');
      const target = parseFloat(raw);
      const suffix = val.querySelector('.hm-unit')?.textContent || '';
      const isFloat = target < 10 && String(target).includes('.');
      const dur = 900;
      const t0 = performance.now();

      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        const display = isFloat ? v.toFixed(1) : Math.round(v).toString();
        // Rebuild safely
        val.textContent = display + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      kpiObs.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.hm-item').forEach(k => kpiObs.observe(k));

  // ── Smooth scroll ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
