let cart = JSON.parse(localStorage.getItem("cart")) || [];

let orderContainer = document.getElementById("order-items");
let totalContainer = document.getElementById("total");

// 📦 Show Order
function showOrder() {
    let total = 0;
    orderContainer.innerHTML = "";

    cart.forEach(item => {
        total += item.price;

        let p = document.createElement("p");
        p.innerText = item.name + " - ₹" + item.price;

        orderContainer.appendChild(p);
    });

    totalContainer.innerText = "Total: ₹" + total;
}

// 🧾 Place Order
function placeOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || address === "" || phone === "") {
        alert("Please fill all details!");
        return;
    }

    alert("Order placed successfully! 🎉");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}
async function placeOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    let res = await fetch("http://localhost:5000/api/order/place", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, address, phone, items: cart, total })
    });

    let data = await res.json();
    alert(data.message);
}

showOrder();