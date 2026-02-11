document.addEventListener('DOMContentLoaded', () => {
    console.log("Product Page Loaded");

    // Sound Test Functionality
    const playButtons = document.querySelectorAll('.sound-test-btn');

    playButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const switchType = this.dataset.switch;
            toggleSound(this, switchType);
        });
    });

    function toggleSound(btn, type) {
        const icon = btn.querySelector('.material-icons');

        // Reset all other buttons
        playButtons.forEach(b => {
            if (b !== btn) {
                b.querySelector('.material-icons').textContent = 'play_arrow';
                b.classList.remove('bg-primary', 'text-black', 'border-transparent');
                b.classList.add('text-primary', 'border-primary/30');
            }
        });

        if (icon.textContent === 'play_arrow') {
            // "Play"
            icon.textContent = 'pause';
            // Visual feedback for active state
            btn.classList.remove('text-primary', 'border-primary/30');
            btn.classList.add('bg-primary', 'text-black', 'border-transparent');

            console.log(`Playing sound for: ${type}`);
            // Simulate audio play duration
            setTimeout(() => {
                icon.textContent = 'play_arrow';
                btn.classList.remove('bg-primary', 'text-black', 'border-transparent');
                btn.classList.add('text-primary', 'border-primary/30');
            }, 3000);
        } else {
            // "Pause"
            icon.textContent = 'play_arrow';
            btn.classList.remove('bg-primary', 'text-black', 'border-transparent');
            btn.classList.add('text-primary', 'border-primary/30');
        }
    }

    // Add to Cart Interaction
    const addToCartBtn = document.querySelector('#add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const originalText = addToCartBtn.innerText;
            addToCartBtn.innerText = "ADDED!";
            addToCartBtn.classList.add('bg-white', 'text-primary');

            setTimeout(() => {
                addToCartBtn.innerText = originalText;
                addToCartBtn.classList.remove('bg-white', 'text-primary');
            }, 2000);
        });
    }
});
