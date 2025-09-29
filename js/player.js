const urlParams = new URLSearchParams(window.location.search);
const play = urlParams.get("play");
const channel = urlParams.get("channel") || "Live TV";
const logo = urlParams.get("logo");
const drm = urlParams.get("drm");
const keyid = urlParams.get("keyid");

document.title = `${channel} | UltraWebs`;
document.getElementById("channel-name").textContent = channel;
if (logo) document.getElementById("channel-logo").src = logo;

const config = {
  file: play,
  image: logo,
  title: channel,
  width: "100%",
  height: "100%",
  autostart: true,
  mute: true,
  playbackRateControls: true,
  controls: true,
  androidhls: true,
  cast: { appId: "CC1AD845" },
  airplay: true,
  captions: {
    backgroundOpacity: 0, // Transparent background
    edgeStyle: "raised", // Raised edge
  },
};

if (drm === "clearkey" && keyid) {
  const [kid, key] = keyid.split(":");
  config.drm = { clearkey: { keyId: kid.trim(), key: key.trim() } };
}

const player = jwplayer("player").setup(config);

// Play overlay logic
const overlay = document.getElementById("play-overlay");
overlay.addEventListener("click", () => {
  player.play(true);
  player.setVolume(40);
  overlay.style.display = "none";
});

// Load header dynamically
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });

      document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("show");
        });
      });
    }
  });

// Load footer dynamically
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
