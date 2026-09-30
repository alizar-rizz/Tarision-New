/* TARISION - Interactive JavaScript Module */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. FAQ Accordion Logic
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other accordion items
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Tour Category Filter (Travel Page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  if (filterBtns.length > 0 && tourCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        tourCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  }

  // 4. Contact Form URL Pre-fill (e.g. ?interest=Fixtainer%20ERP)
  const urlParams = new URLSearchParams(window.location.search);
  const interestParam = urlParams.get('interest');
  const subjectParam = urlParams.get('subject');

  const interestSelect = document.getElementById('interest');
  const subjectInput = document.getElementById('subject');

  if (interestParam && interestSelect) {
    for (let option of interestSelect.options) {
      if (option.value.toLowerCase() === interestParam.toLowerCase() || option.text.toLowerCase().includes(interestParam.toLowerCase())) {
        option.selected = true;
        break;
      }
    }
  }

  if (subjectParam && subjectInput) {
    subjectInput.value = subjectParam;
  }
});
