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

    // ===== MENU DATA =====
    const menuData = {
        starters: [
            { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls, wild mushroom, black truffle paste, house aioli." },
            { name: "Heirloom Burrata", price: "$22", desc: "Local heirloom tomatoes, aged balsamic glaze, basil oil, toasted sourdough." },
            { name: "Pan-Seared Scallops", price: "$26", desc: "Cauliflower purée, crispy prosciutto, microgreens, brown butter sauce." },
            { name: "Roasted Beet Salad", price: "$19", desc: "Goat cheese whip, candied walnuts, baby arugula, citrus vinaigrette." }
        ],
        mains: [
            { name: "Dry-Aged Ribeye", price: "$56", desc: "14oz ribeye, roasted garlic bone marrow, rosemary fingerling potatoes." },
            { name: "Chilean Sea Bass", price: "$48", desc: "Miso glazed, ginger-scallion broth, baby bok choy, jasmine rice." },
            { name: "Herb Crust Lamb Rack", price: "$52", desc: "Dijon herb crust, parsnip purée, honey glazed carrots, red wine jus." },
            { name: "Truffle Tagliatelle", price: "$38", desc: "House-made pasta, wild mushrooms, creamy truffle sauce, parmigiano reggiano." }
        ],
        desserts: [
            { name: "Deconstructed Mille-Feuille", price: "$16", desc: "Puff pastry, vanilla bean pastry cream, fresh raspberries, gold leaf." },
            { name: "Dark Chocolate Soufflé", price: "$18", desc: "72% Valrhona chocolate, Tahitian vanilla bean gelato." },
            { name: "Signature Tiramisu", price: "$15", desc: "Mascarpone sabayon, espresso-soaked ladyfingers, cocoa dusting." }
        ],
        drinks: [
            { name: "The Smoked Old Fashioned", price: "$20", desc: "Bourbon, angostura bitters, orange peel, applewood smoke dome." },
            { name: "Lavender Sage Gimlet", price: "$18", desc: "Artisanal gin, fresh lime, lavender syrup, fresh sage leaf." },
            { name: "Gold Leaf Martini", price: "$22", desc: "Vodka, dry vermouth, stuffed blue cheese olives, edible 24k gold leaf." }
        ]
    };

    // ===== MENU TAB FUNCTIONALITY =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuGrid = document.getElementById('menu-grid');

    function renderMenu(category) {
        if (!menuGrid) return;
        
        // Clear grid
        menuGrid.innerHTML = '';
        
        // Fetch items
        const items = menuData[category] || [];
        
        // Render items with fade-in effect
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.style.opacity = '0';
            itemElement.style.transform = 'translateY(15px)';
            itemElement.style.transition = 'all 0.5s ease';
            itemElement.style.transitionDelay = `${index * 0.08}s`;
            
            itemElement.innerHTML = `
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p>${item.desc}</p>
            `;
            
            menuGrid.appendChild(itemElement);
            
            // Trigger animation in next tick
            setTimeout(() => {
                itemElement.style.opacity = '1';
                itemElement.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    // Set initial category
    renderMenu('starters');

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
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'UTC'
            });

            // Replace card innerHTML with a stunning booking success message
            bookingCard.innerHTML = `
                <div class="booking-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3>Reservation Confirmed</h3>
                    <p>Thank you, <strong>${name}</strong>. Your table for <strong>${guests} people</strong> is reserved for <strong>${formattedDate}</strong> at <strong>${time}</strong>.</p>
                    <p>A confirmation email has been sent to your inbox. We look forward to welcoming you.</p>
                </div>
            `;
        });
    }
});
