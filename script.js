document.addEventListener('DOMContentLoaded', () => {

    // ===== Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // ===== Active Nav Link on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const activateNavLink = () => {
        let scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionTop    = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId     = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach(a => a.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink, { passive: true });

    // ===== Navbar Shadow on Scroll =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
        } else {
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
        }
    }, { passive: true });

    // ===== Fade-In on Scroll (IntersectionObserver) =====
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));

    // ===== Newsletter Form =====
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            if (input && input.value) {
                input.value = '';
                input.placeholder = '✓ Thank you for subscribing!';
                setTimeout(() => {
                    input.placeholder = 'Enter your email address';
                }, 3000);
            }
        });
    }

    // ===== Smooth counter animation for promo big number (decorative) =====
    const promoBig = document.querySelector('.promo-big-number');
    if (promoBig) {
        const promoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    promoBig.style.animation = 'fadeInBig 1s ease forwards';
                    promoObserver.unobserve(promoBig);
                }
            });
        }, { threshold: 0.2 });
        promoObserver.observe(promoBig);
    }
});
