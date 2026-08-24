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
        'optimizacion-aeo': {
            title: 'AEO & Agent-Ready Optimization',
            subtitle: 'Answer Engine Optimization (AEO) and agentic infrastructure. Get recommended by ChatGPT, Claude, Perplexity & Gemini.',
            meta_price: 'From $2,000',
            meta_delivery: '3-7 business days',
            what_is_highlight: 'The next evolution of SEO: Make your business readable, citable, and operable by AI.',
            what_is_desc: 'Answer Engine Optimization (AEO) and Agent-Ready architecture is the modern standard for the AI era. Instead of only optimizing for traditional search links on Google, we structure your services, pricing, and capabilities so conversational AI models (ChatGPT, Claude, Perplexity, Apple Intelligence) can read your catalog in milliseconds and recommend your company to high-intent buyers.',
            brand_title: 'Personal Brand & Consultants',
            brand_subtitle: 'For Authorities, Creators & High-Ticket Coaches',
            brand_bullets: [
                '<strong>AI Referral Power:</strong> Become the primary expert recommended when users ask ChatGPT or Perplexity for solutions in your niche.',
                '<strong>Instant Knowledge Mapping:</strong> Clean llms.txt and ARD catalogs ensure AI models quote your exact services and authority signals.',
                '<strong>IP & Content Protection:</strong> Custom Content Signals protect your original work while maximizing citation reach.'
            ],
            business_title: 'Business & Enterprise',
            business_subtitle: 'For B2B Companies, Agencies & SaaS',
            business_bullets: [
                '<strong>Zero-Friction Inbound:</strong> Enable AI agents to browse your service catalog and submit structured project quotes via WebMCP.',
                '<strong>Cloudflare Agent-Ready Pass:</strong> Upgrade from Level 0 to Level 2/3 with verified DNS-AID, MCP cards, and RFC 9727 catalogs.',
                '<strong>High-Ticket Positioning:</strong> Transparent UCP commerce profiles declare your currency and pricing tiers, filtering out unqualified leads.'
            ],
            feat1_title: 'WebMCP Browser Runtime',
            feat1_desc: 'Interactive navigator.modelContext tools allowing browser-integrated AI agents to interact with your services directly.',
            feat2_title: 'Semantic ARD & llms.txt',
            feat2_desc: 'Ultra-clean text files and machine-readable capability catalogs paired with representative search queries.',
            feat3_title: 'Bot Access & Cloudflare Security',
            feat3_desc: 'Explicit permissions for AI search crawlers and response header link relations deployed at the edge.'
        },

        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'High-converting pages designed to capture leads, showcase a specific offer, and drive direct sales.',
            meta_price: 'From $1,500',
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
            meta_price: 'From $3,000',
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
            meta_price: 'From $4,500',
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
            meta_price: 'From $7,000',
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
            meta_price: 'From $2,500',
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
            business_subtitle: 'For Companies Undergoing Modernization',
            business_bullets: [
                '<strong>Lower Bounce Rates:</strong> Keep potential customers on your site instead of losing them to slow, outdated competitor pages.',
                '<strong>Higher Conversion:</strong> Redesign user flows to guide visitors seamlessly into high-value sales conversations.',
                '<strong>Digital Edge:</strong> Modernize your brand identity to stay ahead of newer, tech-forward competitors.'
            ],
            feat1_title: 'SEO Safeguard',
            feat1_desc: 'Meticulous 301 redirect mapping to ensure you retain your existing Google rankings and domain authority.',
            feat2_title: 'Performance Leap',
            feat2_desc: 'Eliminating bloated code, compressing heavy assets, and tuning Core Web Vitals to the highest scores.',
            feat3_title: 'Clean Navigation Flow',
            feat3_desc: 'Simplifying site architecture and copywriting so prospects find the exact service they need in seconds.'
        },

        'optimizacion-seo': {
            title: 'SEO Optimization',
            subtitle: 'Boost your search engine rankings with technical SEO, performance tuning, and content optimization.',
            meta_price: 'From $1,500',
            meta_delivery: 'Ongoing / Milestone',
            what_is_highlight: 'Organic search visibility to attract high-intent clients on autopilot.',
            what_is_desc: 'SEO Optimization is the engineering and content process applied to your website to maximize its visibility across organic search engines like Google. Its primary objective is to drive consistent, qualified inbound traffic without paying recurring ad fees.',
            brand_title: 'Personal Brand',
            brand_subtitle: 'For Authors, Consultants & Thought Leaders',
            brand_bullets: [
                '<strong>Organic Authority:</strong> Become the top Google search result when people research high-level solutions in your niche.',
                '<strong>Inbound Clients:</strong> Allow high-intent buyers searching for specific services to find your platform naturally.',
                '<strong>Instant Credibility:</strong> Ranking at the top of search results immediately establishes trust and authority.'
            ],
            business_title: 'Business & Company',
            business_subtitle: 'For SMBs, Startups & Local Services',
            business_bullets: [
                '<strong>Sustainable Inbound Pipeline:</strong> Generate qualified client inquiries every month without relying 100% on ad spend.',
                '<strong>Lower CAC:</strong> Organic search traffic delivers zero-cost clicks, reducing your blended client acquisition costs.',
                '<strong>Targeted Local & Global SEO:</strong> Capture geographically relevant clients searching for your exact enterprise solutions.'
            ],
            feat1_title: 'Full Technical Audit',
            feat1_desc: 'Fixing indexation errors, XML sitemaps, robots.txt, broken links, schema markups, and internal hierarchy.',
            feat2_title: 'Speed & Core Web Vitals',
            feat2_desc: 'Optimizing server response times and frontend performance to meet Google\'s strict speed benchmarks.',
            feat3_title: 'Advanced On-Page Architecture',
            feat3_desc: 'Strategic title tags, meta descriptions, image alt data, and semantic heading hierarchies.'
        },

        'automatizaciones': {
            title: 'Automations & Bots (WhatsApp / n8n)',
            subtitle: 'Automated workflows, n8n integration, WhatsApp chatbots, and AI agents to scale sales and streamline operations.',
            meta_price: 'From $3,500',
            meta_delivery: '3-7 business days',
            what_is_highlight: 'Automate repetitive processes, save hours, and instantly respond to clients 24/7.',
            what_is_desc: 'n8n automations and WhatsApp bots connect your apps and systems to operate on autopilot. From lead qualification, email sequences, and sales follow-ups to automated AI responses and real-time syncing with your CRM or Google Sheets.',
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
        'optimizacion-aeo': {
            title: 'Optimización AEO & Agent-Ready',
            subtitle: 'Posicionamiento en motores de respuesta con IA. Hacemos que ChatGPT, Claude, Perplexity y Gemini recomienden tu empresa y coticen en automático.',
            meta_price: 'Desde $2,000',
            meta_delivery: '3-7 días hábiles',
            what_is_highlight: 'La evolución del SEO: hacé que la Inteligencia Artificial recomiende tu negocio y venda por vos.',
            what_is_desc: 'La Optimización AEO (Answer Engine Optimization) y la arquitectura Agent-Ready es el estándar para la era de la IA. Ya no optimizamos solo para que alguien haga clic en un enlace azul en Google, sino para que los modelos de lenguaje (ChatGPT, Claude, Perplexity, Apple Intelligence) lean tu catálogo en milisegundos, entiendan tus precios y te citen como la mejor solución ante clientes con presupuesto real.',
            brand_title: 'Marca Personal & Consultores',
            brand_subtitle: 'Para Referentes, Creadores y Coaches High-Ticket',
            brand_bullets: [
                '<strong>Recomendación Directa en IA:</strong> Convertite en la opción sugerida cuando un usuario le pregunte a ChatGPT o Perplexity por soluciones de tu rubro.',
                '<strong>Catálogo Semántico Limpio:</strong> Archivos llms.txt y ARD estructurados para que los modelos conozcan tus servicios y autoridad sin errores.',
                '<strong>Protección de Propiedad Intelectual:</strong> Directivas de Content Signals que permiten la citación protegiendo tus contenidos de entrenamiento no autorizado.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Empresas B2B, Pymes y Startups',
            business_bullets: [
                '<strong>Captación de Leads por IA:</strong> Permite que agentes inteligentes coticen proyectos y envíen datos de clientes calificados en automático con WebMCP.',
                '<strong>Salto a Nivel Élite en Cloudflare:</strong> Subida garantizada de Nivel 0 a Nivel 2/3 con DNS-AID, tarjetas MCP y catálogo RFC 9727.',
                '<strong>Posicionamiento de Alto Valor:</strong> Perfil UCP público que declara tus tarifas oficiales en dólares, filtrando a clientes sin presupuesto.'
            ],
            feat1_title: 'Runtime WebMCP en Navegador',
            feat1_desc: 'Integración nativa con navigator.modelContext para que navegadores y agentes con IA ejecuten acciones en tu web.',
            feat2_title: 'Catálogo ARD & llms.txt',
            feat2_desc: 'Documentación optimizada para LLMs y manifiesto de capacidades con consultas clave para emparejar clientes con tus servicios.',
            feat3_title: 'Control de Bots & Certificación',
            feat3_desc: 'Permisos específicos para bots de búsqueda de IA, encabezados Link y validación en vivo en isitagentready.com.'
        },

        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'Páginas de alta conversión diseñadas para capturar leads, destacar una oferta y generar ventas directas.',
            meta_price: 'Desde $1,500',
            meta_delivery: '2-5 días hábiles',
            what_is_highlight: 'Tu oferta principal en una sola página optimizada para vender.',
            what_is_desc: 'Una Landing Page (o página de aterrizaje) es una única página web diseñada específicamente para campañas de marketing o publicidad. A diferencia de un sitio web tradicional, elimina cualquier tipo de distracción (como menús complejos o información secundaria) y se estructura en torno a una única llamada a la acción (CTA) clara y persuasiva, con el objetivo de convertir visitas en clientes.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Profesionales, Creadores y Consultores',
            brand_bullets: [
                '<strong>Venta Directa:</strong> Promocioná y vendé tus infoproductos, cursos, asesorías o servicios sin rodeos.',
                '<strong>Captación de Leads:</strong> Creá listas de emails calificadas ofreciendo recursos gratuitos descargables (lead magnets).',
                '<strong>Claridad Total:</strong> Dirigí el tráfico desde tu bio de Instagram o TikTok hacia una oferta puntual con alto impacto.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, Startups y Equipos de Venta',
            business_bullets: [
                '<strong>Tráfico Publicitario:</strong> Es el destino ideal para tus campañas pagas de Google Ads, Meta Ads (Instagram/Facebook) o TikTok Ads.',
                '<strong>Mayor Retorno (ROI):</strong> Aumentá drásticamente tu tasa de conversión, reduciendo el Costo de Adquisición de Cliente (CAC).',
                '<strong>Integración CRM:</strong> Enviá los datos de tus clientes automáticamente a tu CRM, base de datos o correo al instante.'
            ],
            feat1_title: 'Estrategia de Conversión',
            feat1_desc: 'Diseño enfocado en la persuasión visual, jerarquía clara de textos y llamadas a la acción imposibles de ignorar.',
            feat2_title: 'Carga en Milisegundos',
            feat2_desc: 'Código liviano y optimizado para que la página cargue al instante y no pierdas ni un solo cliente por lentitud.',
            feat3_title: 'Formularios y Conexiones',
            feat3_desc: 'Formularios conectados directo a tu WhatsApp, Mailchimp, Google Sheets o correo empresarial.'
        },

        'sitios-empresariales': {
            title: 'Sitios Empresariales',
            subtitle: 'Sitios web completos de varias páginas que establecen la presencia profesional online de tu marca y su credibilidad global.',
            meta_price: 'Desde $3,000',
            meta_delivery: '5-10 días hábiles',
            what_is_highlight: 'La sede digital de tu empresa para construir confianza global.',
            what_is_desc: 'Un Sitio Empresarial es una plataforma web completa de múltiples secciones que funciona como la sede digital oficial de una marca o empresa. Comunica quién sos, tus valores, qué servicios o productos ofrecés y expone elementos de confianza como testimonios, certificaciones y casos de estudio, para convertir a las visitas de motores de búsqueda en clientes calificados.',
            brand_title: 'Marca Personal',
            brand_subtitle: 'Para Profesionales, Conferencistas y Consultores Senior',
            brand_bullets: [
                '<strong>Hub de Autoridad:</strong> Centralizá en un solo lugar tu biografía, portfolio de trabajos, prensa, blog y métodos de contratación.',
                '<strong>Posicionamiento Premium:</strong> Proyectá una imagen de alto nivel que justifique cobrar tarifas más altas por tus servicios.',
                '<strong>Audiencia a Largo Plazo:</strong> Publicá artículos o contenidos propios para posicionarte como referente de tu sector.'
            ],
            business_title: 'Negocio o Empresa',
            business_subtitle: 'Para Pymes, Agencias y Empresas Consolidadas',
            business_bullets: [
                '<strong>Presencia Institucional:</strong> Mostrá una imagen seria y profesional que transmita seguridad a socios y clientes corporativos.',
                '<strong>Validación Comercial:</strong> Destacá casos de éxito, equipo de trabajo y avales para cerrar acuerdos B2B más grandes.',
                '<strong>Plataforma Escalable:</strong> Diseñada para crecer con tu empresa, sumando nuevas secciones o idiomas cuando lo necesites.'
            ],
            feat1_title: 'Diseño a Medida',
            feat1_desc: 'Nada de plantillas genéricas. Diseñamos una identidad web personalizada y alineada al 100% con tu manual de marca.',
            feat2_title: '100% Adaptable (Responsive)',
            feat2_desc: 'Navegación impecable y perfectamente legible en smartphones, tablets, laptops y pantallas gigantes.',
            feat3_title: 'Estructura Lista para SEO',
            feat3_desc: 'Estructura semántica de encabezados, meta etiquetas y datos enriquecidos para posicionar alto en Google.'
        },

        'ecommerce': {
            title: 'E-Commerce',
            subtitle: 'Tiendas online diseñadas para vender sin fricción. Catálogos, carritos y pasarelas de pago seguras.',
            meta_price: 'Desde $4,500',
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
            meta_price: 'Desde $7,000',
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
            meta_price: 'Desde $2,500',
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
            meta_price: 'Desde $1,500',
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
            subtitle: 'Flujos de trabajo automatizados, integración de n8n, chatbots de WhatsApp, automatizaciones de correo electrónico e IA para escalar las ventas y optimizar la atención de tu negocio.',
            meta_price: 'Desde $3,500',
            meta_delivery: '3-7 días hábiles',
            what_is_highlight: 'Automatiza procesos repetitivos, ahorra tiempo y responde a tus clientes en segundos las 24 horas.',
            what_is_desc: 'Las automatizaciones con n8n y bots de WhatsApp integran tus aplicaciones y sistemas para operar en piloto automático. Desde la calificación e ingesta de prospectos, secuencias de correo electrónico, hasta el seguimiento de ventas, respuestas automáticas con Inteligencia Artificial y sincronización en tiempo real con tu CRM o planillas de Google.',
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
        'optimizacion-aeo': {
            title: 'Otimização AEO & Agent-Ready',
            subtitle: 'Posicionamento em mecanismos de resposta com IA. Faça o ChatGPT, Claude, Perplexity e Gemini recomendarem sua empresa.',
            meta_price: 'A partir de $2.000',
            meta_delivery: '3-7 dias úteis',
            what_is_highlight: 'A evolução do SEO: faça a Inteligência Artificial recomendar seu negócio.',
            what_is_desc: 'A Otimização AEO (Answer Engine Optimization) e a arquitetura Agent-Ready são o novo padrão digital. Estruturamos seus serviços e preços para que modelos de IA (ChatGPT, Claude, Perplexity) leiam seu catálogo em milissegundos e recomendem sua empresa de forma direta.',
            brand_title: 'Marca Pessoal & Consultores',
            brand_subtitle: 'Para Especialistas, Criadores e Coaches',
            brand_bullets: [
                '<strong>Recomendação Direta em IA:</strong> Seja o especialista indicado quando alguém perguntar no ChatGPT sobre a sua área.',
                '<strong>Catálogo Semântico Limpo:</strong> Arquivos llms.txt e ARD para que as IAs entendam seus serviços e autoridade com precisão.',
                '<strong>Proteção de Direitos:</strong> Diretivas Content Signals que permitem recomendações protegendo seus conteúdos contra raspagem não autorizada.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Empresas B2B, Startups e Agências',
            business_bullets: [
                '<strong>Captação Automática de Leads:</strong> Permita que agentes de IA enviem orçamentos de clientes qualificados via WebMCP.',
                '<strong>Certificação Cloudflare de Nível 2/3:</strong> Implementação completa de DNS-AID, cartões MCP e catálogo RFC 9727.',
                '<strong>Posicionamento High-Ticket:</strong> Perfil comercial transparente em dólares (USD) que atrai clientes de alto padrão.'
            ],
            feat1_title: 'Runtime WebMCP no Navegador',
            feat1_desc: 'Integração de ferramentas interativas em navigator.modelContext para agentes autônomos.',
            feat2_title: 'Catálogo ARD & llms.txt',
            feat2_desc: 'Documentos otimizados para LLMs e manifesto de recursos com consultas estratégicas.',
            feat3_title: 'Controle de Bots & Segurança',
            feat3_desc: 'Regras inteligentes para bots de busca com IA e validação completa no escâner isitagentready.com.'
        },

        'landing-pages': {
            title: 'Landing Pages',
            subtitle: 'Páginas de alta conversão projetadas para capturar leads, destacar ofertas e gerar vendas diretas.',
            meta_price: 'A partir de $1.500',
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
                '<strong>Integração com CRM:</strong> Envie os dados capturados diretamente para seu CRM ou sistema de e-mail marketing.'
            ],
            feat1_title: 'Design Focado em Vendas',
            feat1_desc: 'Estrutura estratégica, copywriting persuasivo e gatilhos visuais desenvolvidos para maximizar taxas de conversão.',
            feat2_title: 'Carregamento Ultra-Rápido',
            feat2_desc: 'Código leve e otimização total de imagens para carregamento em milissegundos sem perda de tráfego.',
            feat3_title: 'Conexão com Formulários',
            feat3_desc: 'Integração direta com WhatsApp, Mailchimp, Google Sheets ou CRM ativo da sua empresa.'
        },

        'sitios-empresariales': {
            title: 'Sites Corporativos',
            subtitle: 'Sites completos de várias páginas que estabelecem a presença online profissional e a autoridade da sua marca.',
            meta_price: 'A partir de $3.000',
            meta_delivery: '5-10 dias úteis',
            what_is_highlight: 'A sede digital da sua empresa para construir confiança e autoridade global.',
            what_is_desc: 'Um Site Corporativo é uma plataforma web completa de múltiplas páginas que atua como a sede digital oficial da sua marca ou empresa. Nele você apresenta sua história, valores, serviços ou produtos com detalhes, depoimentos de clientes e provas sociais, transformando visitantes em potenciais clientes qualificados.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Profissionais, Palestrantes e Especialistas',
            brand_bullets: [
                '<strong>Central de Autoridade:</strong> Reúna seu portfólio, artigos, aparições na imprensa e canais de contratação em um só lugar.',
                '<strong>Posicionamento de Alto Valor:</strong> Transmita uma imagem profissional impecável que justifique cobrar valores mais altos.',
                '<strong>Construção de Audiência:</strong> Publique conteúdos e artigos para ranquear organicamente no Google ao longo dos anos.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para PMEs, Agências e Empresas Consolidadas',
            business_bullets: [
                '<strong>Presença Institucional Sólida:</strong> Apresente uma imagem confiável para fechar contratos B2B de maior valor.',
                '<strong>Validação Comercial:</strong> Destaque cases de sucesso, certificações e equipe para transmitir total segurança aos clientes.',
                '<strong>Estrutura Escalável:</strong> Desenvolvido para crescer com sua empresa, permitindo adicionar novos serviços ou idiomas.'
            ],
            feat1_title: 'Design Exclusivo',
            feat1_desc: 'Sem modelos genéricos. Criamos uma identidade visual web sob medida e 100% alinhada à sua marca.',
            feat2_title: '100% Responsivo',
            feat2_desc: 'Visual impecável e navegação fluida em smartphones, tablets, notebooks e telas ultralargas.',
            feat3_title: 'Preparado para SEO',
            feat3_desc: 'Estrutura técnica com marcações semânticas e meta tags otimizadas para ranquear no Google.'
        },

        'ecommerce': {
            title: 'Lojas Virtuais (E-Commerce)',
            subtitle: 'Lojas online modernas projetadas para vender de forma fluida. Catálogos, carrinhos e pagamentos seguros.',
            meta_price: 'A partir de $4.500',
            meta_delivery: '7-15 dias úteis',
            what_is_highlight: 'Sua loja aberta 24 horas por dia, totalmente automatizada e sem fronteiras.',
            what_is_desc: 'Uma Loja Virtual (E-Commerce) é uma plataforma dinâmica que permite comercializar produtos ou serviços pela internet com total segurança. Conta com catálogo categorizado, filtros inteligentes, carrinho de compras, integração com meios de pagamento e cálculo automático de frete.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Criadores de Conteúdo e Influenciadores',
            brand_bullets: [
                '<strong>Monetize seus Fãs:</strong> Venda produtos próprios (roupas, livros, acessórios) diretamente para a sua comunidade.',
                '<strong>Produtos Digitais:</strong> Venda e-books, templates, cursos ou presets com entrega automática por e-mail.',
                '<strong>100% do Lucro:</strong> Mantenha o controle da sua base de clientes sem pagar comissões abusivas para marketplaces.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Lojistas, Distribuidores e Marcas',
            business_bullets: [
                '<strong>Vendas 24/7 no Piloto Automático:</strong> Receba pedidos e pagamentos a qualquer hora do dia ou da noite.',
                '<strong>Expansão Nacional e Global:</strong> Venda para qualquer cidade ou país sem as limitações de um endereço físico.',
                '<strong>Gestão de Estoque e Pedidos:</strong> Painel intuitivo para gerenciar produtos, preços, pedidos e envios.'
            ],
            feat1_title: 'Pagamentos Seguros',
            feat1_desc: 'Integração com gateways líderes como Stripe, PayPal e Mercado Pago com checkout seguro SSL.',
            feat2_title: 'Experiência do Usuário (UX)',
            feat2_desc: 'Navegação rápida, busca inteligente e processo de finalização de compra otimizado para evitar abandonos.',
            feat3_title: 'Painel Administrativo',
            feat3_desc: 'Painel simples e intuitivo para atualizar catálogo, controlar estoque e acompanhar relatórios de faturamento.'
        },

        'aplicaciones-web': {
            title: 'Aplicações Web (SaaS)',
            subtitle: 'Sistemas web sob medida com recursos dinâmicos, bancos de dados, painéis de controle e plataformas SaaS.',
            meta_price: 'A partir de $7.000',
            meta_delivery: '10-20 dias úteis',
            what_is_highlight: 'Software sob medida na nuvem para automatizar processos e escalar seu negócio.',
            what_is_desc: 'Uma Aplicação Web é um software completo executado diretamente no navegador e conectado a bancos de dados dinâmicos. Diferente de páginas estáticas, permite login de usuários, processamento de dados em tempo real, geração de relatórios e cobranças recorrentes por assinatura (SaaS).',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Criadores, Educadores e Líderes Técnicos',
            brand_bullets: [
                '<strong>Ferramentas Próprias:</strong> Crie calculadoras de nicho, simuladores ou plataformas exclusivas para seus alunos.',
                '<strong>Portais de Membros:</strong> Lance sua própria plataforma de cursos com controle de acessos e assinaturas mensais.',
                '<strong>Autoridade Tecnológica:</strong> Desenvolva uma ferramenta única que consolide sua marca como referência no mercado.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Startups e Empresas em Expansão',
            business_bullets: [
                '<strong>Desenvolvimento de SaaS:</strong> Transforme sua ideia de software em um produto escalável e seguro no mercado.',
                '<strong>Automação Operacional:</strong> Elimine planilhas complexas criando sistemas internos sob medida para sua equipe.',
                '<strong>Dashboards em Tempo Real:</strong> Painéis analíticos e relatórios operacionais atualizados instantaneamente.'
            ],
            feat1_title: 'Stack Tecnológico Moderno',
            feat1_desc: 'Desenvolvimento ágil com React, Next.js e Node.js para máxima velocidade e performance fluida.',
            feat2_title: 'Segurança & Autenticação',
            feat2_desc: 'Autenticação criptografada de usuários, permissões de acesso e proteção avançada de banco de dados.',
            feat3_title: 'Integrações via API',
            feat3_desc: 'Conexão com meios de pagamento (Stripe), inteligência artificial (OpenAI) e ferramentas corporativas.'
        },

        'rediseno-web': {
            title: 'Redesenho de Sites',
            subtitle: 'Transforme seu site desatualizado em uma experiência moderna, rápida e otimizada para dispositivos móveis.',
            meta_price: 'A partir de $2.500',
            meta_delivery: '5-7 dias úteis',
            what_is_highlight: 'Evolução digital: velocidade, design sofisticado e foco em conversão.',
            what_is_desc: 'O Redesenho de Sites moderniza a identidade visual, acelera a velocidade de carregamento e atualiza toda a usabilidade (UX/UI) do seu site atual, preservando o histórico de autoridade já conquistado nos buscadores.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Profissionais em Transição de Posicionamento',
            brand_bullets: [
                '<strong>Nova Fase da Marca:</strong> Alinhe o visual do seu site ao seu nível atual de faturamento e prestígio.',
                '<strong>Design Moderno:</strong> Substitua layouts ultrapassados por uma estética premium com tipografias elegantes.',
                '<strong>Experiência Mobile Perfeita:</strong> Garanta navegação fluida para quem clica nos links das suas redes sociais.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para Empresas em Modernização',
            business_bullets: [
                '<strong>Redução de Rejeição:</strong> Evite que clientes em potencial fechem o site por conta de lentidão ou visual amador.',
                '<strong>Aumento de Vendas:</strong> Reestruture os caminhos de navegação para direcionar o visitante direto ao contato comercial.',
                '<strong>Destaque Competitivo:</strong> Modernize sua marca para liderar e superar concorrentes mais novos do seu setor.'
            ],
            feat1_title: 'Preservação de SEO',
            feat1_desc: 'Mapeamento detalhado de redirecionamentos 301 para não perder o ranqueamento orgânico no Google.',
            feat2_title: 'Salto de Velocidade',
            feat2_desc: 'Limpeza de código pesado, compressão de mídias e notas máximas no Google Core Web Vitals.',
            feat3_title: 'Navegação Simplificada',
            feat3_desc: 'Estrutura pensada para que o cliente encontre o serviço desejado e entre em contato em poucos cliques.'
        },

        'optimizacion-seo': {
            title: 'Otimização de SEO',
            subtitle: 'Melhore seu posicionamento orgânico no Google com SEO técnico, otimização de velocidade e estrutura semântica.',
            meta_price: 'A partir de $1.500',
            meta_delivery: 'Contínuo / Mensal',
            what_is_highlight: 'Tráfego orgânico constante para atrair clientes prontos para comprar.',
            what_is_desc: 'A Otimização de SEO ajusta a estrutura de código, velocidade e conteúdos do seu site para colocá-lo nos primeiros resultados do Google de forma orgânica, gerando tráfego qualificado contínuo sem custo por clique.',
            brand_title: 'Marca Pessoal',
            brand_subtitle: 'Para Consultores, Autores e Especialistas',
            brand_bullets: [
                '<strong>Autoridade Orgânica:</strong> Seja a principal resposta encontrada quando pesquisarem soluções do seu nicho.',
                '<strong>Clientes Qualificados:</strong> Atraia pessoas que já têm uma necessidade real e estão ativamente procurando seus serviços.',
                '<strong>Credibilidade Imediata:</strong> Estar no topo do Google valida instantaneamente sua autoridade profissional.'
            ],
            business_title: 'Negócio ou Empresa',
            business_subtitle: 'Para PMEs, Startups e Comércio Local',
            business_bullets: [
                '<strong>Canal de Vendas Sustentável:</strong> Receba pedidos de orçamento todos os meses sem depender apenas de tráfego pago.',
                '<strong>Menor Custo por Lead:</strong> O tráfego orgânico reduz seu custo médio de aquisição de clientes ao longo do tempo.',
                '<strong>SEO Local Estratégico:</strong> Posicione sua empresa na sua região geográfica para quem procura fornecedores locais.'
            ],
            feat1_title: 'Auditoria Técnica Completa',
            feat1_desc: 'Correção de erros de indexação, sitemaps, robots.txt, links quebrados e arquitetura semântica.',
            feat2_title: 'Velocidade & Core Web Vitals',
            feat2_desc: 'Otimização avançada de performance frontend para atender aos requisitos de velocidade do Google.',
            feat3_title: 'SEO On-Page Avançado',
            feat3_desc: 'Configuração estratégica de meta tags, títulos, textos alternativos e palavras-chave de alta conversão.'
        },

        'automatizaciones': {
            title: 'Automações & Bots (WhatsApp / n8n)',
            subtitle: 'Fluxos automatizados, n8n, chatbots no WhatsApp e agentes de IA para escalar o atendimento e as vendas da sua empresa.',
            meta_price: 'A partir de $3.500',
            meta_delivery: '3-7 dias úteis',
            what_is_highlight: 'Automatize tarefas repetitivas, economize tempo e responda aos clientes em segundos 24 horas por dia.',
            what_is_desc: 'As automações com n8n e bots de WhatsApp conectam suas ferramentas de trabalho para operar no piloto automático. Desde a qualificação de leads, disparos de e-mail e envio de notificações até respostas inteligentes com IA e integração direta com seu CRM ou planilhas.',
            brand_title: 'Marca Pessoal & Criadores',
            brand_subtitle: 'Para Coaches, Mentores e Criadores de Conteúdo',
            brand_bullets: [
                '<strong>Atendimento 24/7 no WhatsApp:</strong> Tire dúvidas frequentes, envie links de pagamento e agende reuniões automaticamente.',
                '<strong>Qualificação de Contatos:</strong> Filtre leads qualificados com perguntas interativas antes de direcioná-los para sua agenda.',
                '<strong>Mais Tempo Livre:</strong> Elimine o trabalho braçal de responder mensagens manuais e foque na entrega dos seus serviços.'
            ],
            business_title: 'Negócio ou Empresa',
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
    const spec = common ? common[serviceKey] : null;

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
    if (pillPriceEl) {
        const priceNum = spec.meta_price.replace('From ', '').replace('Desde ', '').replace('A partir de ', '');
        pillPriceEl.textContent = `${common.price_prefix} ${priceNum}`;
    }

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
