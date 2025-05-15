const products = [
  { name: "T-Shirt", category: "Clothing", price: 499, rating: 4.2, image: "t-shirt.jpg" },
  { name: "Laptop", category: "Electronics", price: 45000, rating: 4.8, image: "Laptop.jpg" },
  { name: "Novel", category: "Books", price: 299, rating: 4.1, image: "novel.jpg" },
  { name: "Headphones", category: "Electronics", price: 1500, rating: 4.3, image: "Headphones.jpg" },
  { name: "Jeans", category: "Clothing", price: 999, rating: 4.0, image: "jeans.jpg" },
  { name: "Notebook", category: "Books", price: 99, rating: 3.9, image: "notebook.jpg" }
];

function displayProducts(filteredProducts) {
  const list = document.getElementById('productList');
  list.innerHTML = "";

  if (filteredProducts.length === 0) {
    list.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐${product.rating}</p>
    `;
    list.appendChild(card);
  });
}

function applyFilters() {
  const category = document.getElementById('categoryFilter').value;
  const price = document.getElementById('priceFilter').value;
  const sort = document.getElementById('sortOption').value;

  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (price === 'low') {
    filtered = filtered.filter(p => p.price < 500);
  } else if (price === 'mid') {
    filtered = filtered.filter(p => p.price >= 500 && p.price <= 2000);
  } else if (price === 'high') {
    filtered = filtered.filter(p => p.price > 2000);
  }

  if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'priceLow') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'priceHigh') {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('sortOption').addEventListener('change', applyFilters);

// Initial display
displayProducts(products);
