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
  .then((data) => (document.getElementById("footer-container").innerHTML = data));

// Populate category filter and render channels
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("categoryFilter");
  const container = document.getElementById("channel-container");

  if (typeof channels === "undefined") return;

  // Extract unique categories and sort them
  const categories = [...new Set(channels.map((c) => c.category || "Other"))];
  categories.sort();

  // Clear existing filter options and add "All"
  categoryFilter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "All";
  allOption.textContent = "All";
  categoryFilter.appendChild(allOption);

  // Add sorted categories to the filter
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  // Function to render channels grouped and sorted by category and channel name
  function renderChannels(list) {
    container.innerHTML = "";
    if (!list || !list.length) {
      container.innerHTML = `<div style="text-align:center;color:#ff0000;padding:4rem;font-weight:600;">No channels found.</div>`;
      return;
    }

    // Group channels by category
    const grouped = list.reduce((acc, ch) => {
      const cat = ch.category || "Other";
      acc[cat] = acc[cat] || [];
      acc[cat].push(ch);
      return acc;
    }, {});

    // Sort categories alphabetically and render
    Object.keys(grouped)
      .sort()
      .forEach((category) => {
        // Sort channels alphabetically inside each category
        const sortedChannels = grouped[category].sort((a, b) =>
          (a.name || "").localeCompare(b.name || "")
        );

        // Category title
        const sectionTitle = document.createElement("h2");
        sectionTitle.className = "section-title";
        sectionTitle.textContent = category;
        container.appendChild(sectionTitle);

        const sectionGrid = document.createElement("div");
        sectionGrid.className = "container";

        // Render channel cards
        sortedChannels.forEach((channel) => {
          const card = document.createElement("div");
          card.className = "channel-card";
          card.style.setProperty("--bg", `url(${channel.image || ""})`);
          card.style.cursor = "pointer";
          card.innerHTML = `
            <img src="${channel.image || ""}" alt="${channel.name || "Untitled"}" loading="lazy" onerror="this.style.opacity=.5">
            <div class="channel-info">
              <h3>${channel.name}</h3>
              <span>${channel.category || "Other"}</span>
            </div>
          `;

          card.addEventListener("click", () => {
            const src = getChannelSource(channel);
            if (!src) return alert("Stream URL not found for this channel.");

            const type = getStreamType(src);
            if (type === "youtube") {
              openYouTube(src, channel);
              return;
            }

            let url = `player.html?play=${encodeURIComponent(
              src
            )}&channel=${encodeURIComponent(
              channel.name
            )}&logo=${encodeURIComponent(channel.image || "")}`;
            if (type === "dash" && channel.drmKey) {
              url += `&drm=clearkey&keyid=${encodeURIComponent(
                channel.drmKey
              )}`;
            }
            window.location.href = url;
          });

          sectionGrid.appendChild(card);
        });

        container.appendChild(sectionGrid);
      });
  }

  // Initial render of all channels
  renderChannels(channels);

  // Filter channels when category changes
  categoryFilter.addEventListener("change", () => {
    const val = categoryFilter.value;
    renderChannels(
      val === "All" ? channels : channels.filter((c) => c.category === val)
    );
  });
});
