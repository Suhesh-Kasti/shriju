// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // CV button animation
  const cvButton = document.querySelector('.cv-button');
  if (cvButton) {
    cvButton.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';

      // Add a subtle pulse animation
      this.animate([
        { transform: 'translateY(-3px) scale(1)' },
        { transform: 'translateY(-3px) scale(1.03)' },
        { transform: 'translateY(-3px) scale(1)' }
      ], {
        duration: 800,
        iterations: 1
      });
    });

    cvButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  }
  // Initialize AOS with custom settings
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 50
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add parallax effect to hero section
  const parallaxElements = document.querySelectorAll('.hero-area, .page-title, .page-title-alt');

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;

      parallaxElements.forEach(element => {
        const layers = element.querySelectorAll('.layer, .bg-shape-1, .bg-shape-2, .bg-shape-3, .bg-shape-4, .bg-shape-5, .bg-shape-6, .bg-shape-7');

        layers.forEach((layer, index) => {
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrollPosition * speed);
          layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
      });
    });
  }

  // Add hover animations to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.07)';
    });
  });

  // Add animations to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    // Get the marker color
    const marker = item.querySelector('.timeline-marker');
    const markerColor = marker ? window.getComputedStyle(marker).backgroundColor : '#fdb157';

    item.addEventListener('mouseenter', function() {
      // Add a subtle shadow animation to the content
      const content = this.querySelector('.timeline-content');
      if (content) {
        content.animate([
          { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' },
          { boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)' },
          { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }
        ], {
          duration: 2000,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }

      // Add a subtle glow to the marker
      if (marker) {
        marker.animate([
          { boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)' },
          { boxShadow: `0 8px 25px ${markerColor}` },
          { boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)' }
        ], {
          duration: 2000,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }

      // Animate the marker image
      const markerImg = this.querySelector('.timeline-marker img');
      if (markerImg) {
        markerImg.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.05)' },
          { transform: 'scale(1)' }
        ], {
          duration: 2000,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }
    });

    item.addEventListener('mouseleave', function() {
      // Stop all animations
      const content = this.querySelector('.timeline-content');
      if (content) {
        const contentAnimations = content.getAnimations();
        contentAnimations.forEach(animation => animation.cancel());
      }

      if (marker) {
        const markerAnimations = marker.getAnimations();
        markerAnimations.forEach(animation => animation.cancel());
      }

      const markerImg = this.querySelector('.timeline-marker img');
      if (markerImg) {
        const markerImgAnimations = markerImg.getAnimations();
        markerImgAnimations.forEach(animation => animation.cancel());
      }
    });
  });

  // Add animations to education cards
  const educationCards = document.querySelectorAll('.education-card');
  educationCards.forEach((card, index) => {
    // Get the card's color based on its index
    const colors = ['#fdb157', '#9473e6', '#bdecf6', '#ffbcaa'];
    const cardColor = colors[index % 4];

    card.addEventListener('mouseenter', function() {
      // No need for floating animation - CSS handles the hover state smoothly

      // Add a glow effect to the icon
      const icon = this.querySelector('.education-icon');
      if (icon) {
        icon.animate([
          { boxShadow: `0 5px 15px rgba(0, 0, 0, 0.1)` },
          { boxShadow: `0 5px 25px ${cardColor}99` },
          { boxShadow: `0 5px 15px rgba(0, 0, 0, 0.1)` }
        ], {
          duration: 2500,
          iterations: Infinity,
          easing: 'ease-in-out'
        });

        // Add a subtle rotation to the icon
        icon.querySelector('i').animate([
          { transform: 'rotate(-3deg)' },
          { transform: 'rotate(3deg)' },
          { transform: 'rotate(-3deg)' }
        ], {
          duration: 4000,
          iterations: Infinity,
          easing: 'cubic-bezier(0.45, 0, 0.55, 1)'
        });
      }

      // Animate the card bubbles
      const bubbles = this.querySelectorAll('.card-bubble');
      bubbles.forEach((bubble, i) => {
        bubble.animate([
          { transform: 'scale(1)', opacity: 0.2 },
          { transform: 'scale(1.3)', opacity: 0.5 },
          { transform: 'scale(1)', opacity: 0.2 }
        ], {
          duration: 2000 + (i * 500),
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      });

      // Animate the decoration SVG
      const decoration = this.querySelector('.education-decoration svg');
      if (decoration) {
        decoration.animate([
          { transform: 'scaleX(1)' },
          { transform: 'scaleX(1.2)' },
          { transform: 'scaleX(1)' }
        ], {
          duration: 2500,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }
    });

    card.addEventListener('mouseleave', function() {
      // Stop all animations
      const animations = this.getAnimations();
      animations.forEach(animation => animation.cancel());

      const icon = this.querySelector('.education-icon');
      if (icon) {
        const iconAnimations = icon.getAnimations();
        iconAnimations.forEach(animation => animation.cancel());

        const iconI = icon.querySelector('i');
        if (iconI) {
          const iconIAnimations = iconI.getAnimations();
          iconIAnimations.forEach(animation => animation.cancel());
        }
      }

      const bubbles = this.querySelectorAll('.card-bubble');
      bubbles.forEach(bubble => {
        const bubbleAnimations = bubble.getAnimations();
        bubbleAnimations.forEach(animation => animation.cancel());
      });

      const decoration = this.querySelector('.education-decoration svg');
      if (decoration) {
        const decorationAnimations = decoration.getAnimations();
        decorationAnimations.forEach(animation => animation.cancel());
      }
    });
  });
});
