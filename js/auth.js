// Hardcoded user (no database required)
const userDB = {
  email: "admin",
  password: "123456"
};

// LOGIN
function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("errorMsg");

  if (email === userDB.email && password === userDB.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Invalid username or password!";
    error.style.color = "red";
  }
}

// REGISTER (simulation only)
function register(event) {
  event.preventDefault();
  alert("Registration successful (demo only). Please login.");
  window.location.href = "index.html";
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// protect pages
function protectPage() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}