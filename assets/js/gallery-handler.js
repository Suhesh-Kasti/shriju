// Gallery handler script
document.addEventListener('DOMContentLoaded', function() {
  // Function to load gallery images
  function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    // Colors for gallery items
    const colors = ['#fdb157', '#9473e6', '#bdecf6', '#ffbcaa', '#fb839e', '#56deb8'];

    // Create a direct array of images from the gallery folder
    // This is a more reliable approach than using the API
    const galleryImages = [
      { src: '/images/gallery/1.jpg', alt: 'Gallery Image 1' },
      { src: '/images/gallery/2.jpg', alt: 'Gallery Image 2' },
      { src: '/images/gallery/3.jpg', alt: 'Gallery Image 3' },
      { src: '/images/gallery/4.jpg', alt: 'Gallery Image 4' },
      { src: '/images/gallery/5.jpg', alt: 'Gallery Image 5' },
      { src: '/images/gallery/6.jpg', alt: 'Gallery Image 6' },
      { src: '/images/gallery/7.jpg', alt: 'Gallery Image 7' },
      { src: '/images/gallery/8.jpg', alt: 'Gallery Image 8' },
      { src: '/images/gallery/9.jpg', alt: 'Gallery Image 9' },
      { src: '/images/gallery/10.jpg', alt: 'Gallery Image 10' }
    ];

    // Use the direct array instead of fetching
    Promise.resolve(galleryImages)
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
                      <img src="${image.src}"
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
          setTimeout(() => {
            if (typeof GLightbox !== 'undefined') {
              const lightbox = GLightbox({
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

              console.log('GLightbox initialized:', lightbox);
            } else {
              console.warn('GLightbox is not available');
            }
          }, 500); // Small delay to ensure DOM is fully ready

          // Initialize hover effects
          // We'll use CSS for the hover effects instead of JavaScript
          // This is more reliable and performs better
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
