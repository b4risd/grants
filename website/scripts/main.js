document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('yil');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? header.getBoundingClientRect().height + 12 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Forms
  const ctaForm = document.getElementById('cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('email');
      const email = emailInput && 'value' in emailInput ? emailInput.value : '';
      if (!email) return;
      alert(`Teşekkürler! ${email} adresini kaydettik.`);
      ctaForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const ad = formData.get('ad');
      const kvkk = document.getElementById('kvkk');
      if (kvkk && 'checked' in kvkk && !kvkk.checked) {
        alert('Lütfen KVKK onayını işaretleyin.');
        return;
      }
      alert(`Teşekkürler ${ad}! Mesajınızı aldık.`);
      contactForm.reset();
    });
  }
});