document.addEventListener('DOMContentLoaded', () => {
    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg) translate(6px, 5px)' : '';
            spans[1].style.transform = nav.classList.contains('active') ? 'rotate(-45deg) translate(1px, -1px)' : '';
        });
    }

    // ===== TRANSLATIONS DATA =====
    const translations = {
        en: {
            nav_story: "Our Story",
            nav_menu: "Menu",
            nav_book: "Book Table",
            hero_tagline: "Est. 2018 | Michelin Starred",
            hero_title: "A Symphony of <span>Exquisite Flavors</span>",
            hero_subtitle: "Indulge in a culinary journey crafted by world-class chefs using locally sourced, organic ingredients in an atmosphere of refined elegance.",
            hero_cta_menu: "Explore Menu",
            hero_cta_book: "Reserve Table",
            hero_scroll: "Scroll",
            about_tagline: "Our Philosophy",
            about_title: "Crafting Memories, One Dish at a Time",
            about_p1: "At Luxe Dining, we believe dining is not just about food—it's an art form. Every plate is a carefully composed masterpiece, balancing textures, temperatures, and tastes to surprise and delight your palate.",
            about_p2: "Our kitchen is led by Chef Antoine Laurent, whose global experience and respect for seasonal ingredients bring a modern twist to classic culinary heritage.",
            menu_tagline: "Chef's Selection",
            menu_title: "Our Seasonal Menu",
            menu_tab_starters: "Starters",
            menu_tab_mains: "Mains",
            menu_tab_desserts: "Desserts",
            menu_tab_cocktails: "Cocktails",
            book_tagline: "Reservations",
            book_title: "Book A Table",
            book_desc: "Secure your dining experience. For parties larger than 8, please call us directly.",
            book_label_name: "Full Name",
            book_ph_name: "John Doe",
            book_label_email: "Email Address",
            book_ph_email: "john@example.com",
            book_label_date: "Select Date",
            book_label_time: "Select Time",
            book_ph_time: "Select time",
            book_label_guests: "Guests",
            book_guests_2: "2 People",
            book_guests_3: "3 People",
            book_guests_4: "4 People",
            book_guests_5: "5 - 8 People",
            book_btn: "Confirm Reservation",
            book_success_title: "Reservation Confirmed",
            book_success_text: "Thank you, <strong>{name}</strong>. Your table for <strong>{guests} people</strong> is reserved for <strong>{date}</strong> at <strong>{time}</strong>.",
            book_success_subtext: "A confirmation email has been sent to your inbox. We look forward to welcoming you.",
            footer_desc: "Culinary perfection and refined hospitality in the heart of the city.",
            footer_hours: "Hours",
            footer_days_week: "Tuesday — Sunday<br>18:00 — 23:30",
            footer_monday: "Monday<br>Closed",
            footer_contact: "Contact",
            footer_address: "123 Gourmet Blvd, Food District",
            footer_copy: "&copy; 2026 Luxe Dining. Built for portfolio presentation."
        },
        es: {
            nav_story: "Nuestra Historia",
            nav_menu: "Menú",
            nav_book: "Reservar Mesa",
            hero_tagline: "Est. 2018 | Estrella Michelin",
            hero_title: "Una Sinfonía de <span>Sabores Exquisitos</span>",
            hero_subtitle: "Déjate llevar por un viaje culinario diseñado por chefs de renombre mundial con ingredientes orgánicos y locales, en una atmósfera de refinada elegancia.",
            hero_cta_menu: "Explorar Menú",
            hero_cta_book: "Reservar Mesa",
            hero_scroll: "Bajar",
            about_tagline: "Nuestra Filosofía",
            about_title: "Diseñando Memorias, Plato a Plato",
            about_p1: "En Luxe Dining, creemos que cenar no es solo cuestión de comida: es un arte. Cada plato es una obra maestra cuidadosamente compuesta, equilibrando texturas, temperaturas y sabores para sorprender y deleitar tu paladar.",
            about_p2: "Nuestra cocina está dirigida por el Chef Antoine Laurent, cuya experiencia global y respeto por los ingredientes de estación aportan un toque moderno al patrimonio culinario clásico.",
            menu_tagline: "Selección del Chef",
            menu_title: "Nuestro Menú de Estación",
            menu_tab_starters: "Entradas",
            menu_tab_mains: "Principales",
            menu_tab_desserts: "Postres",
            menu_tab_cocktails: "Cocteles",
            book_tagline: "Reservas",
            book_title: "Reservar una Mesa",
            book_desc: "Asegura tu experiencia gastronómica. Para grupos de más de 8 personas, por favor llámanos directamente.",
            book_label_name: "Nombre Completo",
            book_ph_name: "Juan Pérez",
            book_label_email: "Correo Electrónico",
            book_ph_email: "juan@correo.com",
            book_label_date: "Seleccionar Fecha",
            book_label_time: "Seleccionar Hora",
            book_ph_time: "Seleccionar hora",
            book_label_guests: "Comensales",
            book_guests_2: "2 Personas",
            book_guests_3: "3 Personas",
            book_guests_4: "4 Personas",
            book_guests_5: "5 a 8 Personas",
            book_btn: "Confirmar Reserva",
            book_success_title: "Reserva Confirmada",
            book_success_text: "Gracias, <strong>{name}</strong>. Tu mesa para <strong>{guests} personas</strong> está reservada para el <strong>{date}</strong> a las <strong>{time}</strong>.",
            book_success_subtext: "Se ha enviado un correo de confirmación a tu bandeja de entrada. Te esperamos.",
            footer_desc: "Perfección culinaria y hospitalidad refinada en el corazón de la ciudad.",
            footer_hours: "Horarios",
            footer_days_week: "Martes — Domingo<br>18:00 — 23:30",
            footer_monday: "Lunes<br>Cerrado",
            footer_contact: "Contacto",
            footer_address: "123 Gourmet Blvd, Distrito Gastronómico",
            footer_copy: "&copy; 2026 Luxe Dining. Creado para presentación de portfolio."
        },
        pt: {
            nav_story: "Nossa História",
            nav_menu: "Menu",
            nav_book: "Reservar Mesa",
            hero_tagline: "Est. 2018 | Estrela Michelin",
            hero_title: "Uma Sinfonia de <span>Sabores Requintados</span>",
            hero_subtitle: "Entregue-se a uma jornada culinária criada por chefs de renome mundial, com ingredientes orgânicos locais, em uma atmosfera de elegância refinada.",
            hero_cta_menu: "Explorar Menu",
            hero_cta_book: "Reservar Mesa",
            hero_scroll: "Rolar",
            about_tagline: "Nossa Filosofia",
            about_title: "Criando Memórias, Prato a Prato",
            about_p1: "No Luxe Dining, acreditamos que jantar não é apenas sobre comida — é uma forma de arte. Cada prato é uma obra-prima cuidadosamente composta, equilibrando texturas, temperaturas e sabores para surpreender e encantar o seu paladar.",
            about_p2: "Nossa cozinha é liderada pelo Chef Antoine Laurent, cuja experiência global e respeito pelos ingredientes sazonais trazem um toque moderno à herança culinária clássica.",
            menu_tagline: "Seleção do Chef",
            menu_title: "Nosso Menu Sazonal",
            menu_tab_starters: "Entradas",
            menu_tab_mains: "Principais",
            menu_tab_desserts: "Sobremesas",
            menu_tab_cocktails: "Coquetéis",
            book_tagline: "Reservas",
            book_title: "Reservar uma Mesa",
            book_desc: "Garanta sua experiência gastronômica. Para grupos com mais de 8 pessoas, ligue diretamente para nós.",
            book_label_name: "Nome Completo",
            book_ph_name: "João Silva",
            book_label_email: "E-mail",
            book_ph_email: "joao@email.com",
            book_label_date: "Selecionar Data",
            book_label_time: "Selecionar Horário",
            book_ph_time: "Selecionar horário",
            book_label_guests: "Pessoas",
            book_guests_2: "2 Pessoas",
            book_guests_3: "3 Pessoas",
            book_guests_4: "4 Pessoas",
            book_guests_5: "5 a 8 Pessoas",
            book_btn: "Confirmar Reserva",
            book_success_title: "Reserva Confirmada",
            book_success_text: "Obrigado, <strong>{name}</strong>. Sua mesa para <strong>{guests} pessoas</strong> está reservada para <strong>{date}</strong> às <strong>{time}</strong>.",
            book_success_subtext: "Um e-mail de informação foi enviado para sua caixa de entrada. Estamos ansiosos para recebê-lo.",
            footer_desc: "Perfeição culinária e hospitalidade refinada no coração da cidade.",
            footer_hours: "Horários",
            footer_days_week: "Terça — Domingo<br>18:00 — 23:30",
            footer_monday: "Segunda-feira<br>Fechado",
            footer_contact: "Contato",
            footer_address: "123 Gourmet Blvd, Distrito Gastronômico",
            footer_copy: "&copy; 2026 Luxe Dining. Criado para apresentação de portfólio."
        }
    };

    // ===== MENU DATA =====
    const menuData = {
        en: {
            starters: [
                { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls, wild mushroom, black truffle paste, house aioli.", image: "../assets/luxe_arancini.png" },
                { name: "Heirloom Burrata", price: "$22", desc: "Local heirloom tomatoes, aged balsamic glaze, basil oil, toasted sourdough.", image: "../assets/luxe_burrata.png" },
                { name: "Pan-Seared Scallops", price: "$26", desc: "Cauliflower purée, crispy prosciutto, microgreens, brown butter sauce.", image: "../assets/luxe_scallops.png" },
                { name: "Roasted Beet Salad", price: "$19", desc: "Goat cheese whip, candied walnuts, baby arugula, citrus vinaigrette.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80" }
            ],
            mains: [
                { name: "Dry-Aged Ribeye", price: "$56", desc: "14oz ribeye, roasted garlic bone marrow, rosemary fingerling potatoes.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80" },
                { name: "Chilean Sea Bass", price: "$48", desc: "Miso glazed, ginger-scallion broth, baby bok choy, jasmine rice.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80" },
                { name: "Herb Crust Lamb Rack", price: "$52", desc: "Dijon herb crust, parsnip purée, honey glazed carrots, red wine jus.", image: "../assets/luxe_lamb_rack.png" },
                { name: "Truffle Tagliatelle", price: "$38", desc: "House-made pasta, wild mushrooms, creamy truffle sauce, parmigiano reggiano.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=200&q=80" }
            ],
            desserts: [
                { name: "Deconstructed Mille-Feuille", price: "$16", desc: "Puff pastry, vanilla bean pastry cream, fresh raspberries, gold leaf.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80" },
                { name: "Dark Chocolate Soufflé", price: "$18", desc: "72% Valrhona chocolate, Tahitian vanilla bean gelato.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=200&q=80" },
                { name: "Signature Tiramisu", price: "$15", desc: "Mascarpone sabayon, espresso-soaked ladyfingers, cocoa dusting.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80" }
            ],
            drinks: [
                { name: "The Smoked Old Fashioned", price: "$20", desc: "Bourbon, angostura bitters, orange peel, applewood smoke dome.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=200&q=80" },
                { name: "Lavender Sage Gimlet", price: "$18", desc: "Artisanal gin, fresh lime, lavender syrup, fresh sage leaf.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=200&q=80" },
                { name: "Gold Leaf Martini", price: "$22", desc: "Vodka, dry vermouth, stuffed blue cheese olives, edible 24k gold leaf.", image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=200&q=80" }
            ]
        },
        es: {
            starters: [
                { name: "Arancini de Trufa", price: "$18", desc: "Bolas de risotto crujientes, hongos silvestres, pasta de trufa negra, alioli de la casa.", image: "../assets/luxe_arancini.png" },
                { name: "Burrata de Tomates Reliquia", price: "$22", desc: "Tomates reliquia locales, glaseado balsámico añejo, aceite de albahaca, masa madre tostada.", image: "../assets/luxe_burrata.png" },
                { name: "Vieiras Selladas a la Sartén", price: "$26", desc: "Puré de coliflor, prosciutto crujiente, microbrotes, salsa de manteca marrón.", image: "../assets/luxe_scallops.png" },
                { name: "Ensalada de Remolacha Asada", price: "$19", desc: "Queso de cabra batido, nueces confitadas, rúcula tierna, vinagreta de cítricos.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80" }
            ],
            mains: [
                { name: "Ribeye Madurado", price: "$56", desc: "Ojo de bife de 14oz, tuétano con ajo asado, papas fingerling al romero.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80" },
                { name: "Lubina Chilena", price: "$48", desc: "Glaseado de miso, caldo de jengibre y cebollín, bok choy tierno, arroz jazmín.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80" },
                { name: "Carré de Cordero en Costra de Hierbas", price: "$52", desc: "Costra de hierbas y Dijon, puré de chirivía, zanahorias glaseadas con miel, jus de vino tinto.", image: "../assets/luxe_lamb_rack.png" },
                { name: "Tagliatelle de Trufa", price: "$38", desc: "Pasta artesanal, hongos silvestres, salsa cremosa de trufa, parmigiano reggiano.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=200&q=80" }
            ],
            desserts: [
                { name: "Milhojas Desestructurado", price: "$16", desc: "Hojaldre, crema pastelera de vainilla, frambuesas frescas, lámina de oro.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80" },
                { name: "Soufflé de Chocolate Negro", price: "$18", desc: "Chocolate Valrhona al 72%, gelato de vainilla de Tahití.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=200&q=80" },
                { name: "Tiramisú de la Casa", price: "$15", desc: "Sabayón de mascarpone, vainillas empapadas en espresso, espolvoreado de cacao.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80" }
            ],
            drinks: [
                { name: "Old Fashioned Ahumado", price: "$20", desc: "Bourbon, amargo de angostura, piel de naranja, cúpula de humo de madera de manzano.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=200&q=80" },
                { name: "Gimlet de Lavanda y Salvia", price: "$18", desc: "Ginebra artesanal, lima fresca, almíbar de lavanda, hoja de salvia fresca.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=200&q=80" },
                { name: "Martini con Lámina de Oro", price: "$22", desc: "Vodka, vermut seco, aceitunas rellenas de queso azul, lámina de oro comestible de 24k.", image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=200&q=80" }
            ]
        },
        pt: {
            starters: [
                { name: "Arancini de Trufas", price: "$18", desc: "Bolinhos de risoto crocantes, cogumelos silvestres, pasta de trutas negras, aioli da casa.", image: "../assets/luxe_arancini.png" },
                { name: "Burrata de Tomates Heritage", price: "$22", desc: "Tomates heritage locais, redução de balsâmico envelhecido, azeite de manjericão, fermentação natural tostada.", image: "../assets/luxe_burrata.png" },
                { name: "Vieiras Grelhadas", price: "$26", desc: "Purê de couve-flor, presunto cru crocante, brotos, molho de manteiga queimada.", image: "../assets/luxe_scallops.png" },
                { name: "Salada de Beterraba Assada", price: "$19", desc: "Queijo de cabra batido, nozes caramelizadas, rúcula baby, vinagrete cítrico.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80" }
            ],
            mains: [
                { name: "Ribeye Maturado", price: "$56", desc: "Ribeye de 14oz, tutano com alho assado, batatas fingerling com alecrim.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80" },
                { name: "Robalo Chileno", price: "$48", desc: "Grelhado com miso, caldo de gengibre e cebolinha, baby bok choy, arroz jasmim.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80" },
                { name: "Carré de Cordeiro em Crosta de Ervas", price: "$52", desc: "Crosta de ervas e Dijon, purê de pastinaca, cenouras caramelizadas com mel, jus de vinho tinto.", image: "../assets/luxe_lamb_rack.png" },
                { name: "Tagliatelle de Trufas", price: "$38", desc: "Massa artesanal, cogumelos silvestres, molho cremoso de trutas, queijo parmigiano reggiano.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=200&q=80" }
            ],
            desserts: [
                { name: "Mil-Folhas Desconstruído", price: "$16", desc: "Massa folhada, creme de confeiteiro de baunilha, framboesas frescas, folha de ouro.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80" },
                { name: "Soufflé de Chocolate Amargo", price: "$18", desc: "Chocolate Valrhona 72%, gelato de baunilha do Taiti.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=200&q=80" },
                { name: "Tiramisú da Casa", price: "$15", desc: "Sabayon de mascarpone, biscoitos champanhe embebidos em espresso, cacau em pó.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80" }
            ],
            drinks: [
                { name: "Old Fashioned Defumado", price: "$20", desc: "Bourbon, bitter de angostura, casca de laranja, cúpula de fumaça de macieira.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=200&q=80" },
                { name: "Gimlet de Lavanda e Sálvia", price: "$18", desc: "Gin artesanal, limão fresco, xarope de lavanda, folha de sálvia fresca.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=200&q=80" },
                { name: "Martini com Folha de Ouro", price: "$22", desc: "Vodka, vermute seco, azeitonas recheadas com queijo azul, folha de ouro comestível de 24k.", image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=200&q=80" }
            ]
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

        // Page title
        const titles = {
            en: 'Luxe Dining — Fine Culinary Experience',
            es: 'Luxe Dining — Experiencia Culinaria Exclusiva',
            pt: 'Luxe Dining — Experiência Culinária Exclusiva'
        };
        document.title = titles[lang] || titles.en;

        // Re-render active menu tab in the correct language
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            const category = activeTab.getAttribute('data-category');
            renderMenu(category);
        }
    }

    // ===== MENU TAB FUNCTIONALITY =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuGrid = document.getElementById('menu-grid');

    function renderMenu(category) {
        if (!menuGrid) return;
        
        // Clear grid
        menuGrid.innerHTML = '';
        
        // Fetch items in the active language
        const langData = menuData[currentLang] || menuData.en;
        const items = langData[category] || [];
        
        // Render items with fade-in effect
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.style.opacity = '0';
            itemElement.style.transform = 'translateY(15px)';
            itemElement.style.transition = 'all 0.5s ease';
            itemElement.style.transitionDelay = `${index * 0.08}s`;
            
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3>${item.name}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
            `;
            
            menuGrid.appendChild(itemElement);
            
            // Trigger animation in next tick
            setTimeout(() => {
                itemElement.style.opacity = '1';
                itemElement.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    // ===== INITIALIZATION & EVENTS =====
    
    // Apply language on load
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

    // Set initial category (called inside applyTranslations, but fallback here too)
    if (!document.querySelector('.tab-btn.active')) {
        renderMenu('starters');
    }

    // Add tab click listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const category = e.currentTarget.getAttribute('data-category');
            renderMenu(category);
        });
    });

    // ===== BOOKING FORM HANDLING =====
    const bookingForm = document.getElementById('booking-form');
    const bookingCard = document.querySelector('.booking-card');

    if (bookingForm && bookingCard) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve values
            const name = document.getElementById('b-name').value;
            const date = document.getElementById('b-date').value;
            const time = document.getElementById('b-time').value;
            const guests = document.getElementById('b-guests').value;
            
            // Transform date format to readable
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString(
                currentLang === 'es' ? 'es-ES' : (currentLang === 'pt' ? 'pt-BR' : 'en-US'), 
                { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    timeZone: 'UTC'
                }
            );

            const t = translations[currentLang];
            
            // Generate guest count description text
            let guestText = guests;
            if (currentLang === 'es') {
                guestText = `${guests} personas`;
            } else if (currentLang === 'pt') {
                guestText = `${guests} pessoas`;
            } else {
                guestText = `${guests} people`;
            }

            const successText = t.book_success_text
                .replace('{name}', name)
                .replace('{guests}', guestText)
                .replace('{date}', formattedDate)
                .replace('{time}', time);

            // Replace card innerHTML with a stunning booking success message
            bookingCard.innerHTML = `
                <div class="booking-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3>${t.book_success_title}</h3>
                    <p>${successText}</p>
                    <p>${t.book_success_subtext}</p>
                </div>
            `;
        });
    }
});
