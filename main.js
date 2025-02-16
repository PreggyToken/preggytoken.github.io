// Use strict mode for better error catching
'use strict';

// Improved menu toggle functionality
function toggleMenu() {
    const burger = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu-items');
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    
    burger.setAttribute('aria-expanded', !isExpanded);
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu-items');
    const burgerIcon = document.querySelector('.burger-icon');
    
    if (!burger.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
        burgerIcon.classList.remove('active');
        burgerIcon.setAttribute('aria-expanded', 'false');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const menu = document.querySelector('.menu-items');
        const burgerIcon = document.querySelector('.burger-icon');
        
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            burgerIcon.classList.remove('active');
            burgerIcon.setAttribute('aria-expanded', 'false');
        }
    }
});
