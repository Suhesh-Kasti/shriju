// Initialize Parallax.js
$(document).ready(function() {
  // Make sure Parallax.js is loaded
  if (typeof Parallax === 'undefined') {
    console.warn('Parallax.js is not loaded. Parallax effects will not work.');
    return;
  }

  console.log('Parallax.js is loaded and ready to use.');

  // Initialize background text parallax
  const bgTextElements = document.querySelectorAll('.bg-text');
  if (bgTextElements.length > 0) {
    bgTextElements.forEach(function(element) {
      try {
        new Parallax(element.parentElement, {
          relativeInput: true,
          clipRelativeInput: true,
          hoverOnly: false,
          scalarX: 2,
          scalarY: 2
        });
      } catch (error) {
        console.warn('Error initializing background text parallax:', error);
      }
    });
  }

  // Initialize author background image parallax on homepage
  const authorParallax = document.getElementById('author-parallax');
  if (authorParallax) {
    try {
      new Parallax(authorParallax, {
        relativeInput: true,
        clipRelativeInput: false,
        hoverOnly: false,
        scalarX: 5,
        scalarY: 5
      });
    } catch (error) {
      console.warn('Error initializing author background image parallax:', error);
    }
  }
  // Initialize parallax effect for the 404 page
  if (document.getElementById('scene')) {
    try {
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: true,
        hoverOnly: false
      });
    } catch (error) {
      console.warn('Error initializing parallax for 404 page:', error);
    }
  }

  // Initialize parallax backgrounds
  var parallaxBgs = document.querySelectorAll('.parallax-bg');
  if (parallaxBgs.length > 0) {
    parallaxBgs.forEach(function(bg) {
      try {
        new Parallax(bg, {
          relativeInput: false,
          clipRelativeInput: false,
          hoverOnly: false
        });
      } catch (error) {
        console.warn('Error initializing parallax background:', bg, error);
      }
    });
  }

  // Initialize hero parallax
  var heroParallax = document.getElementById('parallax');
  if (heroParallax) {
    try {
      var heroParallaxInstance = new Parallax(heroParallax, {
        relativeInput: true,
        clipRelativeInput: true,
        hoverOnly: false,
        scalarX: 10,
        scalarY: 10
      });
    } catch (error) {
      console.warn('Error initializing hero parallax:', error);
    }
  }

  // Initialize page title parallax
  var pageTitleParallax = document.getElementById('page-title-parallax');
  if (pageTitleParallax) {
    try {
      var pageTitleParallaxInstance = new Parallax(pageTitleParallax, {
        relativeInput: true,
        clipRelativeInput: true,
        hoverOnly: false,
        scalarX: 5,
        scalarY: 5
      });
    } catch (error) {
      console.warn('Error initializing page title parallax:', error);
    }
  }

  // Initialize all elements with class 'page-title-parallax'
  var allPageTitleParallax = document.querySelectorAll('.page-title-parallax');
  if (allPageTitleParallax.length > 0) {
    allPageTitleParallax.forEach(function(element) {
      if (element.id !== 'page-title-parallax') { // Skip the one we already initialized
        try {
          new Parallax(element, {
            relativeInput: true,
            clipRelativeInput: true,
            hoverOnly: false,
            scalarX: 5,
            scalarY: 5
          });
        } catch (error) {
          console.warn('Error initializing parallax for element:', element, error);
        }
      }
    });
  }

  // Log success message
  console.log('Parallax effects initialized successfully');
});
