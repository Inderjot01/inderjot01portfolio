document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
});

function initNavigation() {
    var navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var target = document.querySelector(targetId);
            
            if (target) {
                var navHeight = document.querySelector('.navbar').offsetHeight;
                var targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                var mobileNav = document.querySelector('.nav-links');
                var hamburger = document.querySelector('.hamburger');
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('section');
        var navLinks = document.querySelectorAll('.nav-link');
        var scrollPos = window.scrollY + 150;
        
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    var animatedElements = document.querySelectorAll('.project-card, .skill-category, .education-card, .venture-card');
    
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    var style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
}

function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

function downloadResume() {
    var link = document.createElement('a');
    link.href = 'Inderjot_Singh_Litt_CV.pdf';
    link.download = 'Inderjot_Singh_Litt_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card, index) {
    card.style.transitionDelay = (index * 0.1) + 's';
});