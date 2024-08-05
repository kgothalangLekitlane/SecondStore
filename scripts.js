document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartSummaryElement = document.getElementById('cart-summary');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutSection = document.getElementById('checkout');
    const checkoutForm = document.getElementById('checkout-form');

    function updateCart() {
        cartCountElement.textContent = cart.length;
        cartSummaryElement.innerHTML = '';

        if (cart.length === 0) {
            cartSummaryElement.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <p>${item.name} - R${item.price.toFixed(2)}</p>
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                `;
                cartSummaryElement.appendChild(itemElement);
            });

            const totalElement = document.createElement('p');
            totalElement.innerHTML = `<strong>Total: R${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>`;
            cartSummaryElement.appendChild(totalElement);
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.product-card');
            const name = card.querySelector('h3').textContent;
            const priceText = card.querySelector('p').textContent.replace('R', '');
            const price = parseFloat(priceText);

            // Ensure the price is a valid number
            if (!isNaN(price)) {
                cart.push({ name, price });
                updateCart();
            } else {
                console.error('Invalid price:', priceText);
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        }
    });

    checkoutButton.addEventListener('click', () => {
        document.querySelector('#cart').style.display = 'none';
        checkoutSection.style.display = 'block';
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your purchase!');
        checkoutSection.style.display = 'none';
        document.querySelector('#cart').style.display = 'block';
        cart.length = 0;
        updateCart();
    });

    const categoryButtons = document.querySelectorAll('.category-button');
    const productCategories = document.querySelectorAll('.product-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            productCategories.forEach(categorySection => {
                if (categorySection.id === category) {
                    categorySection.classList.add('active');
                } else {
                    categorySection.classList.remove('active');
                }
            });
        

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = localStorage.getItem('cartCount') || 0;

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    function addToCart() {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartCount();
    }

    updateCartCount();

    // Example for adding an event listener to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
     });
    });
});
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummary = document.getElementById('cart-summary');
    const cartCount = document.getElementById('cart-count');

    function updateCartDisplay() {
        if (cart.length === 0) {
            cartSummary.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartSummary.innerHTML = '';
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                const itemImage = document.createElement('img');
                itemImage.src = item.image;
                itemImage.alt = item.name;

                const itemDetails = document.createElement('div');
                itemDetails.classList.add('cart-item-details');

                const itemTitle = document.createElement('p');
                itemTitle.classList.add('cart-item-title');
                itemTitle.textContent = item.name;

                const itemPrice = document.createElement('p');
                itemPrice.classList.add('cart-item-price');
                itemPrice.textContent = `Price: ${item.price}`;

                const itemQuantity = document.createElement('p');
                itemQuantity.classList.add('cart-item-quantity');
                itemQuantity.textContent = `Quantity: ${item.quantity}`;

                itemDetails.appendChild(itemTitle);
                itemDetails.appendChild(itemPrice);
                itemDetails.appendChild(itemQuantity);

                const removeButton = document.createElement('button');
                removeButton.classList.add('cart-item-remove');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                    updateCartCount();
                });

                cartItem.appendChild(itemImage);
                cartItem.appendChild(itemDetails);
                cartItem.appendChild(removeButton);

                cartSummary.appendChild(cartItem);
            });
        }
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Initial display update
    updateCartDisplay();
    updateCartCount();

    // Example of adding an item to the cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('p').textContent,
                image: productCard.querySelector('img').src,
                quantity: 1 // Default quantity
            };

            const existingProductIndex = cart.findIndex((item) => item.name === product.name);
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartCount();
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Load comments from localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comment-list');

    function displayComments() {
        commentList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');

            const commentName = document.createElement('h4');
            commentName.textContent = comment.name;

            const commentMessage = document.createElement('p');
            commentMessage.textContent = comment.message;

            commentElement.appendChild(commentName);
            commentElement.appendChild(commentMessage);

            commentList.appendChild(commentElement);
        });
    }

    displayComments();

    // Handle comment form submission
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('comment-name').value;
        const message = document.getElementById('comment-message').value;

        const newComment = { name, message };
        comments.push(newComment);

        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();

        // Clear the form
        commentForm.reset();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    // Toggle cart dropdown
    cartIcon.addEventListener('click', function (e) {
        e.preventDefault();
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Load cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDropdown() {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <p>${item.name}</p>
                        <p>${item.quantity} x ${item.price}</p>
                        <p class="cart-item-color">Color: ${item.color || 'N/A'}</p>
                    </div>
                `;
                cartItems.appendChild(itemElement);
            });
        }
        cartCount.textContent = cart.length;
    }

    updateCartDropdown();
});
