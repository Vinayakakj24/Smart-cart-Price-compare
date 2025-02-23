// JavaScript code for search functionality

function searchProduct() {
    const input = document.getElementById('search').value.toLowerCase();
    const productItems = document.getElementsByClassName('product-item');

    for (let i = 0; i < productItems.length; i++) {
        const productName = productItems[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            productItems[i].style.display = 'block';
        } else {
            productItems[i].style.display = 'none';
        }
    }
}

  