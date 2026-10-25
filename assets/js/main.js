document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Showcase Carousel
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevBtn = carousel.querySelector('.carousel-btn--prev');
    const nextBtn = carousel.querySelector('.carousel-btn--next');
    let currentIndex = 0;
    let timer = null;

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === currentIndex));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentIndex));
    };

    const startAutoPlay = () => {
      stopAutoPlay();
      timer = setInterval(() => goToSlide(currentIndex + 1), 5000);
    };

    const stopAutoPlay = () => {
      if (timer) clearInterval(timer);
    };

    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentIndex - 1); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentIndex + 1); startAutoPlay(); });
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { goToSlide(idx); startAutoPlay(); });
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();
  }

  // 4. Lightbox Gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('[data-lightbox]').forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img') || item;
        const src = item.getAttribute('data-lightbox-src') || img.getAttribute('src');
        const alt = item.getAttribute('data-lightbox-caption') || img.getAttribute('alt') || '';
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        if (lightboxCaption) {
          lightboxCaption.textContent = alt;
          lightboxCaption.style.display = alt ? 'block' : 'none';
        }
        lightbox.classList.add('is-open');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  // 5. Contact Form Submission (FormSubmit AJAX + mailto fallback)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';

      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://formsubmit.co/ajax/oriannedecoratrice@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `Nouvelle demande depuis oriannedecoratrice.com — ${payload.prenom || 'Client'}`,
            Prénom: payload.prenom,
            Email: payload.email,
            Téléphone: payload.telephone,
            Message: payload.message
          })
        });

        if (response.ok) {
          if (formStatus) {
            formStatus.textContent = 'Merci ! Votre demande a bien été envoyée à Orianne. Je vous recontacte très vite.';
            formStatus.className = 'form-status is-success';
          }
          contactForm.reset();
        } else {
          throw new Error('Submission response not ok');
        }
      } catch (err) {
        // Fallback to mailto so no message is ever lost
        const subject = encodeURIComponent(`Demande de décoration — ${payload.prenom || ''}`);
        const body = encodeURIComponent(
          `Prénom : ${payload.prenom || ''}\nEmail : ${payload.email || ''}\nTéléphone : ${payload.telephone || ''}\n\nMessage :\n${payload.message || ''}`
        );
        window.location.href = `mailto:oriannedecoratrice@gmail.com?subject=${subject}&body=${body}`;
        if (formStatus) {
          formStatus.textContent = 'Ouverture de votre messagerie pour envoyer votre demande à oriannedecoratrice@gmail.com.';
          formStatus.className = 'form-status is-success';
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
