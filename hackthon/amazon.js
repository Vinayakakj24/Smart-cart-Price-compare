let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItemsContainer = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    let cartHtml = '';
    let total = 0;

    cart.forEach(item => {
        cartHtml += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });

    cartItemsContainer.innerHTML = cartHtml;
    cartTotal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartCount.innerHTML = cart.length;
}

function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = cartContainer.style.display === "none" ? "block" : "none";
}

function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}

function searchProduct() {
    let query = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        let productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
} let image=document.getElementById('image');
let iamges=['1.jpeg','2.jpeg','3.jpeg','4.jpeg']
setInterval(function(){
    let random=Math.floor(Math.random()*4);
    image.src=iamges[random];

},800);