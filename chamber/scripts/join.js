document.addEventListener('DOMContentLoaded', () => {
    // Animate membership cards on load
    const cards = document.querySelectorAll('.membership-card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, i * 150); // stagger animation by 150ms
    });
  
    // Open modal when clicking on "Learn More" links
    const openModalLinks = document.querySelectorAll('.open-modal-link');
    const modals = document.querySelectorAll('.modal');
  
    openModalLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = link.closest('.membership-card').dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('active');
          modal.setAttribute('tabindex', '0');
          modal.focus();
        }
      });
    });
  
    // Close modal when clicking the close button or clicking outside the modal content
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close');
  
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
  
      modal.addEventListener('click', (event) => {
        // Close if clicking outside modal-content area
        if (event.target === modal) {
          modal.classList.remove('active');
        }
      });
  
      // Optional: close modal on Escape key press
      modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          modal.classList.remove('active');
        }
      });
    });
  
    // Set timestamp on hidden input
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
      timestampInput.value = new Date().toISOString();
    }
  });
  