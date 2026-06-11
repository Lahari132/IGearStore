function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Product added to wishlist!");
}

function checkout() {
  alert("Redirecting to payment gateway...");
}

// Sample product data (you can expand this later)
const products = {
  warmech: { name: "War Mech Stride 2.0", price: 899 },
  cartoon: { name: "Cartoon Blast Case", price: 799 },
  monkey: { name: "Monkey Shoulder Edition", price: 699 }
};

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart-items");
  let total = 0;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(itemId => {
      let product = products[itemId];
      if (product) {
        cartContainer.innerHTML += `
          <div class="cart-item">
            <p>${product.name} - ₹${product.price}</p>
          </div>
        `;
        total += product.price;
      }
    });
  }

  document.getElementById("cart-total").textContent = "Total: ₹" + total;
}

// Run renderCart when cart.html loads
if (document.getElementById("cart-items")) {
  renderCart();
}


function renderWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let wishlistContainer = document.getElementById("wishlist-items");

  wishlistContainer.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
  } else {
    wishlist.forEach(itemId => {
      let product = products[itemId];
      if (product) {
        wishlistContainer.innerHTML += `
          <div class="wishlist-item">
            <p>${product.name} - ₹${product.price}</p>
          </div>
        `;
      }
    });
  }
}

// Run renderWishlist when wishlist.html loads
if (document.getElementById("wishlist-items")) {
  renderWishlist();
}
