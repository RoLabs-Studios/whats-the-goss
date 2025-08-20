document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const authScreen = document.getElementById("auth-screen");
  const app = document.getElementById("app");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    authScreen.classList.remove("hidden");
  }, 3000);

  document.getElementById("signup-btn").addEventListener("click", () => {
    authScreen.classList.add("hidden");
    app.classList.remove("hidden");
    document.getElementById("content").innerHTML = "<h2>Welcome to Whats the Goss!</h2>";
  });

  document.getElementById("login-btn").addEventListener("click", () => {
    authScreen.classList.add("hidden");
    app.classList.remove("hidden");
    document.getElementById("content").innerHTML = "<h2>Welcome back!</h2>";
  });

  document.querySelectorAll(".tab-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("content").innerHTML = "<h2>"+btn.dataset.tab+" (Coming soon)</h2>";
    });
  });
});
