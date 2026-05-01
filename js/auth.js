// 📝 SIGNUP
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    window.location.href = "login.html";
}


// 🔐 LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");

        localStorage.setItem("loggedIn", true);

        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
}
function logout() {
    localStorage.removeItem("loggedIn");

    alert("Logged out successfully!");

    window.location.href = "login.html";
}
async function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });

    let data = await res.json();
    alert(data.message);
}
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    let data = await res.json();

    if (res.ok) {
        alert("Login success");
        localStorage.setItem("loggedIn", true);
        window.location.href = "index.html";
    } else {
        alert(data.message);
    }
}