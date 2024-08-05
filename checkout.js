// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle cart count update as shown above
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    function addToCart() {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartCount();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Handle checkout form submission
    if (document.getElementById('checkout-form')) {
        const form = document.getElementById('checkout-form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            
            // Get form data
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Save form data to localStorage
            localStorage.setItem('checkoutData', JSON.stringify(formObject));

            // Redirect to confirmation page or handle submission
            window.location.href = 'confirmation.html'; // Replace with actual confirmation page
        });
    }
});
