document.addEventListener('DOMContentLoaded', () => {
    // Header animations
    anime({
        targets: '.logo',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.nav-link',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.header-actions > *',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100, {start: 400}),
        duration: 800,
        easing: 'easeOutExpo'
    });

    // Add scroll effect to header
    let lastScroll = 0;
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // Initial animations
    anime({
        targets: '.title',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500,
        delay: 500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.cta-button',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500,
        delay: 1000,
        easing: 'easeOutExpo'
    });

    // Rose animation
    const rose = document.querySelector('.rose');
    const petals = document.querySelectorAll('.petal');

    // Initial petal animation
    anime({
        targets: '.petal',
        scale: [
            { value: 0, duration: 0 },
            { value: 1, duration: 2000, delay: anime.stagger(100) }
        ],
        rotate: [
            { value: '45deg', duration: 0 },
            { value: '+=45deg', duration: 2000, delay: anime.stagger(100) }
        ],
        translateX: [
            { value: 0, duration: 0 },
            { value: anime.stagger([-20, 20]), duration: 2000 }
        ],
        translateY: [
            { value: 0, duration: 0 },
            { value: anime.stagger([-20, 20]), duration: 2000 }
        ],
        opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 2000, delay: anime.stagger(100) }
        ],
        easing: 'easeOutElastic(1, .6)',
        loop: false
    });

    // Continuous floating animation for the rose container
    anime({
        targets: '.rose-container',
        translateY: [
            { value: -15, duration: 1500 },
            { value: 0, duration: 1500 }
        ],
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
    });

    // Hover effect for petals
    petals.forEach(petal => {
        petal.addEventListener('mouseenter', () => {
            anime({
                targets: petal,
                scale: 1.2,
                rotate: '+=45deg',
                duration: 800,
                easing: 'easeOutElastic(1, .6)'
            });
        });

        petal.addEventListener('mouseleave', () => {
            anime({
                targets: petal,
                scale: 1,
                rotate: '-=45deg',
                duration: 500,
                easing: 'easeOutQuad'
            });
        });
    });

    // Button hover animation
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        anime({
            targets: ctaButton,
            scale: 1.1,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });

    ctaButton.addEventListener('mouseleave', () => {
        anime({
            targets: ctaButton,
            scale: 1,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });

    // Testimonial cards animation with Intersection Observer
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Hover effect
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        setTimeout(() => {
            testimonialObserver.observe(card);
        }, index * 100);
    });

    // Background particles
    const createParticles = () => {
        const particles = [];
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, ${Math.random() * 0.15});
                border-radius: 50%;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                pointer-events: none;
            `;
            document.body.appendChild(particle);
            particles.push(particle);
        }

        // Particle animations
        particles.forEach(particle => {
            anime({
                targets: particle,
                translateX: function() {
                    return anime.random(-100, 100);
                },
                translateY: function() {
                    return anime.random(-100, 100);
                },
                opacity: [0, 0.15, 0],
                duration: anime.random(4000, 7000),
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.random(0, 2000)
            });
        });
    };

    createParticles();

    // Footer animations
    anime({
        targets: '.footer-logo, .footer-brand',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(200)
    });
    
    anime({
        targets: '.footer-column',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: anime.stagger(150)
    });
    
    anime({
        targets: '.social-icon',
        opacity: [0, 1],
        scale: [0.5, 1],
        rotate: ['-20deg', '0deg'],
        duration: 600,
        easing: 'easeOutBack',
        delay: anime.stagger(100)
    });
    
    anime({
        targets: '.footer-bottom',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: 400
    });
    
    // Subtle hover animation for footer links
    const footerLinks = document.querySelectorAll('.footer-column a, .footer-bottom-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            anime({
                targets: link,
                color: '#ffffff',
                translateX: 5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            anime({
                targets: link,
                color: 'rgba(255, 255, 255, 0.7)',
                translateX: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}); 