
    const products = [
      { title: "Product 1", price: "₹499", description: "Description for product 1" },
      { title: "Product 2", price: "₹599", description: "Description for product 2" },
      { title: "Product 3", price: "₹699", description: "Description for product 3" },
      { title: "Product 4", price: "₹799", description: "Description for product 4" },
      { title: "Product 5", price: "₹899", description: "Description for product 5" },
      { title: "Product 6", price: "₹999", description: "Description for product 6" },
      { title: "Product 7", price: "₹1099", description: "Description for product 7" },
      { title: "Product 8", price: "₹1199", description: "Description for product 8" },
      { title: "Product 9", price: "₹1299", description: "Description for product 9" },
      { title: "Product 10", price: "₹1399", description: "Description for product 10" }
    ];

    function displayProducts(products) {
      const productContainer = document.getElementById("product-container");
      productContainer.innerHTML = "";

      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productTitle = document.createElement("h2");
        productTitle.className = "product-title";
        productTitle.textContent = product.title;
        productCard.appendChild(productTitle);

        const productPrice = document.createElement("p");
        productPrice.className = "product-price";
        productPrice.textContent = product.price;
        productCard.appendChild(productPrice);

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);

        productContainer.appendChild(productCard);
      });
    }

    document.getElementById("search-bar").addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
    });

    displayProducts(products);
  