// * Project: VK Digitals & Financial Services LLP
// * Description: Core logic for VK Digitals. Every brand deserves structure, not shortcuts.
// Security: No eval(), no innerHTML assignment, no external data ingestion.

'use strict';

// ── Nav mobile toggle ──
(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity  = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(function (s) { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(function (s) { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}());

// ── Active nav link ──
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('#')[0]; // ignore hash fragments
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}());

// ── Scroll reveal ──
(function () {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately for older browsers
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });
}());

// ── Nav scroll shadow ──
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.style.boxShadow = window.scrollY > 40 ? '0 4px 32px rgba(0,0,0,0.45)' : '';
  }, { passive: true });
}());

// ── Contact form — validation + honeypot + safe submit ──
(function () {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  // Helper: show field error
  function showError(input, message) {
    clearError(input);
    input.classList.add('field-error');
    const err = document.createElement('span');
    err.className = 'field-error-msg';
    err.textContent = message;
    err.style.cssText = 'display:block;color:#e05252;font-size:0.78rem;margin-top:0.3rem;';
    input.parentNode.appendChild(err);
  }

  function clearError(input) {
    input.classList.remove('field-error');
    const existing = input.parentNode.querySelector('.field-error-msg');
    if (existing) existing.remove();
  }

  // Validate a single field
  function validateField(input) {
    clearError(input);
    const val = input.value.trim();

    if (input.hasAttribute('required') && val === '') {
      showError(input, 'This field is required.');
      return false;
    }
    if (input.type === 'email' && val !== '') {
      // RFC 5322 simplified check
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(val)) {
        showError(input, 'Please enter a valid email address.');
        return false;
      }
    }
    if (input.type === 'tel' && val !== '') {
      // Allow digits, spaces, +, -, (, )
      const telRe = /^[\d\s+\-().]{7,20}$/;
      if (!telRe.test(val)) {
        showError(input, 'Please enter a valid phone number.');
        return false;
      }
    }
    if (input.id === 'message' && val.length < 10) {
      showError(input, 'Please enter at least 10 characters.');
      return false;
    }
    return true;
  }

  // Live validation on blur
  contactForm.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('blur', function () { validateField(this); });
    // Clear error as user types
    input.addEventListener('input', function () { clearError(this); });
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot check — bots fill hidden field, humans don't
    const honeypot = contactForm.querySelector('#hp-field');
    if (honeypot && honeypot.value !== '') {
      // Silently ignore — bot submission
      return;
    }

    // Validate all required fields
    let valid = true;
    contactForm.querySelectorAll('input, textarea').forEach(function (input) {
      if (!validateField(input)) valid = false;
    });
    if (!valid) return;

    const btn = contactForm.querySelector('[type="submit"]');
    if (!btn) return;

    const origText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async send — replace with actual fetch() to a backend/email service
    var sendTimer = setTimeout(function () {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #2ECC71, #27AE60)';
      contactForm.reset();

      var resetTimer = setTimeout(function () {
        btn.textContent = origText;
        btn.style.background = '';
        btn.disabled = false;
        sendTimer = null;
        resetTimer = null;
      }, 3500);
    }, 1200);
  });
}());
