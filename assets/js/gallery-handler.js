// Gallery handler script
document.addEventListener('DOMContentLoaded', function() {
  // Function to load gallery images
  function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    // Colors for gallery items
    const colors = ['#fdb157', '#9473e6', '#bdecf6', '#ffbcaa', '#fb839e', '#56deb8'];

    // Fetch the list of images from the gallery folder
    fetch('/api/gallery-images/index.json')
      .then(response => {
        if (!response.ok) {
          console.warn('Dynamic API endpoint not available, falling back to static JSON file');
          return fetch('/api/gallery-images.json');
        }
        return response;
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(images => {
        if (images && images.length > 0) {
          let galleryHTML = '';

          images.forEach((image, index) => {
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];

            galleryHTML += `
              <div class="col-lg-4 col-md-6 col-sm-6 mb-4 gallery-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="gallery-card" style="--card-color: ${color}">
                  <div class="gallery-image-wrapper">
                    <a href="${image.src}" class="glightbox" data-gallery="gallery">
                      <img src="${image.webp || image.src}"
                           alt="${image.alt || 'Gallery image'}"
                           class="img-fluid gallery-image"
                           loading="lazy">
                      <div class="gallery-overlay">
                        <div class="gallery-overlay-content">
                          <span class="gallery-zoom">
                            <i class="ti-fullscreen"></i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            `;
          });

          galleryContainer.innerHTML = galleryHTML;

          // Initialize lightbox for gallery images if GLightbox is available
          if (typeof GLightbox !== 'undefined') {
            GLightbox({
              selector: '.glightbox',
              touchNavigation: true,
              loop: true,
              openEffect: 'zoom',
              closeEffect: 'fade',
              cssEfects: {
                zoom: { in: 'zoomIn', out: 'zoomOut' },
                fade: { in: 'fadeIn', out: 'fadeOut' }
              },
              preload: true
            });
          }

          // Add hover animations to gallery items
          const galleryItems = document.querySelectorAll('.gallery-item');
          galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
              const image = this.querySelector('.gallery-image');
              if (image) {
                image.style.transform = 'scale(1.05)';
              }
            });

            item.addEventListener('mouseleave', function() {
              const image = this.querySelector('.gallery-image');
              if (image) {
                image.style.transform = 'scale(1)';
              }
            });
          });
        } else {
          galleryContainer.innerHTML = '<div class="col-12 text-center"><p>No images found in the gallery. Please add some images to the static/images/gallery folder.</p></div>';
        }
      })
      .catch(error => {
        console.error('Error loading gallery images:', error);
        galleryContainer.innerHTML = `<div class="col-12 text-center">
          <p>Error loading gallery images: ${error.message}</p>
          <p>Please check if there are images in the static/images/gallery folder.</p>
        </div>`;
      });
  }

  // Load gallery images
  loadGalleryImages();
});
