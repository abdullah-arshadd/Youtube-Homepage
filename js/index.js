const filterList = document.getElementById("filter-list");
const filterTemplate = document.getElementById("filter-template");

const filters = [
  "All",
  "Object Oriented Programming",
  "Music",
  "Source Code",
  "Videos",
  "Movies",
  "History",
  "Horror",
  "News",
  "Pakistani Dramas",
  "Rhythm",
  "Dance",
  "Accessories",
  "Headphones",
  "Games",
];

// Clear existing except template
filterList.innerHTML = "";
filters.forEach((text) => {
  const li = filterTemplate.cloneNode(true);
  li.id = ""; // clear id to avoid duplicates
  li.querySelector("a").textContent = text;
  filterList.appendChild(li);
});

// Main Cards (Video Cards)
const mainCardsRow = document.getElementById("main-cards-row");
const videoTemplateCard = document.getElementById("video-card-template");

// ✅ Unsplash thumbnails (YouTube style categories)
const videoThumbnails = [
  "https://images.unsplash.com/photo-1757484965213-8393e82789fe?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1756547275308-b06ff9708b33?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1756727526787-b113e5c6d865?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1708276403139-4d1d41f1eb3c?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1713864006351-7065e232163d?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1696916887212-337ec9bd89f7?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1693067334755-6eceb3495e3a?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1737286936272-17e680376d97?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1672054432007-344666522204?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// ✅ Channel icons (profile-style images)
const channelIcons = [
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&auto=format&fit=crop&w=200&h=200",
  "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Number of video cards you want
const numberOfVideoCards = 4;

// Start from 1 because 1 card is already in HTML
for (let i = 1; i < numberOfVideoCards; i++) {
  const clonedCard = videoTemplateCard.cloneNode(true);

  clonedCard.removeAttribute("id");

  clonedCard.querySelector(".video-title").textContent = `Video Title ${i + 1}`;
  clonedCard.querySelector(".channel-name").textContent = `Channel ${i + 1}`;
  clonedCard.querySelector(".video-stats").textContent = `${i + 1}M • ${
    i + 1
  } Days Ago`;

  // ✅ Add Unsplash image + channel icon
  clonedCard.querySelector(".thumbnail").src = videoThumbnails[i];
  clonedCard.querySelector(".channel-icon").src = channelIcons[i];

  mainCardsRow.appendChild(clonedCard);
}

// Shorts Section
const shortsContainer = document.querySelector(".shorts");
const templateCard = document.getElementById("shorts-template");

// ✅ Unsplash images for shorts
const shortsThumbnails = [
  "https://images.unsplash.com/photo-1679475382920-552bf8e8a2cb?q=80&auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1621268996424-3e3b03a2b5e7?q=80&auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1655978478055-c817413d9688?q=80&auto=format&fit=crop&w=400",
];

// Number of shorts cards you want to add
const numberOfCards = 4;

for (let i = 0; i < numberOfCards; i++) {
  const newCard = templateCard.cloneNode(true);

  newCard.id = "";
  newCard.style.display = "block";

  newCard.querySelector(".shorts-img").src = shortsThumbnails[i];
  newCard.querySelector(".shorts-col1 p").textContent = `Part ${
    i + 1
  } | I think we have a choice`;

  shortsContainer.appendChild(newCard);
}

// Clone Rows for more video sections
const originalMainCardsRow = document.getElementById("main-cards-row");
const row2 = document.getElementById("card-row-2");
const row3 = document.getElementById("card-row-3");

// ✅ Function to clone and populate rows
function cloneMainCardsRow(targetElement, numberOfCards, startIndex = 0) {
  const clonedRow = originalMainCardsRow.cloneNode(false); // shallow clone (empty container)

  // Use template for new cards
  const cardTemplate = videoTemplateCard.cloneNode(true);
  cardTemplate.removeAttribute("id");

  for (let i = 0; i < numberOfCards; i++) {
    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector(".video-title").textContent = `Video Title ${
      startIndex + i + 1
    }`;
    newCard.querySelector(".channel-name").textContent = `Channel ${
      startIndex + i + 1
    }`;
    newCard.querySelector(".video-stats").textContent = `${
      startIndex + i + 1
    }M • ${startIndex + i + 1} days ago`;

    // ✅ Add unique thumbnail + channel icon
    newCard.querySelector(".thumbnail").src = videoThumbnails[startIndex + i];
    newCard.querySelector(".channel-icon").src = channelIcons[startIndex + i];

    clonedRow.appendChild(newCard);
  }

  targetElement.appendChild(clonedRow);
}

// Generate extra rows
cloneMainCardsRow(row2, 4, 4);
cloneMainCardsRow(row3, 4, 7);
