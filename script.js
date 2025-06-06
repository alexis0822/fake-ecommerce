// Sample Products Data
const products = [
  { 
    id: 1, 
    name: "T-Shirt", 
    price: 20, 
    image: "images/New-Mockups---no-hanger---TShirt-Yellow.webp" 
  },
  { 
    id: 2, 
    name: "Jeans", 
    price: 40, 
    image: "images/fashion-trendy-womens-jeans-isolated-600nw-2466839305.webp" 
  },
  { 
    id: 3, 
    name: "Sneakers", 
    price: 60, 
    image: "images/istockphoto-691616136-612x612.jpg" 
  },
];

// Cart State
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements
const productsEl = document.getElementById("products");
const cartModal = document.getElementById("cart-modal");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const checkoutForm = document.getElementById("checkout-form");

// Render Products
function renderProducts() {
  productsEl.innerHTML = products.map(product => `
    <div class="product-card fade-in">
      <img 
        src="${product.image}" 
        alt="${product.name}"
        onerror="this.src='https://via.placeholder.com/300x300?text=Product+Image'"
      >
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join("");
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  showCartNotification();
}

// Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update Cart UI & LocalStorage
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCountEl.textContent = cart.length;
  
  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart(${index})" class="remove-btn">&times;</button>
    </div>
  `).join("");
  
  cartTotalEl.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
}

// Show Cart Notification
function showCartNotification() {
  const notification = document.createElement('div');
  notification.className = 'notification fade-in';
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Event Listeners
document.querySelector(".cart-icon").addEventListener("click", () => {
  cartModal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  cartModal.style.display = "none";
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  cartModal.style.display = "none";
  checkoutForm.style.display = "block";
});

document.getElementById("payment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order placed! Thank you for your purchase.");
  cart = [];
  updateCart();
  checkoutForm.style.display = "none";
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCart();
});