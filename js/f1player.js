// f1player.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBMFvQQ-IRJ0-ihCsvF6gHhYakvm47H01A",
  authDomain: "f1linklive.firebaseapp.com",
  projectId: "f1linklive",
  storageBucket: "f1linklive.firebasestorage.app",
  messagingSenderId: "1053156100165",
  appId: "1:1053156100165:web:fba7ff2a0e623cd8737b2c",
  measurementId: "G-N34LK2EVPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// JWPlayer setup with default test stream
const playerInstance = jwplayer("player");
playerInstance.setup({
  width: "100%",
  aspectratio: "16:9",
  autostart: true,
  mute: true,
  controls: true,
  androidhls: true,
  playbackRateControls: true,
  cast: { appId: "CC1AD845" },
  airplay: true,
  file: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
  title: "F1 Live Stream",
  image: "https://ultrawebs.github.io/-/webpa/fancodef1.webp",
  type: "hls",
});

// Play overlay
const playOverlay = document.getElementById("play-overlay");
const playButton = document.getElementById("play-button");

if (playButton && playOverlay) {
  playButton.addEventListener("click", () => {
    playerInstance.setMute(false);
    playerInstance.play(true);
    playOverlay.style.display = "none";
  });
}

// Firebase: update stream dynamically
const channelDoc = doc(db, "channels", "f1");
onSnapshot(channelDoc, (docSnap) => {
  if (docSnap.exists()) {
    const data = docSnap.data();
    const channelNameEl = document.getElementById("channel-name");
    const channelLogoEl = document.getElementById("channel-logo");

    if (channelNameEl) channelNameEl.textContent = data.title || "Formula 1 Live";
    if (channelLogoEl) channelLogoEl.src = data.logo || "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg";

    if (data.url) {
      playerInstance.load([{
        file: data.url,
        title: data.title,
        type: "hls",
      }]);
    }
  }
});

// Load header and footer
async function loadHeaderFooter() {
  try {
    const header = await fetch("header.html").then(res => res.text());
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) headerPlaceholder.innerHTML = header;

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => nav.classList.toggle("show"));
      nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("show")));
    }

    const footer = await fetch("footer.html").then(res => res.text());
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) footerContainer.innerHTML = footer;
  } catch (err) {
    console.error("Error loading header/footer:", err);
  }
}

loadHeaderFooter();
