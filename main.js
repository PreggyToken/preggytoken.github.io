'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu functionality
    initializeMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScroll();
});

function initializeMenu() {
    const burger = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu-items');

    burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!burger.contains(event.target) && menu.classList.contains('active')) {
            closeMenu();
        }
    });

    function toggleMenu() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        const isExpanded = burger.classList.contains('active');
        burger.setAttribute('aria-expanded', isExpanded);
    }

    function closeMenu() {
        burger.classList.remove('active');
        menu.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    }
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Prevent zoom on double tap for mobile devices
document.addEventListener('dblclick', function(e) {
    e.preventDefault();
}, { passive: false });
