document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please fill all fields.";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email address.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Login successful! Redirecting...";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
