// 📦 Cart Load karo
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart-items");
let totalContainer = document.getElementById("total");

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
        <img src="${item.image}" class="cart-image" />
            <p>${item.name} - ₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(div);
    });

    totalContainer.innerText = "Total: ₹" + total;
}

// ❌ REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
displayCart();