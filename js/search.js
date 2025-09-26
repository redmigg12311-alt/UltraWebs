// Load favicon
fetch("favicon.html")
  .then((res) => res.text())
  .then((data) => document.head.insertAdjacentHTML("beforeend", data));

const searchBox = document.getElementById("searchInput");
const resultsContainer = document.getElementById("channel-container");
const noResults = document.getElementById("noResults");
const clearBtn = document.getElementById("clearBtn");

/* ---------- Utility ---------- */
function getChannelSource(channel) {
  return (
    (channel &&
      (channel.stream || channel.url || channel.youtube || channel.src)) ||
    ""
  );
}

function getStreamType(src) {
  if (!src) return null;
  const s = src.toLowerCase();
  if (
    s.includes("youtube.com") ||
    s.includes("youtu.be") ||
    s.includes("embed/") ||
    s.includes("/shorts/") ||
    s.includes("<iframe")
  )
    return "youtube";
  if (s.includes(".m3u8")) return "hls";
  if (s.includes(".mpd")) return "dash";
  if (s.includes(".mp4") || s.includes(".mkv")) return "mp4";
  return "unknown";
}

function extractYouTubeId(input) {
  if (!input || typeof input !== "string") return null;
  const url = input.trim();
  if (url.startsWith("<iframe")) {
    const match = url.match(/src=["']([^"']+)["']/i);
    if (match && match[1]) return extractYouTubeId(match[1]);
  }
  const embed = url.match(/embed\/([A-Za-z0-9_-]{11})/);
  if (embed) return embed[1];
  const watch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (watch) return watch[1];
  const short = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (short) return short[1];
  const shorts = url.match(/\/shorts\/([A-Za-z0-9_-]{11})/);
  if (shorts) return shorts[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;
  return null;
}

function createYouTubeModalIfNeeded() {
  let modal = document.getElementById("ytModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "ytModal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.85);
    z-index: 99999;
    padding: 20px;
  `;

  modal.innerHTML = `
    <div id="ytBox" style="
      position: relative;
      max-width: 1100px;
      width: 100%;
      background: transparent;
      border-radius: 10px;
      overflow: visible;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    ">
<button id="ytClose" aria-label="close" style="
  margin-bottom: 4px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
">×</button>

      <div style="position: relative; width: 100%; padding-top: 56.25%; border-radius: 10px; overflow: hidden;">
        <iframe id="ytFrame" src="" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
          style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 10px;"></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector("#ytClose");

  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    closeBtn.style.boxShadow = "0 8px 40px rgba(255, 255, 255, 0.4)";
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    closeBtn.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeYouTube();
  });

  closeBtn.addEventListener("click", closeYouTube);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeYouTube();
  });

  return modal;
}

function openYouTube(url, channel) {
  const id = extractYouTubeId(url);
  if (!id) {
    alert("Invalid YouTube link.");
    return;
  }
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  const modal = createYouTubeModalIfNeeded();
  modal.querySelector("#ytFrame").src = embedUrl;
  modal.style.display = "flex";
}

function closeYouTube() {
  const modal = document.getElementById("ytModal");
  if (!modal) return;
  modal.querySelector("#ytFrame").src = "";
  modal.style.display = "none";
}

function renderChannels(list, limitPerCategory = 6) {
  resultsContainer.innerHTML = "";
  if (!list || list.length === 0) {
    noResults.style.display = "flex";
    return;
  } else {
    noResults.style.display = "none";
  }

  const grouped = list.reduce((acc, ch) => {
    const cat = ch.category || "Other";
    acc[cat] = acc[cat] || [];
    acc[cat].push(ch);
    return acc;
  }, {});

  Object.keys(grouped)
    .sort()
    .forEach((category) => {
      const sectionTitle = document.createElement("h2");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = category;
      resultsContainer.appendChild(sectionTitle);

      const containerDiv = document.createElement("div");
      containerDiv.className = "container";

      // Sort channels alphabetically before slicing
      const sortedChannels = grouped[category].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );

      const items = limitPerCategory
        ? sortedChannels.slice(0, limitPerCategory)
        : sortedChannels;

      items.forEach((channel) => {
        const card = document.createElement("div");
        card.className = "channel-card";
        card.style.setProperty("--bg", `url('${channel.image || ""}')`);
        card.style.cursor = "pointer";
        card.innerHTML = `
                        <img src="${channel.image || ""}" alt="${
          channel.name
        }" loading="lazy" onerror="this.style.opacity=.5">
                        <div class="channel-info">
                          <h3>${channel.name}</h3>
                          <span>${channel.category || "Other"}</span>
                        </div>
                    `;

        card.addEventListener("click", () => {
          const src = getChannelSource(channel);
          const type = getStreamType(src);
          if (type === "youtube") {
            openYouTube(src, channel);
          } else if (src) {
            let url = `player.html?play=${encodeURIComponent(src)}`;
            if (type === "dash" && channel.drmKey) {
              url += `&drm=clearkey&keyid=${encodeURIComponent(
                channel.drmKey
              )}`;
            }
            url += `&channel=${encodeURIComponent(
              channel.name
            )}&logo=${encodeURIComponent(channel.image || "")}`;
            window.location.href = url;
          }
        });

        containerDiv.appendChild(card);
      });

      resultsContainer.appendChild(containerDiv);
    });
}

function searchChannels(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    renderChannels(channels, 6);
    return;
  }
  const filtered = channels.filter(
    (c) =>
      (c.name && c.name.toLowerCase().includes(q)) ||
      (c.category && c.category.toLowerCase().includes(q))
  );
  renderChannels(filtered, null);
}

document.addEventListener("DOMContentLoaded", () => {
  renderChannels(channels, 5);
  searchBox.addEventListener("input", (e) => {
    searchChannels(e.target.value);
    clearBtn.style.display = searchBox.value ? "flex" : "none";
  });
  clearBtn.addEventListener("click", () => {
    searchBox.value = "";
    clearBtn.style.display = "none";
    searchChannels("");
  });
});

// Load header dynamically
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

// Load footer dynamically
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
