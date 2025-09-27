// ------------------------------
// FAVICON, HEADER & FOOTER LOAD
// ------------------------------
// Load favicon
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

// Load footer
fetch("footer.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("footer-container").innerHTML = data)
  );

// ------------------------------
// POPUP FUNCTION
// ------------------------------

// ------------------------------
// FIREBASE SETUP
// ------------------------------

// ------------------------------
// CONTACT FORM HANDLER
// ------------------------------
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase config (new project)
const firebaseConfig = {
  apiKey: "AIzaSyAtgLji44mPNhTu_A6mlQg2OltsD3PmFxE",
  authDomain: "ultrawebs-livestream.firebaseapp.com",
  projectId: "ultrawebs-livestream",
  storageBucket: "ultrawebs-livestream.firebasestorage.app",
  messagingSenderId: "386637615711",
  appId: "1:386637615711:web:f20d4625fda4593dc081ea",
  measurementId: "G-BR2QYT87D4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Popup function
function showPopup(message, type = "success") {
  const popup = document.getElementById("popup");
  const popupMsg = document.getElementById("popup-message");
  const icon = popup.querySelector(".material-icons");

  popup.className = "";
  popup.classList.add("show", type);

  if (type === "success") {
    icon.textContent = "check_circle";
  } else {
    icon.textContent = "error";
  }

  popupMsg.textContent = message;
  popup.style.display = "flex";

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  }, 3500);
}

// Handle contact form submit
const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });
    showPopup("Your message has been sent successfully.", "success");
    form.reset();
  } catch (error) {
    console.error("❌ Error adding document: ", error);
    showPopup("An error occurred. Please try again later.", "error");
  }
});
