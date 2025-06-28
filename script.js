// Enhanced Aarem Academy JavaScript with Modern Animations

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    // Create loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading screen after page loads
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 1000);

    // Initialize all functionality
    initializeAnimations();
    initializeScrollProgress();
    initializeHeaderEffects();
    initializeFAQ();
    initializeSmoothScroll();
    initializeCalendar();
    initializeWhatsAppButton();
    initializeMobileMenu();
    initializeTestimonials();
    initializeScrollToTop();
    initializeFeatureCards();
    initializeTestimonialCards();
    initializeFAQCards();
    initializeCalendarEventCards();
    initialize3DCardHover();
});

// Scroll Progress Bar
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced Header Effects with Advanced Animations
function initializeHeaderEffects() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Scroll-based header effects
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for styling
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            // Scrolling down - hide header
            header.classList.add('hidden');
        } else {
            // Scrolling up - show header
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    // Throttle scroll events for performance
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Active link detection
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
    }
  });
}

    window.addEventListener('scroll', updateActiveLink);
    
    // Enhanced mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Add stagger animation to nav links
            const links = navLinks.querySelectorAll('li');
            links.forEach((link, index) => {
                if (navLinks.classList.contains('active')) {
                    link.style.animationDelay = `${index * 0.1}s`;
                    link.classList.add('slide-in-down');
    } else {
                    link.style.animationDelay = '0s';
                    link.classList.remove('slide-in-down');
    }
  });
});
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Enhanced link hover effects
    const navLinkItems = document.querySelectorAll('.nav-links li a');
    navLinkItems.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            link.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add click animation
        link.addEventListener('click', (e) => {
            const clickEffect = document.createElement('div');
            clickEffect.classList.add('click-effect');
            clickEffect.style.left = e.offsetX + 'px';
            clickEffect.style.top = e.offsetY + 'px';
            link.appendChild(clickEffect);
            
            setTimeout(() => {
                clickEffect.remove();
            }, 300);
        });
    });
    
    // Logo animation on page load
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            logo.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Social icons stagger animation
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });
}

// Intersection Observer for Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.feature, .testimonial, .faq-item, .lecturer-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Hero content animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('slide-in-left');
        observer.observe(heroContent);
    }

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.classList.add('slide-in-right');
        observer.observe(heroImage);
    }
}

// Enhanced FAQ with Smooth Animations
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Smooth Scroll with Enhanced Effects
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                
                // Add scroll animation
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add highlight effect to target
                target.style.transition = 'all 0.3s ease';
                target.style.transform = 'scale(1.02)';
                target.style.boxShadow = '0 10px 30px rgba(0, 180, 216, 0.3)';
                
                setTimeout(() => {
                    target.style.transform = 'scale(1)';
                    target.style.boxShadow = '';
                }, 1000);
            }
        });
    });
}

// Enhanced Calendar with Interactive Events
function initializeCalendar() {
const calendar = document.getElementById('calendar');
    if (!calendar) return;

    const events = [
        { date: 'July 5, 2025', time: '7:00 AM', title: 'BBA 1st Year', type: 'class' },
        { date: 'July 7, 2025', time: '5:00 PM', title: 'BBA 2nd Year', type: 'class' },
        { date: 'July 10, 2025', time: '6:00 PM', title: 'Counseling Webinar', type: 'webinar' },
        { date: 'July 12, 2025', time: '4:00 PM', title: 'Home Tuition Batch', type: 'tuition' }
    ];

    const getEventIcon = (type) => {
        switch(type) {
            case 'class': return '🎓';
            case 'webinar': return '💻';
            case 'tuition': return '🏠';
            default: return '📅';
        }
    };

  calendar.innerHTML = `
        <div class="calendar-header">
            <h3>Upcoming Events</h3>
            <p>Join our live sessions and classes</p>
        </div>
        <ul class="calendar-events">
            ${events.map(event => `
                <li class="calendar-event" data-type="${event.type}">
                    <div class="event-icon">${getEventIcon(event.type)}</div>
                    <div class="event-details">
                        <div class="event-title">${event.title}</div>
                        <div class="event-time">${event.date} - ${event.time}</div>
                    </div>
                    <div class="event-action">
                        <button class="btn-join">Join Now</button>
                    </div>
                </li>
            `).join('')}
    </ul>
  `;

    // Add event listeners to join buttons
    const joinButtons = calendar.querySelectorAll('.btn-join');
    joinButtons.forEach(button => {
        button.onclick = function(e) {
            e.stopPropagation();
            alert('Redirecting to class...');
        };
    });
}

// Enhanced WhatsApp Button
function initializeWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-chat');
    if (!whatsappButton) return;

    // Add notification badge
    const badge = document.createElement('span');
    badge.className = 'whatsapp-badge';
    badge.textContent = '1';
    badge.style.cssText = `
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff6b35;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: bounce 2s infinite;
    `;
    
    whatsappButton.appendChild(badge);

    // Remove badge on click
    whatsappButton.addEventListener('click', () => {
        badge.remove();
    });

    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Navigation with Mobile Menu
function initializeMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
    
    navbar.insertBefore(mobileMenuBtn, navLinks);
    
    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenuBtn.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Responsive design
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleMobileChange(e) {
        if (e.matches) {
            mobileMenuBtn.style.display = 'flex';
            navLinks.style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.classList.remove('active');
        }
    }
    
    mediaQuery.addListener(handleMobileChange);
    handleMobileChange(mediaQuery);
}

// Enhanced Feature Cards with Advanced Interactions
function initializeFeatureCards() {
    const featureCards = document.querySelectorAll('.feature');
    featureCards.forEach(card => {
        // Click effect with particles
        card.addEventListener('click', (e) => {
            createParticleEffect(e, card);
        });
        // Add floating particles on hover
        card.addEventListener('mouseenter', () => {
            createFloatingParticles(card);
        });
        card.addEventListener('mouseleave', () => {
            removeFloatingParticles(card);
        });
    });
}

// Create particle effect on click
function createParticleEffect(e, card) {
    const particles = 8;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-teal);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            z-index: 1000;
        `;
        
        card.appendChild(particle);
        
        const angle = (i / particles) * 360;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle * Math.PI / 180) * velocity;
        const vy = Math.sin(angle * Math.PI / 180) * velocity;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${vx}px, ${vy}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => particle.remove();
    }
}

// Create floating particles on hover
function createFloatingParticles(card) {
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, var(--primary-teal), var(--accent-orange));
            border-radius: 50%;
            pointer-events: none;
            left: ${20 + Math.random() * 60}%;
            top: ${20 + Math.random() * 60}%;
            z-index: 1;
            opacity: 0;
        `;
        
        card.appendChild(particle);
        
        // Animate floating particle
        particle.animate([
            {
                transform: 'translateY(0) scale(0)',
                opacity: 0
            },
            {
                transform: 'translateY(-20px) scale(1)',
                opacity: 0.6
            },
            {
                transform: 'translateY(-40px) scale(0)',
                opacity: 0
            }
        ], {
            duration: 2000 + Math.random() * 1000,
            delay: i * 200,
            easing: 'ease-out',
            iterations: Infinity
        });
    }
}

// Remove floating particles
function removeFloatingParticles(card) {
    const particles = card.querySelectorAll('.floating-particle');
    particles.forEach(particle => {
        particle.animate([
            { opacity: particle.style.opacity },
            { opacity: 0 }
        ], {
            duration: 300,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    });
}

// Enhanced Testimonial Cards
function initializeTestimonialCards() {
    const testimonialCards = document.querySelectorAll('.testimonial');
    testimonialCards.forEach(card => {
        // Glow effect on hover
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = `0 25px 50px rgba(0, 180, 216, 0.15), 0 0 0 1px rgba(0, 180, 216, 0.1), 0 0 30px rgba(0, 180, 216, 0.1)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// Enhanced FAQ Cards
function initializeFAQCards() {
    const faqCards = document.querySelectorAll('.faq-item');
    faqCards.forEach(card => {
        // Enhanced click animation
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'faq-ripple';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 180, 216, 0.3);
                transform: scale(0);
                animation: faqRipple 0.6s linear;
                pointer-events: none;
                width: 20px;
                height: 20px;
                left: ${e.offsetX - 10}px;
                top: ${e.offsetY - 10}px;
                z-index: 10;
            `;
            card.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Enhanced Calendar Event Cards
function initializeCalendarEventCards() {
    const eventCards = document.querySelectorAll('.calendar-event');
    eventCards.forEach(card => {
        // Pulse effect on hover
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'calendarPulse 2s ease-in-out infinite';
        });
        card.addEventListener('mouseleave', () => {
            card.style.animation = '';
        });
    });
}

// Add CSS animations for new effects
const style = document.createElement('style');
style.textContent = `
    @keyframes faqRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes calendarPulse {
        0%, 100% { 
            box-shadow: 0 15px 30px rgba(0, 180, 216, 0.15), 0 0 0 1px rgba(0, 180, 216, 0.1);
        }
        50% { 
            box-shadow: 0 15px 30px rgba(0, 180, 216, 0.25), 0 0 0 1px rgba(0, 180, 216, 0.2);
        }
    }
    
    .floating-particle {
        position: absolute;
        pointer-events: none;
        z-index: 1;
    }
`;
document.head.appendChild(style);

// Enhanced Testimonials with Auto-rotation
function initializeTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.opacity = '0.5';
            testimonial.style.transform = 'scale(0.9)';
        });
        
        testimonials[index].style.opacity = '1';
        testimonials[index].style.transform = 'scale(1)';
    };
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Show first testimonial
    showTestimonial(0);
}

// Scroll to Top Button
function initializeScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 3D Card Hover Effect for All Card Types
function initialize3DCardHover() {
  const cardSelectors = [
    '.feature',
    '.service-card',
    '.testimonial',
    '.faq-item',
    '.calendar-event',
    '.lecturer-card'
  ];
  const cards = document.querySelectorAll(cardSelectors.join(','));

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 12;
      const rotateY = (centerX - x) / 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04) translateY(-12px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
    });
  });
} 