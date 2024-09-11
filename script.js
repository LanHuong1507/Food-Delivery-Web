const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-navbar-menu');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
