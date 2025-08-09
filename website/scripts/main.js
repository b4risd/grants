document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('yil');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

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
      alert(`Teşekkürler ${ad}! Mesajınızı aldık.`);
      contactForm.reset();
    });
  }
});