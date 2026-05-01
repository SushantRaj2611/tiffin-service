// 🛒 CART ARRAY (localStorage se load hoga)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ➕ ADD TO CART
function addToCart(name, price,images) {
    cart.push({ 
        name: name,
        price: price,
        image: images
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(" added to cart!");
}
const authSection = document.getElementById("authSection");

let user = JSON.parse( localStorage.getItem("user"));

if (user) {
  authSection.innerHTML = `
    <div class="dropdown">
      <button>👤 ${user.name} ▼</button>
      <div class="dropdown-content">
        <a href="#" id="logoutBtn">Logout</a>
      </div>
    </div>
  `;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
    location.reload();
  });
}
function checkout() {
    alert("Order placed successfully!");

    localStorage.removeItem("cart");
    location.reload();
}
const toggleBtn = document.getElementById("darkModeToggle");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});