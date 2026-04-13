/* ============================================================
   CS229 Independent Study — Portfolio JS
   Minimal: active nav, scroll reveals, topic hover
   ============================================================ */

(function () {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--gold); }
    .reveal {
      opacity: 0; transform: translateY(12px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.1s; }
    .reveal-d2 { transition-delay: 0.2s; }
    .topic-entry:hover .te-num { color: var(--amber); }
    .topic-entry:hover .te-title { color: var(--cream); }
  `;
  document.head.appendChild(style);

  // ── Active nav ──────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top < 110) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });

  // ── Reveal on scroll ────────────────────────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });

  ['.topic-entry', '.fg-card', '.aside-block', '.hs-item']
    .forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 2 === 1) el.classList.add('reveal-d1');
        io.observe(el);
      });
    });

  // ── Smooth scroll ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ── Stat counter ───────────────────────────────────────
  const kpiObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const val = e.target.querySelector('.hs-num');
      if (!val) return;
      const raw = val.textContent.replace(/[^0-9.]/g, '');
      const target = parseFloat(raw);
      const unit = val.querySelector('.hn-unit')?.textContent || '';
      if (!target) return;
      const isFloat = String(target).includes('.');
      const dur = 800;
      const t0 = performance.now();
      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        val.textContent = (isFloat ? v.toFixed(1) : Math.round(v)) + unit;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      kpiObs.unobserve(e.target);
    });
  }, { threshold: 0.7 });

  document.querySelectorAll('.hs-item').forEach(el => kpiObs.observe(el));

})();
