/* ============================================================
   Bellabeat Case Study — Portfolio JS
   Scroll nav, intersection reveals, activity bar animation
   ============================================================ */

(function () {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--rose); }
    .reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.08s; }
    .reveal-d2 { transition-delay: 0.16s; }
  `;
  document.head.appendChild(style);

  // ── Nav ────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });

  // ── Intersection observer ───────────────────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });

  ['.issue-card', '.rec-card', '.lc', '.finding-block', '.ds-fact', '.r2-card', '.amg-item']
    .forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 2 === 1) el.classList.add('reveal-d1');
        io.observe(el);
      });
    });

  // ── Activity bar animation ──────────────────────────────
  const barIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.act-bar').forEach(bar => {
        bar.style.setProperty('--orig-w', bar.style.getPropertyValue('--w') || '0%');
        bar.style.width = '0%';
        requestAnimationFrame(() => {
          bar.style.transition = 'width 1.2s ease';
          bar.style.width = bar.style.getPropertyValue('--orig-w') ||
                             bar.style.getPropertyValue('--w') || '0%';
        });
      });
      barIO.unobserve(e.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.activity-breakdown').forEach(el => barIO.observe(el));

  // ── Stat counter animation ──────────────────────────────
  const statIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const val = e.target.querySelector('.hs-val');
      if (!val) return;
      const raw = val.textContent.replace(/[^0-9.]/g, '');
      const target = parseFloat(raw);
      if (!target) return;
      const suffix = val.querySelector('.hs-unit')?.textContent || '';
      const isFloat = String(target).includes('.');
      const dur = 900;
      const t0 = performance.now();
      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        val.textContent = (isFloat ? v.toFixed(2) : Math.round(v)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      statIO.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.hs-item').forEach(el => statIO.observe(el));

  // ── Smooth scroll ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
