document.addEventListener('DOMContentLoaded', () => {
    console.log("Configurator Loaded");

    const state = {
        size: '60%',
        priceBase: 89.99,
        priceModifier: 0
    };

    const sizeCards = document.querySelectorAll('.size-card');
    const totalPriceEl = document.querySelector('#total-price'); // Assuming we might add one later, or just log it

    sizeCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all
            sizeCards.forEach(c => {
                c.classList.remove('border-primary', 'border-2');
                c.classList.add('border-white/10', 'border');
                const check = c.querySelector('.check-icon');
                if (check) check.classList.add('hidden');
            });

            // Add active class to clicked
            card.classList.remove('border-white/10', 'border');
            card.classList.add('border-primary', 'border-2');

            // Show check icon
            const check = card.querySelector('.check-icon');
            if (check) check.classList.remove('hidden');

            // Update State
            state.size = card.dataset.size;
            state.priceModifier = parseFloat(card.dataset.price);

            console.log(`Selected Size: ${state.size}, Total Price: ${state.priceBase + state.priceModifier}`);
        });
    });

    const nextBtn = document.querySelector('#next-step-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            alert(`Proceeding to Switches with payload: ${JSON.stringify(state)}`);
        });
    }
});
