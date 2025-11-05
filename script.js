// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            
            // Add specific animations based on element
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'slideInRight 0.8s forwards';
            } else if (entry.target.classList.contains('education-item')) {
                entry.target.style.animation = 'fadeInLeft 0.8s forwards';
            } else if (entry.target.classList.contains('cert-card')) {
                entry.target.style.animation = 'zoomIn 0.6s forwards';
            }
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    // Observe education items
    document.querySelectorAll('.education-item').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
    
    // Observe certification cards
    document.querySelectorAll('.cert-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    // Observe thanks text
    const thanksText = document.querySelector('.thanks-text');
    if (thanksText) {
        observer.observe(thanksText);
    }
});

// Download Resume function
function downloadResume() {
    // Replace with your actual resume file URL
    const resumeUrl = 'resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Inderjot_Singh_Litt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Smooth scroll to certifications when clicked from education section
document.querySelector('.certifications-preview')?.addEventListener('click', () => {
    document.querySelector('#certifications').scrollIntoView({
        behavior: 'smooth'
    });
});

// Parallax effect for profile image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const profileImage = document.querySelector('.profile-image-container');
    
    if (profileImage) {
        const speed = 0.5;
        profileImage.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Typing effect for the title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        const originalText = titleElement.textContent;
        typeWriter(titleElement, originalText, 50);
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.timeline-dot').style.backgroundColor = '#4CAF50';
        this.querySelector('.timeline-dot').style.transform = 'scale(1.5)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.timeline-dot').style.backgroundColor = '#ffffff';
        this.querySelector('.timeline-dot').style.transform = 'scale(1)';
    });
});

// Add smooth transition for timeline dots
document.querySelectorAll('.timeline-dot').forEach(dot => {
    dot.style.transition = 'all 0.3s ease';
});

// Mobile menu toggle (if you want to add a hamburger menu)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu button
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Only add hamburger on mobile
    if (window.innerWidth <= 768) {
        navbar.querySelector('.nav-container').insertBefore(hamburger, navLinks);
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.remove();
    }
    createMobileMenu();
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('%cWelcome to my portfolio! 🚀', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore and reach out if you have any questions!', 'color: #FFC107; font-size: 14px;');