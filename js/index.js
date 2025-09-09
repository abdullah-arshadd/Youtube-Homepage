
const filterList = document.getElementById('filter-list');
const filterTemplate = document.getElementById('filter-template');

const filters = [
  'All', 'Object Oriented Programming', 'Music', 'Source Code', 'Videos',
  'Movies', 'History', 'Horror', 'News', 'Pakistani Dramas', 'Rhythm', 'Dance',
  'Accessories', 'Headphones', 'Games'
];

// Clear existing except template
filterList.innerHTML = '';
filters.forEach((text, index) => {
  const li = filterTemplate.cloneNode(true);
  li.id = ''; // clear id to avoid duplicates
  li.querySelector('a').textContent = text;
  filterList.appendChild(li);
});


// Main Cards (Video Cards)
const mainCardsRow = document.getElementById("main-cards-row");
const videoTemplateCard = document.getElementById("video-card-template");

// Number of video cards you want
const numberOfVideoCards = 4;

// Start from 1 because 1 card is already in HTML
for (let i = 1; i < numberOfVideoCards; i++) {
  const clonedCard = videoTemplateCard.cloneNode(true);

  // Remove the id
  clonedCard.removeAttribute("id");

  // Optional: update dynamic content
  clonedCard.querySelector(".video-title").textContent = `Video Title ${i + 1}`;
  clonedCard.querySelector(".channel-name").textContent = `Channel ${i + 1}`;
  clonedCard.querySelector(".video-stats").textContent = `${i + 1}M • ${i + 1} Days Ago`;

  mainCardsRow.appendChild(clonedCard);
}

const shortsContainer = document.querySelector('.shorts');
const templateCard = document.getElementById('shorts-template');

// Number of cards you want to add
const numberOfCards = 4;

for (let i = 0; i < numberOfCards; i++) {
  // Clone the template card (deep clone)
  const newCard = templateCard.cloneNode(true);

  // Remove the ID and show the card (make display block)
  newCard.id = "";
  newCard.style.display = "block";

  // Optionally, update content dynamically:
  newCard.querySelector('.shorts-col1 p').textContent = `Part ${i + 1} | I think we have a choice`;

  // Append to container
  shortsContainer.appendChild(newCard);
}
const originalMainCardsRow = document.getElementById("main-cards-row");

// Target rows where you want to insert new clones
const row2 = document.getElementById("card-row-2");
const row3 = document.getElementById("card-row-3");

// Function to clone the entire row and populate cards
function cloneMainCardsRow(targetElement, numberOfCards = 3) {
  // Clone the whole row (deep)
  const clonedRow = originalMainCardsRow.cloneNode(true);

  // Remove existing cards except the template
  const allCards = clonedRow.querySelectorAll(".card");
  allCards.forEach((card, index) => {
    if (index !== 0) card.remove(); // keep only the first one (template)
  });

  // Get the card template inside the cloned row
  const cardTemplate = clonedRow.querySelector("#video-card-template");

  // Remove ID to avoid duplication
  cardTemplate.removeAttribute("id");

  // Add more cards dynamically
  for (let i = 1; i <= numberOfCards; i++) {
    const newCard = cardTemplate.cloneNode(true);
    newCard.querySelector(".video-title").textContent = `Video Title ${i}`;
    newCard.querySelector(".channel-name").textContent = `Channel ${i}`;
    newCard.querySelector(".video-stats").textContent = `${i}M • ${i} days ago`;
    clonedRow.appendChild(newCard);
  }

  // Append the row into the target element
  targetElement.appendChild(clonedRow);
}

// Now use the function to insert into both targets
cloneMainCardsRow(row2, 3);
cloneMainCardsRow(row3, 3); // you can even pass different number of cards
