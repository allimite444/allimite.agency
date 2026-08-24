/* =====================================================
   PORTFOLIO - INTERACTIVE SCRIPTS + i18n
   ===================================================== */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        // Nav
        nav_about: 'About Us',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_reviews: 'Reviews',
        nav_contact: "Let's Talk",

        // Hero
        hero_badge: 'Available for new projects',
        hero_title: 'We Craft<br><span class="gradient-text">Digital Experiences</span>',
        hero_subtitle: 'Digital Creative Agency building modern, high-performance websites and web apps that drive real results for businesses worldwide.',
        hero_cta_work: 'Our Work',
        hero_cta_talk: "Let's Talk",
        stat_projects: 'Projects Built',
        stat_clients: 'Happy Clients',
        stat_satisfaction: 'Satisfaction',
        scroll_text: 'Scroll to explore',

        // About
        about_tag: 'About Us',
        about_title: 'Turning Ideas into <span class="gradient-text">Pixel-Perfect</span> Reality',
        about_p1: "We are a passionate team of digital creators who transform business ideas into stunning digital experiences. We specialize in creating fast, modern, and responsive websites that not only look incredible but also <strong>convert visitors into customers</strong>.",
        about_p2: "Whether you need a sleek landing page, a full business website, or a custom web application — we deliver premium quality on time, every time. Our approach combines cutting-edge technology with thoughtful design to create solutions that truly stand out.",
        about_h1: 'Fast and efficient delivery',
        about_h2: '100% Responsive on all devices',
        about_h3: 'SEO Optimized for search engines',
        about_h4: "Unlimited Revisions until you're happy",
        tech_title: 'Tech Stack',

        // Founder
        founder_tag: "CEO & Founder",
        founder_title: "Lautaro Silvero",
        founder_p1: "Hello! Welcome to Allimite Agency. I am Lautaro Silvero, 27 years old, and from the province of Misiones, Argentina, I lead this project as CEO and Founder.",
        founder_p2: "My goal from day one has been to break traditional barriers and truly push our clients' potential to the limit. In a constantly changing digital environment, we focus on creating solid, innovative, and personalized strategies. Here, we don't just shape ideas, we build the success of your brand.",

        // Services
        services_tag: 'What We Do',
        services_title: 'Services That <span class="gradient-text">Deliver Results</span>',
        services_desc: 'From simple landing pages to complex web applications — we offer end-to-end solutions tailored to your business needs.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'High-converting landing pages designed to capture leads and drive sales. Fast, beautiful, and optimized.',
        svc2_title: 'Business Websites',
        svc2_desc: "Complete multi-page websites that establish your brand's professional online presence and credibility.",
        svc3_title: 'E-Commerce',
        svc3_desc: 'Online stores that make selling seamless. Product catalogs, shopping carts, and payment integration.',
        svc4_title: 'Web Applications',
        svc4_desc: 'Custom web apps with dynamic functionality — dashboards, tools, SaaS platforms, and more.',
        svc5_title: 'Website Redesign',
        svc5_desc: 'Transform your outdated website into a modern, fast, mobile-friendly experience that impresses.',
        svc6_title: 'SEO Optimization',
        svc6_desc: 'Boost your search engine rankings with technical SEO, performance tuning, and best practices.',
        svc7_title: 'Automations & Bots',
        svc7_desc: 'Automated workflows with n8n, WhatsApp chatbots, email automations, and AI agents to streamline support and business operations.',
        svc_cta: 'Learn More',

        // Projects
        projects_tag: 'Our Work',
        projects_title: 'Featured <span class="gradient-text">Projects</span>',
        projects_desc: 'A selection of recent work showcasing our range — from elegant restaurants to powerful SaaS platforms.',
        proj1_desc: 'Elegant restaurant website with online reservations, menu showcase, and immersive gallery.',
        proj2_desc: 'Bold marketing agency website with dynamic animations, case studies, and lead generation forms.',
        proj3_desc: 'Minimalist photography portfolio with fullscreen lightbox gallery and smooth page transitions.',
        proj4_desc: 'Cloud management dashboard with real-time analytics, user authentication, and subscription billing.',
        proj5_desc: 'Single-product Shopify e-commerce store for HydroPore Pro™, a hydro-facial cleansing device. Spa-inspired design with video demos and high-conversion sales funnel.',
        proj_link: 'View Project',

        // Process
        process_tag: 'How We Work',
        process_title: 'Simple <span class="gradient-text">3-Step</span> Process',
        step1_title: 'Discovery',
        step1_desc: "We discuss your goals, target audience, and vision. We'll ask the right questions to understand exactly what you need.",
        step2_title: 'Build & Iterate',
        step2_desc: "We design and develop your project with regular check-ins. You'll see progress and provide feedback throughout.",
        step3_title: 'Launch & Support',
        step3_desc: 'We deploy your polished project and we provide ongoing support to ensure everything runs smoothly.',

        // Testimonials
        testimonials_tag: 'Client Love',
        testimonials_title: 'What People <span class="gradient-text">Say</span>',
        test1_initials: 'MR',
        test1_name: 'Mark Reynolds',
        test1_text: '"Absolutely phenomenal work. The landing page they built for us increased our conversions by 40%. Fast delivery, amazing communication, and the design exceeded our expectations."',
        test1_role: 'CEO, TechVentures',
        test2_initials: 'SC',
        test2_name: 'Sarah Chen',
        test2_text: '"Working with ALLIMITE Agency was a breeze. They understood our brand perfectly and delivered a website that truly represents who we are. Will definitely hire again for future projects."',
        test2_role: 'Founder, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"The SaaS dashboard they developed is incredibly polished. Clean code, great UX, and they even implemented features we hadn\'t thought of. True professionals."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Get in Touch',
        contact_title: "Let's Build Something <span class=\"gradient-text\">Amazing</span>",
        contact_desc: "Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.",
        contact_location: 'Available Worldwide (Remote)',
        form_name: 'Your Name',
        form_name_ph: 'John Doe',
        form_email: 'Your Email',
        form_phone: 'Phone/WhatsApp (Optional)',
        form_phone_ph: '+1 (555) 000-0000',
        form_budget: 'Budget Range',
        form_budget_default: 'Select your budget',
        form_budget_1: '$1,500 — $3,000',
        form_budget_2: '$3,000 — $7,000',
        form_budget_3: '$7,000 — $15,000',
        form_budget_4: '$15,000+',
        form_message: 'Project Details',
        form_message_ph: 'Tell us about your project...',
        form_submit: 'Send Message',

        // Footer
        footer_tagline: 'Building digital experiences that make an impact.',
        footer_copy: '© 2026 ALLIMITE Agency. All rights reserved.',

        // Form success
        form_success_title: 'Message Sent!',
        form_success_text: "Thank you, {name}! We'll get back to you within 24 hours.",
    },

    es: {
        // Nav
        nav_about: 'Sobre Nosotros',
        nav_services: 'Servicios',
        nav_projects: 'Proyectos',
        nav_reviews: 'Opiniones',
        nav_contact: 'Hablemos',

        // Hero
        hero_badge: 'Disponible para nuevos proyectos',
        hero_title: 'Creamos<br><span class="gradient-text">Experiencias Digitales</span>',
        hero_subtitle: 'Agencia Creativa Digital creando sitios web modernos y de alto rendimiento que generan resultados reales para empresas en todo el mundo.',
        hero_cta_work: 'Nuestro Trabajo',
        hero_cta_talk: 'Hablemos',
        stat_projects: 'Proyectos Realizados',
        stat_clients: 'Clientes Felices',
        stat_satisfaction: 'Satisfacción',
        scroll_text: 'Deslizá para explorar',

        // About
        about_tag: 'Sobre Nosotros',
        about_title: 'Convirtiendo Ideas en <span class="gradient-text">Realidad Perfecta</span>',
        about_p1: 'Somos un equipo apasionado de creadores digitales que transformamos ideas de negocio en experiencias digitales impactantes. Nos especializamos en crear sitios web rápidos, modernos y adaptables que no solo se ven increíbles, sino que también <strong>convierten visitantes en clientes</strong>.',
        about_p2: 'Ya sea que necesiten una landing page elegante, un sitio web empresarial completo o una aplicación web personalizada — entregamos calidad premium a tiempo, siempre. Nuestro enfoque combina tecnología de vanguardia con diseño cuidadoso para crear soluciones que realmente destacan.',
        about_h1: 'Entrega rápida y eficiente',
        about_h2: '100% Adaptable en todos los dispositivos',
        about_h3: 'SEO Optimizado para buscadores',
        about_h4: 'Revisiones Ilimitadas hasta que estén satisfechos',
        tech_title: 'Tecnologías',

        // Founder
        founder_tag: "CEO y Fundador",
        founder_title: "Lautaro Silvero",
        founder_p1: "¡Hola! Bienvenidos a Allimite Agency. Soy Lautaro Silvero, tengo 27 años y desde la provincia de Misiones, Argentina, lidero este proyecto como CEO y Fundador.",
        founder_p2: "Mi objetivo desde el primer día ha sido romper las barreras tradicionales y llevar el potencial de nuestros clientes verdaderamente al límite. En un entorno digital que cambia constantemente, nos enfocamos en crear estrategias sólidas, innovadoras y personalizadas. Aquí no solo plasmamos ideas, construimos el éxito de tu marca.",

        // Services
        services_tag: 'Qué Hacemos',
        services_title: 'Servicios que <span class="gradient-text">Dan Resultados</span>',
        services_desc: 'Desde landing pages simples hasta aplicaciones web complejas — ofrecemos soluciones integrales adaptadas a las necesidades de su negocio.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'Landing pages de alta conversión diseñadas para captar leads e impulsar ventas. Rápidas, atractivas y optimizadas.',
        svc2_title: 'Sitios Empresariales',
        svc2_desc: 'Sitios web completos de varias páginas que establecen la presencia profesional online de su marca.',
        svc3_title: 'E-Commerce',
        svc3_desc: 'Tiendas online que hacen que vender sea fácil. Catálogos, carritos de compra e integración de pagos.',
        svc4_title: 'Aplicaciones Web',
        svc4_desc: 'Apps web personalizadas con funcionalidad dinámica — dashboards, herramientas, plataformas SaaS y más.',
        svc5_title: 'Rediseño Web',
        svc5_desc: 'Transformamos su sitio web obsoleto en una experiencia moderna, rápida y mobile-friendly que impresiona.',
        svc6_title: 'Optimización SEO',
        svc6_desc: 'Mejoramos su posicionamiento en buscadores con SEO técnico, optimización de rendimiento y mejores prácticas.',
        svc7_title: 'Automatizaciones & Bots',
        svc7_desc: 'Flujos de trabajo automatizados con n8n, chatbots de WhatsApp, automatizaciones de correo electrónico e IA para optimizar la atención y procesos.',
        svc_cta: 'Conocer Más',

        // Projects
        projects_tag: 'Nuestro Trabajo',
        projects_title: 'Proyectos <span class="gradient-text">Destacados</span>',
        projects_desc: 'Una selección de trabajos recientes mostrando nuestra versatilidad — desde restaurantes elegantes hasta plataformas SaaS.',
        proj1_desc: 'Sitio web elegante de restaurante con reservas online, menú interactivo y galería inmersiva.',
        proj2_desc: 'Sitio web audaz de agencia de marketing con animaciones dinámicas, casos de estudio y formularios de captación.',
        proj3_desc: 'Portfolio minimalista de fotografía con galería lightbox a pantalla completa y transiciones suaves.',
        proj4_desc: 'Dashboard de gestión en la nube con analytics en tiempo real, autenticación y facturación por suscripción.',
        proj5_desc: 'Tienda e-commerce monoproducto en Shopify para HydroPore Pro™, un limpiador facial por hidro-succión. Diseño spa con demostraciones en video y embudo de alta conversión.',
        proj_link: 'Ver Proyecto',

        // Process
        process_tag: 'Cómo Trabajamos',
        process_title: 'Proceso Simple de <span class="gradient-text">3 Pasos</span>',
        step1_title: 'Descubrimiento',
        step1_desc: 'Conversamos sobre sus objetivos, público objetivo y visión. Hacemos las preguntas correctas para entender exactamente lo que necesitan.',
        step2_title: 'Desarrollo e Iteración',
        step2_desc: 'Diseñamos y desarrollamos su proyecto con revisiones regulares. Van a ver el progreso y dar feedback durante todo el proceso.',
        step3_title: 'Lanzamiento y Soporte',
        step3_desc: 'Desplegamos su proyecto terminado y brindamos soporte continuo para asegurar que todo funcione perfecto.',

        // Testimonials
        testimonials_tag: 'Opiniones',
        testimonials_title: 'Lo que Dicen nuestros <span class="gradient-text">Clientes</span>',
        test1_initials: 'MG',
        test1_name: 'Martín Gómez',
        test1_text: '"Un laburo espectacular. La landing page que nos armaron superó todas las expectativas, aumentó las consultas un 40%. Rapidez y muy buena comunicación."',
        test1_role: 'Fundador, TecnoVanguardia',
        test2_initials: 'SR',
        test2_name: 'Sofía Romero',
        test2_text: '"Trabajar con ALLIMITE Agency fue un placer. Entendieron al toque la identidad de nuestra marca y armaron una web hermosa y muy rápida. Los súper recomiendo."',
        test2_role: 'Directora de Marketing, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"El panel de control que desarrollaron está impecable. Código muy limpio, excelente experiencia de usuario y sumaron funciones clave que no habíamos planeado. Verdaderos profesionales."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Contacto',
        contact_title: 'Construyamos Algo <span class="gradient-text">Increíble</span>',
        contact_desc: '¿Tienen un proyecto en mente? Nos encantaría escucharlo. Completen el formulario y les respondemos en menos de 24 horas.',
        contact_location: 'Disponible en todo el mundo (Remoto)',
        form_name: 'Tu Nombre',
        form_name_ph: 'Juan Pérez',
        form_email: 'Tu Email',
        form_phone: 'Teléfono/WhatsApp (Opcional)',
        form_phone_ph: '+54 9 11 0000-0000',
        form_budget: 'Rango de Presupuesto',
        form_budget_default: 'Seleccioná tu presupuesto',
        form_budget_1: '$1,500 — $3,000',
        form_budget_2: '$3,000 — $7,000',
        form_budget_3: '$7.000 — $15.000',
        form_budget_4: '$15.000+',
        form_message: 'Detalles del Proyecto',
        form_message_ph: 'Contanos sobre tu proyecto...',
        form_submit: 'Enviar Mensaje',

        // Footer
        footer_tagline: 'Creando experiencias digitales que generan impacto.',
        footer_copy: '© 2026 ALLIMITE Agency. Todos los derechos reservados.',

        // Form success
        form_success_title: '¡Mensaje Enviado!',
        form_success_text: '¡Gracias, {name}! Les respondemos en menos de 24 horas.',
    },

    pt: {
        // Nav
        nav_about: 'Sobre Nós',
        nav_services: 'Serviços',
        nav_projects: 'Projetos',
        nav_reviews: 'Avaliações',
        nav_contact: 'Fale Conosco',

        // Hero
        hero_badge: 'Disponível para novos projetos',
        hero_title: 'Nós Criamos<br><span class="gradient-text">Experiências Digitais</span>',
        hero_subtitle: 'Agência Criativa Digital criando sites modernos e de alto desempenho que geram resultados reais para empresas em todo o mundo.',
        hero_cta_work: 'Nosso Trabalho',
        hero_cta_talk: 'Fale Conosco',
        stat_projects: 'Projetos Criados',
        stat_clients: 'Clientes Satisfeitos',
        stat_satisfaction: 'Satisfação',
        scroll_text: 'Role para explorar',

        // About
        about_tag: 'Sobre Nós',
        about_title: 'Transformando Ideias em <span class="gradient-text">Realidade Perfeita</span>',
        about_p1: 'Somos uma equipe apaixonada de criadores digitais que transforma ideias de negócios em experiências digitais incríveis. Especializamo-nos na criação de sites rápidos, modernos e adaptáveis que não apenas parecem incríveis, mas também <strong>convertem visitantes em clientes</strong>.',
        about_p2: 'Seja para uma landing page elegante, um site corporativo completo ou um aplicativo web sob medida — entregamos qualidade premium no prazo, sempre. Nossa abordagem combina tecnologia de ponta com design humanizado para criar soluções que realmente se destacam.',
        about_h1: 'Entrega rápida e eficiente',
        about_h2: '100% Adaptável em todos os dispositivos',
        about_h3: 'Otimizado para SEO nos mecanismos de busca',
        about_h4: 'Revisões Ilimitadas até você ficar satisfeito',
        tech_title: 'Tecnologias',

        // Founder
        founder_tag: "CEO e Fundador",
        founder_title: "Lautaro Silvero",
        founder_p1: "Olá! Bem-vindos à Allimite Agency. Sou Lautaro Silvero, tenho 27 anos e da província de Misiones, Argentina, lidero este projeto como CEO e Fundador.",
        founder_p2: "Meu objetivo desde o primeiro dia tem sido quebrar as barreiras tradicionais e levar o potencial de nossos clientes verdadeiramente ao limite. Em um ambiente digital que muda constantemente, nos concentramos em criar estratégias sólidas, inovadoras e personalizadas. Aqui não apenas moldamos ideias, construímos o sucesso da sua marca.",

        // Services
        services_tag: 'O Que Fazemos',
        services_title: 'Serviços Que <span class="gradient-text">Geram Resultados</span>',
        services_desc: 'De landing pages simples a aplicações web complexas — oferecemos soluções de ponta a ponta personalizadas para as necessidades do seu negócio.',
        svc1_title: 'Landing Pages',
        svc1_desc: 'Landing pages de alta conversão projetadas para capturar leads e gerar vendas. Rápidas, bonitas e otimizadas.',
        svc2_title: 'Sites Corporativos',
        svc2_desc: 'Sites completos com várias páginas que estabelecem a presença online profissional e a credibilidade da sua marca.',
        svc3_title: 'E-Commerce',
        svc3_desc: 'Lojas online que tornam as vendas fluidas. Catálogos de produtos, carrinho de compras e integração de pagamentos.',
        svc4_title: 'Aplicações Web',
        svc4_desc: 'Sistemas web customizados com recursos dinâmicos — painéis de controle, ferramentas, plataformas SaaS e mais.',
        svc5_title: 'Redesenho de Sites',
        svc5_desc: 'Transformamos seu site desatualizado em uma experiência moderna, rápida e adaptável para celular que impressiona.',
        svc6_title: 'Otimização de SEO',
        svc6_desc: 'Melhore seu posicionamento nos buscadores com SEO técnico, otimização de performance e melhores práticas.',
        svc7_title: 'Automações & Bots',
        svc7_desc: 'Fluxos de trabalho automatizados com n8n, chatbots do WhatsApp, automações de e-mail e IA para otimizar atendimento e processos.',
        svc_cta: 'Saiba Mais',

        // Projects
        projects_tag: 'Nosso Trabalho',
        projects_title: 'Projetos <span class="gradient-text">Destacados</span>',
        projects_desc: 'Uma seleção de trabalhos recentes mostrando nossa versatilidade — de restaurantes elegantes a plataformas SaaS robustas.',
        proj1_desc: 'Site elegante de restaurante com reservas online, menu interativo e galeria imersiva.',
        proj2_desc: 'Site arrojado de agência de marketing com animações dinâmicas, estudos de caso e formulários de conversão.',
        proj3_desc: 'Portfólio de fotografia minimalista com galeria lightbox em tela cheia e transições de página suaves.',
        proj4_desc: 'Painel de gerenciamento em nuvem com analytics em tempo real, autenticação de usuários e faturamento de assinatura.',
        proj5_desc: 'Loja e-commerce monoproduto na Shopify para HydroPore Pro™, um limpador facial por hidro-sucção. Design spa com demonstrações em vídeo e funil de alta conversão.',
        proj_link: 'Ver Projeto',

        // Process
        process_tag: 'Como Trabalhamos',
        process_title: 'Processo Simples de <span class="gradient-text">3 Etapas</span>',
        step1_title: 'Descoberta',
        step1_desc: 'Alinhamos seus objetivos, público-alvo e visão. Fazemos as perguntas certas para entender exatamente o que você precisa.',
        step2_title: 'Construção & Iteração',
        step2_desc: 'Desenvolvemos seu projeto com feedbacks regulares. Você verá o progresso e dará suas sugestões ao longo do processo.',
        step3_title: 'Lançamento & Suporte',
        step3_desc: 'Publicamos seu projeto refinado e fornecemos suporte contínuo para garantir que tudo funcione perfeitamente.',

        // Testimonials
        testimonials_tag: 'Depoimentos',
        testimonials_title: 'O Que os Clientes <span class="gradient-text">Dizem</span>',
        test1_initials: 'MS',
        test1_name: 'Martim Silva',
        test1_text: '"Trabalho absolutamente fenomenal. A landing page que eles construíram para nós aumentou nossas conversões em 40%. Entrega rápida, comunicação incrível e o design superou nossas expectativas."',
        test1_role: 'Fundador, TecnoVanguarda',
        test2_initials: 'SR',
        test2_name: 'Sofia Romero',
        test2_text: '"Trabalhar com a ALLIMITE Agency foi muito fácil. Eles entenderam nossa marca perfeitamente e entregaram um site que realmente representa quem somos. Com certeza contrataremos novamente para projetos futuros."',
        test2_role: 'Diretora de Marketing, NovaBrand',
        test3_initials: 'JD',
        test3_name: 'James Donovan',
        test3_text: '"O painel SaaS que eles desenvolveram é incrivelmente polido. Código limpo, ótima experiência do usuário e eles ainda implementaram recursos que não havíamos pensado. Profissionais de verdade."',
        test3_role: 'CTO, CloudFlow',

        // Contact
        contact_tag: 'Entre em Contato',
        contact_title: 'Vamos Criar Algo <span class="gradient-text">Incrível</span>',
        contact_desc: 'Têm um projeto em mente? Nós adoraríamos ouvir a respeito. Preencham o formulário e responderemos em até 24 horas.',
        contact_location: 'Disponível para todo o mundo (Remoto)',
        form_name: 'Seu Nome',
        form_name_ph: 'João Silva',
        form_email: 'Seu E-mail',
        form_phone: 'Telefone/WhatsApp (Opcional)',
        form_phone_ph: '+55 11 90000-0000',
        form_budget: 'Faixa de Orçamento',
        form_budget_default: 'Selecione seu orçamento',
        form_budget_1: '$1,500 — $3,000',
        form_budget_2: '$3,000 — $7,000',
        form_budget_3: '$7.000 — $15.000',
        form_budget_4: '$15.000+',
        form_message: 'Detalhes do Projeto',
        form_message_ph: 'Fale conosco sobre o seu projeto...',
        form_submit: 'Enviar Mensagem',

        // Footer
        footer_tagline: 'Criando experiências digitais que geram impacto.',
        footer_copy: '© 2026 ALLIMITE Agency. Todos os direitos reservados.',

        // Form success
        form_success_title: 'Mensagem Enviada!',
        form_success_text: 'Obrigado, {name}! Nós responderemos em até 24 horas.',
    }
};

// =====================================================
// i18n ENGINE
// =====================================================
let currentLang = localStorage.getItem('portfolio-lang') || 'es';

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
        en: 'ALLIMITE Agency | Digital Creative Agency',
        es: 'ALLIMITE Agency | Agencia Creativa Digital',
        pt: 'ALLIMITE Agency | Agência Criativa Digital'
    };
    document.title = titles[lang] || titles.en;

    // Update meta description
    const descriptions = {
        en: 'ALLIMITE Agency - Creative digital agency specializing in modern, high-performance websites and digital experiences.',
        es: 'ALLIMITE Agency - Agencia creativa digital especializada en sitios web modernos y de alto rendimiento.',
        pt: 'ALLIMITE Agency - Agência criativa digital especializada em sites modernos e de alto desempenho.'
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
        navbar.classList.toggle('menu-open');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navbar.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navbar.classList.remove('menu-open');
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

    // ===== STAGGERED SERVICE CARD REVEAL =====
    document.querySelectorAll('.services-grid .service-card.reveal').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
    });

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

    // ===== SERVICE CARDS TILT 3D =====
    if (window.matchMedia('(min-width: 768px)').matches) {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

});


/* =====================================================
   WEBMCP - AGENT CONTEXT PROVIDER (navigator.modelContext)
   ===================================================== */
if (typeof navigator !== 'undefined' && navigator.modelContext) {
    const SERVICIOS_AGENCIA = [
        { id: "landing-pages", name: "Landing Pages de Alta Conversión", url: "https://allimite.agency/services/landing-pages.html", price_starting: "$1,500" },
        { id: "sitios-empresariales", name: "Sitios Web Empresariales", url: "https://allimite.agency/services/sitios-empresariales.html", price_starting: "$3,000" },
        { id: "ecommerce", name: "E-Commerce con Pasarelas de Pago", url: "https://allimite.agency/services/ecommerce.html", price_starting: "$3,500" },
        { id: "aplicaciones-web", name: "Aplicaciones Web & SaaS a Medida", url: "https://allimite.agency/services/aplicaciones-web.html", price_starting: "$5,000" },
        { id: "rediseno-web", name: "Rediseño & Modernización Web", url: "https://allimite.agency/services/rediseno-web.html", price_starting: "$2,000" },
        { id: "optimizacion-seo", name: "Optimización SEO y Core Web Vitals", url: "https://allimite.agency/services/optimizacion-seo.html", price_starting: "$1,500" },
        { id: "automatizaciones", name: "Automatizaciones con IA, n8n y WhatsApp", url: "https://allimite.agency/services/automatizaciones.html", price_starting: "$2,500" }
    ];

    navigator.modelContext.provideContext({
        tools: [
            {
                name: "listar_servicios",
                description: "Devuelve el catálogo oficial de servicios de ALLIMITE Agency con URL y precios base.",
                inputSchema: { type: "object", properties: {} },
                async execute() {
                    return {
                        content: [{ type: "text", text: JSON.stringify(SERVICIOS_AGENCIA, null, 2) }]
                    };
                }
            },
            {
                name: "solicitar_presupuesto",
                description: "Envía un requerimiento de proyecto y solicitud de presupuesto a ALLIMITE Agency.",
                inputSchema: {
                    type: "object",
                    required: ["nombre", "email", "servicio", "detalle"],
                    properties: {
                        nombre: { type: "string", description: "Nombre del cliente o empresa." },
                        email: { type: "string", format: "email", description: "Correo electrónico de contacto." },
                        servicio: { type: "string", enum: ["landing-pages", "sitios-empresariales", "ecommerce", "aplicaciones-web", "rediseno-web", "optimizacion-seo", "automatizaciones"] },
                        detalle: { type: "string", description: "Requerimientos y alcance del proyecto." },
                        presupuesto: { type: "string", enum: ["1500-3000", "3000-7000", "7000-15000", "15000+"] }
                    }
                },
                async execute(args) {
                    try {
                        const response = await fetch("https://formsubmit.co/ajax/lmaos.designer@gmail.com", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({
                                name: args.nombre,
                                email: args.email,
                                service: args.servicio,
                                budget: args.presupuesto || "No especificado",
                                message: args.detalle,
                                source: "WebMCP Agent Request"
                            })
                        });
                        if (response.ok) {
                            return { content: [{ type: "text", text: "Solicitud enviada con éxito. El equipo de ALLIMITE Agency responderá dentro de 24 horas." }] };
                        } else {
                            return { content: [{ type: "text", text: "Solicitud recibida. Para contacto directo escribir a lmaos.designer@gmail.com o a través de https://allimite.agency/#contact." }] };
                        }
                    } catch (e) {
                        return { content: [{ type: "text", text: "Error de red al registrar solicitud. Por favor enviar directamente por https://allimite.agency/#contact." }] };
                    }
                }
            }
        ]
    });
}
