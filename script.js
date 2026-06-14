/* =====================================================
   PORTFOLIO - INTERACTIVE SCRIPTS + i18n
   ===================================================== */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        // Nav
        nav_about: 'About',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_reviews: 'Reviews',
        nav_contact: "Let's Talk",

        // Hero
        hero_badge: 'Available for new projects',
        hero_title: 'I Craft<br><span class="gradient-text">Digital Experiences</span>',
        hero_subtitle: 'Web Developer & Designer building modern, high-performance websites and web apps that drive real results for businesses worldwide.',
        hero_cta_work: 'View My Work',
        hero_cta_talk: "Let's Talk",
        stat_projects: 'Projects Built',
        stat_clients: 'Happy Clients',
        stat_satisfaction: 'Satisfaction',
        scroll_text: 'Scroll to explore',

        // About
        about_tag: 'About Me',
        about_title: 'Turning Ideas into <span class="gradient-text">Pixel-Perfect</span> Reality',
        about_p1: "I'm a passionate web developer who transforms business ideas into stunning digital experiences. I specialize in creating fast, modern, and responsive websites that not only look incredible but also <strong>convert visitors into customers</strong>.",
        about_p2: "Whether you need a sleek landing page, a full business website, or a custom web application — I deliver premium quality on time, every time. My approach combines cutting-edge technology with thoughtful design to create solutions that truly stand out.",
        about_h1: 'Fast Delivery — 2-5 business days',
        about_h2: '100% Responsive on all devices',
        about_h3: 'SEO Optimized for search engines',
        about_h4: "Unlimited Revisions until you're happy",
        tech_title: 'Tech Stack',

        // Services
        services_tag: 'What I Do',
        services_title: 'Services That <span class="gradient-text">Deliver Results</span>',
        services_desc: 'From simple landing pages to complex web applications — I offer end-to-end solutions tailored to your business needs.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'High-converting landing pages designed to capture leads and drive sales. Fast, beautiful, and optimized.',
        svc1_price: 'From $150',
        svc2_title: 'Business Websites',
        svc2_desc: "Complete multi-page websites that establish your brand's professional online presence and credibility.",
        svc2_price: 'From $300',
        svc3_title: 'E-Commerce',
        svc3_desc: 'Online stores that make selling seamless. Product catalogs, shopping carts, and payment integration.',
        svc3_price: 'From $500',
        svc4_title: 'Web Applications',
        svc4_desc: 'Custom web apps with dynamic functionality — dashboards, tools, SaaS platforms, and more.',
        svc4_price: 'From $800',
        svc5_title: 'Website Redesign',
        svc5_desc: 'Transform your outdated website into a modern, fast, mobile-friendly experience that impresses.',
        svc5_price: 'From $200',
        svc6_title: 'SEO Optimization',
        svc6_desc: 'Boost your search engine rankings with technical SEO, performance tuning, and best practices.',
        svc6_price: 'From $100',

        // Projects
        projects_tag: 'My Work',
        projects_title: 'Featured <span class="gradient-text">Projects</span>',
        projects_desc: 'A selection of recent work showcasing my range — from elegant restaurants to powerful SaaS platforms.',
        proj1_desc: 'Elegant restaurant website with online reservations, menu showcase, and immersive gallery.',
        proj2_desc: 'Bold marketing agency website with dynamic animations, case studies, and lead generation forms.',
        proj3_desc: 'Minimalist photography portfolio with fullscreen lightbox gallery and smooth page transitions.',
        proj4_desc: 'Cloud management dashboard with real-time analytics, user authentication, and subscription billing.',
        proj_link: 'View Project',

        // Process
        process_tag: 'How I Work',
        process_title: 'Simple <span class="gradient-text">3-Step</span> Process',
        step1_title: 'Discovery',
        step1_desc: "We discuss your goals, target audience, and vision. I'll ask the right questions to understand exactly what you need.",
        step2_title: 'Build & Iterate',
        step2_desc: "I design and develop your project with regular check-ins. You'll see progress and provide feedback throughout.",
        step3_title: 'Launch & Support',
        step3_desc: 'We deploy your polished project and I provide ongoing support to ensure everything runs smoothly.',

        // Testimonials
        testimonials_tag: 'Client Love',
        testimonials_title: 'What People <span class="gradient-text">Say</span>',
        test1_initials: 'MR',
        test1_name: 'Mark Reynolds',
        test1_text: '"Absolutely phenomenal work. The landing page he built for us increased our conversions by 40%. Fast delivery, amazing communication, and the design exceeded our expectations."',
        test1_role: 'CEO, TechVentures',
        test2_initials: 'SC',
        test2_name: 'Sarah Chen',
        test2_text: '"Working with Lautaro was a breeze. He understood our brand perfectly and delivered a website that truly represents who we are. Will definitely hire again for future projects."',
        test2_role: 'Founder, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"The SaaS dashboard he developed is incredibly polished. Clean code, great UX, and he even implemented features we hadn\'t thought of. True professional."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Get in Touch',
        contact_title: "Let's Build Something <span class=\"gradient-text\">Amazing</span>",
        contact_desc: "Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back to you within 24 hours.",
        contact_location: 'Available Worldwide (Remote)',
        form_name: 'Your Name',
        form_name_ph: 'John Doe',
        form_email: 'Your Email',
        form_budget: 'Budget Range',
        form_budget_default: 'Select your budget',
        form_budget_1: '$100 — $300',
        form_budget_2: '$300 — $500',
        form_budget_3: '$500 — $1,000',
        form_budget_4: '$1,000+',
        form_message: 'Project Details',
        form_message_ph: 'Tell me about your project...',
        form_submit: 'Send Message',

        // Footer
        footer_tagline: 'Building digital experiences that make an impact.',
        footer_copy: '© 2026 Lautaro. All rights reserved.',

        // Form success
        form_success_title: 'Message Sent!',
        form_success_text: "Thank you, {name}! I'll get back to you within 24 hours.",
    },

    es: {
        // Nav
        nav_about: 'Sobre Mí',
        nav_services: 'Servicios',
        nav_projects: 'Proyectos',
        nav_reviews: 'Opiniones',
        nav_contact: 'Hablemos',

        // Hero
        hero_badge: 'Disponible para nuevos proyectos',
        hero_title: 'Creo<br><span class="gradient-text">Experiencias Digitales</span>',
        hero_subtitle: 'Desarrollador Web & Diseñador creando sitios web modernos y de alto rendimiento que generan resultados reales para empresas en todo el mundo.',
        hero_cta_work: 'Ver Mi Trabajo',
        hero_cta_talk: 'Hablemos',
        stat_projects: 'Proyectos Realizados',
        stat_clients: 'Clientes Felices',
        stat_satisfaction: 'Satisfacción',
        scroll_text: 'Deslizá para explorar',

        // About
        about_tag: 'Sobre Mí',
        about_title: 'Convirtiendo Ideas en <span class="gradient-text">Realidad Perfecta</span>',
        about_p1: 'Soy un desarrollador web apasionado que transforma ideas de negocio en experiencias digitales impactantes. Me especializo en crear sitios web rápidos, modernos y responsivos que no solo se ven increíbles, sino que también <strong>convierten visitantes en clientes</strong>.',
        about_p2: 'Ya sea que necesites una landing page elegante, un sitio web empresarial completo o una aplicación web personalizada — entrego calidad premium a tiempo, siempre. Mi enfoque combina tecnología de vanguardia con diseño cuidadoso para crear soluciones que realmente destacan.',
        about_h1: 'Entrega Rápida — 2-5 días hábiles',
        about_h2: '100% Responsivo en todos los dispositivos',
        about_h3: 'SEO Optimizado para buscadores',
        about_h4: 'Revisiones Ilimitadas hasta que estés satisfecho',
        tech_title: 'Tecnologías',

        // Services
        services_tag: 'Qué Hago',
        services_title: 'Servicios que <span class="gradient-text">Dan Resultados</span>',
        services_desc: 'Desde landing pages simples hasta aplicaciones web complejas — ofrezco soluciones integrales adaptadas a las necesidades de tu negocio.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'Landing pages de alta conversión diseñadas para captar leads e impulsar ventas. Rápidas, atractivas y optimizadas.',
        svc1_price: 'Desde $150',
        svc2_title: 'Sitios Empresariales',
        svc2_desc: 'Sitios web completos de varias páginas que establecen la presencia profesional online de tu marca.',
        svc2_price: 'Desde $300',
        svc3_title: 'E-Commerce',
        svc3_desc: 'Tiendas online que hacen que vender sea fácil. Catálogos, carritos de compra e integración de pagos.',
        svc3_price: 'Desde $500',
        svc4_title: 'Aplicaciones Web',
        svc4_desc: 'Apps web personalizadas con funcionalidad dinámica — dashboards, herramientas, plataformas SaaS y más.',
        svc4_price: 'Desde $800',
        svc5_title: 'Rediseño Web',
        svc5_desc: 'Transformá tu sitio web obsoleto en una experiencia moderna, rápida y mobile-friendly que impresiona.',
        svc5_price: 'Desde $200',
        svc6_title: 'Optimización SEO',
        svc6_desc: 'Mejorá tu posicionamiento en buscadores con SEO técnico, optimización de rendimiento y mejores prácticas.',
        svc6_price: 'Desde $100',

        // Projects
        projects_tag: 'Mi Trabajo',
        projects_title: 'Proyectos <span class="gradient-text">Destacados</span>',
        projects_desc: 'Una selección de trabajos recientes mostrando mi versatilidad — desde restaurantes elegantes hasta plataformas SaaS.',
        proj1_desc: 'Sitio web elegante de restaurante con reservas online, menú interactivo y galería inmersiva.',
        proj2_desc: 'Sitio web audaz de agencia de marketing con animaciones dinámicas, casos de estudio y formularios de captación.',
        proj3_desc: 'Portfolio minimalista de fotografía con galería lightbox a pantalla completa y transiciones suaves.',
        proj4_desc: 'Dashboard de gestión en la nube con analytics en tiempo real, autenticación y facturación por suscripción.',
        proj_link: 'Ver Proyecto',

        // Process
        process_tag: 'Cómo Trabajo',
        process_title: 'Proceso Simple de <span class="gradient-text">3 Pasos</span>',
        step1_title: 'Descubrimiento',
        step1_desc: 'Conversamos sobre tus objetivos, público objetivo y visión. Hago las preguntas correctas para entender exactamente lo que necesitás.',
        step2_title: 'Desarrollo e Iteración',
        step2_desc: 'Diseño y desarrollo tu proyecto con revisiones regulares. Vas a ver el progreso y dar feedback durante todo el proceso.',
        step3_title: 'Lanzamiento y Soporte',
        step3_desc: 'Desplegamos tu proyecto terminado y brindo soporte continuo para asegurar que todo funcione perfecto.',

        // Testimonials
        testimonials_tag: 'Opiniones',
        testimonials_title: 'Lo que Dicen mis <span class="gradient-text">Clientes</span>',
        test1_initials: 'MG',
        test1_name: 'Martín Gómez',
        test1_text: '"Un laburo espectacular. La landing page que nos armó superó todas las expectativas, aumentó las consultas un 40%. Rapidez y muy buena comunicación."',
        test1_role: 'Fundador, TecnoVanguardia',
        test2_initials: 'SR',
        test2_name: 'Sofía Romero',
        test2_text: '"Trabajar con Lautaro fue un placer. Entendió al toque la identidad de nuestra marca y armó una web hermosa y muy rápida. Lo súper recomiendo."',
        test2_role: 'Directora de Marketing, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"El panel de control que desarrolló está impecable. Código muy limpio, excelente experiencia de usuario y sumó funciones clave que no habíamos planeado."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Contacto',
        contact_title: 'Construyamos Algo <span class="gradient-text">Increíble</span>',
        contact_desc: '¿Tenés un proyecto en mente? Me encantaría escucharlo. Completá el formulario y te respondo en menos de 24 horas.',
        contact_location: 'Disponible en todo el mundo (Remoto)',
        form_name: 'Tu Nombre',
        form_name_ph: 'Juan Pérez',
        form_email: 'Tu Email',
        form_budget: 'Rango de Presupuesto',
        form_budget_default: 'Seleccioná tu presupuesto',
        form_budget_1: '$100 — $300',
        form_budget_2: '$300 — $500',
        form_budget_3: '$500 — $1.000',
        form_budget_4: '$1.000+',
        form_message: 'Detalles del Proyecto',
        form_message_ph: 'Contame sobre tu proyecto...',
        form_submit: 'Enviar Mensaje',

        // Footer
        footer_tagline: 'Creando experiencias digitales que generan impacto.',
        footer_copy: '© 2026 Lautaro. Todos los derechos reservados.',

        // Form success
        form_success_title: '¡Mensaje Enviado!',
        form_success_text: '¡Gracias, {name}! Te respondo en menos de 24 horas.',
    },

    pt: {
        // Nav
        nav_about: 'Sobre Mim',
        nav_services: 'Serviços',
        nav_projects: 'Projetos',
        nav_reviews: 'Avaliações',
        nav_contact: 'Fale Comigo',

        // Hero
        hero_badge: 'Disponível para novos projetos',
        hero_title: 'Eu Crio<br><span class="gradient-text">Experiências Digitais</span>',
        hero_subtitle: 'Desenvolvedor Web & Designer criando sites modernos e de alto desempenho que geram resultados reais para empresas em todo o mundo.',
        hero_cta_work: 'Ver Meu Trabalho',
        hero_cta_talk: 'Fale Comigo',
        stat_projects: 'Projetos Criados',
        stat_clients: 'Clientes Satisfeitos',
        stat_satisfaction: 'Satisfação',
        scroll_text: 'Role para explorar',

        // About
        about_tag: 'Sobre Mim',
        about_title: 'Transformando Ideias em <span class="gradient-text">Realidade Perfeita</span>',
        about_p1: 'Sou um desenvolvedor web apaixonado que transforma ideias de negócios em experiências digitais incríveis. Especializo-me na criação de sites rápidos, modernos e responsivos que não apenas parecem incríveis, mas também <strong>convertem visitantes em clientes</strong>.',
        about_p2: 'Seja para uma landing page elegante, um site corporativo completo ou um aplicativo web sob medida — entrego qualidade premium no prazo, sempre. Minha abordagem combina tecnologia de ponta com design humanizado para criar soluções que realmente se destacam.',
        about_h1: 'Entrega Rápida — 2 a 5 dias úteis',
        about_h2: '100% Responsivo em todos os dispositivos',
        about_h3: 'Otimizado para SEO nos mecanismos de busca',
        about_h4: 'Revisões Ilimitadas até você ficar satisfeito',
        tech_title: 'Tecnologias',

        // Services
        services_tag: 'O Que Eu Faço',
        services_title: 'Serviços Que <span class="gradient-text">Geram Resultados</span>',
        services_desc: 'De landing pages simples a aplicações web complexas — ofereço soluções de ponta a ponta personalizadas para as necessidades do seu negócio.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'Landing pages de alta conversão projetadas para capturar leads e gerar vendas. Rápidas, bonitas e otimizadas.',
        svc1_price: 'A partir de $150',
        svc2_title: 'Sites Corporativos',
        svc2_desc: 'Sites completos com várias páginas que estabelecem a presença online profissional e a credibilidade da sua marca.',
        svc2_price: 'A partir de $300',
        svc3_title: 'E-Commerce',
        svc3_desc: 'Lojas online que tornam as vendas fluidas. Catálogos de produtos, carrinho de compras e integração de pagamentos.',
        svc3_price: 'A partir de $500',
        svc4_title: 'Aplicações Web',
        svc4_desc: 'Sistemas web customizados com recursos dinâmicos — painéis de controle, ferramentas, plataformas SaaS e mais.',
        svc4_price: 'A partir de $800',
        svc5_title: 'Redesenho de Sites',
        svc5_desc: 'Transforme seu site desatualizado em uma experiência moderna, rápida e responsiva para celular que impressiona.',
        svc5_price: 'A partir de $200',
        svc6_title: 'Otimização de SEO',
        svc6_desc: 'Melhore seu posicionamento nos buscadores com SEO técnico, otimização de performance e melhores práticas.',
        svc6_price: 'A partir de $100',

        // Projects
        projects_tag: 'Meu Trabalho',
        projects_title: 'Projetos <span class="gradient-text">Destacados</span>',
        projects_desc: 'Uma seleção de trabalhos recentes mostrando minha versatilidade — de restaurantes elegantes a plataformas SaaS robustas.',
        proj1_desc: 'Site elegante de restaurante com reservas online, menu interativo e galeria imersiva.',
        proj2_desc: 'Site arrojado de agência de marketing com animações dinâmicas, estudos de caso e formulários de conversão.',
        proj3_desc: 'Portfólio de fotografia minimalista com galeria lightbox em tela cheia e transições de página suaves.',
        proj4_desc: 'Painel de gerenciamento em nuvem com analytics em tempo real, autenticação de usuários e faturamento de assinatura.',
        proj_link: 'Ver Projeto',

        // Process
        process_tag: 'Como Eu Trabalho',
        process_title: 'Processo Simples de <span class="gradient-text">3 Etapas</span>',
        step1_title: 'Descoberta',
        step1_desc: 'Alinhamos seus objetivos, público-alvo e visão. Faço as perguntas certas para entender exatamente o que você precisa.',
        step2_title: 'Construção & Iteração',
        step2_desc: 'Desenvolvo seu projeto com feedbacks regulares. Você verá o progresso e dará suas sugestões ao longo do processo.',
        step3_title: 'Lançamento & Suporte',
        step3_desc: 'Publicamos seu projeto refinado e forneço suporte contínuo para garantir que tudo funcione perfeitamente.',

        // Testimonials
        testimonials_tag: 'Depoimentos',
        testimonials_title: 'O Que os Clientes <span class="gradient-text">Dizem</span>',
        test1_initials: 'MS',
        test1_name: 'Martim Silva',
        test1_text: '"Trabalho absolutamente fenomenal. A landing page que ele construiu para nós aumentou nossas conversões em 40%. Entrega rápida, comunicação incrível e o design superou nossas expectativas."',
        test1_role: 'Fundador, TecnoVanguarda',
        test2_initials: 'SR',
        test2_name: 'Sofia Romero',
        test2_text: '"Trabalhar com o Lautaro foi muito fácil. Ele entendeu nossa marca perfeitamente e entregou um site que realmente representa quem somos. Com certeza contratarei novamente para projetos futuros."',
        test2_role: 'Diretora de Marketing, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"O painel SaaS que ele desenvolveu é incrivelmente polido. Código limpo, ótima experiência do usuário e ele ainda implementou recursos que não havíamos pensado. Profissional de verdade."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Entre em Contato',
        contact_title: 'Vamos Criar Algo <span class="gradient-text">Incrível</span>',
        contact_desc: 'Tem um projeto em mente? Eu adoraria ouvir a respeito. Preencha o formulário e responderei em até 24 horas.',
        contact_location: 'Disponível para todo o mundo (Remoto)',
        form_name: 'Seu Nome',
        form_name_ph: 'João Silva',
        form_email: 'Seu E-mail',
        form_budget: 'Faixa de Orçamento',
        form_budget_default: 'Selecione seu orçamento',
        form_budget_1: '$100 — $300',
        form_budget_2: '$300 — $500',
        form_budget_3: '$500 — $1.000',
        form_budget_4: '$1.000+',
        form_message: 'Detalhes do Projeto',
        form_message_ph: 'Fale sobre o seu projeto...',
        form_submit: 'Enviar Mensagem',

        // Footer
        footer_tagline: 'Criando experiências digitais que geram impacto.',
        footer_copy: '© 2026 Lautaro. Todos os direitos reservados.',

        // Form success
        form_success_title: 'Mensagem Enviada!',
        form_success_text: 'Obrigado, {name}! Entrarei em contato em até 24 horas.',
    }
};

// =====================================================
// i18n ENGINE
// =====================================================
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // data-i18n → textContent (plain text)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            // For elements that contain simple HTML (strong tags), use innerHTML
            if (t[key].includes('<strong>')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // data-i18n-html → innerHTML (rich text with spans, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update page title
    const titles = {
        en: 'Lautaro | Web Developer & Digital Creator',
        es: 'Lautaro | Desarrollador Web & Creador Digital',
        pt: 'Lautaro | Desenvolvedor Web & Criador Digital'
    };
    document.title = titles[lang] || titles.en;

    // Update meta description
    const descriptions = {
        en: 'Professional web developer specializing in modern, high-performance websites and web applications.',
        es: 'Desarrollador web profesional especializado en sitios web modernos y de alto rendimiento.',
        pt: 'Desenvolvedor web profissional especializado em sites modernos e de alto desempenho.'
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptions[lang] || descriptions.en);
}

// =====================================================
// MAIN APP
// =====================================================
document.addEventListener('DOMContentLoaded', () => {

    // ===== APPLY SAVED LANGUAGE =====
    applyTranslations(currentLang);

    // ===== LANGUAGE TOGGLE =====
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            const lang = btn.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                applyTranslations(lang);
            }
        });
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ===== MOBILE MENU TOGGLE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        countersAnimated = true;

        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    };

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            if (!data.name || !data.email || !data.message) return;

            // Disable button / show sending state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>${currentLang === 'es' ? 'Enviando...' : 'Sending...'}</span>`;

            // FormSubmit configuration
            data._subject = `Nuevo mensaje de portfolio: ${data.name}`;
            
            fetch("https://formsubmit.co/ajax/lmaos.designer@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    const t = translations[currentLang];
                    const successText = t.form_success_text.replace('{name}', data.name);

                    contactForm.innerHTML = `
                        <div class="form-success-message">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <h3>${t.form_success_title}</h3>
                            <p>${successText}</p>
                        </div>
                    `;
                    contactForm.classList.add('success');
                } else {
                    throw new Error("Failed to send");
                }
            })
            .catch(error => {
                console.error('FormSubmit Error:', error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                alert(currentLang === 'es' ? 'Hubo un error al enviar el mensaje. Por favor, intentalo de nuevo.' : 'There was an error sending the message. Please try again.');
            });
        });
    }

    // ===== PARALLAX EFFECT FOR HERO ORBS =====
    const heroOrbs = document.querySelectorAll('.hero-orb');

    if (window.matchMedia('(min-width: 768px)').matches) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            heroOrbs.forEach((orb, i) => {
                const speed = (i + 1) * 8;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    // ===== PROJECT CARD TILT EFFECT =====
    const projectCards = document.querySelectorAll('.project-card');

    if (window.matchMedia('(min-width: 768px)').matches) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ===== SERVICE CARD GLOW FOLLOW =====
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--glow-x', `${x}px`);
            card.style.setProperty('--glow-y', `${y}px`);
        });
    });

    // ===== PRELOADER (fade out body) =====
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    if (document.readyState === 'complete') {
        document.body.style.opacity = '1';
    }

});
