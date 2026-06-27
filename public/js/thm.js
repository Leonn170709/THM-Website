/* THM shared behaviour · highwaymen.cc */
'use strict';

// ── Theme: apply before first paint (also runs as inline script in <head>) ──
(function () {
  const saved = localStorage.getItem('thm-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = saved || preferred;
})();

document.addEventListener('DOMContentLoaded', () => {

  // ── Theme toggle ──────────────────────────────────────────────────────────
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('thm-theme', next);
      btn.setAttribute('aria-label', `Switch to ${next === 'light' ? 'dark' : 'light'} mode`);
    });
  });

  // ── Nav: scroll class + active section indicator ──────────────────────────
  const nav = document.querySelector('.nav');
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    requestAnimationFrame(() => {
      nav?.classList.toggle('scrolled', window.scrollY > 40);
      scrollTicking = false;
    });
    scrollTicking = true;
  }, { passive: true });

  // Active link via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navLinks.length) {
    const activeObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -50% 0px' });
    sections.forEach(s => activeObs.observe(s));
  }

  // ── Hamburger ─────────────────────────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.setAttribute('aria-label', 'Open navigation');
    });
  });

  // ── Scroll reveal ─────────────────────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ── Timeline dot fill ─────────────────────────────────────────────────────
  const tlObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.35 });
  document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el));

  // ── Member tag stagger ────────────────────────────────────────────────────
  const memberGrid = document.querySelector('.members-grid');
  if (memberGrid) {
    const memberObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.member-tag').forEach((tag, i) => {
          setTimeout(() => tag.classList.add('in'), i * 25);
        });
        memberObs.unobserve(e.target);
      });
    }, { threshold: 0.05 });
    memberObs.observe(memberGrid);
  }

  // ── Glass cursor-reactive specular lighting ───────────────────────────────
  // Only runs on pointer devices (pointerfine) to avoid mobile battery drain
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.glass').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--gx', `${e.clientX - r.left}px`);
        el.style.setProperty('--gy', `${e.clientY - r.top}px`);
      }, { passive: true });
      el.addEventListener('mouseleave', () => {
        el.style.setProperty('--gx', '-400px');
        el.style.setProperty('--gy', '-400px');
      }, { passive: true });
    });
  }

  // ── Hero grid parallax on scroll ──────────────────────────────────────────
  const heroGrid = document.querySelector('.hero-grid-inner');
  if (heroGrid && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      heroGrid.style.transform =
        `translateX(-50%) rotateX(70deg) translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
  }

  // ── Map last-updated timestamp ────────────────────────────────────────────
  const mapEl = document.getElementById('map-updated-time');
  if (mapEl) {
    fetch('/map-meta.json')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data?.updated) return;
        const d = new Date(data.updated);
        if (isNaN(d)) return;
        mapEl.textContent = d.toLocaleString(undefined, {
          year: 'numeric', month: 'short', day: 'numeric',
          hour: '2-digit', minute: '2-digit',
        });
      })
      .catch(() => {});
  }

  // ── Live hero stats ───────────────────────────────────────────────────────
  (function () {
    function fmtShort(n) {
      n = Math.round(n);
      if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
      if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
      return String(n);
    }
    fetch('/api/stats', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => {
        document.getElementById('stat-discord').textContent = fmtShort(data.discordMembers);
        document.getElementById('stat-blocks').textContent  = fmtShort(data.dailyBlocks);
        document.getElementById('stat-members').textContent = fmtShort(data.noviceMembers);
      })
      .catch(() => {});
  })();

  // ── Profile page nav scroll (per-page bg tint) ────────────────────────────
  const profileNav = document.getElementById('profile-nav');
  if (profileNav) {
    window.addEventListener('scroll', () => {
      profileNav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

});
