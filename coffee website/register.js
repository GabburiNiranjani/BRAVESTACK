document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!name || !email || !password) {
    message.textContent = "Please fill all fields.";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email address.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Registration successful! Redirecting to login...";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
