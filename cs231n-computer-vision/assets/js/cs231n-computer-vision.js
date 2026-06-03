/* ============================================================
   CS231n Computer Vision — Portfolio JS
   Minimal: active nav and scroll reveals
   ============================================================ */

(function () {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--accent); }
    .reveal { opacity: 0; transform: translateY(12px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.1s; }
    .reveal-d2 { transition-delay: 0.2s; }
  `;
  document.head.appendChild(style);

  // Active nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < 110) cur = s.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  ['.cv-card', '.assignment-block', '.skill-column', '.aside-block', '.scope-item']
    .forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 2 === 1) el.classList.add('reveal-d1');
        io.observe(el);
      });
    });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
