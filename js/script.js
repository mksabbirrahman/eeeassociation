// EEE Students Association – DUET | Interactivity & Animations
// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Smooth Scroll for Nav Links & Animated Underline
const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(document.querySelectorAll('section, header'));
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
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
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hero Animated Text
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-content h1');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(40px)';
        setTimeout(() => {
            hero.style.transition = 'all 1.2s cubic-bezier(.4,2,.6,1)';
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Staggered Reveal for Cards & Timeline
function staggerReveal(selector, delayStep = 120) {
    const items = document.querySelectorAll(selector);
    items.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(.4,2,.6,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 400 + i * delayStep);
    });
}
window.addEventListener('DOMContentLoaded', () => {
    staggerReveal('.timeline-item', 180);
    staggerReveal('.team-card', 120);
    staggerReveal('.member-card', 80);
    staggerReveal('.event-card', 120);
    staggerReveal('.photo-gallery img', 80);
});

// Lightbox for Gallery
const galleryImages = document.querySelectorAll('.photo-gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;
        const imgPreview = document.createElement('img');
        imgPreview.src = this.src;
        imgPreview.style.maxWidth = '90vw';
        imgPreview.style.maxHeight = '80vh';
        imgPreview.style.borderRadius = '12px';
        imgPreview.style.boxShadow = '0 4px 32px rgba(0,0,0,0.3)';
        overlay.appendChild(imgPreview);
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
        document.body.appendChild(overlay);
    });
});
function toggleMenu(){
    document.getElementById("mobileMenu")
    .classList.toggle("open");
}
