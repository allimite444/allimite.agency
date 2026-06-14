/* =====================================================
   FRAMEVISION - PORTFOLIO LOGIC + i18n + LIGHTBOX
   ===================================================== */

// =====================================================
// TRANSLATIONS DATA
// =====================================================
const translations = {
    en: {
        nav_gallery: 'Gallery',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_tagline: 'Fine Art & Editorial Photography',
        hero_t1: 'Capturing the',
        hero_t2: 'silent poetry',
        hero_t3: 'of passing moments.',
        btn_explore: 'Explore Gallery',
        filter_all: 'All',
        filter_portraits: 'Portraits',
        filter_landscapes: 'Landscapes',
        filter_architecture: 'Architecture',
        cat_portrait: 'Portrait',
        cat_landscape: 'Landscape',
        cat_architecture: 'Architecture',
        about_tag: 'The Artist',
        about_p1: 'I am an award-winning fine art and editorial photographer based in Milan, Italy. Over the past decade, my work has explored the delicate intersection of natural light, raw emotion, and minimalist composition.',
        about_p2: 'Believing that every photograph is a short poem composed of silence, my collections focus on highlighting the beauty in quietness. I collaborate with luxury brands, design studios, and architectural agencies worldwide to capture visual narratives that transcend time.',
        stat_exp: 'Years Exp.',
        stat_exh: 'Exhibitions',
        stat_pub: 'Publications',
        contact_tag: 'Collaboration',
        contact_title: "Let's Create Together",
        contact_desc: 'For booking inquiries, collaborations, or print sales, please fill out the form below or send an email directly to elena@rostova.com.',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_message: 'Message',
        form_submit: 'Send Message',
        form_success_title: 'Message Sent!',
        form_success_desc: 'Thank you, Elena will get back to you shortly.',
        form_sending: 'Sending...',
        form_error: 'Something went wrong. Please try again.'
    },
    es: {
        nav_gallery: 'Galería',
        nav_about: 'Sobre Mí',
        nav_contact: 'Contacto',
        hero_tagline: 'Fotografía Artística y Editorial',
        hero_t1: 'Capturando la',
        hero_t2: 'poesía silenciosa',
        hero_t3: 'de los instantes.',
        btn_explore: 'Explorar Galería',
        filter_all: 'Todo',
        filter_portraits: 'Retratos',
        filter_landscapes: 'Paisajes',
        filter_architecture: 'Arquitectura',
        cat_portrait: 'Retrato',
        cat_landscape: 'Paisaje',
        cat_architecture: 'Arquitectura',
        about_tag: 'La Artista',
        about_p1: 'Soy una fotógrafa artística y editorial galardonada con sede en Milán, Italia. Durante la última década, mi trabajo ha explorado la delicada intersección entre la luz natural, la emoción pura y la composición minimalista.',
        about_p2: 'Convencida de que cada fotografía es un poema breve compuesto de silencio, mis colecciones se enfocan en resaltar la belleza de la quietud. Colaboro con marcas de lujo, estudios de diseño y agencias de arquitectura de todo el mundo para capturar narrativas visuales que trascienden el tiempo.',
        stat_exp: 'Años Exp.',
        stat_exh: 'Exposiciones',
        stat_pub: 'Publicaciones',
        contact_tag: 'Colaboración',
        contact_title: 'Creemos Algo Juntos',
        contact_desc: 'Para consultas de reservas, colaboraciones o venta de copias de arte, por favor completá el formulario de abajo o enviá un email a elena@rostova.com.',
        form_name: 'Tu Nombre',
        form_email: 'Tu Email',
        form_message: 'Mensaje',
        form_submit: 'Enviar Mensaje',
        form_success_title: '¡Mensaje Enviado!',
        form_success_desc: 'Gracias, Elena te responderá a la brevedad.',
        form_sending: 'Enviando...',
        form_error: 'Hubo un error. Por favor, intentá de nuevo.'
    },
    pt: {
        nav_gallery: 'Galeria',
        nav_about: 'Sobre Mim',
        nav_contact: 'Contato',
        hero_tagline: 'Fotografia Artística e Editorial',
        hero_t1: 'Capturando a',
        hero_t2: 'poesia silenciosa',
        hero_t3: 'dos momentos.',
        btn_explore: 'Explorar Galeria',
        filter_all: 'Todos',
        filter_portraits: 'Retratos',
        filter_landscapes: 'Paisagens',
        filter_architecture: 'Arquitetura',
        cat_portrait: 'Retrato',
        cat_landscape: 'Paisagem',
        cat_architecture: 'Arquitetura',
        about_tag: 'A Artista',
        about_p1: 'Sou uma fotógrafa artística e editorial premiada baseada em Milão, Itália. Na última década, meu trabalho explorou a delicada interseção da luz natural, emoção crua e composição minimalista.',
        about_p2: 'Acreditando que cada fotografia é um pequeno poema composto de silêncio, minhas coleções focam em destacar a beleza na quietude. Colaboro com marcas de luxo, estúdios de design e agências de arquitetura globalmente para capturar narrativas visuais que transcendem o tempo.',
        stat_exp: 'Anos Exp.',
        stat_exh: 'Exposições',
        stat_pub: 'Publicações',
        contact_tag: 'Colaboração',
        contact_title: 'Vamos Criar Juntos',
        contact_desc: 'Para consultas de reservas, colaborações ou venda de impressões, preencha o formulário abaixo ou envie um e-mail diretamente para elena@rostova.com.',
        form_name: 'Seu Nome',
        form_email: 'Seu E-mail',
        form_message: 'Mensagem',
        form_submit: 'Enviar Mensagem',
        form_success_title: 'Mensagem Enviada!',
        form_success_desc: 'Obrigado, Elena responderá em breve.',
        form_sending: 'Enviando...',
        form_error: 'Ocorreu um erro. Por favor, tente novamente.'
    }
};

// =====================================================
// GLOBAL VARIABLES
// =====================================================
let currentLang = localStorage.getItem('framevision-lang') || 'en';
let activeFilter = 'all';
let visibleGalleryItems = [];
let currentLightboxIndex = 0;

// =====================================================
// i18n ENGINE
// =====================================================
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('framevision-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Standard translation key replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Translate input placeholders
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msgInput = document.querySelector('#message');

    if (nameInput) nameInput.placeholder = lang === 'es' ? 'Juan Pérez' : (lang === 'pt' ? 'João Silva' : 'John Doe');
    if (emailInput) emailInput.placeholder = lang === 'es' ? 'juan@ejemplo.com' : (lang === 'pt' ? 'joao@exemplo.com' : 'john@example.com');
    if (msgInput) msgInput.placeholder = lang === 'es' ? 'Describí tu visión...' : (lang === 'pt' ? 'Descreva sua visão...' : 'Describe your vision...');

    // Update lang button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Page title and description update
    const pageTitles = {
        en: 'Elena Rostova | Fine Art Photography',
        es: 'Elena Rostova | Fotografía Artística',
        pt: 'Elena Rostova | Fotografia Artística'
    };
    document.title = pageTitles[lang] || pageTitles.en;
}

// =====================================================
// MAIN INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const filterButtons = document.querySelectorAll('.filter-btn');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next-btn');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxTitle = document.getElementById('lightbox-title');

    const contactForm = document.getElementById('photo-contact-form');

    // 1. Preloader fade out
    window.addEventListener('load', () => {
        if (preloader) preloader.classList.add('fade-out');
    });
    // Fallback if load takes too long
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
        }
    }, 1500);

    // 2. Initialize Language
    applyTranslations(currentLang);

    // Language Toggle Listener
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            const lang = btn.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                applyTranslations(lang);
                // Also update lightbox translations if active
                if (lightbox.classList.contains('active')) {
                    updateLightboxContent();
                }
            }
        });
    }

    // 3. Scroll Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Mobile Navigation Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 5. Portfolio Filter Logic
    function filterGallery(filterValue) {
        activeFilter = filterValue;
        
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                // Trigger reflow for animation
                item.offsetHeight;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.display = 'none';
            }
        });

        // Cache currently visible items for Lightbox sliding
        visibleGalleryItems = galleryItems.filter(item => item.style.display !== 'none');
    }

    // Initialize visible list
    filterGallery('all');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGallery(btn.getAttribute('data-filter'));
        });
    });

    // 6. Lightbox Functionality
    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxContent() {
        if (visibleGalleryItems.length === 0) return;
        const item = visibleGalleryItems[currentLightboxIndex];
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('.img-title').textContent;
        const categoryKey = item.getAttribute('data-category');

        lightboxImg.src = img.src;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;

        // Apply translated category title
        const catTranslations = {
            portraits: translations[currentLang].cat_portrait,
            landscapes: translations[currentLang].cat_landscape,
            architecture: translations[currentLang].cat_architecture
        };
        lightboxCategory.textContent = catTranslations[categoryKey] || categoryKey;
    }

    function showNextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length;
        updateLightboxContent();
    }

    function showPrevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
        updateLightboxContent();
    }

    // Attach click events to gallery items
    galleryItems.forEach(item => {
        const wrapper = item.querySelector('.image-wrapper');
        wrapper.addEventListener('click', () => {
            const index = visibleGalleryItems.indexOf(item);
            if (index !== -1) {
                openLightbox(index);
            }
        });
    });

    // Lightbox Control Buttons
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

    // Close on overlay click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    // 7. AJAX Contact Form Submit (FormSubmit.co)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitBtnSpan = submitBtn.querySelector('span');
            const originalText = submitBtnSpan.textContent;

            // Form data extraction
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Disable button during submission
            submitBtn.disabled = true;
            submitBtnSpan.textContent = translations[currentLang].form_sending;

            // Add subject line
            data._subject = `Elena Rostova Portfolio - Inquiry from ${data.name}`;

            fetch("https://formsubmit.co/ajax/lmaos.designer@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    // Replace form with elegant success message
                    contactForm.innerHTML = `
                        <div class="form-success">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M8 12.5l3 3 5-6"/>
                            </svg>
                            <h3>${translations[currentLang].form_success_title}</h3>
                            <p>${translations[currentLang].form_success_desc}</p>
                        </div>
                    `;
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(err => {
                console.error("Submit error:", err);
                submitBtn.disabled = false;
                submitBtnSpan.textContent = originalText;
                alert(translations[currentLang].form_error);
            });
        });
    }

    // Scroll active link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });
});
