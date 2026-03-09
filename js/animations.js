// ================================================================
// MGlobal — Scroll Animations & UI Interactions
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. SCROLL PROGRESS BAR ──────────────────────────────────
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct    = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = scrollPct + '%';
    });
  }

  // ── 2. NAV SHADOW ON SCROLL ──────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ── 3. BACK TO TOP BUTTON ────────────────────────────────────
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 4. INTERSECTION OBSERVER — SCROLL REVEAL ────────────────
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const revealEls = document.querySelectorAll(revealClasses.join(','));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));

  // ── 5. STAGGER CHILDREN WITHIN .stagger PARENTS ─────────────
  document.querySelectorAll('.stagger').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  // ── 6. ANIMATED STAT COUNTERS ────────────────────────────────
  // Elements with class .count-up and data-target="195" will count up
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count-up').forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target || '0');
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1800;
    const start    = performance.now();
    const isFloat  = el.dataset.float === 'true';

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current  = eased * target;

      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    }
    requestAnimationFrame(step);
  }

  // ── 7. SMOOTH ACTIVE NAV LINK HIGHLIGHT ─────────────────────
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active-nav'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active-nav');
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  // ── 8. IFRAME LAZY LOAD (template previews) ──────────────────
  document.querySelectorAll('iframe[data-src]').forEach(iframe => {
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          iframe.src = iframe.dataset.src;
          iframeObserver.unobserve(iframe);
        }
      });
    }, { threshold: 0.1 });
    iframeObserver.observe(iframe);
  });

  // ── 9. FLOATING LABEL INPUTS ─────────────────────────────────
  document.querySelectorAll('.float-label-group input, .float-label-group textarea').forEach(input => {
    input.addEventListener('focus',  () => input.parentElement.classList.add('focused'));
    input.addEventListener('blur',   () => {
      if (!input.value) input.parentElement.classList.remove('focused');
    });
    if (input.value) input.parentElement.classList.add('focused');
  });

});
