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

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('novabrand-form');
    const contactCard = document.querySelector('.contact-card');

    if (contactForm && contactCard) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve values
            const name = document.getElementById('n-name').value;
            const email = document.getElementById('n-email').value;
            const goal = document.getElementById('n-goal').value;
            
            // Replace form with a gorgeous success message
            contactCard.innerHTML = `
                <div class="form-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3>Discovery Call Requested!</h3>
                    <p>Thanks for reaching out, <strong>${name}</strong>. We've received your request to discuss: <em>"${goal}"</em>.</p>
                    <p>A confirmation has been sent to <strong>${email}</strong>. One of our growth specialists will contact you within the next business day.</p>
                </div>
            `;
        });
    }
});
