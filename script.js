// Les données des cartes sont maintenant dans cards-data.js
// cardsData est défini dans le fichier cards-data.js

// Mapping pour les classes de rareté
const rarityClass = {
  "Common": "rarity-common",
  "Rare": "rarity-rare",
  "Double Rare": "rarity-double-rare",
  "Ultra Rare": "rarity-ultra-rare",
  "Amazing Rare": "rarity-amazing-rare"
};

// Initialisation
const searchInput = document.getElementById('searchInput');
const editionFilter = document.getElementById('editionFilter');
const rarityFilter = document.getElementById('rarityFilter');
const sortBy = document.getElementById('sortBy');
const cardsGrid = document.getElementById('cardsGrid');
const cardsCount = document.getElementById('cardsCount');
const cardModal = document.getElementById('cardModal');
const cardDetail = document.getElementById('cardDetail');
const closeModal = document.querySelector('.close');



function filterAndRender() {
  let filtered = cardsData.filter(card => {
    const search = searchInput.value.toLowerCase();
    const matchName = card.name.toLowerCase().includes(search);
    const matchEdition = !editionFilter.value || card.edition === editionFilter.value;
    const matchRarity = !rarityFilter.value || card.rarity === rarityFilter.value;
    return matchName && matchEdition && matchRarity;
  });
  // Tri
  if (sortBy.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === 'rarity') {
    filtered.sort((a, b) => a.rarity.localeCompare(b.rarity));
  } else if (sortBy.value === 'edition') {
    filtered.sort((a, b) => a.edition.localeCompare(b.edition));
  }
  renderCards(filtered);
}

function showCardDetail(card) {
  cardDetail.innerHTML = `
    <div class="card-detail-image">
      <img src="${card.image}" alt="${card.name}">
    </div>
    <div class="card-detail-info">
      <div class="card-detail-name">${card.name}</div>
      <div class="card-detail-meta">
        <span class="card-detail-edition">${card.edition}</span>
        <span class="card-detail-rarity ${rarityClass[card.rarity] || ''}">${card.rarity}</span>
      </div>
      <div class="card-detail-description">${card.description}</div>
      <div class="card-detail-stats">
        <h3>Statistiques</h3>
        <div class="stats-grid">
          ${Object.entries(card.stats).map(([k, v]) => `<div class="stat-item"><span class="stat-value">${v}</span><span class="stat-label">${k}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `;
  cardModal.style.display = 'block';
}

closeModal.onclick = function() {
  cardModal.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target === cardModal) {
    cardModal.style.display = 'none';
  }
};

// Gestion des événements
searchInput.addEventListener('input', filterAndRender);
editionFilter.addEventListener('change', filterAndRender);
rarityFilter.addEventListener('change', filterAndRender);
sortBy.addEventListener('change', filterAndRender);

// Gestion des touches clavier pour la modal
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && cardModal.style.display === 'block') {
    cardModal.style.display = 'none';
  }
});

// Animation de chargement
function showLoading() {
  cardsGrid.innerHTML = '<div class="loading">Chargement des cartes...</div>';
}

// Initialisation avec animation
document.addEventListener('DOMContentLoaded', function() {
  showLoading();
  setTimeout(() => {
    filterAndRender();
  }, 500);
});

// Gestion des erreurs d'images
function handleImageError(img) {
  img.onerror = null;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTggNjcuNTQzIDEyMCA3OFYxMjJDMTA4IDExOCAxMDAgMTEwIDEwMCAxMDBWNzhDMTAwIDY3LjU0MyAxMDcuNTQzIDYwIDExOCA2MEgxMDBaIiBmaWxsPSIjOENBM0FGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOENBM0FGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkltYWdlIG5vbiBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
}

// Amélioration du rendu des cartes avec gestion d'erreur
function renderCards(cards) {
  cardsGrid.innerHTML = '';
  if (cards.length === 0) {
    cardsGrid.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><h3>Aucune carte trouvée</h3><p>Essayez d'autres filtres ou une autre recherche.</p></div>`;
    cardsCount.textContent = 0;
    return;
  }
  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
      <div class="card-image">
        <img src="${card.image}" alt="${card.name}" onerror="handleImageError(this)">
      </div>
      <div class="card-info">
        <div class="card-name">${card.name}</div>
        <div class="card-details">
          <span class="card-edition">${card.edition}</span>
          <span class="card-rarity ${rarityClass[card.rarity] || ''}">${card.rarity}</span>
        </div>
      </div>
    `;
    cardDiv.onclick = () => showCardDetail(card);
    cardsGrid.appendChild(cardDiv);
  });
  cardsCount.textContent = cards.length;
} 