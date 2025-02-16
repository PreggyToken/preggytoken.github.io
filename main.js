'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu functionality
    initializeMenu();
    
    // Add smooth scrolling for anchor links
    initializeSmoothScroll();
});

// Menu functionality
function initializeMenu() {
    const burger = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu-items');
    const burgerIcon = document.querySelector('.burger-icon');

    // Toggle menu function
    function toggleMenu() {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }

    // Attach click handler to burger icon
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!burger.contains(event.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            burgerIcon.classList.remove('active');
            burgerIcon.setAttribute('aria-expanded', 'false');
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                burgerIcon.classList.remove('active');
                burgerIcon.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if it's just "#"
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const copyrightYear = document.querySelector('.footer p');
    if (copyrightYear) {
        const year = new Date().getFullYear();
        copyrightYear.innerHTML = copyrightYear.innerHTML.replace(/\d{4}/, year);
    }
});
