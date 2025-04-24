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

    // Enhanced rose animation with staggered petal effects
    anime({
        targets: '.rose',
        scale: [0.9, 1],
        opacity: [0.8, 1],
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });
    
    // Staggered petals animation
    anime({
        targets: '.petal',
        scale: function() { return 1 + (anime.random(0, 10) / 100); },
        translateZ: function() { return anime.random(5, 15); },
        opacity: [0.9, 1],
        duration: function() { return anime.random(2000, 4000); },
        delay: anime.stagger(100, {from: 'center'}),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });
    
    // Create subtle sparkle particles around the rose
    const createSparkles = () => {
        const roseContainer = document.querySelector('.rose-container');
        const roseRect = roseContainer.getBoundingClientRect();
        
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: ${anime.random(2, 4)}px;
                height: ${anime.random(2, 4)}px;
                background: rgba(255, 255, 255, ${anime.random(0.1, 0.3)});
                border-radius: 50%;
                pointer-events: none;
                top: ${anime.random(20, 80)}%;
                left: ${anime.random(20, 80)}%;
                z-index: 50;
            `;
            roseContainer.appendChild(sparkle);
            
            // Animate each sparkle
            anime({
                targets: sparkle,
                opacity: [0, 0.8, 0],
                translateX: anime.random(-20, 20),
                translateY: anime.random(-20, 20),
                scale: [1, anime.random(1.5, 2.5), 0.5],
                duration: anime.random(3000, 6000),
                easing: 'easeOutExpo',
                complete: function(anim) {
                    sparkle.remove();
                    if (document.querySelector('.rose-container')) {
                        createSparkle();
                    }
                }
            });
        }
    };
    
    // Create a single new sparkle to replace one that finished
    const createSparkle = () => {
        const roseContainer = document.querySelector('.rose-container');
        if (!roseContainer) return;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: ${anime.random(2, 4)}px;
            height: ${anime.random(2, 4)}px;
            background: rgba(255, 255, 255, ${anime.random(0.1, 0.3)});
            border-radius: 50%;
            pointer-events: none;
            top: ${anime.random(20, 80)}%;
            left: ${anime.random(20, 80)}%;
            z-index: 50;
        `;
        roseContainer.appendChild(sparkle);
        
        // Animate each sparkle
        anime({
            targets: sparkle,
            opacity: [0, 0.8, 0],
            translateX: anime.random(-20, 20),
            translateY: anime.random(-20, 20),
            scale: [1, anime.random(1.5, 2.5), 0.5],
            duration: anime.random(3000, 6000),
            easing: 'easeOutExpo',
            complete: function(anim) {
                sparkle.remove();
                if (document.querySelector('.rose-container')) {
                    createSparkle();
                }
            }
        });
    };
    
    // Initialize sparkles
    createSparkles();
    
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

    // Testimonial cards animation
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
        setTimeout(() => {
            testimonialObserver.observe(card);
        }, index * 100);
    });

    // Background particles
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

    // Button hover effect
    const button = document.querySelector('.cta-button');
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });

    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
}); 