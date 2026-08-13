/* =====================================================
   ALLIMITE AGENCY - SERVICES SUBPAGES JS & i18n
   ===================================================== */

const serviceTranslations = {
    en: {
        back_to_home: 'Back to Home',
        category_service: 'Service',
        price_prefix: 'From',
        delivery_prefix: 'Delivery:',
        cta_start_project: 'Start Project',
        what_is_it: 'What is it?',
        why_needed: 'Why is it necessary?',
        key_features: 'Key Features',
        cta_box_title: "Let's Build Something <span class=\"gradient-text\">Amazing</span>",
        cta_box_desc: "Have a project in mind? Contact us today and let's bring it to life within days.",
        cta_box_btn: "Let's Talk",
        footer_tagline: 'Building digital experiences that make an impact.',
        footer_copy: '© 2026 ALLIMITE Agency. All rights reserved.',

        // Services
        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'High-converting pages designed to capture leads, showcase a specific offer, and drive direct sales.',
            meta_price: 'From $150',
            meta_delivery: '2-5 business days',
            what_is_highlight: 'Your core offer on a single page fully optimized to sell.',
            what_is_desc: 'A Landing Page is a single, conversion-focused web page built specifically for marketing or advertising campaigns. Unlike traditional multi-page websites, it removes all distractions (like complex navigation menus or generic info) and is structured around a single, highly persuasive Call to Action (CTA) to convert visitors into customers.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Professionals, Creators & Consultants',
            brand_bullets: [
                '<strong>Direct Sales:</strong> Promote and sell your ebooks, online courses, webinars, or consulting programs directly.',
                '<strong>Lead Generation:</strong> Quickly grow your audience and email subscriber list by offering free downloadable guides.',
                '<strong>Maximum Clarity:</strong> Direct traffic from your social media bio to a clean page that highlights your core value proposition.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For SMBs, Startups & Sales Teams',
            business_bullets: [
                '<strong>Ad Campaigns:</strong> The most effective destination for traffic from Google Ads, Meta Ads (Facebook/Instagram), or TikTok Ads.',
                '<strong>Higher ROI:</strong> Dramatically increase your conversion rates, lowering customer acquisition costs (CAC).',
                '<strong>CRM Automation:</strong> Instantly stream qualified leads directly to your sales team\'s CRM or email list.'
            ],
            feat1_title: 'Conversion Optimization',
            feat1_desc: 'Strategic page layout, persuasive copywriting, and clear calls-to-action designed to maximize conversions.',
            feat2_title: 'Ultra-Fast Loading',
            feat2_desc: 'Optimized code and lightweight assets ensure your page loads in milliseconds, keeping bounce rates low.',
            feat3_title: 'Lead Capture & APIs',
            feat3_desc: 'Forms connected directly to your email, WhatsApp, Google Sheets, Mailchimp, or active CRMs.'
        },

        'sitios-empresariales': {
            title: 'Business Websites',
            subtitle: 'Complete multi-page websites that establish your brand\'s professional online presence and global credibility.',
            meta_price: 'From $300',
            meta_delivery: '5-10 business days',
            what_is_highlight: 'The digital headquarters for your brand to build global trust.',
            what_is_desc: 'A Business Website is a complete multi-page platform that serves as the official digital headquarters for your brand or company. It details who you are, what values you stand for, what services or products you offer, and hosts trust signals like client testimonials, certifications, and case studies to convert search traffic into warm client inquiries.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Professionals, Speakers & Experts',
            brand_bullets: [
                '<strong>Authority Hub:</strong> Centralize your portfolio, speaking engagements, blog, press features, and services in one premium space.',
                '<strong>High Credibility:</strong> Position yourself as a top-tier expert in your niche, justifying premium-pricing for your consulting.',
                '<strong>Long-Term Audience:</strong> Publish articles, newsletters, and resources to build organic search authority (SEO).'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For SMBs, Agencies & Corporations',
            business_bullets: [
                '<strong>Digital HQ:</strong> Establish a robust 24/7 web presence that builds trust and answers frequently asked customer questions.',
                '<strong>Trust Building:</strong> Highlight case studies, team profiles, and certifications to win high-ticket B2B contracts.',
                '<strong>Scalable Platform:</strong> Grow the website as your company grows, adding client portals, career pages, or localized sub-sites.'
            ],
            feat1_title: 'Custom Brand Design',
            feat1_desc: 'No generic templates. We build custom designs tailored specifically to your visual brand guidelines.',
            feat2_title: 'Responsive & Accessible',
            feat2_desc: 'Fully optimized layouts that look and feel pixel-perfect on smartphones, tablets, and wide monitors.',
            feat3_title: 'SEO Infrastructure',
            feat3_desc: 'Proper heading structures, descriptive meta tags, and structured data ready to rank on Google search.'
        },

        'ecommerce': {
            title: 'E-Commerce Stores',
            subtitle: 'Stunning online stores that make selling seamless. Product catalogs, shopping carts, and secure payment integrations.',
            meta_price: 'From $500',
            meta_delivery: '7-15 business days',
            what_is_highlight: 'Your store open 24/7, fully automated and without borders.',
            what_is_desc: 'An E-Commerce Store is a dynamic website that enables companies to exhibit, manage, and sell products or services directly to consumers over the internet. It includes catalog filtering, product description sheets, digital shopping carts, secure checkout gateways, and automated inventory and shipping management.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Content Creators & Influencers',
            brand_bullets: [
                '<strong>Monetize Audience:</strong> Sell your branded merchandise, templates, physical books, presets, or art directly to your fans.',
                '<strong>Digital Products:</strong> Automate delivery of PDF files, design kits, software, or audio courses without shipping costs.',
                '<strong>Direct Connection:</strong> Keep 100% of your customer database and sales profits, skipping third-party platforms.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For Retailers, Distributors & Brands',
            business_bullets: [
                '<strong>24/7 Sales Office:</strong> Capture orders, processes payments, and issue invoices automatically at any hour of the day.',
                '<strong>Global Reach:</strong> Expand your target market beyond physical boundaries to sell regionally, nationally, or worldwide.',
                '<strong>Inventory Control:</strong> Clean dashboard integrations to track stock levels, shipping costs, and customer order history.'
            ],
            feat1_title: 'Secure Payments',
            feat1_desc: 'Seamless integration with Stripe, PayPal, Mercado Pago, and secure SSL checkouts.',
            feat2_title: 'User Experience (UX)',
            feat2_desc: 'Intuitive navigation, advanced search filters, and single-page checkout optimized to prevent cart abandonment.',
            feat3_title: 'Admin Dashboard',
            feat3_desc: 'Easy-to-use control panel to add products, adjust pricing, manage orders, and analyze sales reports.'
        },

        'aplicaciones-web': {
            title: 'Web Applications',
            subtitle: 'Custom web software with dynamic functionality, databases, user portals, and SaaS dashboards.',
            meta_price: 'From $800',
            meta_delivery: '10-20 business days',
            what_is_highlight: 'Custom web software built to automate operations and scale.',
            what_is_desc: 'A Web Application is a highly interactive software application that runs in the browser, powered by a database and custom logic. Unlike static pages, it allows users to create accounts, log in, manipulate data, query complex databases, generate real-time reports, and subscribe to services (SaaS).',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Creators, Teachers & Tech Leaders',
            brand_bullets: [
                '<strong>Interactive Tools:</strong> Offer custom calculators, niche-specific simulators, or exclusive client portals.',
                '<strong>Subscription Hubs:</strong> Launch a private community, premium learning platform, or recurring membership service.',
                '<strong>Proprietary IP:</strong> Build unique tools that elevate your brand\'s value and position you as a true pioneer.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For Startups & Enterprise Teams',
            business_bullets: [
                '<strong>SaaS Development:</strong> Bring your software product idea (SaaS) to market with a scalable, modern database structure.',
                '<strong>Process Automation:</strong> Automate internal operations, client onboarding, reporting, or database management.',
                '<strong>Centralized Data:</strong> Real-time secure dashboards for analytics, CRM, or client portals that increase team efficiency.'
            ],
            feat1_title: 'Modern Architecture',
            feat1_desc: 'Built using React, Next.js, and Node.js for ultra-smooth single-page transitions and robust performance.',
            feat2_title: 'Secure Database & Auth',
            feat2_desc: 'Protected user authentication, database security protocols, and encrypted API connections.',
            feat3_title: 'API Integrations',
            feat3_desc: 'Connect with payment systems (Stripe), artificial intelligence models, CRMs, or external service APIs.'
        },

        'rediseno-web': {
            title: 'Website Redesign',
            subtitle: 'Transform your outdated website into a modern, fast, mobile-friendly experience that inspires trust.',
            meta_price: 'From $200',
            meta_delivery: '5-7 business days',
            what_is_highlight: 'Digital evolution: speed, modern aesthetics, and better UX.',
            what_is_desc: 'A Website Redesign is the comprehensive overhaul of an existing site to modernize its visual aesthetics, optimize its technical code, improve loading speed, and align the interface with current user experience (UX) and mobile standards without losing current search engine authority.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Professionals Evolving Their Brand',
            brand_bullets: [
                '<strong>High-Value Realignment:</strong> Align your website with your current, more premium rates, expertise, and authority.',
                '<strong>Fresh Visuals:</strong> Replace outdated layouts with sleek, glassmorphic typography that reflects your modern style.',
                '<strong>Mobile First:</strong> Ensure clients checking your website from social media links get an exceptional mobile experience.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For Companies Upgrading Tech',
            business_bullets: [
                '<strong>Lower Bounce Rates:</strong> Keep visitors engaged longer by replacing slow, legacy pages with blazing-fast loads.',
                '<strong>Better Conversion:</strong> Restructure user journeys to convert a higher percentage of existing organic traffic.',
                '<strong>Brand Modernization:</strong> Update the company\'s digital identity to match modern competitors and win trust.'
            ],
            feat1_title: 'SEO Rankings Preserved',
            feat1_desc: 'Careful redirect management (301) and metadata preservation so you don\'t lose existing Google search traffic.',
            feat2_title: 'Performance Boost',
            feat2_desc: 'Upgrading dirty, bloated theme code to clean HTML5/CSS3 and optimized assets for speed.',
            feat3_title: 'Modern UX Audit',
            feat3_desc: 'Reorganizing the navigation, layouts, and forms to eliminate friction and maximize conversions.'
        },

        'optimizacion-seo': {
            title: 'SEO Optimization',
            subtitle: 'Boost your search rankings with technical SEO audits, performance tuning, and organic traffic strategies.',
            meta_price: 'From $100',
            meta_delivery: 'Continuous / Variable',
            what_is_highlight: 'Organic search visibility to attract hot leads without ad spend.',
            what_is_desc: 'SEO Optimization is the practice of aligning your website\'s code, architecture, speed, and content with search engine algorithms (like Google). The goal is to rank organically for terms relevant to your business, generating a constant flow of interested visitors without spending on advertising.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Authors, Consultants & Leaders',
            brand_bullets: [
                '<strong>Organic Authority:</strong> Become the go-to authority in your niche when users search for your topics on Google.',
                '<strong>Inbound Clients:</strong> Let clients find you when they are actively looking for the solutions you consult on.',
                '<strong>Credibility boost:</strong> Ranking on the first page of Google instantly reinforces your elite status in the field.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For SMBs, Local Businesses & Startups',
            business_bullets: [
                '<strong>Sustainable Traffic:</strong> Generate leads 24/7 without being dependent on a continuous advertising budget.',
                '<strong>Lower CAC:</strong> Organic traffic has no cost-per-click, significantly reducing your Customer Acquisition Cost.',
                '<strong>Local Visibility:</strong> Optimize for local search to attract nearby clients looking for your products or services.'
            ],
            feat1_title: 'Technical SEO Audit',
            feat1_desc: 'Fixing search indexing issues, site maps, robots.txt, broken links, and site structure errors.',
            feat2_title: 'Speed & Core Web Vitals',
            feat2_desc: 'Tuning page load speeds to meet Google\'s strict Core Web Vitals criteria, giving you an edge in rankings.',
            feat3_title: 'On-Page Optimization',
            feat3_desc: 'Optimizing page titles, headings structure, meta descriptions, image alt tags, and keyword densities.'
        },

        'automatizaciones': {
            title: 'Automations & Bots (WhatsApp / n8n)',
            subtitle: 'Automated workflows, n8n integration, WhatsApp chatbots, and AI agents to scale sales and streamline operations.',
            meta_price: 'From $250',
            meta_delivery: '3-7 business days',
            what_is_highlight: 'Automate repetitive processes, save hours, and instantly respond to clients 24/7.',
            what_is_desc: 'n8n automations and WhatsApp bots connect your apps and systems to operate on autopilot. From lead qualification and sales follow-ups to automated AI responses and real-time syncing with your CRM or Google Sheets.',
            brand_title: 'Personal Brand & Creators',
            brand_subtitle: 'For Consultants, Coaches & Content Creators',
            brand_bullets: [
                '<strong>24/7 WhatsApp Support:</strong> Answer FAQs, book appointments, and share purchase links automatically without staying online.',
                '<strong>Lead Qualification:</strong> Filter high-value leads with interactive menus or AI agents before scheduling calls.',
                '<strong>Massive Time Savings:</strong> Eliminate tedious manual tasks and focus 100% on high-impact work and VIP clients.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For SMBs, E-commerce & Sales Teams',
            business_bullets: [
                '<strong>Process Orchestration with n8n:</strong> Connect WhatsApp, CRMs, payment gateways (Stripe, Mercado Pago), email, and databases seamlessly.',
                '<strong>Instant Replies & AI Chatbots:</strong> Reduce client waiting time to 0 seconds, boosting lead conversion rates.',
                '<strong>Automated Alerts & Reports:</strong> Send order confirmations, payment reminders, and team notifications in real time.'
            ],
            feat1_title: 'Complex n8n Workflows',
            feat1_desc: 'Advanced logical workflows connecting multiple web tools, APIs, and databases.',
            feat2_title: 'Official WhatsApp Chatbots',
            feat2_desc: 'Smart conversational bots designed to handle FAQs, dispatch files, take bookings, and process orders.',
            feat3_title: 'CRM & AI Integration (OpenAI/Gemini)',
            feat3_desc: 'AI-driven virtual agents trained on your business data for human-like customer assistance.'
        }
    },

    es: {
        back_to_home: 'Volver a Inicio',
        category_service: 'Servicio',
        price_prefix: 'Desde',
        delivery_prefix: 'Entrega:',
        cta_start_project: 'Iniciar Proyecto',
        what_is_it: '¿Qué es?',
        why_needed: '¿Por qué es necesario?',
        key_features: 'Características Clave',
        cta_box_title: "Construyamos Algo <span class=\"gradient-text\">Increíble</span>",
        cta_box_desc: "¿Tenés un proyecto en mente? Ponete en contacto con nosotros hoy y hagámoslo realidad en pocos días.",
        cta_box_btn: 'Hablemos',
        footer_tagline: 'Creando experiencias digitales que generan impacto.',
        footer_copy: '© 2026 ALLIMITE Agency. Todos los derechos reservados.',

        // Services
        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'Páginas de alta conversión diseñadas para capturar leads, destacar una oferta y generar ventas directas.',
            meta_price: 'Desde $150',
            meta_delivery: '2-5 días hábiles',
            what_is_highlight: 'Tu oferta principal en una sola página optimizada para vender.',
            what_is_desc: 'Una Landing Page (o página de aterrizaje) es una única página web diseñada específicamente para campañas de marketing o publicidad. A diferencia de un sitio web tradicional, elimina cualquier tipo de distracción (como menús complejos o información secundaria) y se estructura en torno a una única llamada a la acción (CTA) clara y persuasiva, con el objetivo de convertir visitas en clientes.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Profesionales, Creadores y Consultores',
            brand_bullets: [
                '<strong>Ventas Directas:</strong> Promocioná y vendé tus ebooks, cursos online, webinars o servicios de mentoría sin desvíos.',
                '<strong>Captación de leads:</strong> Creá tu base de datos y lista de correos rápidamente regalando recursos descargables (lead magnets).',
                '<strong>Claridad Absoluta:</strong> Dirigí el tráfico de tu link en bio directamente a una página que destaque tu propuesta de valor principal.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, Startups y Equipos de Venta',
            business_bullets: [
                '<strong>Campañas de Anuncios:</strong> El destino ideal para recibir el tráfico de Google Ads, Meta Ads (Facebook/Instagram) o TikTok Ads.',
                '<strong>Mayor Retorno (ROI):</strong> Maximizá el rendimiento de tu presupuesto de marketing reduciendo el Costo de Adquisición de Cliente (CAC).',
                '<strong>Automatización de Datos:</strong> Enviá los datos de los interesados directamente al CRM de tu equipo de ventas o email marketing.'
            ],
            feat1_title: 'Enfoque en Conversión',
            feat1_desc: 'Estructura visual estratégica, textos persuasivos (copywriting) y botones llamativos diseñados para incentivar la acción.',
            feat2_title: 'Carga Ultra Rápida',
            feat2_desc: 'Código limpio y optimización de imágenes para que la página cargue en milisegundos, evitando que los usuarios la abandonen.',
            feat3_title: 'Integración sin Fricción',
            feat3_desc: 'Formularios conectados directamente con tu email, WhatsApp, Google Sheets, Mailchimp o tu CRM preferido.'
        },

        'sitios-empresariales': {
            title: 'Sitios Empresariales',
            subtitle: 'Sitios web completos de varias páginas que establecen la presencia profesional online y la credibilidad global de tu marca.',
            meta_price: 'Desde $300',
            meta_delivery: '5-10 días hábiles',
            what_is_highlight: 'La sede digital de tu empresa para construir confianza global.',
            what_is_desc: 'Un Sitio Empresarial es una plataforma web completa de múltiples secciones que funciona como la sede digital oficial de una marca o empresa. Comunica quién sos, tus valores, qué servicios o productos ofrecés y expone elementos de confianza como testimonios, certificaciones y casos de estudio, para convertir a las visitas de motores de búsqueda en clientes calificados.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Profesionales, Conferencistas y Expertos',
            brand_bullets: [
                '<strong>Hub de Autoridad:</strong> Agrupá tu portfolio, charlas, blog, menciones en prensa y servicios en un espacio premium propio.',
                '<strong>Posicionamiento de Élite:</strong> Proyectá una imagen profesional sólida que te permita cobrar tarifas más altas por tus consultorías.',
                '<strong>Audiencia Orgánica:</strong> Publicá artículos y newsletters para construir autoridad en buscadores de forma gratuita (SEO).'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, Agencias y Corporaciones',
            business_bullets: [
                '<strong>Sede Digital 24/7:</strong> Mostrá una imagen corporativa seria y respondé a las preguntas más frecuentes de tus clientes en cualquier momento.',
                '<strong>Cierre de Contratos:</strong> Destacá casos de éxito detallados y perfiles de tu equipo para ganar contratos B2B de alto valor.',
                '<strong>Estructura Escalable:</strong> Ampliá la web a medida que crece tu negocio, sumando bolsa de trabajo, portal de clientes o sub-sitios.'
            ],
            feat1_title: 'Diseño a Medida',
            feat1_desc: 'No usamos plantillas genéricas. Diseñamos desde cero alineados perfectamente a la identidad visual de tu marca.',
            feat2_title: '100% Responsivo',
            feat2_desc: 'Tu web se verá increíble y se navegará sin problemas desde smartphones, tablets y pantallas de computadora.',
            feat3_title: 'Preparado para SEO',
            feat3_desc: 'Estructura técnica de títulos y etiquetas optimizada para que los buscadores puedan indexar y rankear tu web fácilmente.'
        },

        'ecommerce': {
            title: 'E-Commerce',
            subtitle: 'Tiendas online diseñadas para vender sin fricción. Catálogos, carritos y pasarelas de pago seguras.',
            meta_price: 'Desde $500',
            meta_delivery: '7-15 días hábiles',
            what_is_highlight: 'Tu tienda abierta las 24 horas, de forma automática y sin fronteras.',
            what_is_desc: 'Una tienda E-Commerce es un sitio web dinámico que permite a las empresas exhibir, gestionar y vender productos o servicios directamente por internet. Incluye catálogos interactivos con filtros, fichas de producto detalladas, carrito de compras virtual, pasarela de pago seguro y herramientas automatizadas de control de stock y logística.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Creadores de Contenido e Influencers',
            brand_bullets: [
                '<strong>Monetizá tu Comunidad:</strong> Vendé tus propios productos físicos (merch, libros) o digitales directamente a tus seguidores.',
                '<strong>Automatización de Entregas:</strong> Vendé presets, plantillas, PDFs o cursos digitales con entrega automática por mail tras el pago.',
                '<strong>Independencia Total:</strong> Mantené el 100% de los datos de tus clientes y de tus márgenes de ganancia, sin depender de plataformas de terceros.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Comercios, Distribuidores y Marcas',
            business_bullets: [
                '<strong>Ventas Automatizadas:</strong> Tu tienda toma pedidos y cobra de forma segura las 24 horas del día, los 365 días del año.',
                '<strong>Expansión de Mercado:</strong> Superá las barreras geográficas de un local físico y vendé a todo el país o al mundo entero.',
                '<strong>Gestión Centralizada:</strong> Controlá tu inventario, costos de envío, promociones y base de datos desde un panel intuitivo.'
            ],
            feat1_title: 'Pagos Seguros',
            feat1_desc: 'Integración con las principales pasarelas de pago del mercado como Stripe, PayPal o Mercado Pago, con certificados SSL.',
            feat2_title: 'Navegación Intuitiva',
            feat2_desc: 'Filtros rápidos de productos, buscador predictivo y proceso de compra de un solo paso para evitar carritos abandonados.',
            feat3_title: 'Panel de Administración',
            feat3_desc: 'Controlá tus productos, precios, ofertas, envíos y analizá tus reportes de ventas mensuales de forma simple.'
        },

        'aplicaciones-web': {
            title: 'Aplicaciones Web',
            subtitle: 'Software a medida ejecutable en el navegador. Bases de datos, portales de usuario y plataformas SaaS.',
            meta_price: 'Desde $800',
            meta_delivery: '10-20 días hábiles',
            what_is_highlight: 'Software personalizado que automatiza procesos y escala tu negocio.',
            what_is_desc: 'Una Aplicación Web es una herramienta de software interactiva que se ejecuta en el navegador del usuario y está conectada a bases de datos y lógica de negocios compleja. A diferencia de las páginas estáticas, permite a los usuarios registrarse, iniciar sesión, procesar datos complejos en tiempo real y suscribirse a herramientas digitales (SaaS).',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Creadores, Educadores y Líderes Técnicos',
            brand_bullets: [
                '<strong>Herramientas Exclusivas:</strong> Ofrecé simuladores personalizados, calculadoras específicas de tu nicho o portales privados.',
                '<strong>Plataformas de Suscripción:</strong> Creá tu propia academia online premium con control de usuarios y pagos recurrentes.',
                '<strong>Innovación de Marca:</strong> Lanzá herramientas interactivas que consoliden tu estatus como referente e innovador tecnológico.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Startups y Equipos Corporativos',
            business_bullets: [
                '<strong>Desarrollo de SaaS:</strong> Llevá tu idea de negocio de software al mercado con una base tecnológica escalable y robusta.',
                '<strong>Eficiencia Interna:</strong> Automatizá tareas administrativas, flujos de trabajo de tu equipo o el onboarding de nuevos clientes.',
                '<strong>Sistemas Centralizados:</strong> Dashboards y paneles de analíticas en tiempo real conectados a tus bases de datos corporativas.'
            ],
            feat1_title: 'Tecnología de Vanguardia',
            feat1_desc: 'Desarrollamos con React, Next.js y Node.js para lograr una velocidad insuperable y una experiencia fluida tipo app móvil.',
            feat2_title: 'Seguridad de Datos',
            feat2_desc: 'Autenticación encriptada, bases de datos blindadas contra ataques y conexiones seguras vía APIs.',
            feat3_title: 'Conexión con APIs',
            feat3_desc: 'Sincronizamos tu app con sistemas de pago (Stripe), modelos de Inteligencia Artificial (OpenAI) y herramientas externas.'
        },

        'rediseno-web': {
            title: 'Rediseño Web',
            subtitle: 'Transformamos tu sitio web obsoleto en una experiencia moderna, rápida y adaptable que genera confianza inmediata.',
            meta_price: 'Desde $200',
            meta_delivery: '5-7 días hábiles',
            what_is_highlight: 'Evolución digital: velocidad, estética moderna y mejor UX.',
            what_is_desc: 'El Rediseño Web consiste en reestructurar un sitio web actual para modernizar su aspecto visual, acelerar su velocidad de carga y adaptarlo a los estándares actuales de experiencia de usuario (UX) y usabilidad móvil, sin perder el posicionamiento orgánico ya ganado en buscadores.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Profesionales en Crecimiento',
            brand_bullets: [
                '<strong>Actualización de Valor:</strong> Alineá el diseño de tu web con las nuevas tarifas y el nivel de autoridad que tenés hoy.',
                '<strong>Estilo Premium:</strong> Pasá de un diseño antiguo a una interfaz moderna con tipografías cuidadas y efectos de tendencia (glassmorphism).',
                '<strong>Optimización Móvil:</strong> Lográ que las visitas que llegan desde links en tus redes sociales tengan una navegación impecable.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Empresas en Modernización Técnica',
            business_bullets: [
                '<strong>Menor Rebote:</strong> Retené a los clientes que entraban a tu web y se iban al instante por la lentitud o por verse desactualizada.',
                '<strong>Aumento de Conversión:</strong> Reacomodá el flujo de navegación de la web para convertir más visitas en clientes reales.',
                '<strong>Competitividad Digital:</strong> Renovás tu marca para no quedar por detrás de los competidores más modernos de tu sector.'
            ],
            feat1_title: 'Resguardo de SEO',
            feat1_desc: 'Configuración cuidadosa de redirecciones 301 para asegurar que no pierdas tus posiciones actuales en Google.',
            feat2_title: 'Salto de Rendimiento',
            feat2_desc: 'Eliminamos código innecesario, optimizamos imágenes pesadas y mejoramos las métricas de velocidad (Core Web Vitals).',
            feat3_title: 'Experiencia Limpia',
            feat3_desc: 'Simplificamos la navegación y corregimos textos para que el usuario encuentre lo que busca sin perder tiempo.'
        },

        'optimizacion-seo': {
            title: 'Optimización SEO',
            subtitle: 'Mejoramos tu ranking en motores de búsqueda con SEO técnico, optimización de velocidad y estrategias de contenidos.',
            meta_price: 'Desde $100',
            meta_delivery: 'Continuo / Variable',
            what_is_highlight: 'Visibilidad orgánica para atraer clientes calificados sin pagar publicidad.',
            what_is_desc: 'La Optimización SEO es el conjunto de técnicas de código, estructura y contenido aplicadas a tu sitio web para adaptarlo a los algoritmos de motores de búsqueda (como Google). Su finalidad es lograr que tu web aparezca en los primeros resultados de forma gratuita, atrayendo visitas calificadas continuamente sin pagar publicidad.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Autores, Consultores y Referentes',
            brand_bullets: [
                '<strong>Autoridad Orgánica:</strong> Convertite en el referente principal en tu nicho cuando la gente busque respuestas en Google.',
                '<strong>Clientes Entrantes:</strong> Hacé que personas que no te conocen en redes sociales te descubran justo cuando buscan tus servicios.',
                '<strong>Reconocimiento de Nombre:</strong> Aparecer en los primeros puestos valida instantáneamente tu nivel y trayectoria profesional.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, Startups y Comercios Locales',
            business_bullets: [
                '<strong>Tráfico Sostenible:</strong> Recibí consultas todos los días del año sin depender exclusivamente de un presupuesto publicitario diario.',
                '<strong>Bajo Costo por Lead:</strong> El tráfico SEO no tiene costo por clic, lo que reduce drásticamente tu costo de adquisición a largo plazo.',
                '<strong>SEO Local:</strong> Posicioná tu negocio en tu ciudad para captar al público local que busca tus productos o servicios.'
            ],
            feat1_title: 'Auditoría Técnica Completa',
            feat1_desc: 'Corrección de errores de indexación, sitemaps, robots.txt, enlaces rotos y jerarquía interna de la web.',
            feat2_title: 'Optimización de Carga',
            feat2_desc: 'Mejoramos la velocidad de respuesta del servidor y la optimización de código exigida por las métricas Core Web Vitals de Google.',
            feat3_title: 'SEO On-Page Avanzado',
            feat3_desc: 'Optimización estratégica de títulos, meta descripciones, etiquetas alt de imágenes y densidad balanceada de palabras clave.'
        },

        'automatizaciones': {
            title: 'Automatizaciones & Bots (WhatsApp / n8n)',
            subtitle: 'Flujos de trabajo automatizados, integración de n8n, chatbots de WhatsApp e IA para escalar las ventas y optimizar la atención de tu negocio.',
            meta_price: 'Desde $250',
            meta_delivery: '3-7 días hábiles',
            what_is_highlight: 'Automatiza procesos repetitivos, ahorra tiempo y responde a tus clientes en segundos las 24 horas.',
            what_is_desc: 'Las automatizaciones con n8n y bots de WhatsApp integran tus aplicaciones y sistemas para operar en piloto automático. Desde la calificación e ingesta de prospectos hasta el seguimiento de ventas, respuestas automáticas con Inteligencia Artificial y sincronización en tiempo real con tu CRM o planillas de Google.',
            brand_title: 'Marca Personal & Creadores',
            brand_subtitle: 'Para Consultores, Coaches y Marcas Personales',
            brand_bullets: [
                '<strong>Atención 24/7 en WhatsApp:</strong> Responde dudas frecuentes, agenda citas y envía enlaces de compra en automático sin estar conectado.',
                '<strong>Captación & Calificación de Leads:</strong> Filtra prospectos calificados mediante menús interactivos o IA antes de agendar llamadas.',
                '<strong>Ahorro Masivo de Tiempo:</strong> Elimina tareas manuales repetitivas para enfocarte 100% en crear contenido y atender clientes VIP.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, E-commerce y Equipos Comerciales',
            business_bullets: [
                '<strong>Orquestación de Procesos con n8n:</strong> Conecta WhatsApp, CRM, pasarelas de pago (Mercado Pago, Stripe), correo y bases de datos sin límites.',
                '<strong>Respuestas Inmediatas & Chatbots IA:</strong> Reduce el tiempo de respuesta a 0 segundos, aumentando drásticamente la tasa de conversión.',
                '<strong>Notificaciones & Reportes Automáticos:</strong> Envía confirmaciones de pedido, recordatorios de pago y reportes a tu equipo en tiempo real.'
            ],
            feat1_title: 'Workflows Complejos en n8n',
            feat1_desc: 'Diseño e integración de flujos lógicos avanzados y conexión entre múltiples herramientas web.',
            feat2_title: 'Chatbots de WhatsApp Oficiales',
            feat2_desc: 'Bots conversacionales inteligentes para responder consultas, enviar archivos, procesar pedidos y agendar turnos.',
            feat3_title: 'Integración CRM e IA (OpenAI/Gemini)',
            feat3_desc: 'Agentes virtuales con IA contextualizados con la información de tu empresa para atención humana fluida.'
        }
    },

    pt: {
        back_to_home: 'Voltar ao Início',
        category_service: 'Serviço',
        price_prefix: 'A partir de',
        delivery_prefix: 'Entrega:',
        cta_start_project: 'Iniciar Projeto',
        what_is_it: 'O que é?',
        why_needed: 'Por que é necessário?',
        key_features: 'Recursos Principais',
        cta_box_title: "Vamos Criar Algo <span class=\"gradient-text\">Incrível</span>",
        cta_box_desc: "Tem um projeto em mente? Entre em contato conosco hoje e vamos torná-lo realidade em poucos dias.",
        cta_box_btn: 'Fale Conosco',
        footer_tagline: 'Criando experiências digitais que geram impacto.',
        footer_copy: '© 2026 ALLIMITE Agency. Todos os direitos reservados.',

        // Services
        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'Páginas de alta conversão projetadas para capturar leads, destacar ofertas e gerar vendas diretas.',
            meta_price: 'A partir de $150',
            meta_delivery: '2-5 dias úteis',
            what_is_highlight: 'Sua oferta principal em uma única página otimizada para vender.',
            what_is_desc: 'Uma Landing Page (ou página de destino) é uma página web única construída especificamente para campanhas de marketing ou publicidade. Diferente de um site tradicional, ela elimina qualquer tipo de distração (como menus complexos ou links extras) e foca em uma chamada para ação (CTA) única e persuasiva, visando converter o maior número possível de visitantes em clientes.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Profissionais, Criadores e Consultores',
            brand_bullets: [
                '<strong>Direct Sales:</strong> Promova e venda seus e-books, cursos online, mentorias ou palestras de forma direta e sem desvios.',
                '<strong>Captação de Leads:</strong> Aumente sua lista de e-mails oferecendo materiais gratuitos como PDFs ou guias práticos.',
                '<strong>Foco Total:</strong> Direcione o tráfego do link da sua bio do Instagram para uma página focada apenas em converter.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para PMEs, Startups e Equipes de Vendas',
            business_bullets: [
                '<strong>Tráfego de Anúncios:</strong> O destino ideal para o tráfego vindo de anúncios pagos no Google Ads, Facebook Ads ou TikTok Ads.',
                '<strong>Maior Retorno (ROI):</strong> Aumente a eficácia das suas campanhas, reduzindo diretamente o Custo de Aquisição de Cliente (CAC).',
                '<strong>Automação de Leads:</strong> Envie os dados dos interessados automaticamente para o CRM da sua empresa ou lista de e-mail marketing.'
            ],
            feat1_title: 'Foco Total em Conversão',
            feat1_desc: 'Estrutura estratégica, escrita altamente persuasiva (copywriting) e botões de ação que incentivam o clique.',
            feat2_title: 'Carregamento Rápido',
            feat2_desc: 'Código leve e imagens comprimidas para garantir que a página carregue instantaneamente em celulares e computadores.',
            feat3_title: 'Integrações Automatizadas',
            feat3_desc: 'Formulários de contato conectados ao seu e-mail, WhatsApp, planilhas do Google ou sistemas de CRM.'
        },

        'sitios-empresariales': {
            title: 'Sites Corporativos',
            subtitle: 'Sites completos de várias páginas que estabelecem a presença online profissional e a credibilidade do seu negócio.',
            meta_price: 'A partir de $300',
            meta_delivery: '5-10 dias úteis',
            what_is_highlight: 'A sede digital da sua empresa para construir confiança global.',
            what_is_desc: 'Um Site Corporativo é uma plataforma digital de várias páginas que atua como a sede oficial do seu negócio ou marca na internet. Ele apresenta a história da empresa, seus valores corporativos, a lista completa de serviços ou produtos e exibe selos de confiança, depoimentos de clientes e cases de sucesso para qualificar o público que pesquisa pela sua empresa.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Profissionais, Palestrantes e Especialistas',
            brand_bullets: [
                '<strong>Hub de Autoridade:</strong> Centralize seu portfólio, artigos, aparições na mídia, agenda de palestras e serviços num só lugar.',
                '<strong>Valorização Profissional:</strong> Apresente-se como um especialista de alto nível, justificando valores mais altos por suas consultorias.',
                '<strong>Audiência Orgânica:</strong> Publique conteúdos em um blog integrado para atrair visitas gratuitas do Google (SEO) a longo prazo.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para PMEs, Agências e Empresas',
            business_bullets: [
                '<strong>Presença 24/7:</strong> Tenha um canal oficial confiável que responde às principais dúvidas dos seus clientes a qualquer hora.',
                '<strong>Geração de Negócios:</strong> Apresente estudos de caso detalhados e a equipe da empresa para atrair contratos B2B valiosos.',
                '<strong>Plataforma Expansível:</strong> Adicione novas seções como área de vagas de emprego, portal de clientes ou subpáginas regionalizadas.'
            ],
            feat1_title: 'Design Exclusivo',
            feat1_desc: 'Nada de templates genéricos repetidos. Criamos layouts personalizados, projetados de acordo com a sua identidade visual.',
            feat2_title: '100% Responsivo',
            feat2_desc: 'Layout adaptável que se ajusta perfeitamente à tela de celulares, tablets e computadores de qualquer tamanho.',
            feat3_title: 'Otimização Técnica SEO',
            feat3_desc: 'Estrutura de tags e títulos limpa, permitindo que o Google e outros mecanismos de busca indexem seu site facilmente.'
        },

        'ecommerce': {
            title: 'E-Commerce',
            subtitle: 'Lojas online modernas projetadas para vender de forma fluida. Catálogos, carrinhos e checkout integrado.',
            meta_price: 'A partir de $500',
            meta_delivery: '7-15 dias úteis',
            what_is_highlight: 'Sua loja aberta 24 horas por dia, automatizada e sem fronteiras.',
            what_is_desc: 'Uma loja E-Commerce é um site interativo que permite às empresas exibir, gerenciar e vender seus produtos ou serviços na internet. Possui catálogo de itens com filtros de busca, páginas detalhadas com fotos e descrições, carrinho virtual de compras, processamento de pagamento seguro e controle integrado de entregas e estoque.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Criadores de Conteúdo e Influencers',
            brand_bullets: [
                '<strong>Monetize sua Base:</strong> Venda sua linha de roupas, brindes, livros físicos ou produtos personalizados diretamente aos seus fãs.',
                '<strong>Venda de Infoprodutos:</strong> Comercialize presets, pacotes de design, PDFs ou cursos com envio automático pós-pagamento.',
                '<strong>Controle de Clientes:</strong> Tenha acesso total aos dados de contato dos compradores para ações de remarketing por e-mail.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Lojas, Distribuidores e Marcas',
            business_bullets: [
                '<strong>Vendas Automáticas:</strong> Receba pedidos e processe pagamentos com total segurança em qualquer hora do dia ou da noite.',
                '<strong>Alcance Sem Limites:</strong> Expanda as barreiras físicas do seu negócio de bairro e venda para clientes de todo o país ou continente.',
                '<strong>Gestão Inteligente:</strong> Controle o estoque, calcule fretes dos Correios/transportadoras e envie cupons de desconto.'
            ],
            feat1_title: 'Pagamento Integrado',
            feat1_desc: 'Conecte sua loja com as principais soluções de pagamento como Stripe, PayPal ou Mercado Pago, com certificado SSL.',
            feat2_title: 'Checkout Otimizado',
            feat2_desc: 'Filtros rápidos, busca inteligente de produtos e finalização de compra rápida para evitar carrinhos abandonados.',
            feat3_title: 'Painel Administrativo',
            feat3_desc: 'Gerencie pedidos, cadastre novos produtos, edite preços e acesse relatórios de faturamento com facilidade.'
        },

        'aplicaciones-web': {
            title: 'Aplicações Web',
            subtitle: 'Sistemas web customizados executados no navegador. Bancos de dados, painéis de controle e plataformas SaaS.',
            meta_price: 'A partir de $800',
            meta_delivery: '10-20 dias úteis',
            what_is_highlight: 'Software personalizado para automatizar processos e escalar seu negócio.',
            what_is_desc: 'Uma Aplicação Web é um software completo executado diretamente a partir de um navegador de internet. Ao contrário de um site simples, conta com lógica de programação avançada e banco de dados que permite aos usuários criar perfis, fazer login, gerar relatórios em tempo real e pagar assinaturas dinâmicas (SaaS).',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Creadores e Líderes de Tecnologia',
            brand_bullets: [
                '<strong>Ferramentas Próprias:</strong> Disponibilize calculadoras exclusivas ou portais de atendimento para seus clientes VIP.',
                '<strong>Áreas de Membros:</strong> Crie um portal de ensino por assinatura recorrente com controle rígido de acesso dos alunos.',
                '<strong>Pioneirismo de Marca:</strong> Desenvolva uma ferramenta inovadora para consolidar seu nome como líder tecnológico de seu nicho.'
            ],
            business_title: 'Negocio ou Empresa',
            business_subtitle: 'Para Startups e Times Corporativos',
            business_bullets: [
                '<strong>Lançamento de SaaS:</strong> Tire sua ideia de software do papel utilizando uma infraestrutura de banco de dados robusta e moderna.',
                '<strong>Sistemas Internos:</strong> Desenvolva ferramentas para gerenciar fluxos de trabalho ou automatizar processos repetitivos da equipe.',
                '<strong>Dashboards de Análise:</strong> Gráficos e painéis em tempo real integrados com APIs corporativas para controle de dados.'
            ],
            feat1_title: 'Stack Tecnológica Moderna',
            feat1_desc: 'Programação feita em React, Next.js e Node.js, garantindo velocidade máxima e usabilidade digna de aplicativo móvel.',
            feat2_title: 'Proteção & Autenticação',
            feat2_desc: 'Acesso seguro com criptografia, bancos de dados protegidos e segurança de dados no tráfego de dados por APIs.',
            feat3_title: 'Integrações com APIs',
            feat3_desc: 'Sincronização com serviços externos de cobrança (Stripe), modelos de IA (OpenAI) ou sistemas de automação.'
        },

        'rediseno-web': {
            title: 'Redesenho de Sites',
            subtitle: 'Transforme seu site antigo em uma ferramenta moderna, ágil e focada em resultados que passa credibilidade.',
            meta_price: 'A partir de $200',
            meta_delivery: '5-7 dias úteis',
            what_is_highlight: 'Evolução digital: velocidade, modernidade e melhor experiência.',
            what_is_desc: 'O Redesenho de um Site consiste na reestruturação completa de uma página existente para modernizar sua estética visual, otimizar seu código técnico, acelerar seu carregamento e alinhar seu layout aos padrões de usabilidade móvel (UX), sem perder a autoridade já conquistada nas buscas orgânicas do Google.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Profissionais em Evolução',
            brand_bullets: [
                '<strong>Atualização de Nível:</strong> Alinhe a imagem do seu site com o novo preço dos seus serviços e seu patamar atual de autoridade.',
                '<strong>Design Moderno:</strong> Substitua uma página antiga por uma interface limpa, com fontes elegantes e visual glassmorphism.',
                '<strong>Foco em Dispositivos Móveis:</strong> Garanta que clientes que clicam no link da sua bio em redes sociais naveguem sem problemas.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Empresas Atualizando a Tecnologia',
            business_bullets: [
                '<strong>Diminua a Perda de Clientes:</strong> Evite que potenciais clientes saiam da página ao se depararem com um visual lento ou antigo.',
                '<strong>Aumente suas Conversões:</strong> Reorganize a navegação do site para facilitar a captação de contatos comerciais.',
                '<strong>Destaque-se da Concorrência:</strong> Renove a identidade do site da sua empresa para mantê-la atualizada perante o mercado.'
            ],
            feat1_title: 'Manutenção de SEO',
            feat1_desc: 'Criação de redirecionamentos 301 para garantir que o seu site não perca os rankings já conquistados nas buscas orgânicas do Google.',
            feat2_title: 'Ganho de Velocidade',
            feat2_desc: 'Eliminamos linhas de código desnecessárias e otimizamos imagens pesadas para atender aos critérios do Core Web Vitals.',
            feat3_title: 'Usabilidade Otimizada (UX)',
            feat3_desc: 'Simplificamos a navegação, deixando as informações mais fáceis de achar e os formulários rápidos de preencher.'
        },

        'optimizacion-seo': {
            title: 'Otimização de SEO',
            subtitle: 'Melhore seu posicionamento orgânico no Google com SEO técnico, melhorias de velocidade e conteúdo.',
            meta_price: 'A partir de $100',
            meta_delivery: 'Contínuo / Variável',
            what_is_highlight: 'Visibilidade orgânica para atrair clientes qualificados sem pagar anúncios.',
            what_is_desc: 'A Otimização de SEO é o conjunto de ações de código, estrutura técnica e conteúdo voltadas a adaptar seu site aos algoritmos de busca (como o Google). O objetivo é posicionar sua marca nas primeiras posições de forma orgânica (gratuita), gerando tráfego qualificado de clientes que já buscam pela sua solução.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Autores, Consultores e Especialistas',
            brand_bullets: [
                '<strong>Autoridade Conquistada:</strong> Seja a principal referência indicada pelo Google quando pesquisarem pelos temas da sua área.',
                '<strong>Clientes Qualificados:</strong> Deixe que as pessoas descubram seus serviços exatamente no momento em que buscam por soluções.',
                '<strong>Validação de Prestígio:</strong> Estar na primeira página do Google reforça seu posicionamento premium perante potenciais clientes.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para PMEs, Startups e Negócios Locais',
            business_bullets: [
                '<strong>Tráfego Contínuo:</strong> Receba visitas e pedidos todos os dias do ano sem precisar depender de investimentos constantes em anúncios.',
                '<strong>Redução do CAC:</strong> Tráfego orgânico não cobra taxas por clique, reduzindo drasticamente o seu custo de aquisição a longo prazo.',
                '<strong>SEO Local:</strong> Posicione sua empresa na sua cidade para atrair clientes das redondezas que procuram seus produtos.'
            ],
            feat1_title: 'Auditoria de SEO Técnico',
            feat1_desc: 'Ajuste de problemas de rastreamento do site, links quebrados, geração de sitemaps e arquitetura técnica.',
            feat2_title: 'Ajustes Core Web Vitals',
            feat2_desc: 'Melhoramos os tempos de carregamento e resposta de páginas do site de acordo com os critérios rígidos do Google.',
            feat3_title: 'SEO On-Page Focado',
            feat3_desc: 'Ajuste de tags de título, descrições meta, tags alt em fotos e estruturação balanceada de palavras-chave no texto.'
        },

        'automatizaciones': {
            title: 'Automações & Bots (WhatsApp / n8n)',
            subtitle: 'Fluxos de trabalho automatizados, integração com n8n, chatbots de WhatsApp e IA para escalar vendas e otimizar o atendimento.',
            meta_price: 'A partir de $250',
            meta_delivery: '3-7 dias úteis',
            what_is_highlight: 'Automatize processos repetitivos, economize tempo e responda aos clientes em segundos 24 horas por dia.',
            what_is_desc: 'Automações com n8n e bots de WhatsApp integram seus sistemas para funcionar no piloto automático. Qualificação de leads, acompanhamento de vendas, respostas automáticas com Inteligência Artificial e sincronização em tempo real com seu CRM.',
            brand_title: 'Marca Pessoal e Criadores',
            brand_subtitle: 'Para Consultores, Mentores e Criadores de Conteúdo',
            brand_bullets: [
                '<strong>Atendimento 24/7 no WhatsApp:</strong> Responda dúvidas, agende reuniões e envie links de pagamento automaticamente.',
                '<strong>Qualificação de Leads:</strong> Filtre os melhores clientes com menus interativos ou IA antes de agendar reuniões.',
                '<strong>Economia de Tempo:</strong> Elimine tarefas manuais repetitivas e foque no crescimento da sua marca.'
            ],
            business_title: 'Negocio ou Empresa',
            business_subtitle: 'Para PMEs, E-commerce e Equipes Comerciais',
            business_bullets: [
                '<strong>Orquestração com n8n:</strong> Conecte WhatsApp, CRM, plataformas de pagamento, e-mail e bancos de dados sem limites.',
                '<strong>Respostas Imediatas e Chatbots IA:</strong> Reduza o tempo de espera para 0 segundos, aumentando a conversão de vendas.',
                '<strong>Notificações Automáticas:</strong> Envie confirmações de pedidos, lembretes e relatórios para sua equipe em tempo real.'
            ],
            feat1_title: 'Workflows Avançados no n8n',
            feat1_desc: 'Criação de fluxos lógicos e integração de múltiplas ferramentas web e APIs.',
            feat2_title: 'Chatbots Oficiais de WhatsApp',
            feat2_desc: 'Bots conversacionais inteligentes para atender clientes, agendar horários e processar pedidos.',
            feat3_title: 'Integração com CRM e IA (OpenAI/Gemini)',
            feat3_desc: 'Agentes virtuais com IA treinados com os dados do seu negócio para um atendimento natural.'
        }
    }
};

// =====================================================
/* APPLICATION CONTROLLER FOR SERVICES SUBPAGES */
// =====================================================

let currentLang = localStorage.getItem('portfolio-lang') || 'es';

function applyServiceTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // Detect current service from body data attribute
    const serviceKey = document.body.dataset.servicePage;
    const common = serviceTranslations[lang];
    const spec = common[serviceKey];

    if (!spec) return;

    // --- TRANSLATE COMMON STRINGS ---
    const map = {
        'cat-tag': common.category_service,
        'cta-start': common.cta_start_project,
        'title-what-is': common.what_is_it,
        'title-why-needed': common.why_needed,
        'title-features': common.key_features,
        'cta-box-title': common.cta_box_title,
        'cta-box-desc': common.cta_box_desc,
        'cta-box-btn': common.cta_box_btn,
        'footer-tagline': common.footer_tagline,
        'footer-copy': common.footer_copy
    };

    Object.keys(map).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'cta-box-title') {
                el.innerHTML = map[id];
            } else {
                el.textContent = map[id];
            }
        }
    });

    // --- TRANSLATE PAGE SPECIFIC CONTENT ---
    const pageTitleEl = document.getElementById('page-title');
    if (pageTitleEl) pageTitleEl.textContent = spec.title;

    const pageSubtitleEl = document.getElementById('page-subtitle');
    if (pageSubtitleEl) pageSubtitleEl.textContent = spec.subtitle;

    const pillPriceEl = document.getElementById('pill-price');
    if (pillPriceEl) pillPriceEl.textContent = `${common.price_prefix} ${spec.meta_price.replace('From ', '').replace('Desde ', '').replace('A partir de ', '')}`;



    const whatIsHighlightEl = document.getElementById('what-is-highlight');
    if (whatIsHighlightEl) whatIsHighlightEl.textContent = spec.what_is_highlight;

    const whatIsDescEl = document.getElementById('what-is-desc');
    if (whatIsDescEl) whatIsDescEl.textContent = spec.what_is_desc;

    // Brand Card
    const brandTitleEl = document.getElementById('brand-title');
    if (brandTitleEl) brandTitleEl.textContent = spec.brand_title;

    const brandSubtitleEl = document.getElementById('brand-subtitle');
    if (brandSubtitleEl) brandSubtitleEl.textContent = spec.brand_subtitle;

    const brandListEl = document.getElementById('brand-list');
    if (brandListEl && spec.brand_bullets) {
        brandListEl.innerHTML = spec.brand_bullets.map(b => `
            <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${b}</span>
            </li>
        `).join('');
    }

    // Business Card
    const businessTitleEl = document.getElementById('business-title');
    if (businessTitleEl) businessTitleEl.textContent = spec.business_title;

    const businessSubtitleEl = document.getElementById('business-subtitle');
    if (businessSubtitleEl) businessSubtitleEl.textContent = spec.business_subtitle;

    const businessListEl = document.getElementById('business-list');
    if (businessListEl && spec.business_bullets) {
        businessListEl.innerHTML = spec.business_bullets.map(b => `
            <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${b}</span>
            </li>
        `).join('');
    }

    // Feature 1
    const feat1TitleEl = document.getElementById('feat1-title');
    if (feat1TitleEl) feat1TitleEl.textContent = spec.feat1_title;
    const feat1DescEl = document.getElementById('feat1-desc');
    if (feat1DescEl) feat1DescEl.textContent = spec.feat1_desc;

    // Feature 2
    const feat2TitleEl = document.getElementById('feat2-title');
    if (feat2TitleEl) feat2TitleEl.textContent = spec.feat2_title;
    const feat2DescEl = document.getElementById('feat2-desc');
    if (feat2DescEl) feat2DescEl.textContent = spec.feat2_desc;

    // Feature 3
    const feat3TitleEl = document.getElementById('feat3-title');
    if (feat3TitleEl) feat3TitleEl.textContent = spec.feat3_title;
    const feat3DescEl = document.getElementById('feat3-desc');
    if (feat3DescEl) feat3DescEl.textContent = spec.feat3_desc;

    // --- LANGUAGE BUTTONS HIGHLIGHT ---
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // --- PAGE META & TITLE ---
    const agencyTitle = {
        en: 'ALLIMITE Agency | Digital Creative Agency',
        es: 'ALLIMITE Agency | Agencia Creativa Digital',
        pt: 'ALLIMITE Agency | Agência Criativa Digital'
    };
    document.title = `${spec.title} | ${agencyTitle[lang] || agencyTitle.en}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${spec.title} - ${spec.subtitle}`);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Apply translations
    applyServiceTranslations(currentLang);

    // Lang toggle listener
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            const lang = btn.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                applyServiceTranslations(lang);
            }
        });
    }

    // Navbar responsive
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
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
    }

    // Scroll reveal helper
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

    // Simple tilt on cards on desktop
    const compCards = document.querySelectorAll('.comparison-card');
    if (window.matchMedia('(min-width: 768px)').matches) {
        compCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // Fade in body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});
