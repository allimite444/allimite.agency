/* =====================================================
   CLOUDFLOW - SAAS LANDING PAGE LOGIC
   ===================================================== */

// =====================================================
// TRANSLATIONS DATA
// =====================================================
const translations = {
    en: {
        nav_features: 'Features',
        nav_dashboard: 'Dashboard',
        nav_pricing: 'Pricing',
        nav_faq: 'FAQ',
        hero_badge: '⚡ Cloud Operations Redefined',
        hero_t1: 'Unify your stack.',
        hero_t2: 'Accelerate flow.',
        hero_desc: 'The ultimate visual dashboard for modern engineering operations. Monitor cloud infrastructure, optimize cost efficiency, and automate deployments in real-time.',
        btn_start: 'Start Free Trial',
        btn_demo: 'View Live Demo',
        dash_c1: 'Active Nodes',
        dash_c2: 'Avg. Latency',
        dash_c3: 'System Load',
        chart_title_1: 'Network Ingress/Egress',
        feat_tag: 'Capabilities',
        feat_title: 'Designed for <span class="gradient-text">scale</span>',
        feat_desc: 'Engineered to process millions of transactions per second with microsecond latency.',
        f1_title: 'Lightning Fast',
        f1_desc: 'Optimized engines render massive data pipelines instantly, without UI freezing or lag.',
        f2_title: 'Bank-Grade Security',
        f2_desc: 'End-to-end TLS 1.3 encryption and automated compliance guarantees your data remains isolated.',
        f3_title: 'Automated Orchestration',
        f3_desc: 'Define flow rules in plain code and watch your clusters resize dynamically based on inbound load.',
        pricing_tag: 'Flexible Plans',
        pricing_title: 'Tailored to your <span class="gradient-text">growth</span>',
        billing_monthly: 'Monthly',
        billing_yearly: 'Yearly (Save 20%)',
        p1_name: 'Starter',
        p1_desc: 'Best for single developers.',
        p2_name: 'Professional',
        p2_desc: 'For growing startups and teams.',
        p3_name: 'Enterprise',
        p3_desc: 'For global operations.',
        p3_custom: 'Custom',
        p_f1: 'Up to 5 nodes',
        p_f2: '24h log retention',
        p_f3: 'Community support',
        p_f4: 'Unlimited nodes',
        p_f5: '30-day log retention',
        p_f6: 'Priority support (1h SLA)',
        p_f7: 'API & Webhooks',
        p_f8: 'Dedicated cluster hosting',
        p_f9: 'Custom compliance & audits',
        p_f10: 'Dedicated account executive',
        p_f11: '99.99% Uptime SLA',
        btn_choose: 'Get Started',
        btn_talk: 'Talk to Sales',
        faq_tag: 'Got Questions?',
        faq_title: 'Frequently Asked <span class="gradient-text">Questions</span>',
        q1: 'Is there a free trial period?',
        a1: 'Yes! All paid plans (Starter and Professional) come with a 14-day free trial. No credit card is required to sign up.',
        q2: 'Can I upgrade or downgrade my plan later?',
        a2: 'Absolutely. You can change your plan or billing cycle at any time from your account settings page. Downgrades are prorated.',
        q3: 'How is payment security handled?',
        a3: 'All transaction processing is securely handled by Stripe. Your credit card details never touch our databases.'
    },
    es: {
        nav_features: 'Funciones',
        nav_dashboard: 'Panel',
        nav_pricing: 'Precios',
        nav_faq: 'Preguntas',
        hero_badge: '⚡ Operaciones en la Nube Redefinidas',
        hero_t1: 'Unificá tu stack.',
        hero_t2: 'Acelerá tu flujo.',
        hero_desc: 'El panel de control visual definitivo para operaciones de ingeniería modernas. Monitoreá infraestructura en la nube, optimizá costos y automatizá despliegues en tiempo real.',
        btn_start: 'Prueba Gratis',
        btn_demo: 'Ver Demo en Vivo',
        dash_c1: 'Nodos Activos',
        dash_c2: 'Latencia Promedio',
        dash_c3: 'Carga del Sistema',
        chart_title_1: 'Ingreso/Egreso de Red',
        feat_tag: 'Capacidades',
        feat_title: 'Diseñado para <span class="gradient-text">escalar</span>',
        feat_desc: 'Preparado para procesar millones de peticiones por segundo con latencias de microsegundos.',
        f1_title: 'Rápido como el Rayo',
        f1_desc: 'Motores optimizados renderizan flujos masivos de datos al instante, sin congelar la pantalla.',
        f2_title: 'Seguridad Bancaria',
        f2_desc: 'Encriptación TLS 1.3 de extremo a extremo y cumplimiento normativo automatizado garantizan el aislamiento de datos.',
        f3_title: 'Orquestación Automática',
        f3_desc: 'Definí reglas de flujo en código puro y mira cómo tus servidores se redimensionan según la carga de red.',
        pricing_tag: 'Planes Flexibles',
        pricing_title: 'Adaptado a tu <span class="gradient-text">crecimiento</span>',
        billing_monthly: 'Mensual',
        billing_yearly: 'Anual (Ahorrá 20%)',
        p1_name: 'Starter',
        p1_desc: 'Ideal para desarrolladores independientes.',
        p2_name: 'Profesional',
        p2_desc: 'Para startups y equipos en crecimiento.',
        p3_name: 'Enterprise',
        p3_desc: 'Para operaciones globales.',
        p3_custom: 'Personalizado',
        p_f1: 'Hasta 5 nodos',
        p_f2: 'Retención de logs de 24h',
        p_f3: 'Soporte comunitario',
        p_f4: 'Nodos ilimitados',
        p_f5: 'Retención de logs de 30 días',
        p_f6: 'Soporte prioritario (SLA de 1h)',
        p_f7: 'API y Webhooks',
        p_f8: 'Servidores dedicados',
        p_f9: 'Auditorías de seguridad a medida',
        p_f10: 'Ejecutivo de cuentas exclusivo',
        p_f11: 'SLA de disponibilidad del 99.99%',
        btn_choose: 'Comenzar Ahora',
        btn_talk: 'Hablar con Ventas',
        faq_tag: '¿Tenés Preguntas?',
        faq_title: 'Preguntas <span class="gradient-text">Frecuentes</span>',
        q1: '¿Hay un período de prueba gratuito?',
        a1: '¡Sí! Todos los planes pagos (Starter y Profesional) incluyen una prueba gratuita de 14 días. No se requiere tarjeta de crédito para registrarse.',
        q2: '¿Puedo cambiar de plan más adelante?',
        a2: 'Totalmente. Podés mejorar, bajar de plan o cambiar el ciclo de facturación en cualquier momento desde tu panel de configuración.',
        q3: '¿Cómo se maneja la seguridad de los pagos?',
        a3: 'Todo el procesamiento de transacciones se realiza de forma segura a través de Stripe. Tus datos bancarios nunca se guardan en nuestros servidores.'
    },
    pt: {
        nav_features: 'Recursos',
        nav_dashboard: 'Painel',
        nav_pricing: 'Preços',
        nav_faq: 'FAQ',
        hero_badge: '⚡ Operações de Nuvem Redefinidas',
        hero_t1: 'Unifique seu stack.',
        hero_t2: 'Acelere o fluxo.',
        hero_desc: 'O painel visual definitivo para operações modernas de engenharia. Monitore infraestrutura em nuvem, otimize custos e automatize deploys em tempo real.',
        btn_start: 'Teste Grátis',
        btn_demo: 'Ver Demo Ao Vivo',
        dash_c1: 'Nós Ativos',
        dash_c2: 'Latência Média',
        dash_c3: 'Carga do Sistema',
        chart_title_1: 'Tráfego de Rede (Entrada/Saída)',
        feat_tag: 'Capacidades',
        feat_title: 'Projetado para <span class="gradient-text">escalar</span>',
        feat_desc: 'Desenvolvido para processar milhões de requisições por segundo com latência de microssegundos.',
        f1_title: 'Ultrarrápido',
        f1_desc: 'Motores otimizados renderizam fluxos massivos de dados instantaneamente, sem travamentos.',
        f2_title: 'Segurança Bancária',
        f2_desc: 'Criptografia TLS 1.3 de ponta a ponta e conformidade automatizada garantem o isolamento dos seus dados.',
        f3_title: 'Orquestração Automática',
        f3_desc: 'Defina regras de fluxo em código simples e veja seus servidores escalarem dinamicamente conforme a carga.',
        pricing_tag: 'Planos Flexíveis',
        pricing_title: 'Sob medida para seu <span class="gradient-text">crescimento</span>',
        billing_monthly: 'Mensal',
        billing_yearly: 'Anual (Economize 20%)',
        p1_name: 'Starter',
        p1_desc: 'Melhor para desenvolvedores solo.',
        p2_name: 'Profissional',
        p2_desc: 'Para startups e equipes em crescimento.',
        p3_name: 'Enterprise',
        p3_desc: 'Para operações globais.',
        p3_custom: 'Personalizado',
        p_f1: 'Até 5 nós',
        p_f2: 'Retenção de logs de 24h',
        p_f3: 'Suporte comunitário',
        p_f4: 'Nós ilimitados',
        p_f5: 'Retenção de logs de 30 dias',
        p_f6: 'Suporte prioritário (SLA de 1h)',
        p_f7: 'API & Webhooks',
        p_f8: 'Hospedagem de servidor dedicada',
        p_f9: 'Auditorias de segurança customizadas',
        p_f10: 'Gerente de contas exclusivo',
        p_f11: 'SLA de 99.99% de disponibilidade',
        btn_choose: 'Começar Agora',
        btn_talk: 'Falar com Vendas',
        faq_tag: 'Tem Dúvidas?',
        faq_title: 'Perguntas <span class="gradient-text">Frequentes</span>',
        q1: 'Existe um período de teste gratuito?',
        a1: 'Sim! Todos os planos pagos (Starter e Profissional) vêm com um teste gratuito de 14 dias. Não é necessário cartão de crédito para se cadastrar.',
        q2: 'Posso alterar meu plano mais tarde?',
        a2: 'Com certeza. Você pode alterar seu plano ou ciclo de faturamento a qualquer momento nas configurações da sua conta.',
        q3: 'Como é tratada a segurança dos pagamentos?',
        a3: 'Todo o processamento das transações é realizado com segurança pela Stripe. Os dados do seu cartão nunca chegam ao nosso banco de dados.'
    }
};

// =====================================================
// GLOBAL VARIABLES
// =====================================================
let currentLang = localStorage.getItem('cloudflow-lang') || 'en';
let billingInterval = 'monthly'; // 'monthly' or 'yearly'

// =====================================================
// i18n ENGINE
// =====================================================
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('cloudflow-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Text replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Rich HTML replacement
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Language buttons active toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Document Title Update
    const titles = {
        en: 'CloudFlow | SaaS Operations Dashboard',
        es: 'CloudFlow | Panel de Operaciones SaaS',
        pt: 'CloudFlow | Painel de Operações SaaS'
    };
    document.title = titles[lang] || titles.en;
}

// =====================================================
// MAIN INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');

    const toggleBtn = document.getElementById('toggle-btn');
    const labelMonthly = document.getElementById('label-monthly');
    const labelYearly = document.getElementById('label-yearly');

    const starterPrice = document.getElementById('starter-price');
    const proPrice = document.getElementById('pro-price');

    // 1. Preloader fade out
    window.addEventListener('load', () => {
        if (preloader) preloader.classList.add('fade-out');
    });
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
        }
    }, 1000);

    // 2. Initialize Language Switch
    applyTranslations(currentLang);

    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            const lang = btn.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                applyTranslations(lang);
            }
        });
    }

    // 3. Header scroll class
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Hamburger navigation menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 5. Billing Interval Switcher
    function updatePricingValues() {
        const isYearly = billingInterval === 'yearly';
        
        // Toggle active labels
        labelMonthly.classList.toggle('active', !isYearly);
        labelYearly.classList.toggle('active', isYearly);
        toggleBtn.classList.toggle('yearly', isYearly);

        // Update Starter Plan Price
        const sPrice = isYearly ? starterPrice.getAttribute('data-yearly') : starterPrice.getAttribute('data-monthly');
        animatePriceChange(starterPrice, sPrice);

        // Update Pro Plan Price
        const pPrice = isYearly ? proPrice.getAttribute('data-yearly') : proPrice.getAttribute('data-monthly');
        animatePriceChange(proPrice, pPrice);
    }

    function animatePriceChange(el, targetVal) {
        el.style.transform = 'scale(0.8)';
        el.style.opacity = '0';
        
        setTimeout(() => {
            el.textContent = targetVal;
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
        }, 150);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            billingInterval = billingInterval === 'monthly' ? 'yearly' : 'monthly';
            updatePricingValues();
        });
        
        labelMonthly.addEventListener('click', () => {
            if (billingInterval !== 'monthly') {
                billingInterval = 'monthly';
                updatePricingValues();
            }
        });
        
        labelYearly.addEventListener('click', () => {
            if (billingInterval !== 'yearly') {
                billingInterval = 'yearly';
                updatePricingValues();
            }
        });
    }

    // 6. Accordion FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 7. Interactive dashboard stats updates (Simulate live operations)
    setInterval(() => {
        const activeNodeEl = document.querySelector('.dash-stats .dash-card:nth-child(1) .card-value');
        const latencyEl = document.querySelector('.dash-stats .dash-card:nth-child(2) .card-value');
        const loadEl = document.querySelector('.dash-stats .dash-card:nth-child(3) .card-value');

        if (activeNodeEl && Math.random() > 0.4) {
            // Jitter nodes slightly (+- 3)
            let val = parseInt(activeNodeEl.textContent.replace(',', ''));
            val += Math.floor(Math.random() * 7) - 3;
            activeNodeEl.textContent = val.toLocaleString();
        }

        if (latencyEl && Math.random() > 0.7) {
            // Jitter latency (12ms - 17ms)
            let val = Math.floor(Math.random() * 6) + 12;
            latencyEl.textContent = `${val}ms`;
        }

        if (loadEl && Math.random() > 0.5) {
            // Jitter CPU load (+- 1.5%)
            let val = parseFloat(loadEl.textContent.replace('%', ''));
            val += (Math.random() * 3) - 1.5;
            if (val < 35) val = 35;
            if (val > 55) val = 55;
            loadEl.textContent = `${val.toFixed(1)}%`;
        }
    }, 3000);
});
