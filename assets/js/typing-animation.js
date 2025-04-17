// Typing animation for subtitle
document.addEventListener('DOMContentLoaded', function() {
  console.log('Typing animation script loaded');
  const typingElement = document.getElementById('typing-effect');

  if (typingElement) {
    console.log('Typing element found');
    // Get roles from data attribute
    const rolesData = typingElement.getAttribute('data-roles');
    console.log('Roles data:', rolesData);
    const roles = rolesData ? JSON.parse(rolesData) : [];

    if (roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 120; // Fixed delay between each character typing
    const deletingDelay = 80; // Fixed delay between each character deletion
    const pauseDelay = 2000; // Delay after typing a complete word
    const newRoleDelay = 1000; // Delay before typing a new role

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        // Deleting text
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        // Schedule next iteration with fixed delay
        clearTimeout(window.typingTimeout);
        window.typingTimeout = setTimeout(typeRole, deletingDelay);
      } else {
        // Typing text
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        // Schedule next iteration with fixed delay
        clearTimeout(window.typingTimeout);
        window.typingTimeout = setTimeout(typeRole, typingDelay);
      }

      // If word is complete - pause before deleting
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end of the word
        isDeleting = true;
        // Clear any existing timeouts to prevent race conditions
        clearTimeout(window.typingTimeout);
        return window.typingTimeout = setTimeout(typeRole, pauseDelay);
      }

      // If deletion is complete - move to next word
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to next role
        // Clear any existing timeouts to prevent race conditions
        clearTimeout(window.typingTimeout);
        return window.typingTimeout = setTimeout(typeRole, newRoleDelay); // Pause before typing next word
      }
    }

    // Start the typing animation
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(typeRole, 1000);
  }
});
