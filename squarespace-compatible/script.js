
// Mobile Navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}

// Form Handlers
function handleNewsletterSignup(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message (replace with actual form submission)
    showToast('Thank you for subscribing! You\'ll receive updates about our progress.', 'success');
    form.reset();
}

function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message (replace with actual form submission)
    showToast('Message sent! We\'ll get back to you within 24 hours.', 'success');
    form.reset();
}

function showDonationForm() {
    showToast('Secure donation processing will be integrated here.', 'info');
}

function showContactForm() {
    scrollToSection('get-involved');
    // Focus on contact form
    setTimeout(() => {
        const contactForm = document.querySelector('.contact-form input');
        if (contactForm) {
            contactForm.focus();
        }
    }, 1000);
}

// Toast Notification System
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${getToastIcon(type)}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add toast styles if not already added
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                min-width: 300px;
                animation: toastSlideIn 0.3s ease-out;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
            }
            
            .toast-success { border-left: 4px solid #059669; }
            .toast-info { border-left: 4px solid #2563eb; }
            .toast-warning { border-left: 4px solid #d97706; }
            .toast-error { border-left: 4px solid #dc2626; }
            
            .toast-icon {
                font-size: 1.25rem;
                flex-shrink: 0;
            }
            
            .toast-message {
                flex: 1;
                color: #374151;
                font-weight: 500;
            }
            
            .toast-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #6b7280;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .toast-close:hover {
                color: #374151;
            }
            
            @keyframes toastSlideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add toast to page
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

function getToastIcon(type) {
    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '❌'
    };
    return icons[type] || icons.info;
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.card, .stat, .timeline-event, .level-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Navigation Link Active States
function updateActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current link
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation active states
    updateActiveNavLinks();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const header = document.querySelector('.header');
        
        if (mobileNav.classList.contains('active') && 
            !header.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle form submissions
    const newsletterForm = document.querySelector('.newsletter-form');
    const contactForm = document.querySelector('.contact-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSignup);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Add CSS for active nav links
const navStyles = document.createElement('style');
navStyles.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: var(--primary-color);
        border-radius: 1px;
    }
`;
document.head.appendChild(navStyles);
