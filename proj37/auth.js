// auth.js
const users = [
  { username: "demo", password: "password123" }, // In real applications, passwords should be hashed
];

function authenticate(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    sessionStorage.setItem("authenticated", "true");
    sessionStorage.setItem("username", username);
    return true;
  }
  return false;
}

function checkAuth() {
  return sessionStorage.getItem("authenticated") === "true";
}

function logout() {
  sessionStorage.removeItem("authenticated");
  sessionStorage.removeItem("username");
  window.location.href = "login.html";
}
