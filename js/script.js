/**
 * SafeDrive Blindagem - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Effect on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        mobileMenuIcon.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            mobileMenuIcon.classList.remove('toggle');
        });
    });

    // 3. Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Form Submission Simulation
    const form = document.querySelector('.safe-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Processando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Sua solicitação foi recebida. Nossa equipe técnica entrará em contato em breve para agendar a vistoria do seu veículo.');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }

    // 5. Reveal on Scroll for Safe Cards
    const safeCards = document.querySelectorAll('.safe-card');
    const revealCards = () => {
        safeCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    safeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealCards);
    revealCards();
});

// CSS for Hamburger Animation
const style = document.createElement('style');
style.innerHTML = `
    .mobile-menu-icon.toggle .line1 { transform: rotate(-45deg) translate(-5px, 7px); }
    .mobile-menu-icon.toggle .line2 { opacity: 0; }
    .mobile-menu-icon.toggle .line3 { transform: rotate(45deg) translate(-5px, -7px); }
`;
document.head.appendChild(style);
