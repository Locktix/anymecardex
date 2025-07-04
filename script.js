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

// Gestion de la collection avec cookies
let userCollection = new Set();

// Fonctions pour gérer les cookies
function saveCollection() {
  const collectionArray = Array.from(userCollection);
  document.cookie = `anymecardex_collection=${JSON.stringify(collectionArray)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function loadCollection() {
  const cookies = document.cookie.split(';');
  const collectionCookie = cookies.find(cookie => cookie.trim().startsWith('anymecardex_collection='));
  if (collectionCookie) {
    try {
      const collectionData = JSON.parse(collectionCookie.split('=')[1]);
      userCollection = new Set(collectionData);
    } catch (e) {
      console.log('Erreur lors du chargement de la collection:', e);
      userCollection = new Set();
    }
  }
}

function toggleCard(cardName, event) {
  event.stopPropagation(); // Empêche l'ouverture du modal
  if (userCollection.has(cardName)) {
    userCollection.delete(cardName);
  } else {
    userCollection.add(cardName);
  }
  saveCollection();
  updateCollectionStats();
  
  // Mettre à jour seulement la carte concernée
  updateSingleCard(cardName);
}

function updateSingleCard(cardName) {
  // Trouver la carte dans le DOM
  const cardElement = document.querySelector(`[data-card-name="${cardName}"]`);
  if (cardElement) {
    const isOwned = userCollection.has(cardName);
    
    // Mettre à jour la classe CSS
    if (isOwned) {
      cardElement.classList.add('card-owned');
    } else {
      cardElement.classList.remove('card-owned');
    }
    
    // Mettre à jour la case à cocher
    const checkbox = cardElement.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = isOwned;
    }
  }
}

function updateCollectionStats() {
  const totalCards = cardsData.length;
  const ownedCards = userCollection.size;
  const percentage = Math.round((ownedCards / totalCards) * 100);
  
  // Mise à jour du compteur dans le header
  const collectionStats = document.getElementById('collectionStats');
  if (collectionStats) {
    collectionStats.innerHTML = `
      <div class="collection-info">
        <span class="collection-count">${ownedCards}/${totalCards}</span>
        <span class="collection-percentage">(${percentage}%)</span>
      </div>
    `;
  }
}

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
const ownedFilter = document.getElementById('ownedFilter');

function filterAndRender() {
  let filtered = cardsData.filter(card => {
    const search = searchInput.value.toLowerCase();
    const matchName = card.name.toLowerCase().includes(search);
    const matchEdition = !editionFilter.value || card.edition === editionFilter.value;
    const matchRarity = !rarityFilter.value || card.rarity === rarityFilter.value;
    // Filtre d'affichage (ownedFilter)
    let matchOwned = true;
    if (ownedFilter.value === 'owned') {
      matchOwned = userCollection.has(card.name);
    } else if (ownedFilter.value === 'missing') {
      matchOwned = !userCollection.has(card.name);
    }
    return matchName && matchEdition && matchRarity && matchOwned;
  });
  // Tri
  if (sortBy.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === 'rarity') {
    // Tri personnalisé par rareté
    const rarityOrder = [
      'Common',
      'Rare',
      'Double Rare',
      'Ultra Rare',
      'Amazing Rare'
    ];
    filtered.sort((a, b) => {
      const aIndex = rarityOrder.indexOf(a.rarity);
      const bIndex = rarityOrder.indexOf(b.rarity);
      if (aIndex === bIndex) {
        return a.name.localeCompare(b.name);
      }
      return aIndex - bIndex;
    });
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
ownedFilter.addEventListener('change', filterAndRender);

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
  loadCollection(); // Charger la collection depuis les cookies
  updateCollectionStats(); // Mettre à jour les statistiques
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

// Amélioration du rendu des cartes avec gestion d'erreur, collection et lazy loading
function renderCards(cards) {
  cardsGrid.innerHTML = '';
  if (cards.length === 0) {
    cardsGrid.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><h3>Aucune carte trouvée</h3><p>Essayez d'autres filtres ou une autre recherche.</p></div>`;
    cardsCount.textContent = 0;
    return;
  }
  
  // Rendu par batch pour améliorer les performances
  const batchSize = 10;
  let currentIndex = 0;
  
  function renderBatch() {
    const endIndex = Math.min(currentIndex + batchSize, cards.length);
    
    for (let i = currentIndex; i < endIndex; i++) {
      const card = cards[i];
      const isOwned = userCollection.has(card.name);
      const cardDiv = document.createElement('div');
      cardDiv.className = `card ${isOwned ? 'card-owned' : ''}`;
      cardDiv.setAttribute('data-card-name', card.name);
      cardDiv.innerHTML = `
        <div class="card-checkbox" onclick="event.stopPropagation();">
          <input type="checkbox" id="check-${card.name.replace(/\s+/g, '-')}" 
                 ${isOwned ? 'checked' : ''} 
                 onchange="toggleCard('${card.name}', event)">
          <label for="check-${card.name.replace(/\s+/g, '-')}"></label>
        </div>
        <div class="card-image">
          <img data-src="${card.image}" alt="${card.name}" 
               class="lazy-image" 
               loading="lazy"
               onerror="handleImageError(this)">
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
    }
    
    currentIndex = endIndex;
    cardsCount.textContent = cards.length;
    
    // Continuer le rendu par batch si nécessaire
    if (currentIndex < cards.length) {
      requestAnimationFrame(renderBatch);
    } else {
      // Charger les images lazy après le rendu complet
      loadLazyImages();
    }
  }
  
  renderBatch();
}

// Lazy loading des images
function loadLazyImages() {
  const lazyImages = document.querySelectorAll('.lazy-image');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.onload = function() {
          img.classList.add('loaded');
        };
        img.src = img.dataset.src;
        img.classList.remove('lazy-image');
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
} 