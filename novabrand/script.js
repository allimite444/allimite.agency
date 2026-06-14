document.addEventListener('DOMContentLoaded', () => {
    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
            spans[1].style.transform = nav.classList.contains('active') ? 'rotate(-45deg) translate(1px, -1px)' : '';
        });
    }

    // ===== TRANSLATIONS DATA =====
    const translations = {
        en: {
            nav_services: "Services",
            nav_work: "Our Work",
            nav_contact: "Get in Touch",
            hero_tagline: "We Build Next-Gen Brands",
            hero_title: "We craft digital experiences that <span>convert & scale</span>",
            hero_subtitle: "NovaBrand is a full-service creative agency helping ambitious businesses grow through strategic design, high-converting copy, and targeted marketing.",
            hero_cta_work: "View Our Work",
            hero_cta_start: "Start Project",
            services_tag: "What We Do",
            services_title: "Services to fuel your growth",
            svc1_title: "Growth Marketing",
            svc1_desc: "High-ROI paid advertising and marketing campaigns designed to scale your client acquisition funnel rapidly.",
            svc2_title: "Brand Strategy",
            svc2_desc: "Memorable brand identity design, messaging frameworks, and positioning that set you apart from competitors.",
            svc3_title: "Web & UX Design",
            svc3_desc: "Stunning, fast-loading websites and landing pages optimized for maximum user experience and high conversions.",
            work_tag: "Proven Results",
            work_title: "Case studies from our partners",
            work1_stat: "+240% Sales Increase",
            work1_title: "FitLife E-Commerce",
            work1_desc: "Complete redesign and scaling strategy for a premier wellness and lifestyle fitness brand.",
            work2_stat: "150k+ Monthly Visitors",
            work2_title: "SaaSify Platform",
            work2_desc: "Engineered a robust organic growth framework and modern interactive website template.",
            contact_tag: "Let's Team Up",
            contact_title: "Ready to scale?",
            contact_desc: "Fill out the form below and one of our growth strategists will reach out to schedule a discovery call.",
            form_name: "Your Name",
            form_name_ph: "Jane Doe",
            form_email: "Your Email",
            form_email_ph: "jane@company.com",
            form_goal: "Primary Goal",
            form_goal_default: "Select your goal",
            form_goal_1: "Increase website conversions",
            form_goal_2: "Launch a new brand/product",
            form_goal_3: "Scale paid acquisition channels",
            form_goal_4: "Other / Not sure",
            form_desc_label: "Tell us about your brand",
            form_desc_ph: "Briefly describe your business, audience, and challenges...",
            form_btn: "Get Started",
            footer_desc: "Scaling digital brands into market leaders through modern marketing and design.",
            footer_copy: "&copy; 2026 NovaBrand Creative Agency. Built for portfolio presentation.",
            form_success_title: "Discovery Call Requested!",
            form_success_text: "Thanks for reaching out, <strong>{name}</strong>. We've received your request to discuss: <em>\"{goal}\"</em>.",
            form_success_subtext: "A confirmation has been sent to <strong>{email}</strong>. One of our growth specialists will contact you within the next business day."
        },
        es: {
            nav_services: "Servicios",
            nav_work: "Trabajos",
            nav_contact: "Contacto",
            hero_tagline: "Creamos Marcas de Próxima Generación",
            hero_title: "Diseñamos experiencias digitales que <span>convierten y escalan</span>",
            hero_subtitle: "NovaBrand es una agencia creativa integral que ayuda a empresas ambiciosas a crecer mediante diseño estratégico, copy persuasivo de alta conversión y marketing enfocado en resultados.",
            hero_cta_work: "Ver Trabajos",
            hero_cta_start: "Iniciar Proyecto",
            services_tag: "Qué Hacemos",
            services_title: "Servicios para impulsar tu crecimiento",
            svc1_title: "Growth Marketing",
            svc1_desc: "Campañas de marketing y publicidad paga con alto ROI diseñadas para escalar tu embudo de adquisición rápidamente.",
            svc2_title: "Estrategia de Marca",
            svc2_desc: "Diseño de identidad de marca memorable, marcos de comunicación y posicionamiento que te destacan de la competencia.",
            svc3_title: "Diseño Web y UX",
            svc3_desc: "Sitios web y landing pages deslumbrantes y de carga rápida, optimizados para una máxima experiencia de usuario y altas conversiones.",
            work_tag: "Resultados Probados",
            work_title: "Casos de estudio de nuestros socios",
            work1_stat: "+240% Incremento en Ventas",
            work1_title: "FitLife E-Commerce",
            work1_desc: "Rediseño completo y estrategia de escalamiento para una marca líder de bienestar y fitness.",
            work2_stat: "150k+ Visitantes Mensuales",
            work2_title: "Plataforma SaaSify",
            work2_desc: "Ingeniería de una sólida estructura de crecimiento orgánico y una plantilla web moderna e interactiva.",
            contact_tag: "Trabajemos Juntos",
            contact_title: "¿Listo para escalar?",
            contact_desc: "Completa el formulario de abajo y uno de nuestros estrategas de crecimiento se comunicará contigo para agendar una llamada de descubrimiento.",
            form_name: "Tu Nombre",
            form_name_ph: "Juan Pérez",
            form_email: "Tu Correo Electrónico",
            form_email_ph: "juan@empresa.com",
            form_goal: "Objetivo Principal",
            form_goal_default: "Selecciona tu objetivo",
            form_goal_1: "Aumentar conversiones web",
            form_goal_2: "Lanzar una nueva marca/producto",
            form_goal_3: "Escalar canales de adquisición paga",
            form_goal_4: "Otro / No estoy seguro",
            form_desc_label: "Cuéntanos sobre tu marca",
            form_desc_ph: "Describe brevemente tu negocio, público objetivo y desafíos...",
            form_btn: "Empezar",
            footer_desc: "Escalando marcas digitales hacia líderes del mercado a través de marketing y diseño modernos.",
            footer_copy: "&copy; 2026 NovaBrand Creative Agency. Creado para presentación de portfolio.",
            form_success_title: "¡Llamada de Descubrimiento Solicitada!",
            form_success_text: "Gracias por contactarnos, <strong>{name}</strong>. Recibimos tu solicitud para conversar sobre: <em>\"{goal}\"</em>.",
            form_success_subtext: "Se envió una confirmación a <strong>{email}</strong>. Uno de nuestros especialistas se pondrá en contacto contigo en el transcurso del próximo día hábil."
        },
        pt: {
            nav_services: "Serviços",
            nav_work: "Nosso Trabalho",
            nav_contact: "Contato",
            hero_tagline: "Criamos Marcas de Próxima Geração",
            hero_title: "Criamos experiências digitais que <span>convertem e escalam</span>",
            hero_subtitle: "A NovaBrand é uma agência criativa de serviço completo que ajuda empresas ambiciosas a crescer por meio de design estratégico, copywriting de alta conversão e marketing direcionado.",
            hero_cta_work: "Ver Nosso Trabalho",
            hero_cta_start: "Iniciar Projeto",
            services_tag: "O Que Fazemos",
            services_title: "Serviços para impulsionar seu crescimento",
            svc1_title: "Growth Marketing",
            svc1_desc: "Campanhas de marketing e anúncios pagos com alto ROI projetados para escalar seu funil de aquisição de clientes rapidamente.",
            svc2_title: "Estratégia de Marca",
            svc2_desc: "Design de identidade de marca memorável, estruturas de mensagem e posicionamento que destacam você da concorrência.",
            svc3_title: "Design Web & UX",
            svc3_desc: "Sites e landing pages deslumbrantes, de carregamento rápido, otimizados para máxima experiência do usuário e alta conversão.",
            work_tag: "Resultados Comprovados",
            work_title: "Casos de estudo de nossos parceiros",
            work1_stat: "+240% de Aumento nas Vendas",
            work1_title: "FitLife E-Commerce",
            work1_desc: "Redesenho completo e estratégia de escala para uma marca líder em bem-estar e fitness.",
            work2_stat: "150k+ Visitantes Mensais",
            work2_title: "Plataforma SaaSify",
            work2_desc: "Desenvolvimento de uma estrutura sólida de crescimento orgânico e modelo interativo de site moderno.",
            contact_tag: "Vamos Trabalhar Juntos",
            contact_title: "Pronto para escalar?",
            contact_desc: "Preencha o formulário abaixo e um de nossos estrategistas de crescimento entrará em contato para agendar uma reunião de descoberta.",
            form_name: "Seu Nome",
            form_name_ph: "João Silva",
            form_email: "Seu E-mail",
            form_email_ph: "joao@empresa.com",
            form_goal: "Objetivo Principal",
            form_goal_default: "Selecione seu objetivo",
            form_goal_1: "Aumentar conversões do site",
            form_goal_2: "Lançar uma nova marca/produto",
            form_goal_3: "Escalar canais de aquisição pagos",
            form_goal_4: "Outro / Não tenho certeza",
            form_desc_label: "Conte-nos sobre sua marca",
            form_desc_ph: "Descreva brevemente seu negócio, público-alvo e desafios...",
            form_btn: "Começar",
            footer_desc: "Escalonando marcas digitais para líderes de mercado por meio de marketing e design modernos.",
            footer_copy: "&copy; 2026 NovaBrand Creative Agency. Criado para apresentação de portfólio.",
            form_success_title: "Reunião de Descoberta Solicitada!",
            form_success_text: "Obrigado pelo contato, <strong>{name}</strong>. Recebemos sua solicitação para discutir: <em>\"{goal}\"</em>.",
            form_success_subtext: "Uma confirmação foi enviada para <strong>{email}</strong>. Um de nossos especialistas em crescimento entrará em contato em até um dia útil."
        }
    };

    // ===== i18n ENGINE =====
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;

        const t = translations[lang];

        // data-i18n -> textContent
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.textContent = t[key];
            }
        });

        // data-i18n-html -> innerHTML
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // data-i18n-placeholder -> placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Update active classes on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update page title
        const titles = {
            en: 'NovaBrand — Creative Digital Agency',
            es: 'NovaBrand — Agencia Digital Creativa',
            pt: 'NovaBrand — Agência Digital Criativa'
        };
        document.title = titles[lang] || titles.en;
    }

    // ===== INITIALIZATION & EVENTS =====
    applyTranslations(currentLang);

    // Language Toggle Click Event
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

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('novabrand-form');
    const contactCard = document.querySelector('.contact-card');

    if (contactForm && contactCard) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve values
            const name = document.getElementById('n-name').value;
            const email = document.getElementById('n-email').value;
            const goalSelect = document.getElementById('n-goal');
            
            // Get selected goal text/translation
            let selectedGoalText = goalSelect.value;
            const selectedOption = goalSelect.options[goalSelect.selectedIndex];
            if (selectedOption.hasAttribute('data-i18n')) {
                const goalKey = selectedOption.getAttribute('data-i18n');
                selectedGoalText = translations[currentLang][goalKey] || selectedGoalText;
            }

            const t = translations[currentLang];
            const successText = t.form_success_text
                .replace('{name}', name)
                .replace('{goal}', selectedGoalText);
            const successSubtext = t.form_success_subtext
                .replace('{email}', email);
            
            // Replace form with a gorgeous success message
            contactCard.innerHTML = `
                <div class="form-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3>${t.form_success_title}</h3>
                    <p>${successText}</p>
                    <p>${successSubtext}</p>
                </div>
            `;
        });
    }
});
