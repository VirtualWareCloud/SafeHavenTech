// ---------------------------
// SafeHavenTech JS — 2025
// ---------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Native Share Button
  const shareButton = document.querySelector('.share-button');
  if (shareButton && navigator.share) {
    shareButton.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'SafeHavenTech',
          text: 'Explore top-rated smart home security gear 🚨',
          url: window.location.href
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    });
  }

  // Fade-in on scroll animation
  const fadeInElements = document.querySelectorAll('.fade-in');
  const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(el => fadeInObserver.observe(el));

  // Hover/Click Card Effects (Optional: Add ripple or depth effect)
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovering');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovering');
    });

    card.addEventListener('mousedown', () => {
      card.classList.add('pressed');
    });

    card.addEventListener('mouseup', () => {
      card.classList.remove('pressed');
    });
  });
});

