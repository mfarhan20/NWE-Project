// Mobile menu toggle logic
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling and closing mobile menu on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Close the mobile menu if it's open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }

        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});