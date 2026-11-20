/**
 * CareerPath AI - Master Creative Controller & Motion Engine
 * Custom desktop cursor, cursor-follow ambient glow, 3D card tilt,
 * magnetic buttons, scroll progress, animated counters, and GSAP integration.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDynamicNavbarCTA();
    initLucideIcons();
    initScrollProgressBar();
    initCustomCursorAndLighting();
    init3DCardTilt();
    initMagneticButtons();
    initAnimatedCounters();
    initScrollAnimations();
});

/**
 * Initialize Lucide icons
 */
function initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

/**
 * Scroll Progress Bar at very top of screen
 */
function initScrollProgressBar() {
    let bar = document.getElementById('scroll-progress-bar');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'scroll-progress-bar';
        document.body.appendChild(bar);
    }

    const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
}

/**
 * Desktop Custom Cursor & Ambient Lighting
 * (Only active for fine pointers, disabled on touch devices)
 */
function initCustomCursorAndLighting() {
    // Only proceed if device supports hover and pointer is fine
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) {
        return;
    }

    let ambientGlow = document.getElementById('ambient-cursor-glow');
    if (!ambientGlow) {
        ambientGlow = document.createElement('div');
        ambientGlow.id = 'ambient-cursor-glow';
        document.body.appendChild(ambientGlow);
    }

    let dot = document.getElementById('custom-cursor-dot');
    if (!dot) {
        dot = document.createElement('div');
        dot.id = 'custom-cursor-dot';
        document.body.appendChild(dot);
    }

    let ring = document.getElementById('custom-cursor-ring');
    if (!ring) {
        ring = document.createElement('div');
        ring.id = 'custom-cursor-ring';
        document.body.appendChild(ring);
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let glowX = -100;
    let glowY = -100;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    // Smooth lerp loop for the trailing ring and ambient light
    const renderCursorLoop = () => {
        // Linear interpolation for smooth trailing
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        ambientGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(renderCursorLoop);
    };
    requestAnimationFrame(renderCursorLoop);

    // Interactive Hover States
    const interactiveSelectors = 'a, button, input, select, textarea, .chip-select, .category-card, .step-card, .feature-card, .career-card-match, .filter-btn, .workflow-node, .trust-visual-card, .universe-card';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.remove('cursor-hover');
        }
    });
}

/**
 * 3D Card Tilt Effect on Mouse Move
 */
function init3DCardTilt() {
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return;

    const tiltCards = document.querySelectorAll('[data-tilt], .hero-interactive-card, .category-card, .feature-card, .step-card, .workflow-node, .trust-visual-card, .universe-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
            const rotateY = ((x - centerX) / centerX) * 6;  // Max 6 deg

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

/**
 * Magnetic Button Attraction on Hover
 */
function initMagneticButtons() {
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return;

    const magneticBtns = document.querySelectorAll('.btn-magnetic, .btn-magnetic-hero, .btn-primary');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/**
 * Animated Number Counters for Statistics Section
 */
function initAnimatedCounters() {
    const statCards = document.querySelectorAll('.stat-card .stat-value');
    if (statCards.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent.trim();
                const targetNumber = parseInt(text, 10);
                const suffix = text.replace(/^[0-9]+/, ''); // e.g. '+' or '%'

                if (!isNaN(targetNumber) && !el.dataset.animated) {
                    el.dataset.animated = 'true';
                    animateValue(el, 0, targetNumber, 1600, suffix);
                }
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.35 });

    statCards.forEach(card => observer.observe(card));
}

function animateValue(obj, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * (end - start) + start);
        obj.textContent = current + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.textContent = end + suffix;
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Scroll Animations using GSAP & ScrollTrigger with safe graceful reveals
 */
function initScrollAnimations() {
    // Ensure all elements are fully visible by default so no blank spaces ever appear
    const targets = document.querySelectorAll(
        '.workflow-node, .trust-visual-card, .universe-card, .step-card, .feature-card, .category-card, .career-card-match'
    );
    targets.forEach(el => {
        el.style.opacity = '1';
    });

    if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);

        const staggerGroups = [
            '.workflow-steps-horizontal .workflow-node',
            '.trust-visual-grid .trust-visual-card',
            '.universe-visual-grid .universe-card',
            '.steps-grid .step-card',
            '.features-grid .feature-card',
            '.category-grid .category-card',
            '.career-matches-grid .career-card-match'
        ];

        staggerGroups.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                window.gsap.fromTo(elements, 
                    { y: 30, opacity: 0.2 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                        stagger: 0.08,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: elements[0].parentElement,
                            start: 'top 90%',
                            once: true
                        }
                    }
                );
            }
        });

        // Parallax floating on background orbs
        const orbs = document.querySelectorAll('.glass-orb');
        orbs.forEach((orb, i) => {
            window.gsap.to(orb, {
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5
                },
                y: (i + 1) * 60,
                ease: 'none'
            });
        });

        window.addEventListener('load', () => {
            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        });
    }
}

/**
 * Handle active link styling and mobile menu drawer
 */
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.navbar-nav');

    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                initLucideIcons();
            }
        });

        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    initLucideIcons();
                }
            }
        });
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Check LocalStorage and update Navbar button dynamically
 */
function initDynamicNavbarCTA() {
    const hasData = window.StorageService && window.StorageService.hasAssessment();
    const mobileNavList = document.querySelector('.navbar-nav');

    if (hasData) {
        const assessmentBtns = document.querySelectorAll('.dynamic-assessment-cta');
        assessmentBtns.forEach(btn => {
            btn.innerHTML = `<i data-lucide="layout-dashboard"></i> <span>My Results</span>`;
            btn.setAttribute('href', 'results.html');
        });

        if (navListContainsResults()) return;

        const resultsNavItem = document.createElement('li');
        resultsNavItem.innerHTML = `<a href="results.html" class="nav-link ${window.location.pathname.includes('results.html') ? 'active' : ''}">My Results</a>`;
        
        if (mobileNavList) {
            mobileNavList.appendChild(resultsNavItem);
        }
    }
}

function navListContainsResults() {
    const links = document.querySelectorAll('.navbar-nav a');
    for (let link of links) {
        if (link.getAttribute('href') === 'results.html') return true;
    }
    return false;
}

/**
 * UI Toast Notification utility
 */
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let bg = 'rgba(15, 23, 42, 0.9)';
    if (type === 'success') bg = 'rgba(5, 150, 105, 0.95)';
    if (type === 'warning') bg = 'rgba(217, 119, 6, 0.95)';
    if (type === 'error') bg = 'rgba(220, 38, 38, 0.95)';

    toast.style.cssText = `
        background: ${bg};
        backdrop-filter: blur(14px);
        color: #ffffff;
        padding: 0.85rem 1.4rem;
        border-radius: 12px;
        font-size: 0.925rem;
        font-weight: 600;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        gap: 0.65rem;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
        pointer-events: auto;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;

    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(12px) scale(0.96)';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Global exports
window.showToast = showToast;
window.initLucideIcons = initLucideIcons;
