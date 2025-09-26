const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Auto close on link click
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// ===== Active Link Detection =====
const currentPath = window.location.pathname.split("/").pop().toLowerCase();
const page = currentPath === "" ? "index.html" : currentPath;

document.querySelectorAll(".nav a").forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop().toLowerCase();
  if (linkPath === page) {
    link.classList.add("active");
  }
});
