// Custom Cursor Animation
// Only for desktop devices

document.addEventListener('DOMContentLoaded', function() {
  // Only initialize on desktop
  if (window.innerWidth >= 992) {
    // Create cursor elements
    const cursorIcecream = document.createElement('div');
    cursorIcecream.className = 'cursor-icecream';

    // Create ice cream scoop
    const icecreamScoop = document.createElement('div');
    icecreamScoop.className = 'icecream-scoop';

    // Create sprinkles
    const sprinkles = document.createElement('div');
    sprinkles.className = 'sprinkles';
    icecreamScoop.appendChild(sprinkles);

    // Create drips
    const drip1 = document.createElement('div');
    drip1.className = 'drip drip-1';
    icecreamScoop.appendChild(drip1);

    const drip2 = document.createElement('div');
    drip2.className = 'drip drip-2';
    icecreamScoop.appendChild(drip2);

    // Create cherry
    const cherry = document.createElement('div');
    cherry.className = 'cherry';
    icecreamScoop.appendChild(cherry);

    // Assemble ice cream cursor
    cursorIcecream.appendChild(icecreamScoop);
    document.body.appendChild(cursorIcecream);

    // Create outer glow ring
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorRing);

    // Variables for cursor position
    let cursorX = 0;
    let cursorY = 0;
    let icecreamX = 0;
    let icecreamY = 0;
    let ringX = 0;
    let ringY = 0;

    // Trail effect variables
    let trailTimeout;
    const trailColors = [
      'cursor-color-1', // Primary
      'cursor-color-2', // Secondary
      'cursor-color-3', // Pink
      'cursor-color-4', // Light blue
      'cursor-color-5'  // Yellow
    ];

    // Update cursor position
    document.addEventListener('mousemove', function(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;

      // Create trail effect with reduced frequency
      if (trailTimeout) clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => {
        // Only create trail when mouse is moving at a certain speed
        const speed = Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2));
        if (speed > 5) {
          createTrailDot(cursorX, cursorY);
        }
      }, 40);
    });

    // Create trail dot
    function createTrailDot(x, y) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';

      // Add random color class
      const randomColorClass = trailColors[Math.floor(Math.random() * trailColors.length)];
      trail.classList.add(randomColorClass);

      trail.style.left = x + 'px';
      trail.style.top = y + 'px';

      document.body.appendChild(trail);

      // Remove trail dot after animation completes
      setTimeout(() => {
        if (trail && trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 1500);
    }

    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .btn, .nav-link, .portfolio-item, .gallery-item, .filter-item, .social-icons a');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('cursor-hover');
        cursorIcecream.classList.add('cursor-hover');
      });

      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('cursor-hover');
        cursorIcecream.classList.remove('cursor-hover');
      });
    });

    // Mouse down effect
    document.addEventListener('mousedown', () => {
      cursorRing.classList.add('cursor-down');
      cursorIcecream.classList.add('cursor-down');
    });

    document.addEventListener('mouseup', () => {
      cursorRing.classList.remove('cursor-down');
      cursorIcecream.classList.remove('cursor-down');
    });

    // Random flavor change
    const flavors = [
      'linear-gradient(135deg, #ff9fb0 0%, #ff6b8b 100%)', // Strawberry
      'linear-gradient(135deg, #a5d8ff 0%, #5fb8ff 100%)', // Blueberry
      'linear-gradient(135deg, #ffcf5c 0%, #fdb157 100%)', // Mango
      'linear-gradient(135deg, #c1f0c1 0%, #7dde7d 100%)', // Mint
      'linear-gradient(135deg, #d8c5f7 0%, #9473e6 100%)'  // Grape
    ];

    // Change flavor occasionally
    setInterval(() => {
      const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
      icecreamScoop.style.background = randomFlavor;
    }, 5000);

    // Animation loop for smooth cursor movement
    function animateCursor() {
      // Smooth movement for ice cream
      icecreamX += (cursorX - icecreamX) * 0.2;
      icecreamY += (cursorY - icecreamY) * 0.2;

      // Smoother movement for ring
      ringX += (cursorX - ringX) * 0.1;
      ringY += (cursorY - ringY) * 0.1;

      // Apply positions
      cursorIcecream.style.left = icecreamX + 'px';
      cursorIcecream.style.top = icecreamY + 'px';

      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';

      // Continue animation
      requestAnimationFrame(animateCursor);
    }

    // Start animation
    animateCursor();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursorIcecream.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursorIcecream.style.opacity = '1';
      cursorRing.style.opacity = '0.8';
    });

    // Handle window resize - disable on smaller screens
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) {
        cursorIcecream.style.display = 'none';
        cursorRing.style.display = 'none';
        document.body.style.cursor = 'auto';

        interactiveElements.forEach(el => {
          el.style.cursor = 'pointer';
        });
      } else {
        cursorIcecream.style.display = 'block';
        cursorRing.style.display = 'block';
        document.body.style.cursor = 'none';

        interactiveElements.forEach(el => {
          el.style.cursor = 'none';
        });
      }
    });
  }
});
