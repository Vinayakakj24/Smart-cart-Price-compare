let cart = [];
let cartItemsContainer = document.getElementById("cart-items");

function addToCart(productName, price, website, link) {
    cart.push({ name: productName, price: price, website: website, link: link });
    updateCart();
}

function updateCart() {
    let cartHtml = '';
    cart.forEach(item => {
        cartHtml += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <p>Website: ${item.website}</p>
                <a href="${item.link}" target="_blank" class="affiliate-link">Buy Now</a>
            </div>
        `;
    });
    cartItemsContainer.innerHTML = cartHtml;
    document.getElementById("cart-container").style.display = cart.length ? 'block' : 'none';
}

function clearCart() {
    cart = [];
    updateCart();
}
