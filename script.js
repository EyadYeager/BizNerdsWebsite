// Mobile navigation menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple contact form submission handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Placeholder behavior: Simulate successful message sending
        formStatus.style.color = 'green';
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    } else {
        formStatus.style.color = 'red';
        formStatus.textContent = 'Please fill out all fields.';
    }
});