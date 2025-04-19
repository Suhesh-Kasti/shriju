// JavaScript to handle search form toggle in navbar

document.addEventListener('DOMContentLoaded', function() {
  // Get the search toggle button and search form
  const searchToggle = document.querySelector('.search-toggle');
  const desktopSearchForm = document.querySelector('.desktop-search-form');
  
  if (searchToggle && desktopSearchForm) {
    // Toggle search form when clicking the search icon
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      searchToggle.classList.toggle('active');
      desktopSearchForm.classList.toggle('show');
      
      // Focus the search input when showing the form
      if (desktopSearchForm.classList.contains('show')) {
        setTimeout(() => {
          desktopSearchForm.querySelector('input').focus();
        }, 100);
      }
    });
    
    // Close search form when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-toggle') && 
          !e.target.closest('.desktop-search-form') && 
          desktopSearchForm.classList.contains('show')) {
        searchToggle.classList.remove('active');
        desktopSearchForm.classList.remove('show');
      }
    });
    
    // Close search form when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && desktopSearchForm.classList.contains('show')) {
        searchToggle.classList.remove('active');
        desktopSearchForm.classList.remove('show');
      }
    });
  }
});
