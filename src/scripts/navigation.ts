// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.header__menu-toggle') as HTMLButtonElement;
  const mobileMenu = document.querySelector('.header__mobile-menu') as HTMLElement;

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));

    // Toggle hidden attribute
    if (isExpanded) {
      mobileMenu.setAttribute('hidden', '');
      document.body.style.overflow = ''; // Restore scroll
    } else {
      mobileMenu.removeAttribute('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    // Toggle active class for animation
    mobileMenu.classList.toggle('header__mobile-menu--active');
    menuToggle.classList.toggle('header__menu-toggle--active');
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('header__menu-toggle--active');
      mobileMenu.classList.remove('header__mobile-menu--active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) {
      mobileMenu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('header__menu-toggle--active');
      mobileMenu.classList.remove('header__mobile-menu--active');
      document.body.style.overflow = '';
    }
  });
});
