// FAQ toggle
// FAQ toggle
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;

    // Close any already open FAQ
    document.querySelectorAll(".faq-item.active").forEach((activeItem) => {
      if (activeItem !== item) {
        activeItem.classList.remove("active");
        activeItem.querySelector(".faq-answer").style.maxHeight = "0";
      }
    });

    // Toggle current FAQ
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = "0";
    } else {
      item.classList.add("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Load Favicon
fetch("favicon.html")
  .then((res) => res.text())
  .then((data) => document.head.insertAdjacentHTML("beforeend", data));

// Load header
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => nav.classList.toggle("show"));
      document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => nav.classList.remove("show"));
      });
    }
  });
